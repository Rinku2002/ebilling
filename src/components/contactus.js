import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

function Contactus() {
    return (
        <div>
            <div className="bg ">
                <h3 className="text-center text-white">Contact Us</h3>
                <p className="text-center container text-white">Have a question? You can find a host of brilliant articles in our 
                    knowledge base. If you can't find what you're looking for, we'd be happy to point
                    you in the right direction. Please feel free to send us an email or even give us a
                    call at 123456789
                </p>
            </div>

            <div className='row mt-5 justify-content-center bg-light'>
                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 border p-5'>
                    <h4>CB Headquarters</h4>
                    <p>Door No. 1-1-95</p>
                    <p>Old bank Street</p>
                    <p>Bachupally</p>
                    <p>Hyderabad</p>
                    <p>Pin code: 500090</p>
                    <br />
                    <h4>Web Service providers:</h4>
                    <p>NH WebTech solutions</p>
                    <p>Alep industries area</p>
                    <p>Bachupally</p>
                    <p>Hyderabad</p>
                </div>
                
                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 border p-5'>
                    <h4 className='fw-bolder'>Contact information:</h4>
                    <h2>General Inquires</h2>
                    <p className="text-primary">info@cbsols.com</p><br/>

                    <h2>Technical Support</h2>
                    <p className="text-primary">support@cbsols.com</p><br/>

                    <h2>PR Inquires</h2>
                    <p className="text-primary">pr@cbsols.com</p><br/>
                </div>

                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 border p-5'>
                    <h4 className='fw-bolder'>Connect with us on social media</h4><br/>

                    <FontAwesomeIcon icon={faTwitter} className="display-6" /> <a className="h4" href="#"> Twitter</a><br/>
                    <br/>
                    <FontAwesomeIcon icon={faFacebook} className="display-6" /> <a className="h4" href="#"> Facebook</a><br/>
                    <br/>
                    <FontAwesomeIcon icon={faLinkedin} className="display-6" /> <a className="h4" href="#"> Linkedin</a><br/>
                    <br/>
                    <FontAwesomeIcon icon={faInstagram} className="display-6" /> <a className="h4" href="#"> Instagram</a><br/>
                </div>
            </div>

        </div>
    );
}
export default Contactus;