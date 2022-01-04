import React,{useState, useEffect} from 'react'
import Axios from 'axios';
import Edit from './Edit';

export default function Display() {
    const [listOfEmp, setListOfEmp] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/read').then((respose)=>{
            // console.log(respose);
            setListOfEmp(respose.data);
        })
        .catch(()=>{
            console.log("ERROR");
            });
    },[]);

    const updateEmp = (id)=>{
        const newName = prompt("Enter new name:");
        const newAge = prompt("Enter new age:");
        const newEmail = prompt("Enter new email:");

        Axios.put('http://localhost:3001/edit',{newAge:newAge, newName:newName,newEmail:newEmail,id:id}).then(()=>{
            setListOfEmp(listOfEmp.map((val)=>{
                return val._id == id ? {_id:id, name:newName, age:newAge, email:newEmail}:val
            }))
        });

    }

    const deleteEmp =(id)=>  {
        Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>{
            setListOfEmp(listOfEmp.filter((val)=>{
                return val._id != id;
             }))
        })
    }

    return (
        <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {

    listOfEmp.map((val)=>{
        return (
        <tr>
            {/* <td>{val._id}</td> */}
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.email}</td>
            <td><div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button onClick={()=>{updateEmp(val._id)}} type="button" class="btn btn-warning" >Edit</button>

            <button onClick={()=>{deleteEmp(val._id)}} type="button" class="btn btn-danger">Delete</button>
            {/* <Edit key={val._id} listId={val._id}/> */}

            </div>
            </td>
      </tr>
            )
})



    }

  </tbody>
</table>
        </div>
    )
}
