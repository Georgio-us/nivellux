if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// ------------------ ЛОГИКА СЛАЙДЕРА ПОРТФОЛИО ------------------
document.addEventListener('DOMContentLoaded', () => {
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

            // Защита от выхода за границы
            if (currentSlide > maxSlide) currentSlide = maxSlide;
            if (currentSlide < 0) currentSlide = 0;

            // Ширина одного слайда + отступ (gap-6 = 24px)
            const slideWidth = slides[0].getBoundingClientRect().width;
            const gap = 24; 
            
            track.style.transform = `translateX(-${currentSlide * (slideWidth + gap)}px)`;

            // Обновляем точки пагинации
            pagination.innerHTML = '';
            for(let i = 0; i <= maxSlide; i++) {
                const dot = document.createElement('div');
                dot.className = `w-8 h-2 rounded-full cursor-pointer transition ${i === currentSlide ? 'bg-brand-accent' : 'bg-brand-light'}`;
                dot.addEventListener('click', () => {
                    currentSlide = i;
                    updateSlider();
                });
                pagination.appendChild(dot);
            }
        }

        // Кнопки Вперед / Назад
        if(btnPrev) {
            btnPrev.addEventListener('click', () => {
                currentSlide--;
                updateSlider();
            });
        }
        if(btnNext) {
            btnNext.addEventListener('click', () => {
                currentSlide++;
                updateSlider();
            });
        }

        window.addEventListener('resize', updateSlider);
        updateSlider();
    }
});


