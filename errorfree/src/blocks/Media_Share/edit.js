import { useState } from '@wordpress/element';
import { PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

const Edit = ({ attributes, setAttributes }) => {
    const { url } = attributes;

    return (
        <>
            <InspectorControls>
                <PanelBody title="Video Settings">
                    <TextControl
                        label="Video URL"
                        value={url}
                        onChange={(url) => setAttributes({ url })}
                        placeholder="Enter Vimeo or YouTube URL"
                    />
                </PanelBody>
            </InspectorControls>
            <div>
                {/* Preview Component or Placeholder */}
                <p>Video URL: {url}</p>
            </div>
        </>
    );
};

export default Edit;
