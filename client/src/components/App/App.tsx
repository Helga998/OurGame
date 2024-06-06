import React, { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import type { UserType } from '../user.type';
import SignIn from '../../pages/Auth/SignIn';
import SignUp from '../../pages/Auth/SignUp';
import DogCards from '../dogs/DogCards';

function App(): JSX.Element {
  const [user, setUser] = useState<UserType | null>(null);
//   useEffect(() => {
//     axiosInstance.get("/tokens/refresh")  
//     .then((data) => {
//        const { accessToken, user } = data.data;
//        setUser(user);
//        SetAccessToken(accessToken);
//     })

// },[]); 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser}/>,

      children: [
        {
          path: "signIn",
          element: <SignIn user={user} setUser={setUser}/>,
        },
        {
          path: "signUp",
          element: <SignUp user={user} setUser={setUser}/>,
        },
        {
          path: "/dogs/:id",
          element: <DogCards/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}  />;
}

export default App;
