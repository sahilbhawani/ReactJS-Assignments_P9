import React, { useState } from 'react';
import './App.css';
import './demo.css';

function App() {

const [deptArray,setDeptArray] = useState([]);
const [deptNo,setDeptNo] = useState("");
const [deptName,setDeptName] = useState("");
const [deptLoc,setDeptLoc] = useState("");
const [job,setjob] = useState("");
const [salary,setsalary] = useState("");

function getData(){
  let data = [{"deptNo":101,"deptName":"Scott","job":"marketing","salary":40000,"deptLoc":10},
  {"deptNo":102,"deptName":"Smith","job":"finance","salary":20000,"deptLoc":20},
  {"deptNo":103,"deptName":"Sandy","job":"sales","salary":38000,"deptLoc":50},
  {"deptNo":104,"deptName":"Sam","job":"analyst","salary":55000,"deptLoc":60}];

  setDeptArray(data);
}

function addData(){

  let deptObj = { };
  deptObj.deptName = deptName
  deptObj.deptNo = deptNo;
  deptObj.deptLoc = deptLoc;
  deptObj.job = job;
  deptObj.salary = salary;

  let tempArray = [...deptArray];
  tempArray.push(deptObj);
  setDeptArray(tempArray);

  clearFields();
}

function clearFields()
{
    setDeptNo("");
    setDeptName("");
    setDeptLoc("");
    setjob("");
    setsalary("");
}

function deleteData(dno){
  let tempArray = [...deptArray];
  let index = tempArray.findIndex( item => item.deptNo == dno );

  tempArray.splice(index,1);
  setDeptArray(tempArray);
}

function selectData(dno){
  let data = deptArray.find(item => item.deptNo == dno);

  setDeptNo(data.deptNo);
  setDeptName(data.deptName);
  setDeptLoc(data.deptLoc);
  setjob(data.job);
  setsalary(data.salary);

}

function updateData(){
  let tempArray = [...deptArray];

  let index = tempArray.findIndex((index) => index.deptNo == deptNo);

  tempArray[index].deptName = deptName;
  tempArray[index].deptLoc = deptLoc;
  tempArray[index].job = job;
  tempArray[index].salary = salary;

  setDeptArray(tempArray);
  clearFields();
}

  let resultArray = deptArray.map(item => {
    return <tr>
      <td>
        {item.deptNo}
      </td>
      <td>
        {item.deptName}
      </td>
      <td>
        {item.job}
      </td>
      <td>
        {item.salary}
      </td>
      <td>
        {item.deptLoc}
      </td>
      <td align='center'>
        <a href = "#" onClick={() => {selectData(item.deptNo)}}>Select</a> | 
        <a href = "#" onClick={() => {deleteData(item.deptNo)}}> Delete</a>
      </td>
    </tr>

  });

  return (
    <>
    <span>Employee Id <input type='text' value={deptNo} onChange={(e) => {setDeptNo(e.target.value)}}></input></span>
    <span>          </span>
    <span>Employee Name <input type='text' value={deptName} onChange={(e) => {setDeptName(e.target.value)}}></input></span>
    <span>          </span>
    <span>job <input type='text' value={job} onChange={(e) => {setjob(e.target.value)}}></input></span>
    <span>          </span>
    <span>Salary <input type='text' value={salary} onChange={(e) => {setsalary(e.target.value)}}></input></span>
    <span>          </span>
    <span>Dept Number <input type='text' value={deptLoc} onChange={(e) => {setDeptLoc(e.target.value)}}></input></span>

    <br/>
    <br/>

    <button onClick={getData}>Get Emps</button>
    <span>          </span>
    <button onClick={addData}>Add Emp</button>
    <span>          </span>
    <button onClick={updateData}>Update Emp</button>
    
    <hr/>
    <table width="600" border="2">
      <tr>
        <th>
          Employee Id
        </th>
        <th>
          Employee Name
        </th>
        <th>
          Job
        </th>
        <th>
          Salary
        </th>
        <th>
          Dept Number
        </th>
        <th>

        </th>
      </tr>
      {resultArray}
    </table>
    
    </>
  );
}
export default App;
