import { useDraggable} from "@dnd-kit/core";
import { CSS} from "@dnd-kit/utilities";
import {FC, useContext} from "react";
import React from "react";
import Image from "next/image";
import blue from './blue.png';
import plain from './plain.png';
import { DialogContext } from "../context/Context";
import { doesNotMatch } from "assert";


interface IToDraggable {
    items: string;
}

const FruitDragable: FC<IToDraggable> = (props) => {
    const { attributes, listeners, setNodeRef, transform} = useDraggable({
        id:props.items ,
        data: {title: props.items}
    });
  const { taskList,preppedTask,doneTask,editTask,editpTask,editdTask} = useContext(DialogContext);

    const deletePost = () =>{
        const taskname=props.items;
        console.log("clicked");
        const index = taskList.tasks.findIndex((tab) => tab === taskname);
       
        if(index!=-1){
        const nlist = [...taskList.tasks.slice(0, index), ...taskList.tasks.slice(index + 1)];
        editTask({
            tasks:nlist,
        });
       }
       else {const index = preppedTask.findIndex((tab) => tab === taskname);
        if(index!=-1){
            const nlist = [...preppedTask.slice(0, index), ...preppedTask.slice(index + 1)];
            editpTask(nlist);
           }
           else{const index = doneTask.findIndex((tab) => tab === taskname);
            if(index!=-1){
                const nlist = [...doneTask.slice(0, index), ...doneTask.slice(index + 1)];
                editdTask(nlist);
               }
           }
       }
      
    }
    return(
        // post it background
        <div id="bluepostit"
        ref={setNodeRef}
        style={{transform: CSS.Translate.toString(transform),
            backgroundColor:`var(--color3)`,  
            zIndex:30,
    position: 'relative',
        }}
        {...attributes}
    {...listeners}        >
        <div  style={{height: '100%',

            width:"100%",
            position:"absolute",
  top: "0px",
  left: "0px",
  
  backgroundImage: `url(${plain.src})`,
  backgroundSize: 'cover',
  mixBlendMode: "luminosity",
  backgroundColor:`var(--color4)`,

    
    
   
    }}>
       <div style={{
      width: '100%',
      height: '100%',
      top: "0px",
      left: "0px",
      position: "absolute",
      backgroundImage: `url(${plain.src})`,
      backgroundSize: 'cover',
      mixBlendMode: "multiply",
      backgroundColor:`var(--color4)`,
  

    }}>
    
    <div style={{
      width: '100%',
      height: '100%',
      top: "0px",
      left: "0px",
      position: "absolute",
      
      backgroundSize: 'cover',
     
      backgroundColor:`var(--color4)`,
      margin: '5px',
      display: 'flex',
        justifyContent:'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      paddingBottom:'15px',
      paddingRight: '5px',
      textAlign: 'center',
      fontFamily: `'Times New Roman', Times, serif`,
      color:"rgba(0,0,0,1)",
      

    }}>
    <button onClick={deletePost}style={{position:'absolute',  paddingLeft:"8px",backgroundColor:`var(--color4)`,top:"0px",left:"0px",width:"15%",height:"15%"}}>x</button>
    {props.items}
    </div> 
    </div> 
  
    </div>
    
        </div>
       
    );
};

export default FruitDragable;