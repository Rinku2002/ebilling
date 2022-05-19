import logo from '../images/home.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandshakeSimpleSlash,faLock,faClock} from '@fortawesome/free-solid-svg-icons'
function Home() {
    return(
        <div className=" mt-5 rounded">
            <div className='p-5 rounded'>
                <h1 className='text-center text-primary'><em>Welcome to</em></h1>
                <p className='display-1 fw-bold text-success text-center' >CB</p>
                <div className='row'>
                <p className="col col-lg-6 col-sm-10 mx-auto d-block fw-bolder p-4 text-center h6">Pay online! Make contactless and secure payments in-stores or online using CB Wallet. Plus, send money directly within 2 steps.
                </p>
                </div>
                <div className='row'>
                <img className='col col-lg-6 col-sm-10 d-block mx-auto rounded rounded-' src={logo} />
                </div>
            </div>
            <div className='row container mx-auto'>
                <h2 className='text-center fw-bolder mt-4'>The Fastest Way to Pay In-store.</h2>
                <p className='text-center' >Instant Payment, Higher payment security, Better customer convenience and  Contactless. </p>
            </div>
            <div className='row mt-5 justify-content-center bg-light'>
                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 text-center border p-5'>
                <FontAwesomeIcon className='display-6 text-dark' icon={faHandshakeSimpleSlash} />
                <h4>Contactless</h4>
                <p>People have started finding ways of avoiding human touch. Due to this, the need for contactless payments has increased.</p>
                </div>
                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 text-center border p-5'>
                <FontAwesomeIcon className='display-6 text-dark' icon={faLock} />
                <h4>Higher payment security</h4>
                <p>All payments are secured and now our customers do not have to enter their card details every time. </p>
                </div>
                <div className='col col-lg-4 col-md-4 col-sm-12 col-12 text-center border p-5'>
                <FontAwesomeIcon className='display-6 text-dark' icon={faClock} />
                <h4>Payment are made faster</h4>
                <p>Payments with CB are much faster than the traditional methods of payments such as cash or cheques.</p>
                </div>
            </div>
            <br/>
        </div>
    );
}

export default Home;