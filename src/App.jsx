// // import Login from "./Pages/Login";
// // import SignUp from "./Pages/Signup";
// // import HomePage from "./Pages/Home";
// // import AuthRoute from "./Routes/AuthRoute";
// // import ProtectedRoute from "./Routes/ProtectedRoute";
// // import { Routes, Route } from "react-router-dom";
// // import Donors from "./Pages/Donors";

// // export default function App() {
// //   return (
// //     <Routes>
// //         {/* // Auth Routes  */}
// //         <Route element={<AuthRoute />}>
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<SignUp />} />
// //         </Route>

// //         {/* private routes */}
// //         <Route element={<ProtectedRoute />}>
// //           <Route index element={<HomePage />} />
// //           <Route path="/donars" element={<Donors />} />
// //           {/* <Route path="/product/:productid" element={<Product />} /> */}
// //         </Route>

// //     </Routes>
// //   );
// // }


// // App.jsx
// import { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/Signup";
// import HomePage from "./Pages/Home";
// import Donors from "./Pages/Donors";
// import AuthRoute from "./Routes/AuthRoute";
// import ProtectedRoute from "./Routes/ProtectedRoute";
// import Navbar from "./Components/Navbar";
// import { auth } from "./firebase";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setIsLoggedIn(true);
//       } else {
//         setIsLoggedIn(false);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <>
//       <Navbar isLoggedIn={isLoggedIn} />
//       <Routes>
//         {/* Auth Routes */}
//         <Route element={<AuthRoute />}>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Route>

//         {/* Protected Routes */}
//         <Route element={<ProtectedRoute />}>
//           <Route index element={<HomePage />} />
//           <Route path="/donars" element={<Donors />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }



// // App.jsx
// import { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/Signup";
// import HomePage from "./Pages/Home";
// import Donors from "./Pages/Donors";
// import AuthRoute from "./Routes/AuthRoute";
// import ProtectedRoute from "./Routes/ProtectedRoute";
// import Navbar from "./Components/Navbar";
// import { auth } from "./firebase";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setIsLoggedIn(true);
//       } else {
//         setIsLoggedIn(false);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route
//           element={
//             isLoggedIn ? <ProtectedRoute /> : <AuthRoute />
//           }
//         >
//           <Route index element={<HomePage />} />
//           <Route path="/donars" element={<Donors />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }



// // App.jsx
// import { useEffect, useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/Signup";
// import HomePage from "./Pages/Home";
// import Donors from "./Pages/Donors";
// import AuthRoute from "./Routes/AuthRoute";
// import ProtectedRoute from "./Routes/ProtectedRoute";
// import Navbar from "./Components/Navbar";
// import { auth } from "./firebase";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setIsLoggedIn(true);
//       } else {
//         setIsLoggedIn(false);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const shouldRenderNavbar = location.pathname !== "/login" && location.pathname !== "/signup";

//   return (
//     <>
//       {shouldRenderNavbar && <Navbar />}
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route
//           element={
//             isLoggedIn ? <ProtectedRoute /> : <AuthRoute />
//           }
//         >
//           <Route index element={<HomePage />} />
//           <Route path="/donars" element={<Donors />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }


// App.jsx
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import HomePage from "./Pages/Home";
import Donors from "./Pages/Donors";
import AuthRoute from "./Routes/AuthRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Navbar from "./Components/Navbar";
import { auth } from "./firebase";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const shouldRenderNavbar = !['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {shouldRenderNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          element={
            isLoggedIn ? <ProtectedRoute /> : <AuthRoute />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/donars" element={<Donors />} />
        </Route>
      </Routes>
    </>
  );
}
