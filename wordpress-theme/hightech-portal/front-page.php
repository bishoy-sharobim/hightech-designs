<?php
/**
 * Home page (Design 2 admin-portal).
 *
 * @package hightech-portal
 */
get_header();
$img = get_template_directory_uri() . '/assets/img';
?>
<section class="hero" id="home">
	<div class="blob blob-1"></div>
	<div class="blob blob-2"></div>
	<div class="blob blob-3"></div>
	<div class="shape shape-1"></div>
	<div class="shape shape-2"></div>
	<div class="shape shape-3"></div>
	<div class="shape shape-4"></div>
	<div class="container inner">
		<span class="badge" data-i18n="hero.badge">قبول طلاب جدد — العام الدراسى 2026/2027</span>
		<h1><span data-i18n="hero.title1">المعهد التكنولوچى العالى</span><br><span class="grad-text" data-i18n="hero.title2">للعلوم الصحية التطبيقية</span></h1>
		<p class="lead" data-i18n="hero.lead">نحن نؤمن بأن قوتنا في صنع مستقبلك بأيدينا. نظام تعليمي رقمي متكامل: بوابة طالب، جداول دراسية، نتائج فورية — ك٣٦ طريق مصر الإسماعيلية الصحراوى، قرية عساكر، أمام مدينة الشروق.</p>
		<div class="actions">
			<a class="btn-primary" href="#departments" data-i18n="hero.cta1">أقسام المعهد</a>
			<a class="btn-ghost" href="<?php echo esc_url( home_url( '/study/' ) ); ?>" data-i18n="hero.cta2">الدراسة بالمعهد</a>
		</div>
	</div>
</section>

<section class="stats section">
	<div class="container">
		<div class="stats-grid">
			<div class="stat-card" data-reveal><div class="num"><span data-count="4">4</span><em>+</em></div><div class="label" data-i18n="stat.years">📅 سنوات دراسية</div></div>
			<div class="stat-card green" data-reveal data-reveal-delay="80"><div class="num"><span data-count="128">128</span><em>+</em></div><div class="label" data-i18n="stat.hours">📚 ساعة معتمدة</div></div>
			<div class="stat-card amber" data-reveal data-reveal-delay="160"><div class="num"><span data-count="3">3</span><em>+</em></div><div class="label" data-i18n="stat.depts">🔬 أقسام علمية</div></div>
			<div class="stat-card purple" data-reveal data-reveal-delay="240"><div class="num"><span data-count="120">120</span><em>+</em></div><div class="label" data-i18n="stat.students">🎓 طالب وطالبة</div></div>
		</div>
	</div>
</section>

<section class="section about" id="about">
	<div class="container">
		<div class="grid">
			<div class="media" data-reveal>
				<img src="<?php echo $img; ?>/obj-general.jpg" alt="" data-i18n-alt="inst.name">
				<div class="badge-float"><b>128</b><small data-i18n="misc.creditHours">ساعة معتمدة</small></div>
			</div>
			<div data-reveal data-reveal-delay="120">
				<span class="kicker" data-i18n="about.kicker">عن المعهد</span>
				<h2><span data-i18n="about.title1">مرحبا بكم فى</span> <span data-i18n="about.title2">المعهد التكنولوچى العالى</span></h2>
				<p data-i18n="about.p">معهد متخصص لإعداد كوادر فنية وتقنية مؤهلة في مجالات العلوم الصحية التطبيقية وفق أحدث المعايير العالمية، بمناهج نظرية وعملية حديثة وأجهزة وتقنيات متطورة.</p>
				<ul class="checklist">
					<li data-i18n="about.c1">نظام الساعات المعتمدة الحديث</li>
					<li data-i18n="about.c2">أربع سنوات دراسية للحصول على درجة البكالوريوس</li>
					<li data-i18n="about.c3">التدريس باللغة الإنجليزية والعربية</li>
					<li data-i18n="about.c4">بوابة طالب رقمية للجدول والنتيجة والسجل الأكاديمي</li>
				</ul>
				<a class="btn-primary" href="#departments" data-i18n="about.cta">المزيد &gt;&gt; أقسام المعهد</a>
			</div>
		</div>
	</div>
</section>

