"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ClientsSliderProps {
  images: string[];
}

export default function ClientsSlider({ images }: ClientsSliderProps) {
  const [firstRowImages, setFirstRowImages] = useState<string[]>([]);
  const [secondRowImages, setSecondRowImages] = useState<string[]>([]);
  const [thirdRowImages, setThirdRowImages] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Оптимизируем отображение большого количества изображений
  useEffect(() => {
    if (images.length === 0) return;

    // Перемешиваем массив изображений
    const shuffled = [...images].sort(() => 0.5 - Math.random());

    // Разделяем изображения на три группы для трех рядов
    // Используем не более 50 изображений в каждом ряду для производительности
    const firstBatch = shuffled.slice(0, 50);
    const secondBatch = shuffled.slice(50, 100);
    const thirdBatch = shuffled.slice(100, 150);

    // Дублируем изображения для создания эффекта бесконечной прокрутки
    setFirstRowImages([...firstBatch, ...firstBatch]);
    setSecondRowImages([...secondBatch, ...secondBatch]);
    setThirdRowImages([...thirdBatch, ...thirdBatch]);
  }, [images]);

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
          Нам доверяют более 200 компаний
        </h2>

        <div className="overflow-hidden">
          {/* Первый ряд логотипов - движется влево */}
          <div className="flex overflow-hidden">
            <div
              ref={containerRef}
              className="flex animate-marquee will-change-transform"
            >
              {firstRowImages.map((src, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="flex-shrink-0 w-[120px] mx-2 flex items-center justify-center group"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Клиент ${index + 1}`}
                    width={120}
                    height={80}
                    className="object-contain h-16 max-w-full transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Второй ряд логотипов - движется вправо */}
          <div className="flex overflow-hidden mt-8">
            <div className="flex animate-marquee-reverse will-change-transform">
              {secondRowImages.map((src, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="flex-shrink-0 w-[120px] mx-2 flex items-center justify-center group"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Клиент ${index + 1}`}
                    width={120}
                    height={80}
                    className="object-contain h-16 max-w-full transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Третий ряд логотипов - движется влево (медленнее) */}
          <div className="flex overflow-hidden mt-8">
            <div className="flex animate-marquee-slow will-change-transform">
              {thirdRowImages.map((src, index) => (
                <div
                  key={`logo-3-${index}`}
                  className="flex-shrink-0 w-[120px] mx-2 flex items-center justify-center group"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Клиент ${index + 1}`}
                    width={120}
                    height={80}
                    className="object-contain h-16 max-w-full transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
