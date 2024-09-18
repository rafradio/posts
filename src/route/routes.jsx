import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import { SinglePostPage } from "../components/SinglePostPage";
import { LoginPage } from "../components/AddLoginPage";
import { Navbar } from "../components/NavBar";

export const router = createBrowserRouter([
    {
      path: '/',
      index: true,
      element: <LoginPage/>,
    },
    {
      path: '/posts',
      element: <App/>,
      children: [
      ]
    },
    {
      path: '/posts/:postId',
      element: <SinglePostPage/>,
      children: [
      ]
    },
]);