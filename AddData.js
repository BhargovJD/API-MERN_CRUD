import React,{useState} from 'react'
import Axios from 'axios';

export default function AddData() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");


    const addEmp = ()=>{
        Axios.post('http://localhost:3001/add_emp',{
            name:name,
            age:age,
            email:email,
        }).then(()=>{
            alert("Data inserted!");
        })
        .catch(()=>{
            alert("Failed!")
        })

    };


    return (
        <div>
            <form>
                    <label for="" class="form-label">Name</label>
                    <input type="text" placeholder='name...' onChange={(e)=>{setName(e.target.value)}} class="form-control" />

                    <label for="" class="form-label">Age</label>
                    <input type="number" placeholder='age...' onChange={(e)=>{setAge(e.target.value)}} class="form-control" />

                    <label for="" class="form-label">Email</label>
                    <input type="email" placeholder='email...' onChange={(e)=>{setEmail(e.target.value)}} class="form-control" />

                    <button onClick={addEmp} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
