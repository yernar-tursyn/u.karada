import Image from "next/image";

export default function AuthorSection() {
  return (
    <section className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-2 xs:px-3 sm:px-4">
        <div className="mx-auto">
          <div className="flex flex-row items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Фото автора */}
            <div className="w-16 xs:w-24 sm:w-32 md:w-48 lg:w-64 overflow-hidden">
              <Image
                src="/author-yusup.png"
                alt="Юсуп Карада"
                width={256}
                height={256}
                className="object-contain w-full h-auto"
              />
            </div>

            {/* Информация об авторе */}
            <div className="flex-1">
              <h2 className="text-base xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                АВТОР - ЮСУП КАРАДА
              </h2>

              <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3">
                <li className="flex items-center">
                  <span className="text-gray-900 mr-1 xs:mr-1.5 sm:mr-2 text-xs xs:text-sm sm:text-base">
                    •
                  </span>
                  <p className="text-[9px] xs:text-xs sm:text-sm md:text-base text-gray-700">
                    Топовый бизнес консультант. Дорогие Продажи & Дожим
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-900 mr-1 xs:mr-1.5 sm:mr-2 text-xs xs:text-sm sm:text-base">
                    •
                  </span>
                  <p className="text-[9px] xs:text-xs sm:text-sm md:text-base text-gray-700">
                    Помог 20K+ клиентам заработать $1+ млрд
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-900 mr-1 xs:mr-1.5 sm:mr-2 text-xs xs:text-sm sm:text-base">
                    •
                  </span>
                  <p className="text-[9px] xs:text-xs sm:text-sm md:text-base text-gray-700">
                    20+ лет опыта в продажах в США, Европе и Центральной Азии
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-900 mr-1 xs:mr-1.5 sm:mr-2 text-xs xs:text-sm sm:text-base">
                    •
                  </span>
                  <p className="text-[9px] xs:text-xs sm:text-sm md:text-base text-gray-700">
                    Степень Магистра Управления - Чикаго, США / 2007 год
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mt-3 xs:mt-4 sm:mt-6 md:mt-8">
            <blockquote className="border-l-2 xs:border-l-3 sm:border-l-4 border-gray-900 pl-2 xs:pl-3 sm:pl-4 italic text-[9px] xs:text-xs sm:text-sm md:text-base text-gray-600 mb-2 xs:mb-3 sm:mb-4">
              &ldquo;Я сделал дорогостоящие и редкие знания по дорогим продажам
              и дожиму доступными для каждого бизнеса и предпринимателя!
              <br />
              <br />
              Теперь любой бизнес может и должен делать крутые продажи!&rdquo;
            </blockquote>

            <p className="text-right text-[9px] xs:text-xs sm:text-sm md:text-base text-gray-700 font-medium">
              Юсуп Карада
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
