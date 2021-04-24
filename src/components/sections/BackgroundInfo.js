import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import carBackgroundClear from '../../assets/images/carBackgroundClear.png';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const BackgroundInfo = ({
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
      style={{ 
        backgroundImage: `url(${carBackgroundClear})` ,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize:"cover",
      }}
    >
      <div  style={{height: 500}} >
      </div>

      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses} >
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0" style ={{textAlign:'center'}}>
                  California has set the goal of having 
                  <br></br>
                  <span className="text-color-error"style={{fontSize: '40pt', fontWeight:"bold",lineHeight:2 }}> 5 million </span>
                  <br></br>
                  Zero-Emission Vehicles (ZEVs) on the roads by 2030 and 250,000 electric vehicle charging stations by 2025. 
                  The new Executive Order requires all new car sales in California are required to be 100% zero emission by 2035.
                  1.5 million chargers are needed to support nearly 8 million ZEVs required under the new executive order.
                  </p>
                </div>
                <div className=" text-xs mt-32 mb-0 ">
                </div>
              </div>
            </div>
          </div>

          <div  style={{height: 800}} >
          </div>

        <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses} >
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <p className="text-sm mb-0" style ={{textAlign:'center'}}>
                The Electric Vehicles (EV) Industry is growing fast, 
                and the cost parity between EV and conventional Internal Combustion Engine (ICE) vehicles 
                is expected to happen around 
                <br></br>
                  <span className="text-color-error"style={{fontSize: '40pt', fontWeight:"bold",lineHeight:2 }}>  2028 </span>
                  <br></br>
                  So everything about EV should be great after 10 years from now.
                  </p>
                </div>
                <div className="text-xs mt-32 mb-0 ">
                </div>
              </div>
            </div>
          </div>

          <div  style={{height: 800}} >
          </div>

        <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses} >
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                <p className="text-sm mb-0" style ={{textAlign:'center'}}>
                California government is pushing on making EV more accessible for the general public. 
                According consumer surveys, after vehicle costs and battery range, 
                they think the availability of charging infrastructure is 
                <br></br>
                  <span className="text-color-error"style={{fontSize: '40pt', fontWeight:"bold",lineHeight:2 }}> the third barrier  </span>
                  <br></br>
                to EV penetration.
                  </p>
                </div>
                <div className="text-xs mt-32 mb-0 ">
              </div>
              </div>
            </div>
          </div>
          
          <div  style={{height: 400}} >
          </div>

          </div>
          </div>         
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

BackgroundInfo.propTypes = propTypes;
BackgroundInfo.defaultProps = defaultProps;

export default BackgroundInfo;