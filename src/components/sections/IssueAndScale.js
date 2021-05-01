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

const IssueAndScale = ({
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
      style={{height:'100vh'}}
    >
      <div className="container" style ={{paddingTop: '20vh'}}>
        <div className={innerClasses} >
          <div className={tilesClasses} >
            <div className="reveal-from-bottom"  >
                <div >
                  <h3 className="text-sm mb-0 invert-color" style ={{textAlign:'center',fontSize: '30pt' ,lineHeight:1.5}}>
                  EV drivers currently facing in charger issues. Now looking at the California scale, the whole picture become clear. The charger equity is imbalanced.
                  </h3>
              </div>
            </div>
          </div>

 
          </div>
          </div>
    </section>
  );
}

IssueAndScale.propTypes = propTypes;
IssueAndScale.defaultProps = defaultProps;

export default IssueAndScale;