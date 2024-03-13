import { __ } from '@wordpress/i18n';
import { ColorPalette } from '@wordpress/components';
import COLORS from '../utilities/colors_palette';

export default function Color_Palette({ onChange, value, label }) {
    return (
        <>
            <p className="custom__editor__label">
                {__(label, 'older-people-gutenberg-blocks')}
            </p>
            <ColorPalette
                colors={COLORS}
                value={value}
                onChange={(newColor) =>
                    onChange(newColor)
                }
            />
        </>
    );
}
