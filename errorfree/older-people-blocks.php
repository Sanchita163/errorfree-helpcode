<?php

/**
 * Plugin Name:       Older People Blocks
 * Description:       Older People Blocks Gutenberg plugin.
 * Version:           1.0
 * Author:            Ndss Older People Block
 * License:           GPL-2.0-or-later
 */


namespace Older\People\Blocks;

if (!defined('ABSPATH')) {
	header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
	exit;
}

define('OLDER_PEOPLE_GUTENBERG_BLOCKS_VERSION', '1.0');
define('OLDER_PEOPLE_GUTENBERG_BLOCKS_URL', plugin_dir_url(__FILE__));
define('OLDER_PEOPLE_GUTENBERG_BLOCKS_INC_URL', OLDER_PEOPLE_GUTENBERG_BLOCKS_URL . 'includes/');

function classloader($class)
{
	static $ns_offset;
	if (strpos($class, __NAMESPACE__ . '\\') === 0) {
		if ($ns_offset === NULL) {
			$ns_offset = strlen(__NAMESPACE__) + 1;
		}
		include __DIR__ . '/inc/' . strtr(substr($class, $ns_offset), '\\', '/') . '.php';
	}
}
spl_autoload_register(__NAMESPACE__ . '\classloader');

add_action('plugins_loaded', __NAMESPACE__ . '\Plugin::loadTextDomain');
add_action('init', __NAMESPACE__ . '\Plugin::perInit', 0);
add_action('init', __NAMESPACE__ . '\Plugin::init', 20);

function my_custom_block_enqueue_scripts() {
    wp_enqueue_script(
        'my-custom-block-video-popup-handler',
        plugins_url( 'includes/js/video-popup-handler.js', __FILE__ ),
        array( 'jquery' ),
        '1.0.0',
        true
    );
	wp_enqueue_script(
        'my-custom-block-slider',
        plugins_url( 'includes/js/slider.js', __FILE__ ),
        array( 'jquery' ),
        '1.0.0',
        true
    );
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\my_custom_block_enqueue_scripts' );
