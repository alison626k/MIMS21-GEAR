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
    paragraph: ' Need to be filled'
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

            <div className="split-item"  >
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" >
                <h3 className="mt-0 mb-12">
                Race
                  </h3>
                <p className="m-0">
                In California, 34% census tracts are equipped with at least one public charge spot, and there's a disparity in charger accessibility across different racial communities. 
                38.8% of white-dominant tracts (have more than 50% of its population as white) have a charger, which is the highest among all 4 grouped racial groups, 
                including tracts without a majority race. By contrast,
                 black and non-white hispanic communities have the lowest public charger access. There's definitely room for more equitable distribution of chargers among all race groups.
                  </p>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" >
                  < EquityRace />
              </div>
            </div>

            <div className="split-item"  >
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" >
                <h3 className="mt-0 mb-12">
                Disadvantage
                  </h3>
                <p className="m-0">
                California Office of Environmental Health Hazard Assessment used CalEnviroScreen Score to holistically measure census community’s vulnerability to pollution effects, 
                by taking account environmental, health and socioeconomic factors, including poverty, employment and race. 
                Government claimed to specifically target those communities for investment to reduce pollution, while improving their health and economic outcomes. 
                By grouping all communities by the quantile of CalEnviroScreen, the graph shows that currently disadvantaged communities (Q4) have fewest level 2 charger and DC fast charger per capita. 
                To facilitate a more equitable EV transition, more investments in charging infrastructure are indeed needed for people in disadvantaged communities, who suffer most from air pollution.
                  </p>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" >
                  < Disadvantage />
              </div>
            </div>

            <div>
          <h3 className=" mb-12" style ={{marginTop:"60px"}}>
         House types
                  </h3>
                <p className="m-0">
                EV drivers’ need for public chargers could be heavily determined by their housing type. 
                People living in multi-unit housing are less able to install home chargers and thus rely more on public chargers (citation). 
                Ideally, regions with more multi-unit dwelling should have greater public charging deployment; 
                this trend is observed in some frontrunner countries of EV uptake such as the Netherlands (Citation). However,  California has shows a different story here.  
                Counties with highest rate of multi-unit dwelling residency (greater than 30%), as highlighted in green on the left, 
                supposedly need most chargers per million population. However, they didn’t show any advantage of charger access than other counties with a lower multi-unit percentage.
                  </p>    
                  < EquityHouse  />
                </div>

            <div>
          <h3 className=" mb-12" style ={{marginTop:"60px"}}>
          Number of Charging Station VS Capital
                  </h3>
                <p className="m-0">
                EV drivers’ need for public chargers could be heavily determined by their housing type. 
                People living in multi-unit housing are less able to install home chargers and thus rely more on public chargers (citation). 
                Ideally, regions with more multi-unit dwelling should have greater public charging deployment; this trend is observed in some frontrunner countries of EV uptake such as the Netherlands (Citation). 
                However,  California has shows a different story here.  Counties with highest rate of multi-unit dwelling residency (greater than 30%), as highlighted in green on the left, 
                supposedly need most chargers per million population. However, they didn’t show any advantage of charger access than other counties with a lower multi-unit percentage.
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