import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const {
    title,
    titleColor,
    titleFontSize,
    rightColumnTitle, // Added right column title attribute
    rightColumnTitleColor, // Added right column title color attribute
    rightColumnTitleFontSize, // Added right column title font size attribute
    paragraph,
    paragraphColor,
    paragraphFontSize,
    links,
    leftColumnBgColor,
    rightColumnBgColor,
    rightColumnTextColor,
    rightColumnTextSize,
    innerContainerWidth, // Added inner container width attribute
  } = attributes;

  return (
    <div {...useBlockProps.save({ className: 'page-intro-quick-links' })}>
      <div className="inner-container" style={{ width: `80%`, margin: '0 auto' }}>
        <div className="left-column" style={{ backgroundColor: leftColumnBgColor, padding: '20px', float: 'left', width: '50%', marginTop: '-10px' }}>
          <h2 style={{ color: titleColor, fontSize: titleFontSize + 'px' }}>{title}</h2>
          <p style={{ color: paragraphColor, fontSize: paragraphFontSize + 'px' }}>{paragraph}</p>
          <InnerBlocks.Content />
        </div>
        <div className="right-column" style={{ backgroundColor: rightColumnBgColor, padding: '20px', color: rightColumnTextColor, float: 'right', width: '35%' }}>
          {/* Include right column title */}
          <h3 style={{ color: rightColumnTitleColor, fontSize: rightColumnTitleFontSize + 'px', marginBottom: '20px' }}>{rightColumnTitle}</h3>
          <ul className="links-container" style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  style={{
                    textDecoration: 'none',
                    color: rightColumnTextColor,
                    fontSize: rightColumnTextSize + 'px',
                    marginBottom: '10px',
                    display: 'block',
                  }}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
