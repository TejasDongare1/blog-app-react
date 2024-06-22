import React from 'react'
import { Link } from 'react-router-dom'
import "./BlogCard.css"

function BlogCard({id, title, content, author, date, categories}) {
  return (
    <Link className='blog-card' to={`blog/${id}`}>
        <h2 className='blog-title'>{title}</h2>
        <p className='blog-content-preview'>
            {content.substring(0, 70)}...
        </p>
        <div className="author-info">
            <img src={author.avatar} alt="" srcset="" className='author-img' />
            <span className='author-name'>{author.name}</span>
        </div>
        <span className='blog-date'>{date}</span>
        {categories.map((category , i)=>{
            return <span key={i} className="category-badge">{category}</span>
        })}
    </Link>
    
  )
}

export default BlogCard