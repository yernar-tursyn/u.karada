"use client";

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
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Определяем количество видимых слайдов в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Функции для навигации по слайдеру
  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % (testimonials.length - visibleCount + 1)
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  // Вычисляем видимые отзывы
  const visibleTestimonials = testimonials.slice(
    currentSlide,
    currentSlide + visibleCount
  );

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full cursor-pointer"
            onClick={prevSlide}
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full cursor-pointer"
            onClick={nextSlide}
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div ref={sliderRef} className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-6"
          style={{ transform: `translateX(0)` }}
        >
          {visibleTestimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white shadow-md rounded-lg p-6 flex flex-col"
            >
              <div className="space-y-4">
                <p className="text-gray-700 italic">{testimonial.text}</p>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Индикаторы слайдов */}
      <div className="flex justify-center mt-6 gap-1">
        {Array.from({ length: testimonials.length - visibleCount + 1 }).map(
          (_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                index === currentSlide
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
}
