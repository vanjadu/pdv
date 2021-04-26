import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Ulica br 12, Obrenovac, Srbija</p>
            </div>
            <div className="d-flex">
              <a href="tel:+381641234567">+381 64 1234 567</a>
            </div>
            <div className="d-flex">
              <a href="mailto:contact@website.com">contact@website.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="naslovna" className="footer-nav">Naslovna</Link>
                <br />
                <Link smooth={true} to="onama" className="footer-nav">O nama</Link>
                <br />
                <Link smooth={true} to="usluge" className="footer-nav">Usluge</Link>
              </div>
              <div className="col">
                <Link smooth={true} to="timeline" className="footer-nav">Timeline</Link>
                <br />
                <Link smooth={true} to="reference" className="footer-nav">Reference</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton>
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton>
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton>
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              PDV Inzenjering &copy; | Sva prava zadrzana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
