// import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar()  {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Blood App
//         </Typography>

       
       
//         <Box sx={{ mx: 1 }}>
//           <Link to="/donars">All Donars</Link>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };



// // Navbar.jsx
// import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// export default function Navbar() {
//   const [user, setUser] = React.useState(null);
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//     });
//     return () => unsubscribe();
//   }, []);

//   // const handleLogout = () => {
//   //   // Your logout logic here
//   // };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Blood App
//         </Typography>
//         {user ? (
//           <>
//             <Box sx={{ mx: 1 }}>
//               <Link to="/">Home</Link>
//             </Box>
//             <Box sx={{ mx: 1 }}>
//               <Link to="/donors">All Donors</Link>
//             </Box>
//             {/* <Button onClick={handleLogout} color="inherit">
//               Logout
//             </Button> */}
//           </>
//         ) : (
//           <>
//             <Box sx={{ mx: 1 }}>
//               <Link to="/login">Login</Link>
//             </Box>
//             <Box sx={{ mx: 1 }}>
//               <Link to="/signup">Signup</Link>
//             </Box>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }



// // Navbar.jsx
// import { AppBar, Box, Toolbar, Typography } from "@mui/material";
// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar({ isLoggedIn }) {
//   const location = useLocation();

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Blood App
//         </Typography>
//         {isLoggedIn && (
//           <>
//             {location.pathname !== "/donars" && (
//               <Box sx={{ mx: 1 }}>
//                 <Link to="/donars">All Donars</Link>
//               </Box>
//             )}
//             <Box sx={{ mx: 1 }}>
//               <Link to="/">Home</Link>
//             </Box>
//           </>
//         )}
//         {!isLoggedIn && (
//           <>
//             <Box sx={{ mx: 1 }}>
//               <Link to="/login">Login</Link>
//             </Box>
//             <Box sx={{ mx: 1 }}>
//               <Link to="/signup">Signup</Link>
//             </Box>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }


// // Navbar.jsx
// import { AppBar, Box, Toolbar, Typography } from "@mui/material";
// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar({ isLoggedIn }) {
//   const location = useLocation();

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Blood App
//         </Typography>
//         {isLoggedIn ? (
//           <>
//             {location.pathname !== "/donars" && (
//               <Box sx={{ mx: 1 }}>
//                 <Link to="/donars" style={{ textDecoration: "none", color: "inherit" }}>
//                   All Donors
//                 </Link>
//               </Box>
//             )}
//             <Box sx={{ mx: 1 }}>
//               <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
//                 Home
//               </Link>
//             </Box>
//           </>
//         ) : (
//           <>
//             <Box sx={{ mx: 1 }}>
//               <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
//                 Login
//               </Link>
//             </Box>
//             <Box sx={{ mx: 1 }}>
//               <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>
//                 Signup
//               </Link>
//             </Box>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }


// Navbar.jsx
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../firebase";

export default function Navbar() {
  const location = useLocation();
  const isLoggedIn = !!auth.currentUser;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blood App
        </Typography>
        {isLoggedIn ? (
          <>
            {location.pathname !== "/donars" && (
              <Box sx={{ mx: 1 }}>
                <Link to="/donars" style={{ textDecoration: "none", color: "inherit" }}>
                  All Donors
                </Link>
              </Box>
            )}
            <Box sx={{ mx: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Home
              </Link>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ mx: 1 }}>
              <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                Login
              </Link>
            </Box>
            <Box sx={{ mx: 1 }}>
              <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>
                Signup
              </Link>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
