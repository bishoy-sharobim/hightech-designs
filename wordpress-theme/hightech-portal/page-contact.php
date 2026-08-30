<?php
/**
 * Contact page — form + info + map/QR.
 *
 * @package hightech-portal
 */
get_header();
$img  = get_template_directory_uri() . '/assets/img';
$maps = 'https://www.google.com/maps?q=%D9%83%D9%8036+%D8%B7%D8%B1%D9%8A%D9%82+%D9%85%D8%B5%D8%B1+%D8%A7%D9%84%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%B5%D8%AD%D8%B1%D8%A7%D9%88%D9%89+%D9%82%D8%B1%D9%8A%D8%A9+%D8%B9%D8%B3%D8%A7%D9%83%D8%B1+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9';
?>
<main class="section" style="padding-top:10px">
	<div class="container">
		<div class="subpage-head">
			<h1 data-i18n="sp.contact.title">تواصل معنا</h1>
			<p data-i18n="sp.contact.sub">سواء كان لديك استفسار أو تعليق أو تحتاج إلى المساعدة، فنحن هنا لمساعدتك — نحن نقدر أفكارك ونتطلع إلى التواصل معك.</p>
		</div>
		<div class="contact-wrap">
			<form class="contact-form" onsubmit="return false">
				<label><span data-i18n="contactf.name">الاسم</span> <input type="text" data-i18n-ph="contactf.namePh" placeholder="اكتب اسمك هنا" required></label>
				<label><span data-i18n="contactf.email">البريد الإلكترونى</span> <input type="email" data-i18n-ph="contactf.emailPh" placeholder="example@mail.com" required></label>
				<label><span data-i18n="contactf.msg">محتوى الرسالة</span> <textarea rows="5" data-i18n-ph="contactf.msgPh" placeholder="اكتب رسالتك هنا" required></textarea></label>
				<button class="btn-primary" type="submit" style="width:auto" data-i18n="contactf.send">إرسال</button>
			</form>
			<div class="contact-info">
				<h3 data-i18n="contactf.info">معلومات التواصل</h3>
				<p data-i18n="contact.p">ك٣٦ طريق مصر الإسماعيلية الصحراوى – قرية عساكر – أمام مدينة الشروق – القاهرة</p>
				<p><a href="tel:01068376154">📞 01068376154</a></p>
				<p><a href="tel:01064234560">📞 01064234560</a></p>
				<p><a href="tel:01110229695">📞 01110229695</a></p>
				<p><a href="mailto:Info@HighTech-AHS.edu.eg">✉ Info@HighTech-AHS.edu.eg</a></p>
			</div>
		</div>
		<div class="loc-wrap">
			<div class="loc-map"><iframe src="<?php echo esc_url( $maps . '&output=embed' ); ?>" width="100%" height="100%" style="border:0" allowfullscreen loading="lazy"></iframe></div>
			<div class="loc-side">
				<img class="loc-qr" src="<?php echo $img; ?>/qr.png" alt="QR Code للموقع" data-i18n-alt="misc.qrAlt">
				<p><b data-i18n="misc.scanMap">امسح الكود لمعرفة الموقع على الخريطة</b></p>
				<p style="color:var(--txt-muted,#64748b)" data-i18n="contact.p">ك٣٦ طريق مصر الإسماعيلية الصحراوى – قرية عساكر – أمام مدينة الشروق – القاهرة</p>
				<a class="btn-primary" href="<?php echo esc_url( $maps ); ?>" target="_blank" rel="noopener" data-i18n="misc.openMaps">فتح في خرائط جوجل ←</a>
			</div>
		</div>
	</div>
</main>
<?php
get_footer();