<section class="section objectives" id="study">
	<div class="container">
		<div class="section-head" data-reveal>
			<span class="kicker" data-i18n="obj.kicker">رؤيتنا وأهدافنا</span>
			<h2 data-i18n="obj.title">أهداف المعهد والدرجة العلمية</h2>
		</div>
		<div class="grid">
			<div class="obj" data-reveal>
				<div class="head"><h3 data-i18n="obj.gen">الأهداف العامة</h3><em>01</em></div>
				<table>
					<thead><tr><th>#</th><th data-i18n="obj.goal">الهدف</th></tr></thead>
					<tbody>
						<tr><td>١</td><td data-i18n="obj.gen1">تكوين طبقة من المتخصصين في العلوم الصحية التطبيقية المعاونة القادرين على التعامل مع أدوات التكنولوجيا الحديثة بكفاءة عالية أو صيانتها أو تطويرها.</td></tr>
						<tr><td>٢</td><td data-i18n="obj.gen2">إعادة تأهيل خريجي الكليات وبعض المعاهد طبقاً لحاجة سوق العمل في مجالات العلوم الصحية الحديثة.</td></tr>
						<tr><td>٣</td><td data-i18n="obj.gen3">توفير فرص التعليم المستمر للمتخصصين الفنيين والتقنيين والإداريين طبقاً لحاجة سوق العمل.</td></tr>
						<tr><td>٤</td><td data-i18n="obj.gen4">القيام بالدراسة الميدانية لخدمة البيئة والمجتمع في المجالات الصحية المتعلقة بصحة الإنسان.</td></tr>
					</tbody>
				</table>
			</div>
			<div class="obj" data-reveal data-reveal-delay="120">
				<div class="head"><h3 data-i18n="obj.spec">الأهداف الخاصة</h3><em>02</em></div>
				<table>
					<thead><tr><th>#</th><th data-i18n="obj.goal">الهدف</th></tr></thead>
					<tbody>
						<tr><td>١</td><td data-i18n="obj.spec1">أن يشارك بجدارة في التنافس التقني والفني المتطلب في القطاع الصحي الطبي الحكومي.</td></tr>
						<tr><td>٢</td><td data-i18n="obj.spec2">أن يساهم بفاعلية واحتراف في دعم مخطط الدولة في قانون التأمين الصحي الجديد.</td></tr>
						<tr><td>٣</td><td data-i18n="obj.spec3">أن يتواصل عملياً مع القضايا المعاصرة ويتعامل بكفاءة مع الأجهزة الحديثة.</td></tr>
						<tr><td>٤</td><td data-i18n="obj.spec4">تأهيل وتدريب الكوادر الصحية ورفع كفاءاتها العلمية والعملية.</td></tr>
						<tr><td>٥</td><td data-i18n="obj.spec5">تلبية احتياجات المجتمع والخدمات الصحية بالكوادر الفنية المؤهلة.</td></tr>
						<tr><td>٦</td><td data-i18n="obj.spec6">المساهمة في تخفيف الأعباء على الدولة من تكاليف تأهيل وتدريب الكوادر الصحية.</td></tr>
					</tbody>
				</table>
			</div>
			<div class="obj" data-reveal data-reveal-delay="240">
				<div class="head"><h3 data-i18n="obj.degree">الدرجة العلمية</h3><em>03</em></div>
				<table>
					<thead><tr><th>#</th><th data-i18n="obj.info">المعلومة</th></tr></thead>
					<tbody>
						<tr><td>١</td><td data-i18n="obj.deg1"><b>شروط القبول:</b> الثانوية العامة علمي (علوم) وما يعادلها، الثانوية الأزهرية علمي، دبلوم المعاهد الفنية الصحية بتقدير عام جيد.</td></tr>
						<tr><td>٢</td><td data-i18n="obj.deg2"><b>النظام:</b> الدراسة بنظام الساعات المعتمدة وليس السنوات الدراسية.</td></tr>
						<tr><td>٣</td><td data-i18n="obj.deg3"><b>الفصول:</b> الأول والثاني (16 أسبوعاً) والفصل الصيفي الاختياري (8 أسابيع بساعات مضاعفة).</td></tr>
						<tr><td>٤</td><td data-i18n="obj.deg4"><b>المدة:</b> أربع سنوات (128 ساعة) للحصول على بكالوريوس "أخصائي تكنولوجي العلوم الصحية التطبيقية".</td></tr>
						<tr><td>٥</td><td data-i18n="obj.deg5"><b>اللغة:</b> التدريس باللغة الإنجليزية والعربية والامتحان بنفس لغة التدريس.</td></tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</section>

