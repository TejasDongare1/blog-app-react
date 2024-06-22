import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import "./index.css"
import BlogView from './views/BlogView/BlogView';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path: '/',
  element: < Home/>
},
{
  path: '/blog/:id',
  element: <BlogView/>
}
]);

root.render(<RouterProvider router={router} />);


