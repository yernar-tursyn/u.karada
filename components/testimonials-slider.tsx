"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Типы для отзывов
interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
}

// Данные отзывов
const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "«Платформа удобная и понятная: видеоуроки, тесты, практика. У менеджеров, которые обучались регулярно, продажи сразу пошли вверх. Отличный инструмент для обучения сотрудников!»",
    author: "Константин Егоров",
    position: "Компания «MEESENBURG»",
  },
  {
    id: 2,
    text: "«Юсуп передает коротко в сжатом виде практические инструменты - бери и применяй! Он не только эксперт, но и тонкий психолог!»",
    author: "Ахматжан Халилов",
    position: "Генеральный директор БИАСТ, Центр сендвич-панелей",
  },
  {
    id: 3,
    text: "«Мне очень понравилась подача и энергетика — всё практично, легко для восприятия и на высшем уровне. Я решила учиться продажам у лучших, и Юсуп полностью оправдал ожидания!»",
    author: "Назгул Салимова",
    position: "Собственница N.B.Group Finance",
  },
  {
    id: 4,
    text: "«Раньше я посещал другие мероприятия по продажам, но они не так заходили. А сегодня ожидания даже превзошли реальность: я думал, что будет больше воды, но всё оказалось иначе!»",
    author: "Алмас Кокумбаев",
    position: "Директор отдела продаж 1FIT",
  },
  {
    id: 5,
    text: "«Больше всего мне нравится, что здесь нет воды — только самая ценная и нужная информация. Всё подано так, что слушать совершенно не скучно!»",
    author: "Евгений Матвеев",
    position: "Коммерческий директор строительной компании SDT Group",
  },
  {
    id: 6,
    text: "«В продажах часто проблема не в недостатке знаний, а в том, чтобы наконец начать действовать. Это обучение стало для меня сильным стимулом и мотивацией подняться и внедрить полученные инструменты!»",
    author: "Яна Ульман",
    position: 'РОП "Freedom Finance Insurance"',
  },
  {
    id: 7,
    text: "«Моя точка А: я не дожимал клиентов и не знал, что с этим делать. Моя точка Б: Я понял, как дожимать, как это делать правильно и уже перестал сливать клиентов. Перевыполнили планы продаж. Сделали 100 продаж со средним чеком в 3,5 миллиона тенге!»",
    author: "Фарух Тухтаев",
    position: "Бизнес университет при КазНУ",
  },
  {
    id: 8,
    text: "«Зарплата с 200 тыс стала 700 тыс! В этом есть частичка Вашего труда!»",
    author: "Айдын Оразбаев",
    position: "Предприниматель",
  },
  {
    id: 9,
    text: "«Крутые, эффективные инструменты. Рекомендую всем, кто хочет зарабатывать больше!»",
    author: "Бекбол Қаербеков",
    position: "Предприниматель",
  },
];

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Определяем только мобильный режим для скролла, но всегда показываем 3 карточки
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Функции для навигации по слайдеру
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  // Обработчики для скролла на мобильных устройствах
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile || !scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    if (!isMobile) return;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current || !isMobile) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Скорость скролла
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile || !scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current || !isMobile) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Скорость скролла
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    setIsDragging(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">
        {/* Кнопки навигации только для десктопа */}
        {!isMobile && (
          <div className="flex gap-1 xs:gap-1.5 sm:gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
              onClick={prevSlide}
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
              onClick={nextSlide}
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </Button>
          </div>
        )}
      </div>

      {/* Десктопный слайдер */}
      {!isMobile && (
        <div ref={sliderRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6"
            style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="flex-shrink-0 w-[calc(33.333%-8px)] xs:w-[calc(33.333%-12px)] sm:w-[calc(33.333%-16px)] md:w-[calc(33.333%-20px)] lg:w-[calc(33.333%-24px)] bg-white shadow-md rounded-lg p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col"
              >
                <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-3.5 lg:space-y-4">
                  <p className="text-gray-700 italic text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-base line-clamp-6 xs:line-clamp-6 sm:line-clamp-5 md:line-clamp-none">
                    {testimonial.text}
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base">
                      {testimonial.author}
                    </h4>
                    <p className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Мобильный скролл с 3 карточками */}
      {isMobile && (
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 hide-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-2 w-max">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="flex-shrink-0 w-[calc(100vw/3-16px)] bg-white shadow-md rounded-lg p-2 flex flex-col"
              >
                <div className="space-y-1">
                  <p className="text-gray-700 italic text-[7px] line-clamp-6">
                    {testimonial.text}
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[8px]">
                      {testimonial.author}
                    </h4>
                    <p className="text-[6px] text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Индикаторы слайдов только для десктопа */}
      {!isMobile && (
        <div className="flex justify-center mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6 gap-0.5 xs:gap-0.5 sm:gap-1">
          {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
            <button
              key={index}
              className={`w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors cursor-pointer ${
                index === currentSlide
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE и Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari и Opera */
        }
      `}</style>
    </div>
  );
}
