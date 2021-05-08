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
    paragraph: "There are three types of EVSE (Electric Vehicle Supply Equipment), or simply known as EV Chargers, based on various charging efficiency. It starts with the lowest charging rate for Level 1 chargers and gets faster from there. It's important to understand the differences of these charger types and their use cases."
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
                    👀 Mostly overnight home charging, any normal socket, J1772 charge port
                    <br ></br>
                    <br ></br>
                    👍 Most common in residential garage.
                    <br ></br>
                    👍 No additional infrastructure.
                    <br ></br>
                    👎 Charge slowly, 8 hours can supply 40 miles of range, 16-40 hours for full range.
                    <br ></br>
                    <br ></br>
                    🍎 Like "EVs on diet", slow intake, sometimes low energy in the day and need a boost to make it home.
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
                  Level 2 (208V/240V)
                    </h4>
                  <p className="m-0 text-sm" style ={{textAlign:'left'}} >
                  👀 Most public chargers, J1772 charge port
                  <br ></br>
                  <br ></br>
                  👍 Easy access in parking lots of public facilities (grocery stores, shopping malls, hospitals), workplaces and curbsides. 
                  <br ></br>
                  👍 Reasonable charge rate and price tag, reach full range in 10 hours 
                  <br ></br>
                  <br ></br>
                  🍛 Like "Regular meals and snacks", daily usage, top up a few miles wherever possible during the day.
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
                  DC Fast Charge (208V/480V)
                    </h4>
                  <p className="m-0 text-sm" style ={{textAlign:'left'}}>
                  👀  Some public chargers, CCS/CHAdeMO/Tesla Super charge port
                  <br ></br>
                  <br ></br>
                  👍 Charge very fast, reach 80% of range within 30 mins
                  <br ></br>
                  👎 Most expensive to build and least affordable to use
                  <br ></br>
                  👎 Not all EVs can handle high charging rates

                  <br ></br>
                  <br ></br>
                  🥤 Like "Energy shots", perfect for a quick boost on road trips or after a forgetful night, but had better not live on it.
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