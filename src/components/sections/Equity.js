import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import EquityCapital from '../elements/EquityCapital';
import EquityHouse from '../elements/EquityHouse';
import EquityIncome from '../elements/EquityIncome';
import EquityRace from '../elements/EquityRace';
import Test from '../elements/Tableau';


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

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h3 className="mt-0 mb-12">
                Income
                  </h3>
                <p className="m-0">
                Need to be filled
                  </p>
                  < EquityIncome  />
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" >
                <h3 className="mt-0 mb-12">
                  Race
                  </h3>
                <p className="m-0">
                Need to be filled
                  </p>
                  < EquityRace />
              </div>
            </div>

            <div>
          <h3 className=" mb-12" style ={{marginTop:"60px"}}>
         House types
                  </h3>
                <p className="m-0">
                  need to be filled
                  </p>    
                  < EquityHouse  />
                </div>

            <div>
          <h3 className=" mb-12" style ={{marginTop:"60px"}}>
          Number of Charging Station VS Capital
                  </h3>
                <p className="m-0">
                  need to be filled
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