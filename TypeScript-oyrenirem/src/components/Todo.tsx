import React, { useState } from 'react'
import '../App.css'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}
function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    const dispatch = useDispatch();
    const handleRemoveTodo = () => {
        dispatch(removeTodo(id))
    }
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const handleEditTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload));
        setEditable(false);
    }

    return (
        <div className="todo">

            {editable ? <input value={newTodo} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewTodo(event.target.value)}
                className='input-text' type="text" /> : <div className='container'>{content}</div>}

            <div className='icons'>
                <IoIosRemoveCircleOutline onClick={handleRemoveTodo} className='icons' />

                {editable ? <FaCheck className='icons' onClick={handleEditTodo} /> : <CiEdit className='icons' onClick={() => setEditable(true)} />}

            </div>
        </div>
    )
}

export default Todo