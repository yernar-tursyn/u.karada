"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";

interface ClientsSliderProps {
  images: string[];
}

export default function ClientsSlider({ images }: ClientsSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Ограничиваем количество изображений для лучшей производительности
  const optimizedImages = useMemo(() => {
    // Перемешиваем массив изображений
    const shuffled = [...images].sort(() => 0.5 - Math.random());

    // Ограничиваем количество изображений в каждом ряду
    const maxImagesPerRow = 20;
    const firstBatch = shuffled.slice(0, maxImagesPerRow);
    const secondBatch = shuffled.slice(maxImagesPerRow, maxImagesPerRow * 2);
    const thirdBatch = shuffled.slice(maxImagesPerRow * 2, maxImagesPerRow * 3);

    return {
      firstRow: [...firstBatch, ...firstBatch],
      secondRow: [...secondBatch, ...secondBatch],
      thirdRow: [...thirdBatch, ...thirdBatch],
    };
  }, [images]);

  // Используем IntersectionObserver для оптимизации производительности
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Останавливаем анимацию, когда слайдер не виден
          if (entry.target instanceof HTMLElement) {
            const animatedElements = entry.target.querySelectorAll(
              ".animate-marquee, .animate-marquee-reverse, .animate-marquee-slow"
            );

            animatedElements.forEach((el) => {
              if (el instanceof HTMLElement) {
                if (!entry.isIntersecting) {
                  el.style.animationPlayState = "paused";
                } else {
                  el.style.animationPlayState = "running";
                }
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-12 md:py-16" ref={containerRef}>
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
          Портфолио
        </h2>

        <div className="overflow-hidden">
          {/* Первый ряд логотипов - движется влево */}
          <div className="flex overflow-hidden">
            <div
              className="flex animate-marquee will-change-transform"
              style={{ transform: "translateZ(0)" }}
            >
              {optimizedImages.firstRow.map((src, index) => (
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
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Второй ряд логотипов - движется вправо */}
          <div className="flex overflow-hidden mt-8">
            <div
              className="flex animate-marquee-reverse will-change-transform"
              style={{ transform: "translateZ(0)" }}
            >
              {optimizedImages.secondRow.map((src, index) => (
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
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Третий ряд логотипов - движется влево (медленнее) */}
          <div className="flex overflow-hidden mt-8">
            <div
              className="flex animate-marquee-slow will-change-transform"
              style={{ transform: "translateZ(0)" }}
            >
              {optimizedImages.thirdRow.map((src, index) => (
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
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes optimizedMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes optimizedMarqueeReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: optimizedMarquee 40s linear infinite;
          min-width: 100%;
        }

        .animate-marquee-reverse {
          animation: optimizedMarqueeReverse 40s linear infinite;
          min-width: 100%;
        }

        .animate-marquee-slow {
          animation: optimizedMarquee 50s linear infinite;
          min-width: 100%;
        }
      `}</style>
    </section>
  );
}
