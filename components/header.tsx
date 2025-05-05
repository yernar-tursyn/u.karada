"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AmoCRMFormModal from "@/components/amocrm-form-modal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Отслеживаем скролл для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Функция для плавной прокрутки к якорям с учетом высоты хедера
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      // Получаем высоту хедера для корректного скролла
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      // Закрываем мобильное меню после клика
      setIsMobileMenuOpen(false);
    }
  };

  // Функция для открытия модального окна с формой
  const openModal = () => {
    setIsModalOpen(true);
    setIsMobileMenuOpen(false); // Закрываем мобильное меню при открытии модального окна
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-sm py-2"
            : "bg-white shadow-sm py-2 md:bg-transparent md:shadow-none md:py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="AI Sales Trainer"
              width={180}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
            <span className="font-bold text-lg text-gray-800">KARADA-U</span>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Главная
            </Link>
            <a
              href="#courses"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={(e) => scrollToSection(e, "courses")}
            >
              Курсы
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={(e) => scrollToSection(e, "pricing")}
            >
              Тарифы
            </a>
            <Button
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 text-white ml-2 cursor-pointer"
              onClick={openModal}
            >
              Начать
            </Button>
          </nav>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Меню"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Выпадающее мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <a
                href="#courses"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={(e) => scrollToSection(e, "courses")}
              >
                Курсы
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={(e) => scrollToSection(e, "pricing")}
              >
                Тарифы
              </a>
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white w-fit cursor-pointer"
                onClick={openModal}
              >
                Начать
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Модальное окно с формой amoCRM */}
      <AmoCRMFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planTitle="Бесплатный старт"
      />
    </>
  );
}
