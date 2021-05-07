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
    title: 'A Furute to Look Forward to',
    paragraph: 'EV market share grows quickly to 9% in the first quarter of 2021 and the number of charging infrastructure has almost doubled in the past year. In this fast transition, no community should be left behind, and we need to keep in mind that e-mobility is only part of the solution to a sustainable future. We look forward to a multi-modal transport system that is clean, efficient, equitable and accessible to all.'
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
                  <div style={{height:360, marginBottom:0, marginTop:'-80px'}} className="reveal-from-bottom"
                  >
                      <Image
                      src={require('./../../assets/images/future.png')}
                      alt="future"
                      />
                 </div>      
                </div>


      </div>
    </section>
  );
}

Future.propTypes = propTypes;
Future.defaultProps = defaultProps;

export default Future;