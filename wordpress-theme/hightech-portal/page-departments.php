<?php
/**
 * Departments page — three dept cards.
 *
 * @package hightech-portal
 */
get_header();
$img = get_template_directory_uri() . '/assets/img';
?>
<main class="section" style="padding-top:10px">
	<div class="container">
		<div class="subpage-head">
			<h1 data-i18n="sp.departments.title">أقسام المعهد</h1>
			<p data-i18n="sp.departments.sub">ثلاثة أقسام علمية متخصصة — بكالوريوس معتمد من وزارة التعليم العالي</p>
		</div>
		<div class="dept-cards">
			<article class="dept-card">
				<div class="dept-media"><img src="<?php echo $img; ?>/dep-radio.jpg" alt="قسم علوم الأشعة" data-i18n-alt="deptp.rad.title"><span class="dept-no">01</span></div>
				<div class="dept-body">
					<h2><span data-i18n="deptp.rad.title">قسم علوم الأشعة</span> <small data-i18n="deptp.rad.en">Radiology Sciences</small></h2>
					<p data-i18n="deptp.rad.text">يعمل هذا القسم على إعداد الطلاب في علوم الأشعة والتصوير الطبي، وأن يكون الطالب ملمًا بالقوانين الفيزيائية للإشعاع ومخاطره، والقدرة على التعامل مع جميع أجهزة الأشعة المختلفة (التشخيصية والعلاجية) مستخدمًا كافة الطرق والأوضاع المختلفة للتصوير الإشعاعي والعلاجي.</p>
				</div>
			</article>
			<article class="dept-card">
				<div class="dept-media"><img src="<?php echo $img; ?>/dep-labs.jpg" alt="قسم المختبرات الطبية" data-i18n-alt="deptp.lab.title"><span class="dept-no">02</span></div>
				<div class="dept-body">
					<h2><span data-i18n="deptp.lab.title">قسم المختبرات الطبية</span> <small data-i18n="deptp.lab.en">Medical Laboratory</small></h2>
					<p data-i18n="deptp.lab.text">يعمل هذا القسم على إعداد الطلاب في مجال التحاليل الطبية عن طريق استخدام السبل والوسائل والتقنيات المتطورة بالمعرفة النظرية وذلك من أجل القيام بالإجراءات المعقدة التي تجرى على عينات الأنسجة والدم، وأي وسائل أخرى في جسم الإنسان بدقة وسرعة، والتعامل مع كافة أجهزة التحليل الطبي.</p>
				</div>
			</article>
			<article class="dept-card">
				<div class="dept-media"><img src="<?php echo $img; ?>/dep-dental.jpg" alt="قسم تركيبات الأسنان" data-i18n-alt="deptp.den.title"><span class="dept-no">03</span></div>
				<div class="dept-body">
					<h2><span data-i18n="deptp.den.title">قسم تركيبات الأسنان</span> <small data-i18n="deptp.den.en">Dental Laboratory</small></h2>
					<p data-i18n="deptp.den.text">يعمل هذا القسم على إعداد الطلاب في تقنيات تركيبات الأسنان المختلفة، بدءًا من تحضير المواد اللازمة للتركيبات وحتى التصنيع النهائي للتركيبات المختلفة، مع مراعاة السلامة المهنية له وللمريض. كما يساهم هذا القسم في دعم البحث العلمي لتطوير العلوم الصحية التطبيقية للإسهام في التقدم العلمي.</p>
				</div>
			</article>
		</div>
	</div>
</main>
<?php
get_footer();
