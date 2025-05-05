"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ClientsSliderProps {
  images: string[];
}

export default function ClientsSlider({ images }: ClientsSliderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Настройки сетки - адаптивные в зависимости от размера экрана
  const [columns, setColumns] = useState(6); // По умолчанию 6 логотипов по горизонтали
  const [rows, setRows] = useState(4); // По умолчанию 4 логотипа по вертикали

  // Определяем размер сетки в зависимости от ширины экрана
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile) {
        setColumns(3); // 3 логотипа по горизонтали на мобильных
        setRows(6); // 6 логотипов по вертикали на мобильных
      } else {
        setColumns(6); // 6 логотипов по горизонтали на десктопах
        setRows(4); // 4 логотипа по вертикали на десктопах
      }
    };

    handleResize(); // Вызываем сразу для инициализации
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Вычисляем количество логотипов на странице
  const logosPerPage = columns * rows;

  // Убедимся, что у нас достаточно логотипов для заполнения всех слайдов
  // Если логотипов недостаточно, будем повторять имеющиеся
  const ensureEnoughLogos = () => {
    if (images.length === 0) return [];

    let result = [...images];
    // Вычисляем, сколько всего логотипов нам нужно для заполнения всех слайдов
    const totalNeeded = Math.ceil(images.length / logosPerPage) * logosPerPage;

    // Если логотипов недостаточно, дублируем их
    while (result.length < totalNeeded) {
      // Добавляем логотипы из начала массива, пока не заполним все слайды
      result = [
        ...result,
        ...images.slice(
          0,
          Math.min(images.length, totalNeeded - result.length)
        ),
      ];
    }

    return result;
  };

  // Получаем расширенный массив логотипов
  const displayImages = ensureEnoughLogos();

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(displayImages.length / logosPerPage);

  // При изменении размера сетки, сбрасываем текущую страницу
  useEffect(() => {
    setCurrentPage(0);
  }, [columns, rows]);

  // Функция для перехода к конкретной странице
  const goToPage = (pageIndex: number) => {
    if (pageIndex < 0 || pageIndex >= totalPages) return;

    setIsTransitioning(true);
    setCurrentPage(pageIndex);
  };

  // Функция для перехода к следующей странице
  const nextPage = () => {
    goToPage((currentPage + 1) % totalPages);
  };

  // Функция для перехода к предыдущей странице
  const prevPage = () => {
    goToPage(currentPage === 0 ? totalPages - 1 : currentPage - 1);
  };

  // Обработка окончания анимации перехода
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Автоматическая прокрутка слайдера
  useEffect(() => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }

    timeoutRef.current = setInterval(() => {
      nextPage();
    }, 7000); // Увеличил время до 7 секунд, чтобы пользователи успели рассмотреть все логотипы

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [currentPage]);

  // Получаем логотипы для текущей страницы
  const getCurrentPageLogos = () => {
    const startIndex = currentPage * logosPerPage;
    return displayImages.slice(startIndex, startIndex + logosPerPage);
  };

  // Создаем сетку из логотипов
  const renderLogoGrid = () => {
    const currentLogos = getCurrentPageLogos();

    // Создаем массив строк
    const rowsArray = [];
    for (let i = 0; i < rows; i++) {
      // Для каждой строки берем нужное количество логотипов
      const rowLogos = currentLogos.slice(i * columns, (i + 1) * columns);
      rowsArray.push(
        <div
          key={`row-${i}`}
          className="flex justify-center mb-6 md:mb-8 w-full"
        >
          {rowLogos.map((src, index) => (
            <div
              key={`logo-${i * columns + index}`}
              className="flex-1 flex items-center justify-center"
              style={{ maxWidth: `${100 / columns}%` }}
            >
              <div className="w-full flex justify-center">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Клиент ${i * columns + index + 1}`}
                  width={150}
                  height={100}
                  className={`object-contain transition-all duration-300 hover:scale-110 ${
                    isMobile
                      ? "h-12 max-w-[95%]"
                      : "h-16 sm:h-20 md:h-24 max-w-[90%]"
                  }`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      );
    }

    return rowsArray;
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto overflow-hidden">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center">
          Клиенты
        </h2>

        <div className="relative mx-auto max-w-full">
          {/* Слайдер */}
          <div className="relative px-6 sm:px-8 md:px-16">
            {/* Left navigation arrow */}
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1 sm:p-2"
              aria-label="Предыдущая страница"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
            </button>

            <div
              ref={sliderRef}
              className="overflow-hidden transition-all duration-500 mx-auto"
              onTransitionEnd={handleTransitionEnd}
            >
              <div
                className={`${
                  isTransitioning ? "opacity-70" : "opacity-100"
                } transition-opacity duration-300`}
              >
                {renderLogoGrid()}
              </div>
            </div>

            {/* Right navigation arrow */}
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1 sm:p-2"
              aria-label="Следующая страница"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
            </button>
          </div>

          {/* Dot navigation */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-4 md:mt-6 gap-1 md:gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={`dot-${i}`}
                  className={`h-1.5 md:h-2 w-1.5 md:w-2 rounded-full transition-all ${
                    currentPage === i ? "bg-blue-600 w-3 md:w-4" : "bg-gray-300"
                  }`}
                  onClick={() => goToPage(i)}
                  aria-label={`Перейти на страницу ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
