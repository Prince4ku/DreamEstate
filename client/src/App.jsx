import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import HomePage from './routes/homePage/homePage';
import { Layout, RequireAuth } from './routes/layout/layout';
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import SinglePage from "./routes/singlePage/singlePage";
// import {singlePageLoader } from "./lib/loaders";
import { singlePageLoader,listPageLoader, profilePageLoader } from "./lib/loader.js";
import ListPage from "./routes/listPage/listPage.jsx";





function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>,
          loader: listPageLoader,
        },
       
        {
          path:"/login",
          element:<Login/>
        },
        {
          path: "/:id",
          element: <SinglePage/>,
          loader: singlePageLoader,
        },
        {
          path:"/register",
          element:<Register/>
        },
        
      ]
    },
    {
      path: "/",
      element: <RequireAuth/>,
      children: [
        {
          path: "/profile",
          element: <ProfilePage/>,
          loader:profilePageLoader
        
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        },
        {
          path:"/add",
          element:<NewPostPage/>
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App