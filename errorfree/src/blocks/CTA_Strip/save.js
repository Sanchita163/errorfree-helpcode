import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		container_width,
		title_color,
		bg_image_url,
		background_color,
		title,
		text,
		text_color,
		title_font_size,
		title_font_weight,
		text_font_size,
		text_font_weight,
		button1_text,
		button2_text,
		button_bg_color,
		button1_text_color,
		button2_text_color,
		button1_border_color,
		button2_border_color,
		button1_link,
		button2_link,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="strip-wrapper">
				<div
					className="strip-container"
					style={{
						backgroundImage: bg_image_url
							? `url(${bg_image_url})`
							: '',

						backgroundColor: background_color,
					}}
				>
					<div
						className="strip-width-container"
						style={{
							width: container_width + '%',
							margin:"auto",
						}}
					>
						<div className="cta-strip-text-container">
							<div
								className="cta-strip-title"
								style={{
									color: title_color,
									fontSize: title_font_size,
									fontWeight: title_font_weight,
								}}
							>
								{title}
							</div>
							<div
								className="cta-strip-text"
								style={{
									color: text_color,
									fontSize: text_font_size,
									fontWeight: text_font_weight,
								}}
							>
								{text}
							</div>
						</div>
						<div className="cta-strip-button-container">
							<a
								href={button1_link}
								className="cta-strip-button"
								style={{
									backgroundColor: 'transparent',
									borderColor: button1_border_color,
								}}
							>
								<div
									className="cta-strip-button-text"
									style={{
										color: button1_text_color,
									}}
								>
									{button1_text}
								</div>
							</a>
							<a
								href={button2_link}
								className="cta-strip-button2"
								style={{
									backgroundColor: button_bg_color,
									borderColor: button2_border_color,
								}}
							>
								<div
									className="cta-strip-button-text"
									style={{
										color: button2_text_color,
									}}
								>
									{button2_text}
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
