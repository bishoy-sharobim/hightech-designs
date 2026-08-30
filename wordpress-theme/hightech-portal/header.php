<?php
/**
 * Shared shell: sidenav + drawer + topbar. Opened by every page template.
 *
 * @package hightech-portal
 */
$uri     = get_template_directory_uri();
$img     = $uri . '/assets/img';
$portal  = 'https://htiahs.pythonanywhere.com';
$wa_link = 'https://wa.me/201110229695';
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> dir="rtl" data-page="">
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<aside class="sidenav">
	<div class="side-brand">
		<img src="<?php echo $img; ?>/logo-portal.jpg" alt="شعار المعهد" data-i18n-alt="side.logoAlt">
		<div>
			<b data-i18n="inst.name2">المعهد التكنولوچى العالى<br>للعلوم الصحية التطبيقية</b>
			<small data-i18n="side.brand">البوابة الأكاديمية</small>
		</div>
	</div>
	<nav class="side-links">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" <?php if ( is_front_page() ) echo 'class="active"'; ?>><span class="ic">🏠</span> <span data-i18n="nav.home">الرئيسية</span><span class="num">01</span></a>
		<a href="<?php echo esc_url( home_url( '/about/' ) ); ?>" <?php if ( is_page( 'about' ) ) echo 'class="active"'; ?>><span class="ic">🏛️</span> <span data-i18n="nav.about">عن المعهد</span><span class="num">02</span></a>
		<a href="<?php echo esc_url( home_url( '/study/' ) ); ?>" <?php if ( is_page( 'study' ) ) echo 'class="active"'; ?>><span class="ic">📚</span> <span data-i18n="nav.study">الدراسة بالمعهد</span><span class="num">03</span></a>
		<a href="<?php echo esc_url( home_url( '/departments/' ) ); ?>" <?php if ( is_page( 'departments' ) ) echo 'class="active"'; ?>><span class="ic">🎓</span> <span data-i18n="nav.depts">أقسام المعهد</span><span class="num">04</span></a>
		<a href="<?php echo esc_url( home_url( '/album/' ) ); ?>" <?php if ( is_page( 'album' ) ) echo 'class="active"'; ?>><span class="ic">📷</span> <span data-i18n="nav.album">ألبوم الصور</span><span class="num">05</span></a>
		<a href="<?php echo esc_url( home_url( '/jobs/' ) ); ?>" <?php if ( is_page( 'jobs' ) ) echo 'class="active"'; ?>><span class="ic">💼</span> <span data-i18n="nav.jobs">وظائف خالية</span><span class="num">06</span></a>
		<a href="<?php echo esc_url( $portal ); ?>" target="_blank" rel="noopener"><span class="ic">🖥️</span> <span data-i18n="nav.portal">بوابة الطالب</span><span class="num">07</span></a>
		<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" <?php if ( is_page( 'contact' ) ) echo 'class="active"'; ?>><span class="ic">✉️</span> <span data-i18n="nav.contact">تواصل معنا</span><span class="num">08</span></a>
	</nav>
	<div class="side-foot">
		<a class="wa-btn" href="<?php echo esc_url( $wa_link ); ?>" target="_blank" rel="noopener" data-i18n="side.wa">💬 تواصل عبر واتساب</a>
		<div class="lang-switch">
			<button class="lang-btn" data-lang="ar" data-i18n="lang.ar">العربية</button>
			<button class="lang-btn" data-lang="en" data-i18n="lang.en">English</button>
			<button class="lang-btn" data-lang="fr" data-i18n="lang.fr">Français</button>
		</div>
		<span data-i18n="side.credit">تصميم: د. هيثم فاروق</span>
		<span data-i18n="side.credit2">جميع الحقوق محفوظة</span>
	</div>
</aside>

<div class="overlay drawer-overlay"></div>
<button class="menu-toggle" aria-label="القائمة">☰</button>

<div class="main">

<header class="topbar">
	<h2>🏛️ <span data-i18n="inst.name">المعهد التكنولوچى العالى للعلوم الصحية التطبيقية</span></h2>
	<div class="chips">
		<span class="chip phone">📞 01068376154</span>
		<span class="chip phone">📞 01110229695</span>
		<span class="chip" data-i18n="topbar.semester">📅 الفصل الدراسى 2025/2026</span>
	</div>
</header>
