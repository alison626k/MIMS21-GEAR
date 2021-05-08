import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';
import Image from '../elements/Image';


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
          style={{ fontSize: "12px", paddingTop: '3vh',paddingBottom: '1vh',textAlign:'center'}}>
            <p className="invert-color">

            <span style={{ fontSize: "16px"}} > Click <a href="https://www.ischool.berkeley.edu/sites/default/files/sproject_attachments/mims_capstone_final_report_gear.pdf" target="_blank"> Here </a>for Detailed Report and Reference Link</span>
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