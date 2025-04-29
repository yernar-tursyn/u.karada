import Image from "next/image";

export default function AuthorSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="flex flex-row items-center gap-8">
            {/* Фото автора */}
            <div className=" overflow-hidden">
              <Image
                src="/author-yusup.png"
                alt="Юсуп Карада"
                width={256}
                height={256}
                className="object-contain"
              />
            </div>

            {/* Информация об авторе */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                АВТОР - ЮСУП КАРАДА
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <p className="text-gray-700">
                    Топовый бизнес консультант. Дорогие Продажи & Дожим
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <p className="text-gray-700">
                    Помог 20K+ клиентам заработать $1+ млрд
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  <p className="text-gray-700">
                    20+ лет опыта в продажах в США, Европе и Центральной Азии
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-900-600 mr-2">•</span>
                  <p className="text-gray-700">
                    Степень Магистра Управления - Чикаго, США / 2007 год
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <blockquote className="border-l-4 border-gray-900 pl-4 italic text-gray-600 mb-4">
              &ldquo;Я сделал дорогостоящие и редкие знания по дорогим продажам
              и дожиму доступными для каждого бизнеса и предпринимателя!
              <br />
              <br />
              Теперь любой бизнес может и должен делать крутые продажи!&rdquo;
            </blockquote>

            <p className="text-right text-gray-700 font-medium">Юсуп Карада</p>
          </div>
        </div>
      </div>
    </section>
  );
}
