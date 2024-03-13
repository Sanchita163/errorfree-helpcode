import React, { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	MediaUpload,
	PlainText,
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import Range_Control from '../../components/Range_Control';

import './editor.scss';
import Color_Palette from '../../components/Color_Palette';
import Font_Control from '../../components/Font_Control';

const { Fragment } = wp.element;

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();

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

	useEffect(() => {
		if (data_array.length === 0) {
			setAttributes({
				data_array: [
					{ title: '', des: '' },
					{ title: '', des: '' },
					{ title: '', des: '' },
				],
			});
		}
	}, []);

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'older-people-gutenberg-blocks')}
					initialOpen={true}
				>
					<Range_Control
						label={'Countain Width'}
						min={0}
						max={100}
						value={container_width}
						onChange={(value) => {
							setAttributes({ container_width: value });
						}}
					/>
					<p className="custom__editor__lable">
						{__(
							'Background Image',
							'older-people-gutenberg-blocks-image'
						)}
					</p>
					<MediaUpload
						onSelect={(media) =>
							setAttributes({ bg_image_url: media.url })
						}
						render={({ open }) => (
							<Button
								isSecondary
								style={{ marginBottom: bg_image_url }}
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
						></img>
					)}

					<Color_Palette
						label={'Headline Color'}
						value={main_title_color}
						onChange={(value) =>
							setAttributes({
								main_title_color: value,
							})
						}
					/>
					<Font_Control
						label={'Headline Text'}
						show={['size', 'weight', 'fontStyle']}
						font={{
							value: 'Arial',
						}}
						onChangeFont={(value) => {
							console.log(value);
						}}
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
					<Color_Palette
						label={'Box Background Color'}
						value={box_bg_color}
						onChange={(value) =>
							setAttributes({
								box_bg_color: value,
							})
						}
					/>
					<Color_Palette
						label={'Box Title Text Color'}
						value={box_title_color}
						onChange={(value) =>
							setAttributes({
								box_title_color: value,
							})
						}
					/>
					<Font_Control
						label={'Box Title Text'}
						show={['size', 'weight', 'fontStyle']}
						font={{
							value: 'Arial',
						}}
						onChangeFont={(value) => {
							console.log(value);
						}}
						size={{
							min: 14,
							max: 28,
							value: box_title_font_size,
						}}
						weight={{
							value: box_title_font_weight,
						}}
						onChangeWeight={(value) => {
							setAttributes({ box_title_font_weight: value });
						}}
						onChangeSize={(value) => {
							setAttributes({ box_title_font_size: value });
						}}
					/>
					<Color_Palette
						label={'Box Description Text Color'}
						value={box_description_color}
						onChange={(value) =>
							setAttributes({
								box_description_color: value,
							})
						}
					/>
					<Font_Control
						label={'Box Description Text'}
						show={['size', 'weight', 'fontStyle']}
						font={{
							value: 'Arial',
						}}
						onChangeFont={(value) => {
							console.log(value);
						}}
						size={{
							min: 14,
							max: 28,
							value: box_description_font_size,
						}}
						weight={{
							value: box_description_font_weight,
						}}
						onChangeWeight={(value) => {
							setAttributes({
								box_description_font_weight: value,
							});
						}}
						onChangeSize={(value) => {
							setAttributes({ box_description_font_size: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div
					style={{
						backgroundImage: bg_image_url
							? `url(${bg_image_url})`
							: '',
						backgroundPosition: 'center',
					}}
					className="split-hoz-multi-wrapper"
				>
					<PlainText
						className="split-hoz-multi-main-title"
						value={main_title}
						style={{
							color: main_title_color,
							fontSize: main_title_font_size,
							fontWeight: main_title_font_weight,
							width: container_width + '%',
							padding: '0 20px 0 20px',
						}}
						placeholder={__(
							'Headline',
							'older-people-gutenberg-blocks'
						)}
						onChange={(e) => {
							setAttributes({ main_title: e });
						}}
					/>
					<div
						style={{
							width: container_width + '%',
							padding: '0px 20px 0 20px',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						{data_array.map((item, index) => (
							<div
								style={{
									width: '60%',
									background: box_bg_color,
									alignSelf:
										index % 2 == 0
											? 'flex-start'
											: 'flex-end',
									margin: '20px 0 20px 0',
									padding: '20px',
									borderRadius: 10,
								}}
							>
								<PlainText
									className="split-hoz-multi-box-main-title"
									value={item.title}
									style={{
										color: box_title_color,
										fontSize: box_title_font_size,
										fontWeight: box_title_font_weight,
									}}
									placeholder={__(
										'Title',
										'older-people-gutenberg-blocks'
									)}
									onChange={(e) => {
										const newDataArray = [...data_array];
										newDataArray[index] = {
											...newDataArray[index],
											title: e,
										};
										setAttributes({
											data_array: newDataArray,
										});
									}}
								/>
								<PlainText
									className="split-hoz-multi-box-main-des"
									value={item.des}
									style={{
										color: box_description_color,
										fontSize: box_description_font_size,
										fontWeight: box_description_font_weight,
									}}
									placeholder={__(
										'Description',
										'older-people-gutenberg-blocks'
									)}
									onChange={(e) => {
										const newDataArray = [...data_array];
										newDataArray[index] = {
											...newDataArray[index],
											des: e,
										};
										setAttributes({
											data_array: newDataArray,
										});
									}}
								/>
							</div>
						))}
					</div>
					<Button
						isSecondary
						onClick={() => {
							setAttributes({
								data_array: [
									...data_array,
									{ title: '', des: '' },
								],
							});
						}}
					>
						Add Box +
					</Button>
				</div>
			</div>
		</Fragment>
	);
}
