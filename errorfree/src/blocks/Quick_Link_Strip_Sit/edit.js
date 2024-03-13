/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	PlainText,
	MediaUpload,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	__experimentalGrid as Grid,
	Button,

} from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

import Range_Control from '../../components/Range_Control';
import Color_Palette from '../../components/Color_Palette';
import Font_Control from '../../components/Font_Control';

export default function Edit({ attributes, setAttributes }) {
	const {
		number_of_columns,
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

	useEffect(() => {
		if (data_array.length === 0) {
			change_data_array(number_of_columns);
		}
	}, []);

	const change_data_array = (number) => {
		const new_data_array = [];
		for (let i = 0; i < number; i++) {
			if (data_array[i]) {
				new_data_array.push(data_array[i]);
			} else {
				new_data_array.push({
					icon: '',
					title: `Title ${i + 1}`,
					link: '',
					description: `Description ${i + 1}`,
				});
			}
		}
		setAttributes({ data_array: new_data_array });
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'older-people-gutenberg-blocks')}
					initialOpen={true}
				>
					<Range_Control
						label={'Columns'}
						min={1}
						max={7}
						value={number_of_columns}
						onChange={(value) => {
							setAttributes({ number_of_columns: value });
							change_data_array(value);
						}}
					/>
					<Font_Control
						label={'Title Font'}
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
							value: title_font_size,
						}}
						weight={{
							value: title_font_weight,
						}}
						onChangeWeight={(value) => {
							setAttributes({ title_font_weight: value });
						}}
						onChangeSize={(value) => {
							setAttributes({ title_font_size: value });
						}}
					/>
					<Font_Control
						label={'Description Font'}
						show={['size', 'weight']}
						size={{
							min: 10,
							max: 22,
							value: description_font_size,
						}}
						weight={{
							value: description_font_weight,
						}}
						onChangeWeight={(value) => {
							setAttributes({ description_font_weight: value });
						}}
						onChangeSize={(value) => {
							setAttributes({ description_font_size: value });
						}}
					/>
					<Color_Palette
						label={'Background Color'}
						value={background_color}
						onChange={(value) =>
							setAttributes({ background_color: value })
						}
					/>
					<Color_Palette
						label={'Title Text Color'}
						value={text_color}
						onChange={(value) =>
							setAttributes({ text_color: value })
						}
					/>
					<Color_Palette
						label={'Description Text Color'}
						value={description_color}
						onChange={(value) =>
							setAttributes({ description_color: value })
						}
					/>
					<p className="custom__editor__label">
						{__('Box Links', 'older-people-gutenberg-blocks')}
					</p>
					{data_array.map((data, i) => (
						<div
							style={{
								marginBottom: 10,
								borderBottom: '1px solid #eee',
							}}
						>
							<TextControl
								label=""
								value={data.link}
								placeholder={__(
									`Link ${i + 1}`,
									'older-people-gutenberg-blocks'
								)}
								onChange={(e) => {
									const dataCopy = [...data_array];
									dataCopy[i].link = e;
									setAttributes({
										data_array: dataCopy,
									});
								}}
								type="link"
							/>
						</div>
					))}
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div style={{ background: background_color }}>
					<Grid
						align="center"
						style={{ padding: 20, width: 'auto' }}
						columns={number_of_columns + 1}
					>
						<PlainText
							style={{
								background: 'transparent',
								fontSize: title_font_size,
								fontWeight: title_font_weight,
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
						{data_array.length > 0 &&
							data_array.map((data, i) => (
								<div className="quick-link-main-box">
									<div className="quick-link-icon-component">
										{data.icon ? (
											<div className="quick-link-icon-container-child">
												<img
													src={data.icon}
													style={{
														height: 25,
														width: 25,
														marginBottom: 10,
													}}
												/>
												<MediaUpload
													onSelect={(media) => {
														const dataCopy = [
															...data_array,
														];
														dataCopy[i].icon =
															media.url;
														setAttributes({
															data_array:
																dataCopy,
														});
														setAttributes({
															imageUrl: media.url,
														});
													}}
													allowedTypes={['image']}
													value={data.icon}
													render={({ open }) => (
														<Button
															onClick={open}
															isSecondary
														>
															{__('Change')}
														</Button>
													)}
												/>
											</div>
										) : (
											<MediaPlaceholder
												icon="format-image"
												labels={{ title: __('Media') }}
												className=""
												onSelect={(media) => {
													const dataCopy = [
														...data_array,
													];
													dataCopy[i].icon =
														media.url;
													setAttributes({
														data_array: dataCopy,
													});
													setAttributes({
														imageUrl: media.url,
													});
												}}
												accept="image/*"
												allowedTypes={['image']}
											/>
										)}
									</div>
									<TextControl
										label=""
										value={data.title}
										placeholder={__(
											`Title ${i + 1}`,
											'older-people-gutenberg-blocks'
										)}
										onChange={(e) => {
											const dataCopy = [...data_array];
											dataCopy[i].title = e;
											setAttributes({
												data_array: dataCopy,
											});
										}}
										style={{
											marginBottom: 0,
											fontSize: title_font_size,
											fontWeight: title_font_weight,
										}}
										type="text"
									/>
									<TextControl
										label=""
										value={data.description}
										style={{
											fontSize: description_font_size,
											fontWeight: description_font_weight,
										}}
										placeholder={__(
											`Description ${i + 1}`,
											'older-people-gutenberg-blocks'
										)}
										onChange={(e) => {
											const dataCopy = [...data_array];
											dataCopy[i].description = e;
											setAttributes({
												data_array: dataCopy,
											});
										}}
										type="text"
									/>
								</div>
							))}
					</Grid>
				</div>
			</div>
		</Fragment>
	);
}
