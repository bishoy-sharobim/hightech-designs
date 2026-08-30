<?php
/**
 * Generic page fallback — about content (used when no specific template matches).
 *
 * @package hightech-portal
 */
get_header();
$img = get_template_directory_uri() . '/assets/img';
?>
<main class="section" style="padding-top:10px">
	<div class="container">
		<div class="subpage-head">
			<h1 data-i18n="sp.about.title">عن المعهد</h1>
			<p data-i18n="sp.about.sub">تعرف على المعهد التكنولوچى العالى للعلوم الصحية التطبيقية</p>
		</div>
		<div class="about-wrap">
			<p class="about-intro" data-i18n="aboutp.intro">أنشئ المعهد التكنولوچى العالي للعلوم الصحية التطبيقية بموجب القرار الوزاري للتعليم العالى والبحث العلمى للتشغيل رقم (653) بتاريخ (2024/4/3) والقرار رقم (908) بتاريخ (2025/5/25)، وذلك تمشياً مع سياسة الدولة لتشجيع التعليم الخاص "للعلوم الصحية"</p>
			<div class="about-cols">
				<div class="about-col">
					<div class="about-icon">👁️</div>
					<h3 data-i18n="aboutp.col1.title">الرؤية</h3>
					<p data-i18n="aboutp.col1.text">المعهد التكنولوچى العالي للعلوم الصحية التطبيقية هو صرح علمى يسعى لأن يكون رائداً في مجال العلوم الصحية التطبيقية محلياً وإقليمياً، وعنصراً فعالاً وداعماً في المجتمع</p>
				</div>
				<div class="about-col">
					<div class="about-icon">🎯</div>
					<h3 data-i18n="aboutp.col2.title">الرسالة</h3>
					<p data-i18n="aboutp.col2.text">المعهد التكنولوچى العالي للعلوم الصحية التطبيقية هو منظمة أهلية لا تهدف إلى الربح، ورسالته إعداد كفاءات متخصصة في كافة مجالات العمل الفني الصحي لإعداد خريج قادر علي المنافسة ومواكب لاحتياجات سوق العمل المحلي والإقليمي من خلال خدمات تعليمية وبحثية ومجتمعية متميزة</p>
				</div>
				<div class="about-col">
					<div class="about-icon">📋</div>
					<h3 data-i18n="aboutp.col3.title">الأهداف العامة</h3>
					<p data-i18n="aboutp.col3.text">خريج يواكب التطور في مجال العلوم الصحية التطبيقية — المساهمة الفعالة في أنشطة البحث العلمي — مكانة رائدة للمعهد في منظومة التعليم محلياً إقليمياً — مجتمع متحضر وبيئة متطورة</p>
				</div>
			</div>
		</div>
	</div>
</main>
<?php
get_footer();
