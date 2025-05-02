"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface CourseDetail {
  bulletPoints: string[];
}

interface CourseCard {
  id: number;
  title: string;
  description: string;
  color: string;
  details: CourseDetail;
}

export default function AnimatedStaticCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Определяем мобильное устройство
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Инициализация при первом рендере
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const courses: CourseCard[] = [
    {
      id: 1,
      title: "1. Основы продаж",
      description:
        "Фундамент мышления, мотивации и системного подхода к профессии.",
      color: "from-emerald-700/90 to-emerald-900/95",
      details: {
        bulletPoints: [
          "Как полюбить дорогие продажи",
          "Как стать профессионалом в продажах",
        ],
      },
    },
    {
      id: 2,
      title: "2. Психология покупателя",
      description: "Понимание и забота — основа успешных продаж.",
      color: "from-teal-600/90 to-teal-800/95",
      details: {
        bulletPoints: [
          "Как вызвать доверие любого клиента",
          "Как продавать ценность, а не скидку",
        ],
      },
    },
    {
      id: 3,
      title: "3. Эффективная система продаж",
      description: "Пошаговая система, которая ведёт клиента к сделке.",
      color: "from-purple-700/90 to-purple-900/95",
      details: {
        bulletPoints: [
          "Алгоритм дорогих продаж",
          "Ключевые этапы закрытия любых сделок",
        ],
      },
    },
    {
      id: 4,
      title: "4. Переговоры и закрытие сделки",
      description: "Проверенные скрипты и техника уверенного закрытия сделки.",
      color: "from-red-700/90 to-red-900/95",
      details: {
        bulletPoints: [
          "300+ приёмов закрытия любых возражений",
          "Правила закрытия любой сделки",
        ],
      },
    },
    {
      id: 5,
      title: "5. Входящие звонки",
      description:
        "Технология обработки входящих звонков с высокой конверсией.",
      color: "from-blue-700/90 to-blue-900/95",
      details: {
        bulletPoints: [
          "Мастерство телефонных переговоров",
          "Создание продающего скрипта",
        ],
      },
    },
    {
      id: 6,
      title: "6. Холодные звонки",
      description:
        "Эффективные приёмы холодного контакта и обработки возражений.",
      color: "from-indigo-700/90 to-indigo-900/95",
      details: {
        bulletPoints: [
          "1,000+ приёмов холодного звонка любым клиентам",
          "Продажа Блокиратору, ЛВР и ЛПР",
        ],
      },
    },
    {
      id: 7,
      title: "7. Поиск клиентов",
      description: "Построение клиентской базы для стабильных продаж.",
      color: "from-sky-600/90 to-sky-800/95",
      details: {
        bulletPoints: [
          "Эффективный поиск клиентов",
          "Наполнение «воронки» каждого продавца",
        ],
      },
    },
    {
      id: 8,
      title: "8. Дожим клиентов",
      description: "Работающие приёмы дожима и повторных продаж.",
      color: "from-slate-700/90 to-slate-900/95",
      details: {
        bulletPoints: [
          "1,000+ приёмов дожима любых клиентов",
          "Готовая программа дожима на 12 месяцев",
        ],
      },
    },
    {
      id: 9,
      title: "9. Супер сервис",
      description: "Как стать №1 для клиента — на всех этапах взаимодействия.",
      color: "from-gray-700/90 to-gray-900/95",
      details: {
        bulletPoints: [
          "Супер сервис и забота о клиенте",
          "Формирование лояльности клиентов",
        ],
      },
    },
    {
      id: 10,
      title: "10. Интернет лиды",
      description: "Закрытие заявок из интернета с высокой конверсией.",
      color: "from-amber-700/90 to-amber-900/95",
      details: {
        bulletPoints: [
          "Увеличение конверсии в 10Х раз",
          "Правила больших продаж интернет лидам",
        ],
      },
    },
    {
      id: 11,
      title: "11. Мотивированный Супер Продавец",
      description: "Вдохновляющие стратегии для продавцов, которые не сдаются.",
      color: "from-fuchsia-700/90 to-fuchsia-900/95",
      details: {
        bulletPoints: [
          "Супер мотивация на продажи",
          "10Х рост эффективности продавца!",
        ],
      },
    },
    {
      id: 12,
      title: "12. Коучинг отдела продаж",
      description: "Практический коучинг: от возражений до дожима.",
      color: "from-rose-700/90 to-rose-900/95",
      details: {
        bulletPoints: [
          "Лучшие техники переговоров и дожима",
          "Разбор возражений, кейсов и затыков",
        ],
      },
    },
    {
      id: 13,
      title: "13. Большие продажи",
      description: "Интенсив по мощным техникам продаж и достижению целей.",
      color: "from-green-700/90 to-green-900/95",
      details: {
        bulletPoints: [
          "Набор крутых инструментов для быстрого роста",
          "Пошаговая система, чтобы уверенно продавать на крупные чеки и достигать планов",
        ],
      },
    },
    {
      id: 14,
      title: '14. Тренинг "Дорогие продажи и Дожим"',
      description: "Запись мощного тренинга: техники, примеры, энергия вживую.",
      color: "from-orange-600/90 to-orange-800/95",
      details: {
        bulletPoints: [
          "ТОПовые инструменты дорогих продаж",
          "Алгоритм продаж и система дожима",
        ],
      },
    },
    {
      id: 15,
      title: "15. Мастер-классы и экспресс курсы",
      description: "Формула мышления, которая приводит к росту дохода.",
      color: "from-zinc-700/90 to-zinc-900/95",
      details: {
        bulletPoints: [
          "Техники переговоров и закрытия сделок",
          "Практические задания и инструменты",
        ],
      },
    },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5">
      {courses.map((course) => (
        <Card
          key={course.id}
          className="border border-gray-200 rounded-lg overflow-hidden relative cursor-pointer transition-all duration-700 h-[70px] xs:h-[85px] sm:h-[100px] md:h-[110px] lg:h-[120px]"
          onMouseEnter={() => !isMobile && setHoveredCard(course.id)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
          style={{
            transform:
              !isMobile && hoveredCard === course.id
                ? "translateY(-5px)"
                : "translateY(0)",
            boxShadow:
              !isMobile && hoveredCard === course.id
                ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                : "none",
          }}
        >
          {/* Обычное состояние - только заголовок и описание */}
          <div
            className="absolute inset-0 transition-opacity duration-300 flex flex-col justify-center"
            style={{
              opacity: !isMobile && hoveredCard === course.id ? 0 : 1,
              pointerEvents:
                !isMobile && hoveredCard === course.id ? "none" : "auto",
            }}
          >
            <CardHeader className="pb-0 pt-0 xs:pb-0 xs:pt-1 sm:pb-1 sm:pt-1 px-1 xs:px-2 sm:px-3 md:px-4">
              <CardTitle
                className="font-bold text-center"
                style={{ fontSize: "0.35rem" }}
              >
                <span className="text-[0.35rem] xs:text-[0.6rem] sm:text-xs md:text-sm">
                  {course.title}
                </span>
              </CardTitle>
            </CardHeader>
            {/* Описание отображается только на десктопе */}
            {!isMobile && (
              <CardContent className="pt-0 px-1 xs:px-2 sm:px-3 md:px-4">
                <p className="text-[0.3rem] xs:text-[0.5rem] sm:text-[0.6rem] md:text-xs line-clamp-2 text-center">
                  {course.description}
                </p>
              </CardContent>
            )}
          </div>

          {/* Состояние при наведении - только детали курса без заголовка (только для десктопа) */}
          {!isMobile && (
            <div
              className="absolute inset-0 bg-gray-700 flex flex-col justify-center text-white p-1 xs:p-2 sm:p-3 md:p-4 z-10 transition-opacity duration-700"
              style={{
                opacity: hoveredCard === course.id ? 1 : 0,
                pointerEvents: hoveredCard === course.id ? "auto" : "none",
              }}
            >
              <div className="animate-slide-up">
                <ul className="space-y-0 xs:space-y-0.5 sm:space-y-1">
                  {course.details.bulletPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-slide-right"
                      style={{ animationDelay: `${300 + index * 200}ms` }}
                    >
                      <span className="text-white mr-0.5 flex-shrink-0 text-[0.3rem] xs:text-[0.4rem] sm:text-[0.5rem] md:text-xs">
                        •
                      </span>
                      <p
                        className="text-white/90 line-clamp-2"
                        style={{ fontSize: "0.3rem" }}
                      >
                        <span className="text-[0.3rem] xs:text-[0.4rem] sm:text-[0.5rem] md:text-[0.65rem]">
                          {point}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Card>
      ))}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes pulseLight {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-in-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-in-out forwards;
        }

        .animate-slide-right {
          animation: slideRight 0.8s ease-in-out forwards;
        }

        .animate-pulse-light {
          animation: pulseLight 3s infinite;
        }
      `}</style>
    </div>
  );
}
