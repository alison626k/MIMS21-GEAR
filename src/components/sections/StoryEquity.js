import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const StoryEquity = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      
    >
      <div className="container" style ={{paddingTop: '3vh',paddingBottom: '5vh'}}>
        <div className={innerClasses} >
          <div className={tilesClasses} >
            <div className="reveal-from-bottom"  >
                <div >
                  <h3 className="text-sm mb-0 invert-color" style ={{textAlign:'center',fontSize: '40pt' ,lineHeight:1.5}}>
                  That's not the only problem...
                  </h3>
                  <p className="text-sm mb-0 invert-color" style ={{textAlign:'center',fontSize: '20pt' ,lineHeight:1.5}}>
                  Besides EV drivers' struggling issue, if we take a look at the whole California, we can see there's more Gap!
                  </p>
              </div>
            </div>
          </div>

 
          </div>
          </div>
    </section>
  );
}

StoryEquity.propTypes = propTypes;
StoryEquity.defaultProps = defaultProps;

export default StoryEquity;