import { useState } from "react";
import { dataSericeObj } from "../src/services/dataService";


function DeptList() {

    const [deptsArray, setDeptsArray] = useState([]);

    const [deptno, setDeptno] = useState("");
    const [dname, setDname] = useState("");
    const [loc, setLoc] = useState("");

    const [getId,setGetId] = useState("");


    function getDeptsClick() {
        
        dataSericeObj.getAllDepartments().then(resData => 
            {
               setDeptsArray(resData.data);
            });

    }

    function addDeptClick()
    {
        let deptObj = { };
        deptObj.deptno = deptno; 
        deptObj.dname = dname; 
        deptObj.loc = loc; 

        dataSericeObj.addDept(deptObj).then(resData =>
            {
                alert("New Dept Added to server");
                getDeptsClick();
                clearFields();
            }); 
    }

    function  clearFields()
    {
        setDeptno("");
        setDname("");
        setLoc("");
    }


    function  deleteClick(dno)
    {
       dataSericeObj.deleteDept(dno).then(resData => 
        {
            alert("Dept deleted from server");
            getDeptsClick();            
        });
    }

    function  selectClick(dno)
    {
        dataSericeObj.getDeptById(dno).then(resData => 
        {
            let deptObj =  resData.data;
            setDeptno(deptObj.deptno);
            setDname(deptObj.dname);
            setLoc(deptObj.loc);
        }); 

        setGetId(dno);
   
    }


    function  updateDeptClick()
    {
        let deptObj = { };
        deptObj.dname = dname; 
        deptObj.loc = loc; 
        let dno = getId;

        dataSericeObj.updateDept(dno,deptObj).then(resData => 
            {
                getDeptsClick();
                clearFields();
            }); 

        clearFields();
    }

    let resultArray = deptsArray.map(item => {
        return <tr>
            <td>{item.deptno}</td>
            <td>{item.dname}</td>
            <td>{item.loc}</td>
            <td align="center">
                <a href="javascript:void(0);" onClick={() => {selectClick(item.deptno)}}>Select</a>|
                <a href="javascript:void(0);" onClick={() => {deleteClick(item.deptno)}}>Delete</a>
            </td>
        </tr>;
    });

    return (
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />

            <input placeholder="Deptno" type="text"
                value={deptno} onChange={(e) => setDeptno(e.target.value)} />

            <input placeholder="Dname" type="text"
                value={dname} onChange={(e) => setDname(e.target.value)} />

            <input placeholder="Loc" type="text"
                value={loc} onChange={(e) => setLoc(e.target.value)} />


            <hr />

            <input type="button" value="Get Depts" onClick={getDeptsClick} />
            <input type="button" value="Add Dept" onClick={addDeptClick} />
            <input type="button" value="Update Dept" onClick={updateDeptClick} />

            <hr />
            <table border="2" width="500">
                <tr>
                    <th>Dept Number</th>
                    <th>Dept Name</th>
                    <th>Dept Location</th>
                    <th></th>
                </tr>

                {resultArray}
            </table>
        </>
    );
}

export default DeptList;