import React, { useState } from "react";
import "./Todolist.css"

function TodoList(){
    const [inputval, setInputVal] = useState("");
    const [inputArr, setInputArr] = useState([]);
    const [editItems, setEditITems] = useState(null);

    const Additems = ()=>{
        if(!inputval){
            alert("PLEASE ENTER SOME DATA")
        }else{
            if(editItems!==null){
                let updatearr = [...inputArr];
                updatearr[editItems] = inputval;
                setInputArr(updatearr)
                setEditITems(null)
                setInputVal('')

            }else{
                setInputArr([...inputArr,inputval])
                setInputVal("")
            }
        }
    }

    const Edititems =(value,index)=>{
        setInputVal(value);
        // console.log(value);
        setEditITems(index)
    }

     function Deleteitems(value,index){
        let update = inputArr.filter((item,i)=> i !== value && i !== index);
         setInputArr(update)
    }
    const liststyle = {
        color : "white",
        textdecoration: "none",
        border: "2px solid black",
        borderRadius:"5px",
        margin:"4px",
        display : "flex",
        justifyContent : "space-around",
        listStyleType: "none",
        width: "200px",
        padding:"3px",
        alignItems: 'center',
        textAlign: "center" ,
        background: "linear-gradient(to right, blue, purple)"

    }

    const Deleteall = ()=>{
        setInputArr([]);
         
    }
    function getdata (){
        let x = [1,2,3,4,5];
        let y = x.lastIndexOf(2);
        
        console.log(y);
    }
    getdata()


    return(
        <>
        <div className="main-container">

        <div className="container-1">
        
        <h1 > Grocery Shopping</h1>
        <br/>
           {
            inputArr.map((value,index)=>{
                return(
                    <div className="list-data">
                    <div className="list1">
                        <ul style={liststyle} >
                            <li>{value}</li>
                        </ul>
                    </div>
                            <button className="delete" onClick={()=>Deleteitems(value,index)}>Delete</button>
                            <button className="edit" onClick={()=>Edititems(value,index)}>Edit</button>
                    </div>
                )
            })
           }
           <div style={{marginTop:"10px"}}> 
           <br/><h3>Add Items here</h3><br/>
          <input className="inputField" placeholder="Enter your grocery" type="text" value={inputval} onChange={(e)=>setInputVal(e.target.value)}></input>
            <button className="Add-btn" onClick={Additems}> {editItems!==null ? "update" : "Add"}</button><br/><br/>
            {inputArr.length>0 && <button className="deleteall-btn" onClick={Deleteall}>DeleteAll</button>}
          </div>
          </div>
          </div>
        </>
    )
}

export default TodoList;