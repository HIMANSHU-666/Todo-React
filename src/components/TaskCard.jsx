import React from 'react'

const TaskCard = ({title, description, deleteTask, index}) => {
    return (
        <>
            <div className="row justify-content-center mt-3">
                <div className="col-md-6">
                    <div className="card border shadow rounded-3 p-2 px-3">
                        <div className="row align-items-center">
                            <div className="col-10">
                                <div className="d-flex justify-content-between">
                                    <div className='fw-bold'>Title:</div>
                                    <div >{title}</div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className='fw-bold'>Description:</div>
                                    <div >{description}</div>
                                </div>
                            </div>
                            <div className="col-2">
                                <button className='btn btn-danger' onClick={()=>deleteTask(index)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskCard
