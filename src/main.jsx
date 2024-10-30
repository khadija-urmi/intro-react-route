import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Users from "./components/Users/Users";
import UserDetail from "./components/UserDeatail/UserDetail";
import AllPost from "./components/AllPost/AllPost";
import Post from "./components/Post/Post";
import PostDetail from "./components/PostDetail/PostDetail";
import Albums from "./components/Albums/Albums";
import SingleAlbums from "./components/SingleAlbums/SingleAlbums";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [{
      path: '/about',
      element: <About></About>
    }, {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path: '/users',
      loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      element: <Users></Users>
    },
    {
      path: '/user/:userId',
      loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element: <UserDetail></UserDetail>
    },
    {
      path: '/posts',
      loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <AllPost></AllPost>
    },
    {
      path: '/posts/:postId',
      loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element: <PostDetail></PostDetail>
    },
    {
      path: '/albums',
      loader: () => fetch('https://jsonplaceholder.typicode.com/albums'),
      element: <Albums></Albums>
    },
    {
      path: '/albums/:albumId',
      element: <SingleAlbums></SingleAlbums>
    }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
