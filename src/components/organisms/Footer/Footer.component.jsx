import React, { Fragment } from "react";

import {ReactComponent as GitHub} from "../../../assets/GitHub.svg";
import {ReactComponent as Database} from "../../../assets/Database.svg";

import './Footer.styles.scss';

const Footer = () => {
  return <Fragment>
    <div className='footer'>
      <div className="socials">
        <div className="social-item">
          <a
            href='https://github.com/JamesRoss222/custom_stackoverflow_frontend'
            target='_blank'
            rel="noreferrer"
          >
            <GitHub/>
          </a>
          <p><strong>Frontend</strong></p>
        </div>
        <div className="social-item">
          <a
            href='https://github.com/JamesRoss222/Custom_Stackoverflow_Backend'
            target='_blank'
            rel="noreferrer"
          >
            <Database/>
          </a>
          <p><strong>Backend</strong></p>
        </div>
      </div>
    </div>
  </Fragment>
};

export default Footer;