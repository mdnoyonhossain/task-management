import React, {  useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const taskStrodData = useLoaderData();
    const { taskDescription, taskTitle, startDate, endDate, email, taskWork } = taskStrodData;

    const [users, setUsers] = useState(taskStrodData);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        // console.log(users);
        fetch(`https://task-management-server-chi.vercel.app/taskManagement/${taskStrodData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Task Information Updated successfully');
                navigate('/my-task')
            }
            console.log(data);
        });
    }

    const handleInputChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...users };
        newUser[field] = value;
        setUsers(newUser);
    }

    return (
        <div className='container w-11/12 m-auto my-10'>
            <section className="p-6 bg-gray-200 text-black-50 rounded">
                <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="text-3xl">Update Task</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                            <div className="col-span-full sm:col-span-3">
                                <input onChange={handleInputChange} type="text" name="taskTitle" defaultValue={taskTitle} placeholder="Task Title" className="w-full rounded focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 p-1 px-3" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <input onChange={handleInputChange} type="text" name="taskWork" defaultValue={taskWork} placeholder="Task Work" className="w-full rounded focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 p-1 px-3" required />
                            </div>


                            <div className="col-span-full sm:col-span-2">
                                <input onChange={handleInputChange} id="city" name="startDate" type="text" defaultValue={startDate} placeholder="Start Date" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 p-1 px-3" required />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <input onChange={handleInputChange} id="state" name="endDate" type="text" defaultValue={endDate} placeholder="End Date" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 p-1 px-3" required />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <input onChange={handleInputChange} type="text" name="email" defaultValue={email} placeholder="Email"  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 p-1 px-3" required />
                            </div>
                            <div className="col-span-full">
                                <textarea onChange={handleInputChange} name="taskDescription" defaultValue={taskDescription} placeholder='Task Description' id="" cols="30" rows="4" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 px-3" required></textarea>
                            </div>
                            <button className="bg-transparent bg-[#ff3811] text-white font-semibold  py-2 px-4 border hover:border-transparent rounded">
                                Update
                            </button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default Update;