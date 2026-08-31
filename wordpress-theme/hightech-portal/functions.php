<?php
/**
 * HighTech Portal â€” functions & asset loading
 *
 * @package hightech-portal
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function hightech_setup() {
	load_theme_textdomain( 'hightech-portal', get_template_directory() . '/languages' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	register_nav_menus( array(
		'sidebar' => __( 'Sidebar Navigation', 'hightech-portal' ),
	) );
}
add_action( 'after_setup_theme', 'hightech_setup' );

function hightech_assets() {
	$uri = get_template_directory_uri();

	/* i18n dictionaries must load BEFORE the engine so HTI18N_CONTENT merges in. */
	wp_enqueue_script( 'hti18n-content', $uri . '/assets/i18n-content.js', array(), '1.2', false );
	wp_enqueue_script( 'hti18n', $uri . '/assets/i18n.js', array( 'hti18n-content' ), '1.2', false );
	wp_enqueue_script( 'hightech-main', $uri . '/assets/main.js', array( 'hti18n' ), '1.2', true );

	wp_enqueue_style( 'hightech-main', $uri . '/assets/main.css', array(), '1.2' );
	wp_enqueue_style(
		'hightech-fonts',
		'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Manrope:wght@400;600;700;800&display=swap',
		array(),
		null
	);
}
add_action( 'wp_enqueue_scripts', 'hightech_assets' );

/**
 * Default page slug -> template map used to auto-create pages on theme activation.
 */
function hightech_default_pages() {
	$pages = array(
		'about'       => __( 'About', 'hightech-portal' ),
		'study'       => __( 'Study', 'hightech-portal' ),
		'departments'=> __( 'Departments', 'hightech-portal' ),
		'chairman'    => __( 'Chairman', 'hightech-portal' ),
		'dean'        => __( 'Dean', 'hightech-portal' ),
		'album'       => __( 'Album', 'hightech-portal' ),
		'jobs'        => __( 'Jobs', 'hightech-portal' ),
		'contact'     => __( 'Contact', 'hightech-portal' ),
	);
	foreach ( $pages as $slug => $title ) {
		if ( ! get_page_by_path( $slug ) ) {
			wp_insert_post( array(
				'post_title'   => $title,
				'post_name'    => $slug,
				'post_status'  => 'publish',
				'post_type'    => 'page',
			) );
		}
	}
}
add_action( 'after_switch_theme', 'hightech_default_pages' );
