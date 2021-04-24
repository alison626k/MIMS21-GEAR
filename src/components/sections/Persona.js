import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeaderDark from './partials/SectionHeaderDark';
import Image from '../elements/Image';
import Waffle from '../elements/Waffle';
import ChargerTypeBar from '../elements/ChargerTypeBar';
import { ReactComponent as Housetype } from '../../assets/images/Housetype.svg';
import { ReactComponent as Brand } from '../../assets/images/Brand.svg';
import { ReactComponent as Driving }  from '../../assets/images/Driving.svg'


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
    paragraph: 'What kind of people own EV in California? '
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


            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16" style={{height: 220
                  }}>
                       <Waffle />
                <div className="features-tiles-item-content">
                </div>
                  <h4 className="mt-0 mb-8">
                    Income Level Distribution
                    </h4>
                  <p className="m-0 text-sm">
                  About 77% of EV drivers stand in the middle annual household income level (36k-90k per year). 7.5% low income( under 36k per year) own an EV car, so it shows that there is a bar to getting an EV car.
                    </p>               
              </div>
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
                  <div className="mb-16" style={{height: 220
                  }}>
                  <Housetype fill='#184d47' />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    House Type
                    </h4>
                  <p className="m-0 text-sm">
                  91.4% of EV drivers live in a signal family house. Only a few lives in an apartment. It could cause by its easier to charge their EV in the garage of the signal family house.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className=" mb-16" style={{
                    height: 245
                  }}>
                <Brand fill='#184d47' />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-0">
                    Top 3 EV Brands
                    </h4>
                  <p className="m-0 text-sm">
                  91.4% of EV drivers live in a signal family house. Only a few lives in an apartment. It could cause by its easier to charge their EV in the garage of the signal family house.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="mb-1"style={{
                    height: 220
                  }} 
                  style={{ paddingTop: "2em"  }}
                  >
                    <ChargerTypeBar />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-0">
                    Common Use Charger Type
                    </h4>
                  <p className="m-3 text-sm"     Style = {{marginLft:50}}>
                  Most EV drivers use the Level 2 charger at least 1 time per month. Level 1 comes to the second. The chart shows that EV drivers prefer free chargers. The result could be caused by the Level 2 charger is the most common public charger.
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