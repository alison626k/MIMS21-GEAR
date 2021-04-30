import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeaderDark from './partials/SectionHeaderDark';
import Image from '../elements/Image';
import Waffle from '../elements/Waffle';
import ChargerTypeBar from '../elements/ChargerTypeBar';
import { ReactComponent as Housetype } from '../../assets/images/Housetype.svg';
import { ReactComponent as Brand } from '../../assets/images/Brand.svg';
import { ReactComponent as Driving }  from '../../assets/images/Driving.svg';
import { ReactComponent as Income }  from '../../assets/images/Income.svg';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Persona = ({
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

  const sectionHeader = {
    title: 'EV Driver Persona',
    paragraph: 'What kind of people own an EV in California? '
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeaderDark data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>


          <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16" style={{height:245, marginBottom:-50, marginTop:-20}} >
                <Income fill='#184d47' />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-0">
                    Income Level
                    </h4>
                  <p className="m-0 text-sm">
                  About 77.6% of EV drivers stand in the middle annual household income level. 
                  Only 7.5% are low-income level, so there is a gap in the EV driver income level.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-" >
                  <Driving fill='#184d47' />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  
                    </h4>
                  <p className="m-0 text-sm">
                    
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-16"  style={{height:245, marginBottom:-55, marginTop:-15}} >
                  <Housetype fill='#184d47' />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Housing Type
                    </h4>
                  <p className="m-0 text-sm">
                  91.4% of EV drivers live in a signal family house. Only a few percentage live in an apartment. 
                  It's easier to charge a EV in the garage of the signal family house.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <div className="mb-1" style={{height:245, marginBottom:-50, marginTop:25}} 
                  >
                    <Image
                      src={require('./../../assets/images/Brand.png')}
                      alt="Brand"
                      width={400}
                      height={400}
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content" Style = {{marginBottom:-100}}>
                  <h4 className="mt-0 mb-0">
                    EV Brand Decision
                    </h4>
                  <p className="m-0 text-sm" Style = {{marginLft:50,marginBottom:-100}}>
                  47.5% of EV drivers drive Tesla, it represent that Tesla is the first brand that EV drivers choose. 
                  Only the top 3 EV brands that drivers choose are listed here because rest of them includes lots of different car brands
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-1" style={{height:245, marginBottom:-50, marginTop:25}} 
                  >
                    <Image
                      src={require('./../../assets/images/ChargerType.png')}
                      alt="ChargerType"
                      width={400}
                      height={400}
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content" Style = {{marginBottom:-100}}>
                  <h4 className="mt-0 mb-0">
                    Charger Type Decision
                    </h4>
                  <p className="m-3 text-sm"     >
                  Most EV drivers use the Level 2 charger at least 1 time per month. Level 1 comes to the second. The result could be caused by the Level 2 charger is the most common public charger.
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

Persona.propTypes = propTypes;
Persona.defaultProps = defaultProps;

export default Persona;