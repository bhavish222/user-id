import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Modal from "./pages/modal/Modal";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/thankyou",
      element: <Modal/>,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

// import { useEffect, useState } from 'react';
// import jwt_decode from "jwt-decode";
// import './App.css';

// function App() {
//   const [ user, setUser ] = useState({});
//   function handleCallbackResponse(response){
//     console.log("encoded jwt id token : " + response.credential);
//     var userObject = jwt_decode(response.credential);
//     console.log(userObject);
//     setUser(userObject);
//     document.getElementById("signInDiv").hidden = true;
//   }

//   function handleSignOut(event){
//     setUser({});
//     document.getElementById("signInDiv").hidden = false;
//   }

//   useEffect(() => {

//     google.accounts.id.initialize({
//       client_id: "160050329650-epejcc2df5e6g76pg9bqs90kf1khc8c7.apps.googleusercontent.com",
//       callback: handleCallbackResponse
//     })
//     google.accounts.id.renderButton(
//       document.getElementById("signInDiv"),
//       { theme: "outline",size: "large" }
//     )
//     // google.accounts.id.prompt();
//   }, []);

//   return (
//     <div className="App">
//       <div id="signInDiv" style={{"textAlign":"center"}}></div>

//         { user &&
//           <div>
//             <img src={user.picture} alt=""></img>
//             <h3>{user.name}</h3>
//           </div>
//         }

//         {
//           Object.keys(user).length != 0 && <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
//         }
//     </div>
//   );
// }

// export default App;
