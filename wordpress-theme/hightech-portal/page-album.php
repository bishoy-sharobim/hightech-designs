<?php
/**
 * Photo album — three gallery groups.
 *
 * @package hightech-portal
 */
get_header();
$img = get_template_directory_uri() . '/assets/img';

$album1 = array( 'IMG_5443', 'IMG_5445', 'IMG_5447', 'IMG_5450', 'IMG_5451', 'IMG_5455', 'IMG_5456', 'IMG_5457', 'IMG_5471', 'IMG_5474', 'IMG_5489', 'IMG_5490' );
$album2 = array( 'IMG_5550', 'IMG_5551', 'IMG_5553', 'IMG_5555', 'IMG_5560' );
$album3 = array( 'IMG_5510', 'IMG_5516', 'IMG_5535' );
?>
<main class="section" style="padding-top:10px">
	<div class="container">
		<div class="subpage-head">
			<h1 data-i18n="sp.album.title">ألبوم الصور</h1>
			<p data-i18n="sp.album.sub">لقطات من داخل المعهد والمعامل والأنشطة التعليمية</p>
		</div>
		<h3 class="subpage-title" data-i18n="album.a1">ألبوم الصور الأول</h3>
		<div class="subpage-grid">
			<?php foreach ( $album1 as $p ) : ?>
			<figure class="subpage-item"><img src="<?php echo $img; ?>/gallery/<?php echo $p; ?>.JPG" alt="" loading="lazy"></figure>
			<?php endforeach; ?>
		</div>
		<h3 class="subpage-title" data-i18n="album.a2">ألبوم الصور الثاني</h3>
		<div class="subpage-grid">
			<?php foreach ( $album2 as $p ) : ?>
			<figure class="subpage-item"><img src="<?php echo $img; ?>/gallery/<?php echo $p; ?>.JPG" alt="" loading="lazy"></figure>
			<?php endforeach; ?>
		</div>
		<h3 class="subpage-title" data-i18n="album.a3">ألبوم الصور الثالث</h3>
		<div class="subpage-grid">
			<?php foreach ( $album3 as $p ) : ?>
			<figure class="subpage-item"><img src="<?php echo $img; ?>/gallery/<?php echo $p; ?>.JPG" alt="" loading="lazy"></figure>
			<?php endforeach; ?>
		</div>
	</div>
</main>
<?php
get_footer();
