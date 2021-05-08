import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import carBackgroundClear from '../../assets/images/carBackgroundClear.png';
import ezgif from '../../assets/images/ezgif.png';

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
        backgroundImage: `url(${ezgif})` ,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize:"cover",
      }}
    >
      <div  style={{height: 200}} >
      </div>

      <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses} >
            <div className="tiles-item reveal-from-bottom" >
              <div className="tiles-item-inner" 
              style={{borderStyle:'solid',borderRadius:'25px', borderColor:'#96bb7c',borderWidth:'6px'}}>
                <div className="testimonial-item-content" >
                  <p className="text-s mb-0" style ={{textAlign:'center'}}>
                  Electric Vehicles (EVs) are trending in recent years not only because of their cool looks, but also their environmental benefits and lower operational costs.
                   California is leading the transition to electrifying its vehicles to fight against climate change and decarbonize the economy.
                  <br></br>
                  <br></br>
                   The government set <span className="text-color-error"style={{fontSize: '18pt', fontWeight:"bold",lineHeight:1 }}> the goal that 100% New Cars Sales should be Zero-Emission by 2035</span>
                   , meaning around 1.5 million EV chargers are needed to support the 8 million ZEVs on the road (including battery electric and hydrogen fuel cell). 
                  </p>
                </div>
                <div className=" text-xs mt-32 mb-0 ">
                </div>
              </div>
            </div>
          </div>

          <div  style={{height: 500}} >
          </div>

        <div className="container" >
        <div className={innerClasses}>
          <div className={tilesClasses} >
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" 
              style={{borderStyle:'solid',borderRadius:'25px', borderColor:'#96bb7c',borderWidth:'6px'}}>
                <div className="testimonial-item-content">
                <p className="text-s mb-0" style ={{textAlign:'center'}}>
                Today in California, <span className="text-color-error"style={{fontSize: '18pt', fontWeight:"bold",lineHeight:1 }}> only 2.2 % of the cars on the road are electric </span>.
                Our charging infrastructure is also not ready to support the mass adoption of EVs. 
                Many drivers are concerned about the availability of chargers before they switch to electric.

                  </p>
                </div>
                <div className="text-xs mt-32 mb-0 ">
                </div>
              </div>
            </div>
          </div>

          <div  style={{height: 500}} >
          </div>

        <div className="container">
        <div className={innerClasses}>
          <div className={tilesClasses} >
            <div className="tiles-item reveal-from-bottom fade-out">
              <div className="tiles-item-inner" 
              style={{borderStyle:'solid',borderRadius:'25px', borderColor:'#96bb7c',borderWidth:'6px'}}>
                <div className="testimonial-item-content">
                <p className="text-s mb-0" style ={{textAlign:'center'}}>
                How we understand the gaps in the accessibility of charging infrastructure becomes so important in the EV transition.
                  </p>
                </div>
                <div className="text-xs mt-32 mb-0 ">
              </div>
              </div>
            </div>
          </div>
          
          <div  style={{height: 150}} >
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