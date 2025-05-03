"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Типы для отзывов
interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
}

// Данные отзывов
const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "«Платформа удобная и понятная: видеоуроки, тесты, практика. У менеджеров, которые обучались регулярно, продажи сразу пошли вверх. Отличный инструмент для обучения сотрудников!»",
    author: "Константин Егоров",
    position: "Компания «MEESENBURG»",
  },
  {
    id: 2,
    text: "«Юсуп передает коротко в сжатом виде практические инструменты - бери и применяй! Он не только эксперт, но и тонкий психолог!»",
    author: "Ахматжан Халилов",
    position: "Генеральный директор БИАСТ, Центр сендвич-панелей",
  },
  {
    id: 3,
    text: "«Мне очень понравилась подача и энергетика — всё практично, легко для восприятия и на высшем уровне. Я решила учиться продажам у лучших, и Юсуп полностью оправдал ожидания!»",
    author: "Назгул Салимова",
    position: "Собственница N.B.Group Finance",
  },
  {
    id: 4,
    text: "«Раньше я посещал другие мероприятия по продажам, но они не так заходили. А сегодня ожидания даже превзошли реальность: я думал, что будет больше воды, но всё оказалось иначе!»",
    author: "Алмас Кокумбаев",
    position: "Директор отдела продаж 1FIT",
  },
  {
    id: 5,
    text: "«Больше всего мне нравится, что здесь нет воды — только самая ценная и нужная информация. Всё подано так, что слушать совершенно не скучно!»",
    author: "Евгений Матвеев",
    position: "Коммерческий директор строительной компании SDT Group",
  },
  {
    id: 6,
    text: "«В продажах часто проблема не в недостатке знаний, а в том, чтобы наконец начать действовать. Это обучение стало для меня сильным стимулом и мотивацией подняться и внедрить полученные инструменты!»",
    author: "Яна Ульман",
    position: 'РОП "Freedom Finance Insurance"',
  },
  {
    id: 7,
    text: "«Моя точка А: я не дожимал клиентов и не знал, что с этим делать. Моя точка Б: Я понял, как дожимать, как это делать правильно и уже перестал сливать клиентов. Перевыполнили планы продаж. Сделали 100 продаж со средним чеком в 3,5 миллиона тенге!»",
    author: "Фарух Тухтаев",
    position: "Бизнес университет при КазНУ",
  },
  {
    id: 8,
    text: "«Зарплата с 200 тыс стала 700 тыс! В этом есть частичка Вашего труда!»",
    author: "Айдын Оразбаев",
    position: "Предприниматель",
  },
  {
    id: 9,
    text: "«Крутые, эффективные инструменты. Рекомендую всем, кто хочет зарабатывать больше!»",
    author: "Бекбол Қаербеков",
    position: "Предприниматель",
  },
  {
    id: 10,
    text: "«Это лучший тренер в Казахстане! Я абсолютно счастлива и рада, что взяли его обучение. Юсуп знает свой продукт на 1000% и помогает развиваться тем, кто хочет расти и достигать больших масштабов!»",
    author: "Шынар Шаймагамбетова",
    position: "Основатель Ipoteka Group",
  },
  {
    id: 11,
    text: "«Замечательное обучение — никакой воды, только конкретика. Огромное спасибо Юсупу за его харизму, энергетику и за то, как легко и доступно он объясняет простые, но невероятно эффективные вещи!»",
    author: "Жанар Кадырбекова",
    position: "Собственница I MEDICAL CLINIC",
  },
  {
    id: 12,
    text: "«Мы очень рады, что Юсуп Карада помог прокачать нашу команду. Мы подчеркнули для себя ценные инструменты, которые актуальны именно сейчас!»",
    author: "Акзия Табылганова",
    position: "Основатель Мебель Grade Astana",
  },
  {
    id: 13,
    text: "«Юсуп Карада — супер! Все уроки, которые смотрел я и моя команда, очень полезны. Если внедрить все эти инструменты, ваши менеджеры по продажам станут профессионалами!»",
    author: "Ренат Сагымбеков",
    position: "Компания «ЭКО ФИЛЬТРЫ»",
  },
  {
    id: 14,
    text: "«С этой платформой я знаком почти полтора года. Моя команда обучается и показывает результаты. Я также пригласил на обучение своих партнёров с Кокшетау. Сейчас у них 3 направления бизнеса и они спокойно продают на сумму от 10 миллионов тенге!»",
    author: "Джонибек Мухторов",
    position: "Бизнесмен, Парфюмерия",
  },
  {
    id: 15,
    text: "«Как руководитель, я осознал две главные проблемы: упущенный потенциал трафика, который уже привлекаем в салоны, и недостаточно эффективную работу с ним!»",
    author: "Владимир Мун",
    position: "Руководитель МДвери",
  },
  {
    id: 16,
    text: "«Сначала я был настроен скептически, но после обучения получил даже больше, чем ожидал. Юсуп делится собственными ошибками и рассказывает о реальных подводных камнях!»",
    author: "Болотбек Джусуев",
    position: "СК Аманат Сити",
  },
  {
    id: 17,
    text: "«Это обучение стало отличной возможностью освежить старые знания, вспомнить важное и узнать что-то новое. Здесь всё легко и заряжает на дорогие чеки и 100% конверсию в продажах!»",
    author: "Мария Каримова",
    position: "Собственница Art_line_nch г.Набережные Челны",
  },
  {
    id: 18,
    text: "«Мы получили очень полезную и ценную информацию. С уверенностью могу порекомендовать Юсупа для личного и профессионального роста!»",
    author: "Кутман Касымов",
    position: "Основатель агентства недвижимости КУТ",
  },
  {
    id: 19,
    text: "«Было очень полезно и насыщено практическими инструментами. Многие вещи мы вроде бы знаем и используем, но здесь нашлось множество новых фишек и интересных направлений!»",
    author: "Айбек Джангазиев",
    position: "Девелопер, Группа компаний Bellagio",
  },
  {
    id: 20,
    text: "«Мы привыкли следовать стандартам: как зайти к клиенту и что сказать. Но Юсуп акцентирует внимание на другом: как снять внутренние зажимы и вызвать доверие у клиента!»",
    author: "Олег Печенегин",
    position: "Коммерческий директор Choco Holding, Smart Restaurant",
  },
  {
    id: 21,
    text: "«Рекомендую это обучение всем — руководителям, владельцам бизнеса и продавцам, если вы хотите увеличить продажи. Даже с моим большим опытом в продажах я узнала много нового!»",
    author: "Наталья Меркулова",
    position: "Рекламное агентство",
  },
  {
    id: 22,
    text: "«Здесь всё про реальные инструменты, а не про успешный успех. Раньше я боялся продавать недвижимость за 300–400 тысяч фунтов, но теперь уверен, что могу работать с объектами за миллион!»",
    author: "Алмас Кигизбаев",
    position: "Продажа недвижимости на Северном Кипре",
  },
  {
    id: 23,
    text: "«Я как раз искала способ выйти на новый уровень — на более высокий сегмент продаж, и Юсуп говорил именно о том, что мне сейчас нужно, — о дорогих продажах!»",
    author: "Айгерим Молдабекова",
    position: "Основатель студии Ideal Home Design",
  },
  {
    id: 24,
    text: "«Юсуп — просто красавчик, столько энергии и позитива. Я получила много инсайтов. Обязательно буду его рекомендовать!»",
    author: "Улпан Смаилова",
    position: "Недвижимость",
  },
  {
    id: 25,
    text: "«На обучении осознала свои ошибки и поняла, почему у меня не получаются холодные звонки — причина в эмоциях и страхах. Я очень благодарна Юсупу и рекомендую его всем!»",
    author: "Гульмира Фархадовна",
    position: "Эксперт по недвижимости г. Дубай",
  },
  {
    id: 26,
    text: "«Наши менеджеры прошли обучение, и уже есть результаты: за этот месяц мы увеличили продажи почти на 60%! Нам всё очень понравилось!»",
    author: "Мейрамгуль Бадашева",
    position: "Финансовый директор Asia Group Service",
  },
  {
    id: 27,
    text: "«Мне очень понравилась система дожима и то, как правильно её применять. В результате удалось увеличить свой ежемесячный доход в два раза!»",
    author: "Кайрат Курманалиев",
    position: "Менеджер Q4tulpar",
  },
  {
    id: 28,
    text: "«Обучение дало много полезных инсайтов и практических приёмов для общения с клиентами. Юсуп поделился крутыми фишками, как действовать в сложных ситуациях!»",
    author: "Елена Насирова",
    position: "Основатель детского клуба Excellent",
  },
  {
    id: 29,
    text: "«Жестко, быстро, без воды — только настоящие инструменты. Юсуп, как практик, даёт только актуальную информацию. Это правильная инвестиция!»",
    author: "Александр Проценко",
    position: "РОП Мамины рецепты",
  },
  {
    id: 30,
    text: "«Я давно в продажах, но некоторые моменты оказались полезными. Это и уверенность, и грамотный дожим клиента, и умение выслушивать. Юсупа я бы порекомендовал всем!»",
    author: "Дияр Хизметов",
    position: "РОП KEPLER",
  },
  {
    id: 31,
    text: "«Юсуп — сильный эксперт, профессионал, который отлично знает свой продукт. Особенно понравилась его энергия и динамика. Всё чётко и по делу!»",
    author: "Айгали Бисекенов",
    position: "Строительство шунгитовых комнат Shungettas/kz",
  },
  {
    id: 32,
    text: "«За первый месяц я заключила сделки на 3 миллиона сом. Мы часто уверены, что всё знаем, но у нас есть над чем работать. Я вижу реальные результаты и, безусловно, буду рекомендовать!»",
    author: "Сумейе Алмаз кызы",
    position: "Руководитель проекта Digital",
  },
  {
    id: 33,
    text: "«Мне понравилось, что был составлен чёткий алгоритм переговоров и действий — ясной структуры часто не хватает. Рекомендую обучение Юсупа Карада!»",
    author: "Саёра Аматова",
    position: "Цветочный бизнес Pandora Flowers",
  },
  {
    id: 34,
    text: "«Очень понравился системный подход к обучению: четко прописаны шаги. Минимум воды, максимум практики и конкретных инструментов!»",
    author: "Анжелика Гомбоева",
    position: "Бизнес с Китаем г.Москва",
  },
  {
    id: 35,
    text: "«Юсуп Карада просто наповал влюбил меня за его открытость и профессионализм. Он дал практичные дельные советы для любой деятельности. Юсуп - один из ведущих тренеров, которого стоит слушать!»",
    author: "Надежда Широкова",
    position: "Группа компаний Промаш тест г.Пермь",
  },
  {
    id: 36,
    text: "«Все на высшем уровне! Особенно понравились кейсы и обсуждение концепции трех кругов. Любому владельцу бизнеса нужно постоянно учиться и прокачивать свои знания. Рекомендую курс Юсупа!»",
    author: "Жомарт Енсебаев",
    position: "Собственник Focus Energy",
  },
  {
    id: 37,
    text: "«Мне безумно понравилось, как Юсуп передает свои знания о продажах. Особенно запомнились его фишки по дожиму и работа с прогревом клиентов. Рекомендую Юсупа за его отношение к продажам!»",
    author: "Евгений Ким",
    position: "РОП Turk duniyasy",
  },
  {
    id: 38,
    text: "«Я давно слежу за Юсупом, и это одно из лучших обучений, которое я встречал! Если ваши продажи упали или их нет, приходите! Здесь вы получите все необходимые инструменты для роста!»",
    author: "Даулет Жакупбаев",
    position: "Собственник Prime mebel и Aina Group",
  },
  {
    id: 39,
    text: "«Юсуп — профессионал своего дела! Обучение у Юсупа — одно из лучших решений. Он заслуженно входит в число топовых тренеров по продажам. Всё отлично, всё классно, настоятельно рекомендую!»",
    author: "Ануар Ахметжанов",
    position: "Недвижимость",
  },
  {
    id: 40,
    text: "«Я узнал о себе многое, и оказалось, что я не совсем продавец. Но теперь есть над чем работать, буду практиковать! Обучение прошло максимально доступно и понятно, без сложных терминов!»",
    author: "Тимур Камбаров",
    position: "ProMaster детейлинг центр",
  },
  {
    id: 41,
    text: "«Это было очень круто! Мне все понравилось, все на высшем уровне. Юсуп — невероятно энергичный и харизматичный, с ним обучение проходит на одном дыхании. Однозначно рекомендую!»",
    author: "Құдірет Мырзабеков",
    position: "Школа тендера Alash Damu",
  },
  {
    id: 42,
    text: "«Подача материала была невероятно грамотной и доступной. Юсуп — настоящий профессионал. Он не просто теоретик, а практик, который делится своим опытом, знаниями и своим уникальным путем!»",
    author: "Эльмира Сердалина",
    position: "РОП бутик отеля Дом у озера",
  },
  {
    id: 43,
    text: "«Супер! Ожидал одного, а результат превзошел ожидания. Юсуп Аға — сильный тренер и мотиватор. Осознал, что в продажах допускал ошибки и учил этому сотрудников. Теперь буду исправлять!»",
    author: "Темирбек Омурзаков",
    position: "Предприниматель г.Бишкек",
  },
  {
    id: 44,
    text: "«Очень понравилось! Юсуп удивляет своей подачей и подходом. Планирую пересмотреть алгоритм продаж, добавить что-то новое и сделать акцент на дожиме. Это полезно и вдохновляет!»",
    author: "Анна Булавина",
    position: "Специализированный застройщик г.Новый Уренгой",
  },
  {
    id: 45,
    text: "«Обучение показало, что есть над чем работать. Все знания сложились в единую картину. Материала точно хватит на 3 месяца работы. Юсуп - невероятно харизматичный, но за этим стоит огромный бэкграунд и богатый опыт!»",
    author: "Мухамеджан Батырханов",
    position: "РОП Serilik Construction",
  },
  {
    id: 46,
    text: "«Юсуп — настоящий молодец, продажник номер один! Инструменты, которые я узнала, дали мне больше, чем все мои знания за последние 10 лет в сфере продаж. Однозначно рекомендую!»",
    author: "Асем Ишмухамбетова",
    position: "Основатель турагентства Danem Tour Woman Tours",
  },
  {
    id: 47,
    text: "«Мне всё понравилось! Самое главное, что я понял — чтобы знания усваивались, нужно в них инвестировать. Всё было доступно и понятно. Однозначно рекомендую!»",
    author: "Феликс Алексеев",
    position: "Бренд Скажи мама г. Чебоксары",
  },
  {
    id: 48,
    text: "«Я узнал, что 70% работы начинается именно после того, как клиент говорит: Я подумаю. На обучении я познакомился с классными инструментами, которые будем внедрять для себя и своих клиентов!»",
    author: "Жасулан Мештаев",
    position: "Собственник Prodvig",
  },
  {
    id: 49,
    text: "«Я в продажах более 15 лет и думала, что уже всё знаю, но оказалось, что нужно время, чтобы переварить полученную информацию. Юсуп умеет объяснять сложные вещи простым, понятным языком!»",
    author: "Надежда Фёдорова",
    position: "Онлайн продажи, Обучение по самопознанию",
  },
  {
    id: 50,
    text: "«Полезность предоставленной информации больше чем на 100%! Теперь мои продажи стали более системными, и мне начал нравиться сам процесс!»",
    author: "Алимжан Бахавдинов",
    position: "Разработка франшиз для МСБ",
  },
  {
    id: 51,
    text: "«Я смогла благодаря Юсупу разработать уникальное торговое предложение. Я применила очень много инструментов, которые получила от Юсупа!»",
    author: "Фатима Алибекова",
    position: "Менеджер по развитию TAXPOINT",
  },
  {
    id: 52,
    text: "«Очень много примеров, как работает маркетинг эффективно, как работать с конкуренцией, со своими клиентами, как привлекать их и удерживать!»",
    author: "Анастасия Берилло",
    position: "Сетевой бизнес",
  },
  {
    id: 53,
    text: "«Очень полезную информацию получили от Юсупа Карада. Инструменты, действительно, приняли, и получили результат. Нам это все помогло!»",
    author: "Ферхат Джанполат",
    position: "Директор",
  },
  {
    id: 54,
    text: "«Уроки огонь! Каждый день смотрю и практикую!»",
    author: "Андрей Русак",
    position: "Предприниматель",
  },
  {
    id: 55,
    text: "«Продажи увеличились на 30%. Менеджеры стали продавать легко. Клиенты стали реже просить скидку. Мы улучшили сервис и подняли цены. Платформа очень удобная, заточена на Казахстан. Рекомендую!»",
    author: "Руслан Гани",
    position: "Собственник",
  },
];

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const visibleSlidesCount =
    testimonials.length > 2 ? testimonials.length - 2 : testimonials.length;

  // Определяем мобильное устройство
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Функция для перехода к определенному слайду
  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentSlide) return;

      setCurrentSlide(index);

      if (isMobile && scrollContainerRef.current) {
        setIsProgrammaticScroll(true);

        const cards =
          scrollContainerRef.current.querySelectorAll(".testimonial-card");
        if (cards && cards[index]) {
          cards[index].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });

          // Сбрасываем флаг программного скролла после завершения анимации
          setTimeout(() => {
            setIsProgrammaticScroll(false);
          }, 500);
        }
      }
    },
    [currentSlide, isMobile]
  );

  // Функции для навигации по слайдеру
  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % visibleSlidesCount);
  }, [currentSlide, goToSlide, visibleSlidesCount]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide === 0 ? visibleSlidesCount - 1 : currentSlide - 1);
  }, [currentSlide, goToSlide, visibleSlidesCount]);

  // Настройка IntersectionObserver для отслеживания видимых карточек
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current || isProgrammaticScroll)
      return;

    // Отключаем предыдущий observer, если он существует
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Создаем новый observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll) return;

        // Находим карточку с наибольшей видимостью
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Сортируем по соотношению пересечения (от большего к меньшему)
          visibleEntries.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

          // Берем карточку с наибольшей видимостью
          const mostVisibleEntry = visibleEntries[0];
          const index = Number.parseInt(
            mostVisibleEntry.target.getAttribute("data-index") || "0"
          );

          if (index !== currentSlide) {
            setCurrentSlide(index);
          }
        }
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.6, // Карточка считается видимой, если видно 60% её площади
        rootMargin: "0px",
      }
    );

    // Наблюдаем за всеми карточками
    const cards =
      scrollContainerRef.current.querySelectorAll(".testimonial-card");
    cards.forEach((card) => {
      observerRef.current?.observe(card);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [isMobile, currentSlide, isProgrammaticScroll]);

  // Обработчик скролла для дополнительной синхронизации
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current || isProgrammaticScroll)
      return;

    const handleScroll = () => {
      if (isProgrammaticScroll) return;

      // Дополнительная логика для обработки скролла, если IntersectionObserver не сработал
      // Этот код будет выполняться только если пользователь скроллит вручную
      requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const containerWidth = container.clientWidth;
          const scrollPosition = container.scrollLeft;
          const cardWidth =
            container.querySelector(".testimonial-card")?.clientWidth || 0;

          if (cardWidth > 0) {
            const centerPosition = scrollPosition + containerWidth / 2;
            const estimatedIndex = Math.round(centerPosition / cardWidth);

            if (
              estimatedIndex >= 0 &&
              estimatedIndex < visibleSlidesCount &&
              estimatedIndex !== currentSlide
            ) {
              setCurrentSlide(estimatedIndex);
            }
          }
        }
      });
    };

    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, currentSlide, isProgrammaticScroll, visibleSlidesCount]);

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6">
        {/* Кнопки навигации только для десктопа */}
        {!isMobile && (
          <div className="flex gap-1 xs:gap-1.5 sm:gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
              onClick={prevSlide}
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
              onClick={nextSlide}
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            </Button>
          </div>
        )}
      </div>

      {/* Десктопный слайдер */}
      {!isMobile && (
        <div ref={sliderRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6"
            style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="flex-shrink-0 w-[calc(33.333%-8px)] xs:w-[calc(33.333%-12px)] sm:w-[calc(33.333%-16px)] md:w-[calc(33.333%-20px)] lg:w-[calc(33.333%-24px)] bg-white shadow-md rounded-lg p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col"
              >
                <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 md:space-y-3.5 lg:space-y-4">
                  <p className="text-gray-700 italic text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-base line-clamp-6 xs:line-clamp-6 sm:line-clamp-5 md:line-clamp-none">
                    {testimonial.text}
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base">
                      {testimonial.author}
                    </h4>
                    <p className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Мобильный скролл с 1 карточкой */}
      {isMobile && (
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
        >
          <div className="flex gap-2 w-max">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="testimonial-card flex-shrink-0 w-[calc(100vw-32px)] snap-center"
                data-index={index}
              >
                <Card className="h-full bg-white shadow-md rounded-lg p-3 flex flex-col">
                  <div className="space-y-2">
                    <p className="text-gray-700 italic text-xs line-clamp-6">
                      {testimonial.text}
                    </p>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        {testimonial.author}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Индикаторы слайдов */}
      <div className="flex justify-center mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6">
        {isMobile ? (
          <div className="text-xs xs:text-sm text-gray-600 font-medium">
            Страница {currentSlide + 1} из {visibleSlidesCount}
          </div>
        ) : (
          <div className="flex gap-0.5 xs:gap-0.5 sm:gap-1">
            {Array.from({ length: visibleSlidesCount }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentSlide
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Перейти к отзыву ${index + 1}`}
                aria-current={index === currentSlide ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE и Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari и Opera */
        }
      `}</style>
    </div>
  );
}
