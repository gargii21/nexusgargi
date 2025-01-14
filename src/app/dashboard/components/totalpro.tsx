import React, { SetStateAction, useContext, useEffect, useState } from 'react';
import { DialogContext } from '../context/Context';

// Define the props interface if your component accepts props
interface TotalProProps {
    // Define prop types here
   
}
// Define the functional component with props type
const TotalPro: React.FC<TotalProProps> = () => {
    // State can be managed using hooks if needed
    const { doneTask,taskList,preppedTask,progTasks,prepTasks} = useContext(DialogContext);
    let prog =0;
    if(progTasks!="") prog=1;
    let prep =0;
    if(prepTasks!="") prep=1;
    let total = (doneTask.length)+(taskList.tasks.length)+(preppedTask.length)+prog+prep;
    total = total*10;
    let progress = ((doneTask.length)*10)+((preppedTask.length+prog)*3);
    if(total!=0)progress= (progress/total)*100;
    let string1;
    string1=progress.toString();
     string1=string1+"%";
  // State which stores project name
  const [name,setName]=useState("Click to Enter Project Name");
   //bool to show input box
   const[isNew,setIsNew]=useState(false);
   const [response, setResponse] = useState("");
       
     

    // Event handlers can be defined here
   
    useEffect(()=>{
        //console.log(doneTask.length);
        //console.log(preppedTask.length);
        //console.log(taskList.tasks.length);
        //console.log(prog);
        //console.log(prep);
      
        if(total===0) string1="0%";
      });

       //Handle click to make name editable
      const handleClick =()=>{
        console.log('clicked');
        setName("");
        setIsNew(true);
    }

    //update response state
    const updateResponse= (event: { target: { value: SetStateAction<string>; }; }) => {
        setResponse(event.target.value);
    };
    const handleKeyPress = (event: { key: string; }) => {
      if (event.key === 'Enter') {
        if(response!=""){setIsNew(false);
          setName(response);}
        else alert("Project name cannot be empty")
      }};
    // The component's render output
    return (
        <><div
        style={{
          width: '30%', // Increase the width of the droppable area
          height: '35px', // Increase the height of the droppable area
          
        
          position: 'relative',
          top:"50px",
          left:"35%",
        }}
      >
        <div style={{
          fontWeight: 'bold', textAlign: 'center',
          zIndex: 4, position: 'absolute', top: '0px', left: '0px', height: "100%", width: '100%',
          backgroundColor: 'rgba(255, 0, 0, 0)', display:'flex', alignItems:'center', justifyContent:'center',fontSize:'20px',
        }}><button onClick={handleClick}>{name}</button>{isNew && (<><div style={{
                    fontWeight: 'bold', textAlign: 'center',
                    zIndex: 4, position: 'absolute', top: '0px', left: '0px', height: "100%", width: '100%',
                    backgroundColor: 'rgba(255, 0, 0, 0)', 
                }}><input value={response} onKeyDown={handleKeyPress} onChange={updateResponse}placeholder="Type Project Name Here" style={{border:'2px #290309 solid', height:'35px',width:'100%', borderRadius:'10px', color:'#290309', paddingLeft:'10px', paddingBottom:'3px'}} /></div><button style={{position:"absolute",top:"35px",right:'5px', color:'#290309' }}onClick={() => {if(response!=""){setIsNew(false);setName(response);}else alert("Project name cannot be empty")}}>Done</button></>)}
        </div>
        <div style={{
          backgroundColor: 'var(--color3)', color: 'rgba(255, 0, 0, 0)', height: "100%", zIndex: 2, position: 'absolute',
          top: '0px', width: '100%', filter: 'brightness(1.4)',borderRadius:'10px',
        }}> hi
        </div>
        <div style={{
          backgroundColor: 'var(--color3)', color: 'rgba(255, 0, 0, 0)', height: "100%", zIndex: 3, position: 'absolute',
          top: '0px', width: string1, filter: 'contrast(0.8)',mixBlendMode:'multiply',borderRadius:'10px',
        }}> hi
        </div> </div></>
    );
};

// Export the component to use it in other parts of the application
export default TotalPro;