<?php
/**
 * Job vacancies — announcement images + contact note.
 *
 * @package hightech-portal
 */
get_header();
$img = get_template_directory_uri() . '/assets/img';
?>
<main class="section" style="padding-top:10px">
	<div class="container">
		<div class="subpage-head">
			<h1 data-i18n="sp.jobs.title">وظائف خالية</h1>
			<p data-i18n="sp.jobs.sub">أعلن المعهد عن الوظائف الشاغرة التالية — للتفاصيل يرجى التواصل مع الإدارة</p>
		</div>
		<div class="subpage-grid" style="grid-template-columns:repeat(2,1fr)">
			<figure class="subpage-item"><img src="<?php echo $img; ?>/jobs/announcement.png" alt="إعلان وظائف" data-i18n-alt="jobs.img1alt" loading="lazy"></figure>
			<figure class="subpage-item"><img src="<?php echo $img; ?>/jobs/announcement-2.png" alt="إعلان وظائف 2" data-i18n-alt="jobs.img2alt" loading="lazy"></figure>
		</div>
		<p style="color:var(--txt-muted,#64748b);text-align:center;margin-top:28px"><span data-i18n="jobs.note">لمعرفة الشروط والتفاصيل الكاملة يرجى التواصل مع إدارة المعهد على الأرقام التالية:</span> <b>01068376154</b> / <b>01064234560</b></p>
	</div>
</main>
<?php
get_footer();
