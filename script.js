if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

        const portfolioProjectsData = {
            proj1: { 
                heroImg: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", 
                gallery: [
                    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1600566753086-00f18efc204b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1600573472592-401b489a8710?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1600210491892-03b5484ca9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ], 
                tech: ['tech_plaster', 'tech_screed', 'tech_networks', 'tech_sound', 'tech_paint'] 
            },
            proj2: { 
                heroImg: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", 
                gallery: [
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1600585154526-990dced4e56d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1600040901028-cb863254e456?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1600566752229-250da7d96cc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1583847268964-b28ce8f52859?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ], 
                tech: ['tech_facade', 'tech_smarthome', 'tech_heating', 'tech_networks', 'tech_sound'] 
            },
            proj3: { 
                heroImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", 
                gallery: [
                    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ], 
                tech: ['tech_sound_danosa', 'tech_porcelanosa', 'tech_3phase', 'tech_vent', 'tech_ac', 'tech_micro', 'tech_fire'] 
            },
            proj4: { 
                heroImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", 
                gallery: [
                    "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1600585154166-d8897c8f039b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ], 
                tech: ['tech_hidden', 'tech_shadow', 'tech_networks', 'tech_plaster'] 
            },
            proj5: { 
                heroImg: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", 
                gallery: [
                    "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1521590832167-7bfc6204631d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1516975080661-422fc9910d1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ], 
                tech: ['tech_plumbing', 'tech_light', 'tech_paint_wash', 'tech_mold'] 
            },
            proj6: { 
                heroImg: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", 
                gallery: [
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
                    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                ], 
                tech: ['tech_aero', 'tech_eco', 'tech_sound', 'tech_plaster', 'tech_screed'] 
            }
        };

        const blogArticlesData = {
            article1: { heroImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", tagKey: "blog_tag_1", titleKey: "blog_1_title", dateKey: "blog_1_date", readTimeKey: "blog_1_read", bodyKey: "blog_1_body", relatedId: "article2" },
            article2: { heroImg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", tagKey: "blog_tag_2", titleKey: "blog_2_title", dateKey: "blog_2_date", readTimeKey: "blog_2_read", bodyKey: "blog_2_body", relatedId: "article1" }
        };

        const translations = {
            ru: {
                nav_services: "Услуги", nav_benefits: "Преимущества", nav_process: "Этапы", nav_portfolio: "Объекты", nav_reviews: "Отзывы", nav_faq: "FAQ", nav_blog: "Блог", btn_consultation: "Консультация",
                hero_title: "РЕМОНТ ПОД КЛЮЧ В ВАЛЕНСИИ", hero_desc: "Создаем идеальные интерьеры для жизни и бизнеса. Берем на себя всё: от разработки дизайн-проекта и получения лицензий (Licencia de obra) до финальной уборки.", btn_estimate: "Рассчитать смету", btn_our_projects: "Наши объекты",
                services_title: "НАШИ УСЛУГИ", services_desc: "Выполняем полный цикл строительно-отделочных работ с соблюдением испанских норм и европейских стандартов качества.",
                serv_1_title: "Комплексный ремонт", serv_1_desc: "Капитальный ремонт квартир и вилл под ключ. Демонтаж, коммуникации, черновая и чистовая отделка.",
                serv_2_title: "Дизайн-интерьера", btn_details: "Подробнее",
                serv_3_title: "Ремонт коммерции", serv_3_desc: "Адаптация помещений под рестораны, офисы и магазины. Согласование проекта с Ayuntamiento.",
                serv_4_title: "Инженерные сети", serv_5_title: "Лицензии и проекты", serv_5_desc: "Помощь архитектора в получении Licencia de obra mayor/menor и смене назначения.", serv_6_title: "Умный дом (Domótica)",
                why_title: "ПОЧЕМУ ВЫБИРАЮТ НАС", why_desc: "Ремонт в Испании имеет свою специфику. Мы знаем, как обойти все подводные камни и сдать объект без задержек.",
                why_1_title: "Твердая смета", why_1_desc: "Стоимость работ фиксируется в договоре и не увеличивается в процессе ремонта.", why_2_title: "Соблюдение сроков", why_2_desc: "Мы ценим ваше время. За каждый день просрочки прописаны штрафные санкции.", why_3_title: "Штатные бригады", why_3_desc: "Никаких случайных людей. Работают только проверенные профильные мастера.", why_4_title: "Официальная гарантия", why_4_desc: "Предоставляем гарантию на все черновые и инженерные работы от 3 до 5 лет.",
                banner_title: "НАЧНИТЕ РЕМОНТ БЕЗ СТРЕССА", banner_desc: "ЗАПИШИТЕСЬ НА БЕСПЛАТНЫЙ ВЫЕЗД ИНЖЕНЕРА ДЛЯ ЗАМЕРА И ОЦЕНКИ ОБЪЕКТА", btn_call: "Позвонить", btn_leave_request: "Оставить заявку",
                process_title: "КАК МЫ РАБОТАЕМ", btn_learn_more: "Узнать подробнее", proc_1_title: "Замер и консультация", proc_1_desc: "Наш инженер выезжает на объект в Валенсии, проводит точные замеры.", proc_2_title: "Смета и договор", proc_2_desc: "Составляем прозрачную смету с детализацией работ и материалов. Подписываем официальный контракт.", proc_3_title: "Подготовка и закупка", proc_3_desc: "Оформляем разрешения (Licencia), закупаем и завозим материалы. Защищаем зоны общего пользования.", proc_4_title: "Строительные работы", proc_4_desc: "Выполняем демонтаж, возведение стен, разводку электрики, сантехники и чистовую отделку строго по графику.", proc_5_title: "Сдача объекта", proc_5_desc: "Проводим клининг, вывозим остатки мусора и передаем вам ключи от полностью готового и чистого помещения.", btn_call_engineer: "ВЫЗВАТЬ ИНЖЕНЕРА",
                portf_title: "НАШИ ОБЪЕКТЫ\nКОТОРЫМИ МЫ ГОРДИМСЯ", portf_1_tag: "Апартаменты • Ruzafa", portf_1_title: "Капитальный ремонт 90 м²", portf_1_desc: "Полная перепланировка в историческом фонде, сохранение оригинальной кирпичной кладки, замена перекрытий.", portf_2_tag: "Дом • El Cabañal", portf_2_title: "Реконструкция таунхауса", portf_2_desc: "Восстановление фасада, создание открытой террасы на крыше, монтаж системы Умный дом и теплых полов.", portf_3_tag: "Ресторан • Av. de França, 14", portf_3_title: "Ресторан Pasqual&Sheila", portf_3_desc: "Полная адаптация помещения под требования ресторана, обустройство профессиональной кухни, систем вентиляции и клиентского зала.", portf_4_tag: "Апартаменты • Ciutat Vella", portf_4_title: "Ремонт апартаментов", portf_4_desc: "Реализация эксклюзивного дизайн-проекта с использованием премиальных материалов, скрытых дверей и световых линий.", portf_5_tag: "Салон красоты • Plaça de Vannes, 6", portf_5_title: "Салон красоты Misha", portf_5_desc: "Обустройство рабочих зон, специальное освещение с правильным индексом цветопередачи, монтаж мокрых точек и стильный ресепшн.", portf_6_tag: "Квартира • Eixample", portf_6_title: "Комплексный ремонт квартиры", portf_6_desc: "Светлая и просторная квартира для молодой семьи. Черновая и чистовая отделка, замена всех коммуникаций и монтаж аэротермии.",
                reviews_title: "ОТЗЫВЫ КЛИЕНТОВ", rev_1_text: "«Ребята делали ремонт в нашей новой квартире в Бенимаклете. Сделали всё под ключ, мы находились в другой стране и контролировали процесс по фото и видео. Качество супер!»", rev_1_name: "Алексей М.", rev_1_obj: "Квартира 75 м²", rev_2_text: "«Долго искали подрядчика для ремонта коммерческого помещения под кафе. NIVELLUX взяли на себя всё: от лицензии Proyecto de Actividad до расстановки столов. Открылись вовремя.»", rev_2_name: "Елена Миронова", rev_2_obj: "Кафетерий, Eixample", rev_3_text: "«Отличная коммуникация. Прораб всегда на связи, смета прозрачная. Была небольшая задержка с поставкой плитки, но мастера успели нагнать сроки за счет малярки.»", rev_3_name: "Дмитрий К.", rev_3_obj: "Апартаменты, Патерна",
                stat_1: "Сданных объектов", stat_2: "Лет в Испании", stat_3: "Мастеров в штате", stat_4: "Года гарантии", video_title: "РУМТУР: ГОТОВЫЙ ОБЪЕКТ", video_desc: "Посмотрите наш видео-отчет с недавно завершенного объекта. Мы показываем качество финишной отделки, стыки материалов, работу инженерных систем и то, как выглядит квартира перед сдачей ключей клиенту.", btn_all_video: "Смотреть все видео",
                tech_title: "МАТЕРИАЛЫ И РЕШЕНИЯ", tech_1_pre: "Идеально ровные стены.", tech_1_title: "Машинная штукатурка", tech_1_desc: "Забываем о кривых стенах старого фонда. Используем механизированное нанесение и лазерные уровни для создания безупречной геометрии под покраску.", tech_2_pre: "Фундамент для вашего покрытия.", tech_2_title: "Лазерная стяжка пола", tech_2_desc: "Никаких перепадов высот. Создаем идеально ровное основание, на которое плитка или ламинат ложатся без лишнего расхода клея и скрипа.", tech_3_pre: "Безопасность и надежность.", tech_3_title: "Инженерные сети 2.0", tech_3_desc: "Полная замена старой проводки и труб на современные системы. Проектируем щитки с защитой от скачков напряжения и коллекторную разводку воды.", tech_4_pre: "Здоровый микроклимат.", tech_4_title: "Стоп-плесень и влага", tech_4_desc: "Специализированная гидроизоляция «мокрых» зон и антигрибковая обработка стен. Решаем проблему влажности, типичную для климата Испании.", tech_5_pre: "Экономия на счетах.", tech_5_title: "Энергосбережение", tech_5_desc: "Установка окон с терморазрывом и утепление контуров. Ваш дом сохраняет тепло зимой и прохладу летом, снижая расходы на кондиционер.", tech_6_pre: "Тишина в квартире.", tech_6_title: "Шумоизоляция", tech_6_desc: "Используем современные мембраны (Copopren, Danosa) для защиты от шума соседей и улицы. Создаем «акустический кокон» в спальнях и детских.", tech_7_pre: "Эстетика и практичность.", tech_7_title: "Финишная малярка", tech_7_desc: "Стены под покраску со стеклохолстом (защита от трещин). Используем износостойкие краски, которые не выгорают и легко моются.", tech_8_pre: "Современный минимализм.", tech_8_title: "Скрытые системы", tech_8_desc: "Интегрируем скрытые двери (Invisible), теневые профили и встроенные люки. Весь технологический «шум» спрятан, остается только чистый дизайн.",
                faq_title: "ЧАСТЫЕ ВОПРОСЫ", faq_1_q: "Сколько стоит квадратный метр ремонта под ключ?", faq_1_a: "Стоимость зависит от состояния объекта и уровня отделки. В среднем капитальный ремонт в Валенсии начинается от 600€ до 900€ за квадратный метр. Точная цифра фиксируется в смете после замера.", faq_2_q: "Вы помогаете с получением лицензии (Licencia de obra)?", faq_2_a: "Да. Наш архитектор подготовит проект (Proyecto técnico) для мэрии, подаст декларацию (Declaración responsable) для мелких работ или получит полноценную лицензию для масштабных изменений.", faq_3_q: "Нужно ли мое присутствие в Валенсии во время ремонта?", faq_3_a: "Нет, многие наши клиенты живут в других странах. Мы предоставляем еженедельные фото- и видеоотчеты о проделанной работе, а все текущие вопросы решаем дистанционно.", faq_4_q: "Помогаете ли вы с закупкой чистовых материалов?", faq_4_a: "Да, мы можем сопроводить вас в шоурумы наших партнеров в Валенсии, поможем с выбором плитки, сантехники и ламината, а также организуем их доставку и подъем на объект.",
                blog_title: "ПОЛЕЗНЫЕ СТАТЬИ И СОВЕТЫ", btn_all_articles: "Все статьи", blog_tag_1: "Смета 2026", blog_1_title: "Сколько стоит ремонт квартиры в Валенсии в 2026 году?", blog_1_desc: "Разбор реальной сметы: от демонтажа до финишной отделки. Рассказываем про актуальные цены на работы, черновые материалы и влияние инфляции.", blog_tag_2: "Недвижимость", blog_2_title: "Инвестиции в Валенсию: выбираем квартиру под ремонт (Flipping)", blog_2_desc: "Районы, которые принесут максимальный ROI. На что смотреть при покупке старого фонда, чтобы не разориться на скрытых дефектах и замене перекрытий.", btn_read_more: "Читать полностью",
                footer_desc: "Ремонтно-строительная компания в Валенсии. Строим ваше будущее по собственному плану.", footer_menu: "Меню", footer_contacts: "Контакты", footer_rights: "Все права защищены.",
                modal_title: "Рассчитать смету", modal_desc: "Укажите параметры вашего объекта, и мы свяжемся с вами для детального расчета стоимости работ.", modal_type: "Тип объекта", modal_type_1: "Квартира", modal_type_2: "Дом / Вилла", modal_type_3: "Коммерция", modal_area: "Площадь объекта (м²)", modal_works: "Планируемые работы", modal_work_1: "Демонтажные работы", modal_work_2: "Электромонтаж", modal_work_3: "Сантехнические работы", modal_work_4: "Штукатурно-малярные", modal_work_5: "Хочу ремонт «под ключ» (все включено)", modal_contacts: "Ваши контакты", modal_name_ph: "Ваше имя", modal_btn: "Запросить расчет", modal_success_title: "Спасибо за заявку!", modal_success_desc: "Мы получили параметры вашего объекта. Наш менеджер свяжется с вами в ближайшее время для обсуждения деталей и составления предварительной сметы.", btn_close: "Закрыть", modal_consult_title: "Запись на консультацию", modal_consult_desc: "Оставьте свои контакты, и наш специалист свяжется с вами в ближайшее время.", btn_send: "Отправить", modal_success_desc_short: "Наш менеджер свяжется с вами в ближайшее время.",
                modal_design_title: "Дизайн интерьера", modal_design_desc: "Мы создаем не просто красивые картинки, а продуманные до миллиметра технические проекты. Наш дизайн — это подробное руководство для строителей, которое исключает ошибки на этапе реализации и гарантирует 100% совпадение готового ремонта с вашей изначальной задумкой.", modal_design_process_title: "Как мы работаем:", modal_design_step_1: "1. Планировочное решение", modal_design_step_1_desc: "Прорабатываем эргономику и расстановку мебели с учетом ваших повседневных привычек и сценариев жизни.", modal_design_step_2: "2. 3D-Визуализация", modal_design_step_2_desc: "Создаем фотореалистичные рендеры будущего интерьера, чтобы вы могли увидеть свой дом до начала стройки.", modal_design_step_3: "3. Рабочая документация", modal_design_step_3_desc: "Готовим детальные чертежи, развертки стен, схемы разводки электрики и сантехники для строительной бригады.", modal_design_step_4: "4. Комплектация", modal_design_step_4_desc: "Осуществляем подбор реальных чистовых материалов, освещения и мебели строго в рамках согласованного бюджета.", modal_design_cta: "Заказать дизайн-проект",
                modal_eng_title: "Инженерные сети", modal_eng_desc: "Надежные инженерные системы — это кровеносная система вашего дома. Мы проектируем и монтируем электропроводку, водоснабжение, отопление и вентиляцию в строгом соответствии с европейскими нормами безопасности (REBT, CTE).", modal_eng_process_title: "Что входит в наши услуги:", modal_eng_step_1: "1. Электромонтаж", modal_eng_step_1_desc: "Проектирование распределительных щитов, прокладка новых трасс, установка розеток и надежных автоматов защиты.", modal_eng_step_2: "2. Водоснабжение и канализация", modal_eng_step_2_desc: "Монтаж коллекторных систем, замена труб на сшитый полиэтилен или металлопластик, защита от протечек.", modal_eng_step_3: "3. Отопление и климат", modal_eng_step_3_desc: "Установка энергоэффективных систем аэротермии, теплых полов, канального кондиционирования и вентиляции.", modal_eng_step_4: "4. Слаботочные системы", modal_eng_step_4_desc: "Прокладка интернет-кабелей (оптоволокно), установка систем видеонаблюдения и охранной сигнализации.", modal_eng_cta: "Рассчитать стоимость сетей",
                modal_sh_title: "Умный дом (Domótica)", modal_sh_desc: "Сделайте вашу жизнь комфортнее и безопаснее с помощью передовых систем автоматизации. Мы сотрудничаем с ведущими производителями оборудования и выполняем настройку всей системы «под ключ» — от проекта до установки приложения на ваш смартфон.", modal_sh_process_title: "Возможности умного дома:", modal_sh_step_1: "1. Умное освещение", modal_sh_step_1_desc: "Управление светом с телефона или голосом. Настройка удобных сценариев (например, кнопка «Выключить всё» при уходе).", modal_sh_step_2: "2. Климат-контроль", modal_sh_step_2_desc: "Автоматическое поддержание идеальной температуры и влажности в каждой комнате для максимального комфорта и экономии.", modal_sh_step_3: "3. Безопасность и доступ", modal_sh_step_3_desc: "Интеграция датчиков протечки, дыма, умных замков и камер с мгновенным оповещением на ваш телефон о любых инцидентах.", modal_sh_step_4: "4. Шторы и мультимедиа", modal_sh_step_4_desc: "Автоматическое открытие жалюзи по утрам и интеграция домашних кинотеатров або аудіосистем в общую экосистему.", modal_sh_cta: "Узнать подробнее об умном доме",
                modal_comp_title: "Комплексный ремонт под ключ", modal_comp_desc: "Берем на себя всю ответственность за ваш ремонт. От первого эскиза до расстановки мебели. Вы получаете готовое жилье без стресса и необходимости ежедневно ездить на стройку.", modal_comp_process_title: "Этапы работ:", modal_comp_step_1: "Демонтаж и возведение", modal_comp_step_1_desc: "Снос старых конструкций, вывоз мусора, возведение новых перегородок.", modal_comp_step_2: "Инженерные сети", modal_comp_step_2_desc: "Монтаж электрики, труб водоснабжения, канализации и систем кондиционирования.", modal_comp_step_3: "Черновая отделка", modal_comp_step_3_desc: "Выравнивание стен (штукатурка), заливка стяжки пола, монтаж гипсокартона.", modal_comp_step_4: "Чистовая отделка", modal_comp_step_4_desc: "Укладка плитки, покраска стен, монтаж напольных покрытий и плинтусов.", modal_comp_step_5: "Завершение", modal_comp_step_5_desc: "Установка розеток, светильников, сантехники, дверей и финальный клининг.", modal_comp_form_title: "Получить смету", modal_comp_form_desc: "Оставьте заявку, и мы бесплатно рассчитаем предварительную стоимость вашего ремонта.",
                modal_comm_title: "Ремонт коммерции", modal_comm_desc: "Открываете ресторан, салон красоты или офис? Мы знаем все технические и юридические нюансы ремонта коммерции в Валенсии, чтобы вы прошли проверки мэрии с первого раза.", modal_comm_process_title: "На что мы обращаем внимание:", modal_comm_step_1: "Лицензии (Proyecto de Actividad)", modal_comm_step_1_desc: "Разработка проекта инженером, согласование с Ayuntamiento, соблюдение норм доступности (пандусы, санузлы для инвалидов).", modal_comm_step_2: "Электрическая мощность", modal_comm_step_2_desc: "Расчет пиковых нагрузок для профессионального оборудования, трехфазная сеть и подготовка (Boletín Eléctrico).", modal_comm_step_3: "Вентиляция и вытяжка", modal_comm_step_3_desc: "Проектирование систем дымоудаления (Salida de humos) для кухонь и систем обновления воздуха по нормам RITE.", modal_comm_step_4: "Звукоизоляция (Estudio acústico)", modal_comm_step_4_desc: "Обязательные акустические проекты для баров. Монтаж виброподвесов и панелей для защиты от штрафов.", modal_comm_step_5: "Пожарная безопасность", modal_comm_step_5_desc: "Использование огнестойких материалов, проектирование путей эвакуации и систем пожаротушения согласно испанскому CTE.",
                modal_lic_title: "Лицензии и проекты", modal_lic_desc: "Строительство и ремонт в Испании строго регламентированы. Мы берем на себя всю бюрократию: от разработки архитектурного проекта до получения финальных разрешений в мэрии (Ayuntamiento). Вы экономите время и избегаете штрафов.", modal_lic_process_title: "Чем мы помогаем:", modal_lic_step_1: "Licencia de Obra Menor", modal_lic_step_1_desc: "Декларация (Declaración Responsable) для мелких работ, не затрагивающих несущие конструкции. Оформляем для быстрого старта.", modal_lic_step_2: "Licencia de Obra Mayor", modal_lic_step_2_desc: "Капитальный ремонт, перепланировка, затрагивание фасада. Наш архитектор разрабатывает полный Proyecto Técnico.", modal_lic_step_3: "Cambio de Uso (Смена назначения)", modal_lic_step_3_desc: "Перевод коммерческого помещения (local) в жилое (vivienda). Проверяем пригодность и готовим документацию.", modal_lic_step_4: "Легализация (Legalización)", modal_lic_step_4_desc: "Узаконивание ранее сделанных пристроек или перепланировок для беспроблемной продажи или сдачи в аренду.", modal_lic_step_5: "Сертификаты (Cédula / CEE)", modal_lic_step_5_desc: "Получение сертификатов пригодности для жилья и энергоэффективности, необходимых для подключения света и воды.", modal_lic_form_title: "Получить консультацию", modal_lic_form_desc: "Оставьте заявку, и наш архитектор свяжется с вами для бесплатной оценки вашей ситуации.",
                
                portf_mod_desc_title: "О проекте", portf_mod_stat1_label: "Срок реализации", portf_mod_stat2_label: "Тип объекта", portf_mod_steps_title: "Как проходил ремонт", portf_mod_tech_title: "Использованные решения", portf_mod_gallery_title: "Галерея проекта", portf_mod_cta_title: "Хочу такой же результат!", portf_mod_cta_desc: "Оставьте свои контакты, и мы свяжемся с вами для обсуждения вашего проекта. Первичная консультация и выезд на замер — бесплатно.", portf_mod_btn_send: "Связаться",
                tech_plaster: "Машинная штукатурка", tech_screed: "Лазерная стяжка пола", tech_networks: "Инженерные сети 2.0", tech_sound: "Шумоизоляция", tech_paint: "Финишная малярка", tech_facade: "Реставрация фасада", tech_smarthome: "Умный дом", tech_heating: "Теплый пол", tech_sound_danosa: "Звукоизоляция Danosa", tech_porcelanosa: "Керамогранит Porcelanosa", tech_3phase: "Трехфазная сеть", tech_vent: "Профессиональная вытяжка", tech_ac: "Канальный кондиционер", tech_micro: "Микроцемент", tech_fire: "Огнестойкие материалы", tech_hidden: "Скрытые системы (Invisible)", tech_shadow: "Теневой профиль", tech_plumbing: "Множественные мокрые точки", tech_light: "Профессиональный свет", tech_paint_wash: "Моющаяся краска", tech_mold: "Стоп-плесень и влага", tech_aero: "Аэротермия", tech_eco: "Энергосбережение",
                
                proj1_tag1: "Квартира", proj1_tag2: "Полный ремонт", proj1_title: "Капитальный ремонт 90 м²", proj1_address: "Ruzafa, Валенсия", proj1_desc_text: "Полная перепланировка в историческом фонде, сохранение оригинальной кирпичной кладки, замена перекрытий. Выполнили качественные внутренние отделочные работы, превратив старую квартиру в стильное и современное жилье.", proj1_stat1_val: "3.5 месяца", proj1_stat2_val: "Квартира", proj1_step1: "Демонтаж", proj1_step1_d: "Снос перегородок, очистка стен до кирпича.", proj1_step2: "Инженерия", proj1_step2_d: "Новая проводка, трубы, система кондиционирования.", proj1_step3: "Черновая отделка", proj1_step3_d: "Машинная штукатурка, лазерная стяжка.", proj1_step4: "Чистовая отделка", proj1_step4_d: "Укладка пола, покраска, скрытые двери.",
                proj2_tag1: "Реконструкция", proj2_tag2: "Дом", proj2_title: "Реконструкция таунхауса", proj2_address: "El Cabañal, Валенсия", proj2_desc_text: "Масштабная реконструкция традиционного валенсийского дома. Провели восстановление фасада, создали новую открытую террасу на крыше, смонтировали систему 'Умный дом' и теплые полы для максимального комфорта.", proj2_stat1_val: "5 месяцев", proj2_stat2_val: "Таунхаус", proj2_step1: "Фасад и Кровля", proj2_step1_d: "Реставрация фасада, гидроизоляция крыши.", proj2_step2: "Демонтаж", proj2_step2_d: "Усиление несущих конструкций.", proj2_step3: "Инженерия", proj2_step3_d: "Теплые полы, аэротермия, умный дом.", proj2_step4: "Отделка", proj2_step4_d: "Премиальные материалы, декор.",
                proj3_tag1: "Коммерция", proj3_tag2: "Реконструкция", proj3_title: "Ресторан Pasqual&Sheila", proj3_address: "Av. de França, 14, Валенсия", proj3_desc_text: "Полная реконструкция помещения под современный ресторан. Выполнили масштабные работы по прокладке всех инженерных сетей, мощную электромонтажную разводку, установили профессиональную вентиляцию (Salida de humos) и звукоизоляцию.", proj3_stat1_val: "7 месяцев", proj3_stat2_val: "Коммерция (Ресторан)", proj3_step1: "Проект и Лицензии", proj3_step1_d: "Проект, акустическое исследование, лицензия.", proj3_step2: "Глубокий демонтаж", proj3_step2_d: "Полная очистка и подготовка помещения.", proj3_step3: "Сложная инженерия", proj3_step3_d: "Трехфазная сеть, вентиляция, акустика.", proj3_step4: "Премиум отделка", proj3_step4_d: "Керамогранит, микроцемент, декор.",
                proj4_tag1: "Квартира", proj4_tag2: "Дизайн-проект", proj4_title: "Ремонт апартаментов", proj4_address: "Ciutat Vella, Валенсия", proj4_desc_text: "Быстрый и качественный внутренний ремонт по эксклюзивному дизайн-проекту. Использовали скрытые решения (двери Invisible, теневые плинтуса) и сложные системы световых линий.", proj4_stat1_val: "2 месяца", proj4_stat2_val: "Апартаменты", proj4_step1: "Дизайн-проект", proj4_step1_d: "Согласование визуализаций и чертежей.", proj4_step2: "Демонтаж", proj4_step2_d: "Быстрая подготовка квартиры.", proj4_step3: "Черновая отделка", proj4_step3_d: "Идеальное выравнивание под скрытый монтаж.", proj4_step4: "Чистовая и Свет", proj4_step4_d: "Покраска, монтаж световых линий и мебели.",
                proj5_tag1: "Коммерция", proj5_tag2: "Полный ремонт", proj5_title: "Салон красоты Misha", proj5_address: "Plaça de Vannes, 6, Валенсия", proj5_desc_text: "Специализированный ремонт для бьюти-индустрии. Организовали грамотное зонирование, проложили разветвленную сеть труб для множества мокрых точек (моек), установили профессиональное освещение с правильным индексом цветопередачи.", proj5_stat1_val: "5 месяцев", proj5_stat2_val: "Салон красоты", proj5_step1: "Проект", proj5_step1_d: "План зонирования и эргономики.", proj5_step2: "Сантехника", proj5_step2_d: "Сложная разводка труб под мойки.", proj5_step3: "Спец. освещение", proj5_step3_d: "Профессиональный свет без теней.", proj5_step4: "Отделка", proj5_step4_d: "Моющиеся стены, износостойкий пол, ресепшн.",
                proj6_tag1: "Квартира", proj6_tag2: "Полный ремонт", proj6_title: "Комплексный ремонт квартиры", proj6_address: "Eixample, Валенсия", proj6_desc_text: "Создали светлую и просторную квартиру для молодой семьи. Сделали полную замену всех коммуникаций, качественную шумоизоляцию и смонтировали систему энергоэффективной аэротермии.", proj6_stat1_val: "3.5 месяца", proj6_stat2_val: "Квартира", proj6_step1: "Демонтаж", proj6_step1_d: "Снос не-несущих стен, очистка.", proj6_step2: "Коммуникации", proj6_step2_d: "Новая электрика, подготовка под аэротермию.", proj6_step3: "Черновая отделка", proj6_step3_d: "Шумоизоляция, стяжка, штукатурка.", proj6_step4: "Чистовая отделка", proj6_step4_d: "Укладка пола, покраска, финальный декор.",
                blog_related: "Читайте также", blog_1_date: "12 апреля 2026", blog_1_read: "5 мин чтения", blog_2_date: "4 марта 2026", blog_2_read: "7 мин чтения",
                blog_1_body: "<p>Планируете ремонт в 2026 году? Цены на строительные материалы и работы в Валенсии продолжают меняться. В этой статье мы подробно разберем реальную смету на капитальный ремонт квартиры площадью 90 м².</p><h3 class='text-2xl font-bold text-brand-dark mt-10 mb-4'>1. Демонтаж и подготовка</h3><p>В старом фонде демонтаж занимает значительную часть бюджета. Снос старых перегородок, снятие слоев штукатурки и вывоз строительного мусора обойдутся примерно в 15-20% от общей сметы.</p><blockquote class='border-l-4 border-brand-accent pl-6 italic text-gray-600 my-8 bg-brand-light/50 py-4 rounded-r-xl'>Важно: всегда закладывайте дополнительные 10% бюджета на непредвиденные расходы при вскрытии старых полов и стен.</blockquote><h3 class='text-2xl font-bold text-brand-dark mt-10 mb-4'>2. Черновые работы и инженерные сети</h3><ul class='list-disc pl-6 space-y-2 mb-6'><li><b>Электрика:</b> Полная замена проводки, установка нового щитка (Boletín Eléctrico).</li><li><b>Сантехника:</b> Разводка труб из сшитого полиэтилена, установка инсталляций.</li><li><b>Выравнивание:</b> Лазерная стяжка пола и машинная штукатурка стен по маякам.</li></ul><p>Этот этап — фундамент вашего ремонта. Экономить на скрытых работах категорически не рекомендуется, так как исправление ошибок после чистовой отделки обойдется в разы дороже.</p>",
                blog_2_body: "<p>Валенсия остается одним из самых привлекательных городов Испании для инвестиций в недвижимость. Стратегия Flipping (покупка убитого жилья, ремонт и быстрая перепродажа) здесь работает отлично, но требует знания локального рынка.</p><h3 class='text-2xl font-bold text-brand-dark mt-10 mb-4'>Выбор правильного района</h3><p>Для максимизации ROI мы рекомендуем присмотреться к районам с развивающейся инфраструктурой, но пока еще доступными ценами за квадратный метр:</p><ul class='list-disc pl-6 space-y-2 mb-6'><li><b>Patraix и Extramurs:</b> Отличный потенциал для сдачи в долгосрочную аренду семьям.</li><li><b>Poblats Marítims:</b> Всегда востребован благодаря близости к морю и университетам.</li></ul><blockquote class='border-l-4 border-brand-accent pl-6 italic text-gray-600 my-8 bg-brand-light/50 py-4 rounded-r-xl'>Избегайте квартир на последних этажах без лифта в домах старше 60 лет, если не планируете закладывать в смету возможный ремонт кровли.</blockquote><p>Наша компания помогает инвесторам не только с ремонтом, но и с техническим аудитом объекта до его покупки, чтобы вы точно знали реальную стоимость будущих строительных работ.</p>"
            },
            es: { 
                nav_services: "Servicios", nav_benefits: "Ventajas", nav_process: "Proceso", nav_portfolio: "Proyectos", nav_reviews: "Reseñas", nav_faq: "FAQ", nav_blog: "Blog", btn_consultation: "Consulta",
                hero_title: "REFORMAS INTEGRALES EN VALENCIA Y ALREDEDORES", hero_desc: "Creamos interiores perfectos para vida y negocio. Nos encargamos de todo: diseño, licencias de obra y limpieza final.", btn_estimate: "Pedir presupuesto", btn_our_projects: "Nuestros proyectos",
                services_title: "NUESTROS SERVICIOS", services_desc: "Realizamos el ciclo completo de obras y acabados cumpliendo normativas españolas y estándares europeos.",
                serv_1_title: "Reforma integral", serv_1_desc: "Reformas de pisos y chalets llave en mano. Demoliciones, instalaciones y acabados.",
                serv_2_title: "Diseño de interiores", btn_details: "Saber más",
                serv_3_title: "Reforma comercial", serv_3_desc: "Adaptación de locales para restaurantes, oficinas. Gestión con el Ayuntamiento.",
                serv_4_title: "Instalaciones", serv_5_title: "Licencias y proyectos", serv_5_desc: "Ayuda arquitectónica para Licencia de obra mayor/menor y cambio de uso.", serv_6_title: "Domótica",
                why_title: "POR QUÉ ELEGIRNOS", why_desc: "Las reformas en España tienen sus particularidades. Sabemos cómo evitar problemas y entregar a tiempo.",
                why_1_title: "Presupuesto cerrado", why_1_desc: "El coste se fija en el contrato y no aumenta durante la obra.", why_2_title: "Cumplimiento de plazos", why_2_desc: "Valoramos su tiempo. Penalizaciones por cada día de retraso.", why_3_title: "Plantilla propia", why_3_desc: "Sin personal eventual. Solo profesionales cualificados de confianza.", why_4_title: "Garantía oficial", why_4_desc: "Ofrecemos garantía en todas las instalaciones de 3 a 5 años.",
                banner_title: "EMPIECE SU REFORMA SIN ESTRÉS", banner_desc: "SOLICITE UNA VISITA GRATUITA DE NUESTRO TÉCNICO PARA MEDICIÓN Y PRESUPUESTO", btn_call: "Llamar", btn_leave_request: "Solicitar presupuesto",
                process_title: "CÓMO TRABAJAMOS", btn_learn_more: "Más información", proc_1_title: "Medición y consulta", proc_1_desc: "Nuestro ingeniero visita su vivienda en Valencia, toma medidas exactas y evalúa el estado técnico.", proc_2_title: "Presupuesto y contrato", proc_2_desc: "Elaboramos un presupuesto transparente y detallado. Firmamos un contrato oficial.", proc_3_title: "Preparación y compras", proc_3_desc: "Tramitamos las licencias, compramos materiales y protegemos las zonas comunes.", proc_4_title: "Obras y reformas", proc_4_desc: "Realizamos demoliciones, tabiquería, fontanería, electricidad y acabados cumpliendo los plazos.", proc_5_title: "Entrega del proyecto", proc_5_desc: "Realizamos una limpieza profunda, retiramos escombros y entregamos las llaves de un espacio perfecto.", btn_call_engineer: "SOLICITAR VISITA",
                portf_title: "NUESTROS PROYECTOS\nDESTACADOS", portf_1_tag: "Piso • Ruzafa", portf_1_title: "Reforma integral 90 m²", portf_1_desc: "Redistribución completa en edificio histórico, conservando el ladrillo caravista original.", portf_2_tag: "Casa • El Cabañal", portf_2_title: "Rehabilitación de adosado", portf_2_desc: "Restauración de fachada, creación de terraza abierta, instalación de domótica y suelo radiante.", portf_3_tag: "Restaurante • Av. de França, 14", portf_3_title: "Restaurante Pasqual&Sheila", portf_3_desc: "Adaptación completa para restaurante, cocina profesional, sistemas de ventilación y zona de clientes.", portf_4_tag: "Apartamentos • Ciutat Vella", portf_4_title: "Reforma de apartamentos", portf_4_desc: "Proyecto de diseño exclusivo con materiales premium, puertas invisibles y líneas de luz.", portf_5_tag: "Salón de belleza • Plaça de Vannes, 6", portf_5_title: "Salón de belleza Misha", portf_5_desc: "Zonas de trabajo, iluminación especial con alto índice de reproducción cromática y recepción.", portf_6_tag: "Piso • Eixample", portf_6_title: "Reforma integral de piso", portf_6_desc: "Piso luminoso para una familia joven. Acabados completos, cambio de instalaciones y aerotermia.",
                reviews_title: "OPINIONES DE CLIENTES", rev_1_text: "«Hicieron la reforma de nuestro nuevo piso en Benimaclet. Todo llave en mano, estábamos en otro país y controlamos todo por fotos y vídeos. ¡Calidad excelente!»", rev_1_name: "Alexey M.", rev_1_obj: "Piso 75 m²", rev_2_text: "«Buscábamos una empresa para reformar un local comercial para una cafetería. NIVELLUX se encargó de todo: desde el Proyecto de Actividad hasta los muebles. Abrimos a tiempo.»", rev_2_name: "Elena Mironova", rev_2_obj: "Cafetería, Eixample", rev_3_text: "«Comunicación perfecta. El jefe de obra siempre disponible. Hubo un pequeño retraso con los azulejos pero los pintores adelantaron trabajo y cumplieron los plazos.»", rev_3_name: "Dmitry K.", rev_3_obj: "Apartamento, Paterna",
                stat_1: "Proyectos terminados", stat_2: "Años en España", stat_3: "Profesionales", stat_4: "Años de garantía", video_title: "HOUSE TOUR: PROYECTO TERMINADO EN EL CENTRO", video_desc: "Vea nuestro vídeo de un proyecto recién terminado. Mostramos la calidad de los acabados, las juntas, las instalaciones y cómo queda el piso antes de entregar las llaves.", btn_all_video: "Ver todos los vídeos",
                tech_title: "MATERIALES Y SOLUCIONES", tech_1_pre: "Paredes perfectamente lisas.", tech_1_title: "Yeso proyectado a máquina", tech_1_desc: "Olvídese de las paredes torcidas en pisos antiguos. Usamos aplicación mecanizada y niveles láser para crear una geometría impecable para pintar.", tech_2_pre: "La base para su suelo.", tech_2_title: "Solera autonivelante láser", tech_2_desc: "Sin desniveles. Creamos una base perfectamente plana sobre la que la baldosa o el laminado se asientan sin exceso de pegamento ni crujidos.", tech_3_pre: "Seguridad y fiabilidad.", tech_3_title: "Redes de ingeniería 2.0", tech_3_desc: "Sustitución completa de cableado y tuberías antiguas por sistemas modernos. Diseñamos cuadros con protección contra sobretensiones y distribución de agua por colectores.", tech_4_pre: "Microclima saludable.", tech_4_title: "Stop moho y humedad", tech_4_desc: "Impermeabilización especializada en zonas húmedas y tratamiento antimoho en paredes. Solucionamos el problema de humedad, típico del clima en España.", tech_5_pre: "Ahorro en facturas.", tech_5_title: "Eficiencia energética", tech_5_desc: "Instalación de ventanas con rotura de puente térmico y aislamiento de contornos. Su casa conserva el calor en invierno y el frescor en verano, reduciendo gastos de aire acondicionado.", tech_6_pre: "Silencio en casa.", tech_6_title: "Aislamiento acústico", tech_6_desc: "Usamos membranas modernas (Copopren, Danosa) para proteger del ruido de vecinos y calle. Creamos un «capullo acústico» en dormitorios y habitaciones infantiles.", tech_7_pre: "Estética y practicidad.", tech_7_title: "Pintura y acabados", tech_7_desc: "Paredes para pintar con velo de fibra de vidrio (protección anti-grietas). Usamos pinturas resistentes que no se decoloran y son fáciles de lavar.", tech_8_pre: "Minimalismo moderno.", tech_8_title: "Sistemas ocultos", tech_8_desc: "Integramos puertas ocultas (Invisible), perfiles de sombra y registros empotrados. Todo el «ruido» tecnológico queda oculto, solo diseño limpio.",
                faq_title: "PREGUNTAS FRECUENTES", faq_1_q: "¿Cuánto cuesta el metro cuadrado de reforma integral?", faq_1_a: "El coste depende del estado inicial y las calidades. En Valencia, una reforma integral suele costar entre 600€ y 900€ por metro cuadrado.", faq_2_q: "¿Ayudan a conseguir la Licencia de obra?", faq_2_a: "Sí. Nuestro arquitecto preparará el Proyecto técnico para el Ayuntamiento, presentará la Declaración responsable o tramitará la Licencia de obra mayor si es necesario.", faq_3_q: "¿Tengo que estar en Valencia durante la reforma?", faq_3_a: "No es necesario. Muchos de nuestros clientes viven en otros países. Enviamos reportes semanales con fotos y vídeos para que vea el progreso a distancia.", faq_4_q: "¿Me ayudan a comprar los materiales de acabado?", faq_4_a: "Sí, podemos acompañarle a las exposiciones de nuestros proveedores en Valencia, asesorarle en la elección de azulejos y sanitarios, y gestionar el transporte.",
                blog_title: "ARTÍCULOS Y CONSEJOS ÚTILES", btn_all_articles: "Todos los artículos", blog_tag_1: "Presupuesto 2026", blog_1_title: "¿Cuánto cuesta reformar un piso en Valencia en 2026?", blog_1_desc: "Análisis detallado de un presupuesto real: desde la demolición hasta los acabados. Te contamos los precios actuales de mano de obra y materiales.", blog_tag_2: "Inmobiliaria", blog_2_title: "Inversión en Valencia: cómo elegir un piso para reformar (Flipping)", blog_2_desc: "Barrios con mayor ROI. Qué buscar al comprar viviendas antiguas para evitar gastos imprevistos en defectos ocultos y estructuras.", btn_read_more: "Leer más",
                footer_desc: "Empresa de reformas y construcción en Valencia. Construimos su futuro a su medida.", footer_menu: "Menú", footer_contacts: "Contactos", footer_rights: "Todos los derechos reservados.",
                modal_title: "Pedir presupuesto", modal_desc: "Indique los parámetros de su propiedad y nos pondremos en contacto con usted para calcular el coste detallado.", modal_type: "Tipo de propiedad", modal_type_1: "Piso", modal_type_2: "Chalet / Villa", modal_type_3: "Local comercial", modal_area: "Superficie (m²)", modal_works: "Trabajos previstos", modal_work_1: "Demoliciones", modal_work_2: "Electricidad", modal_work_3: "Fontanería", modal_work_4: "Albañilería y pintura", modal_work_5: "Quiero una reforma integral (todo incluido)", modal_contacts: "Sus datos", modal_name_ph: "Su nombre", modal_btn: "Solicitar presupuesto", modal_success_title: "¡Gracias por su solicitud!", modal_success_desc: "Hemos recibido los datos de su propiedad. Nuestro comercial se pondrá en contacto con usted en breve para comentar los detalles.", btn_close: "Cerrar", modal_consult_title: "Solicitar consulta", modal_consult_desc: "Deje sus datos de contacto y nuestro especialista se comunicará con usted en breve.", btn_send: "Enviar", modal_success_desc_short: "Nuestro gerente se pondrá en contacto con usted en breve.",
                modal_design_title: "Diseño de interiores", modal_design_desc: "Creamos no solo imágenes bonitas, sino proyectos técnicos pensados al milímetro. Nuestro diseño es una guía detallada para los constructores que elimina errores y garantiza una coincidencia del 100% con su idea original.", modal_design_process_title: "Cómo trabajamos:", modal_design_step_1: "1. Distribución del espacio", modal_design_step_1_desc: "Trabajamos la ergonomía y la distribución de los muebles teniendo en cuenta sus hábitos diarios.", modal_design_step_2: "2. Visualización 3D", modal_design_step_2_desc: "Creamos renders fotorrealistas del futuro interior para que pueda ver su casa antes de empezar las obras.", modal_design_step_3: "3. Documentación técnica", modal_design_step_3_desc: "Preparamos planos detallados, alzados y esquemas de electricidad y fontanería para el equipo de construcción.", modal_design_step_4: "4. Equipamiento", modal_design_step_4_desc: "Seleccionamos materiales, iluminación y mobiliario reales ajustándonos estrictamente al presupuesto acordado.", modal_design_cta: "Encargar proyecto de diseño",
                modal_eng_title: "Redes de ingeniería", modal_eng_desc: "Las instalaciones fiables son el sistema circulatorio de su casa. Diseñamos e instalamos electricidad, fontanería, calefacción y ventilación cumpliendo estrictamente la normativa europea (REBT, CTE).", modal_eng_process_title: "Qué incluyen nuestros servicios:", modal_eng_step_1: "1. Instalación eléctrica", modal_eng_step_1_desc: "Diseño de cuadros de distribución, nuevo cableado, instalación de enchufes y automáticos de protección fiables.", modal_eng_step_2: "2. Fontanería y saneamiento", modal_eng_step_2_desc: "Montaje de sistemas de colectores, sustitución de tuberías por polietileno reticulado o multicapa, protección contra fugas.", modal_eng_step_3: "3. Calefacción y clima", modal_eng_step_3_desc: "Instalación de sistemas de aerotermia de alta eficiencia, suelo radiante, aire acondicionado por conductos y ventilación.", modal_eng_step_4: "4. Redes de datos y seguridad", modal_eng_step_4_desc: "Cableado de internet (fibra óptica), instalación de sistemas de videovigilancia y alarmas de seguridad.", modal_eng_cta: "Calcular coste de instalaciones",
                modal_sh_title: "Domótica (Smart Home)", modal_sh_desc: "Haga su vida más cómoda y segura con sistemas de automatización avanzados. Colaboramos con los principales fabricantes y configuramos el sistema 'llave en mano', desde el proyecto hasta la app en su móvil.", modal_sh_process_title: "Capacidades de la domótica:", modal_sh_step_1: "1. Iluminación inteligente", modal_sh_step_1_desc: "Control de luces con el móvil o voz. Creación de escenas cómodas (por ejemplo, botón 'Apagar todo' al salir).", modal_sh_step_2: "2. Control de clima", modal_sh_step_2_desc: "Mantenimiento automático de la temperatura y humedad ideales en cada habitación para máximo confort y ahorro.", modal_sh_step_3: "3. Seguridad y accesos", modal_sh_step_3_desc: "Integración de sensores de fugas, humo, cerraduras inteligentes y cámaras con alertas instantáneas al móvil.", modal_sh_step_4: "4. Persianas y multimedia", modal_sh_step_4_desc: "Apertura automática de persianas por la mañana e integración de sistemas de audio o cine en casa en el ecosistema.", modal_sh_cta: "Más información sobre domótica",
                modal_comp_title: "Reforma integral llave en mano", modal_comp_desc: "Asumimos toda la responsabilidad de su reforma. Desde el primer boceto hasta la colocación de los muebles. Obtendrá una vivienda lista sin estrés ni necesidad de visitar la obra a diario.", modal_comp_process_title: "Fases de trabajo:", modal_comp_step_1: "Demoliciones y tabiquería", modal_comp_step_1_desc: "Derribo de estructuras antiguas, retirada de escombros y construcción de nuevos tabiques.", modal_comp_step_2: "Instalaciones", modal_comp_step_2_desc: "Montaje de electricidad, fontanería, saneamiento y sistemas de climatización.", modal_comp_step_3: "Albañilería y preparación", modal_comp_step_3_desc: "Nivelación de paredes (yeso), soleras para suelos e instalación de pladur.", modal_comp_step_4: "Acabados", modal_comp_step_4_desc: "Alicatados, pintura de paredes, colocación de pavimentos y rodapiés.", modal_comp_step_5: "Finalización", modal_comp_step_5_desc: "Instalación de enchufes, luminarias, sanitarios, puertas y limpieza final.", modal_comp_form_title: "Obtener presupuesto", modal_comp_form_desc: "Deje su solicitud y calcularemos el coste estimado de su reforma de forma gratuita.",
                modal_comm_title: "Reforma de locales comerciales", modal_comm_desc: "¿Abre un restaurante, salón de belleza u oficina? Conocemos todos los matices técnicos y legales de las reformas comerciales en Valencia para que pase las inspecciones del Ayuntamiento a la primera.", modal_comm_process_title: "A qué prestamos atención:", modal_comm_step_1: "Licencias (Proyecto de Actividad)", modal_comm_step_1_desc: "Desarrollo del proyecto, aprobación del Ayuntamiento, cumplimiento de la normativa de accesibilidad (rampas, baños adaptados).", modal_comm_step_2: "Potencia eléctrica (Boletín)", modal_comm_step_2_desc: "Cálculo de cargas para equipos profesionales, red trifásica y preparación de la nueva instalación eléctrica.", modal_comm_step_3: "Ventilación y extracción", modal_comm_step_3_desc: "Diseño de salidas de humos para cocinas y sistemas de renovación de aire según normativas RITE.", modal_comm_step_4: "Insonorización (Estudio acústico)", modal_comm_step_4_desc: "Proyectos acústicos obligatorios para hostelería. Instalación de aislamientos para evitar molestias y multas.", modal_comm_step_5: "Seguridad contra incendios", modal_comm_step_5_desc: "Uso de materiales ignífugos, diseño de rutas de evacuación y sistemas de extinción según el CTE.",
                modal_lic_title: "Licencias y proyectos", modal_lic_desc: "La construcción y las reformas en España están estrictamente reguladas. Nos encargamos de toda la burocracia: desde el proyecto arquitectónico hasta los permisos finales en el Ayuntamiento. Ahorre tiempo y evite multas.", modal_lic_process_title: "En qué ayudamos:", modal_lic_step_1: "Declaración Responsable / Obra Menor", modal_lic_step_1_desc: "Trámites para obras menores que no afectan a la estructura. Presentamos la declaración para empezar rápido.", modal_lic_step_2: "Licencia de Obra Mayor", modal_lic_step_2_desc: "Reformas integrales, cambios de distribución o fachada. Nuestro arquitecto desarrolla el Proyecto Técnico completo.", modal_lic_step_3: "Cambio de Uso", modal_lic_step_3_desc: "Conversión de local comercial a vivienda. Comprobamos la viabilidad y preparamos la documentación.", modal_lic_step_4: "Legalización", modal_lic_step_4_desc: "Legalización de ampliaciones o reformas anteriores para una venta o alquiler sin problemas.", modal_lic_step_5: "Certificados (Cédula / CEE)", modal_lic_step_5_desc: "Obtención de la Cédula de Habitabilidad y el Certificado de Eficiencia Energética, necesarios para dar de alta suministros.", modal_lic_form_title: "Obtener consulta", modal_lic_form_desc: "Deje su solicitud y nuestro arquitecto se pondrá en contacto para evaluar su caso de forma gratuita.",
                
                portf_mod_desc_title: "Sobre el proyecto", portf_mod_stat1_label: "Plazo de ejecución", portf_mod_stat2_label: "Tipo de inmueble", portf_mod_steps_title: "Cómo transcurrió la obra", portf_mod_tech_title: "Soluciones utilizadas", portf_mod_gallery_title: "Galería del proyecto", portf_mod_cta_title: "¡Quiero el mismo resultado!", portf_mod_cta_desc: "Deje sus datos y nos pondremos en contacto para comentar su proyecto. La primera consulta y visita de medición son gratuitas.", portf_mod_btn_send: "Contactar",
                
                tech_plaster: "Yeso proyectado a máquina", tech_screed: "Solera autonivelante láser", tech_networks: "Redes de ingeniería 2.0", tech_sound: "Aislamiento acústico", tech_paint: "Pintura y acabados", tech_facade: "Restauración de fachada", tech_smarthome: "Domótica", tech_heating: "Suelo radiante", tech_sound_danosa: "Insonorización Danosa", tech_porcelanosa: "Porcelánico Porcelanosa", tech_3phase: "Red trifásica", tech_vent: "Extracción profesional", tech_ac: "Aire acondicionado por conductos", tech_micro: "Microcemento", tech_fire: "Materiales ignífugos", tech_hidden: "Sistemas ocultos", tech_shadow: "Perfil de sombra", tech_plumbing: "Múltiples tomas de agua", tech_light: "Iluminación profesional", tech_paint_wash: "Pintura lavable", tech_mold: "Stop moho y humedad", tech_aero: "Aerotermia", tech_eco: "Eficiencia energética",
                
                proj1_tag1: "Piso", proj1_tag2: "Reforma integral", proj1_title: "Reforma integral 90 m²", proj1_address: "Ruzafa, Valencia", proj1_desc_text: "Redistribución completa en edificio histórico, conservando el ladrillo caravista original. Realizamos acabados interiores de alta calidad, transformando un piso antiguo en una vivienda moderna y elegante.", proj1_stat1_val: "3.5 meses", proj1_stat2_val: "Piso", proj1_step1: "Demolición", proj1_step1_d: "Derribo de tabiques, limpieza de paredes.", proj1_step2: "Ingeniería", proj1_step2_d: "Nuevo cableado, tuberías, aire acondicionado.", proj1_step3: "Albañilería", proj1_step3_d: "Yeso a máquina, solera láser.", proj1_step4: "Acabados", proj1_step4_d: "Suelos, pintura, puertas ocultas.",
                proj2_tag1: "Rehabilitación", proj2_tag2: "Casa", proj2_title: "Rehabilitación de adosado", proj2_address: "El Cabañal, Valencia", proj2_desc_text: "Rehabilitación a gran escala de una casa tradicional valenciana. Restauración de fachada, nueva terraza en la azotea, instalación de domótica y suelo radiante.", proj2_stat1_val: "5 meses", proj2_stat2_val: "Casa adosada", proj2_step1: "Fachada y Tejado", proj2_step1_d: "Restauración, impermeabilización.", proj2_step2: "Demolición", proj2_step2_d: "Refuerzo de estructuras portantes.", proj2_step3: "Ingeniería", proj2_step3_d: "Suelo radiante, aerotermia, domótica.", proj2_step4: "Acabados", proj2_step4_d: "Materiales premium, decoración.",
                proj3_tag1: "Comercial", proj3_tag2: "Reforma", proj3_title: "Restaurante Pasqual&Sheila", proj3_address: "Av. de França, 14, Valencia", proj3_desc_text: "Adaptación completa del local a restaurante. Trabajos masivos en redes de ingeniería, potente instalación eléctrica, extracción profesional (Salida de humos) e insonorización.", proj3_stat1_val: "7 meses", proj3_stat2_val: "Comercial (Restaurante)", proj3_step1: "Proyecto y Licencias", proj3_step1_d: "Estudio acústico, permisos.", proj3_step2: "Demolición", proj3_step2_d: "Limpieza total del local.", proj3_step3: "Instalaciones", proj3_step3_d: "Red trifásica, ventilación, acústica.", proj3_step4: "Acabados", proj3_step4_d: "Porcelánico, microcemento, decoración.",
                proj4_tag1: "Piso", proj4_tag2: "Diseño", proj4_title: "Reforma de apartamentos", proj4_address: "Ciutat Vella, Valencia", proj4_desc_text: "Reforma interior rápida y de calidad según un proyecto de diseño exclusivo. Uso de soluciones ocultas (puertas invisibles, rodapiés de sombra) y líneas de luz.", proj4_stat1_val: "2 meses", proj4_stat2_val: "Apartamentos", proj4_step1: "Diseño", proj4_step1_d: "Aprobación de renders y planos.", proj4_step2: "Demolición", proj4_step2_d: "Preparación rápida del piso.", proj4_step3: "Albañilería", proj4_step3_d: "Nivelación perfecta para puertas enrasadas.", proj4_step4: "Acabados y Luz", proj4_step4_d: "Pintura, montaje de luces y muebles.",
                proj5_tag1: "Comercial", proj5_tag2: "Reforma", proj5_title: "Salón de belleza Misha", proj5_address: "Plaça de Vannes, 6, Valencia", proj5_desc_text: "Reforma especializada para la industria de la belleza. Zonificación, red compleja de fontanería para múltiples lavacabezas, iluminación profesional con alto CRI.", proj5_stat1_val: "5 meses", proj5_stat2_val: "Salón de belleza", proj5_step1: "Proyecto", proj5_step1_d: "Plano de zonas y ergonomía.", proj5_step2: "Fontanería", proj5_step2_d: "Tuberías para múltiples puntos de agua.", proj5_step3: "Iluminación", proj5_step3_d: "Luz profesional sin sombras.", proj5_step4: "Acabados", proj5_step4_d: "Pintura lavable, suelo resistente.",
                proj6_tag1: "Piso", proj6_tag2: "Reforma integral", proj6_title: "Reforma integral de piso", proj6_address: "Eixample, Valencia", proj6_desc_text: "Piso luminoso y espacioso para una familia joven. Cambio completo de instalaciones, aislamiento acústico de calidad e instalación de aerotermia eficiente.", proj6_stat1_val: "3.5 meses", proj6_stat2_val: "Piso", proj6_step1: "Demolición", proj6_step1_d: "Derribo de tabiques, limpieza.", proj6_step2: "Instalaciones", proj6_step2_d: "Electricidad nueva, preinstalación aerotermia.", proj6_step3: "Albañilería", proj6_step3_d: "Insonorización, solera, yeso.", proj6_step4: "Acabados", proj6_step4_d: "Suelos, pintura, decoración final.",
                blog_related: "Leer también", blog_1_date: "12 de abril de 2026", blog_1_read: "5 min de lectura", blog_2_date: "4 de marzo de 2026", blog_2_read: "7 min de lectura",
                blog_1_body: "<p>¿Planea una reforma en 2026? Los precios de materiales y mano de obra en Valencia siguen evolucionando. En este artículo desglosamos un presupuesto real para una reforma integral de un piso de 90 m².</p><h3 class='text-2xl font-bold text-brand-dark mt-10 mb-4'>1. Demolición y preparación</h3><p>En edificios antiguos, la demolición puede representar un 15-20% del presupuesto total: tabiques, retirada de enlucidos y gestión de escombros.</p><blockquote class='border-l-4 border-brand-accent pl-6 italic text-gray-600 my-8 bg-brand-light/50 py-4 rounded-r-xl'>Reserve siempre al menos un 10% adicional para imprevistos al levantar suelos o paramentos antiguos.</blockquote><h3 class='text-2xl font-bold text-brand-dark mt-10 mb-4'>2. Instalaciones y obra gris</h3><ul class='list-disc pl-6 space-y-2 mb-6'><li><b>Electricidad:</b> cableado nuevo y cuadro (Boletín Eléctrico).</li><li><b>Fontanería:</b> polietileno reticulado, instalaciones empotradas.</li><li><b>Acabados base:</b> solera láser y yeso proyectado.</li></ul><p>Esta fase es la base del resultado final: ahorrar aquí suele costar mucho más corregirlo después.</p>",
                blog_2_body: "<p>Valencia sigue siendo uno de los mercados más atractivos para invertir en vivienda. El modelo Flipping (comprar, reformar y vender o alquilar) funciona muy bien, pero exige conocer la ciudad y los riesgos técnicos.</p><h3 class='text-2xl font-bold text-brand-dark mt-10 mb-4'>Barrios con potencial</h3><p>Para optimizar el ROI conviene combinar demanda de alquiler, transporte y precio por metro cuadrado:</p><ul class='list-disc pl-6 space-y-2 mb-6'><li><b>Patraix y Extramurs:</b> fuerte demanda familiar y buena conexión.</li><li><b>Poblats Marítims:</b> proximidad al mar y a universidades.</li></ul><blockquote class='border-l-4 border-brand-accent pl-6 italic text-gray-600 my-8 bg-brand-light/50 py-4 rounded-r-xl'>Desconfíe de áticos sin ascensor en fincas muy antiguas si no ha previsto costes de cubierta o estructura.</blockquote><p>En NIVELLUX ayudamos también con la visita técnica previa a la compra para estimar el coste real de la reforma.</p>"
            },
            uk: {
                nav_services: "Послуги", nav_benefits: "Переваги", nav_process: "Етапи", nav_portfolio: "Об'єкти", nav_reviews: "Відгуки", nav_faq: "FAQ", nav_blog: "Блог", btn_consultation: "Консультація",
                hero_title: "РЕМОНТ ПІД КЛЮЧ У ВАЛЕНСІЇ ТА ПЕРЕДМІСТІ", hero_desc: "Створюємо ідеальні інтер'єри для життя та бізнесу. Беремо на себе все: від дизайн-проекту та ліцензій до фінального прибирання.", btn_estimate: "Розрахувати кошторис", btn_our_projects: "Наші об'єкти",
                services_title: "НАШІ ПОСЛУГИ", services_desc: "Виконуємо повний цикл будівельно-оздоблювальних робіт з дотриманням іспанських норм та європейських стандартів якості.",
                serv_1_title: "Комплексний ремонт", serv_1_desc: "Капітальний ремонт квартир та вілл під ключ. Демонтаж, комунікації, чорнова та чистова обробка.",
                serv_2_title: "Дизайн інтер'єру", btn_details: "Детальніше",
                serv_3_title: "Ремонт комерції", serv_3_desc: "Адаптація приміщень під ресторани, офіси. Узгодження проекту з Ayuntamiento.",
                serv_4_title: "Інженерні мережі", serv_5_title: "Ліцензії та проекти", serv_5_desc: "Допомога архітектора в отриманні Licencia de obra mayor/menor та зміні цільового призначення.", serv_6_title: "Розумний дім (Domótica)",
                why_title: "ЧОМУ ОБИРАЮТЬ НАС", why_desc: "Ремонт в Іспанії має свою специфіку. Ми знаємо, як обійти всі перешкоди та здати об'єкт без затримок.",
                why_1_title: "Твердий кошторис", why_1_desc: "Вартість робіт фіксується в договорі і не збільшується в процесі ремонту.", why_2_title: "Дотримання термінів", why_2_desc: "Ми цінуємо ваш час. За кожен день прострочення прописані штрафні санкції.", why_3_title: "Штатні бригади", why_3_desc: "Ніяких випадкових людей. Працюють тільки перевірені профільні майстри.", why_4_title: "Офіційна гарантія", why_4_desc: "Надаємо гарантію на всі чорнові та інженерні роботи від 3 до 5 років.",
                banner_title: "ПОЧНІТЬ РЕМОНТ БЕЗ СТРЕСУ", banner_desc: "ЗАПИШІТЬСЯ НА БЕЗКОШТОВНИЙ ВИЇЗД ІНЖЕНЕРА ДЛЯ ЗАМІРУ ТА ОЦІНКИ", btn_call: "Зателефонувати", btn_leave_request: "Залишити заявку",
                process_title: "ЯК МИ ПРАЦЮЄМО", btn_learn_more: "Дізнатися більше", proc_1_title: "Замір та консультація", proc_1_desc: "Наш інженер виїжджає на об'єкт у Валенсії, проводить точні заміри.", proc_2_title: "Кошторис та договір", proc_2_desc: "Складаємо прозорий кошторис з деталізацією робіт.", proc_3_title: "Підготовка та закупівля", proc_3_desc: "Оформлюємо дозволи (Licencia), закуповуємо матеріали.", proc_4_title: "Будівельні роботи", proc_4_desc: "Виконуємо демонтаж, зведення стін, розведення електрики.", proc_5_title: "Здача об'єкта", proc_5_desc: "Проводимо клінінг, вивозимо залишки сміття та передаємо вам ключі.", btn_call_engineer: "ВИКЛИКАТИ ІНЖЕНЕРА",
                portf_title: "НАШІ ОБ'ЄКТИ\nЯКИМИ МИ ПИШАЄМОСЯ", portf_1_tag: "Апартаменти • Ruzafa", portf_1_title: "Капітальний ремонт 90 м²", portf_1_desc: "Повне перепланування в історичному фонді, збереження цегляної кладки.", portf_2_tag: "Будинок • El Cabañal", portf_2_title: "Реконструкція таунхауса", portf_2_desc: "Відновлення фасаду, створення відкритої тераси на даху.", portf_3_tag: "Ресторан • Av. de França, 14", portf_3_title: "Ресторан Pasqual&Sheila", portf_3_desc: "Адаптація приміщення під вимоги ресторану, системи вентиляції.", portf_4_tag: "Апартаменти • Ciutat Vella", portf_4_title: "Ремонт апартаментів", portf_4_desc: "Ексклюзивний дизайн-проект з використанням преміальних матеріалів.", portf_5_tag: "Салон краси • Plaça de Vannes, 6", portf_5_title: "Салон краси Misha", portf_5_desc: "Облаштування робочих зон, спеціальне освітлення, стильний ресепшн.", portf_6_tag: "Квартира • Eixample", portf_6_title: "Комплексний ремонт", portf_6_desc: "Світла квартира для сім'ї. Чорнова і чистова обробка.",
                reviews_title: "ВІДГУКИ КЛІЄНТІВ", rev_1_text: "«Зробили все під ключ, ми контролювали процес по фото. Якість супер!»", rev_1_name: "Олексій М.", rev_1_obj: "Квартира 75 м²", rev_2_text: "«Відкрилися вчасно. Взяли на себе всі ліцензії.»", rev_2_name: "Олена Миронова", rev_2_obj: "Кафетерій, Eixample", rev_3_text: "«Комунікація відмінна. Кошторис прозорий.»", rev_3_name: "Дмитро К.", rev_3_obj: "Апартаменти, Патерна",
                stat_1: "Зданих об'єктів", stat_2: "Років в Іспанії", stat_3: "Майстрів у штаті", stat_4: "Роки гарантії", video_title: "РУМТУР: ГОТОВИЙ ОБ'ЄКТ", video_desc: "Подивіться наш відео-звіт з нещодавно завершеного об'єкта. Ми показуємо якість фінішного оздоблення та роботу інженерних систем.", btn_all_video: "Дивитися всі відео",
                tech_title: "МАТЕРІАЛИ ТА РІШЕННЯ", tech_1_pre: "Ідеально рівні стіни.", tech_1_title: "Машинна штукатурка", tech_1_desc: "Використовуємо механізоване нанесення для бездоганної геометрії.", tech_2_pre: "Фундамент для покриття.", tech_2_title: "Лазерна стяжка підлоги", tech_2_desc: "Жодних перепадів висот. Створюємо ідеально рівну основу.", tech_3_pre: "Безпека та надійність.", tech_3_title: "Інженерні мережі 2.0", tech_3_desc: "Повна заміна старої проводки та труб на сучасні системи.", tech_4_pre: "Здоровий мікроклімат.", tech_4_title: "Стоп-пліснява та волога", tech_4_desc: "Спеціалізована гідроізоляція та антигрибкова обробка стін.", tech_5_pre: "Економія на рахунках.", tech_5_title: "Енергозбереження", tech_5_desc: "Встановлення вікон з терморозривом та утеплення контурів.", tech_6_pre: "Тиша у квартирі.", tech_6_title: "Шумоізоляція", tech_6_desc: "Використовуємо сучасні мембрани для захисту від шуму.", tech_7_pre: "Естетика та практичність.", tech_7_title: "Фінішна малярка", tech_7_desc: "Стіни під фарбування зі склополотном. Зносостійкі фарби.", tech_8_pre: "Сучасний мінімалізм.", tech_8_title: "Приховані системи", tech_8_desc: "Інтегруємо приховані двері (Invisible) та тіньові профілі.",
                faq_title: "ЧАСТІ ПИТАННЯ", faq_1_q: "Скільки коштує квадратний метр ремонту під ключ?", faq_1_a: "В середньому капітальний ремонт у Валенсії починається від 600€ до 900€ за квадратний метр. Точна цифра фіксується в кошторисі.", faq_2_q: "Ви допомагаєте з отриманням ліцензії (Licencia de obra)?", faq_2_a: "Так. Наш архітектор підготує проект для мерії та подасть декларацію.", faq_3_q: "Чи потрібна моя присутність у Валенсії під час ремонту?", faq_3_a: "Ні, багато наших клієнтів живуть в інших країнах. Ми надаємо щотижневі звіти.", faq_4_q: "Чи допомагаєте ви із закупівлею чистових матеріалів?", faq_4_a: "Так, ми можемо супроводити вас у шоуруми наших партнерів у Валенсії, допоможемо з вибором.",
                blog_title: "КОРИСНІ СТАТТІ ТА ПОРАДИ", btn_all_articles: "Всі статті", blog_tag_1: "Кошторис 2026", blog_1_title: "Скільки коштує ремонт квартири у Валенсії у 2026 році?", blog_1_desc: "Детальний розбір реального кошторису: від демонтажу до фінішної обробки.", blog_tag_2: "Нерухомість", blog_2_title: "Інвестиції у Валенсію: обираємо квартиру під ремонт (Flipping)", blog_2_desc: "Райони, які принесуть максимальний ROI. На що дивитися при купівлі старого фонду.", btn_read_more: "Читати повністю",
                footer_desc: "Ремонтно-будівельна компанія у Валенсії. Будуємо ваше майбутнє за власним планом.", footer_menu: "Меню", footer_contacts: "Контакти", footer_rights: "Всі права захищені.",
                modal_title: "Розрахувати кошторис", modal_desc: "Вкажіть параметри вашого об'єкта, і ми зв'яжемося з вами для детального розрахунку вартості робіт.", modal_type: "Тип об'єкта", modal_type_1: "Квартира", modal_type_2: "Будинок / Вілла", modal_type_3: "Комерція", modal_area: "Площа об'єкта (м²)", modal_works: "Заплановані роботи", modal_work_1: "Демонтажні роботи", modal_work_2: "Електромонтаж", modal_work_3: "Сантехнічні роботи", modal_work_4: "Штукатурно-малярні", modal_work_5: "Хочу ремонт «під ключ» (все включено)", modal_contacts: "Ваші контакти", modal_name_ph: "Ваше ім'я", modal_btn: "Запросити розрахунок", modal_success_title: "Дякуємо за заявку!", modal_success_desc: "Ми отримали параметри вашого об'єкта. Наш менеджер зв'яжеться з вами найближчим часом.", btn_close: "Закрити", modal_consult_title: "Запис на консультацію", modal_consult_desc: "Залиште свої контакти, і наш спеціаліст зв'яжеться з вами найближчим часом.", btn_send: "Відправити", modal_success_desc_short: "Наш менеджер зв'яжеться з вами найближчим часом.",
                modal_design_title: "Дизайн інтер'єру", modal_design_desc: "Ми створюємо не просто красиві картинки, а продумані до міліметра технічні проекти. Наш дизайн — це детальний посібник для будівельників, який виключить помилки.", modal_design_process_title: "Як ми працюємо:", modal_design_step_1: "1. Планувальне рішення", modal_design_step_1_desc: "Опрацьовуємо ергономіку та розстановку меблів.", modal_design_step_2: "2. 3D-Візуалізація", modal_design_step_2_desc: "Створюємо фотореалістичні рендери майбутнього інтер'єру.", modal_design_step_3: "3. Робоча документація", modal_design_step_3_desc: "Готуємо детальні креслення, схеми електрики та сантехніки.", modal_design_step_4: "4. Комплектація", modal_design_step_4_desc: "Здійснюємо підбір реальних чистових матеріалів.", modal_design_cta: "Замовити дизайн-проект",
                modal_eng_title: "Інженерні мережі", modal_eng_desc: "Ми проектуємо та монтуємо електропроводку, водопостачання, опалення та вентиляцію у суворій відповідності до європейських норм безпеки (REBT, CTE).", modal_eng_process_title: "Що входить у наші послуги:", modal_eng_step_1: "1. Електромонтаж", modal_eng_step_1_desc: "Проектування щитів, прокладання нових трас, встановлення автоматів захисту.", modal_eng_step_2: "2. Водопостачання і каналізація", modal_eng_step_2_desc: "Монтаж колекторних систем, заміна труб на зшитий поліетилен.", modal_eng_step_3: "3. Опалення та клімат", modal_eng_step_3_desc: "Встановлення енергоефективних систем аеротермії, теплих підлог.", modal_eng_step_4: "4. Слабкострумові системи", modal_eng_step_4_desc: "Прокладання інтернет-кабелів, встановлення систем відеоспостереження.", modal_eng_cta: "Розрахувати вартість",
                modal_sh_title: "Розумний дім (Domótica)", modal_sh_desc: "Зробіть ваше життя комфортнішим і безпечнішим за допомогою передових систем автоматизації. Ми виконуємо налаштування всієї системи «під ключ».", modal_sh_process_title: "Можливості розумного дому:", modal_sh_step_1: "1. Розумне освітлення", modal_sh_step_1_desc: "Керування світлом з телефону або голосом. Налаштування зручних сценаріїв.", modal_sh_step_2: "2. Клімат-контроль", modal_sh_step_2_desc: "Автоматичне підтримання ідеальної температури та вологості.", modal_sh_step_3: "3. Безпека та доступ", modal_sh_step_3_desc: "Інтеграція датчиків протікання, диму, розумних замків.", modal_sh_step_4: "4. Штори та мультимедіа", modal_sh_step_4_desc: "Автоматичне відкриття жалюзі вранці та інтеграція аудіосистем.", modal_sh_cta: "Дізнатися більше",
                modal_comp_title: "Комплексний ремонт під ключ", modal_comp_desc: "Беремо на себе всю відповідальність за ваш ремонт. Від першого ескізу до розстановки меблів. Ви отримуєте готове житло без стресу і необхідності щодня їздити на будівництво.", modal_comp_process_title: "Етапи робіт:", modal_comp_step_1: "Демонтаж та зведення", modal_comp_step_1_desc: "Знесення старих конструкцій, вивезення сміття, зведення нових перегородок.", modal_comp_step_2: "Інженерні мережі", modal_comp_step_2_desc: "Монтаж електрики, труб водопостачання, систем кондиціонування.", modal_comp_step_3: "Чорнова обробка", modal_comp_step_3_desc: "Вирівнювання стін (штукатурка), заливка стяжки підлоги.", modal_comp_step_4: "Чистовая обробка", modal_comp_step_4_desc: "Укладання плитки, фарбування стін, монтаж підлогових покриттів.", modal_comp_step_5: "Завершення", modal_comp_step_5_desc: "Встановлення розеток, світильників, сантехніки та клінінг.", modal_comp_form_title: "Отримати кошторис", modal_comp_form_desc: "Залиште заявку, і ми безкоштовно розрахуємо попередню вартість.",
                modal_comm_title: "Ремонт комерційних приміщень", modal_comm_desc: "Відкриваєте ресторан, салон краси чи офіс? Ми знаємо всі технічні та юридичні нюанси ремонту комерції у Валенсії.", modal_comm_process_title: "На що ми звертаємо увагу:", modal_comm_step_1: "Ліцензії", modal_comm_step_1_desc: "Розробка проекту інженером (Proyecto de Actividad).", modal_comm_step_2: "Електрична потужність", modal_comm_step_2_desc: "Розрахунок пікових навантажень, трифазна мережа (Boletín Eléctrico).", modal_comm_step_3: "Вентиляція та витяжка", modal_comm_step_3_desc: "Проектування систем димовидалення (Salida de humos).", modal_comm_step_4: "Звукоізоляція", modal_comm_step_4_desc: "Обов'язкові акустичні проекти для барів.", modal_comm_step_5: "Пожежна безпека", modal_comm_step_5_desc: "Вогнестійкі матеріали, проектування шляхів евакуації.",
                modal_lic_title: "Ліцензії та проекти", modal_lic_desc: "Будівництво та ремонт в Іспанії суворо регламентовані. Ми беремо на себе всю бюрократію: від розробки проекту до дозволів у мерії.", modal_lic_process_title: "Чим ми допомагаємо:", modal_lic_step_1: "Obra Menor", modal_lic_step_1_desc: "Декларація (Declaración Responsable) для дрібних робіт.", modal_lic_step_2: "Obra Mayor", modal_lic_step_2_desc: "Капітальний ремонт, перепланування, фасад (Proyecto Técnico).", modal_lic_step_3: "Cambio de Uso", modal_lic_step_3_desc: "Переведення комерційного приміщення в житлове.", modal_lic_step_4: "Legalización", modal_lic_step_4_desc: "Узаконення раніше зроблених прибудов.", modal_lic_step_5: "Сертифікати", modal_lic_step_5_desc: "Отримання сертифікатів придатності (Cédula / CEE).", modal_lic_form_title: "Отримати консультацію", modal_lic_form_desc: "Залиште заявку, і наш архітектор зв'яжеться з вами для оцінки ситуації.",
                
                portf_mod_desc_title: "Про проект", portf_mod_stat1_label: "Термін реалізації", portf_mod_stat2_label: "Тип об'єкта", portf_mod_steps_title: "Як проходив ремонт", portf_mod_tech_title: "Використані рішення", portf_mod_gallery_title: "Галерея проекту", portf_mod_cta_title: "Хочу такий же результат!", portf_mod_cta_desc: "Оставьте свої контакти, і ми зв'яжемося з вами для обговорення вашого проекту. Первинна консультація та виїзд на замір — безкоштовно.", portf_mod_btn_send: "Зв'язатися",
                
                tech_plaster: "Машинна штукатурка", tech_screed: "Лазерна стяжка підлоги", tech_networks: "Інженерні мережі 2.0", tech_sound: "Шумоізоляція", tech_paint: "Фінішна малярка", tech_facade: "Реставрація фасаду", tech_smarthome: "Розумний дім", tech_heating: "Тепла підлога", tech_sound_danosa: "Звукоізоляція Danosa", tech_porcelanosa: "Керамограніт Porcelanosa", tech_3phase: "Трифазна мережа", tech_vent: "Професійна витяжка", tech_ac: "Канальний кондиціонер", tech_micro: "Мікроцемент", tech_fire: "Вогнестійкі матеріали", tech_hidden: "Приховані системи", tech_shadow: "Тіньовий профіль", tech_plumbing: "Множинні мокрі точки", tech_light: "Професійне світло", tech_paint_wash: "Миюча фарба", tech_mold: "Стоп-пліснява", tech_aero: "Аеротермія", tech_eco: "Енергозбереження",
                
                proj1_tag1: "Квартира", proj1_tag2: "Повний ремонт", proj1_title: "Капітальний ремонт 90 м²", proj1_address: "Ruzafa, Валенсія", proj1_desc_text: "Повне перепланування в історичному фонді, збереження оригінальної цегляної кладки, заміна перекриттів. Виконали якісні внутрішні оздоблювальні роботи.", proj1_stat1_val: "3.5 місяці", proj1_stat2_val: "Квартира", proj1_step1: "Демонтаж", proj1_step1_d: "Знесення перегородок, очищення стін.", proj1_step2: "Інженерія", proj1_step2_d: "Нова проводка, труби.", proj1_step3: "Чорнова обробка", proj1_step3_d: "Машинна штукатурка, стяжка.", proj1_step4: "Чистова", proj1_step4_d: "Укладання підлоги, фарбування.",
                proj2_tag1: "Реконструкція", proj2_tag2: "Будинок", proj2_title: "Реконструкція таунхауса", proj2_address: "El Cabañal, Валенсія", proj2_desc_text: "Масштабна реконструкція традиційного валенсійського будинку. Провели відновлення фасаду, створили нову відкриту терасу на даху, змонтували систему 'Розумний дім'.", proj2_stat1_val: "5 місяців", proj2_stat2_val: "Таунхаус", proj2_step1: "Фасад", proj2_step1_d: "Реставрація фасаду, дах.", proj2_step2: "Демонтаж", proj2_step2_d: "Посилення конструкцій.", proj2_step3: "Інженерія", proj2_step3_d: "Теплі підлоги, аеротермія.", proj2_step4: "Оздоблення", proj2_step4_d: "Преміальні матеріали.",
                proj3_tag1: "Комерція", proj3_tag2: "Реконструкція", proj3_title: "Ресторан Pasqual&Sheila", proj3_address: "Av. de França, 14, Валенсія", proj3_desc_text: "Повна реконструкція приміщення під сучасний ресторан. Виконали масштабні роботи з прокладання інженерних мереж, професійну вентиляцію (Salida de humos) та звукоізоляцію.", proj3_stat1_val: "7 місяців", proj3_stat2_val: "Комерція (Ресторан)", proj3_step1: "Ліцензії", proj3_step1_d: "Проект, акустичне дослідження.", proj3_step2: "Демонтаж", proj3_step2_d: "Повне очищення приміщення.", proj3_step3: "Інженерія", proj3_step3_d: "Трифазна мережа, витяжка.", proj3_step4: "Оздоблення", proj3_step4_d: "Керамограніт, декор.",
                proj4_tag1: "Квартира", proj4_tag2: "Дизайн-проект", proj4_title: "Ремонт апартаментів", proj4_address: "Ciutat Vella, Валенсія", proj4_desc_text: "Швидкий та якісний внутрішній ремонт за ексклюзивним дизайн-проектом. Використовували приховані рішення (двері Invisible) та складні системи світлових ліній.", proj4_stat1_val: "2 місяці", proj4_stat2_val: "Апартаменти", proj4_step1: "Дизайн", proj4_step1_d: "Узгодження креслень.", proj4_step2: "Демонтаж", proj4_step2_d: "Підготовка квартири.", proj4_step3: "Чорнова", proj4_step3_d: "Ідеальне вирівнювання.", proj4_step4: "Світло", proj4_step4_d: "Фарбування, монтаж світла.",
                proj5_tag1: "Комерція", proj5_tag2: "Повний ремонт", proj5_title: "Салон краси Misha", proj5_address: "Plaça de Vannes, 6, Валенсія", proj5_desc_text: "Спеціалізований ремонт для б'юті-індустрії. Організували зонування, проклали мережу труб для безлічі мокрих точок, встановили професійне освітлення.", proj5_stat1_val: "5 місяців", proj5_stat2_val: "Салон краси", proj5_step1: "Проект", proj5_step1_d: "План зонування.", proj5_step2: "Сантехніка", proj5_step2_d: "Складна розводка труб.", proj5_step3: "Світло", proj5_step3_d: "Професійне освітлення.", proj5_step4: "Оздоблення", proj5_step4_d: "Стіни, що миються.",
                proj6_tag1: "Квартира", proj6_tag2: "Повний ремонт", proj6_title: "Комплексний ремонт квартири", proj6_address: "Eixample, Валенсія", proj6_desc_text: "Створили світлу і простору квартиру для молодої сім'ї. Зробили повну заміну всіх комунікацій, якісну шумоізоляцію і змонтували систему аеротермії.", proj6_stat1_val: "3.5 місяці", proj6_stat2_val: "Квартира", proj6_step1: "Демонтаж", proj6_step1_d: "Знесення стін.", proj6_step2: "Комунікації", proj6_step2_d: "Нова електрика.", proj6_step3: "Чорнова обробка", proj6_step3_d: "Шумоізоляція, стяжка.", proj6_step4: "Чистова обробка", proj6_step4_d: "Укладання підлоги, декор.",
                blog_related: "Читайте також", blog_1_date: "12 квітня 2026", blog_1_read: "5 хв читання", blog_2_date: "4 березня 2026", blog_2_read: "7 хв читання",
                blog_1_body: "<p>Плануєте ремонт у 2026 році? Ціни на матеріали та роботи у Валенсії змінюються. Розберемо реалістичний кошторис на капітальний ремонт квартири 90 м².</p><h3 class='text-2xl font-bold text-brand-dark mt-10 mb-4'>1. Демонтаж і підготовка</h3><p>У старому фонді демонтаж часто займає 15–20% бюджету: перегородки, зняття штукатурки, вивезення сміття.</p><blockquote class='border-l-4 border-brand-accent pl-6 italic text-gray-600 my-8 bg-brand-light/50 py-4 rounded-r-xl'>Закладайте резерв близько 10% на непередбачені витрати після відкриття підлог і стін.</blockquote><h3 class='text-2xl font-bold text-brand-dark mt-10 mb-4'>2. Інженерія та чорнові роботи</h3><ul class='list-disc pl-6 space-y-2 mb-6'><li><b>Електрика:</b> нова розводка, щиток (Boletín Eléctrico).</li><li><b>Сантехніка:</b> труби, інсталяції.</li><li><b>База:</b> лазерна стяжка та машинна штукатурка.</li></ul><p>На прихованих роботах економити не варто — виправлення після чистової обробки коштує значно дорожче.</p>",
                blog_2_body: "<p>Валенсія залишається привабливою для інвестицій у нерухомість. Стратегія Flipping працює, якщо знати райони та технічні ризики.</p><h3 class='text-2xl font-bold text-brand-dark mt-10 mb-4'>Райони з потенціалом</h3><ul class='list-disc pl-6 space-y-2 mb-6'><li><b>Patraix та Extramurs:</b> попит на довгострокову оренду родинам.</li><li><b>Poblats Marítims:</b> близькість до моря та університетів.</li></ul><blockquote class='border-l-4 border-brand-accent pl-6 italic text-gray-600 my-8 bg-brand-light/50 py-4 rounded-r-xl'>Остерігайтеся верхніх поверхів без ліфта у дуже старих будинках без кошторису на дах.</blockquote><p>Ми допомагаємо інвесторам з технічним аудитом об'єкта до купівлі, щоб оцінити реальну вартість ремонту.</p>"
            }
        };

        function setLanguage(lang) {
            document.getElementById('current-lang').innerText = lang.toUpperCase();
            document.documentElement.setAttribute('lang', lang);
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key].replace(/\n/g, '<br>');
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[lang] && translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
            });
            localStorage.setItem('nivellux_lang', lang);
        }

        function t(key) {
            const lang = localStorage.getItem('nivellux_lang') || 'ru';
            return (translations[lang] && translations[lang][key]) ? translations[lang][key] : (translations['ru'][key] || key);
        }

        // Выполняется не дожидаясь полного загрузки, т.к. скрипт в самом низу body
        const forcedLang = String(window.NIVELLUX_FORCE_LANG || document.documentElement.getAttribute('lang') || '').toLowerCase();
        const savedLang = String(localStorage.getItem('nivellux_lang') || '').toLowerCase();
        const initialLang = translations[forcedLang]
            ? forcedLang
            : (translations[savedLang] ? savedLang : 'ru');
        setLanguage(initialLang);

        document.querySelectorAll('.faq-item').forEach(item => {
            item.querySelector('button').addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(i => {
                    i.classList.remove('active', 'shadow-lg', 'border', 'border-brand-accent/20');
                    i.classList.replace('bg-brand-dark', 'bg-brand-light');
                    i.classList.replace('text-white', 'text-brand-dark');
                });
                if (!isActive) {
                    item.classList.add('active', 'shadow-lg', 'border', 'border-brand-accent/20');
                    item.classList.replace('bg-brand-light', 'bg-brand-dark');
                    item.classList.replace('text-brand-dark', 'text-white');
                }
            });
        });

        // Инициализация слайдера (без DOMContentLoaded для гарантии запуска в iFrame)
        const track = document.getElementById('portfolio-track');
        const pagination = document.getElementById('portfolio-pagination');
        const btnPrev = document.getElementById('slider-prev');
        const btnNext = document.getElementById('slider-next');
        
        if (track && pagination) {
            const slides = track.children;
            let currentSlide = 0;

            function updateSlider() {
                const isDesktop = window.innerWidth >= 768;
                const slidesPerView = isDesktop ? 2 : 1;
                const maxSlide = slides.length - slidesPerView;
                if (currentSlide > maxSlide) currentSlide = maxSlide;
                if (currentSlide < 0) currentSlide = 0;
                
                if (slides.length > 0) {
                    const slideWidth = slides[0].offsetWidth; // Используем offsetWidth для надежности
                    const gap = 24; 
                    track.style.transform = `translateX(-${currentSlide * (slideWidth + gap)}px)`;
                }

                pagination.innerHTML = '';
                for(let i = 0; i <= maxSlide; i++) {
                    const dot = document.createElement('div');
                    dot.className = `w-8 h-2 rounded-full cursor-pointer transition ${i === currentSlide ? 'bg-brand-accent' : 'bg-brand-light'}`;
                    dot.addEventListener('click', () => { currentSlide = i; updateSlider(); });
                    pagination.appendChild(dot);
                }
            }

            if(btnPrev) btnPrev.addEventListener('click', () => { currentSlide--; updateSlider(); });
            if(btnNext) btnNext.addEventListener('click', () => { currentSlide++; updateSlider(); });
            window.addEventListener('resize', updateSlider);
            // Даем время CSS примениться перед расчетом ширины
            setTimeout(updateSlider, 150);
        }

        const toggleModal = (id, show) => {
            const m = document.getElementById(id);
            if (!m) return;
            if (show) {
                m.classList.remove('opacity-0', 'pointer-events-none');
                if (typeof lucide !== 'undefined') lucide.createIcons();
            } else {
                m.classList.add('opacity-0', 'pointer-events-none');
            }
        };

        function openDesignModal() { toggleModal('design-modal', true); }
        function closeDesignModal() { toggleModal('design-modal', false); }
        function openEngineeringModal() { toggleModal('engineering-modal', true); }
        function closeEngineeringModal() { toggleModal('engineering-modal', false); }
        function openSmartHomeModal() { toggleModal('smarthome-modal', true); }
        function closeSmartHomeModal() { toggleModal('smarthome-modal', false); }

        function setupForm(formId, successId, modalId) {
            const form = document.getElementById(formId);
            if(form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    document.getElementById(formId + '-container').classList.add('hidden');
                    const s = document.getElementById(successId);
                    s.classList.remove('hidden'); s.classList.add('flex');
                });
            }
            window['open' + modalId + 'Modal'] = function() {
                toggleModal(modalId.toLowerCase() + '-modal', true);
                const fc = document.getElementById(formId + '-container');
                if(fc) fc.classList.remove('hidden');
                const suc = document.getElementById(successId);
                if(suc){ suc.classList.add('hidden'); suc.classList.remove('flex'); }
                if(form) form.reset();
            };
            window['close' + modalId + 'Modal'] = function() { toggleModal(modalId.toLowerCase() + '-modal', false); };
        }

        setupForm('estimate-form', 'estimate-success', 'Estimate');
        setupForm('consultation-form', 'consultation-success', 'Consultation');
        setupForm('complex-form', 'complex-success', 'Complex');
        setupForm('commercial-form', 'commercial-success', 'Commercial');
        setupForm('licenses-form', 'licenses-success', 'Licenses');

        // Мобильное меню из рабочей версии (эталон адаптации)
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenuPanel = document.getElementById('mobile-menu-panel');
        const iconOpen = document.getElementById('mobile-menu-icon-open-wrap');
        const iconClose = document.getElementById('mobile-menu-icon-close-wrap');

        function setMobileMenuOpen(open) {
            if (!mobileMenuBtn || !mobileMenuPanel) return;
            mobileMenuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
            mobileMenuBtn.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
            mobileMenuPanel.classList.toggle('hidden', !open);
            if (iconOpen && iconClose) {
                iconOpen.classList.toggle('hidden', open);
                iconClose.classList.toggle('hidden', !open);
            }
        }

        if (mobileMenuBtn && mobileMenuPanel) {
            mobileMenuBtn.addEventListener('click', () => {
                const open = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
                setMobileMenuOpen(!open);
            });

            document.querySelectorAll('.mobile-nav-link').forEach((link) => {
                link.addEventListener('click', () => setMobileMenuOpen(false));
            });

            const mobileConsultationBtn = mobileMenuPanel.querySelector('button[data-i18n="btn_consultation"]');
            mobileConsultationBtn?.addEventListener('click', () => {
                setMobileMenuOpen(false);
                window.openConsultationModal?.();
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) setMobileMenuOpen(false);
            });
        }

        // Привязка кнопок/карточек из рабочего HTML к compare-логике модалок
        const desktopConsultationBtn = document.querySelector('header button.hidden.md\\:inline-block[data-i18n="btn_consultation"]');
        desktopConsultationBtn?.addEventListener('click', () => window.openConsultationModal?.());

        const heroEstimateBtn = document.querySelector('button[data-i18n="btn_estimate"]');
        heroEstimateBtn?.addEventListener('click', () => window.openEstimateModal?.());

        const heroProjectsBtn = document.querySelector('button[data-i18n="btn_our_projects"]');
        heroProjectsBtn?.addEventListener('click', () => {
            document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
        });

        document.querySelector('section.py-12 button[data-i18n="btn_leave_request"]')
            ?.addEventListener('click', () => window.openConsultationModal?.());

        document.querySelector('#process a[data-i18n="btn_learn_more"]')
            ?.addEventListener('click', (e) => {
                e.preventDefault();
                window.openConsultationModal?.();
            });

        document.querySelector('#process .bg-brand-dark.text-white.rounded-\\[32px\\]')
            ?.addEventListener('click', () => window.openConsultationModal?.());

        document.querySelector('footer button[data-i18n="btn_call_engineer"]')
            ?.addEventListener('click', () => window.openConsultationModal?.());

        document.getElementById('service-open-complex')
            ?.addEventListener('click', () => window.openComplexModal?.());
        document.getElementById('service-open-commercial')
            ?.addEventListener('click', () => window.openCommercialModal?.());
        document.getElementById('service-open-licenses')
            ?.addEventListener('click', () => window.openLicensesModal?.());

        const detailsButtons = document.querySelectorAll('#services button[data-i18n="btn_details"]');
        detailsButtons[0]?.addEventListener('click', () => window.openDesignModal?.());
        detailsButtons[1]?.addEventListener('click', () => window.openEngineeringModal?.());
        detailsButtons[2]?.addEventListener('click', () => window.openSmartHomeModal?.());

        document.querySelectorAll('#portfolio-track > div').forEach((card, idx) => {
            const projectId = `proj${idx + 1}`;
            card.classList.add('cursor-pointer');
            card.addEventListener('click', () => window.openPortfolioModal?.(projectId));
            card.querySelector('.rounded-full.cursor-pointer')?.addEventListener('click', (e) => {
                e.stopPropagation();
                window.openPortfolioModal?.(projectId);
            });
        });

        window.openPortfolioModal = function(projId) {
            const data = portfolioProjectsData[projId];
            if (!data) return;

            const html = `
                <div class="w-full min-h-[350px] md:min-h-[450px] bg-cover bg-center relative rounded-t-[32px] shrink-0" style="background-image: url('${data.heroImg}');">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent rounded-t-[32px]"></div>
                    <div class="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
                        <div class="flex gap-3 mb-4">
                            <span class="bg-brand-accent text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-md">${t(projId + '_tag2')}</span>
                            <span class="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold border border-white/20">${t(projId + '_tag1')}</span>
                        </div>
                        <h2 class="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-lg">${t(projId + '_title')}</h2>
                        <p class="text-gray-200 text-lg flex items-center gap-2 drop-shadow-md"><i data-lucide="map-pin" class="w-5 h-5 text-brand-accent"></i> <span>${t(projId + '_address')}</span></p>
                    </div>
                </div>

                <div class="p-8 md:p-12 bg-white">
                    <div class="flex flex-col md:flex-row gap-12 mb-16">
                        <div class="w-full md:w-2/3">
                            <h3 class="text-2xl font-bold text-brand-dark mb-4">${t('portf_mod_desc_title')}</h3>
                            <p class="text-gray-600 leading-relaxed">${t(projId + '_desc_text')}</p>
                        </div>
                        <div class="w-full md:w-1/3 bg-brand-light rounded-2xl p-6 flex flex-col justify-center gap-4 border border-gray-200">
                            <div><p class="text-xs text-gray-500 uppercase font-bold">${t('portf_mod_stat1_label')}</p><p class="text-lg font-bold">${t(projId + '_stat1_val')}</p></div>
                            <div class="w-full h-px bg-gray-300"></div>
                            <div><p class="text-xs text-gray-500 uppercase font-bold">${t('portf_mod_stat2_label')}</p><p class="text-lg font-bold">${t(projId + '_stat2_val')}</p></div>
                        </div>
                    </div>

                    <h3 class="text-2xl font-bold text-brand-dark mb-8">${t('portf_mod_steps_title')}</h3>
                    <div class="relative mb-16">
                        <div class="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0"></div>
                        <div class="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-4 relative z-10">
                            ${[1, 2, 3, 4].map(step => `
                                <div class="flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-3 w-full md:w-1/4">
                                    <div class="w-12 h-12 rounded-full ${step % 2 === 0 ? 'bg-brand-accent' : 'bg-brand-dark'} text-white flex items-center justify-center font-bold shadow-md shrink-0">${step}</div>
                                    <div><h4 class="font-bold text-brand-dark">${t(projId + '_step' + step)}</h4><p class="text-xs text-gray-500 mt-1">${t(projId + '_step' + step + '_d')}</p></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <h3 class="text-2xl font-bold text-brand-dark mb-6">${t('portf_mod_tech_title')}</h3>
                    <div class="flex flex-wrap gap-3 mb-16">
                        ${data.tech.map(tKey => `<span class="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"><i data-lucide="check-circle" class="w-4 h-4 inline-block mr-1 text-brand-accent"></i> ${t(tKey)}</span>`).join('')}
                    </div>

                    <h3 class="text-2xl font-bold text-brand-dark mb-6">${t('portf_mod_gallery_title')}</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        <div onclick="openLightbox('${data.gallery[0]}')" class="col-span-2 md:col-span-2 row-span-2 min-h-[200px] md:min-h-[400px] bg-cover bg-center rounded-2xl cursor-pointer hover:opacity-90 transition shadow-sm" style="background-image: url('${data.gallery[0]}');"></div>
                        <div onclick="openLightbox('${data.gallery[1]}')" class="col-span-1 min-h-[100px] md:min-h-[190px] bg-cover bg-center rounded-2xl cursor-pointer hover:opacity-90 transition shadow-sm" style="background-image: url('${data.gallery[1]}');"></div>
                        <div onclick="openLightbox('${data.gallery[2]}')" class="col-span-1 min-h-[100px] md:min-h-[190px] bg-cover bg-center rounded-2xl cursor-pointer hover:opacity-90 transition shadow-sm" style="background-image: url('${data.gallery[2]}');"></div>
                        <div onclick="openLightbox('${data.gallery[3]}')" class="col-span-1 min-h-[100px] md:min-h-[190px] bg-cover bg-center rounded-2xl cursor-pointer hover:opacity-90 transition shadow-sm" style="background-image: url('${data.gallery[3]}');"></div>
                        <div onclick="openLightbox('${data.gallery[4]}')" class="col-span-1 min-h-[100px] md:min-h-[190px] bg-cover bg-center rounded-2xl cursor-pointer hover:opacity-90 transition shadow-sm" style="background-image: url('${data.gallery[4]}');"></div>
                    </div>
                </div>
            `;

            document.getElementById('portfolio-dynamic-content').innerHTML = html;
            const cf = document.getElementById('portfolio-cta-form');
            const cs = document.getElementById('portfolio-cta-success');
            if(cf) { cf.classList.remove('hidden'); cf.classList.add('flex'); cf.reset(); }
            if(cs) { cs.classList.add('hidden'); cs.classList.remove('flex'); }

            toggleModal('portfolio-modal', true);
        };
        
        window.closePortfolioModal = function() { toggleModal('portfolio-modal', false); };
        window.submitPortfolioCTA = function(e) {
            e.preventDefault();
            document.getElementById('portfolio-cta-form').classList.replace('flex', 'hidden');
            document.getElementById('portfolio-cta-success').classList.replace('hidden', 'flex');
            if (typeof lucide !== 'undefined') lucide.createIcons();
        };

        window.openLightbox = function(src) {
            const img = document.getElementById('lightbox-img');
            img.src = src;
            toggleModal('lightbox-modal', true);
            setTimeout(() => img.classList.replace('scale-95', 'scale-100'), 10);
        };
        window.closeLightbox = function() {
            document.getElementById('lightbox-img').classList.replace('scale-100', 'scale-95');
            setTimeout(() => toggleModal('lightbox-modal', false), 300);
        };

        window.openBlogModal = function(articleId) {
            const data = blogArticlesData[articleId];
            if (!data) return;

            const relatedArticle = blogArticlesData[data.relatedId];
            if (!relatedArticle) return;

            const html = `
                <div class="w-full h-64 md:h-96 bg-cover bg-center relative rounded-t-[32px] shrink-0" style="background-image: url('${data.heroImg}');">
                    <div class="absolute inset-0 bg-brand-dark/40 rounded-t-[32px]"></div>
                </div>
                <div class="px-6 md:px-12 py-10 md:py-12 bg-white">
                    <div class="flex flex-wrap gap-4 items-center mb-6">
                        <span class="bg-brand-accent text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">${t(data.tagKey)}</span>
                        <span class="text-gray-400 text-sm font-medium flex items-center gap-1"><i data-lucide="calendar" class="w-4 h-4"></i> ${t(data.dateKey)}</span>
                        <span class="text-gray-400 text-sm font-medium flex items-center gap-1"><i data-lucide="clock" class="w-4 h-4"></i> ${t(data.readTimeKey)}</span>
                    </div>
                    <h2 class="text-3xl md:text-5xl font-bold text-brand-dark mb-8 leading-tight">${t(data.titleKey)}</h2>
                    <div class="text-gray-700 text-lg leading-relaxed space-y-6">${t(data.bodyKey)}</div>
                    <div class="border-t border-gray-200 pt-10 mt-16">
                        <h4 class="text-2xl font-bold text-brand-dark mb-6">${t('blog_related')}</h4>
                        <div onclick="openBlogModal('${data.relatedId}')" class="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-4 rounded-2xl border border-gray-100 hover:shadow-md hover:border-brand-accent/30 transition cursor-pointer group">
                            <div class="w-full sm:w-32 h-40 sm:h-24 rounded-xl bg-cover bg-center shrink-0" style="background-image: url('${relatedArticle.heroImg}');"></div>
                            <div>
                                <span class="text-xs font-bold text-brand-accent uppercase tracking-wider mb-1 block">${t(relatedArticle.tagKey)}</span>
                                <h5 class="font-bold text-brand-dark group-hover:text-brand-accent transition leading-snug">${t(relatedArticle.titleKey)}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.getElementById('blog-dynamic-content').innerHTML = html;
            toggleModal('blog-modal', true);
            const scrollEl = document.getElementById('blog-modal').querySelector('.overflow-y-auto');
            if (scrollEl) scrollEl.scrollTop = 0;
            if (typeof lucide !== 'undefined') lucide.createIcons();
        };

        window.closeBlogModal = function() { toggleModal('blog-modal', false); };
