import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ChargerGap from '../elements/ChargerGap';
import LARemain from '../elements/LARemain';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const NLPIssue = ({
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
    title: 'Charging Experience',
    paragraph: 'Nearly half (more than 40%) of the EV drivers have faced negative experiences during charging.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <h3 className="mt-16 mb-12" >
          Charging Station Reviews
                  </h3>
                  <div style={{height:360, marginBottom:200, marginTop:20}}
                  >
                      <Image
                      src={require('./../../assets/images/NLP.png')}
                      alt="NLPIssue"
                      
                      height={600}
                      />
                 </div>     
                <p className="m-0" style ={{lineHeight:1.5}}>
                ・57% of charging station reviews showing electric vehicles being ICEd.(EV spots taken by gas car)
                <br></br>
                <br></br>
                ・Functionality, availability and service time are the most frequently mentioned topics.
                <br></br>
                <br></br>
                ・50% negative reviews regarding availability, 22% for service time, 23% for functionality.
                <br></br>
                  </p>    
                </div>


                </div>

                <div>


      </div>
    </section>
  );
}

NLPIssue.propTypes = propTypes;
NLPIssue.defaultProps = defaultProps;

export default NLPIssue;