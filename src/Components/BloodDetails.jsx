// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../firebase";
// import { CircularProgress } from "@mui/material";
// import React from "react";
// export default function BloodDetails() {
//   const [name, setName] = React.useState("");
//   const [address, setAddress] = React.useState("");
//   const [age, setAge] = React.useState("");
//   const [weight, setWeight] = React.useState("");
//   const [bloodGroup, setBloodGroup] = React.useState("");
//   const [medicalInfo, setMedicalInfo] = React.useState("");
//   const [loader, setLoader] = React.useState(false);
  // const addBloodDetails = async (e) => {
  //   e.preventDefault();
  //   if (!name || !address || !age || !weight || !bloodGroup || !medicalInfo) {
  //     alert("Please fill all the fields");
  //     return;
  //   }
    
//     try {
//       setLoader(true);
//       const docRef = await addDoc(collection(db, "blooddetails"), {
//         name,
//         address,
//         age,
//         weight,
//         bloodGroup,
//         medicalInfo
//       });
//       setLoader(false);
//      console.log("Document written with ID: ", docRef.id);
//     } catch (error) {
//       setLoader(false);

//       console.log(error);
//       alert(error.message);
//     }
//   };

//   return (
    // <Box component={"form"} onSubmit={addBloodDetails}>
    // <Grid container spacing={2}>
    //   <Grid item xs={12}>
    //     <TextField
    //       fullWidth
    //       id="filled-basic"
    //       label="Name"
    //       variant="filled"
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //   </Grid>
    //   <Grid item xs={12}  >
    //     <TextField
    //       fullWidth
    //       id="filled-basic"
    //       label="Address"
    //       variant="filled"
    //       onChange={(e) => setAddress(e.target.value)}
    //     />
    //   </Grid>
    //   <Grid item xs={12} sm={6}>
    //     <TextField fullWidth id="filled-basic" label="Age" variant="filled" onChange={(e) => setAge(e.target.value)}/>
    //   </Grid>
    //   <Grid item xs={12} sm={6}>
    //     <TextField
    //       fullWidth
    //       id="filled-basic"
    //       label="Weight"
    //       variant="filled"
    //       onChange={(e) => setWeight(e.target.value)}
    //     />
    //   </Grid>
    //   <Grid item xs={12}>
    //     <TextField
    //       fullWidth
    //       id="filled-basic"
    //       label="Blood Group"
    //       variant="filled"
    //       onChange={(e) => setBloodGroup(e.target.value)}
    //     />
    //   </Grid>
    //   <Grid item xs={12}>
    //     <TextField
    //       fullWidth
    //       id="filled-basic"
    //       label="Medical Info"
    //       variant="filled"
    //       onChange={(e) => setMedicalInfo(e.target.value)}
    //     />
    //   </Grid>
    //   <Button variant="contained" type="submit">
    //               {loader ? (
    //                 <CircularProgress size={"18px"} sx={{ color: "white" }} />
    //               ) : (
    //                 "Add"
    //               )}
    //             </Button>
              
    // </Grid>
    // </Box>
//   );
// }




// import { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

// export default function BloodDetails() {
//   const [donors, setDonors] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const donorsCollection = collection(db, "blooddetails");
//       const donorsSnapshot = await getDocs(donorsCollection);
//       const donorsData = donorsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setDonors(donorsData);
//     };

//     fetchData();
//   }, []);

//   return (
//     // Your existing code to add blood details
//     <Box component={"form"} onSubmit={addBloodDetails}>
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           id="filled-basic"
//           label="Name"
//           variant="filled"
//           onChange={(e) => setName(e.target.value)}
//         />
//       </Grid>
//       <Grid item xs={12}  >
//         <TextField
//           fullWidth
//           id="filled-basic"
//           label="Address"
//           variant="filled"
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField fullWidth id="filled-basic" label="Age" variant="filled" onChange={(e) => setAge(e.target.value)}/>
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           fullWidth
//           id="filled-basic"
//           label="Weight"
//           variant="filled"
//           onChange={(e) => setWeight(e.target.value)}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           id="filled-basic"
//           label="Blood Group"
//           variant="filled"
//           onChange={(e) => setBloodGroup(e.target.value)}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           id="filled-basic"
//           label="Medical Info"
//           variant="filled"
//           onChange={(e) => setMedicalInfo(e.target.value)}
//         />
//       </Grid>
//       <Button variant="contained" type="submit">
//                   {loader ? (
//                     <CircularProgress size={"18px"} sx={{ color: "white" }} />
//                   ) : (
//                     "Add"
//                   )}
//                 </Button>
              
//     </Grid>
//     </Box>
//   );
// }



import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore"; // Import addDoc
import { db } from "../firebase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function BloodDetails() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [medicalInfo, setMedicalInfo] = useState("");
  const [loader, setLoader] = useState(false);

  const addBloodDetails = async (e) => {
    e.preventDefault();
    if (!name || !address || !age || !weight || !bloodGroup || !medicalInfo) {
      alert("Please fill all the fields");
      return;
    }
    
    try {
      setLoader(true);
      const docRef = await addDoc(collection(db, "blooddetails"), {
        name,
        address,
        age,
        weight,
        bloodGroup,
        medicalInfo
      });
      setLoader(false);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      setLoader(false);
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <Box component={"form"} onSubmit={addBloodDetails}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Name"
            variant="filled"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Address"
            variant="filled"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth id="filled-basic" label="Age" variant="filled" onChange={(e) => setAge(e.target.value)}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Weight"
            variant="filled"
            onChange={(e) => setWeight(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Blood Group"
            variant="filled"
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Medical Info"
            variant="filled"
            onChange={(e) => setMedicalInfo(e.target.value)}
          />
        </Grid>
        <Button variant="contained" type="submit">
          {loader ? (
            <CircularProgress size={"18px"} sx={{ color: "white" }} />
          ) : (
            "Add"
          )}
        </Button>
      </Grid>
    </Box>
  );
}
