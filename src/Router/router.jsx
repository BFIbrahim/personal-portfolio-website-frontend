import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About/About";
import Contact from "../Pages/Contact/Contact/Contact";
import ComingSoon from "../Pages/Blog/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            path: '/',
            Component: Home
        },
        {
          path: 'about',
          Component: About
        },
        {
          path: 'contact',
          Component: Contact
        },
        {
          path: 'blog',
          Component: ComingSoon
        }
    ]
  },
]);