"use client";

import { useState } from "react";

export default function PricingPlans() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">
          Тарифы
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Базовый тариф */}
          <div
            className="border border-gray-200 rounded-lg overflow-hidden relative transition-all duration-500 cursor-pointer"
            style={{
              transform:
                hoveredCard === 0 ? "translateY(-10px)" : "translateY(0)",
              boxShadow:
                hoveredCard === 0
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  : "none",
            }}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-8">
                Базовый
              </h3>

              <div
                className="mb-4 sm:mb-8 transition-all duration-500"
                style={{
                  transform: hoveredCard === 0 ? "scale(1.05)" : "scale(1)",
                }}
              >
                <p className="text-3xl sm:text-5xl font-bold">10 000</p>
                <p className="text-gray-500">₸/мес.</p>
              </div>

              <div className="space-y-2 text-center">
                <p>AI тренер</p>
                <p>3 курса</p>
              </div>
            </div>

            {/* Анимированная рамка */}
            <div
              className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-500 pointer-events-none"
              style={{
                borderColor:
                  hoveredCard === 0 ? "rgba(59, 130, 246, 0.5)" : "transparent",
                padding: hoveredCard === 0 ? "8px" : "0px",
                top: hoveredCard === 0 ? "-8px" : "0px",
                left: hoveredCard === 0 ? "-8px" : "0px",
                right: hoveredCard === 0 ? "-8px" : "0px",
                bottom: hoveredCard === 0 ? "-8px" : "0px",
              }}
            ></div>

            {/* Анимированные частицы */}
            <div
              className="absolute top-0 right-0 w-20 h-20 rounded-full bg-blue-500/10 transition-all duration-700"
              style={{
                transform:
                  hoveredCard === 0
                    ? "scale(1) translate(0, 0)"
                    : "scale(0) translate(50%, -50%)",
                opacity: hoveredCard === 0 ? 1 : 0,
              }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-blue-500/5 transition-all duration-700 delay-100"
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
            className="border border-orange-400 rounded-lg overflow-hidden relative transition-all duration-500 cursor-pointer"
            style={{
              transform:
                hoveredCard === 1 ? "translateY(-10px)" : "translateY(0)",
              boxShadow:
                hoveredCard === 1
                  ? "0 20px 25px -5px rgba(249, 115, 22, 0.2), 0 10px 10px -5px rgba(249, 115, 22, 0.1)"
                  : "none",
            }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="bg-orange-400 text-white p-4 sm:p-6 text-center relative overflow-hidden">
              <h3 className="text-lg sm:text-xl font-medium relative z-10">
                Оптимальный
              </h3>

              {/* Анимированные волны в шапке */}
              <div
                className="absolute inset-0 bg-orange-500/30 transition-all duration-700"
                style={{
                  clipPath:
                    hoveredCard === 1
                      ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                      : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                }}
              ></div>
            </div>
            <div className="p-4 sm:p-6 text-center">
              <div
                className="mb-4 sm:mb-8 mt-2 transition-all duration-500"
                style={{
                  transform: hoveredCard === 1 ? "scale(1.05)" : "scale(1)",
                }}
              >
                <p className="text-3xl sm:text-5xl font-bold">15 000</p>
                <p className="text-gray-500">₸/мес.</p>
              </div>

              <div className="space-y-2 text-center">
                <p>AI тренер</p>
                <p>6 курсов</p>
              </div>
            </div>

            {/* Анимированная рамка */}
            <div
              className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-500 pointer-events-none"
              style={{
                borderColor:
                  hoveredCard === 1 ? "rgba(249, 115, 22, 0.7)" : "transparent",
                padding: hoveredCard === 1 ? "8px" : "0px",
                top: hoveredCard === 1 ? "-8px" : "0px",
                left: hoveredCard === 1 ? "-8px" : "0px",
                right: hoveredCard === 1 ? "-8px" : "0px",
                bottom: hoveredCard === 1 ? "-8px" : "0px",
              }}
            ></div>

            {/* Анимированные частицы */}
            <div
              className="absolute top-1/2 right-0 w-24 h-24 rounded-full bg-orange-500/10 transition-all duration-700"
              style={{
                transform:
                  hoveredCard === 1
                    ? "scale(1) translate(0, -50%)"
                    : "scale(0) translate(50%, -50%)",
                opacity: hoveredCard === 1 ? 1 : 0,
              }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-orange-500/5 transition-all duration-700 delay-100"
              style={{
                transform:
                  hoveredCard === 1
                    ? "scale(1) translate(0, 0)"
                    : "scale(0) translate(-50%, 50%)",
                opacity: hoveredCard === 1 ? 1 : 0,
              }}
            ></div>
          </div>

          {/* Профессиональный тариф */}
          <div
            className="border border-gray-200 rounded-lg overflow-hidden relative transition-all duration-500 cursor-pointer"
            style={{
              transform:
                hoveredCard === 2 ? "translateY(-10px)" : "translateY(0)",
              boxShadow:
                hoveredCard === 2
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  : "none",
            }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-8">
                Профессиональный
              </h3>

              <div
                className="mb-4 sm:mb-8 transition-all duration-500"
                style={{
                  transform: hoveredCard === 2 ? "scale(1.05)" : "scale(1)",
                }}
              >
                <p className="text-3xl sm:text-5xl font-bold">20 000</p>
                <p className="text-gray-500">₸/мес.</p>
              </div>

              <div className="space-y-2 text-center">
                <p>AI тренер</p>
                <p>12 курсов</p>
              </div>
            </div>

            {/* Анимированная рамка */}
            <div
              className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-500 pointer-events-none"
              style={{
                borderColor:
                  hoveredCard === 2
                    ? "rgba(107, 114, 128, 0.5)"
                    : "transparent",
                padding: hoveredCard === 2 ? "8px" : "0px",
                top: hoveredCard === 2 ? "-8px" : "0px",
                left: hoveredCard === 2 ? "-8px" : "0px",
                right: hoveredCard === 2 ? "-8px" : "0px",
                bottom: hoveredCard === 2 ? "-8px" : "0px",
              }}
            ></div>

            {/* Анимированные частицы */}
            <div
              className="absolute top-0 right-0 w-20 h-20 rounded-full bg-gray-500/10 transition-all duration-700"
              style={{
                transform:
                  hoveredCard === 2
                    ? "scale(1) translate(0, 0)"
                    : "scale(0) translate(50%, -50%)",
                opacity: hoveredCard === 2 ? 1 : 0,
              }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gray-500/5 transition-all duration-700 delay-100"
              style={{
                transform:
                  hoveredCard === 2
                    ? "scale(1) translate(0, 0)"
                    : "scale(0) translate(-50%, 50%)",
                opacity: hoveredCard === 2 ? 1 : 0,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
