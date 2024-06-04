import userContext from "../context/userContext";
import Base from "../components/Base";


import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




const ContactUs = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <div style={{ fontFamily: 'Roboto, sans-serif', background: 'linear-gradient(to right, #f8cdda, #1d2b64)', minHeight: '92vh', margin: 0, padding: '50px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '70%', background: 'rgba(255, 255, 255, 0.8)', padding: '40px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', borderRadius: '15px', transition: 'transform 0.3s' }}>
              <h1 style={{ textAlign: 'center', color: '#1d2b64', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>Contact Us</h1>
              <p style={{ textAlign: 'center', color: '#666', fontSize: '18px', marginBottom: '40px' }}>We'd love to hear from you! Use the information below to get in touch with us.</p>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={{ color: '#1d2b64', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>Contact Information</h2>
                  <p style={{ color: '#666', fontSize: '16px', textAlign: 'center' }}>
                    <strong>Address:</strong> New Delhi, India<br />
                    <strong>Phone:</strong> *******64<br />
                    <strong>Email:</strong> *********@gmail.com
                  </p>
                </div>

                <div>
                  <h2 style={{ color: '#1d2b64', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>Follow Us</h2>
                  <p style={{ textAlign: 'center' }}>
                    <a href="#" style={{ textDecoration: 'none', color: '#3b5998', fontSize: '24px', marginRight: '10px' }}><FaFacebook /></a>
                    <a href="#" style={{ textDecoration: 'none', color: '#00acee', fontSize: '24px', marginRight: '10px' }}><FaTwitter /></a>
                    <a href="#" style={{ textDecoration: 'none', color: '#E1306C', fontSize: '24px', marginRight: '10px' }}><FaInstagram /></a>
                    <a href="#" style={{ textDecoration: 'none', color: '#0077B5', fontSize: '24px' }}><FaLinkedin /></a>
                  </p>
                </div>
              </div>
                <p style={{ textAlign: 'center', color: '#1d2b64', fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 'bold' }}>Daily Journal</p>
            </div>
          </div>
         </Base>
      )}
    </userContext.Consumer>
  );
};

export default ContactUs;
