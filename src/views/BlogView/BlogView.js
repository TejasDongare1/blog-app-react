import React from 'react'
import { useParams } from 'react-router-dom'
import blogs from '../../data'
import "./BlogView.css"

function BlogView() {

    const {id} = useParams()

    const selectedBlog = blogs.find((blogObject)=>blogObject.id == id)

    console.log(selectedBlog);

  return (
    <div className='blogview-container'>
        <h1 className='blog-title'>{selectedBlog.title}</h1>
        <p>
            <img src={selectedBlog.author.avatar} alt="" srcset=""  className='img'/>
            {selectedBlog.author.name} | {selectedBlog.date}
        </p>
        {selectedBlog.content}
    </div>
  )
}

export default BlogView