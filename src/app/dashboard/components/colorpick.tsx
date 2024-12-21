import React, { SetStateAction, useContext, useEffect, useState } from 'react';
import { DialogContext } from '../context/Context';

// Define the props interface if your component accepts props
interface ColourPickProps {
    // Define prop types here
   
}
// Define the functional component with props type
const ColourPick: React.FC<ColourPickProps> = () => {
    // State can be managed using hooks if needed
    const [modalOpen, setModalOpen] = useState(false);

   
  
  
 
   
       
     

    // Event handlers can be defined here
   
    const handleClick = () =>{
        document.documentElement.style.setProperty('--color3', '#32a852' );
      }
      const handleClick3 = () =>{
       setModalOpen(true);
      }
      const handleClickgreen = () =>{
        document.documentElement.style.setProperty('--color3', '#28942f' );
        //document.documentElement.style.setProperty('--color3', '#f56942' );
       }
       const handleClickpurple = () =>{
        document.documentElement.style.setProperty('--color3', '#a8329e' );
        //document.documentElement.style.setProperty('--color3', '#f16192' );
    }
      const handleClickblue = () =>{
        document.documentElement.style.setProperty('--color3', '#418bc3' );
       }
          const handleClickorange = () =>{
        document.documentElement.style.setProperty('--color3', '#bf852c' );
       }
       const handleClickpink = () =>{
        document.documentElement.style.setProperty('--color3', '#f16192' );
       }
      
        const handleClicklavender = () =>{
            document.documentElement.style.setProperty('--color3', '#a358d3' );}
            const handleClickred = () =>{
                
                document.documentElement.style.setProperty('--color3', '#b8181d' );
                }
       const handleClickdarkblue = () =>{
        document.documentElement.style.setProperty('--color3', '#636cc7' );
       }
      
      const closePicker = () =>{
        setModalOpen(false);
      }

    
   
    // The component's render output
    return (
        <><button style={{color: 'var(--color2)', backgroundColor: 'var(--color1)',marginLeft:'1010px',marginTop:'15px', height:'35px',width:'90px', textAlign:'center', borderRadius:'10px'}}onClick={handleClick3}>Themes
        </button>
        {modalOpen && (<div className='dialog-box2' style={{height:'335px'}}><center style={{fontSize:'20px', color:'#290309'}}><b>Select Colour</b></center>
        <div className="grid-container">
        <button onClick={handleClickpurple} className="grid-item"style={{border:"3px solid black",backgroundColor:'#a8329e',
         
        }}></button>
       
         <button onClick={handleClickorange} className="grid-item"style={{border:"3px solid black",
         backgroundColor:'#bf852c'
          
        }}></button>
        <button onClick={handleClickblue} className="grid-item"style={{border:"3px solid black",
         backgroundColor:'#418bc3'
          
        }}></button>
       
       <button onClick={handleClickdarkblue} className="grid-item"style={{border:"3px solid black",
         backgroundColor:'#636cc7'
          
        }}></button>
        <button onClick={handleClicklavender} className="grid-item"style={{border:"3px solid black",
         backgroundColor:'#a358d3'
          
        }}></button>
       <button onClick={handleClickpink} className="grid-item"style={{border:"3px solid black",
         backgroundColor:'#f16192'
          
        }}></button>
        
        <button onClick={handleClickgreen} className="grid-item"style={{border:"3px solid black",
         backgroundColor:'#28942f'
          
        }}></button>
        <button onClick={handleClickred} className="grid-item"style={{border:"3px solid black",
         backgroundColor:'#b8181d'
          
        }}></button>
    </div>
    <button style={{color:'#F9D2AF', marginTop:'10px',fontSize:'17px', }} onClick={closePicker}>Close</button>
    </div>)}</>
    );
};

// Export the component to use it in other parts of the application
export default ColourPick;