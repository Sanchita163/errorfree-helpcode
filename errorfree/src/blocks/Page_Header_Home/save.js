import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { imageUrl, imageHeight, imageWidth, borderRadius } = attributes;
    const blockProps = useBlockProps.save();
    
    // Manually extract the className from blockProps
    const className = blockProps.className;

    return (
        <div className={className}> {/* Assign className directly */}
            <div className="banner-wrapper">
                <div className="banner-container">
                    <div className="text-content">
                        <InnerBlocks.Content />
                    </div>
                    <div className="image-container">
                        { imageUrl && (
                            <img 
                                src={ imageUrl } 
                                style={{ 
                                    height: imageHeight ? `${imageHeight}px` : 'auto', 
                                    width:imageWidth ? `${imageWidth}px` : 'auto',  
                                    borderRadius: borderRadius ? `${borderRadius}px` : '0'
                                }} 
                                alt="" 
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// imageWidth ? `${imageWidth}px` : 'auto',
