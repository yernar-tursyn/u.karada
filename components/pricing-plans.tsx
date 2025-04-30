"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import AmoCRMFormModal from "@/components/amocrm-form-modal";

export default function PricingPlans() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Pricing plan data
  const plans = [
    {
      id: 0,
      title: "Starter",
      badge: "Most popular",
      price: "$7",
      period: "Trial",
      description:
        "Start your $7 - 7 Day Zero Risk Trial Offer After your trial ends it will be billed as $49/month. Modify or cancel your plan anytime.",
      features: [
        "50 Monthly Video Credits",
        "20+ Cinematic Styles",
        "Access to Basic Export Settings",
        "Standard Definition Video Output",
        "Collaboration Tools for Team Projects",
      ],
      buttonText: "Choose this plan",
      buttonGlow: true,
    },
    {
      id: 1,
      title: "Professional",
      badge: "Best value",
      price: "$179",
      period: "/month",
      description:
        "Save 50% when you chose annual. Billed as $1079 a year. Modify or cancel your plan anytime.",
      features: [
        { text: "400 Monthly Video Credits", highlight: true },
        { text: "100+ Cinematic Styles", highlight: true },
        { text: "Access to Advanced Export Settings", highlight: true },
        { text: "High Definition Video Output", highlight: true },
        { text: "Collaboration Tools for Team Projects", highlight: true },
      ],
      buttonText: "Choose this plan",
    },
    {
      id: 2,
      title: "Enterprise",
      price: "$399",
      period: "/month",
      description:
        "Save 50% when you chose annual. Billed as $2379 a year. *Unlimited subject to fair use policy.",
      features: [
        "2000 Monthly Video Credits",
        "100+ Cinematic Styles",
        "Access to Advanced Export Settings",
        "4K Ultra High Definition Video Output",
        "Collaboration Tools for Team Projects",
      ],
      buttonText: "Choose this plan",
    },
  ];

  const openModal = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsModalOpen(true);
  };

  return (
    <section className="py-10 sm:py-16 text-black" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center">
          Стоимость
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-lg overflow-hidden relative transition-all duration-300 p-6 sm:p-8 flex flex-col border border-[#333] cursor-pointer"
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
              {/* Card content with fixed heights for alignment */}
              <div className="flex flex-col h-full">
                {/* Header section - fixed height */}
                <div className="h-16">
                  <div className="inline-block px-4 py-1 rounded-full border border-[#333] text-sm text-[#6366f1]">
                    {plan.title}
                  </div>
                  {plan.badge && (
                    <div className="inline-block px-4 py-1 rounded-full border border-[#333] bg-white text-sm ml-2">
                      {plan.badge}
                    </div>
                  )}
                </div>

                {/* Price section - fixed height */}
                <div className="h-20">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                {/* Description section - fixed height */}
                <div className="h-24 text-sm text-gray-400">
                  <p>{plan.description}</p>
                </div>

                {/* Button section - fixed position */}
                <div className="my-8">
                  <Button
                    className={`w-full py-6 rounded-md cursor-pointer ${
                      plan.buttonGlow
                        ? "bg-[#1a1a1a] hover:bg-[#252525] text-white relative overflow-hidden"
                        : "bg-[#6366f1] hover:bg-[#4f46e5] text-white"
                    }`}
                    onClick={() => openModal(plan.title)}
                  >
                    {plan.buttonText}
                    {plan.buttonGlow && (
                      <div className="absolute -inset-1 bg-[#6366f1] opacity-20 blur-md rounded-full"></div>
                    )}
                  </Button>
                </div>

                {/* Features section - grows to fill remaining space */}
                <div className="flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => {
                      // Check if feature is an object with highlight property
                      const isHighlighted =
                        typeof feature === "object" && feature.highlight;
                      const featureText =
                        typeof feature === "object" ? feature.text : feature;

                      return (
                        <li key={index} className="flex items-start">
                          <div
                            className={`flex-shrink-0 h-6 w-6 rounded-full ${
                              isHighlighted ? "bg-[#6366f1]" : "bg-[#333]"
                            } flex items-center justify-center mr-3`}
                          >
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span
                            className={isHighlighted ? "px-2 py-1 rounded" : ""}
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

      {/* Модальное окно с формой amoCRM */}
      <AmoCRMFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planTitle={selectedPlan || undefined}
      />
    </section>
  );
}
