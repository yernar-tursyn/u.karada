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
              <h2 className="text-2xl md:text-3xl font-bold text-black-600 mb-4 md:mb-6 text-center md:text-left">
                АВТОР - ЮСУП КАРАДА
              </h2>

              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="flex items-start">
                  <span className="text-black-600 mr-2 mt-1">•</span>
                  <p className="text-sm md:text-base text-gray-700">
                    Топовый бизнес консультант. Дорогие Продажи & Дожим
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-black-600 mr-2 mt-1">•</span>
                  <p className="text-sm md:text-base text-gray-700">
                    Помог 20K+ клиентам заработать $1+ млрд
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-black-600 mr-2 mt-1">•</span>
                  <p className="text-sm md:text-base text-gray-700">
                    20+ лет опыта в продажах в США, Европе и Центральной Азии
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-black-600 mr-2 mt-1">•</span>
                  <p className="text-sm md:text-base text-gray-700">
                    Степень Магистра Управления - Чикаго, США / 2007 год
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mt-6 md:mt-8">
            <blockquote className="border-l-4 border-black pl-4 italic text-sm md:text-base text-gray-600 mb-4">
              &ldquo;Я сделал дорогостоящие и редкие знания по дорогим продажам
              и дожиму доступными для каждого бизнеса и предпринимателя!
              <br />
              <br />
              Теперь любой бизнес может и должен делать крутые продажи!&rdquo;
            </blockquote>

            <p className="text-right text-sm md:text-base text-gray-700 font-medium">
              Юсуп Карада
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
