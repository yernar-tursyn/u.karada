"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClientsSliderProps {
  images: string[];
}

export default function ClientsSlider({ images }: ClientsSliderProps) {
  // Ограничиваем количество изображений для лучшей производительности
  const displayImages = images.slice(0, 20);

  const [slidesToShow, setSlidesToShow] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0); // Отдельное состояние для активного индикатора
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Создаем массив с дублированными элементами для бесконечной прокрутки
  const clonedImages = useCallback(() => {
    // Дублируем последние slidesToShow элементов в начало и первые slidesToShow элементов в конец
    const lastItems = displayImages.slice(-slidesToShow);
    const firstItems = displayImages.slice(0, slidesToShow);
    return [...lastItems, ...displayImages, ...firstItems];
  }, [displayImages, slidesToShow]);

  const totalSlides = displayImages.length;

  // Определяем количество отображаемых слайдов в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlidesToShow(3); // Минимум 3 логотипа даже на самых маленьких экранах
      } else if (window.innerWidth < 640) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(4);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Инициализация слайдера - начинаем с клонированных элементов
  useEffect(() => {
    setCurrentSlide(slidesToShow);
    setActiveIndex(0);
  }, [slidesToShow]);

  // Обновляем активный индикатор при изменении текущего слайда
  useEffect(() => {
    // Вычисляем реальный индекс с учетом клонированных элементов
    let realIndex = currentSlide - slidesToShow;

    // Корректируем индекс для корректной работы в обоих направлениях
    if (realIndex < 0) {
      realIndex = totalSlides + realIndex;
    } else if (realIndex >= totalSlides) {
      realIndex = realIndex % totalSlides;
    }

    setActiveIndex(realIndex);
  }, [currentSlide, slidesToShow, totalSlides]);

  // Функция для обработки перехода к оригинальным слайдам после достижения клонов
  const handleTransitionEnd = () => {
    if (isTransitioning) {
      setIsTransitioning(false);

      // Если достигли клонов в конце, перейти к оригинальным слайдам в начале
      if (currentSlide >= totalSlides + slidesToShow) {
        setCurrentSlide(slidesToShow);
      }

      // Если достигли клонов в начале, перейти к оригинальным слайдам в конце
      if (currentSlide < slidesToShow) {
        setCurrentSlide(totalSlides + slidesToShow - 1);
      }
    }
  };

  // Функции для навигации по слайдеру
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [isTransitioning]);

  // Автоматическая прокрутка слайдера
  useEffect(() => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }

    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [nextSlide]);

  // Вычисляем стиль трансформации для слайдера
  const getTransformStyle = () => {
    const slideWidth = 100 / slidesToShow;
    const translateX = currentSlide * slideWidth;
    return {
      transform: `translateX(-${translateX}%)`,
      transition: isTransitioning ? "transform 500ms ease" : "none",
    };
  };

  // Функция для перехода к конкретному слайду
  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index + slidesToShow);
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
          Клиенты
        </h2>

        <div className="relative px-6 sm:px-10">
          {/* Кнопки навигации */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow-md hover:bg-gray-50 w-8 h-8 sm:w-10 sm:h-10"
            onClick={prevSlide}
            aria-label="Предыдущие клиенты"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow-md hover:bg-gray-50 w-8 h-8 sm:w-10 sm:h-10"
            onClick={nextSlide}
            aria-label="Следующие клиенты"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          {/* Слайдер */}
          <div ref={sliderRef} className="overflow-hidden">
            <div
              className="flex"
              style={getTransformStyle()}
              onTransitionEnd={handleTransitionEnd}
            >
              {clonedImages().map((src, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 px-1 sm:px-2 md:px-3 flex items-center justify-center"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-16 sm:h-24 md:h-32 lg:h-40 flex items-center justify-center">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Клиент ${index + 1}`}
                      width={200}
                      height={120}
                      className="object-contain max-h-12 sm:max-h-16 md:max-h-24 lg:max-h-32 max-w-full transition-all duration-300 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Индикаторы слайдов */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 gap-1 sm:gap-2">
            {displayImages.map((_, index) => (
              <button
                key={`indicator-${index}`}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
