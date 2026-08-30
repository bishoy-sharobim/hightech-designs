<?php
/**
 * Shared footer: contact grid + QR card + bottom bar.
 *
 * @package hightech-portal
 */
$img   = get_template_directory_uri() . '/assets/img';
$maps  = 'https://www.google.com/maps?q=%D9%83%D9%8036+%D8%B7%D8%B1%D9%8A%D9%82+%D9%85%D8%B5%D8%B1+%D8%A7%D9%84%D8%A5%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D8%B5%D8%AD%D8%B1%D8%A7%D9%88%D9%89+%D9%82%D8%B1%D9%8A%D8%A9+%D8%B9%D8%B3%D8%A7%D9%83%D8%B1+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9';
$home  = esc_url( home_url( '/' ) );
?>
</div><!-- /main content area opened in header.php -->

<footer class="footer">
	<div class="container">
		<div class="grid">
			<div>
				<div class="brand"><img src="<?php echo $img; ?>/logo-portal.jpg" alt=""></div>
				<p data-i18n="contact.p">ك٣٦ طريق مصر الإسماعيلية الصحراوى – قرية عساكر – أمام مدينة الشروق – القاهرة</p>
			</div>
			<div>
				<h4 data-i18n="foot.quick">روابط سريعة</h4>
				<ul>
					<li><a href="<?php echo $home; ?>about/" data-i18n="nav.about">عن المعهد</a></li>
					<li><a href="<?php echo $home; ?>departments/" data-i18n="foot.depts">أقسام المعهد</a></li>
					<li><a href="<?php echo $home; ?>study/" data-i18n="nav.study">الدراسة بالمعهد</a></li>
					<li><a href="<?php echo $home; ?>album/" data-i18n="nav.album">ألبوم الصور</a></li>
					<li><a href="<?php echo $home; ?>jobs/" data-i18n="nav.jobs">وظائف خالية</a></li>
				</ul>
			</div>
			<div>
				<h4 data-i18n="foot.depts">أقسام المعهد</h4>
				<ul>
					<li><a href="<?php echo $home; ?>departments/" data-i18n="dept.rad">قسم علوم الأشعة</a></li>
					<li><a href="<?php echo $home; ?>departments/" data-i18n="dept.lab">قسم المختبرات الطبية</a></li>
					<li><a href="<?php echo $home; ?>departments/" data-i18n="dept.den">قسم تركيبات الأسنان</a></li>
				</ul>
			</div>
			<div>
				<h4 data-i18n="foot.contact">تواصل معنا</h4>
				<ul>
					<li><a href="tel:01068376154">01068376154</a></li>
					<li><a href="tel:01064234560">01064234560</a></li>
					<li><a href="tel:01110229695">01110229695</a></li>
					<li><a href="mailto:Info@HighTech-AHS.edu.eg">Info@HighTech-AHS.edu.eg</a></li>
				</ul>
			</div>
		</div>
	</div>

	<div class="foot-qr">
		<div class="foot-qr__card">
			<img class="foot-qr__img" src="<?php echo $img; ?>/qr.png" alt="QR Code للموقع" data-i18n-alt="misc.qrAlt">
			<div class="foot-qr__info">
				<p class="foot-qr__text"><b data-i18n="misc.scanMap">امسح الكود لمعرفة الموقع على الخريطة</b></p>
				<p class="foot-qr__addr" data-i18n="contact.p">ك٣٦ طريق مصر الإسماعيلية الصحراوى – قرية عساكر – أمام مدينة الشروق – القاهرة</p>
				<a class="foot-qr__btn" href="<?php echo esc_url( $maps ); ?>" target="_blank" rel="noopener" data-i18n="misc.openMaps">فتح في خرائط جوجل ←</a>
			</div>
		</div>
	</div>
	<div class="bottom">
		<div class="container" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px">
			<span data-i18n="foot.copy">© 2026 المعهد التكنولوچى العالى للعلوم الصحية التطبيقية — جميع الحقوق محفوظة</span>
			<span data-i18n="side.credit">تصميم: د. هيثم فاروق</span>
		</div>
	</div>
</footer>

<a class="wa" href="https://wa.me/201110229695" target="_blank" rel="noopener" data-i18n-title="misc.wa" aria-label="WhatsApp">✆</a>

<?php wp_footer(); ?>
</body>
</html>
