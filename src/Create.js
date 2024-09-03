// 
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


const Create=() => {
  const [data, setData]= useState({
    title: "",
    author: "",
    body: ""
  })
  const handleChange =(e)=>{
    const {name, value}= e.target;
    setData ((prev)=>{
      return {...prev, [name]: value}
    })
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post ('http://localhost:4000/blogs',data)
    .then(res =>{
      toast.success('new blog added successfully',{
        position:toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      })
    })
    .catch(err =>{
      toast.error('An error Occured while adding the blog',{
        position:toast.POSITION.TOP_RIGHT,
        autoClose:3000,

      })
    })
  }


  return (
    <div className="content">
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" name="title" onChange={handleChange} placeholder="Enter the Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Author:</Form.Label>
        <Form.Control type="text" name="author" onChange={handleChange} placeholder="Enter the Author`s name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" rows={3} name="body" onChange={handleChange} />
      </Form.Group>
      <button variant='primary' class="bg-primary text-white"  type="submit">save blog</button>
      <ToastContainer/>
    </Form>
    <p>{data.title}</p>
    <p>{data.author}</p>
    <p>{data.body}</p>
    </div>
  );
}

export default Create;