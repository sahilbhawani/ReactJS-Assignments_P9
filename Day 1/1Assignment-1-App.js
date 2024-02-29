import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let studentDetails = { sid: 12, sname: "Sahil", course: "React", age: 22, total: 92 };
  return (
    <>
      <table border="2" width="250">

        <tr>
          <th>Student Details</th>
        </tr>

        <tr>
          <td>
            Student Id
          </td>
          <td>
            {studentDetails.sid}
          </td>
        </tr>
        <tr>
          <td>
            Student Name
          </td>
          <td>
            {studentDetails.sname}
          </td>
        </tr>
        <tr>
          <td>
            Course
          </td>
          <td>
            {studentDetails.course}
          </td>
        </tr>
        <tr>
          <td>
            Age
          </td>
          <td>
            {studentDetails.age}
          </td>
        </tr>
        <tr>
          <td>
            Total
          </td>
          <td>
            {studentDetails.total}
          </td>
        </tr>

      </table>
    </>
  );
}

export default App;
