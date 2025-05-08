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
      id: 8,
      title: "Дожим клиентов",
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
      id: 4,
      title: "Переговоры и закрытие сделки",
      description: "Проверенные скрипты и техника уверенного закрытия сделки.",
      color: "from-red-700/90 to-red-900/95",
      details: {
        bulletPoints: [
          "1,000+ приёмов закрытия любых возражений",
          "Правила закрытия любой сделки",
        ],
      },
    },
    {
      id: 6,
      title: "Холодные звонки",
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
      id: 3,
      title: "Эффективная система продаж",
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
      id: 11,
      title: "Мотивированный Супер Продавец",
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
      id: 1,
      title: "Основы продаж",
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
      title: "Психология покупателя",
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
      id: 5,
      title: "Входящие звонки",
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
      id: 7,
      title: "Поиск клиентов",
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
      id: 9,
      title: "Супер сервис",
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
      title: "Интернет лиды",
      description: "Закрытие заявок из интернета с высокой конверсией.",
      color: "from-amber-700/90 to-amber-900/95",
      details: {
        bulletPoints: [
          "Увеличение конверсии в 10Х",
          "Правила больших продаж интернет лидам",
        ],
      },
    },
    {
      id: 12,
      title: "Коучинг отдела продаж",
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
      title: "Большие продажи",
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
      title: 'Тренинг "Дорогие продажи и Дожим"',
      description: "Запись мощного тренинга: техники и примеры.",
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
      title: "Мастер-классы и экспресс курсы",
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

  // Функция для определения шахматного порядка
  const isChessPattern = (index: number) => {
    const colsPerRow =
      typeof window === "undefined"
        ? 3
        : isMobile
        ? 3
        : window.innerWidth >= 1024
        ? 5
        : window.innerWidth >= 768
        ? 4
        : 3;
    const colIndex = index % colsPerRow;
    const rowIndex = Math.floor(index / colsPerRow);

    // Шахматный порядок: (четная строка и четный столбец) или (нечетная строка и нечетный столбец)
    return (
      (rowIndex % 2 === 0 && colIndex % 2 === 0) ||
      (rowIndex % 2 !== 0 && colIndex % 2 !== 0)
    );
  };

  // Мобильная версия карточек
  if (isMobile) {
    return (
      <div className="grid grid-cols-3 gap-1">
        {courses.map((course, index) => (
          <Card
            key={course.id}
            className={`border border-gray-200 rounded-lg overflow-hidden relative cursor-pointer w-full ${
              isChessPattern(index) ? "bg-gray-200" : ""
            }`}
          >
            <div className="flex flex-col justify-start items-center h-full p-1">
              <div className="text-center mb-1 h-[32px] flex items-center justify-center">
                <span className="font-medium text-[0.6rem] leading-tight h-[2em] flex flex-col items-center justify-center overflow-wrap break-word text-center">
                  {course.title.split(" ").length === 2
                    ? course.title.split(" ").map((word, index) => (
                        <span key={index} className="text-center">
                          {word}
                        </span>
                      ))
                    : course.title}
                </span>
              </div>
              <div className="text-center">
                <p className="text-[0.5rem]">{course.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  // Десктопная версия карточек (оставляем без изменений)
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 xs:gap-2 sm:gap-3 md:gap-4 lg:gap-5">
      {courses.map((course, index) => (
        <Card
          key={course.id}
          className="border border-gray-200 rounded-lg overflow-hidden relative cursor-pointer transition-all duration-700 h-[90px] xs:h-[105px] sm:h-[120px] md:h-[130px] lg:h-[140px] w-[220px]"
          onMouseEnter={() => setHoveredCard(course.id)}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            transform:
              hoveredCard === course.id ? "translateY(-5px)" : "translateY(0)",
            boxShadow:
              hoveredCard === course.id
                ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                : "none",
          }}
        >
          {/* Обычное состояние - только заголовок и описание */}
          <div
            className={`absolute inset-0 transition-opacity duration-300 flex flex-col justify-start p-1 xs:p-2 sm:p-3 ${
              isChessPattern(index) ? "bg-gray-200" : ""
            }`}
            style={{
              opacity: hoveredCard === course.id ? 0 : 1,
              pointerEvents: hoveredCard === course.id ? "none" : "auto",
            }}
          >
            <CardHeader className="pb-0 pt-0 xs:pb-0 xs:pt-1 sm:pb-1 sm:pt-1 px-1 xs:px-2 sm:px-3 md:px-4 h-[50px] flex items-center justify-center">
              <CardTitle className="font-medium text-center">
                <span className="text-[0.4rem] xs:text-[0.7rem] sm:text-sm md:text-base leading-tight h-[2em] flex flex-col items-center justify-center overflow-wrap break-word text-center">
                  {course.title.split(" ").length === 2
                    ? course.title.split(" ").map((word, index) => (
                        <span key={index} className="text-center">
                          {word}
                        </span>
                      ))
                    : course.title}
                </span>
              </CardTitle>
            </CardHeader>
            {/* Описание отображается всегда */}
            <CardContent className="pt-0 px-1 xs:px-2 sm:px-3 md:px-4">
              <p className="text-[0.3rem] xs:text-[0.5rem] sm:text-[0.6rem] md:text-xs text-center">
                {course.description}
              </p>
            </CardContent>
          </div>

          {/* Состояние при наведении - только детали курса без заголовка (только для десктопа) */}
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
                    className="flex items-start animate-slide-right leading-4"
                    style={{ animationDelay: `${300 + index * 200}ms` }}
                  >
                    <p className="text-white/90">
                      <span className="text-[0.35rem] xs:text-[0.45rem] sm:text-[0.55rem] md:text-[0.7rem] leading-0">
                        • {point}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
