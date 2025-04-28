import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, ListChecks, Bot, BarChart4 } from "lucide-react";
import TestimonialsSlider from "@/components/testimonials-slider";
import ClientsSlider from "@/components/clients-slider";
import AnimatedCourseCards from "@/components/animated-course-cards";
import PricingPlans from "@/components/pricing-plans";
import AuthorSection from "@/components/author-section";

export default function Home() {
  const clientLogos = [
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
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Прокачай свой отдел продаж с первым AI-тренером в Центральной Азии
            </h1>
            <p className="text-gray-700 mb-6">
              Более 8000 пользователей. <br /> Тысячи проверенных заданий. 24/7
              обратная связь.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md cursor-pointer">
                Попробовать бесплатно
              </Button>
              <Button
                variant="outline"
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md cursor-pointer"
              >
                Смотреть демо
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/ai-trainer.jpeg"
              alt="AI тренер"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
          Как это работает
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-4">
              <Play className="w-8 h-8" />
            </div>
            <p className="font-medium text-base md:text-lg">Смотри урок.</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-4">
              <ListChecks className="w-8 h-8" />
            </div>
            <p className="font-medium text-base md:text-lg">Выполни задание</p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-4">
              <Bot className="w-8 h-8" />
            </div>
            <p className="font-medium text-base md:text-lg">
              Получи обратную связь от AI
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 flex items-center justify-center border border-blue-500 rounded-md text-blue-500 mb-4">
              <BarChart4 className="w-8 h-8" />
            </div>
            <p className="font-medium text-base md:text-lg">
              Повтори – пока на панике! зарплата в 200% больше
            </p>
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
          Курсы
        </h2>
        <AnimatedCourseCards />
      </section>

      {/* Who is it for & Training programs */}
      <section className="container mx-auto px-4 py-12 md:py-16">
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
      </section>

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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Отзывы
          </h2>
          <TestimonialsSlider />
        </div>
      </section>

      {/* Pricing Plans */}
      <PricingPlans />
    </main>
  );
}
