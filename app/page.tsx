"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Play,
  BriefcaseBusiness,
  BotMessageSquare,
  CircleDollarSign,
} from "lucide-react";
import TestimonialsSlider from "@/components/testimonials-slider";
import ClientsSlider from "@/components/clients-slider";
import AnimatedCourseCards from "@/components/animated-course-cards";
import PricingPlans from "@/components/pricing-plans";
import AuthorSection from "@/components/author-section";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import AmoCRMFormModal from "@/components/amocrm-form-modal";

export default function Home() {
  const clientLogos = [
    // n серия
    "/clients/n001.jpg",
    "/clients/n002.jpg",
    "/clients/n003.jpg",
    "/clients/n004.jpg",
    "/clients/n005.jpg",
    "/clients/n006.jpg",
    "/clients/n007.jpg",
    "/clients/n008.jpg",
    "/clients/n009.jpg",
    "/clients/n010.jpg",
    "/clients/n011.jpg",
    "/clients/n012.jpg",
    "/clients/n013.jpg",
    "/clients/n014.jpg",
    "/clients/n015.jpg",
    "/clients/n016.jpg",
    "/clients/n017.jpg",
    "/clients/n018.jpg",

    // N серия
    "/clients/N1.jpg",
    "/clients/N2.jpg",
    "/clients/N3.jpg",
    "/clients/N4.jpg",
    "/clients/N5.jpg",
    "/clients/N6.jpg",
    "/clients/N7.jpg",
    "/clients/N8.jpg",
    "/clients/N9.jpg",
    "/clients/N10.jpg",
    "/clients/N11.jpg",
    "/clients/N12.jpg",
    "/clients/N13.jpg",
    "/clients/N14.jpg",
    "/clients/N15.jpg",
    "/clients/N16.jpg",
    "/clients/N17.jpg",
    "/clients/N18.jpg",
    "/clients/N19.jpg",
    "/clients/N20.jpg",
    "/clients/N21.jpg",
    "/clients/N22.jpg",
    "/clients/N23.jpg",
    "/clients/N24.jpg",
    "/clients/N25.jpg",
    "/clients/N26.jpg",
    "/clients/N27.jpg",
    "/clients/N28.jpg",
    "/clients/N29.jpg",
    "/clients/N30.jpg",
    "/clients/N31.jpg",
    "/clients/N32.jpg",
    "/clients/N33.jpg",
    "/clients/N34.jpg",
    "/clients/N35.jpg",
    "/clients/N36.jpg",

    // PNG файлы
    "/clients/15v.png",
    "/clients/16v.png",
    "/clients/17v.png",
    "/clients/18v.png",
    "/clients/19.png",
    "/clients/20.png",
    "/clients/21.png",
    "/clients/22.png",
    "/clients/23.png",
    "/clients/24.png",
    "/clients/25.png",
    "/clients/26.png",
    "/clients/27.png",
    "/clients/28.png",
    "/clients/28m.png",
    "/clients/29.png",
    "/clients/30.png",
    "/clients/31.png",
    "/clients/32.png",
    "/clients/33.png",
    "/clients/34.png",
    "/clients/35.png",
    "/clients/36.png",

    // LG серия
    "/clients/LG_ 2.png",
    "/clients/LG_ 3.png",
    "/clients/LG_ 4.png",
    "/clients/LG_ 5.png",
    "/clients/LG_ 6.png",
    "/clients/LG_ 7.png",
    "/clients/LG_ 8.png",
    "/clients/LG_ 9.png",
    "/clients/LG_ 10.png",
    "/clients/LG_ 11.png",
    "/clients/LG_ 12.png",
    "/clients/LG_ 13.png",
    "/clients/LG_ 14.png",
    "/clients/LG_ 15.png",
    "/clients/LG_ 16.png",
    "/clients/LG_ 17.png",
    "/clients/LG_ 18.png",
    "/clients/LG_ 19.png",
    "/clients/LG_ 20.png",
    "/clients/LG_ 21.png",
    "/clients/LG_ 22.png",
    "/clients/LG_ 23.png",
    "/clients/LG_ 24.png",
    "/clients/LG_ 25.png",
    "/clients/LG_ 26.png",
    "/clients/LG_ 27.png",
    "/clients/LG_ 28.png",
    "/clients/LG_ 29.png",
    "/clients/LG_ 30.png",
    "/clients/LG_ 31.png",
    "/clients/LG_ 32.png",
    "/clients/LG_ 33.png",
    "/clients/LG_ 34.png",
    "/clients/LG_ 35.png",
    "/clients/LG_ 36.png",
    "/clients/LG_ 37.png",
    "/clients/LG_ 38.png",
    "/clients/LG_ 39.png",
    "/clients/LG_ 40.png",
    "/clients/LG_ 41.png",
    "/clients/LG_ 42.png",
    "/clients/LG_ 43.png",
    "/clients/LG_ 44.png",
    "/clients/LG_ 45.png",
    "/clients/LG_ 46.png",
    "/clients/LG_ 47.png",
    "/clients/LG_ 48.png",
    "/clients/LG_ 49.png",

    // m серия
    "/clients/m1.png",
    "/clients/m2.png",
    "/clients/m3.png",
    "/clients/m4.png",
    "/clients/m5.png",
    "/clients/m6.png",
    "/clients/m7.png",
    "/clients/m8.png",
    "/clients/m9.png",
    "/clients/m10.png",
    "/clients/m11.png",
    "/clients/m12.png",

    // JPG файлы
    "/clients/26.jpg",
    "/clients/34.jpg",
    "/clients/60.jpg",
    "/clients/61.jpg",
    "/clients/62.jpg",
    "/clients/63.jpg",
    "/clients/64.jpg",
    "/clients/65.jpg",
    "/clients/66.jpg",
    "/clients/67.jpg",
    "/clients/68.jpg",
    "/clients/69.jpg",
    "/clients/BPa.jpg",
    "/clients/SMa.jpg",

    // ll серия
    "/clients/ll001.jpg",
    "/clients/ll002.jpg",
    "/clients/ll003.jpg",
    "/clients/ll004.jpg",
    "/clients/ll01.jpg",
    "/clients/ll02.jpg",
    "/clients/ll03.jpg",
    "/clients/ll04-04_1.jpg",
    "/clients/ll04-04_2.jpg",
    "/clients/ll04-04_3.jpg",
    "/clients/ll04.jpg",
    "/clients/ll05.jpg",
    "/clients/ll06.jpg",
    "/clients/ll06061.jpg",
    "/clients/ll06062.jpg",
    "/clients/ll07.jpg",
    "/clients/ll08.jpg",
    "/clients/ll09.jpg",
    "/clients/ll10.jpg",
    "/clients/ll11.jpg",
    "/clients/ll12.jpg",
    "/clients/ll12.png",
    "/clients/ll26041.jpg",
    "/clients/ll26042.jpg",
    "/clients/ll26043.jpg",
    "/clients/ll26044.jpg",
    "/clients/ll26045.jpg",
    "/clients/ll28-02_1.jpg",
    "/clients/ll28-02_2.jpg",
    "/clients/ll28-02_3.jpg",
    "/clients/ll28-02_4.jpg",
    "/clients/llh1.jpg",

    // m серия JPG
    "/clients/m13.jpg",
    "/clients/m14.jpg",
    "/clients/m15.jpg",
    "/clients/m16.jpg",
    "/clients/m17.jpg",
    "/clients/m18.jpg",
    "/clients/m19.jpg",
    "/clients/m20.jpg",
    "/clients/m21.jpg",
    "/clients/m22.jpg",
    "/clients/m23.jpg",
    "/clients/m24.jpg",
    "/clients/m25.jpg",
    "/clients/m26.jpg",
    "/clients/m27.jpg",
    "/clients/m28.jpg",
    "/clients/m29.jpg",
    "/clients/m30.jpg",
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция для открытия модального окна с формой
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
          {/* Мобильная версия (скрыта на десктопе) */}
          <div className="block sm:hidden mt-10">
            {/* Заголовок на всю ширину */}
            <h1 className="text-lg xs:text-xl font-bold text-gray-900 mb-4">
              Прокачай свой отдел продаж с лучшим AI-тренером
            </h1>

            {/* Контент под заголовком */}
            <div className="flex items-center">
              {/* Текст и кнопки */}
              <div className="w-full mb-4">
                <p className="text-[10px] xs:text-xs text-gray-700 mb-3">
                  8000+ пользователей | 135+ сфер бизнеса <br />
                  Рост ваших продаж до 34% за 7 дней
                </p>
                <div className="flex flex-col xs:flex-row gap-2">
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 xs:px-3 py-0.5 xs:py-1 text-[9px] xs:text-[10px] rounded-md h-5 xs:h-6 w-fit"
                    onClick={openModal}
                  >
                    Попробовать
                  </Button>
                  {/* <Button
                    variant="outline"
                    className="border border-gray-300 text-gray-700 px-2 xs:px-3 py-0.5 xs:py-1 text-[9px] xs:text-[10px] rounded-md h-5 xs:h-6"
                  >
                    Смотреть демо
                  </Button> */}
                </div>
              </div>

              {/* Изображение */}
              <div className="w-full flex justify-center mt-2">
                <div className="relative w-full max-w-[180px] xs:max-w-[220px] aspect-[5/4]">
                  <Image
                    src="/ai-trainer.jpeg"
                    alt="AI тренер"
                    fill
                    className="object-contain"
                    sizes="(max-width: 480px) 180px, 220px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Десктопная версия (скрыта на мобильных) */}
          <div className="hidden sm:grid sm:grid-cols-2 sm:gap-6 md:gap-8 sm:items-center">
            <div className="max-w-xl">
              <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                Прокачай свой отдел продаж с лучшим AI-тренером
              </h1>
              <p className="sm:text-sm md:text-base text-gray-700 mb-4">
                8000+ пользователей | 135+ сфер бизнеса <br />
                Рост ваших продаж до 34% за 7 дней
              </p>
              <div className="flex flex-row gap-3" onClick={openModal}>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white sm:px-4 md:px-6 sm:py-2 sm:text-xs md:text-sm lg:text-base rounded-md sm:h-7 md:h-8 lg:h-10">
                  Попробовать
                </Button>
                <Button
                  variant="outline"
                  className="border border-gray-300 text-gray-700 sm:px-4 md:px-6 sm:py-2 sm:text-xs md:text-sm lg:text-base rounded-md sm:h-7 md:h-8 lg:h-10"
                >
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="relative w-full sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] aspect-[5/4]">
                <Image
                  src="/ai-trainer.jpeg"
                  alt="AI тренер"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 500px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="container mx-auto px-2 py-4 sm:py-6 md:py-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center">
            Как это работает
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-[220px]">
              <div className="w-10 h-10 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-medium mb-1 text-center h-[45px]">
                Сотрудник смотрит короткий видеоурок
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 text-center h-[45px]">
                Только суть и практика. Каждый урок — конкретный навык.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-[220px]">
              <div className="w-10 h-10 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-medium mb-1 text-center h-[45px]">
                Выполняет задание — получает разбор от AI
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 text-center h-[45px]">
                AI-тренер проверит ответ и даст чёткую обратную связь: что
                усилить и как исправить.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-[220px]">
              <div className="w-10 h-10 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-medium mb-1 text-center h-[45px]">
                Вы видите весь процесс обучения
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 text-center h-[45px]">
                Вся статистика по каждому сотруднику: что прошёл, как ответил,
                где ошибся и насколько продвинулся.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-[220px]">
              <div className="w-10 h-10 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xs sm:text-sm font-medium mb-1 text-center h-[45px]">
                Превращайте продавцов в профи
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 text-center h-[45px]">
                Получите супер продавца в короткие сроки.
              </p>
            </div>
          </div>
        </section>

        {/* Course cards */}
        <section className="container mx-auto px-4 py-12 md:py-16" id="courses">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center">
            Курсы
          </h2>
          <AnimatedCourseCards />
        </section>

        <section className="container mx-auto px-2 py-4 sm:py-6 md:py-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center">
            Почему KARADA-U?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 xs:gap-2 sm:gap-4 md:gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center bg-white p-2 xs:p-3 sm:p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-1 xs:mb-2 sm:mb-3 md:mb-4">
                <Play className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1 flex items-start">
                <p className="font-medium text-[8px] xs:text-[9px] sm:text-xs md:text-sm">
                  2000+ уроков <br /> 5000+ приемов
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center bg-white p-2 xs:p-3 sm:p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-1 xs:mb-2 sm:mb-3 md:mb-4">
                <BriefcaseBusiness className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1 flex items-start">
                <p className="font-medium text-[8px] xs:text-[9px] sm:text-xs md:text-sm">
                  8000+ пользователей <br /> 135+ сфер бизнеса
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center bg-white p-2 xs:p-3 sm:p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-1 xs:mb-2 sm:mb-3 md:mb-4">
                <BotMessageSquare className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1 flex items-start">
                <p className="font-medium text-[8px] xs:text-[9px] sm:text-xs md:text-sm">
                  Лучший AI тренер <br /> на рынке
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-center bg-white p-2 xs:p-3 sm:p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-1 xs:mb-2 sm:mb-3 md:mb-4">
                <CircleDollarSign className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1 flex items-start">
                <p className="font-medium text-[8px] xs:text-[9px] sm:text-xs md:text-sm">
                  Самая выгодная цена <br /> на рынке
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who is it for & Training programs */}
        {/* <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Кому подходит?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gray-700 mr-2">•</span>
                <p>Малым и средним офисам по продажам, переговорам, звонкам.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-2">•</span>
                <p>
                  Всем, новым внедрениям смайтер (улучшивающим директорам, чтобы
                  перективный речи)
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-gray-700 mr-2">•</span>
                <p>Ако ж укоготе уанеисарть проднеме</p>
              </li>
            </ul>
          </div>
        </div>
      </section> */}

        {/* Images Block */}
        {/* <section className="w-full">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/UK1.jpg"
            alt="Business meeting"
            width={1200}
            height={400}
            className="w-full object-cover"
          />
          <Image
            src="/ai-sales-dashboard-overview.jpg"
            alt="AI dashboard"
            width={1200}
            height={400}
            className="w-full object-cover mt-0"
          />
        </div>
        {/* Author Section */}
        <AuthorSection />

        {/* Clients Section */}
        <ClientsSlider images={clientLogos} />

        {/* Testimonials Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center">
              Отзывы
            </h2>
            <TestimonialsSlider />
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50" id="pricing">
          <div className="container mx-auto px-4">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center">
              Стоимость
            </h2>
            <PricingPlans />
          </div>
        </section>
      </main>
      <Footer />

      <AmoCRMFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planTitle="Бесплатный старт"
      />
    </>
  );
}
