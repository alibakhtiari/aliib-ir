// Project data with translations for all languages
const projects = [
  {
    id: "ecommerce-website",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    client: "FashionHub",
    year: "2023",
    link: "https://example.com/fashionhub",
    translations: {
      en: {
        title: "E-commerce Website",
        description: "A fully responsive e-commerce platform with advanced filtering and payment integration.",
        challenge:
          "The client needed a modern e-commerce platform that could handle a large inventory of products with complex filtering options. They also required seamless payment processing and inventory management.",
        solution:
          "I developed a custom e-commerce solution using Next.js for the frontend and a headless CMS for content management. The site features advanced filtering options, a responsive design that works on all devices, and integration with Stripe for secure payment processing.",
        results:
          "The new website increased online sales by 45% in the first three months. The improved user experience led to a 30% reduction in cart abandonment rates and a 25% increase in average order value.",
      },
      fa: {
        title: "وب‌سایت تجارت الکترونیک",
        description: "یک پلتفرم تجارت الکترونیک کاملاً واکنش‌گرا با فیلترینگ پیشرفته و یکپارچه‌سازی پرداخت.",
        challenge:
          "مشتری به یک پلتفرم تجارت الکترونیک مدرن نیاز داشت که بتواند موجودی بزرگی از محصولات را با گزینه‌های فیلتر پیچیده مدیریت کند. آنها همچنین به پردازش پرداخت بدون مشکل و مدیریت موجودی نیاز داشتند.",
        solution:
          "من یک راه‌حل تجارت الکترونیک سفارشی با استفاده از Next.js برای فرانت‌اند و یک CMS بدون سر برای مدیریت محتوا توسعه دادم. این سایت دارای گزینه‌های فیلتر پیشرفته، طراحی واکنش‌گرا که در تمام دستگاه‌ها کار می‌کند و یکپارچه‌سازی با Stripe برای پردازش پرداخت امن است.",
        results:
          "وب‌سایت جدید فروش آنلاین را در سه ماه اول ۴۵٪ افزایش داد. تجربه کاربری بهبود یافته منجر به کاهش ۳۰٪ در نرخ رها کردن سبد خرید و افزایش ۲۵٪ در ارزش متوسط سفارش شد.",
      },
      ar: {
        title: "موقع تجارة إلكترونية",
        description: "منصة تجارة إلكترونية متجاوبة بالكامل مع تصفية متقدمة وتكامل الدفع.",
        challenge:
          "احتاج العميل إلى منصة تجارة إلكترونية حديثة يمكنها التعامل مع مخزون كبير من المنتجات مع خيارات تصفية معقدة. كما تطلبوا معالجة سلسة للدفع وإدارة المخزون.",
        solution:
          "قمت بتطوير حل تجارة إلكترونية مخصص باستخدام Next.js للواجهة الأمامية ونظام إدارة محتوى بدون رأس لإدارة المحتوى. يتميز الموقع بخيارات تصفية متقدمة، وتصميم متجاوب يعمل على جميع الأجهزة، وتكامل مع Stripe لمعالجة الدفع الآمن.",
        results:
          "زاد الموقع الجديد المبيعات عبر الإنترنت بنسبة ٤٥٪ في الأشهر الثلاثة الأولى. أدت تجربة المستخدم المحسنة إلى انخفاض بنسبة ٣٠٪ في معدلات التخلي عن سلة التسوق وزيادة بنسبة ٢٥٪ في متوسط قيمة الطلب.",
      },
    },
  },
  {
    id: "seo-optimization-campaign",
    category: "seo",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    technologies: ["SEO", "Google Analytics", "Content Strategy", "Keyword Research", "Backlink Building"],
    client: "TechGrowth",
    year: "2022",
    link: "https://example.com/techgrowth",
    translations: {
      en: {
        title: "SEO Optimization Campaign",
        description: "Increased organic traffic by 200% through comprehensive SEO strategy.",
        challenge:
          "The client's website was not ranking well in search results, resulting in low organic traffic and poor conversion rates. They needed a comprehensive SEO strategy to improve their online visibility.",
        solution:
          "I conducted a thorough SEO audit to identify issues and opportunities. Based on the findings, I implemented on-page optimizations, created a content strategy focused on targeted keywords, improved site structure and technical SEO, and built high-quality backlinks.",
        results:
          "The SEO campaign resulted in a 200% increase in organic traffic within six months. The client's website now ranks on the first page for over 50 high-value keywords, and their conversion rate from organic traffic has increased by 75%.",
      },
      fa: {
        title: "کمپین بهینه‌سازی سئو",
        description: "افزایش ۲۰۰٪ ترافیک ارگانیک از طریق استراتژی جامع سئو.",
        challenge:
          "وب‌سایت مشتری در نتایج جستجو رتبه خوبی نداشت، که منجر به ترافیک ارگانیک کم و نرخ تبدیل ضعیف می‌شد. آنها به یک استراتژی جامع سئو برای بهبود دید آنلاین خود نیاز داشتند.",
        solution:
          "من یک ممیزی کامل سئو انجام دادم تا مشکلات و فرصت‌ها را شناسایی کنم. بر اساس یافته‌ها، بهینه‌سازی‌های درون صفحه‌ای را پیاده‌سازی کردم، یک استراتژی محتوا متمرکز بر کلمات کلیدی هدف ایجاد کردم، ساختار سایت و سئو فنی را بهبود بخشیدم و بک‌لینک‌های با کیفیت بالا ایجاد کردم.",
        results:
          "کمپین سئو منجر به افزایش ۲۰۰٪ در ترافیک ارگانیک در طی شش ماه شد. وب‌سایت مشتری اکنون برای بیش از ۵۰ کلمه کلیدی با ارزش بالا در صفحه اول رتبه‌بندی می‌شود و نرخ تبدیل آنها از ترافیک ارگانیک ۷۵٪ افزایش یافته است.",
      },
      ar: {
        title: "حملة تحسين محركات البحث",
        description: "زيادة حركة المرور العضوية بنسبة ٢٠٠٪ من خلال استراتيجية شاملة لتحسين محركات البحث.",
        challenge:
          "لم يكن موقع العميل يحتل مرتبة جيدة في نتائج البحث، مما أدى إلى انخفاض حركة المرور العضوية ومعدلات تحويل ضعيفة. كانوا بحاجة إلى استراتيجية شاملة لتحسين محركات البحث لتحسين ظهورهم عبر الإنترنت.",
        solution:
          "أجريت تدقيقًا شاملاً لتحسين محركات البحث لتحديد المشكلات والفرص. بناءً على النتائج، قمت بتنفيذ تحسينات على الصفحة، وإنشاء استراتيجية محتوى تركز على الكلمات الرئيسية المستهدفة، وتحسين بنية الموقع وتحسين محركات البحث التقنية، وبناء روابط خلفية عالية الجودة.",
        results:
          "أدت حملة تحسين محركات البحث إلى زيادة بنسبة ٢٠٠٪ في حركة المرور العضوية خلال ستة أشهر. يحتل موقع العميل الآن المرتبة الأولى لأكثر من ٥٠ كلمة رئيسية عالية القيمة، وزاد معدل التحويل من حركة المرور العضوية بنسبة ٧٥٪.",
      },
    },
  },
  {
    id: "corporate-blog",
    category: "content",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    technologies: ["Content Strategy", "WordPress", "SEO Writing", "Editorial Calendar", "Analytics"],
    client: "InnovateX",
    year: "2022",
    link: "https://example.com/innovatex-blog",
    translations: {
      en: {
        title: "Corporate Blog",
        description: "Created engaging content strategy that boosted user engagement and conversions.",
        challenge:
          "The client needed to establish thought leadership in their industry and drive more qualified leads to their business. Their existing blog had low engagement and wasn't contributing to their business goals.",
        solution:
          "I developed a comprehensive content strategy aligned with their business objectives. This included creating an editorial calendar, researching industry topics, writing SEO-optimized articles, and implementing a content distribution plan across various channels.",
        results:
          "The revamped blog saw a 150% increase in traffic within four months. Average time on page increased by 2 minutes, and the blog now generates 35% of all new leads for the business. The client has established themselves as a thought leader in their industry.",
      },
      fa: {
        title: "وبلاگ شرکتی",
        description: "ایجاد استراتژی محتوای جذاب که تعامل کاربر و تبدیل را افزایش داد.",
        challenge:
          "مشتری نیاز داشت تا رهبری فکری در صنعت خود ایجاد کند و سرنخ‌های واجد شرایط بیشتری را به کسب‌وکار خود هدایت کند. وبلاگ موجود آنها تعامل کمی داشت و به اهداف کسب‌وکار آنها کمک نمی‌کرد.",
        solution:
          "من یک استراتژی محتوای جامع همسو با اهداف کسب‌وکار آنها توسعه دادم. این شامل ایجاد یک تقویم تحریریه، تحقیق در مورد موضوعات صنعت، نوشتن مقالات بهینه‌سازی شده برای سئو و پیاده‌سازی یک برنامه توزیع محتوا در کانال‌های مختلف بود.",
        results:
          "وبلاگ بازسازی شده در طی چهار ماه افزایش ۱۵۰٪ در ترافیک را تجربه کرد. زمان متوسط در صفحه ۲ دقیقه افزایش یافت و وبلاگ اکنون ۳۵٪ از تمام سرنخ‌های جدید برای کسب‌وکار را تولید می‌کند. مشتری خود را به عنوان یک رهبر فکری در صنعت خود تثبیت کرده است.",
      },
      ar: {
        title: "مدونة الشركة",
        description: "إنشاء استراتيجية محتوى جذابة عززت مشاركة المستخدم والتحويلات.",
        challenge:
          "احتاج العميل إلى تأسيس قيادة فكرية في صناعتهم وجذب المزيد من العملاء المحتملين المؤهلين لأعمالهم. كانت مدونتهم الحالية ذات مشاركة منخفضة ولم تكن تساهم في أهداف أعمالهم.",
        solution:
          "قمت بتطوير استراتيجية محتوى شاملة متوافقة مع أهداف أعمالهم. تضمن ذلك إنشاء تقويم تحريري، وبحث مواضيع الصناعة، وكتابة مقالات محسنة لمحركات البحث، وتنفيذ خطة توزيع المحتوى عبر قنوات مختلفة.",
        results:
          "شهدت المدونة المجددة زيادة بنسبة ١٥٠٪ في حركة المرور خلال أربعة أشهر. زاد متوسط الوقت على الصفحة بمقدار دقيقتين، والمدونة الآن تولد ٣٥٪ من جميع العملاء المحتملين الجدد للأعمال. أسس العميل نفسه كقائد فكري في صناعتهم.",
      },
    },
  },
  {
    id: "portfolio-website",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Next.js", "Responsive Design"],
    client: "Creative Studio",
    year: "2023",
    link: "https://example.com/creative-studio",
    translations: {
      en: {
        title: "Portfolio Website",
        description: "Modern portfolio website with animations and responsive design.",
        challenge:
          "The client, a creative design studio, needed a portfolio website that would showcase their work in a visually stunning way. The site needed to reflect their creative capabilities while being easy to navigate and update.",
        solution:
          "I designed and developed a modern portfolio website using Next.js and Framer Motion for smooth animations. The site features a minimalist design with a focus on showcasing the client's work through large images and interactive elements. The responsive design ensures a seamless experience across all devices.",
        results:
          "The new portfolio website has received positive feedback from clients and has helped the studio secure several new projects. The site's performance metrics are excellent, with fast load times and a high user engagement rate.",
      },
      fa: {
        title: "وب‌سایت نمونه کار",
        description: "وب‌سایت نمونه کار مدرن با انیمیشن‌ها و طراحی واکنش‌گرا.",
        challenge:
          "مشتری، یک استودیوی طراحی خلاق، به یک وب‌سایت نمونه کار نیاز داشت که کار آنها را به شکلی بصری خیره‌کننده نمایش دهد. سایت باید قابلیت‌های خلاقانه آنها را منعکس می‌کرد در حالی که ناوبری و به‌روزرسانی آن آسان باشد.",
        solution:
          "من یک وب‌سایت نمونه کار مدرن با استفاده از Next.js و Framer Motion برای انیمیشن‌های روان طراحی و توسعه دادم. این سایت دارای طراحی مینیمالیستی با تمرکز بر نمایش کار مشتری از طریق تصاویر بزرگ و عناصر تعاملی است. طراحی واکنش‌گرا تجربه‌ای بی‌نقص در تمام دستگاه‌ها را تضمین می‌کند.",
        results:
          "وب‌سایت نمونه کار جدید بازخورد مثبتی از مشتریان دریافت کرده و به استودیو کمک کرده است تا چندین پروژه جدید را تأمین کند. معیارهای عملکرد سایت عالی است، با زمان‌های بارگذاری سریع و نرخ تعامل کاربر بالا.",
      },
      ar: {
        title: "موقع معرض الأعمال",
        description: "موقع معرض أعمال حديث مع رسوم متحركة وتصميم متجاوب.",
        challenge:
          "احتاج العميل، وهو استوديو تصميم إبداعي، إلى موقع ويب لمعرض الأعمال يعرض عملهم بطريقة مذهلة بصريًا. كان يجب أن يعكس الموقع قدراتهم الإبداعية مع سهولة التنقل والتحديث.",
        solution:
          "قمت بتصميم وتطوير موقع ويب حديث لمعرض الأعمال باستخدام Next.js و Framer Motion للرسوم المتحركة السلسة. يتميز الموقع بتصميم بسيط مع التركيز على عرض عمل العميل من خلال صور كبيرة وعناصر تفاعلية. يضمن التصميم المتجاوب تجربة سلسة عبر جميع الأجهزة.",
        results:
          "تلقى موقع معرض الأعمال الجديد ردود فعل إيجابية من العملاء وساعد الاستوديو على تأمين العديد من المشاريع الجديدة. مقاييس أداء الموقع ممتازة، مع أوقات تحميل سريعة ومعدل مشاركة مستخدم مرتفع.",
      },
    },
  },
  {
    id: "local-business-seo",
    category: "seo",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    technologies: ["Local SEO", "Google My Business", "Citation Building", "Review Management", "Local Content"],
    client: "Urban Cafe",
    year: "2022",
    link: "https://example.com/urban-cafe",
    translations: {
      en: {
        title: "Local Business SEO",
        description: "Improved local search rankings for a small business, increasing foot traffic.",
        challenge:
          "A local cafe was struggling to attract new customers despite being in a high-traffic area. They had minimal online presence and weren't appearing in local search results, which was affecting their business growth.",
        solution:
          "I implemented a comprehensive local SEO strategy that included optimizing their Google My Business listing, building local citations, creating location-specific content, and implementing a review management system to encourage satisfied customers to leave positive reviews.",
        results:
          "Within three months, the cafe appeared in the top 3 results for key local search terms. Their Google My Business profile views increased by 250%, and they saw a 40% increase in foot traffic directly attributed to online searches. Monthly revenue increased by 35%.",
      },
      fa: {
        title: "سئو کسب‌وکار محلی",
        description: "بهبود رتبه‌بندی جستجوی محلی برای یک کسب‌وکار کوچک، افزایش ترافیک فیزیکی.",
        challenge:
          "یک کافه محلی علی‌رغم قرار داشتن در منطقه‌ای پر رفت‌وآمد، برای جذب مشتریان جدید تلاش می‌کرد. آنها حضور آنلاین حداقلی داشتند و در نتایج جستجوی محلی ظاهر نمی‌شدند، که بر رشد کسب‌وکار آنها تأثیر می‌گذاشت.",
        solution:
          "من یک استراتژی جامع سئو محلی را پیاده‌سازی کردم که شامل بهینه‌سازی لیست Google My Business آنها، ایجاد استنادهای محلی، ایجاد محتوای مختص مکان و پیاده‌سازی یک سیستم مدیریت نظرات برای تشویق مشتریان راضی به گذاشتن نظرات مثبت بود.",
        results:
          "در عرض سه ماه، کافه در سه نتیجه برتر برای عبارات جستجوی محلی کلیدی ظاهر شد. بازدیدهای پروفایل Google My Business آنها ۲۵۰٪ افزایش یافت و آنها افزایش ۴۰٪ در ترافیک فیزیکی را دیدند که مستقیماً به جستجوهای آنلاین نسبت داده می‌شد. درآمد ماهانه ۳۵٪ افزایش یافت.",
      },
      ar: {
        title: "تحسين محركات البحث المحلية",
        description: "تحسين تصنيفات البحث المحلية لشركة صغيرة، مما أدى إلى زيادة حركة المرور الفعلية.",
        challenge:
          "كان مقهى محلي يكافح لجذب عملاء جدد على الرغم من وجوده في منطقة ذات حركة مرور عالية. كان لديهم وجود ضئيل على الإنترنت ولم يظهروا في نتائج البحث المحلية، مما كان يؤثر على نمو أعمالهم.",
        solution:
          "قمت بتنفيذ استراتيجية شاملة لتحسين محركات البحث المحلية تضمنت تحسين قائمة Google My Business الخاصة بهم، وبناء استشهادات محلية، وإنشاء محتوى خاص بالموقع، وتنفيذ نظام إدارة المراجعات لتشجيع العملاء الراضين على ترك تعليقات إيجابية.",
        results:
          "في غضون ثلاثة أشهر، ظهر المقهى في أفضل ٣ نتائج لمصطلحات البحث المحلية الرئيسية. زادت مشاهدات ملف Google My Business الخاص بهم بنسبة ٢٥٠٪، وشهدوا زيادة بنسبة ٤٠٪ في حركة المرور الفعلية المنسوبة مباشرة إلى عمليات البحث عبر الإنترنت. زادت الإيرادات الشهرية بنسبة ٣٥٪.",
      },
    },
  },
  {
    id: "product-descriptions",
    category: "content",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    technologies: ["Copywriting", "SEO", "Product Marketing", "Conversion Optimization", "Brand Voice"],
    client: "EcoLiving",
    year: "2023",
    link: "https://example.com/ecoliving",
    translations: {
      en: {
        title: "Product Descriptions",
        description: "Crafted compelling product descriptions that increased conversion rates.",
        challenge:
          "An eco-friendly home goods company was struggling with low conversion rates on their product pages. Their existing product descriptions were technical and failed to connect with customers emotionally or highlight the unique benefits of their products.",
        solution:
          "I rewrote over 100 product descriptions, focusing on creating a consistent brand voice that highlighted both the emotional and practical benefits of each product. Each description was SEO-optimized and crafted to address customer pain points while emphasizing the eco-friendly aspects of the products.",
        results:
          "The new product descriptions led to a 65% increase in conversion rates across the website. Average order value increased by 28%, and the time spent on product pages doubled, indicating higher engagement with the content.",
      },
      fa: {
        title: "توضیحات محصول",
        description: "نوشتن توضیحات محصول جذاب که نرخ تبدیل را افزایش داد.",
        challenge:
          "یک شرکت کالاهای خانگی سازگار با محیط زیست با نرخ‌های تبدیل پایین در صفحات محصول خود مواجه بود. توضیحات محصول موجود آنها فنی بودند و نتوانستند از نظر احساسی با مشتریان ارتباط برقرار کنند یا مزایای منحصر به فرد محصولات خود را برجسته کنند.",
        solution:
          "من بیش از ۱۰۰ توضیح محصول را بازنویسی کردم، با تمرکز بر ایجاد یک صدای برند سازگار که هم مزایای احساسی و هم عملی هر محصول را برجسته می‌کرد. هر توضیح برای سئو بهینه‌سازی شده بود و برای پرداختن به نقاط درد مشتری طراحی شده بود در حالی که جنبه‌های سازگار با محیط زیست محصولات را تأکید می‌کرد.",
        results:
          "توضیحات جدید محصول منجر به افزایش ۶۵٪ در نرخ‌های تبدیل در سراسر وب‌سایت شد. ارزش متوسط سفارش ۲۸٪ افزایش یافت و زمان صرف شده در صفحات محصول دو برابر شد، که نشان‌دهنده تعامل بالاتر با محتوا است.",
      },
      ar: {
        title: "أوصاف المنتجات",
        description: "صياغة أوصاف منتجات مقنعة أدت إلى زيادة معدلات التحويل.",
        challenge:
          "كانت شركة للسلع المنزلية الصديقة للبيئة تعاني من انخفاض معدلات التحويل على صفحات منتجاتها. كانت أوصاف المنتجات الحالية تقنية وفشلت في التواصل مع العملاء عاطفياً أو إبراز الفوائد الفريدة لمنتجاتهم.",
        solution:
          "قمت بإعادة كتابة أكثر من ١٠٠ وصف للمنتجات، مع التركيز على إنشاء صوت علامة تجارية متسق يسلط الضوء على الفوائد العاطفية والعملية لكل منتج. تم تحسين كل وصف لمحركات البحث وتمت صياغته لمعالجة نقاط الألم لدى العملاء مع التأكيد على الجوانب الصديقة للبيئة للمنتجات.",
        results:
          "أدت أوصاف المنتجات الجديدة إلى زيادة بنسبة ٦٥٪ في معدلات التحويل عبر الموقع. زاد متوسط قيمة الطلب بنسبة ٢٨٪، وتضاعف الوقت المستغرق على صفحات المنتجات، مما يشير إلى ارتفاع التفاعل مع المحتوى.",
      },
    },
  },
]

export default projects
