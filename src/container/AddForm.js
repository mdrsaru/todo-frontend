import { useEffect, useState } from "react";
import axios from "axios";

const AddForm = () => {
  // useEffect(()=>{
  //     console.log('useEffect');
  //     fetch('http://localhost:3000/getList')
  //     .then(res=>res.json())
  //     .then((result)=>{
  //         console.log(result)
  //     })
  // },[])
  //   const handleSubmit = (e) => {
  //       e.preventDefault()
  //     console.log(e.target.value);
  //     axios.post('http://localhost:3000/todo')
  //         .then((result)=>{
  //             console.log(result)
  //         })
  //   };
  const [tasks, setTask] = useState("");
  const [deadlines, setDeadline] = useState("");
  const handleChange = (e) => {
    console.log(e.target.name, "e");
    if (e.target.name === "task") {
        console.log(e.target.value)
      setTask(e.target.value);
    }
    if (e.target.name === "deadline") {
        console.log('deadline',e.target.value)
      setDeadline(e.target.value);
    }
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
  }
  const handleSubmit = (e) => {
    console.log(tasks, deadlines, "e");
    e.preventDefault();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: 'React POST Request Example',deadline:deadlines })
    };
    // fetch('http://localhost:3000/todo',{
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json, text/plain, */*',
    //       'Content-Type': 'application/json'
    //     },

    //     body: JSON.stringify({ task: 'React POST Request Example',deadline:deadlines })
    // })
    //       .then((result)=>{
    //           console.log(result)
    //       })

    const data = {
        task:tasks,
        deadline:deadlines
    }
    const options = {
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded'
            'Content-type': 'multipart/form-data',
        }
      };
//     axios.post(`http://localhost:3000/todo`,JSON.stringify(data),options
//         // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

// )
//     .then(function (response) {
//         console.log(response);
//       }).catch(function (error) {
//         console.log(error);
//       });
axios({
    method: 'post',
    url: 'http://localhost:3000/todo',
    data:data
  })
    .then(function (response) {
     console.log(response)
    });
  };
  return (
    <>
      <section id="addtask">
        <h1>Add your Todo Task</h1>
        <form className="form-inline" onSubmit={handleSubmit}>
          Task:{" "}
          <input
            type="text"
            name="task"
            className="form-control"
            onChange={handleChange}
            style={{ width: "50%" }}
          />
          <br />
          <br />
          Deadline:{" "}
          <input
            type="date"
            name="deadline"
            className="form-control"
            onChange={handleChange}
            style={{ width: "50%" }}
          />
          <br />
          <br />
          <button
            className="btn-post btn"
            type="submit"
            name="post"
            value="Save"
          >
            Save
          </button>
        </form>
      </section>
    </>
  );
};

export default AddForm;
