import axios from 'axios'
import {useForm} from 'react-hook-form'

function Credit() {
    
    const {register, handleSubmit, formState: {errors}} = useForm()
    
    const credit=(mobj)=>{

        axios.post(`/student-api/credit`,mobj)
        .then(response=>{
            alert(response.data.message)
        })
        .catch(err=>{
            console.log(err.message)
        })

    }

    return(
        <form onSubmit={handleSubmit(credit)} >
            <label htmlFor="un">Roll Number</label>
            <input type="text" id = "un" className = "form-control" {...register("sid", {required:true})}/>
            {errors.username?.type==='required'&&<p>*Roll no required</p>}

            <br/>

            <label htmlFor="un">Amount</label>
            <input type="text" id = "un" className = "form-control" {...register("amount", {required:true})}/>
            {errors.username?.type==='required'&&<p>*Roll no required</p>}
            <button type = "submit" className="mt-4 mb-4">Credit</button>
        </form>
    );
}

export default Credit;