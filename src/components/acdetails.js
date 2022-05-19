import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import enterid from "../images/enterid.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';

function Acdetails() {
    const [data,setData]=useState([]);
    const {register, handleSubmit, formState:{errors}} = useForm()

    const onformsubmit = (userData)=>{
        console.log(userData.id)
        axios.get(`/student-api/getstudents/${userData.id}`)
        .then(response=>{
            console.log(response.data.payload);
            setData(response.data.payload);
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    return(
            <div>
                <div className="container">
                <form onSubmit={handleSubmit(onformsubmit)} className="mx-auto" >
                    <label className="display-3" htmlFor="un">Roll Number</label>
                    <input type="text" id = "un" className = "form-control w-50" {...register("id", {required:true})}/>
                    {errors.username?.type==='required'&&<p>*Roll no required</p>}
                    <button type = "submit" className="mt-4">Submit</button>
                    
                </form>
                {
                data.length==0?
                <div>
                    <h2 className="text-center text-primary">Enter id to view data</h2>
                    <img className='w-lg-25 w-sm-50 w-50 d-block mx-auto mt-3' src={enterid} />
                </div>:
                <div>
                    <div className="bg-primary w-50 d-block mx-auto container rounded">
                        <h3 className="text-white col text-center">My Wallet <FontAwesomeIcon icon={faUser} className="text-dark bg-white rounded-circle" /></h3>
                        <div className="bg-secondary container mb-3">
                        <p className="display-4 ">Username:  {data[0].username}</p>
                        <p className="display-4 ">Email:     {data[0].email}</p>
                        <p className="display-4 ">Student id:{data[0].sid}</p>
                        <p className="display-4 ">Balance:   {data[0].balance}</p>
                        </div>
                    </div>

                </div>
                }
                </div>
            </div>
    );
}
export default Acdetails;