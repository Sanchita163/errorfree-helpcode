import { __ } from '@wordpress/i18n';
import {
	RangeControl,
	// __experimentalRadio as Radio,
	// __experimentalRadioGroup as RadioGroup,
	RadioControl,
} from '@wordpress/components';

export default function Font_Control({
	onChangeSize,
	label,
	size,
	show,
	weight,
	onChangeWeight,
}) {
	return (
		<>
			<p className="custom__editor__label">
				{__(label, 'older-people-gutenberg-blocks')}
			</p>
			{show.includes('size') && (
				<RangeControl
					label={'Size'}
					value={size.value}
					onChange={(value) => onChangeSize(value)}
					min={size.min}
					max={size.max}
				/>
			)}
			{show.includes('weight') && (
				<RangeControl
					label={'Weight'}
					value={weight.value}
					step={100}
					onChange={(value) => onChangeWeight(value)}
					min={100}
					max={900}
				/>
			)}
		</>
	);
}
