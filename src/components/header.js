import {Routes,Route,Link,Outlet} from "react-router-dom";
import Home from "./home";
import Acdetails from "./acdetails";
import Contactus from "./contactus";
import Adminlogin from "./adminlogin";

function Header() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          <Link className="navbar-brand" to = "/"><img className="w-50 rounded rounded-circle" src="https://lh3.googleusercontent.com/fife/AAWUweV4DEmFNWkHwC0eWicCMVwddyN4CF4QDgWqYwA-ywmQokAxUb8cMZQ22dHP7s4hmvTKrlUarhqUtwh4nr4BypqfZUCQAtWB1-1ZPqNaUOKbBuE611eCZ6F9xreBG0QMw7TwAACs_S6FamBUsXl9AWN5fCOIbjs01jnnDPZF5Krhpvc8o8h3QiMKwkt67p6lNPtggIIF4SNqpl0QiuhuqpuF6p1mx6vZGMXnLNmIdvcrwA2Udydm9lnXcxlWHG0Cnm_HF8G4TTeh1i6v4QgwdwwuXNH6GddJNlapiCHUkXNtkaNUYw97v1l6yEOmOW4OjHGk-crCYkFgauL9fbWourX_m_kd493dtfpQQQCksUFtdsJUBshfL2sQJ5Dk8dxJOxLFSeFlJgqJuHV3h32V-IFuKw_kN9SKLz96r-H-JgQ_IRKLkunWwcmpBRPatBufCCLPT1sFpJAn1siqa0mBwV-w9JGRnhX0nqSL8RQi7S4c8QweZJy2-CAVI6t_UFwwVf_8DMJDmUviX7cohcVFkXSwhtDy2tynC6AnWc5WKy1XOqJ1RwciXmel6WYkV3IN6bF16ApcXobs4_IrjKOSqglL3YRmWyv9LjOPJMz1M-FzcfdimuhPqmkKxIqEymdPnQrMcO9wu48Yw2Y_rhVE-gMbIR3muK23O-xLVLg47CD4U4FT-BAZpVOojg1d5UhHJyuf1PHpe4ZMIlAy4mv7d4BBj2Cj1HLk2aNSWwyUDRk8Nl8g0FeFmP4xGTZ6K_da2dLwcV9LoBZwhHejDFSwEqywDSFoD65-5epiAftqKXXNEu7ntSDP3A1SoiOF_QIH9UbGFp39fBZTVsXgLxzL0Pr3nU2AAvsO35zJfoqoOAGSrDdLjleB2XiGg6vtBPglrj1STNgu4hzW8XDmo2mYsUXypmS4-Kp2oAb2=w250-h238-p-k-nu" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarScroll">
              
              <ul className='navbar-nav h3 p-2 '>
                <li className='nav-item me-5'>
                  <Link className="nav-link active textcolor" to= "/" >Home</Link>
                </li>
                <li className='nav-item me-5'>
                  <Link className="nav-link active textcolor" to= "/acdetails">A/C details</Link>
                </li>
                <li className='nav-item me-5'>
                  <Link className="nav-link active textcolor" to= "/Contactus">ContactUs</Link>
                </li>
                <li className='nav-item me-5'>
                  <Link className="nav-link active textcolor" to= "/adminlogin">Admin Login</Link>
                </li>
              </ul>


            </div>
          </div>
        </nav>
            <Outlet />


          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/acdetails" element={<Acdetails />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/adminlogin" element={<Adminlogin />} />
          </Routes>
        </div>
    );
  }
  
export default Header; 