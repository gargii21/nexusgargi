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
import Link from "next/link";





export default function Home()
 {
  return (
    <><></>
    <DialogProvider><Navbar/>
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
   const {preppedTask,doneTask,dstring,dstring2} = useContext(DialogContext);
   const{afterDrag} = useContext(DialogContext);
   
   
  
   const lengt2 = Math.max(taskList.tasks.length,preppedTask.length);
   const leng = Math.max(doneTask.length,lengt2);
  const len=leng*81;
  const lengt = Math.max(dstring2,Math.max(len,dstring));
  let string1;
  string1=lengt.toString();
  string1=string1+"px";

   

 
  return(
    
    <div className="content">
      <div className="title2" style={{ height: string1}}>
  <DndContext onDragEnd={addPrepItem}><div className="title3">
      <Notes /> </div>
    <div  className="title3">
      <CartDroppable items={prepTasks} />
    </div>
  </DndContext>
  <DndContext onDragEnd={addDoneItem}>
    <div  className="title3">
      <PrepNotes />
    </div>
    <div  className="title3">
      <CartDroppable2 items={progTasks} />
    </div>
  </DndContext>
  <div  className="title3">
    <DoneNotes />
  </div>
</div>

    </div>
   
  ) ;
 
}

function Navbar() {
  
  return(
    <><></><div className="navbar2">
      <button className="nav"><Link href="/" target="_blank">
        Home 
      </Link></button>
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





 