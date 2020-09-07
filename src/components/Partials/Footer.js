import React from 'react'
import {
    FaFacebookSquare,
    FaInstagramSquare

} from 'react-icons/fa';

import {
    AiFillTwitterSquare,
    AiFillYoutube
} from 'react-icons/ai';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__main">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="footer__title">About us</div>
                            <div className="para" >
                                Lorem Ipsum is simply dummy text of the printing and types
                                etting industry. Lorem Ipsum has been the industry's st
                                andard dummy text ever since the 1500s, when an unknown
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="footer__title">Term</div>
                            <div className="footer__item">
                                <a href="#">Terms of Use</a>
                            </div>
                            <div className="footer__item">
                                <a href="#" >Payment Policy</a>
                            </div>
                            <div className="footer__item">
                                <a href="#">Privacy Policy</a>
                            </div>
                            <div className="footer__item">
                                <a href="#">F.A.Q</a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="footer__title">Customer Service</div>
                            <div className="footer__item">
                                <span className="text">Hotline: </span>
                                <a href="tel:19001000" className="info">&nbsp;1900 1000</a>
                            </div>
                            <div className="footer__item">
                                <span className="text">Working hours: </span>
                                <span className="info">&nbsp;8:00 - 22:00</span>
                            </div>
                            <div className="footer__item">
                                <span className="text">Email support: </span>
                                <span className="info">&nbsp;cenima@gmail.com</span>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="footer__title">Follow us</div>
                            <div className="footer__social">
                                <div className="footer__social__item">
                                    <a href="#"><FaFacebookSquare /></a>
                                </div>
                                <div className="footer__social__item">
                                    <a href="#"><FaInstagramSquare /></a>
                                </div>
                                <div className="footer__social__item">
                                    <a href="#"><AiFillYoutube /></a>
                                </div>
                                <div className="footer__social__item">
                                    <a href="#"><AiFillTwitterSquare /></a>
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
    )
}

export default Footer
