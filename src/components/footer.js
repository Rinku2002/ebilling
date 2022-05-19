import { faFacebook, faFacebookF, faFacebookMessenger, faInstagram, faInstagramSquare, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Footer(){

    return(
        <div>
            <footer className="footer bg-dark">
      
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 pr-md-5 mt-5">
                        <img className= "w-50 m-0 mx-auto rounded rounded-circle" src = 'https://lh3.googleusercontent.com/fife/AAWUweV4DEmFNWkHwC0eWicCMVwddyN4CF4QDgWqYwA-ywmQokAxUb8cMZQ22dHP7s4hmvTKrlUarhqUtwh4nr4BypqfZUCQAtWB1-1ZPqNaUOKbBuE611eCZ6F9xreBG0QMw7TwAACs_S6FamBUsXl9AWN5fCOIbjs01jnnDPZF5Krhpvc8o8h3QiMKwkt67p6lNPtggIIF4SNqpl0QiuhuqpuF6p1mx6vZGMXnLNmIdvcrwA2Udydm9lnXcxlWHG0Cnm_HF8G4TTeh1i6v4QgwdwwuXNH6GddJNlapiCHUkXNtkaNUYw97v1l6yEOmOW4OjHGk-crCYkFgauL9fbWourX_m_kd493dtfpQQQCksUFtdsJUBshfL2sQJ5Dk8dxJOxLFSeFlJgqJuHV3h32V-IFuKw_kN9SKLz96r-H-JgQ_IRKLkunWwcmpBRPatBufCCLPT1sFpJAn1siqa0mBwV-w9JGRnhX0nqSL8RQi7S4c8QweZJy2-CAVI6t_UFwwVf_8DMJDmUviX7cohcVFkXSwhtDy2tynC6AnWc5WKy1XOqJ1RwciXmel6WYkV3IN6bF16ApcXobs4_IrjKOSqglL3YRmWyv9LjOPJMz1M-FzcfdimuhPqmkKxIqEymdPnQrMcO9wu48Yw2Y_rhVE-gMbIR3muK23O-xLVLg47CD4U4FT-BAZpVOojg1d5UhHJyuf1PHpe4ZMIlAy4mv7d4BBj2Cj1HLk2aNSWwyUDRk8Nl8g0FeFmP4xGTZ6K_da2dLwcV9LoBZwhHejDFSwEqywDSFoD65-5epiAftqKXXNEu7ntSDP3A1SoiOF_QIH9UbGFp39fBZTVsXgLxzL0Pr3nU2AAvsO35zJfoqoOAGSrDdLjleB2XiGg6vtBPglrj1STNgu4hzW8XDmo2mYsUXypmS4-Kp2oAb2=w250-h238-p-k-nu' ></img>
                    </div>
                    <div className="col-md">
                        <ul className="list-unstyled nav-links mt-5">
                        <li><a href="#" className="text-light">About Us</a></li>
                        <li><a href="#" className="text-light">Services</a></li>
                        <li><a href="#" className="text-light">Contact</a></li>
                        <li><a href="#" className="text-light">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="col-md ">
                        <ul className="list-unstyled nav-links mt-5">
                            <li><a href="#" className="text-light">Privacy Policy</a></li>
                            <li><a href="#" className="text-light">Terms &amp; Conditions</a></li>
                            <li><a href="#" className="text-light">Partners</a></li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <ul className="list-unstyled nav-links mt-5">
                            <p className="h2 text-light">Follow Us</p>
                            <FontAwesomeIcon icon = {faTwitter} className="h2 p-2 text-white"></FontAwesomeIcon>
                            <FontAwesomeIcon icon = {faFacebook} className="h2 p-2 text-white"></FontAwesomeIcon>
                            <FontAwesomeIcon icon = {faInstagram} className="h2 p-2 text-white"></FontAwesomeIcon>
                        </ul>
                    </div>
                    <div className="col-md text-md-center">
                        <ul className="social list-unstyled">
                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                        <li><a href="#"><span className="icon-pinterest"></span></a></li>
                        <li><a href="#"><span className="icon-dribbble"></span></a></li>
                        </ul>
                    </div>
                    </div> 

                    <div className="row ">
                    <div className="col-12 text-center">
                        <div className="copyright mt-5 pt-5">
                        <p className="text-white">&copy; All Rights Reserved.</p>
                        </div>
                    </div>
                    </div> 
                </div>
            
            </footer>
        </div>
    )

}

export default Footer;