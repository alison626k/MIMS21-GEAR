import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';


const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}
          style={{ fontSize: "12px", paddingTop: '3vh',paddingBottom: '1vh'}}>
            
            <p className="invert-color">
            <span style={{ fontSize: "16px"}} > Click <a href="https://docs.google.com/document/d/1D5LkFHCSmNqnWkh4tKd9qm4cag6BOq-Eh1SBv0iYL_4/edit?usp=sharing"> Here </a>for Detailed Report and Referrence Link</span>
            <br></br>
            University of California, Berkeley, School of Information, MIMS 2021. 
            <br></br>
            Created by: Wenqi Luo, Alison Kuo, Yin Qiu, Coco Wang 
            <br></br>
            All rights reserved.</p>
            </div>
          </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;