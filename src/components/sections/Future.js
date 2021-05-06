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



const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Future = ({
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
    title: 'A Furute to Look Forward',
    paragraph: 'Need to be filled'
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
                (need to change)Drivers respond that no matter how long miles do they drive, they experience half of the time they have to wait for a public charger. Even after driving over 10 miles, the situation remains. 
                Waiting for a public charger is an issue that makes drivers take charging EV inconvenience.
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
                Higher Income Area Gets More Public Chargers
                  </h3>
                <p className="m-0">
                (need to change)Rumors say the high-income level living area has more public chargers. Statics support the hypothesis that low-income level gets a higher percentage that they do not see any charging station, but the higher income level sees more charger stations nearby.
                 This causes inconvenience to the low-income group.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-right',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div style={{
                    height: 360
                  }}>
                <IncomeLevelCharger />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Future.propTypes = propTypes;
Future.defaultProps = defaultProps;

export default Future;