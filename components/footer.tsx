import Link from "next/link";
import { Instagram, Mail, Phone, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Логотип и копирайт - последний на мобильных, первый на десктопе */}
          <div className="w-full md:w-auto order-4 md:order-none text-center md:text-left mb-0 md:mb-0">
            <p className="text-sm text-gray-500 mt-2">
              © {currentYear} KARADA Университет Продаж <br /> Все права
              защищены
              <br />
              Договор оферты
            </p>
          </div>

          {/* Навигация, контакты и соц сети */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full md:w-auto">
            {/* Ссылки - первый на мобильных */}
            <div className="space-y-2 order-1 md:order-none text-center md:text-left">
              <h4 className="font-medium text-gray-700 mb-2">Навигация</h4>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Главная
                </Link>
                <Link
                  href="#courses"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Курсы
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  Тарифы
                </Link>
              </div>
            </div>

            {/* Контакты - второй на мобильных */}
            <div className="space-y-2 order-2 md:order-none text-center md:text-left">
              <h4 className="font-medium text-gray-700 mb-2">Контакты</h4>
              <div className="flex flex-col space-y-2">
                <a
                  href="tel:+77777777777"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center justify-center md:justify-start"
                >
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  +7 (705) 271 11 77
                </a>
                <a
                  href="mailto:info@aisalestrainer.com"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center justify-center md:justify-start"
                >
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="break-all">info@karada.kz</span>
                </a>
              </div>
            </div>

            {/* Социальные сети - третий на мобильных */}
            <div className="space-y-2 order-3 md:order-none text-center md:text-left">
              <h4 className="font-medium text-gray-700 mb-2">Мы в соцсетях</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.youtube.com/channel/UCqaMMY7Jm497AQH_nAQNfow"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a
                  href="https://www.instagram.com/yusup.karada/"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
