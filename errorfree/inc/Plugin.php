<?php

namespace Older\People\Blocks;

class Plugin
{

	const PREFIX = 'older-people-gutenberg-blocks';

	const L10N = self::PREFIX;

	private static string $baseUrl;

	public static function perInit(): void
	{
		add_action('init',  __CLASS__ . '::olderPeopleGutenbergBlocksInit');
	}

	public static function init(): void
	{
		if (version_compare($GLOBALS['wp_version'], '5.7', '<')) {
			add_filter('block_categories', __CLASS__ . '::olderPeopleGutenbergBlocksRegisterCategory', 10, 2);
		} else {
			add_filter('block_categories_all', __CLASS__ . '::olderPeopleGutenbergBlocksRegisterCategory', 10, 2);
		}
	}

	public static function getBlocksName(): array
	{
		return [
			'Quick_Link_Strip_Sit',
			'Image_Left_Text_Right_BG',
			'Page_Header_Home',
			'pageIntro-quickLinks',
			//'X_Col_Card_Image',
			'CTA_Strip',
			 'Media_Share'
			// 'Quick_Link_Strip_Prof'
		];
	}

	public static function olderPeopleGutenbergBlocksInit(): void
	{
		foreach (self::getBlocksName() as $block_name) {
			register_block_type(self::getBasePath() . '/build/blocks/' . $block_name);
		}
	}

	public static function olderPeopleGutenbergBlocksRegisterCategory($categories, $post): array
	{
		return [
			[
				'slug'  => 'older-people-gutenberg-blocks',
				'title' => __('Older People  Blocks', Plugin::L10N),
			],
			...$categories,
		];
	}

	public static function gutenbergBlocksExternalLibraries()
	{
		wp_enqueue_script(
			'gutenberg-blocks-lib',
			OLDER_PEOPLE_GUTENBERG_BLOCKS_INC_URL . 'js/plugin.js',
			[],
			OLDER_PEOPLE_GUTENBERG_BLOCKS_VERSION,
			TRUE
		);
	}

	public static function loadTextDomain(): void
	{
		load_plugin_textdomain(static::L10N, FALSE, static::L10N . '/languages/');
	}

	public static function getBaseUrl(): string
	{
		if (!isset(static::$baseUrl)) {
			static::$baseUrl = plugins_url('', static::getBasePath() . '/plugin.php');
		}
		return static::$baseUrl;
	}

	public static function getBasePath(): string
	{
		return dirname(__DIR__);
	}

	
}


