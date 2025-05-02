"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import AmoCRMFormModal from "./amocrm-form-modal";

export default function PricingPlans() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Pricing plan data - reduced to 2 plans
  const plans = [
    {
      id: 0,
      title: "Соло",
      price: "20,000₸",
      period: "/месяц",
      description: "Идеально для самостоятельного развития",
      features: [
        "Полный доступ ко всем курсам",
        "Обратная связь от AI-тренера",
        "Возможность докупать кредиты на проверку домашних заданий",
      ],
      buttonText: "Попробовать бесплатно",
      buttonGlow: true,
    },
    {
      id: 1,
      title: "Команда ",
      price: "от 45,000₸",
      period: "/месяц",
      description: "Подходит для обучения и контроля всей команды",
      features: [
        { text: "Полный доступ ко всем курсам", highlight: true },
        { text: "Обратная связь от AI-тренера", highlight: true },
        {
          text: "Возможность докупать кредиты на проверку домашних заданий",
          highlight: true,
        },
        { text: "Контроль доступов сотрудников", highlight: true },
        { text: "Детальная статистика обучения сотрудников", highlight: true },
      ],
      buttonText: "Попробовать бесплатно",
    },
  ];

  // Функция для открытия модального окна с формой
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="py-6 sm:py-10 text-black">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Always display cards in a row, even on mobile */}
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-2 sm:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-lg overflow-hidden relative transition-all duration-300 p-2 sm:p-6 flex flex-col border border-[#333]"
              style={{
                transform:
                  hoveredCard === plan.id
                    ? "translateY(-5px)"
                    : "translateY(0)",
                boxShadow:
                  hoveredCard === plan.id
                    ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card content with reduced heights */}
              <div className="flex flex-col h-full">
                {/* Header section - reduced height */}
                <div className="h-10 sm:h-16 mb-1 sm:mb-0">
                  <div className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#333] text-[10px] sm:text-sm text-[#6366f1]">
                    {plan.title}
                  </div>
                </div>

                {/* Price section - reduced height */}
                <div className="h-10 sm:h-16">
                  <div className="flex items-baseline">
                    <span className="text-md sm:text-2xl lg:text-4xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-1 text-[10px] sm:text-sm">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Description section - reduced height */}
                <div className="h-8 sm:h-16 text-[10px] sm:text-sm text-gray-400">
                  <p>{plan.description}</p>
                </div>

                {/* Button section - reduced margins */}
                <div className="my-2 sm:my-6">
                  <Button
                    onClick={openModal}
                    className={`w-full py-1 sm:py-4 rounded-md text-[10px] sm:text-sm cursor-pointer ${
                      plan.buttonGlow
                        ? "bg-[#1a1a1a] hover:bg-[#252525] text-white relative overflow-hidden"
                        : "bg-[#6366f1] hover:bg-[#4f46e5] text-white"
                    }`}
                  >
                    {plan.buttonText}
                    {plan.buttonGlow && (
                      <div className="absolute -inset-1 bg-[#6366f1] opacity-20 blur-md rounded-full"></div>
                    )}
                  </Button>
                </div>

                {/* Features section - reduced spacing */}
                <div className="flex-grow">
                  <ul className="space-y-1 sm:space-y-4">
                    {plan.features.map((feature, index) => {
                      // Check if feature is an object with highlight property
                      const isHighlighted =
                        typeof feature === "object" && feature.highlight;
                      const featureText =
                        typeof feature === "object" ? feature.text : feature;

                      return (
                        <li key={index} className="flex items-center">
                          <div
                            className={`flex-shrink-0 h-3 w-3 sm:h-6 sm:w-6 rounded-full ${
                              isHighlighted ? "bg-[#6366f1]" : "bg-[#333]"
                            } flex items-center justify-center mr-1 sm:mr-3`}
                          >
                            <Check className="h-2 w-2 sm:h-4 sm:w-4 text-white" />
                          </div>
                          <span
                            className={`text-[10px] sm:text-sm ${
                              isHighlighted
                                ? "px-1 sm:px-2 py-0.5 sm:py-1 rounded"
                                : ""
                            }`}
                          >
                            {featureText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AmoCRMFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planTitle="Бесплатный старт"
      />
    </section>
  );
}
