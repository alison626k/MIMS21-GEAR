import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Test from '../elements/Tableau';
import CityCharger from '../elements/CityCharger';
import ChargerGap from '../elements/ChargerGap';
import LARemain from '../elements/LARemain';
import CityMap from '../elements/CityMap';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const City = ({
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
    title: 'City Compaire',
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
          <h3 className="mt-16 mb-12" style ={{marginTop:"100px"}}>
          The Gaps to Reach Public Chargers Needed in 2025 and 2030 are Very Big
                  </h3>
                <p className="m-0">
                  need to be filled
                  
                  </p>    
          <ChargerGap  />
                </div>


                <div>
          <h3 className=" mb-12" style ={{marginTop:"-150px"}}>
          Effective Policies can Help Meeting Charging Needs Much Easier
                  </h3>
                <p className="m-0">
                  need to be filled
                  </p>    
          <LARemain
                width={200}
                height={500} />
                </div>


                <div style ={{marginTop:"50px",marginBottom:"0px"}}>
          <h3 className=" mb-12" >
          City Map
                  </h3>
                <p className="m-0">
                  need to be filled
                  </p>    
          <CityMap
                width={200}
                height={500} />
                </div>


                </div>
                <div>
      </div>
    </section>
  );
}

City.propTypes = propTypes;
City.defaultProps = defaultProps;

export default City;