<section class="section" id="departments">
	<div class="container">
		<div class="section-head" data-reveal>
			<span class="kicker" data-i18n="dept.kicker">برامجنا الأكاديمية</span>
			<h2 data-i18n="dept.title">أقسام المعهد</h2>
			<p data-i18n="dept.sub">ثلاثة أقسام علمية متخصصة بنظام الساعات المعتمدة</p>
		</div>
		<div class="cards">
			<article class="card" data-reveal>
				<div class="head">
					<div class="ic b">🔬</div>
					<h3 data-i18n="dept.rad">قسم علوم الأشعة</h3>
					<span class="count" data-i18n="dept.years4">4 سنوات</span>
				</div>
				<div class="body">
					<div class="row"><strong data-i18n="dept.rad.r1">التصوير الطبي والأشعة التشخيصية</strong><div class="meta" data-i18n="dept.rad.r1m">إعداد الطلاب في علوم الأشعة والتصوير الطبي</div><span class="code">RAD</span></div>
					<div class="row"><strong data-i18n="dept.rad.r2">القوانين الفيزيائية للإشعاع</strong><div class="meta" data-i18n="dept.rad.r2m">ملم بالقوانين الفيزيائية ومخاطر الإشعاع</div><span class="code">PHY</span></div>
					<div class="row"><strong data-i18n="dept.rad.r3">الأجهزة التشخيصية والعلاجية</strong><div class="meta" data-i18n="dept.rad.r3m">التعامل مع جميع أجهزة الأشعة المختلفة</div><span class="code">EQP</span></div>
				</div>
				<a class="more" href="<?php echo esc_url( home_url( '/departments/' ) ); ?>" data-i18n="dept.more">المزيد ←</a>
			</article>

			<article class="card" data-reveal data-reveal-delay="120">
				<div class="head">
					<div class="ic g">🧪</div>
					<h3 data-i18n="dept.lab">قسم المختبرات الطبية</h3>
					<span class="count" data-i18n="dept.years4">4 سنوات</span>
				</div>
				<div class="body">
					<div class="row"><strong data-i18n="dept.lab.r1">التحاليل الطبية المتقدمة</strong><div class="meta" data-i18n="dept.lab.r1m">التحاليل الطبية بالتقنيات المتطورة</div><span class="code">MLT</span></div>
					<div class="row"><strong data-i18n="dept.lab.r2">عينات الأنسجة والدم</strong><div class="meta" data-i18n="dept.lab.r2m">الإجراءات المعقدة على العينات بدقة وسرعة</div><span class="code">SMP</span></div>
					<div class="row"><strong data-i18n="dept.lab.r3">أجهزة التحليل الطبي</strong><div class="meta" data-i18n="dept.lab.r3m">التعامل مع كافة أجهزة التحليل الطبي</div><span class="code">EQP</span></div>
				</div>
				<a class="more" href="<?php echo esc_url( home_url( '/departments/' ) ); ?>" data-i18n="dept.more">المزيد ←</a>
			</article>

			<article class="card" data-reveal data-reveal-delay="240">
				<div class="head">
					<div class="ic a">🦷</div>
					<h3 data-i18n="dept.den">قسم تركيبات الأسنان</h3>
					<span class="count" data-i18n="dept.years4">4 سنوات</span>
				</div>
				<div class="body">
					<div class="row"><strong data-i18n="dept.den.r1">تقنيات التركيبات السنية</strong><div class="meta" data-i18n="dept.den.r1m">إعداد الطلاب في تقنيات تركيبات الأسنان</div><span class="code">DEN</span></div>
					<div class="row"><strong data-i18n="dept.den.r2">التصنيع النهائي للتركيبات</strong><div class="meta" data-i18n="dept.den.r2m">من تحضير المواد حتى التصنيع النهائي</div><span class="code">PRC</span></div>
					<div class="row"><strong data-i18n="dept.den.r3">السلامة المهنية والبحث العلمي</strong><div class="meta" data-i18n="dept.den.r3m">مراعاة السلامة المهنية ودعم البحث العلمي</div><span class="code">RES</span></div>
				</div>
				<a class="more" href="<?php echo esc_url( home_url( '/departments/' ) ); ?>" data-i18n="dept.more">المزيد ←</a>
			</article>
		</div>
	</div>
</section>

<section class="results" id="results">
	<div class="container">
		<div class="box" data-reveal>
			<div>
				<h2 data-i18n="results.title">نتيجة العام الدراسى 2025/2026</h2>
				<p data-i18n="results.p">ظهرت نتيجة العام الدراسى الأول — اتبع الرابط التالي مع تمنياتنا بالتوفيق الدائم لطلابنا.</p>
			</div>
			<a class="btn-primary" href="https://htiahs.pythonanywhere.com" target="_blank" rel="noopener" data-i18n="results.cta">عرض النتيجة ←</a>
		</div>
	</div>
</section>

<section class="contact" id="contact">
	<div class="container">
		<div class="inner">
			<div>
				<h2 data-i18n="contact.title">تواصل معنا</h2>
				<p data-i18n="contact.p">ك٣٦ طريق مصر الإسماعيلية الصحراوى – قرية عساكر – أمام مدينة الشروق – القاهرة</p>
				<div class="phones">
					<a href="tel:01068376154">01068376154</a>
					<a href="tel:01064234560">01064234560</a>
					<a href="tel:01110229695">01110229695</a>
					<a href="mailto:Info@HighTech-AHS.edu.eg">Info@HighTech-AHS.edu.eg</a>
				</div>
			</div>
			<a class="btn-primary" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" data-i18n="contact.page">صفحة التواصل</a>
		</div>
	</div>
</section>
<?php
get_footer();
