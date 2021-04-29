import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import SectionHeaderDark from './partials/SectionHeaderDark';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const EVChargerType = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader  = {
    title: 'EV Charger Type',
    paragraph: "There are three levels to charging EVs based on varying speed and power. It starts with the lowest charging at Level 1 and gets faster from there. It's important to understand these charger because they each sets different roles in EV system behaviors."
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeaderDark  data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-2">
                    <Image
                      src={require('./../../assets/images/Level1.png')}
                      alt="Level1"
                      width={300}
                      height={240} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{marginTop:15}}>
                    Level 1 (120V)
                    </h4>
                  <p className="m-0 text-sm" style ={{textAlign:'left'}}>
                    👀 Any normal socket
                    <br ></br>
                    <br ></br>
                    👍 Easy to get access at home. 
                    <br ></br>
                    👎 Charge slow. Fully charge in 15+ hours.
                    <br ></br>
                    😢 Like on diet for EV, slow energy supply and needs support.
                    <br ></br>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-2">
                  <Image
                      src={require('./../../assets/images/Level2.png')}
                      alt="Level2"
                      width={300}
                      height={240}
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{marginTop:15}}>
                    Level 2 (240V)
                    </h4>
                  <p className="m-0 text-sm" style ={{textAlign:'left'}} >
                  👀  Most Public Charger
                  <br ></br>
                  <br ></br>
                  👍 Easy to get access at public. 
                  <br ></br>
                  👍 Fully charge in 3-5 hours. 
                  <br ></br>
                  🙂 Like a Regular diet for EV, daily usage case.
                  <br ></br>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-2">                  
                  <Image
                      src={require('./../../assets/images/DC.png')}
                      alt="DC"
                      width={300}
                      height={240} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{marginTop:15}}>
                  Direct Current (DC) Fast Charger
                    </h4>
                  <p className="m-0 text-sm" style ={{textAlign:'left'}}>
                  👀  Only Super Charger
                  <br ></br>
                  <br ></br>
                  👍 Charge fast.Fully charge in 40 mins. 
                  <br ></br>
                  👎 Expensive to build. 
                  <br ></br>
                  😃 Like a Energy shot for EV, but can not live on it because it will be bad for battery health.
                  <br ></br>
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
EVChargerType.propTypes = propTypes;
EVChargerType.defaultProps = defaultProps;

export default EVChargerType;