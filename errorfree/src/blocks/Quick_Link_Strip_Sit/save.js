import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		background_color,
		main_title,
		data_array,
		text_color,
		description_color,
		title_font_size,
		description_font_size,
		title_font_weight,
		description_font_weight,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div
				className="quick-link-strip-grid-container"
				style={{
					background: background_color,
					gridTemplateColumns: `repeat(${data_array.length + 1}, 1fr)`,
				}}
			>
				<div class="quick-link-strip-grid-main-item">
					<div
						style={{
							color: text_color,
							fontSize: title_font_size,
							fontWeight: title_font_weight,
						}}
						className="quick-link-strip-title"
					>
						{main_title}
					</div>
				</div>
				{data_array.map((data, index) => {
					console.log(data.icon);
					return (
						<a
							href={data.link}
							class="quick-link-strip-grid-item"
							key={index}
						>
							<img
								src={data.icon ?? ''}
								class="quick-link-strip-icon-style"
							></img>
							<div
								style={{
									color: text_color,
									fontSize: title_font_size,
									fontWeight: title_font_weight,
								}}
								className="quick-link-strip-title-child"
							>
								{data.title}
							</div>
							<div
								style={{
									color: description_color,
									fontSize: description_font_size,
									fontWeight: description_font_weight,
								}}
								className="quick-link-strip-description"
							>
								{data.description}
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
}
