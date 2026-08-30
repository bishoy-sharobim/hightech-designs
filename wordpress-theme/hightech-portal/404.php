<?php
/**
 * 404 fallback.
 *
 * @package hightech-portal
 */
get_header();
?>
<main class="section" style="padding-top:10px">
	<div class="container">
		<div class="subpage-head">
			<h1>404</h1>
			<p data-i18n="sp.about.sub">تعرف على المعهد التكنولوچى العالى للعلوم الصحية التطبيقية</p>
		</div>
		<div class="study-wrap" style="text-align:center">
			<a class="btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>" data-i18n="nav.home">الرئيسية</a>
		</div>
	</div>
</main>
<?php
get_footer();
