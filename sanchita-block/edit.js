import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck, RichText, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, TextControl, ColorPicker, Button, SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const Edit = (props) => {
    const { attributes, setAttributes } = props;
    const { accordions, activeAccordion, titleColor, titleFontSize, titleFontWeight, mediaTitleColor, mediaTitleFontSize, mediaTitleFontWeight, mediaDescriptionFontSize, mediaDescriptionFontWeight, mediaDescriptionColor, rightColumnBgColor } = attributes;
    const [activeIndex, setActiveIndex] = useState(activeAccordion);

    const blockProps = useBlockProps();

    const onChangeAccordionTitle = (index, newTitle) => {
        const newAccordions = [...accordions];
        newAccordions[index].title = newTitle;
        setAttributes({ accordions: newAccordions });
    };

    const onChangeAccordionContent = (index, newContent) => {
        const newAccordions = [...accordions];
        newAccordions[index].content = newContent;
        setAttributes({ accordions: newAccordions });
    };

    const onChangeMediaType = (index, mediaIndex, newType) => {
        const newAccordions = [...accordions];
        newAccordions[index].media[mediaIndex] = { ...newAccordions[index].media[mediaIndex], type: newType, url: '' };
        setAttributes({ accordions: newAccordions });
    };

    const onChangeMediaUrl = (index, mediaIndex, newUrl) => {
        const newAccordions = [...accordions];
        newAccordions[index].media[mediaIndex] = { ...newAccordions[index].media[mediaIndex], url: newUrl };
        setAttributes({ accordions: newAccordions });
    };

    const onChangeMediaTitle = (index, mediaIndex, newTitle) => {
        const newAccordions = [...accordions];
        newAccordions[index].media[mediaIndex] = { ...newAccordions[index].media[mediaIndex], title: newTitle };
        setAttributes({ accordions: newAccordions });
    };

    const onChangeMediaDescription = (index, mediaIndex, newDescription) => {
        const newAccordions = [...accordions];
        newAccordions[index].media[mediaIndex] = { ...newAccordions[index].media[mediaIndex], description: newDescription };
        setAttributes({ accordions: newAccordions });
    };

    const addAccordion = () => {
        const newAccordions = [...accordions, { title: `Accordion ${accordions.length + 1}`, media: [], content: '' }];
        setAttributes({ accordions: newAccordions });
    };

    const removeAccordion = (index) => {
        const newAccordions = accordions.filter((_, i) => i !== index);
        setAttributes({ accordions: newAccordions });
        if (activeIndex >= newAccordions.length) {
            setActiveIndex(newAccordions.length - 1);
        }
    };

    const addMedia = (index) => {
        const newAccordions = [...accordions];
        newAccordions[index].media.push({ type: 'video', url: '', title: '', description: '' });
        setAttributes({ accordions: newAccordions });
    };

    const removeMedia = (accordionIndex, mediaIndex) => {
        const newAccordions = [...accordions];
        newAccordions[accordionIndex].media = newAccordions[accordionIndex].media.filter((_, i) => i !== mediaIndex);
        setAttributes({ accordions: newAccordions });
    };

    const onChangeTitleColor = (newColor) => {
        setAttributes({ titleColor: newColor });
    };

    const onChangeTitleFontSize = (newFontSize) => {
        setAttributes({ titleFontSize: newFontSize });
    };

    const onChangeTitleFontWeight = (newWeight) => {
        setAttributes({ titleFontWeight: newWeight });
    };

    const onChangeMediaTitleColor = (newColor) => {
        setAttributes({ mediaTitleColor: newColor });
    };

    const onChangeMediaTitleFontSize = (newFontSize) => {
        setAttributes({ mediaTitleFontSize: newFontSize });
    };

    const onChangeMediaTitleFontWeight = (newWeight) => {
        setAttributes({ mediaTitleFontWeight: newWeight });
    };

    const onChangeMediaDescriptionFontSize = (newFontSize) => {
        setAttributes({ mediaDescriptionFontSize: newFontSize });
    };

    const onChangeMediaDescriptionFontWeight = (newWeight) => {
        setAttributes({ mediaDescriptionFontWeight: newWeight });
    };

    const onChangeMediaDescriptionColor = (newColor) => {
        setAttributes({ mediaDescriptionColor: newColor });
    };

    const onChangeRightColumnBgColor = (newColor) => {
        setAttributes({ rightColumnBgColor: newColor });
    };

    const DEFAULT_TEMPLATE = [['core/heading', { className: 'custom-heading-class' }]];

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title="Accordion Title Settings">
                    <TextControl
                        label="Font Size"
                        value={titleFontSize}
                        onChange={onChangeTitleFontSize}
                    />
                    <SelectControl
                        label="Font Weight"
                        value={titleFontWeight}
                        options={[
                            { label: '200', value: '200' },
                            { label: '300', value: '300' },
                            { label: '400', value: '400' },
                            { label: '600', value: '600' },
                            { label: '800', value: '800' },
                        ]}
                        onChange={onChangeTitleFontWeight}
                    />
                    <ColorPicker
                        label="Title Color"
                        color={titleColor}
                        onChange={onChangeTitleColor}
                    />
                </PanelBody>
                <PanelBody title="Media Title Settings">
                    <TextControl
                        label="Font Size"
                        value={mediaTitleFontSize}
                        onChange={onChangeMediaTitleFontSize}
                    />
                    <SelectControl
                        label="Font Weight"
                        value={mediaTitleFontWeight}
                        options={[
                            { label: '200', value: '200' },
                            { label: '300', value: '300' },
                            { label: '400', value: '400' },
                            { label: '600', value: '600' },
                            { label: '800', value: '800' },
                        ]}
                        onChange={onChangeMediaTitleFontWeight}
                    />
                    <ColorPicker
                        label="Title Color"
                        color={mediaTitleColor}
                        onChange={onChangeMediaTitleColor}
                    />
                </PanelBody>
                <PanelBody title="Media Description Settings">
                    <TextControl
                        label="Font Size"
                        value={mediaDescriptionFontSize}
                        onChange={onChangeMediaDescriptionFontSize}
                    />
                    <SelectControl
                        label="Font Weight"
                        value={mediaDescriptionFontWeight}
                        options={[
                            { label: '200', value: '200' },
                            { label: '300', value: '300' },
                            { label: '400', value: '400' },
                            { label: '600', value: '600' },
                            { label: '800', value: '800' },
                        ]}
                        onChange={onChangeMediaDescriptionFontWeight}
                    />
                    <ColorPicker
                        label="Description Color"
                        color={mediaDescriptionColor}
                        onChange={onChangeMediaDescriptionColor}
                    />
                </PanelBody>
                <PanelBody title="Right Column Background Color">
                    <ColorPicker
                        label="Background Color"
                        color={rightColumnBgColor}
                        onChange={onChangeRightColumnBgColor}
                    />
                </PanelBody>
            </InspectorControls>
            <div className="accordion-columns">
                <div className="accordion-wrapper">
                    {accordions.map((accordion, index) => (
                        <div
                            key={index}
                            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            style={{ color: titleColor, fontSize: titleFontSize, fontWeight: titleFontWeight }}
                        >
                            <RichText
                                tagName="h3"
                                value={accordion.title}
                                onChange={(newTitle) => onChangeAccordionTitle(index, newTitle)}
                                placeholder="Accordion Title"
                            />
                            <Button isDestructive onClick={() => removeAccordion(index)}>
                                Remove Accordion
                            </Button>
                        </div>
                    ))}
                    <Button isSecondary onClick={addAccordion}>
                        Add Accordion
                    </Button>
                </div>
                <div className="right-wrapper" style={{ backgroundColor: rightColumnBgColor }}>
                    {accordions[activeIndex] && (
                        <div className="media-columns active">
                            {accordions[activeIndex].media.map((media, mediaIndex) => (
                                <div key={mediaIndex} className="media-item">
                                    <div className="media-left">
                                        {media.type === 'video' ? (
                                            <iframe
                                                src={`https://player.vimeo.com/video/${media.url.split('/').pop()}`}
                                                width="100%"
                                                height="180"
                                                frameBorder="0"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen
                                                title={`Vimeo Video ${mediaIndex + 1}`}
                                            ></iframe>
                                        ) : (
                                            <a href={media.url} download>
                                                <svg
                                                    width="190"
                                                    height="180"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke="#dd2e2e"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                                    />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <div className="media-right">
                                        <InnerBlocks
                                            allowedBlocks={['core/heading']}
                                            template={DEFAULT_TEMPLATE}
                                            templateLock={false}
                                        />
                                        <TextControl
                                            label={`Description for Media ${mediaIndex + 1}`}
                                            value={media.description}
                                            onChange={(newDescription) => onChangeMediaDescription(activeIndex, mediaIndex, newDescription)}
                                            style={{ fontSize: mediaDescriptionFontSize, color: mediaDescriptionColor, fontWeight: mediaDescriptionFontWeight }}
                                        />
                                    </div>
                                    <div className="media-controls">
                                        <SelectControl
                                            label={`Media Type`}
                                            value={media.type}
                                            options={[
                                                { label: 'Vimeo Video', value: 'video' },
                                                { label: 'PDF', value: 'pdf' }
                                            ]}
                                            onChange={(newType) => onChangeMediaType(activeIndex, mediaIndex, newType)}
                                        />
                                        {media.type === 'video' ? (
                                            <TextControl
                                                label={`Vimeo URL`}
                                                value={media.url}
                                                onChange={(newUrl) => onChangeMediaUrl(activeIndex, mediaIndex, newUrl)}
                                            />
                                        ) : (
                                            <MediaUploadCheck>
                                                <MediaUpload
                                                    onSelect={(media) => onChangeMediaUrl(activeIndex, mediaIndex, media.url)}
                                                    allowedTypes={['application/pdf']}
                                                    render={({ open }) => (
                                                        <Button onClick={open} isPrimary>
                                                            {media.url ? 'Replace PDF' : 'Upload PDF'}
                                                        </Button>
                                                    )}
                                                />
                                            </MediaUploadCheck>
                                        )}
                                        <Button isDestructive onClick={() => removeMedia(activeIndex, mediaIndex)}>
                                            Remove Media
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            <Button isSecondary onClick={() => addMedia(activeIndex)}>
                                Add Media
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Edit;
