import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    invertColor && 'invert-color',
  );

  return (
    <section 
      {...props}
      className={outerClasses}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize:"cover",
      }}
    >
      <div className="container-sm" >
        <div className={innerClasses}>
          <div className="hero-content"  >
            <h1 className="mt-0 mb-16 reveal-from-bottom invert-color" data-reveal-delay="200"  >
              <span className="text-color-secondary" >G</span>aps
              <span className="text-color-secondary"> E</span>xplorer for
              <br></br>
              <span className="text-color-secondary"> A</span>ccessibility and
              <span className="text-color-secondary"> R</span>eadiness: California Electric Vehicle Charging Infrastructure
            </h1>
            <div className="reveal-from-bottom" >
          <Image
                src={require('./../../assets/images/Head.png')}
                alt="Head"
                width={600}
                height={0} />
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;