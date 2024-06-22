import React from 'react'
import { useParams } from 'react-router-dom'
import blogs from './../../data'
import "./BlogView.css"

function BlogView() {

    const {id} = useParams()

    const selectedBlog = blogs.find((blogObject)=>blogObject.id === id)

    console.log(selectedBlog)

  return (
    <div>
        <h1>{selectedBlog.title}</h1>
        <p>
            <img src={selectedBlog.author.avatar} alt="" srcset="" />
            {selectedBlog.author.name} | {selectedBlog.date}
        </p>
    </div>
  )
}

export default BlogView