/* eslint-disable react/jsx-key */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	PlainText,
	MediaUpload,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import {
	PanelBody,
	__experimentalGrid as Grid,
	Button,
} from '@wordpress/components';

const { Fragment } = wp.element;

import Range_Control from '../../components/Range_Control';
import Color_Palette from '../../components/Color_Palette';
import Font_Control from '../../components/Font_Control';
// eslint-disable-next-line no-duplicate-imports
import { TextControl, TextareaControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const {
		number_of_columns,
		data_array,
		grid_container_background_color,
		image_height,
		main_title,
		main_title_text_color,
		main_title_font_size,
		main_title_font_weight,
		main_container_background_color,
		sub_title_text_color,
		sub_title_font_size,
		sub_title_font_weight,
		description_text_color,
		description_font_size,
		description_font_weight,
		button_background_color,
		button_text_color,
		button_text_font_size,
		button_text_font_weight,
		container_width,
		button_link,
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
					image: '',
					title: `Title ${i + 1}`,
					buttonLink: '',
					description: `Description ${i + 1}`,
					buttonText: `ButtonText ${i + 1}`,
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
					{/* columns options */}
					<Range_Control
						label={'Countain Width'}
						min={0}
						max={100}
						value={container_width}
						onChange={(value) => {
							setAttributes({ container_width: value });
						}}
					/>
					{/* columns options */}
					<Range_Control
						label={'Columns'}
						min={2}
						max={4}
						value={number_of_columns}
						onChange={(value) => {
							setAttributes({ number_of_columns: value });
							change_data_array(value);
						}}
					/>

					{/* image height  */}
					<Range_Control
						label={'Iamge Height'}
						min={250}
						max={700}
						value={image_height}
						onChange={(value) => {
							setAttributes({ image_height: value });
						}}
					/>
					{/* grid container bg options */}
					<Color_Palette
						label={'Grid Container Background Color'}
						value={grid_container_background_color}
						onChange={(value) =>
							setAttributes({
								grid_container_background_color: value,
							})
						}
					/>

					{/* main title options */}
					<Color_Palette
						label={'Main Title Text Color'}
						value={main_title_text_color}
						onChange={(value) =>
							setAttributes({
								main_title_text_color: value,
							})
						}
					/>
					<Font_Control
						label={'Main Title Font'}
						show={['size', 'weight', 'fontStyle']}
						font={{
							value: 'Arial',
						}}
						onChangeFont={(value) => {
							console.log(value);
						}}
						size={{
							min: 16,
							max: 30,
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
						label={'main Container Background Color'}
						value={main_container_background_color}
						onChange={(value) =>
							setAttributes({
								main_container_background_color: value,
							})
						}
					/>
					{/* sub title options */}

					<Color_Palette
						label={'Sub Title Text Color'}
						value={sub_title_text_color}
						onChange={(value) =>
							setAttributes({
								sub_title_text_color: value,
							})
						}
					/>
					<Font_Control
						label={'Sub Title Font'}
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

					{/* description options  */}

					<Color_Palette
						label={'Description Title Text Color'}
						value={description_text_color}
						onChange={(value) =>
							setAttributes({
								description_text_color: value,
							})
						}
					/>
					<Font_Control
						label={'Description Title Font'}
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

					{/* button options */}

					<Color_Palette
						label={'Button Background Color'}
						value={button_background_color}
						onChange={(value) =>
							setAttributes({
								button_background_color: value,
							})
						}
					/>

					<Color_Palette
						label={'Button Text Color'}
						value={button_text_color}
						onChange={(value) =>
							setAttributes({
								button_text_color: value,
							})
						}
					/>

					<Font_Control
						label={'Button Text Font'}
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
							value: button_text_font_size,
						}}
						weight={{
							value: button_text_font_weight,
						}}
						onChangeWeight={(value) => {
							setAttributes({ button_text_font_weight: value });
						}}
						onChangeSize={(value) => {
							setAttributes({ button_text_font_size: value });
						}}
					/>

					<p className="custom__editor__label">
						{__('Button Links', 'older-people-gutenberg-blocks')}
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
								value={data.buttonLink}
								placeholder={__(
									`ButtonLink ${i + 1}`,
									'older-people-gutenberg-blocks'
								)}
								onChange={(e) => {
									const dataCopy = [...data_array];
									dataCopy[i].buttonLink = e;
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
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						background: grid_container_background_color,
					}}
				>
					<div style={{ width: container_width + '%' }}>
						<PlainText
							style={{
								color: main_title_text_color,
								fontSize: main_title_font_size,
								fontWeight: main_title_font_weight,
								background: 'transparent',
								margin: '20px 20px 0 20px',
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
						<Grid
							align="center"
							style={{
								padding: '20px',
							}}
							columns={number_of_columns}
						>
							{data_array.length > 0 &&
								data_array.map((data, i) => (
									<div
										className="x-col-card-image-main-container"
										style={{
											background:
												main_container_background_color,
											border: '2px solid ',
											borderRadius: '11px',
										}}
									>
										<div
											className="x-col-card-image-image-component"
											style={{
												border: '2px solid ',
												borderRadius: '11px',
											}}
										>
											{data.image ? (
												<div className="x-col-card-image-image-container-child">
													<img
														src={data.image}
														style={{
															maxWidth: "100%",
															height:image_height,
															objectFit:"cover",
														}}
													/>
													<MediaUpload
														onSelect={(media) => {
															const dataCopy = [
																...data_array,
															];
															dataCopy[i].image =
																media.url;
															setAttributes({
																data_array:
																	dataCopy,
															});
															setAttributes({
																imageUrl:
																	media.url,
															});
														}}
														allowedTypes={['image']}
														value={data.image}
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
													image="format-image"
													labels={{
														title: __('Media'),
													}}
													className=""
													onSelect={(media) => {
														const dataCopy = [
															...data_array,
														];
														dataCopy[i].image =
															media.url;
														setAttributes({
															data_array:
																dataCopy,
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
										<div
											className="x-col-card-image-text-container"
											style={{
												// marginRight: '30px',
												padding: '15px',
											}}
										>
											<TextControl
												label=""
												value={data.title}
												// eslint-disable-next-line @wordpress/i18n-no-variables
												placeholder={__(
													`Title ${i + 1}`,
													'older-people-gutenberg-blocks'
												)}
												onChange={(e) => {
													const dataCopy = [
														...data_array,
													];
													dataCopy[i].title = e;
													setAttributes({
														data_array: dataCopy,
													});
												}}
												style={{
													marginBottom: 0,
													color: sub_title_text_color,
													background: 'transparent',
													fontSize:
														sub_title_font_size,
													fontWeight:
														sub_title_font_weight,
												}}
												type="text"
											/>
											<TextareaControl
												label=""
												value={data.description}
												style={{
													background: 'transparent',
													color: description_text_color,
													fontSize:
														description_font_size,
													fontWeight:
														description_font_weight,
												}}
												// eslint-disable-next-line @wordpress/i18n-no-variables
												placeholder={__(
													`Description ${i + 1}`,
													'older-people-gutenberg-blocks'
												)}
												onChange={(e) => {
													const dataCopy = [
														...data_array,
													];
													dataCopy[i].description = e;
													setAttributes({
														data_array: dataCopy,
													});
												}}
												type="text"
											/>

											<div
												className="x-col-card-image-button"
												style={{
													backgroundColor:
														button_background_color,
												}}
											>
												<TextControl
													className="x-col-card-image-button-text"
													label=""
													value={data.buttonText}
													placeholder={__(
														`ButtonText ${i + 1}`,
														'older-people-gutenberg-blocks'
													)}
													onChange={(e) => {
														const dataCopy = [
															...data_array,
														];
														dataCopy[i].buttonText =
															e;
														setAttributes({
															data_array:
																dataCopy,
														});
													}}
													type="text"
													style={{
														background:
															'transparent',
														fontSize:
															button_text_font_size,
														fontWeight:
															button_text_font_weight,
													}}
												/>
											</div>
										</div>
									</div>
								))}
						</Grid>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
