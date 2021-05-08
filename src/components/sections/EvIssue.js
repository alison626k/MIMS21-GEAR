import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Waffle from '../elements/Waffle';
import ChargerTypeBar from '../elements/ChargerTypeBar';
import { ReactComponent as Housetype } from '../../assets/images/Housetype.svg';
import { ReactComponent as Brand } from '../../assets/images/Brand.svg';
import ChargerConnivence from '../elements/ChargerConnivence';
import IncomeLevelCharger from '../elements/IncomeLevelCharger';
import Waiting from '../elements/Waiting';
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';
import EquityIncome from '../elements/EquityIncome';




const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const EvIssue = ({
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
    title: 'EV Behavior Issue',
    paragraph: 'According to the EV survey done by The California Energy Commission and National Renewable Energy Laboratory (NREL), EV drivers face three main issues on charging in the public station.'
  };

  const [ref, inView] = useInView({
    threshold: 0,
  })
  
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
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                Often Wait for a Public Charger
                  </h3>
                <p className="m-0">
                Waiting for a public charger in long lines bothers EV drivers when they are in a hurry. 34% of drivers responded that over half of the time in the past month, 
                they have to wait for a public charger. Only 10.23% of drivers never have to wait. This indicates that waiting for a public charger is a common problem. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-right',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item" >
                      <div style={{
                    height: 360 ,marginBottom: -150, marginTop: -60
                  }}>
                    <Waiting />
                    </div>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                Higher Income Areas Get More Public Chargers
                  </h3>
                <p className="m-0">
                Statistics show that a higher percentage of lower income people are seeing less or no charging station. 
                Higher income people tend to see more charging stations. This may indicate the lower income group have less access to public chargers.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-right',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div style={{
                    height: 360,
                    marginBottom:20, marginTop:50
                  }}>
                <EquityIncome />
                </div>
              </div>
            </div>

            <div className="split-item" inView={inView}>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item" ref={ref}>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8" style={{ marginTop:140}}>
                  </div>
                <h3 className="mt-0 mb-12">
                Charging Convenience
                  </h3>
                <p className="m-0">
                8 out of 10 EV drivers expressed they have intentionally reduced EV usage due to the concerns about charging station availability. Alternatively, 
                they would take the trip using a different vehicle or travel mode. Such charging availability concerns are more than real, and are great hurdles to normal EV utilization.  
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-right',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div style={{height:360, marginBottom:-46, marginTop:140}}
                  >
                      <Image
                      src={require('./../../assets/images/ReduceUsage.png')}
                      alt="ReduceUsage"
                      width={400}
                      height={600}
                      />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

EvIssue.propTypes = propTypes;
EvIssue.defaultProps = defaultProps;

export default EvIssue;