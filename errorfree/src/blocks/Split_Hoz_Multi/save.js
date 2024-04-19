import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		data_array,
		container_width,
		bg_image_url,
		main_title,
		main_title_color,
		main_title_font_size,
		main_title_font_weight,
		box_bg_color,
		box_title_color,
		box_title_font_size,
		box_title_font_weight,
		box_description_color,
		box_description_font_size,
		box_description_font_weight,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div
				style={{
					backgroundImage: bg_image_url ? `url(${bg_image_url})` : '',
					backgroundPosition: 'center',
				}}
				className="split-hoz-multi-wrapper"
			>
				<div
					className="split-hoz-multi-main-title"
					style={{
						color: main_title_color,
						fontSize: main_title_font_size,
						fontWeight: main_title_font_weight,
						width: container_width + '%',
						padding: '0 20px 0 20px',
					}}
				>
					{main_title}
				</div>
				<div className='split-hoz-main-container'
					style={{
						// width: container_width + '%',
						padding: '0px 20px 0 20px',
						display: 'flex',
						flexDirection: 'column',
						
					}}
				>
					{data_array.map((item, index) => (
						<div className='split-hoz-multi-item-container'
							style={{
								
								background: box_bg_color,
								alignSelf:
									index % 2 == 0 ? 'flex-start' : 'flex-end',
								margin: '20px 0 20px 0',
								padding: '20px',
								borderRadius: 10,
							}}
						>
							<div
								className="split-hoz-multi-box-main-title"
								style={{
									color: box_title_color,
									fontSize: box_title_font_size,
									fontWeight: box_title_font_weight,
								}}
							>
								{item.title}
							</div>
							<div
								className="split-hoz-multi-box-main-des"
								style={{
									color: box_description_color,
									fontSize: box_description_font_size,
									fontWeight: box_description_font_weight,
									whiteSpace:"pre-wrap"
								}}
							>
								{item.des}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
