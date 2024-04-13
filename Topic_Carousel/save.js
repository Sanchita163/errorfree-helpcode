import React from 'react';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	RangeControl,
	TextControl,
} from '@wordpress/components';

export default function save({ attributes }) {
	const {
		boxArray,
		boxColor,
		titleColor,
		titleWeight,
		titleFontSize,
		desColor,
		desWeight,
		desFontSize,
		buttonBGColor,
		buttonTextColor,
		buttonTextWeight,
		buttonTextFontSize,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div class="topic-carousel-main">
				<div class="topic-carousel-container">
					{boxArray.map((item, index) => {
						return (
							<div
								class="topic-carousel-box"
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'column',
									padding: 20,
									borderRadius: 20,
									backgroundColor: boxColor,
									height: 'fit-content',
								}}
							>
								{item.image && (
									<div className="">
										<img
											src={item.image}
											style={{
												height: 200,
												width: '100%',
												marginBottom: 10,
												objectFit: 'fill',
												borderTopLeftRadius: 15,
												borderTopRightRadius: 15,
											}}
										/>
									</div>
								)}
								<div
									className=""
									style={{
										color: titleColor,
										width: '100%',
										fontSize: titleFontSize,
										fontWeight: titleWeight,
										marginTop: 20,
										backgroundColor: 'transparent',
										textAlign: 'center',
									}}
								>
									{item.title}
								</div>
								<div
									className=""
									style={{
										color: desColor,
										width: '100%',
										fontSize: desFontSize,
										fontWeight: desWeight,
										marginTop: 10,
										backgroundColor: 'transparent',
										textAlign: 'center',
									}}
								>
									{item.des}
								</div>
								<a
									href={item.buttonLink}
									style={{
										padding: '10px 30px',
										borderRadius: 100,
										backgroundColor: buttonBGColor,
										marginTop: 20,
										textDecorationLine: 'none',
									}}
								>
									<div
										className=""
										style={{
											color: buttonTextColor,
											width: '100%',
											fontSize: buttonTextFontSize,
											fontWeight: buttonTextWeight,
											backgroundColor: 'transparent',
											textAlign: 'center',
										}}
									>
										{item.buttomText}
									</div>
								</a>
							</div>
						);
					})}
				</div>
				<div class="topic-carousel-prev topic-carousel-button">{'<'}</div>
				<div class="topic-carousel-next topic-carousel-button">{'>'}</div>
			</div>
		</div>
	);
}
