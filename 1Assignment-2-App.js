import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let docDetails = [{ doctorId: 1, doctorName: "Sahil", designation: "MBBS", experience: 5, contactNumber: "7499039010" },
  { doctorId: 2, doctorName: "Atharv", designation: "Physician", experience: 8, contactNumber: "8698448948" },
  { doctorId: 3, doctorName: "Yash", designation: "Dentist", experience: 12, contactNumber: "7975346325" },
  { doctorId: 4, doctorName: "Krishna", designation: "Surgeon", experience: 7, contactNumber: "6785463456" },
  { doctorId: 5, doctorName: "Sumit", designation: "Cardiologist", experience: 15, contactNumber: "8964532425" }];

  let docMap = docDetails.map((item) => {
    return (<tr>
      <td>{item.doctorId}</td>
      <td>{item.doctorName}</td>
      <td>{item.designation}</td>
      <td>{item.experience}</td>
      <td>{item.contactNumber}</td>
    </tr>)
  });

  return (
    <>
      <h1 className="doc-details">Doctor Details</h1>

      <table border="2" width="650">
        <tr>
          <th>
            Doctor Id
          </th>
          <th>
            Doctor Name
          </th>
          <th>
            Designation
          </th>
          <th>
            Experience
          </th>
          <th>
            Contact Number
          </th>
        </tr>

        {docMap}

      </table>
    </>

  );
}

export default App;
