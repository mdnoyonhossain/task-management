import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Comment = () => {
    const commentStrod = useLoaderData();
    const navigate = useNavigate()

    const handleSubmitComment = event => {
        event.preventDefault();
        const from = event.target;
        const comment = from.comment.value;
        const comments = {comment}
        
        fetch(`https://task-management-server-chi.vercel.app/taskManagement/comment/${commentStrod._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Task Comment Done.');
                    navigate('/completed-task');
                }
            })
    }

    return (
        <div className='container w-11/12 m-auto my-10'>
            <section className="p-6 bg-gray-200 text-black-50 rounded">
                <form onSubmit={handleSubmitComment} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="text-3xl">Comment</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                            <div className="col-span-full">
                                <textarea name="comment" placeholder='Task Comment' id="" cols="30" rows="4" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 px-3" required></textarea>
                            </div>
                            <button type='submit' className="bg-transparent bg-[#ff3811] text-white font-semibold  py-2 px-4 border hover:border-transparent rounded">
                                Comment
                            </button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default Comment;