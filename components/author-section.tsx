import Image from "next/image";

export default function AuthorSection() {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          {/* Разные стили для мобилки и десктопа */}
          <div className="flex flex-col items-center md:flex md:flex-row md:justify-center md:items-center gap-6 md:gap-8">
            {/* Фото автора */}
            <div className="w-48 md:w-72 relative flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src="/author-yusup.png"
                alt="Юсуп Карада"
                width={256}
                height={256}
                className="object-contain w-full h-auto"
              />
            </div>

            {/* Информация об авторе */}
            <div className="md:max-w-lg">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center">
                АВТОР - ЮСУП КАРАДА
              </h3>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="flex items-center">
                  <span className="text-black-600 mr-2">•</span>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    Топовый бизнес тренер. Дорогие Продажи & Дожим
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="text-black-600 mr-2">•</span>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    Помог 20K+ клиентам заработать $1+ млрд
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="text-black-600 mr-2">•</span>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    20+ лет опыта в продажах в СНГ, США, Европе и ЦА
                  </p>
                </li>
                <li className="flex items-center">
                  <span className="text-black-600 mr-2">•</span>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">
                    Степень Магистра Управления - Чикаго, США
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* Added mx-auto and max-width to compress from both sides */}
          <div className="flex flex-col mt-6 md:mt-8 mx-auto max-w-2xl">
            <blockquote className="border-l-4 border-black pl-4 italic text-xs sm:text-sm md:text-base text-gray-600 mb-4">
              &ldquo;Я сделал дорогостоящие и редкие знания по дорогим продажам
              и дожиму доступными для каждого бизнеса и предпринимателя!
              <br />
              Теперь любой бизнес может и должен делать крутые продажи!&rdquo;
            </blockquote>
            <p className="text-right text-xs sm:text-sm md:text-base text-gray-700 font-medium">
              Юсуп Карада
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
