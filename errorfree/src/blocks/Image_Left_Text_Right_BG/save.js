/* eslint-disable camelcase */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		bg_image_url,
		image_url,
		image_width,
		main_title,
		sub_title,
		text,
		main_title_font_size,
		main_title_font_weight,
		sub_title_font_size,
		sub_title_font_weight,
		text_font_size,
		text_font_weight,
		button_text,
		button_bg_color,
		button_text_color,
		text_container_bg_color,
		text_container_sub_title_color,
		text_container_text_color,
		title_color,
		button_link,
		container_width,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div
				style={{
					backgroundImage: bg_image_url ? `url(${bg_image_url})` : '',
				}}
				className="image-left-text-right-bg-image-wrapper"
			>
				<div
					className="image-left-text-right-bg-main-title"
					style={{
						color: title_color,
						width: container_width + '%',
						fontSize: main_title_font_size,
						fontWeight:main_title_font_weight,
					}}
				>
					{main_title}
				</div>
				<div
					style={{ width: container_width + '%' }}
					className="image-left-text-right-bg-main-container"
				>
					<div
						style={{ width: image_width + '%' }}
						className="image-left-text-right-bg-image-container container-item-flex-end"
					>
						<img
							alt="Upload a Media"
							src={image_url}
							style={{
								width: '100%',
							}}
						/>
					</div>
					<div
						style={{
							backgroundColor: text_container_bg_color,
							width: 100 - image_width + '%',
						}}
						className="image-left-text-right-bg-text-container container-item-flex-start"
					>
						<div
							className="image-left-text-right-bg-sub-title"
							style={{
								color: text_container_sub_title_color,
								fontSize: sub_title_font_size,
								fontWeight:sub_title_font_weight,
							}}
						>
							{sub_title}
						</div>
						<div
							className="image-left-text-right-bg-text-content"
							style={{
								color: text_container_text_color,
								fontSize: text_font_size,
								fontWeight:text_font_weight,
							}}
						>
							{text}
						</div>
						<a
							href={button_link}
							target="_blank"
							className="image-left-text-right-bg-button image-left-text-right-bg-button-text"
							style={{
								backgroundColor: button_bg_color,
								color: button_text_color,
							}}
						>
							{button_text}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
