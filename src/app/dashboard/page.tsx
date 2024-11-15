'use client'

import Image from "next/image";
import blue from './blue.png';
	import { url } from "inspector";
import { SetStateAction,useState,useEffect } from "react";
import { DialogProvider, DialogContext } from './context/Context';

import { useContext} from 'react';
import { DndContext , DragEndEvent} from "@dnd-kit/core";
import CartDroppable from "./components/droppable";
import FruitDragable from "./components/draggable";
import { after } from "node:test";
import CartDroppable2 from "./components/droppable2";
import TotalPro from "./components/totalpro";
import ColourPick from "./components/colorpick";





export default function Home()
 {
  return (
    <><></><Navbar />
    <DialogProvider>
    <TotalPro />  <ColourPick/>
    <table className="heading">
      <tbody>
      <tr className="title1">
        <td id="todo">To Do <Addtask/></td>
        <td>Preparing</td>
        <td>Prepared</td>
        <td>In Progress</td>
        <td>Done</td>
      </tr>
      </tbody>
    </table>
   
    <Todorow/></DialogProvider>
   
    
    
    

    
   
    <></></>
  );
}
function Todorow() {
  const {prepTasks, setPrepTask} = useContext(DialogContext);
   const {taskList,progTasks} = useContext(DialogContext);
   
   const {addPrepItem,addDoneItem} = useContext(DialogContext);
   const {preppedTask,doneTask} = useContext(DialogContext);
   const{afterDrag} = useContext(DialogContext);
   
   
  
   const lengt = Math.max(taskList.tasks.length,preppedTask.length);
   const leng = Math.max(doneTask.length,lengt);
  const len=leng*81;
   let string1;
   string1=len.toString();
   string1=string1+"px";

   

 
  return(
    
    <table className="content">
<tbody>
       <tr className="title2" style={{height:string1}}>
       <DndContext onDragEnd={addPrepItem}> <td id="postit"><Notes/> </td>
        <td><CartDroppable items={prepTasks}/> </td></DndContext>
        <DndContext onDragEnd={addDoneItem}><td><PrepNotes/></td>
        <td><CartDroppable2 items={progTasks}/> </td></DndContext>
        <td><DoneNotes/></td>
    
        </tr> 
        </tbody>
    </table>
   
  ) ;
 
}

function Navbar() {
  
  return(
    <><></><div className="navbar">
      <a href="#"><button className="nav">Home</button></a>
      <a href="#"><button className="nav">Contact Us</button></a>
      
      <a href="#"><button className="nav">Tutorial</button></a>
      <a href="#"><button className="nav" id="logout">Logout</button></a>
    </div><></></>
   
  ) ;
 
}

function Addtask(){
  const { openDialog, handleClick,handleClick2, handleCloseDialog, response, updateResponse} = useContext(DialogContext);
  /*const [response, setResponse] = useState("");
  const updateResponse = (event: { target: { value: SetStateAction<string>; }; }) => {
    setResponse(event.target.value);
  }
 
  const [openDialog, setOpen] = useState(false);

  const addTask = () => {
   
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };*/
 
  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      //alert('event triggered');
    handleCloseDialog();
    }};
  return(
    
    <div>
      <button id="add" onClick={handleClick}>+</button>
      {openDialog && (
        <div className="dialog-box">  
         
          <h2 className="elem" id="addtodo">Current Task </h2>
          
         
      
   <h3 className="elem" id="type">Click the note to start typing</h3>
  
   <div className="stickynote">
   
         <input className="eleme" onChange={updateResponse} value={response} placeholder="Type Here"onKeyDown={handleKeyPress} />
   
    </div>
          
          <button id="close" onClick={handleCloseDialog}>Click to Add Task</button>
          <button style={{float:`right`,}} id="close" onClick={handleClick2}>Close</button>
        </div>
      )}
    </div>
  )


}
function Notes(){
  const { taskList} = useContext(DialogContext);
  return(
<div id="postitmain">
   <ul id="bluepostitbg">
    {taskList.tasks.map( (task ,j) => 
  
    <li key={j}><FruitDragable items={task}></FruitDragable></li>
    )}
   </ul></div>
  )
}

function PrepNotes(){
  const { preppedTask} = useContext(DialogContext);
  
  return(
<div id="postitmain">
   <ul id="bluepostitbg">
    {preppedTask.map( (task ,i) => 
  
    <li key={i}><FruitDragable items={task}></FruitDragable></li>
    )}
   </ul></div>
  )
}

function DoneNotes(){
  const { doneTask} = useContext(DialogContext);
  
  return(
<div id="postitmain">
   <ul id="bluepostitbg">
    {doneTask.map( (task ,i) => 
  
    <li key={i}><FruitDragable items={task}></FruitDragable></li>
    )}
   </ul></div>
  )
}





