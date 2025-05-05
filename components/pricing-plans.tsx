"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import AmoCRMFormModal from "./amocrm-form-modal";

export default function PricingPlans() {
  const [hoveredCard, setHoveredCard] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanTitle, setSelectedPlanTitle] = useState("");

  // Single pricing plan - removed title "Команда"
  const plan = {
    id: 1,
    price: "от 20,000₸",
    period: "/месяц на 1 аккаунт",
    features: [
      { text: "Подписка на команду от 3-х человек", highlight: true },
      { text: "Полный доступ ко всем курсам", highlight: true },
      {
        text: "Индивидуальная обратная связь от AI тренера по каждому сотруднику",
        highlight: true,
      },
      {
        text: "Система обучения",
        highlight: true,
        subtext: ["«Шпаргалка» на каждый день", "Поэтапное прохождение"],
      },
      {
        text: "Система контроля",
        highlight: true,
        subtext: [
          "Детальная статистика обучения",
          "Задания и прогресс",
          "Добавление / удаление доступов",
          "Выдача сертификатов",
        ],
      },
      {
        text: "Ценность обучения $1,000,000",
        highlight: true,
      },
      {
        text: "Гибкая система оплаты",
        highlight: true,
      },
    ],
    buttonText: "Попробовать",
  };

  // Функция для открытия модального окна с формой
  const openModal = (planTitle: string) => {
    setSelectedPlanTitle(planTitle);
    setIsModalOpen(true);
  };

  return (
    <section className="py-6 sm:py-10 text-black">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="max-w-[283px] sm:max-w-md mx-auto">
          <div
            className="rounded-lg overflow-hidden relative transition-all duration-300 p-4 sm:p-8 flex flex-col border border-[#333]"
            style={{
              transform: hoveredCard ? "translateY(-5px)" : "translateY(0)",
              boxShadow: hoveredCard
                ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                : "none",
            }}
            onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(false)}
          >
            {/* Card content with reduced heights */}
            <div className="flex flex-col h-full">
              {/* Price section - reduced height */}
              <div className="h-12 sm:h-20">
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1 text-[10px] sm:text-sm">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Button section - reduced margins */}
              <div className="my-4 sm:my-8">
                <Button
                  onClick={() => openModal("Корпоративный")}
                  className="w-full py-2 sm:py-5 rounded-md text-[11px] sm:text-sm cursor-pointer bg-blue-500 hover:bg-blue-600 text-white"
                >
                  {plan.buttonText}
                </Button>
              </div>

              {/* Features section - reduced spacing */}
              <div className="flex-grow">
                <ul className="space-y-2 sm:space-y-6">
                  {plan.features.map((feature, index) => {
                    // Check if feature is an object with highlight property
                    const isHighlighted =
                      typeof feature === "object" && feature.highlight;
                    const featureText =
                      typeof feature === "object" ? feature.text : feature;
                    const featureSubtext =
                      typeof feature === "object" && feature.subtext
                        ? feature.subtext
                        : [];

                    return (
                      <li key={index} className="flex items-start">
                        <div
                          className={`flex-shrink-0 h-3 w-3 sm:h-6 sm:w-6 rounded-full ${
                            isHighlighted ? "bg-blue-500" : "bg-[#333]"
                          } flex items-center justify-center mr-1 sm:mr-3 mt-0.5`}
                        >
                          <Check className="h-2 w-2 sm:h-4 sm:w-4 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] sm:text-sm font-medium">
                            {featureText}
                          </span>
                          {featureSubtext.length > 0 && (
                            <ul className="mt-1 ml-2 space-y-1">
                              {featureSubtext.map((subtext, subtextIndex) => (
                                <li
                                  key={subtextIndex}
                                  className="text-[10px] sm:text-sm text-black-500 flex items-center"
                                >
                                  <span className="inline-block w-1 h-1 bg-black rounded-full mr-1.5"></span>
                                  {subtext}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AmoCRMFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planTitle={selectedPlanTitle}
      />
    </section>
  );
}
