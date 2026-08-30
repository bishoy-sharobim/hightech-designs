/* ============================================================
   HighTech AHS — i18n dictionary (AR / EN / FR) + language switcher
   ============================================================ */
window.HTI18N = (function () {
  'use strict';

  var D = {
    /* ---------- nav ---------- */
    'nav.home': { ar: 'الرئيسية', en: 'Home', fr: 'Accueil' },
    'nav.about': { ar: 'عن المعهد', en: 'About', fr: 'À propos' },
    'nav.study': { ar: 'الدراسة بالمعهد', en: 'Study', fr: 'Études' },
    'nav.depts': { ar: 'أقسام المعهد', en: 'Departments', fr: 'Départements' },
    'nav.album': { ar: 'ألبوم الصور', en: 'Gallery', fr: 'Galerie' },
    'nav.jobs': { ar: 'وظائف خالية', en: 'Careers', fr: 'Carrières' },
    'nav.portal': { ar: 'بوابة الطالب', en: 'Student Portal', fr: 'Portail Étudiant' },
    'nav.contact': { ar: 'تواصل معنا', en: 'Contact', fr: 'Contact' },

    'side.brand': { ar: 'البوابة الأكاديمية', en: 'Academic Portal', fr: 'Portail Académique' },
    'side.wa': { ar: '💬 تواصل عبر واتساب', en: '💬 Chat on WhatsApp', fr: '💬 Discuter sur WhatsApp' },
    'side.credit': { ar: 'تصميم: د. هيثم فاروق', en: 'Design: Dr. Haitham Farouk', fr: 'Conception: Dr Haitham Farouk' },
    'side.credit2': { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved', fr: 'Tous droits réservés' },

    /* ---------- topbar ---------- */
    'topbar.semester': { ar: 'الفصل الدراسى 2025/2026', en: 'Semester 2025/2026', fr: 'Semestre 2025/2026' },

    /* ---------- hero ---------- */
    'hero.badge': { ar: 'قبول طلاب جدد — العام الدراسى 2026/2027', en: 'New Admissions — Academic Year 2026/2027', fr: 'Nouvelles admissions — Année 2026/2027' },
    'hero.title1': { ar: 'المعهد التكنولوچى العالى', en: 'The Higher Technological Institute', fr: 'L\'Institut Technologique Supérieur' },
    'hero.title2': { ar: 'للعلوم الصحية التطبيقية', en: 'of Applied Health Sciences', fr: 'des Sciences de la Santé Appliquées' },
    'hero.lead': { ar: 'نحن نؤمن بأن قوتنا في صنع مستقبلك بأيدينا. نظام تعليمي رقمي متكامل: بوابة طالب، جداول دراسية، نتائج فورية — ك٣٦ طريق مصر الإسماعيلية الصحراوى، قرية عساكر، أمام مدينة الشروق.', en: 'We believe our strength is in building your future with our own hands. A fully integrated digital education system: student portal, schedules, instant results — 36 Cairo-Ismailia Desert Road, Asaker Village, in front of Shorouk City.', fr: 'Nous croyons que notre force est de bâtir votre avenir de nos propres mains. Un système éducatif numérique intégré : portail étudiant, emplois du temps, résultats instantanés — 36 Route du Désert du Caire-Ismaïlia, village d\'Asaker, face à la ville de Shorouk.' },
    'hero.cta1': { ar: 'أقسام المعهد', en: 'Departments', fr: 'Départements' },
    'hero.cta2': { ar: 'الدراسة بالمعهد', en: 'Study Programs', fr: 'Programmes d\'Études' },
    'hero.scroll': { ar: 'اكتشف المزيد', en: 'Scroll to explore', fr: 'Défiler pour explorer' },

    /* ---------- stats ---------- */
    'stat.years': { ar: 'سنوات دراسية', en: 'Study Years', fr: 'Années d\'Études' },
    'stat.hours': { ar: 'ساعة معتمدة', en: 'Credit Hours', fr: 'Heures de Crédit' },
    'stat.depts': { ar: 'أقسام علمية', en: 'Academic Departments', fr: 'Départements Académiques' },
    'stat.students': { ar: 'طالب وطالبة', en: 'Students', fr: 'Étudiants' },

    /* ---------- departments ---------- */
    'dept.kicker': { ar: 'برامجنا الأكاديمية', en: 'Our Academic Programs', fr: 'Nos Programmes Académiques' },
    'dept.title': { ar: 'أقسام المعهد', en: 'Institute Departments', fr: 'Départements de l\'Institut' },
    'dept.sub': { ar: 'ثلاثة أقسام علمية متخصصة بنظام الساعات المعتمدة', en: 'Three specialized departments under the credit-hour system', fr: 'Trois départements spécialisés en système de crédits' },
    'dept.years4': { ar: '4 سنوات', en: '4 Years', fr: '4 Ans' },
    'dept.more': { ar: 'المزيد ←', en: 'More →', fr: 'Plus →' },

    'dept.rad': { ar: 'قسم علوم الأشعة', en: 'Radiology Department', fr: 'Département de Radiologie' },
    'dept.rad.r1': { ar: 'التصوير الطبي والأشعة التشخيصية', en: 'Medical Imaging & Diagnostic Radiology', fr: 'Imagerie Médicale & Radiologie Diagnostique' },
    'dept.rad.r1m': { ar: 'إعداد الطلاب في علوم الأشعة والتصوير الطبي', en: 'Preparing students in radiology sciences and medical imaging', fr: 'Préparer les étudiants en sciences radiologiques et imagerie médicale' },
    'dept.rad.r2': { ar: 'القوانين الفيزيائية للإشعاع', en: 'Physics of Radiation', fr: 'Physique des Radiations' },
    'dept.rad.r2m': { ar: 'ملم بالقوانين الفيزيائية ومخاطر الإشعاع', en: 'Well-versed in radiation physics and risks', fr: 'Maîtrise de la physique et des risques des radiations' },
    'dept.rad.r3': { ar: 'الأجهزة التشخيصية والعلاجية', en: 'Diagnostic & Therapeutic Devices', fr: 'Équipements Diagnostiques & Thérapeutiques' },
    'dept.rad.r3m': { ar: 'التعامل مع جميع أجهزة الأشعة المختلفة', en: 'Operating all types of radiology equipment', fr: 'Utilisation de tous les équipements radiologiques' },

    'dept.lab': { ar: 'قسم المختبرات الطبية', en: 'Medical Laboratory Department', fr: 'Département de Laboratoire Médical' },
    'dept.lab.r1': { ar: 'التحاليل الطبية المتقدمة', en: 'Advanced Medical Laboratory Tests', fr: 'Analyses Médicales Avancées' },
    'dept.lab.r1m': { ar: 'التحاليل الطبية بالتقنيات المتطورة', en: 'Medical testing with advanced techniques', fr: 'Analyses médicales avec techniques avancées' },
    'dept.lab.r2': { ar: 'عينات الأنسجة والدم', en: 'Tissue & Blood Samples', fr: 'Échantillons de Tissus & de Sang' },
    'dept.lab.r2m': { ar: 'الإجراءات المعقدة على العينات بدقة وسرعة', en: 'Complex procedures on samples with precision and speed', fr: 'Procédures complexes sur échantillons avec précision et rapidité' },
    'dept.lab.r3': { ar: 'أجهزة التحليل الطبي', en: 'Medical Analysis Devices', fr: 'Appareils d\'Analyse Médicale' },
    'dept.lab.r3m': { ar: 'التعامل مع كافة أجهزة التحليل الطبي', en: 'Operating all medical analysis equipment', fr: 'Utilisation de tous les équipements d\'analyse' },

    'dept.den': { ar: 'قسم تركيبات الأسنان', en: 'Dental Prosthetics Department', fr: 'Département de Prothèse Dentaire' },
    'dept.den.r1': { ar: 'تقنيات التركيبات السنية', en: 'Dental Prosthetics Techniques', fr: 'Techniques de Prothèse Dentaire' },
    'dept.den.r1m': { ar: 'إعداد الطلاب في تقنيات تركيبات الأسنان', en: 'Preparing students in dental prosthetics techniques', fr: 'Préparer les étudiants en techniques de prothèse dentaire' },
    'dept.den.r2': { ar: 'التصنيع النهائي للتركيبات', en: 'Final Fabrication of Prosthetics', fr: 'Fabrication Finale des Prothèses' },
    'dept.den.r2m': { ar: 'من تحضير المواد حتى التصنيع النهائي', en: 'From material preparation to final fabrication', fr: 'De la préparation des matériaux à la fabrication finale' },
    'dept.den.r3': { ar: 'السلامة المهنية والبحث العلمي', en: 'Occupational Safety & Research', fr: 'Sécurité au Travail & Recherche' },
    'dept.den.r3m': { ar: 'مراعاة السلامة المهنية ودعم البحث العلمي', en: 'Ensuring occupational safety and supporting research', fr: 'Assurer la sécurité et soutenir la recherche' },

    /* ---------- about ---------- */
    'about.kicker': { ar: 'عن المعهد', en: 'About the Institute', fr: 'À propos de l\'Institut' },
    'about.title1': { ar: 'مرحبا بكم فى', en: 'Welcome to', fr: 'Bienvenue à' },
    'about.title2': { ar: 'المعهد التكنولوچى العالى', en: 'the Higher Technological Institute', fr: 'l\'Institut Technologique Supérieur' },
    'about.p': { ar: 'معهد متخصص لإعداد كوادر فنية وتقنية مؤهلة في مجالات العلوم الصحية التطبيقية وفق أحدث المعايير العالمية، بمناهج نظرية وعملية حديثة وأجهزة وتقنيات متطورة.', en: 'A specialized institute preparing qualified technical and professional cadres in applied health sciences according to the latest international standards, with modern theoretical and practical curricula and advanced equipment.', fr: 'Un institut spécialisé formant des cadres techniques et professionnels qualifiés dans les sciences de la santé appliquées selon les dernières normes internationales, avec des programmes théoriques et pratiques modernes et un équipement avancé.' },
    'about.c1': { ar: 'نظام الساعات المعتمدة الحديث', en: 'Modern credit-hour system', fr: 'Système moderne de crédits' },
    'about.c2': { ar: 'أربع سنوات دراسية للحصول على درجة البكالوريوس', en: 'Four years to earn the bachelor\'s degree', fr: 'Quatre ans pour obtenir la licence' },
    'about.c3': { ar: 'التدريس باللغة الإنجليزية والعربية', en: 'Teaching in English and Arabic', fr: 'Enseignement en anglais et en arabe' },
    'about.c4': { ar: 'بوابة طالب رقمية للجدول والنتيجة والسجل الأكاديمي', en: 'Digital student portal for schedules, results and transcripts', fr: 'Portail étudiant numérique pour emplois du temps, résultats et relevés' },
    'about.cta': { ar: 'المزيد >> أقسام المعهد', en: 'More >> Institute Departments', fr: 'Plus >> Départements de l\'Institut' },

    /* ---------- objectives ---------- */
    'obj.kicker': { ar: 'رؤيتنا وأهدافنا', en: 'Vision & Objectives', fr: 'Vision & Objectifs' },
    'obj.title': { ar: 'أهداف المعهد والدرجة العلمية', en: 'Institute Objectives & Degree', fr: 'Objectifs de l\'Institut & Diplôme' },
    'obj.gen': { ar: 'الأهداف العامة', en: 'General Objectives', fr: 'Objectifs Généraux' },
    'obj.spec': { ar: 'الأهداف الخاصة', en: 'Specific Objectives', fr: 'Objectifs Spécifiques' },
    'obj.degree': { ar: 'الدرجة العلمية', en: 'Academic Degree', fr: 'Diplôme Académique' },
    'obj.goal': { ar: 'الهدف', en: 'Objective', fr: 'Objectif' },
    'obj.info': { ar: 'المعلومة', en: 'Information', fr: 'Information' },
    'obj.gen1': { ar: 'تكوين طبقة من المتخصصين في العلوم الصحية التطبيقية المعاونة القادرين على التعامل مع أدوات التكنولوجيا الحديثة بكفاءة عالية أو صيانتها أو تطويرها.', en: 'Building a layer of allied applied health sciences specialists capable of using, maintaining and developing modern technology tools efficiently.', fr: 'Former une couche de spécialistes des sciences de la santé appliquées capables d\'utiliser, d\'entretenir et de développer efficacement les outils technologiques modernes.' },
    'obj.gen2': { ar: 'إعادة تأهيل خريجي الكليات وبعض المعاهد طبقاً لحاجة سوق العمل في مجالات العلوم الصحية الحديثة.', en: 'Rehabilitating graduates of faculties and institutes according to labor market needs in modern health sciences.', fr: 'Réhabiliter les diplômés des facultés et instituts selon les besoins du marché du travail en sciences de la santé modernes.' },
    'obj.gen3': { ar: 'توفير فرص التعليم المستمر للمتخصصين الفنيين والتقنيين والإداريين طبقاً لحاجة سوق العمل.', en: 'Providing continuous education opportunities for technical, technological and administrative specialists per market needs.', fr: 'Offrir des opportunités de formation continue aux spécialistes techniques, technologiques et administratifs selon les besoins du marché.' },
    'obj.gen4': { ar: 'القيام بالدراسة الميدانية لخدمة البيئة والمجتمع في المجالات الصحية المتعلقة بصحة الإنسان.', en: 'Conducting field studies to serve the environment and society in health fields related to human health.', fr: 'Mener des études de terrain au service de l\'environnement et de la société dans les domaines liés à la santé humaine.' },
    'obj.spec1': { ar: 'أن يشارك بجدارة في التنافس التقني والفني المتطلب في القطاع الصحي الطبي الحكومي.', en: 'Participate competently in the technical competition required in the governmental medical health sector.', fr: 'Participer avec compétence à la concurrence technique exigée dans le secteur de la santé publique.' },
    'obj.spec2': { ar: 'أن يساهم بفاعلية واحتراف في دعم مخطط الدولة في قانون التأمين الصحي الجديد.', en: 'Contribute effectively to supporting the state\'s new health insurance scheme.', fr: 'Contribuer efficacement au soutien du nouveau régime d\'assurance maladie de l\'État.' },
    'obj.spec3': { ar: 'أن يتواصل عملياً مع القضايا المعاصرة ويتعامل بكفاءة مع الأجهزة الحديثة.', en: 'Engage with contemporary issues and operate modern devices efficiently.', fr: 'S\'engager dans les questions contemporaines et utiliser efficacement les appareils modernes.' },
    'obj.spec4': { ar: 'تأهيل وتدريب الكوادر الصحية ورفع كفاءاتها العلمية والعملية.', en: 'Qualify and train health cadres and raise their scientific and practical competence.', fr: 'Qualifier et former les cadres de santé et renforcer leurs compétences scientifiques et pratiques.' },
    'obj.spec5': { ar: 'تلبية احتياجات المجتمع والخدمات الصحية بالكوادر الفنية المؤهلة.', en: 'Meeting society\'s health service needs with qualified technical cadres.', fr: 'Répondre aux besoins de la société en services de santé avec des cadres techniques qualifiés.' },
    'obj.spec6': { ar: 'المساهمة في تخفيف الأعباء على الدولة من تكاليف تأهيل وتدريب الكوادر الصحية.', en: 'Contributing to easing the state\'s burden of health cadre training costs.', fr: 'Contribuer à alléger la charge de l\'État en coûts de formation des cadres de santé.' },
    'obj.deg1': { ar: 'شروط القبول: الثانوية العامة علمي (علوم) وما يعادلها، الثانوية الأزهرية علمي، دبلوم المعاهد الفنية الصحية بتقدير عام جيد.', en: 'Admission: General Secondary (Science), Al-Azhar Secondary (Science), or Higher Health Technical Institute Diploma with a good overall grade.', fr: 'Admission : Baccalauréat scientifique, Baccalauréat Al-Azhar scientifique, ou Diplôme des instituts techniques de santé avec une bonne moyenne.' },
    'obj.deg2': { ar: 'النظام: الدراسة بنظام الساعات المعتمدة وليس السنوات الدراسية.', en: 'System: Credit-hour system, not academic years.', fr: 'Système : système de crédits, pas d\'années académiques.' },
    'obj.deg3': { ar: 'الفصول: الأول والثاني (16 أسبوعاً) والفصل الصيفي الاختياري (8 أسابيع بساعات مضاعفة).', en: 'Semesters: 1st & 2nd (16 weeks) plus optional summer (8 weeks, double hours).', fr: 'Semestres : 1er et 2e (16 semaines) plus été facultatif (8 semaines, heures doublées).' },
    'obj.deg4': { ar: 'المدة: أربع سنوات (128 ساعة) للحصول على بكالوريوس "أخصائي تكنولوجي العلوم الصحية التطبيقية".', en: 'Duration: four years (128 hours) for a Bachelor of Applied Health Sciences Technology.', fr: 'Durée : quatre ans (128 heures) pour une Licence en Technologie des Sciences de la Santé Appliquées.' },
    'obj.deg5': { ar: 'اللغة: التدريس باللغة الإنجليزية والعربية والامتحان بنفس لغة التدريس.', en: 'Language: taught in English and Arabic; exams in the same language.', fr: 'Langue : enseignement en anglais et en arabe ; examens dans la même langue.' },

    /* ---------- results ---------- */
    'results.title': { ar: 'نتيجة العام الدراسى 2025/2026', en: 'Academic Year 2025/2026 Results', fr: 'Résultats de l\'Année 2025/2026' },
    'results.p': { ar: 'ظهرت نتيجة العام الدراسى الأول — اتبع الرابط التالي مع تمنياتنا بالتوفيق الدائم لطلابنا.', en: 'The first-year results are out — follow the link below. Wishing our students continued success.', fr: 'Les résultats de la première année sont publiés — suivez le lien ci-dessous. Bonne réussite à nos étudiants.' },
    'results.cta': { ar: 'عرض النتيجة ←', en: 'View Results →', fr: 'Voir les Résultats →' },

    /* ---------- contact ---------- */
    'contact.title': { ar: 'تواصل معنا', en: 'Contact Us', fr: 'Contactez-nous' },
    'contact.p': { ar: 'ك٣٦ طريق مصر الإسماعيلية الصحراوى – قرية عساكر – أمام مدينة الشروق – القاهرة', en: '36 Cairo-Ismailia Desert Road – Asaker Village – in front of Shorouk City – Cairo', fr: '36 Route du Désert du Caire-Ismaïlia – Village d\'Asaker – face à la ville de Shorouk – Le Caire' },
    'contact.page': { ar: 'صفحة التواصل', en: 'Contact Page', fr: 'Page de Contact' },

    /* ---------- footer ---------- */
    'foot.quick': { ar: 'روابط سريعة', en: 'Quick Links', fr: 'Liens Rapides' },
    'foot.depts': { ar: 'أقسام المعهد', en: 'Departments', fr: 'Départements' },
    'foot.contact': { ar: 'تواصل معنا', en: 'Contact', fr: 'Contact' },
    'foot.rights': { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved', fr: 'Tous droits réservés' },

    /* ---------- language switcher ---------- */
    'lang.ar': { ar: 'العربية', en: 'Arabic', fr: 'Arabe' },
    'lang.en': { ar: 'English', en: 'English', fr: 'Anglais' },
    'lang.fr': { ar: 'Français', en: 'French', fr: 'Français' },

    /* ---------- institute name / docs ---------- */
    'inst.name': { ar: 'المعهد التكنولوچى العالى للعلوم الصحية التطبيقية', en: 'Higher Technological Institute of Applied Health Sciences', fr: 'Institut Technologique Supérieur des Sciences de la Santé Appliquées' },
    'inst.name2': { ar: 'المعهد التكنولوچى العالى<br>للعلوم الصحية التطبيقية', en: 'Higher Technological<br>Institute of Applied Health Sciences', fr: 'Institut Technologique Supérieur<br>des Sciences de la Santé Appliquées' },
    'side.logoAlt': { ar: 'شعار المعهد', en: 'Institute Logo', fr: 'Logo de l\'Institut' },
    'home.doc': { ar: 'المعهد التكنولوچى العالى للعلوم الصحية التطبيقية | البوابة الأكاديمية', en: 'Higher Technological Institute of Applied Health Sciences | Academic Portal', fr: 'Institut Technologique Supérieur des Sciences de la Santé Appliquées | Portail Académique' },

    /* ---------- hero floating chips ---------- */
    'hero.chip.portal': { ar: 'بوابة طالب رقمية', en: 'Digital Student Portal', fr: 'Portail Étudiant Numérique' },
    'hero.chip.results': { ar: 'نتائج فورية', en: 'Instant Results', fr: 'Résultats Instantanés' },
    'hero.chip.schedule': { ar: 'جداول دراسية', en: 'Class Schedules', fr: 'Emplois du Temps' },

    /* ---------- misc ---------- */
    'misc.creditHours': { ar: 'ساعة معتمدة', en: 'Credit Hours', fr: 'Heures de Crédit' },
    'misc.openMaps': { ar: 'فتح في خرائط جوجل ←', en: 'Open in Google Maps →', fr: 'Ouvrir dans Google Maps →' },
    'misc.scanMap': { ar: 'امسح الكود لمعرفة الموقع على الخريطة', en: 'Scan the code to see the location on the map', fr: 'Scannez le code pour voir le lieu sur la carte' }
  };

  /* Merge content-page dictionary (HTI18N_CONTENT) if loaded */
  if (typeof window.HTI18N_CONTENT === 'object' && window.HTI18N_CONTENT) {
    var _k;
    for (_k in window.HTI18N_CONTENT) {
      if (Object.prototype.hasOwnProperty.call(window.HTI18N_CONTENT, _k) && !D[_k]) {
        D[_k] = window.HTI18N_CONTENT[_k];
      }
    }
  }

  var LANG_KEY = 'ht_lang';

  function current() {
    return localStorage.getItem(LANG_KEY) || 'ar';
  }

  function t(key, lang) {
    lang = lang || current();
    var entry = D[key];
    if (!entry) return key;
    return entry[lang] !== undefined ? entry[lang] : entry.ar;
  }

  function applyLang(lang) {
    if (['ar', 'en', 'fr'].indexOf(lang) < 0) lang = 'ar';
    localStorage.setItem(LANG_KEY, lang);

    var dir = lang === 'ar' ? 'rtl' : 'ltr';
    var html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', dir);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n'), lang);
      el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'), lang));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title'), lang));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt'), lang));
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    var docTitle = document.querySelector('meta[name="i18n-title"]');
    if (docTitle && docTitle.getAttribute('content')) {
      document.title = t(docTitle.getAttribute('content'), lang);
    }

    document.dispatchEvent(new CustomEvent('htlangchange', { detail: lang }));
  }

  function init() {
    applyLang(current());
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { t: t, current: current, applyLang: applyLang, dict: D };
})();