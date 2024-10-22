import React, { useState } from 'react'
import { IoMdRemoveCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../App.css';

export default function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;
    const [editable, setEditable] = useState(false);
    const [newContent, setNewContent] = useState(content);


    const removeTodo = () => {
        onRemoveTodo(id);
    }

    const updateTodo = ()=>{
        const request ={
            id : id,
            content : newContent
        }
        onUpdateTodo(request);
        setEditable(false);
    }

    return (
        <div className='container'>
            <div style={{ marginLeft: '10px' }}>
                {
                   editable ? <input value={newContent} onChange={(e)=>setNewContent(e.target.value)} type="text"  className='todo-input' style={{width:'380px'}}/> : content
                }
            </div>
            <div>
                <IoMdRemoveCircle className='todo-icon' onClick={removeTodo} />
                {
                    editable ? <FaCheck className='todo-icon' onClick={updateTodo} /> : <FaRegEdit className='todo-icon' onClick={()=> setEditable(true)} />
                }

            </div>
        </div>
    )
}
