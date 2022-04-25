import { useEffect, useState } from "react"

const ViewTodo = () =>{

    const [tasks,setTask] = useState([])
    useEffect(()=>{
        console.log('useEffect');
        fetch('http://localhost:3000/getList')
        .then(res=>res.json())
        .then((result)=>{
            console.log(result);
            setTask(result.docs)
        })
    },[])
    console.log(tasks)
    return(
        <>
         <table id="tablelist" className="table table-bordered" style={{margin:'30px'}}>
      <thead>
        <th>Task</th>
        <th>Deadline</th>
        <th>Action1</th>
      </thead>
      <tbody style={{marginRight: "30px"}}>
        
            {tasks.map((task,index)=>(
                <tr>
                <td>{task.task}</td>
                <td>{task.deadline}</td>
                </tr>
            ))}
       

      </tbody>
    </table>
        </>
    )
}

export default ViewTodo