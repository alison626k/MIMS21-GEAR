import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import EquityCapital from '../elements/EquityCapital';
import EquityHouse from '../elements/EquityHouse';
import EquityIncome from '../elements/EquityIncome';
import EquityRace from '../elements/EquityRace';
import Disadvantage from '../elements/Disadvantage';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Equity = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'EV Charger Equity Gap',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item" style={{marginTop:'-100px'}} >
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" >
                <h3 className="mt-0 mb-12">
                Racial Disparity
                  </h3>
                <p className="m-0">
                In California, only 34% census tracts are equipped with a public charge spot, and there's a disparity in charger accessibility across different racial communities. 
                38.8% of white-dominant tracts (where white takes more than 50% of the total population) have a charger, which is the highest among all 4 grouped racial groups, 
                including tracts without a majority race. By contrast, black and hispanic dominant communities have the lowest public charger access. 
                There's  room for more equitable distribution of chargers among all race groups.
                  </p>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item" >
                  < EquityRace />
              </div>
            </div>

            <div className="split-item"  >
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" >
                <h3 className="mt-0 mb-12">
                Disadvantaged Communities vs Other Communities
                  </h3>
                <p className="m-0">
                California Office of Environmental Health Hazard Assessment used CalEnviroScreen Score to holistically measure census community’s vulnerability to pollution effects, 
                by considering environmental, health and socioeconomic factors. The graph shows that disadvantaged communities (Q4) have fewest level 2 charger and DC fast charger per capita. 
                More investments in charging infrastructure are needed for disadvantaged communities, who suffer most from pollution. 
                  </p>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item" >
                  < Disadvantage />
              </div>
            </div>

            <div className="reveal-from-bottom">
          <h3 className=" mb-12" style ={{marginTop:"60px"}}>
         Housing Types 
                  </h3>
                <p className="m-0">
                EV drivers’ need for public chargers could be heavily determined by housing type. 
                Multi-unit residents are less able to install home chargers and thus rely more on public chargers. 
                Ideally, regions with more multi-unit dwelling residents should have greater public charging deployment; this trend is observed in some frontrunner countries of EV uptake such as the Netherlands. However, California shows a different story here. Counties that are highest in multi-unit dwelling residency, 
                as highlighted in green on the left, didn’t show any advantage of charger access than other counties with lower multi-unit residency.
                  </p>    
                  < EquityHouse  />
                </div>

            <div className="reveal-from-bottom">
          <h3 className=" mb-12" style ={{marginTop:"60px"}}>
          Number of Chargers vs EV Adoption
                  </h3>
                <p className="m-0">
                Urban counties in general are higher in EV adoption, whereas most of them have a concerning EV/public charger ratio greater than 40:1. 
                Non-urban counties are consistently low in EV adoption. However, it's worth noting that for those small portion of frontrunner non-urban counties with relatively high EV adoption, 
                there are still very limited chargers. Even if EV uptake could achieve the expected goal in the future, 
                it's worrisome that there may not be commensurate public chargers to serve the need. 
                  </p>    
                  < EquityCapital  style={{paddingLeft:-200}}/>
                </div>


          </div>
        </div>
      </div>
    </section>
  );
}

Equity.propTypes = propTypes;
Equity.defaultProps = defaultProps;

export default Equity;