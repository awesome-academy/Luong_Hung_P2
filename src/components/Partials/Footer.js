import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

import { AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer__title">{t("footer.about")}</div>
              <div className="para">{t("footer.para")}</div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer__title">{t("footer.term")}</div>
              <div className="footer__item">
                <a href="#">{t("footer.termOfUs")}</a>
              </div>
              <div className="footer__item">
                <a href="#">{t("footer.paymentPolicy")}</a>
              </div>
              <div className="footer__item">
                <a href="#">{t("footer.privacyPolicy")}</a>
              </div>
              <div className="footer__item">
                <a href="#">{t("footer.FAQ")}</a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer__title">{t("footer.customService")}</div>
              <div className="footer__item">
                <span className="text">Hotline: </span>
                <a href="tel:19001000" className="info">
                  &nbsp;1900 1000
                </a>
              </div>
              <div className="footer__item">
                <span className="text">{t("footer.workingHours")}: </span>
                <span className="info">&nbsp;8:00 - 22:00</span>
              </div>
              <div className="footer__item">
                <span className="text">{t("footer.emailSup")}: </span>
                <span className="info">&nbsp;cenima@gmail.com</span>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer__title">{t("footer.followsUs")}</div>
              <div className="footer__social">
                <div className="footer__social__item">
                  <a href="#">
                    <FaFacebookSquare />
                  </a>
                </div>
                <div className="footer__social__item">
                  <a href="#">
                    <FaInstagramSquare />
                  </a>
                </div>
                <div className="footer__social__item">
                  <a href="#">
                    <AiFillYoutube />
                  </a>
                </div>
                <div className="footer__social__item">
                  <a href="#">
                    <AiFillTwitterSquare />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        &copy;Copy right 2020 by Luong & Hung
      </div>
    </footer>
  );
}

export default Footer;
