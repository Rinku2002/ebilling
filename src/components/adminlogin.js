import { useState } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import Credit from './credit'
import Debit from './Debit'
import QRscanner from './qrread'

function Adminlogin() {
    let [check, setCheck] = useState(0)
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onFormSubmit = (userData)=>{
        console.log(userData)
        axios.post(`/user-api/login`,userData)
        .then(response=>{
            console.log(response.data.payload);
            if (response.data.message==='success'){
                setCheck(1)
            }
            else{
                alert(response.data.message)
            }
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    return(
        <div>
            { check!==1 &&
            <div className='row'>
                <div className="card w-75 mt-5 mb-5 mx-auto">
                    <div className="row loginbg">
                        <div className="col-lg-6 bg-dark">
                        <div className="card-body text-light">
                            <form onSubmit={handleSubmit(onFormSubmit)} className ='w-75 mx-auto m-5 p-2 pt-5 pb-5'>
                                <p className='h1 mb-4 '>Login</p>
                                <label htmlFor="un" className= "h3">Username</label>
                                <input type = "text" id = "un" className="form-control" {...register("username", {required: true})} />
                                {errors.Username?.type === 'required' && <p>*Username Required</p>}

                                <label htmlFor='pwd' className='h3'>Password</label>
                                <input type="password" id = 'pwd' className='form-control' {...register("password", {required: true})}/>
                                {errors.Password?.type === 'required' && <p>*Password Required</p>}
                                <button type = "Submit" className='bg-primary text-light p-2 m-3 ms-0 w-50'>Submit</button>

                            </form>     
                        </div>
                        </div>
                        <img className="rounded-circle col-lg-6" src='https://lh3.googleusercontent.com/fife/AAWUweV4DEmFNWkHwC0eWicCMVwddyN4CF4QDgWqYwA-ywmQokAxUb8cMZQ22dHP7s4hmvTKrlUarhqUtwh4nr4BypqfZUCQAtWB1-1ZPqNaUOKbBuE611eCZ6F9xreBG0QMw7TwAACs_S6FamBUsXl9AWN5fCOIbjs01jnnDPZF5Krhpvc8o8h3QiMKwkt67p6lNPtggIIF4SNqpl0QiuhuqpuF6p1mx6vZGMXnLNmIdvcrwA2Udydm9lnXcxlWHG0Cnm_HF8G4TTeh1i6v4QgwdwwuXNH6GddJNlapiCHUkXNtkaNUYw97v1l6yEOmOW4OjHGk-crCYkFgauL9fbWourX_m_kd493dtfpQQQCksUFtdsJUBshfL2sQJ5Dk8dxJOxLFSeFlJgqJuHV3h32V-IFuKw_kN9SKLz96r-H-JgQ_IRKLkunWwcmpBRPatBufCCLPT1sFpJAn1siqa0mBwV-w9JGRnhX0nqSL8RQi7S4c8QweZJy2-CAVI6t_UFwwVf_8DMJDmUviX7cohcVFkXSwhtDy2tynC6AnWc5WKy1XOqJ1RwciXmel6WYkV3IN6bF16ApcXobs4_IrjKOSqglL3YRmWyv9LjOPJMz1M-FzcfdimuhPqmkKxIqEymdPnQrMcO9wu48Yw2Y_rhVE-gMbIR3muK23O-xLVLg47CD4U4FT-BAZpVOojg1d5UhHJyuf1PHpe4ZMIlAy4mv7d4BBj2Cj1HLk2aNSWwyUDRk8Nl8g0FeFmP4xGTZ6K_da2dLwcV9LoBZwhHejDFSwEqywDSFoD65-5epiAftqKXXNEu7ntSDP3A1SoiOF_QIH9UbGFp39fBZTVsXgLxzL0Pr3nU2AAvsO35zJfoqoOAGSrDdLjleB2XiGg6vtBPglrj1STNgu4hzW8XDmo2mYsUXypmS4-Kp2oAb2=w250-h238-p-k-nu' />
                    </div>    
                </div>
            </div>
            }
            {check===1 &&
            <div>
                <h1 className='display-1 fw-bolder text-center'>Transactions</h1>
                <div className='row'>

                    <div className='col col-lg-6 '>
                        <div className='container'>
                            <h1 className='text-success fw-bolder'>Credit money into users account</h1><br />
                            <Credit />
                        </div>
                    </div>
                    
                    <div className='col col-lg-6 '>
                        <div className='container'>
                            <h1 className='text-success fw-bolder'>Debit money from users account</h1><br />
                            <Debit />
                        </div>
                    </div>
                </div>
            </div>
            }


        </div>
    )


}
export default Adminlogin;