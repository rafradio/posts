import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import { SinglePostPage } from "../components/SinglePostPage";

export const router = createBrowserRouter([
    {
      path: '/',
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