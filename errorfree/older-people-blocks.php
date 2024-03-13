<?php

/**
 * Plugin Name:       Older People Blocks
 * Description:       Older People Blocks Gutenberg plugin.
 * Version:           1.0
 * Author:            Older People Blocks
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

function classloader($class) {
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

// Register block type and server-side render callback
function register_video_popup_block() {
    // Check if function exists to prevent errors in older WP versions
    if (function_exists('register_block_type')) {
        register_block_type('older-people-blocks/button-video', [
            'render_callback' => __NAMESPACE__ . '\render_video_popup_block',
        ]);
    }
}

