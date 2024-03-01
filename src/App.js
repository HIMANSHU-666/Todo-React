
import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';


import TaskCard from './components/TaskCard.jsx';



const App = () => {
  const initArray = localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")) : [];
  const [tasks, setTasks] = useState(initArray)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, {
      title,
      description
    }]);
    setTitle("");
    setDescription("");

    
  }
  useEffect(()=>{
    localStorage.setItem("task", JSON.stringify(tasks));

  },[tasks])

  const DeleteTask=((index)=>{
    const filteredArray = tasks.filter((val,i)=>{
      return i !== index;
    });
    setTasks(filteredArray);
  })

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-md-6">
              <div className="card rounded-3 border shadow">
                <div className="card-header bg-dark py-2">
                  <h1 className="text-center m-0 text-light">Todo App</h1>
                </div>
                <div className="card-body">
                  <form onSubmit={SubmitHandler}>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                      <input type="text" value={title} onChange={(e) => (setTitle(e.target.value))} className="form-control" id="exampleFormControlInput1" placeholder="Task Title" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                      <textarea className="form-control" value={description} onChange={(e) => (setDescription(e.target.value))} placeholder='Task Description' id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <button type="submit" className='btn btn-dark form-control my-3'>Add Task</button>
                  </form>

                </div>
              </div>
            </div>
          </div>
          <div id='task_box' >
            {
              tasks.map((item, index)=>{
                return <TaskCard  key={index} deleteTask={DeleteTask} index={index} title={item.title} description={item.description}/>
              })
            }
          </div>

        </div>
      </section>
    </>
  )
}

export default App

