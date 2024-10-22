import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = 'http://localhost:3005'

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/ussers")
    console.log(response.data);
  }

  const getById = async (userId) => {
    try {
      const response = await axios.get(BASE_URL + "/ussers/" + userId);
      console.log(response.data);
    } catch (error) {
      console.error('Xəta baş verdi:', error);
    }
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/ussers`, newUser)
    console.log("response", response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(`${BASE_URL}/ussers/${userId}`, updatedUser)
    console.log("response", response.data);
  }

  const deleteUserById = async (userId) => {
    const deleteResponse = await axios.delete(`${BASE_URL}/ussers/${userId}`)
    console.log(deleteResponse.data);
  }





  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/ussers/${userId}`);
    return response.data.postId;
  }

  const getPostById = async (postId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.data;
  }

  const getPost = async () => {
    const postId = await getUserById(1);
    console.log(postId)
    const postData = await getPostById(postId);
    console.log(postData);
  }

  useEffect(() => {
    getPost();


    //getAllUsers();
    // getById(2);

    //const newUser = {
    // "username": "Mehman",
    // "password": "120345" }
    //createUser(newUser);

    //updateUser("2",{
    //"username": "Jale",
    //"password": "abc5"
    // });
    //deleteUserById("1");

  }, [])

  return (
    <>


    </>
  )
}

export default App
