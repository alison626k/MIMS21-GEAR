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
    title: 'Exploring Gaps in Scale',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses} >
          <SectionHeader data={sectionHeader} className="center-content" />
          <h3 className="mt-16 mb-12" style ={{marginTop:"-70px"} } className="reveal-from-bottom">
          Gaps are big to have chargers needed for 2025 and 2030
                  </h3>
                <p className="m-0" className="reveal-from-bottom">
                Looking at the two cities, the big gaps put a lot of pressure on city authorities to build more chargers faster, especially in LA.
                  
                  </p>    
          <ChargerGap  className="reveal-from-bottom"/>
                </div>


                <div className="reveal-from-bottom">
          <h3 className=" mb-12" style ={{marginTop:"-150px"}}>
          Transport policies making the charging infrastructure goals more attainable
                  </h3>
                <p className="m-0" >
                How can we close the gaps faster? Here are two ideas. First, accelerate the pace. Second, lower the bar (goal).
<br></br>
Government is making strong commitments and industry is making promising progress. The first box is checked.
<br></br>
To lower the bar, there is room to use policies to push down the high demand of public chargers. The length of the whole bar shows the base case demand, and the orange part shows what is left when implementing the example policies. Many other policies can be considered to reduce the demand and bring more sustainable benefits.
                  </p>    
          <LARemain
                width={200}
                height={500} />
                </div>


                <div style ={{marginTop:"50px",marginBottom:"0px"}} className="reveal-from-bottom">
          <h3 className=" mb-12" >
          Mapping the gaps in the base case and the policy intervention case
                  </h3>
                <p className="m-0">
                Let's take a look at the gaps on a map, comparing what we have now to what we need in 2030. Clicking the intervention scenario at the bottom, we find the magnitude of gaps no longer seem that big.
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