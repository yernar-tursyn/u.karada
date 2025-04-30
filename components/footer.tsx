import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Логотип и копирайт */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            {/* <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">
                AI Sales Trainer
              </span>
            </Link> */}
            <p className="text-sm text-gray-500 mt-2">
              © {currentYear} AI Sales Trainer. Все права защищены.
            </p>
          </div>

          {/* Навигация */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full md:w-auto">
            {/* Ссылки */}
            <div className="space-y-2">
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

            {/* Контакты */}
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 mb-2">Контакты</h4>
              <div className="flex flex-col space-y-2">
                <a
                  href="mailto:info@aisalestrainer.com"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="break-all">info@aisalestrainer.com</span>
                </a>
                <a
                  href="tel:+77777777777"
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  +7 (777) 777-77-77
                </a>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="space-y-2">
              <h4 className="font-medium text-gray-700 mb-2">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
