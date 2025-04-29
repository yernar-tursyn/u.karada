"use client";

import { useState } from "react";

export default function PricingPlans() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-4 xs:py-6 sm:py-8 md:py-10 lg:py-16 bg-white">
      <div className="container mx-auto px-2 xs:px-3 sm:px-4">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          Тарифы
        </h2>

        <div className="max-w-[280px] xs:max-w-[340px] sm:max-w-[480px] md:max-w-3xl lg:max-w-4xl mx-auto grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Базовый тариф */}
          <div
            className="border border-gray-200 rounded-lg overflow-hidden relative transition-all duration-500"
            style={{
              transform:
                hoveredCard === 0 ? "translateY(-5px)" : "translateY(0)",
              boxShadow:
                hoveredCard === 0
                  ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  : "none",
            }}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 text-center cursor-pointer">
              <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                Базовый
              </h3>

              <div
                className="mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8 transition-all duration-500"
                style={{
                  transform: hoveredCard === 0 ? "scale(1.05)" : "scale(1)",
                }}
              >
                <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
                  10 000
                </p>
                <p className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-base text-gray-500">
                  ₸/мес.
                </p>
              </div>

              <div className="space-y-1 xs:space-y-1.5 sm:space-y-2 text-center">
                <p className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-base">
                  AI тренер
                </p>
                <p className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-base">
                  3 курса
                </p>
              </div>
            </div>

            {/* Анимированная рамка */}
            <div
              className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-500 pointer-events-none"
              style={{
                borderColor:
                  hoveredCard === 0 ? "rgba(59, 130, 246, 0.5)" : "transparent",
                padding: hoveredCard === 0 ? "4px" : "0px",
                top: hoveredCard === 0 ? "-4px" : "0px",
                left: hoveredCard === 0 ? "-4px" : "0px",
                right: hoveredCard === 0 ? "-4px" : "0px",
                bottom: hoveredCard === 0 ? "-4px" : "0px",
              }}
            ></div>

            {/* Анимированные частицы */}
            <div
              className="absolute top-0 right-0 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-blue-500/10 transition-all duration-700"
              style={{
                transform:
                  hoveredCard === 0
                    ? "scale(1) translate(0, 0)"
                    : "scale(0) translate(50%, -50%)",
                opacity: hoveredCard === 0 ? 1 : 0,
              }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-blue-500/5 transition-all duration-700 delay-100"
              style={{
                transform:
                  hoveredCard === 0
                    ? "scale(1) translate(0, 0)"
                    : "scale(0) translate(-50%, 50%)",
                opacity: hoveredCard === 0 ? 1 : 0,
              }}
            ></div>
          </div>

          {/* Оптимальный тариф */}
          <div
            className="border border-gray-200 rounded-lg overflow-hidden relative transition-all duration-500"
            style={{
              transform:
                hoveredCard === 1 ? "translateY(-5px)" : "translateY(0)",
              boxShadow:
                hoveredCard === 1
                  ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  : "none",
            }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 text-center cursor-pointer">
              <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                Оптимальный
              </h3>

              <div
                className="mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8 transition-all duration-500"
                style={{
                  transform: hoveredCard === 1 ? "scale(1.05)" : "scale(1)",
                }}
              >
                <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
                  15 000
                </p>
                <p className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-base text-gray-500">
                  ₸/мес.
                </p>
              </div>

              <div className="space-y-1 xs:space-y-1.5 sm:space-y-2 text-center">
                <p className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-base">
                  AI тренер
                </p>
                <p className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-base">
                  6 курсов
                </p>
              </div>
            </div>

            {/* Анимированная рамка */}
            <div
              className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-500 pointer-events-none"
              style={{
                borderColor:
                  hoveredCard === 1 ? "rgba(59, 130, 246, 0.5)" : "transparent",
                padding: hoveredCard === 1 ? "4px" : "0px",
                top: hoveredCard === 1 ? "-4px" : "0px",
                left: hoveredCard === 1 ? "-4px" : "0px",
                right: hoveredCard === 1 ? "-4px" : "0px",
                bottom: hoveredCard === 1 ? "-4px" : "0px",
              }}
            ></div>

            {/* Анимированные частицы */}
            <div
              className="absolute top-0 right-0 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-blue-500/10 transition-all duration-700"
              style={{
                transform:
                  hoveredCard === 1
                    ? "scale(1) translate(0, 0)"
                    : "scale(0) translate(50%, -50%)",
                opacity: hoveredCard === 1 ? 1 : 0,
              }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-blue-500/5 transition-all duration-700 delay-100"
              style={{
                transform:
                  hoveredCard === 1
                    ? "scale(1) translate(0, 0)"
                    : "scale(0) translate(-50%, 50%)",
                opacity: hoveredCard === 1 ? 1 : 0,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
