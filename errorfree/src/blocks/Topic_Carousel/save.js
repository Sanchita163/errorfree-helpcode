import React from 'react';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { SlArrowLeftCircle,SlArrowRightCircle} from "react-icons/sl"

export default function save({ attributes }) {
	const {
		// container_width,
		mainTitle,
		mainTitleColor,
		mainTitleWeight,
		mainTitleFontSize,
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
				<div
					className="main-title"
					style={{
						color: mainTitleColor,
						fontSize: mainTitleFontSize,
						fontWeight: mainTitleWeight,
						padding: '0 20px 0 110px',
						margin: '30px 0px',
					}}
				>
					{mainTitle}
				</div>

				<div
					class="topic-carousel-container"
					style={{
						// padding: '0px 100px',
						// width: container_width + '%',
					}}
				>
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
									// height:"75vh",
									marginBottom: '20px',
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
				<div class="topic-carousel-prev  topic-carousel-button"><SlArrowLeftCircle /></div>
				<div class="topic-carousel-next topic-carousel-button"><SlArrowRightCircle /></div>
			</div>
		
		</div>
	);
}
