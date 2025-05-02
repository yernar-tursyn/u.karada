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
  const displayImages = images;

  const [slidesToShow, setSlidesToShow] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Настройки пагинации
  const itemsPerPage = 10; // Количество логотипов на одной "странице"
  const totalPages = Math.ceil(displayImages.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

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
  }, [slidesToShow]);

  // Обновляем текущую страницу при изменении текущего слайда
  useEffect(() => {
    // Вычисляем реальный индекс с учетом клонированных элементов
    let realIndex = currentSlide - slidesToShow;

    // Корректируем индекс для корректной работы в обоих направлениях
    if (realIndex < 0) {
      realIndex = totalSlides + realIndex;
    } else if (realIndex >= totalSlides) {
      realIndex = realIndex % totalSlides;
    }

    // Обновляем текущую страницу
    setCurrentPage(Math.floor(realIndex / itemsPerPage));
  }, [currentSlide, slidesToShow, totalSlides, itemsPerPage]);

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

  // Функция для перехода к конкретной странице
  const goToPage = (pageIndex: number) => {
    if (pageIndex < 0 || pageIndex >= totalPages) return;

    setIsTransitioning(true);
    // Переходим к первому слайду на выбранной странице
    const firstSlideInPage = pageIndex * itemsPerPage;
    setCurrentSlide(firstSlideInPage + slidesToShow);
  };

  // Функция для перехода к следующей странице
  const nextPage = () => {
    goToPage((currentPage + 1) % totalPages);
  };

  // Функция для перехода к предыдущей странице
  const prevPage = () => {
    goToPage(currentPage === 0 ? totalPages - 1 : currentPage - 1);
  };

  // Создаем массив страниц для пагинации с учетом текущей страницы
  const getPaginationItems = () => {
    // Если страниц мало, показываем все
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    // Иначе показываем текущую страницу и несколько соседних
    const items = [];

    // Всегда показываем первую страницу
    items.push(0);

    // Если текущая страница близка к началу
    if (currentPage <= 3) {
      items.push(1, 2, 3, 4, "...");
    }
    // Если текущая страница близка к концу
    else if (currentPage >= totalPages - 4) {
      items.push(
        "...",
        totalPages - 5,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2
      );
    }
    // Если текущая страница в середине
    else {
      items.push("...", currentPage - 1, currentPage, currentPage + 1, "...");
    }

    // Всегда показываем последнюю страницу
    items.push(totalPages - 1);

    return items;
  };
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
          Клиенты
        </h2>

        <div className="relative px-6 sm:px-10">
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

          {/* Улучшенная пагинация */}
          <div className="flex justify-center items-center mt-6 gap-1">
            {/* Кнопка "Предыдущая страница" */}
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 rounded-full"
              onClick={prevPage}
              disabled={totalPages <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Предыдущая страница</span>
            </Button>

            {/* Номера страниц */}
            <div className="flex items-center gap-1">
              {getPaginationItems().map((item, index) =>
                item === "..." ? (
                  <span key={`ellipsis-${index}`} className="px-1">
                    ...
                  </span>
                ) : (
                  <Button
                    key={`page-${item}`}
                    variant={currentPage === item ? "default" : "outline"}
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => goToPage(item as number)}
                  >
                    {(item as number) + 1}
                  </Button>
                )
              )}
            </div>

            {/* Кнопка "Следующая страница" */}
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 rounded-full"
              onClick={nextPage}
              disabled={totalPages <= 1}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Следующая страница</span>
            </Button>
          </div>

          {/* Информация о текущей странице */}
          <div className="text-center text-sm text-gray-500 mt-2">
            Страница {currentPage + 1} из {totalPages}
          </div>
        </div>
      </div>
    </section>
  );
}
