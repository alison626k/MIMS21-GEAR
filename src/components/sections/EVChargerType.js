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
    paragraph: "There are three levels to charging EVs based on varying speed and power. The system starts with the lowest charging at Level 1 and gets faster from there. It's important to understand these charger because they each gets pros and cons and sets a role in EV system behaviors."
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
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/Level1.png')}
                      alt="Level1"
                      width={240}
                      height={240} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Level 1 (120V)
                    </h4>
                  <p className="m-0 text-sm" style ={{textAlign:'left'}}>
                    ・Use a normal 120-volt Alternating Current (AC) power source. 
                    <br ></br>
                    ・Need a converter in the car to charger.
                    <br ></br>
                    ・Charging times can be slow. Often replenished overnight (15+ hours) to fully charger an EV car .
                    <br ></br>
                  <br></br>
                  <span >Examples: Any normal socket can be used </span>
                  <br></br>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                      src={require('./../../assets/images/Level2.png')}
                      alt="Level2"
                      width={240}
                      height={240} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Level 2 (240V)
                    </h4>
                  <p className="m-0 text-sm" style ={{textAlign:'left'}} >
                  ・Use a higher-output 240-volt Alternating Current (AC) power source. 
                  <br ></br>
                  ・Need a converter in the car to charge. 
                  <br ></br>
                  ・Charging times are faster than with a Level 1. Can fully charge an EV in just a few hours.
                  <br ></br>
                  <br></br>
                  <span >Examples: Hotels, Public Place, Stations </span>
                  <br></br>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16">                  
                  <Image
                      src={require('./../../assets/images/DC.png')}
                      alt="DC"
                      width={240}
                      height={240} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Direct Current (DC) Fast Charger
                    </h4>
                  <p className="m-0 text-sm" style ={{textAlign:'left'}}>
                  ・Has the converter inside the charger itself. 
                  <br ></br>
                  ・Feed power directly to the car's battery. 
                  <br ></br>
                  ・Charging times are the fastest. Can charge an EV to 80% power in 20 minutes.
                  <br ></br>
                  <br></br>
                  <span >Examples: Tesla Supercharger </span>
                  <br></br>
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