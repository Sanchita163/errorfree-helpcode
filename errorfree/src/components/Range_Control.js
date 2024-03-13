import { __ } from '@wordpress/i18n';
import { RangeControl } from '@wordpress/components';

export default function Range_Control({ onChange, value, min, max, label }) {
    return (
        <RangeControl
            label={label}
            value={value}
            onChange={(value) => onChange(value)}
            min={min}
            max={max}
        />
    );
}
