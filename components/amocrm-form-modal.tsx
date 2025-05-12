"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AmoCRMFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  planTitle?: string;
}

export default function AmoCRMFormModal({
  isOpen,
  onClose,
}: AmoCRMFormModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Предотвращаем рендеринг на сервере
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Блокируем прокрутку страницы, когда модальное окно открыто
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Обработчик клика вне модального окна для закрытия
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isMounted) return null;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium">Заявка</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Закрыть</span>
          </Button>
        </div>
        <div className="h-[600px] md:h-[700px] lg:h-[800px] w-full">
          <iframe
            src="https://forms.amocrm.ru/rwtcrtl"
            className="w-full h-full border-0"
            title="Форма заявки"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ minHeight: "600px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
