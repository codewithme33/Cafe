import React from "react";
import "./Footer.css"
import insta_icon from "../images/instagram.png"
import whatsapp_icon from "../images/whatsapp.png"
import tiktok_icon from "../images/tik-tok.png"

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
        
          <div className="col-md-12 text-center mb-4">
            <p>
              Email: <a href="mailto:Mycafe.shop@business.mail" className="text-light">Mycafe.shop@business.mail</a> | Tel no: 01-23456
            </p>
          </div>
        </div>

        <div className="row">
         
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Opening Hours</h5>
            <ul className="list-unstyled">
              <li>Monday: Closed</li>
              <li>Tuesday: 9:00 - 22:00</li>
              <li>Wednesday: 9:00 - 22:00</li>
              <li>Thursday: 9:00 - 22:00</li>
              <li>Friday: 9:00 - 1:00</li>
              <li>Saturday: 12:00 - 1:00</li>
              <li>Sunday: 9:00 - 22:00</li>
            </ul>
          </div>

          
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase">Other Locations</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Barista Coffee Shop</strong>
                <br />
                2660 Saints Alley
                <br />
                Tampa, FL 33602
              </li>
              <li>
                <strong>Barista Cafe</strong>
                <br />
                3497 Watson Street
                <br />
                Camden, NJ 08102
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-center">
            <h5 className="text-uppercase">Location</h5>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.834177073295!2d85.33946831094794!3d27.691519576092375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19007c699641%3A0xf52d1137e9e13faf!2sPanchakumari%20Mandir%20baneshwor!5e0!3m2!1sen!2snp!4v1737962461005!5m2!1sen!2snp"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="row mt-5">
    
          <div className="col-md-12 text-center mb-4">
            <a href="https://instagram.com/" className="text-light me-3" target="_blank">
                <img src={insta_icon} style={{height:25, width : 25}}/>
            </a>
            <a href="https://www.whatsapp.com/" className="text-light me-3" target="_blank">
                <img src={whatsapp_icon} style={{height:25, width : 25}}/>
            </a>
            <a href="https://www.tiktok.com/" className="text-light me-3" target="_blank">
                <img src={tiktok_icon} style={{height:25, width : 25}} />
            </a>
            
          </div>
        </div>

        <div id="credit" className="row mt-1">
          <div className="col-md-12 text-center">
            <p>&copy; 2025 Digitara. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
