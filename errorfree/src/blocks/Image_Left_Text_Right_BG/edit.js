/* eslint-disable camelcase */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaPlaceholder,
	PlainText,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	RangeControl,
	TextControl,
	ComboboxControl,
} from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';
import Color_Palette from '../../components/Color_Palette';
import Font_Control from '../../components/Font_Control';

export default function Edit({ attributes, setAttributes }) {
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

	const onSelectImage = (media) => {
		setAttributes({
			image_url: media.url,
		});
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'older-people-gutenberg-blocks')}
					initialOpen={true}
				>
					<p className="custom__editor__label">
						{__(
							'Container Width (%)',
							'older-people-gutenberg-blocks'
						)}
					</p>
					<RangeControl
						label={''}
						value={container_width}
						onChange={(e) => setAttributes({ container_width: e })}
						min={0}
						max={100}
					/>
					
					<p className="custom__editor__label">
						{__(
							'Background Image',
							'older-people-gutenberg-blocks'
						)}
					</p>
					<MediaUpload
						onSelect={(media) =>
							setAttributes({ bg_image_url: media.url })
						}
						render={({ open }) => (
							<Button
								isSecondary
								style={{ marginBottom: bg_image_url ? 10 : 0 }}
								onClick={open}
							>
								Select Image
							</Button>
						)}
					/>
					{bg_image_url && (
						<img
							src={bg_image_url}
							style={{ marginBottom: 20 }}
							alt="Selected Image"
						/>
					)}
					
					<Color_Palette
						label={'Title Color'}
						value={title_color}
						onChange={(value) =>
							setAttributes({ title_color: value })
						}
					/>
					<p className="custom__editor__label">
						{__('Image Width (%)', 'older-people-gutenberg-blocks')}
					</p>
					<RangeControl
						label={''}
						value={image_width}
						onChange={(e) => setAttributes({ image_width: e })}
						min={0}
						max={100}
					/>
					<Color_Palette
						label={'Text Container Background Color'}
						value={text_container_bg_color}
						onChange={(value) =>
							setAttributes({ text_container_bg_color: value })
						}
					/>
					<Font_Control
						label={'Title Font'}
						show={['size', 'weight']}
						size={{
							min: 14,
							max: 28,
							value: main_title_font_size,
						}}
						weight={{
							value: main_title_font_weight,
						}}
						onChangeWeight={(value) => {
							setAttributes({ main_title_font_weight: value });
						}}
						onChangeSize={(value) => {
							setAttributes({ main_title_font_size: value });
						}}
					/>
					<Font_Control
						label={'Sub Title Font'}
						show={['size', 'weight']}
						size={{
							min: 12,
							max: 26,
							value: sub_title_font_size,
						}}
						weight={{
							value: sub_title_font_weight,
						}}
						onChangeWeight={(value) => {
							setAttributes({ sub_title_font_weight: value });
						}}
						onChangeSize={(value) => {
							setAttributes({ sub_title_font_size: value });
						}}
					/>
					<Font_Control
						label={'Text Font'}
						show={['size', 'weight']}
						size={{
							min: 10,
							max: 24,
							value: text_font_size,
						}}
						weight={{
							value: text_font_weight,
						}}
						onChangeWeight={(value) => {
							setAttributes({ text_font_weight: value });
						}}
						onChangeSize={(value) => {
							setAttributes({ text_font_size: value });
						}}
					/>
					
					
					<Color_Palette
						label={'Sub-Title Color'}
						value={text_container_sub_title_color}
						onChange={(value) =>
							setAttributes({ text_container_sub_title_color: value })
						}
					/>
					<Color_Palette
						label={'Text Color'}
						value={text_container_text_color}
						onChange={(value) =>
							setAttributes({ text_container_text_color: value })
						}
					/>
					<Color_Palette
						label={'Button Background Color'}
						value={button_bg_color}
						onChange={(value) =>
							setAttributes({ button_bg_color: value })
						}
					/>
					<Color_Palette
						label={'Button Text Color'}
						value={button_text_color}
						onChange={(value) =>
							setAttributes({ button_text_color: value })
						}
					/>
					<p className="custom__editor__label">
						{__('Button Link', 'older-people-gutenberg-blocks')}
					</p>
					<TextControl
						label=""
						value={button_link}
						placeholder={__(
							`Button Link`,
							'older-people-gutenberg-blocks'
						)}
						onChange={(e) => {
							setAttributes({
								button_link: e,
							});
						}}
						type="link"
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div
					style={{
						backgroundImage: bg_image_url
							? `url(${bg_image_url})`
							: '',
					}}
					className="image-left-text-right-bg-image-wrapper"
				>
					<PlainText
						className="image-left-text-right-bg-main-title"
						style={{
							color: title_color,
							width: container_width + '%',
							fontSize: main_title_font_size,
							fontWeight: main_title_font_weight,
						}}
						value={main_title}
						placeholder={__(
							'Headline',
							'older-people-gutenberg-blocks'
						)}
						onChange={(e) => {
							setAttributes({ main_title: e });
						}}
					/>
					<div
						style={{ width: container_width + '%' }}
						className="image-left-text-right-bg-main-container"
					>
						<div
							style={{ width: image_width + '%' }}
							className="image-left-text-right-bg-image-container container-item-flex-end"
						>
							{image_url ? (
								<>
									<img
										alt="Upload a Media"
										src={image_url}
										style={{
											width: '100%',
											marginBottom: 20,
										}}
									/>
									<MediaUpload
										onSelect={onSelectImage}
										allowedTypes={['image']}
										value={image_url}
										render={({ open }) => (
											<Button onClick={open} isSecondary>
												Change Image
											</Button>
										)}
									/>
								</>
							) : (
								<MediaPlaceholder
									icon="format-image"
									labels={{ title: __('Select Image') }}
									className="image-wrapper"
									onSelect={onSelectImage}
									accept="image/*"
									allowedTypes={['image']}
								/>
							)}
						</div>
						<div
							style={{
								backgroundColor: text_container_bg_color,
								width: 100 - image_width + '%',
							}}
							className="image-left-text-right-bg-text-container container-item-flex-start"
						>
							<PlainText
								className="image-left-text-right-bg-sub-title"
								style={{
									// eslint-disable-next-line camelcase
									color: text_container_sub_title_color,
									// eslint-disable-next-line camelcase
									fontSize: sub_title_font_size,
									fontWeight:sub_title_font_weight,
								}}
								value={sub_title}
								placeholder={__(
									'Sub Title',
									'older-people-gutenberg-blocks'
								)}
								onChange={(e) => {
									setAttributes({ sub_title: e });
								}}
							/>
							<PlainText
								className="image-left-text-right-bg-text-content"
								style={{
									color: text_container_text_color,
									fontSize: text_font_size,
									fontWeight:text_font_weight,
								}}
								value={text}
								placeholder={__(
									'Please Write Text...',
									'older-people-gutenberg-blocks'
								)}
								onChange={(e) => {
									setAttributes({ text: e });
								}}
							/>
							<div
								className="image-left-text-right-bg-button"
								style={{
									backgroundColor: button_bg_color,
								}}
							>
								<PlainText
									className="image-left-text-right-bg-button-text"
									style={{
										color: button_text_color,
									}}
									value={button_text}
									placeholder={__(
										'Button Text',
										'older-people-gutenberg-blocks'
									)}
									onChange={(e) => {
										setAttributes({ button_text: e });
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
