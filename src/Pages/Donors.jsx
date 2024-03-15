import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Donors() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const donorsCollection = collection(db, "blooddetails");
      const donorsSnapshot = await getDocs(donorsCollection);
      const donorsData = donorsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDonors(donorsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Donors List</h1>
      <ul>
        {donors.map((donor) => (
          <li key={donor.id}>
            <p>Name: {donor.name}</p>
            <p>Address: {donor.address}</p>
            <p>Age: {donor.age}</p>
            <p>Weight: {donor.weight}</p>
            <p>Blood Group: {donor.bloodGroup}</p>
            <p>Medical Info: {donor.medicalInfo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
