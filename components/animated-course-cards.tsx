"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface CourseDetail {
  videoCount: number;
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
      description: "Стерилиамбсоы иьаелть. Вдщеною бло",
      color: "from-emerald-700/90 to-emerald-900/95",
      details: {
        videoCount: 355,
        bulletPoints: [
          "1,000+ приемов холодного звонка любым клиентам",
          "Продажа Блокиратору, ЛВР и ЛПР",
        ],
      },
    },
    {
      id: 2,
      title: "2. Холодные звонки",
      description: "Литеоренск. роивасуу. страфиматоь у перваню шоьи.",
      color: "from-blue-700/90 to-blue-900/95",
      details: {
        videoCount: 240,
        bulletPoints: [
          "Скрипты для разных типов клиентов",
          "Преодоление возражений по телефону",
        ],
      },
    },
    {
      id: 3,
      title: "3. Входящие звонки",
      description: "Как автнориат. аазкия азоана Стеркрото качтреть.",
      color: "from-purple-700/90 to-purple-900/95",
      details: {
        videoCount: 180,
        bulletPoints: [
          "Конвертация входящих обращений в продажи",
          "Работа с горячими лидами",
        ],
      },
    },
    {
      id: 4,
      title: "4. Дожим и закрытие",
      description: "Как чи кориге аззаки. по Блонах с ваии.",
      color: "from-red-700/90 to-red-900/95",
      details: {
        videoCount: 210,
        bulletPoints: [
          "Техники завершения сделок",
          "Работа с сомнениями клиента",
        ],
      },
    },
    {
      id: 5,
      title: "5. Переговоры",
      description: "Как дгенеек. поликоет, пегот, Каждиент кпиеадьа.",
      color: "from-orange-600/90 to-orange-800/95",
      details: {
        videoCount: 185,
        bulletPoints: [
          "Стратегии ведения сложных переговоров",
          "Психологические приемы убеждения",
        ],
      },
    },
    {
      id: 6,
      title: "6. Психология покупателя",
      description: "Как пичнот кпиеапе ните рнеапоп.",
      color: "from-teal-600/90 to-teal-800/95",
      details: {
        videoCount: 160,
        bulletPoints: [
          "Типы клиентов и подходы к ним",
          "Триггеры принятия решений",
        ],
      },
    },
    {
      id: 7,
      title: "7. Интернет лиды",
      description: "Перогсти. отисеаве. Хеолодик. иреч",
      color: "from-indigo-700/90 to-indigo-900/95",
      details: {
        videoCount: 195,
        bulletPoints: [
          "15 проверенных техник закрытия",
          "Работа с сомневающимися клиентами",
        ],
      },
    },
    {
      id: 8,
      title: "8. Работа с отказами",
      description: "Как преднотель ехаоахи.",
      color: "from-slate-700/90 to-slate-900/95",
      details: {
        videoCount: 165,
        bulletPoints: [
          "Методики обработки возражений",
          "Превращение возражений в преимущества",
        ],
      },
    },
    {
      id: 9,
      title: "9. Хемадание продавца",
      description: "Дик ГОТ у дредаданиинаис КЩД. лоаниериис доят.",
      color: "from-gray-700/90 to-gray-900/95",
      details: {
        videoCount: 150,
        bulletPoints: [
          "Ключевые метрики и KPI",
          "Прогнозирование и планирование продаж",
        ],
      },
    },
    {
      id: 10,
      title: "10. Управление отделом продаж",
      description: "Стратегии руководства и развития команды продаж",
      color: "from-amber-700/90 to-amber-900/95",
      details: {
        videoCount: 230,
        bulletPoints: [
          "Построение эффективной команды",
          "Системы мотивации и контроля",
        ],
      },
    },
    {
      id: 11,
      title: "11. B2B продажи",
      description: "Особенности и стратегии корпоративных продаж",
      color: "from-sky-600/90 to-sky-800/95",
      details: {
        videoCount: 220,
        bulletPoints: [
          "Особенности корпоративных продаж",
          "Работа с тендерами и закупками",
        ],
      },
    },
    {
      id: 12,
      title: "12. Аналитика продаж",
      description: "Работа с данными для оптимизации процесса продаж",
      color: "from-rose-700/90 to-rose-900/95",
      details: {
        videoCount: 175,
        bulletPoints: [
          "Анализ воронки продаж",
          "Оптимизация процессов на основе данных",
        ],
      },
    },
    {
      id: 13,
      title: "13. Презентационные навыки",
      description: "Техники эффективных презентаций продуктов и услуг",
      color: "from-green-700/90 to-green-900/95",
      details: {
        videoCount: 190,
        bulletPoints: [
          "Структура эффективной презентации",
          "Техники удержания внимания",
        ],
      },
    },
    {
      id: 14,
      title: "14. Удержание клиентов",
      description: "Стратегии повышения лояльности и удержания клиентов",
      color: "from-fuchsia-700/90 to-fuchsia-900/95",
      details: {
        videoCount: 145,
        bulletPoints: ["Программы лояльности", "Допродажи и кросс-продажи"],
      },
    },
    {
      id: 15,
      title: "15. Автоматизация продаж",
      description: "Внедрение CRM и других инструментов автоматизации",
      color: "from-zinc-700/90 to-zinc-900/95",
      details: {
        videoCount: 170,
        bulletPoints: [
          "Внедрение CRM-систем",
          "Автоматизация рутинных процессов",
        ],
      },
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-0.5 xs:gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
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
              <CardTitle className="text-[7px] xs:text-xs sm:text-sm md:text-base font-bold text-center">
                {course.title}
              </CardTitle>
            </CardHeader>
            {/* Описание отображается только на десктопе */}
            {!isMobile && (
              <CardContent className="pt-0 px-1 xs:px-2 sm:px-3 md:px-4">
                <p className="text-[6px] xs:text-[8px] sm:text-[9px] md:text-xs line-clamp-2 text-center">
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
                <p className="text-gray-300 font-bold text-[7px] xs:text-[9px] sm:text-xs md:text-sm mb-0.5 xs:mb-1 sm:mb-2 animate-pulse-light text-center">
                  {course.details.videoCount} видеоурока
                </p>
                <ul className="space-y-0 xs:space-y-0.5 sm:space-y-1">
                  {course.details.bulletPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start animate-slide-right"
                      style={{ animationDelay: `${300 + index * 200}ms` }}
                    >
                      <span className="text-white mr-0.5 flex-shrink-0 text-[6px] xs:text-[7px] sm:text-[8px] md:text-xs">
                        •
                      </span>
                      <p className="text-white/90 text-[5px] xs:text-[6px] sm:text-[8px] md:text-[10px] line-clamp-2">
                        {point}
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