// ------------------ СЛОВАРЬ ПЕРЕВОДОВ ------------------
const translations = {
    ru: {
        nav_services: "Услуги", nav_benefits: "Преимущества", nav_process: "Этапы", nav_portfolio: "Объекты", nav_reviews: "Отзывы", nav_faq: "FAQ",
        btn_consultation: "Консультация",
        hero_title: "РЕМОНТ ПОД КЛЮЧ В ВАЛЕНСИИ И ПРИГОРОДЕ",
        hero_desc: "Создаем идеальные интерьеры для жизни и бизнеса. Берем на себя всё: от разработки дизайн-проекта и получения лицензий (Licencia de obra) до финальной уборки.",
        btn_estimate: "Рассчитать смету", btn_our_projects: "Наши объекты",
        
        services_title: "НАШИ УСЛУГИ", services_desc: "Выполняем полный цикл строительно-отделочных работ с соблюдением испанских норм и европейских стандартов качества.",
        serv_1_title: "Комплексный ремонт", serv_1_desc: "Капитальный ремонт квартир и вилл под ключ. Демонтаж, коммуникации, черновая и чистовая отделка.",
        serv_2_title: "Дизайн-интерьера", btn_details: "Подробнее",
        serv_3_title: "Ремонт коммерции", serv_3_desc: "Адаптация помещений под рестораны, офисы и магазины. Согласование проекта с Ayuntamiento.",
        serv_4_title: "Инженерные сети",
        serv_5_title: "Лицензии и проекты", serv_5_desc: "Помощь архитектора в получении Licencia de obra mayor/menor и смене назначения.",
        serv_6_title: "Умный дом (Domótica)",
        
        why_title: "ПОЧЕМУ ВЫБИРАЮТ НАС", why_desc: "Ремонт в Испании имеет свою специфику. Мы знаем, как обойти все подводные камни и сдать объект без задержек.",
        why_1_title: "Твердая смета", why_1_desc: "Стоимость работ фиксируется в договоре и не увеличивается в процессе ремонта.",
        why_2_title: "Соблюдение сроков", why_2_desc: "Мы ценим ваше время. За каждый день просрочки прописаны штрафные санкции.",
        why_3_title: "Штатные бригады", why_3_desc: "Никаких случайных людей. Работают только проверенные профильные мастера.",
        why_4_title: "Официальная гарантия", why_4_desc: "Предоставляем гарантию на все черновые и инженерные работы от 3 до 5 лет.",
        
        banner_title: "НАЧНИТЕ РЕМОНТ БЕЗ СТРЕССА", banner_desc: "ЗАПИШИТЕСЬ НА БЕСПЛАТНЫЙ ВЫЕЗД ИНЖЕНЕРА ДЛЯ ЗАМЕРА И ОЦЕНКИ ОБЪЕКТА",
        btn_call: "Позвонить", btn_leave_request: "Оставить заявку",
        
        process_title: "КАК МЫ РАБОТАЕМ", btn_learn_more: "Узнать подробнее",
        proc_1_title: "Замер и консультация", proc_1_desc: "Наш инженер выезжает на объект в Валенсии, проводит точные замеры и оценивает техническое состояние.",
        proc_2_title: "Смета и договор", proc_2_desc: "Составляем прозрачную смету с детализацией работ и материалов. Подписываем официальный контракт.",
        proc_3_title: "Подготовка и закупка", proc_3_desc: "Оформляем разрешения (Licencia), закупаем и завозим материалы. Защищаем зоны общего пользования.",
        proc_4_title: "Строительные работы", proc_4_desc: "Выполняем демонтаж, возведение стен, разводку электрики, сантехники и чистовую отделку строго по графику.",
        proc_5_title: "Сдача объекта", proc_5_desc: "Проводим клининг, вывозим остатки мусора и передаем вам ключи от полностью готового и чистого помещения.",
        btn_call_engineer: "ВЫЗВАТЬ ИНЖЕНЕРА",
        
        portf_title: "НАШИ ОБЪЕКТИ\nКОТОРЫМИ МЫ ГОРДИМСЯ",
        portf_1_tag: "Апартаменты • Ruzafa", portf_1_title: "Капитальный ремонт 90 м²", portf_1_desc: "Полная перепланировка в историческом фонде, сохранение оригинальной кирпичной кладки, замена перекрытий.",
        portf_2_tag: "Дом • El Cabañal", portf_2_title: "Реконструкция таунхауса", portf_2_desc: "Восстановление фасада, создание открытой террасы на крыше, монтаж системы Умный дом и теплых полов.",
        portf_3_tag: "Ресторан • Pascal", portf_3_title: "Ремонт ресторана Pascal", portf_3_desc: "Полная адаптация помещения под требования ресторана, обустройство профессиональной кухни, систем вентиляции и клиентского зала.",
        portf_4_tag: "Апартаменты • Sheila 2", portf_4_title: "Апартаменты Sheila 2", portf_4_desc: "Реализация эксклюзивного дизайн-проекта с использованием премиальных материалов, скрытых дверей и световых линий.",
        portf_5_tag: "Салон красоты", portf_5_title: "Ремонт салона красоты", portf_5_desc: "Обустройство рабочих зон, специальное освещение с правильным индексом цветопередачи, монтаж мокрых точек и стильный ресепшн.",
        portf_6_tag: "Квартира • Eixample", portf_6_title: "Комплексный ремонт квартиры", portf_6_desc: "Светлая и просторная квартира для молодой семьи. Черновая и чистовая отделка, замена всех коммуникаций и монтаж аэротермии.",
        
        reviews_title: "ОТЗЫВЫ КЛИЕНТОВ",
        rev_1_text: "«Ребята делали ремонт в нашей новой квартире в Бенимаклете. Сделали всё под ключ, мы находились в другой стране и контролировали процесс по фото и видео. Качество супер!»", rev_1_name: "Алексей М.", rev_1_obj: "Квартира 75 м²",
        rev_2_text: "«Долго искали подрядчика для ремонта коммерческого помещения под кафе. NIVELLUX взяли на себя всё: от лицензии до расстановки столов. Открылись вовремя.»", rev_2_name: "Елена Миронова", rev_2_obj: "Кафетерий, Eixample",
        rev_3_text: "«Отличная коммуникация. Прораб всегда на связи, смета прозрачная. Была небольшая задержка с поставкой плитки, но мастера успели нагнать сроки за счет малярки.»", rev_3_name: "Дмитрий К.", rev_3_obj: "Апартаменты, Патерна",
        
        stat_1: "Сданных объектов", stat_2: "Лет в Испании", stat_3: "Мастеров в штате", stat_4: "Года гарантии",
        
        video_title: "РУМТУР: ГОТОВЫЙ ОБЪЕКТ В ЦЕНТРЕ ВАЛЕНСИИ", video_desc: "Посмотрите наш видео-отчет с недавно завершенного объекта. Мы показываем качество финишной отделки, стыки материалов, работу инженерных систем и то, как выглядит квартира перед сдачей ключей клиенту.", btn_all_video: "Смотреть все видео",
        
        tech_title: "МАТЕРИАЛЫ И РЕШЕНИЯ",
        tech_1_pre: "Идеально ровные стены.", tech_1_title: "Машинная штукатурка", tech_1_desc: "Забываем о кривых стенах старого фонда. Используем механизированное нанесение и лазерные уровни для создания безупречной геометрии под покраску.",
        tech_2_pre: "Фундамент для вашего покрытия.", tech_2_title: "Лазерная стяжка пола", tech_2_desc: "Никаких перепадов высот. Создаем идеально ровное основание, на которое плитка или ламинат ложатся без лишнего расхода клея и скрипа.",
        tech_3_pre: "Безопасность и надежность.", tech_3_title: "Инженерные сети 2.0", tech_3_desc: "Полная замена старой проводки и труб на современные системы. Проектируем щитки с защитой от скачков напряжения и коллекторную разводку воды.",
        tech_4_pre: "Здоровый микроклимат.", tech_4_title: "Стоп-плесень и влага", tech_4_desc: "Специализированная гидроизоляция «мокрых» зон и антигрибковая обработка стен. Решаем проблему влажности, типичную для климата Испании.",
        tech_5_pre: "Экономия на счетах.", tech_5_title: "Энергосбережение", tech_5_desc: "Установка окон с терморазрывом и утепление контуров. Ваш дом сохраняет тепло зимой и прохладу летом, снижая расходы на кондиционер.",
        tech_6_pre: "Тишина в квартире.", tech_6_title: "Шумоизоляция", tech_6_desc: "Используем современные мембраны (Copopren, Danosa) для защиты от шума соседей и улицы. Создаем «акустический кокон» в спальнях и детских.",
        tech_7_pre: "Эстетика и практичность.", tech_7_title: "Финишная малярка", tech_7_desc: "Стены под покраску со стеклохолстом (защита от трещин). Используем износостойкие краски, которые не выгорают и легко моются.",
        tech_8_pre: "Современный минимализм.", tech_8_title: "Скрытые системы", tech_8_desc: "Интегрируем скрытые двери (Invisible), теневые профили и встроенные люки. Весь технологический «шум» спрятан, остается только чистый дизайн.",
        
        faq_title: "ЧАСТЫЕ ВОПРОСЫ",
        faq_1_q: "Сколько стоит квадратный метр ремонта под ключ?", faq_1_a: "Стоимость зависит от состояния объекта и уровня отделки. В среднем капитальный ремонт в Валенсии начинается от 600€ до 900€ за квадратный метр.",
        faq_2_q: "Вы помогаете с получением лицензии (Licencia de obra)?", faq_2_a: "Да. Наш архитектор подготовит проект (Proyecto técnico) для мэрии, подаст декларацию (Declaración responsable) для мелких работ или получит полноценную лицензию.",
        faq_3_q: "Нужно ли мое присутствие в Валенсии во время ремонта?", faq_3_a: "Нет, многие наши клиенты живут в других странах. Мы предоставляем еженедельные фото- и видеоотчеты о проделанной работе, а все текущие вопросы решаем дистанционно.",
        faq_4_q: "Помогаете ли вы с закупкой чистовых материалов?", faq_4_a: "Да, мы можем сопроводить вас в шоурумы наших партнеров в Валенсии, поможем с выбором плитки, сантехники и ламината, а также организуем их доставку.",
        
        nav_blog: "Блог",
        blog_title: "ПОЛЕЗНЫЕ СТАТЬИ<br>И СОВЕТЫ", btn_all_articles: "Все статьи",
        blog_tag_1: "Смета 2026", blog_1_title: "Сколько стоит ремонт квартиры в Валенсии в 2026 году?", blog_1_desc: "Разбор реальной сметы: от демонтажа до финишной отделки. Рассказываем про актуальные цены на работы, черновые материалы и влияние инфляции.",
        blog_tag_2: "Недвижимость", blog_2_title: "Инвестиции в Валенсию: выбираем квартиру под ремонт (Flipping)", blog_2_desc: "Районы, которые принесут максимальный ROI. На что смотреть при покупке старого фонда, чтобы не разориться на скрытых дефектах и замене перекрытий.",
        btn_read_more: "Читать полностью",

        footer_desc: "Ремонтно-строительная компания в Валенсии. Строим ваше будущее по собственному плану.", footer_menu: "Меню", footer_contacts: "Контакты", footer_rights: "Все права защищены."
    },
    es: {
        nav_services: "Servicios", nav_benefits: "Ventajas", nav_process: "Proceso", nav_portfolio: "Proyectos", nav_reviews: "Reseñas", nav_faq: "FAQ",
        btn_consultation: "Consulta",
        hero_title: "REFORMAS INTEGRALES EN VALENCIA Y ALREDEDORES",
        hero_desc: "Creamos interiores perfectos para vida y negocio. Nos encargamos de todo: diseño, licencias de obra y limpieza final.",
        btn_estimate: "Pedir presupuesto", btn_our_projects: "Nuestros proyectos",
        
        services_title: "NUESTROS SERVICIOS", services_desc: "Realizamos el ciclo completo de obras y acabados cumpliendo normativas españolas y estándares europeos.",
        serv_1_title: "Reforma integral", serv_1_desc: "Reformas de pisos y chalets llave en mano. Demoliciones, instalaciones y acabados.",
        serv_2_title: "Diseño de interiores", btn_details: "Saber más",
        serv_3_title: "Reforma comercial", serv_3_desc: "Adaptación de locales para restaurantes, oficinas. Gestión con el Ayuntamiento.",
        serv_4_title: "Instalaciones",
        serv_5_title: "Licencias y proyectos", serv_5_desc: "Ayuda arquitectónica para Licencia de obra mayor/menor y cambio de uso.",
        serv_6_title: "Domótica",
        
        why_title: "POR QUÉ ELEGIRNOS", why_desc: "Las reformas en España tienen sus particularidades. Sabemos cómo evitar problemas y entregar a tiempo.",
        why_1_title: "Presupuesto cerrado", why_1_desc: "El coste se fija en el contrato y no aumenta durante la obra.",
        why_2_title: "Cumplimiento de plazos", why_2_desc: "Valoramos su tiempo. Penalizaciones por cada día de retraso.",
        why_3_title: "Plantilla propia", why_3_desc: "Sin personal eventual. Solo profesionales cualificados de confianza.",
        why_4_title: "Garantía oficial", why_4_desc: "Ofrecemos garantía en todas las instalaciones de 3 a 5 años.",
        
        banner_title: "EMPIECE SU REFORMA SIN ESTRÉS", banner_desc: "SOLICITE UNA VISITA GRATUITA DE NUESTRO TÉCNICO PARA MEDICIÓN Y PRESUPUESTO",
        btn_call: "Llamar", btn_leave_request: "Solicitar presupuesto",
        
        process_title: "CÓMO TRABAJAMOS", btn_learn_more: "Más información",
        proc_1_title: "Medición y consulta", proc_1_desc: "Nuestro ingeniero visita su vivienda en Valencia, toma medidas exactas y evalúa el estado técnico.",
        proc_2_title: "Presupuesto y contrato", proc_2_desc: "Elaboramos un presupuesto transparente y detallado. Firmamos un contrato oficial.",
        proc_3_title: "Preparación y compras", proc_3_desc: "Tramitamos las licencias, compramos materiales y protegemos las zonas comunes.",
        proc_4_title: "Obras y reformas", proc_4_desc: "Realizamos demoliciones, tabiquería, fontanería, electricidad y acabados cumpliendo los plazos.",
        proc_5_title: "Entrega del proyecto", proc_5_desc: "Realizamos una limpieza profunda, retiramos escombros y entregamos las llaves de un espacio perfecto.",
        btn_call_engineer: "SOLICITAR VISITA",
        
        portf_title: "NUESTROS PROYECTOS\nDESTACADOS",
        portf_1_tag: "Piso • Ruzafa", portf_1_title: "Reforma integral 90 m²", portf_1_desc: "Redistribución completa en edificio histórico, conservando el ladrillo caravista original.",
        portf_2_tag: "Casa • El Cabañal", portf_2_title: "Rehabilitación de adosado", portf_2_desc: "Restauración de fachada, creación de terraza abierta, instalación de domótica y suelo radiante.",
        portf_3_tag: "Restaurante • Pascal", portf_3_title: "Reforma Restaurante Pascal", portf_3_desc: "Adaptación completa para restaurante, cocina profesional, sistemas de ventilación y zona de clientes.",
        portf_4_tag: "Apartamento • Sheila 2", portf_4_title: "Apartamentos Sheila 2", portf_4_desc: "Proyecto de diseño exclusivo con materiales premium, puertas invisibles y líneas de luz.",
        portf_5_tag: "Salón de belleza", portf_5_title: "Reforma de Salón de Belleza", portf_5_desc: "Zonas de trabajo, iluminación especial con alto índice de reproducción cromática y recepción.",
        portf_6_tag: "Piso • Eixample", portf_6_title: "Reforma integral de piso", portf_6_desc: "Piso luminoso para una familia joven. Acabados completos, cambio de instalaciones y aerotermia.",
        
        reviews_title: "OPINIONES DE CLIENTES",
        rev_1_text: "«Hicieron la reforma de nuestro nuevo piso en Benimaclet. Todo llave en mano, estábamos en otro país y controlamos todo por fotos y vídeos. ¡Calidad excelente!»", rev_1_name: "Alexey M.", rev_1_obj: "Piso 75 m²",
        rev_2_text: "«Buscábamos una empresa para reformar un local comercial para una cafetería. NIVELLUX se encargó de todo: desde el Proyecto de Actividad hasta los muebles. Abrimos a tiempo.»", rev_2_name: "Elena Mironova", rev_2_obj: "Cafetería, Eixample",
        rev_3_text: "«Comunicación perfecta. El jefe de obra siempre disponible. Hubo un pequeño retraso con los azulejos pero los pintores adelantaron trabajo y cumplieron los plazos.»", rev_3_name: "Dmitry K.", rev_3_obj: "Apartamento, Paterna",
        
        stat_1: "Proyectos terminados", stat_2: "Años en España", stat_3: "Profesionales", stat_4: "Años de garantía",
        
        video_title: "HOUSE TOUR: PROYECTO TERMINADO EN EL CENTRO", video_desc: "Vea nuestro vídeo de un proyecto recién terminado. Mostramos la calidad de los acabados, las juntas, las instalaciones y cómo queda el piso antes de entregar las llaves.", btn_all_video: "Ver todos los vídeos",
        
        tech_title: "MATERIALES Y SOLUCIONES",
        tech_1_pre: "Paredes perfectamente lisas.", tech_1_title: "Yeso proyectado a máquina", tech_1_desc: "Olvídese de las paredes torcidas en pisos antiguos. Usamos aplicación mecanizada y niveles láser para crear una geometría impecable para pintar.",
        tech_2_pre: "La base para su suelo.", tech_2_title: "Solera autonivelante láser", tech_2_desc: "Sin desniveles. Creamos una base perfectamente plana sobre la que la baldosa o el laminado se asientan sin exceso de pegamento ni crujidos.",
        tech_3_pre: "Seguridad y fiabilidad.", tech_3_title: "Redes de ingeniería 2.0", tech_3_desc: "Sustitución completa de cableado y tuberías antiguas por sistemas modernos. Diseñamos cuadros con protección contra sobretensiones y distribución de agua por colectores.",
        tech_4_pre: "Microclima saludable.", tech_4_title: "Stop moho y humedad", tech_4_desc: "Impermeabilización especializada en zonas húmedas y tratamiento antimoho en paredes. Solucionamos el problema de humedad, típico del clima en España.",
        tech_5_pre: "Ahorro en facturas.", tech_5_title: "Eficiencia energética", tech_5_desc: "Instalación de ventanas con rotura de puente térmico y aislamiento de contornos. Su casa conserva el calor en invierno y el frescor en verano, reduciendo gastos de aire acondicionado.",
        tech_6_pre: "Silencio en casa.", tech_6_title: "Aislamiento acústico", tech_6_desc: "Usamos membranas modernas (Copopren, Danosa) para proteger del ruido de vecinos y calle. Creamos un «capullo acústico» en dormitorios y habitaciones infantiles.",
        tech_7_pre: "Estética y practicidad.", tech_7_title: "Pintura y acabados", tech_7_desc: "Paredes para pintar con velo de fibra de vidrio (protección anti-grietas). Usamos pinturas resistentes que no se decoloran y son fáciles de lavar.",
        tech_8_pre: "Minimalismo moderno.", tech_8_title: "Sistemas ocultos", tech_8_desc: "Integramos puertas ocultas (Invisible), perfiles de sombra y registros empotrados. Todo el «ruido» tecnológico queda oculto, solo diseño limpio.",
        
        faq_title: "PREGUNTAS FRECUENTES",
        faq_1_q: "¿Cuánto cuesta el metro cuadrado de reforma integral?", faq_1_a: "El coste depende del estado inicial y las calidades. En Valencia, una reforma integral suele costar entre 600€ y 900€ por metro cuadrado. El precio exacto se fija en el presupuesto.",
        faq_2_q: "¿Ayudan a conseguir la Licencia de obra?", faq_2_a: "Sí. Nuestro arquitecto preparará el Proyecto técnico para el Ayuntamiento, presentará la Declaración responsable o tramitará la Licencia de obra mayor si es necesario.",
        faq_3_q: "¿Tengo que estar en Valencia durante la reforma?", faq_3_a: "No es necesario. Muchos de nuestros clientes viven en otros países. Enviamos reportes semanales con fotos y vídeos para que vea el progreso a distancia.",
        faq_4_q: "¿Me ayudan a comprar los materiales de acabado?", faq_4_a: "Sí, podemos acompañarle a las exposiciones de nuestros proveedores en Valencia, asesorarle en la elección de azulejos y sanitarios, y gestionar el transporte.",
        
        nav_blog: "Blog",
        blog_title: "ARTÍCULOS Y<br>CONSEJOS ÚTILES", btn_all_articles: "Todos los artículos",
        blog_tag_1: "Presupuesto 2026", blog_1_title: "¿Cuánto cuesta reformar un piso en Valencia en 2026?", blog_1_desc: "Análisis detallado de un presupuesto real: desde la demolición hasta los acabados. Te contamos los precios actuales de mano de obra y materiales.",
        blog_tag_2: "Inmobiliaria", blog_2_title: "Inversión en Valencia: cómo elegir un piso para reformar (Flipping)", blog_2_desc: "Barrios con mayor ROI. Qué buscar al comprar viviendas antiguas para evitar gastos imprevistos en defectos ocultos y estructuras.",
        btn_read_more: "Leer más",

        footer_desc: "Empresa de reformas y construcción en Valencia. Construimos su futuro a su medida.", footer_menu: "Menú", footer_contacts: "Contactos", footer_rights: "Todos los derechos reservados."
    },
    uk: {
        nav_services: "Послуги", nav_benefits: "Переваги", nav_process: "Етапи", nav_portfolio: "Об'єкти", nav_reviews: "Відгуки", nav_faq: "FAQ",
        btn_consultation: "Консультація",
        hero_title: "РЕМОНТ ПІД КЛЮЧ У ВАЛЕНСІЇ ТА ПЕРЕДМІСТІ",
        hero_desc: "Створюємо ідеальні інтер'єри для життя та бізнесу. Беремо на себе все: від дизайн-проекту та ліцензій до фінального прибирання.",
        btn_estimate: "Розрахувати кошторис", btn_our_projects: "Наші об'єкти",
        
        services_title: "НАШІ ПОСЛУГИ", services_desc: "Виконуємо повний цикл будівельно-оздоблювальних робіт з дотриманням іспанських норм та європейських стандартів.",
        serv_1_title: "Комплексний ремонт", serv_1_desc: "Капітальний ремонт квартир та вілл під ключ. Демонтаж, комунікації, чорнова та чистова обробка.",
        serv_2_title: "Дизайн інтер'єру", btn_details: "Детальніше",
        serv_3_title: "Ремонт комерції", serv_3_desc: "Адаптація приміщень під ресторани, офіси. Узгодження проекту з Ayuntamiento.",
        serv_4_title: "Інженерні мережі",
        serv_5_title: "Ліцензії та проекти", serv_5_desc: "Допомога архітектора в отриманні Licencia de obra mayor/menor та зміні цільового призначення.",
        serv_6_title: "Розумний дім",
        
        why_title: "ЧОМУ ОБИРАЮТЬ НАС", why_desc: "Ремонт в Іспанії має свою специфіку. Ми знаємо, як обійти всі перешкоди та здати об'єкт без затримок.",
        why_1_title: "Твердий кошторис", why_1_desc: "Вартість робіт фіксується в договорі і не збільшується в процесі ремонту.",
        why_2_title: "Дотримання термінів", why_2_desc: "Ми цінуємо ваш час. За кожен день прострочення прописані штрафні санкції.",
        why_3_title: "Штатні бригади", why_3_desc: "Ніяких випадкових людей. Працюють тільки перевірені профільні майстри.",
        why_4_title: "Офіційна гарантія", why_4_desc: "Надаємо гарантію на всі чорнові та інженерні роботи від 3 до 5 років.",
        
        banner_title: "ПОЧНІТЬ РЕМОНТ БЕЗ СТРЕСУ", banner_desc: "ЗАПИШІТЬСЯ НА БЕЗКОШТОВНИЙ ВИЇЗД ІНЖЕНЕРА ДЛЯ ЗАМІРУ ТА ОЦІНКИ",
        btn_call: "Зателефонувати", btn_leave_request: "Залишити заявку",
        
        process_title: "ЯК МИ ПРАЦЮЄМО", btn_learn_more: "Дізнатися більше",
        proc_1_title: "Замір та консультація", proc_1_desc: "Наш інженер виїжджає на об'єкт у Валенсії, проводить точні заміри та оцінює технічний стан.",
        proc_2_title: "Кошторис та договір", proc_2_desc: "Складаємо прозорий кошторис з деталізацією робіт. Підписуємо офіційний контракт.",
        proc_3_title: "Підготовка та закупівля", proc_3_desc: "Оформлюємо дозволи, закуповуємо та завозимо матеріали. Захищаємо зони загального користування.",
        proc_4_title: "Будівельні роботи", proc_4_desc: "Виконуємо демонтаж, зведення стін, розведення електрики, сантехніки та чистове оздоблення.",
        proc_5_title: "Здача об'єкта", proc_5_desc: "Проводимо клінінг, вивозимо залишки сміття та передаємо вам ключі від готового приміщення.",
        btn_call_engineer: "ВИКЛИКАТИ ІНЖЕНЕРА",
        
        portf_title: "НАШІ ОБ'ЄКТИ\nЯКИМИ МИ ПИШАЄМОСЯ",
        portf_1_tag: "Апартаменти • Ruzafa", portf_1_title: "Капітальний ремонт 90 м²", portf_1_desc: "Повне перепланування в історичному фонді, збереження оригінальної цегляної кладки.",
        portf_2_tag: "Будинок • El Cabañal", portf_2_title: "Реконструкція таунхауса", portf_2_desc: "Відновлення фасаду, створення відкритої тераси на даху, монтаж системи Розумний дім.",
        portf_3_tag: "Ресторан • Pascal", portf_3_title: "Ремонт ресторану Pascal", portf_3_desc: "Адаптація приміщення під вимоги ресторану, облаштування професійної кухні, систем вентиляції.",
        portf_4_tag: "Апартаменти • Sheila 2", portf_4_title: "Апартаменти Sheila 2", portf_4_desc: "Реалізація ексклюзивного дизайн-проекту з використанням преміальних матеріалів та прихованих дверей.",
        portf_5_tag: "Салон краси", portf_5_title: "Ремонт салону краси", portf_5_desc: "Облаштування робочих зон, спеціальне освітлення з правильним індексом передачі кольору, стильний ресепшн.",
        portf_6_tag: "Квартира • Eixample", portf_6_title: "Комплексный ремонт квартири", portf_6_desc: "Світла і простора квартира для молодої сім'ї. Чорнова і чистова обробка, заміна комунікацій.",
        
        reviews_title: "ВІДГУКИ КЛІЄНТІВ",
        rev_1_text: "«Хлопці робили ремонт у нашій новій квартирі в Бенімаклеті. Зробили все під ключ, ми знаходилися в іншій країні і контролювали процес по фото. Якість супер!»", rev_1_name: "Олексій М.", rev_1_obj: "Квартира 75 м²",
        rev_2_text: "«Довго шукали підрядника для ремонту кафе. NIVELLUX взяли на себе все: від ліцензії Proyecto de Actividad до розстановки столів. Відкрилися вчасно.»", rev_2_name: "Олена Миронова", rev_2_obj: "Кафетерій, Eixample",
        rev_3_text: "«Відмінна комунікація. Виконроб завжди на зв'язку. Була невелика затримка з поставкою плитки, але майстри встигли наздогнати терміни за рахунок малярки.»", rev_3_name: "Дмитро К.", rev_3_obj: "Апартаменти, Патерна",
        
        stat_1: "Зданих об'єктів", stat_2: "Років в Іспанії", stat_3: "Майстрів у штаті", stat_4: "Роки гарантії",
        
        video_title: "РУМТУР: ГОТОВИЙ ОБ'ЄКТ У ЦЕНТРІ ВАЛЕНСІЇ", video_desc: "Подивіться наш відео-звіт з нещодавно завершеного об'єкта. Ми показуємо якість фінішного оздоблення, стики матеріалів, роботу інженерних систем.", btn_all_video: "Дивитися всі відео",
        
        tech_title: "МАТЕРІАЛИ ТА РІШЕННЯ",
        tech_1_pre: "Ідеально рівні стіни.", tech_1_title: "Машинна штукатурка", tech_1_desc: "Забуваємо про криві стіни старого фонду. Використовуємо механізоване нанесення та лазерні рівні для створення бездоганної геометрії під фарбування.",
        tech_2_pre: "Фундамент для вашого покриття.", tech_2_title: "Лазерна стяжка підлоги", tech_2_desc: "Жодних перепадів висот. Створюємо ідеально рівну основу, на яку плитка або ламінат лягають без зайвої витрати клею та скрипу.",
        tech_3_pre: "Безпека та надійність.", tech_3_title: "Інженерні мережі 2.0", tech_3_desc: "Повна заміна старої проводки та труб на сучасні системи. Проектуємо щитки із захистом від стрибків напруги та колекторну розводку води.",
        tech_4_pre: "Здоровий мікроклімат.", tech_4_title: "Стоп-пліснява та волога", tech_4_desc: "Спеціалізована гідроізоляція «мокрих» зон та антигрибкова обробка стін. Вирішуємо проблему вологості, типову для клімату Іспанії.",
        tech_5_pre: "Економія на рахунках.", tech_5_title: "Енергозбереження", tech_5_desc: "Встановлення вікон з терморозривом та утеплення контурів. Ваш дім зберігає тепло взимку та прохолоду влітку, знижуючи витрати на кондиціонер.",
        tech_6_pre: "Тиша у квартирі.", tech_6_title: "Шумоізоляція", tech_6_desc: "Використовуємо сучасні мембрани (Copopren, Danosa) для захисту від шуму сусідів та вулиці. Створюємо «акустичний кокон» у спальнях та дитячих.",
        tech_7_pre: "Естетика та практичність.", tech_7_title: "Фінішна малярка", tech_7_desc: "Стіни під фарбування зі склополотном (захист від тріщин). Використовуємо зносостійкі фарби, які не вигорають і легко миються.",
        tech_8_pre: "Сучасний мінімалізм.", tech_8_title: "Приховані системи", tech_8_desc: "Інтегруємо приховані двері (Invisible), тіньові профілі та вбудовані люки. Весь технологічний «шум» захований, залишається тільки чистий дизайн.",
        
        faq_title: "ЧАСТІ ПИТАННЯ",
        faq_1_q: "Скільки коштує квадратний метр ремонту під ключ?", faq_1_a: "Вартість залежить від стану об'єкта. В середньому капітальний ремонт у Валенсії починається від 600€ до 900€ за квадратний метр. Точна цифра фіксується в кошторисі.",
        faq_2_q: "Ви допомагаєте з отриманням ліцензії (Licencia de obra)?", faq_2_a: "Так. Наш архітектор підготує проект для мерії, подасть декларацію для дрібних робіт або отримає повноцінну ліцензію для масштабних змін.",
        faq_3_q: "Чи потрібна моя присутність у Валенсії під час ремонту?", faq_3_a: "Ні, багато наших клієнтів живуть в інших країнах. Ми надаємо щотижневі фото- та відеозвіти, а всі поточні питання вирішуємо дистанційно.",
        faq_4_q: "Чи допомагаєте ви із закупівлею чистових матеріалів?", faq_4_a: "Так, ми можемо супроводити вас у шоуруми наших партнерів у Валенсії, допоможемо з вибором плитки, сантехніки та організуємо доставку.",
        
        nav_blog: "Блог",
        blog_title: "КОРИСНІ СТАТТІ<br>ТА ПОРАДИ", btn_all_articles: "Всі статті",
        blog_tag_1: "Кошторис 2026", blog_1_title: "Скільки коштує ремонт квартири у Валенсії у 2026 році?", blog_1_desc: "Детальний розбір реального кошторису. Розповідаємо про актуальні ціни на роботи, чорнові матеріали та вплив інфляції на ринок нерухомості.",
        blog_tag_2: "Нерухомість", blog_2_title: "Інвестиції у Валенсію: обираємо квартиру під ремонт (Flipping)", blog_2_desc: "Райони, які принесуть максимальний ROI. На що дивитися при купівлі старого фонду, щоб не розоритися на прихованих дефектах.",
        btn_read_more: "Читати повністю",

        footer_desc: "Ремонтно-будівельна компанія у Валенсії. Будуємо ваше майбутнє за власним планом.", footer_menu: "Меню", footer_contacts: "Контакти", footer_rights: "Всі права захищені."
    }
};

