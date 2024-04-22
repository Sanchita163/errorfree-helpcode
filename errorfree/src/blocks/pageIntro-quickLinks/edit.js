import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  InspectorControls,
  RichText,
  URLInputButton,
  PanelColorSettings,
  InnerBlocks
} from '@wordpress/block-editor';
import {
  PanelBody,
  RangeControl,
  TextControl,
  Button
} from '@wordpress/components';
import { Fragment, useEffect } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const {
    title = 'Daily Management',
    titleColor = '#080E7C',
    titleFontSize,
    rightColumnTitle, // Added right column title attribute
    rightColumnTitleColor, // Added right column title color attribute
    rightColumnTitleFontSize, // Added right column title font size attribute
    paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    paragraphColor,
    paragraphFontSize,
    links,
    leftColumnBgColor,
    rightColumnBgColor = '#CECDF0',
    rightColumnTextColor = '#080E7C',
    rightColumnTextSize,
    buttonBgColor = '#080E7C',
  } = attributes;

  useEffect(() => {
    if (!links || links.length === 0) {
      setAttributes({
        links: [
          { text: 'WordPress Button', url: '#' }
        ]
      });
    }
  }, []);

  const updateLink = (newAttributes, index) => {
    const updatedLinks = [...links];
    updatedLinks[index] = { ...updatedLinks[index], ...newAttributes };
    setAttributes({ links: updatedLinks });
  };

  const scrollToBlock = (anchorName) => {
    const block = document.getElementById(anchorName);
    if (block) {
      block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__('Typography', 'text-domain')} initialOpen={true}>
          <RangeControl
            label={__('Title Font Size', 'text-domain')}
            value={titleFontSize}
            onChange={(value) => setAttributes({ titleFontSize: value })}
            min={14}
            max={100}
          />
          <RangeControl
            label={__('Paragraph Font Size', 'text-domain')}
            value={paragraphFontSize}
            onChange={(value) => setAttributes({ paragraphFontSize: value })}
            min={12}
            max={100}
          />
          <RangeControl
            label={__('Right Column Text Size', 'text-domain')}
            value={rightColumnTextSize}
            onChange={(value) => setAttributes({ rightColumnTextSize: value })}
            min={12}
            max={100}
          />
          {/* Add range control for right column title font size */}
          <RangeControl
            label={__('Right Column Title Font Size', 'text-domain')}
            value={rightColumnTitleFontSize}
            onChange={(value) => setAttributes({ rightColumnTitleFontSize: value })}
            min={14}
            max={100}
          />
        </PanelBody>
        <PanelBody title={__('Color Settings', 'text-domain')} initialOpen={true}>
          {/* Include panel color settings for right column title color */}
          <PanelColorSettings
            title={__('Title Color', 'text-domain')}
            initialOpen={true}
            colorSettings={[
              {
                value: titleColor,
                onChange: (color) => setAttributes({ titleColor: color }),
                label: __('Title Color', 'text-domain'),
              },
              {
                value: paragraphColor,
                onChange: (color) => setAttributes({ paragraphColor: color }),
                label: __('Paragraph Color', 'text-domain'),
              },
              {
                value: rightColumnTitleColor,
                onChange: (color) => setAttributes({ rightColumnTitleColor: color }),
                label: __('Right Column Title Color', 'text-domain'),
              },
              {
                value: rightColumnBgColor,
                onChange: (color) => setAttributes({ rightColumnBgColor: color }),
                label: __('Right Column Background Color', 'text-domain'),
              },
              {
                value: rightColumnTextColor,
                onChange: (color) => setAttributes({ rightColumnTextColor: color }),
                label: __('Right Column Text Color', 'text-domain'),
              },
              {
                value: buttonBgColor,
                onChange: (color) => setAttributes({ buttonBgColor: color }),
                label: __('Button Background Color', 'text-domain'),
              }
            ]}
          />
        </PanelBody>
        <PanelBody title={__('Right Column Links', 'text-domain')} initialOpen={true}>
          {links.map((link, index) => (
            <Fragment key={index}>
              <TextControl
                label={__('Link Text', 'text-domain')}
                value={link.text}
                onChange={(text) => updateLink({ text }, index)}
              />
              <URLInputButton
                label={__('URL', 'text-domain')}
                url={link.url}
                onChange={(url) => updateLink({ url }, index)}
              />
              <Button
                isSecondary
                onClick={() => {
                  const updatedLinks = [...links];
                  updatedLinks.splice(index, 1);
                  setAttributes({ links: updatedLinks });
                }}
                style={{ backgroundColor: buttonBgColor, color:'#fff' }}
              >
                {__('Remove Link', 'text-domain')}
              </Button>
            </Fragment>
          ))}
          <Button
            isSecondary
            onClick={() => setAttributes({ links: [...links, { text: 'New Link', url: '#' }] })}
            style={{ backgroundColor: buttonBgColor, color:'#fff' }}
          >
            {__('Add Link', 'text-domain')}
          </Button>
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()} style={{ padding: '25px 0 25px 0' }}>
        <div className="inner-container" style={{  margin: '0 auto' }}>
          <div className="left-column" style={{ backgroundColor: leftColumnBgColor, float: 'left' }}>
            <RichText
              tagName="h2"
              value={title}
              onChange={(value) => setAttributes({ title: value })}
              placeholder={__('Title...', 'text-domain')}
              style={{ color: titleColor, fontSize: `${titleFontSize}px` }}
            />
            <textarea // Use textarea for paragraph
              value={paragraph}
              onChange={(event) => setAttributes({ paragraph: event.target.value })}
              placeholder={__('Paragraph...', 'text-domain')}
              style={{
                color: paragraphColor,
                fontSize: `${paragraphFontSize}px`,
                width: '100%', // Ensure full width
                minHeight: '100px', // Set minimum height to prevent text cutoff
                resize: 'vertical', // Allow vertical resizing
              }}
            />
            <InnerBlocks
              allowedBlocks={['core/button']}
              template={[['core/button', { className: 'custom-button-class' }]]}
            />
          </div>
          <div className="right-column" style={{ backgroundColor: rightColumnBgColor, color: rightColumnTextColor, fontSize: `${rightColumnTextSize}px`, display: 'flow-root'  }}>
            {/* Include right column title */}
            <RichText
              tagName="h3"
              value={rightColumnTitle}
              onChange={(value) => setAttributes({ rightColumnTitle: value })}
              placeholder={__('Right Column Title...', 'text-domain')}
              style={{ color: rightColumnTitleColor, fontSize: `${rightColumnTitleFontSize}px` }}
            />
            {/* Render links in the right column */}
            {links.map((link, index) => (
              <Fragment key={index}>
                <a
                  href={link.url}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToBlock(link.url.substring(1));
                  }}
                  style={{
                    display: 'block',
                    marginBottom: '10px',
                    textDecoration: 'none',
                    color: rightColumnTextColor,
                    fontSize: `${rightColumnTextSize}px`
                  }}
                >
                  {link.text}
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