// Локализация и FAQ
function setLanguage(lang) {
    document.getElementById('current-lang').innerText = lang.toUpperCase();
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key].replace(/\n/g, '<br>');
        }
    });
    localStorage.setItem('nivellux_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('nivellux_lang') || 'ru';
    setLanguage(savedLang);

    // Мобильное меню
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
        mobileMenuPanel.querySelector('button[data-i18n="btn_consultation"]')?.addEventListener('click', () => setMobileMenuOpen(false));
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) setMobileMenuOpen(false);
        });
    }

    // Логика FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('button');
        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            const icon = item.querySelector('.faq-icon');
            
            faqItems.forEach(i => {
                i.classList.remove('active');
                if (i !== item) {
                    i.classList.replace('bg-brand-dark', 'bg-brand-light');
                    i.classList.replace('text-white', 'text-brand-dark');
                    i.classList.remove('shadow-lg', 'border', 'border-brand-accent/20');
                    const innerIcon = i.querySelector('.faq-icon');
                    if(innerIcon) innerIcon.classList.remove('text-brand-accent');
                }
            });

            if (!isActive) {
                item.classList.add('active');
                item.classList.replace('bg-brand-light', 'bg-brand-dark');
                item.classList.replace('text-brand-dark', 'text-white');
                item.classList.add('shadow-lg', 'border', 'border-brand-accent/20');
                if(icon) icon.classList.add('text-brand-accent');
            } else {
                item.classList.replace('bg-brand-dark', 'bg-brand-light');
                item.classList.replace('text-white', 'text-brand-dark');
                item.classList.remove('shadow-lg', 'border', 'border-brand-accent/20');
                if(icon) icon.classList.remove('text-brand-accent');
            }
        });
    });
});

