import { createContext, SetStateAction} from 'react';
import { useState } from 'react';
import { DndContext , DragEndEvent} from "@dnd-kit/core";
import { after } from 'node:test';

interface DialogContextType {
    openDialog: boolean;
    checkBox: boolean;
    checkBox2: boolean;
    afterDrag: () => void;
    afterDrag2: () => void;
    handleClick: () => void;
    handleClick2: () => void;
    handleCloseDialog: () => void;
    setResponse: (response: string) => void;
    response: string;
    updateResponse: (event: React.ChangeEvent<HTMLInputElement>) => void;
    taskList: { tasks: string[] };
    editTask: (taskList: { tasks: string[] }) => void;
    preppedTask: string[];
    editpTask: (preppedTask:string[]) => void;
    doneTask: string[];
    editdTask: (doneTask:string[]) => void;
    prepTasks: string;
    setPrepTask: (prepTask: string) => void;
    progTasks: string;
    setProgTasks: (progTask: string) => void;
    addPrepItem: (event: DragEndEvent) => void;
    addDoneItem: (event: DragEndEvent) => void;
    preplist: string[];
    setpTask:(preplist:string[]) => void;

  }
  const defaultDialogContext: DialogContextType = {
    openDialog: false,
    checkBox: false,
    checkBox2: false,
    afterDrag: () => { },
    afterDrag2: () => { },
    handleClick: () => { },
    handleClick2: () => { },
    handleCloseDialog: () => { },
    setResponse: (response: string) => { },
    response: '',
    updateResponse: (event: React.ChangeEvent<HTMLInputElement>) => { },
    taskList: { tasks: [] },
    editTask: (taskList: { tasks: string[]; }) => { },
    preppedTask:[],
    doneTask:[],
    preplist:[],
    setpTask:(preplist:string[]) => {},
    editpTask:( preppedTask:string[]) => { },
    editdTask:( doneTask:string[]) => { },
    prepTasks: '',
    setPrepTask: (prepTasks: string) => { },
    progTasks: '',
    setProgTasks: (progTasks: string) => { },
    addPrepItem: function (event: DragEndEvent): void {
      throw new Error('Function not implemented.');
    },
    addDoneItem: function (event: DragEndEvent): void {
      throw new Error('Function not implemented.');
    }
  };

  const DialogContext2 = createContext<DialogContextType>(defaultDialogContext);

const DialogProvider2 = ({ children }: { children: React.ReactNode }) => {
  const [openDialog, setOpen] = useState(false);
  const [checkBox,setBox] = useState (false);
  const [checkBox2,setBox2] = useState (false);
  const afterDrag = () =>{
    setBox(false);
  }
  const afterDrag2 = () =>{
    setBox2(false);
  }
  const [preplist, setpTask]=useState([]);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClick2 = () => {
    setOpen(false);
    setResponse("");
  };

  const handleCloseDialog = () => {
    const ntasks = [...taskList.tasks, response];
    editTask(
        {
            tasks: ntasks,
        }
    )
    setResponse("");
    
    setOpen(false); };

    const [response, setResponse] = useState("");
  const updateResponse= (event: { target: { value: SetStateAction<string>; }; }) => {
          setResponse(event.target.value);
      };
      const[taskList, editTask] = useState({
        tasks: [],
    
      });
      const[preppedTask, editpTask] = useState([]);
      const[doneTask, editdTask] = useState([]);
      const [prepTasks, setPrepTask] = useState("");
      const[progTasks,setProgTasks]=useState("");
      const addPrepItem = (e: DragEndEvent) => {
       
        const newItem = e.active.data.current?.title;
        if (e.over?.id != "cart-droppable" || !newItem) return;
        if (prepTasks!=""){alert('Cannot add multiple preparing tasks\nPlease finish current preparing task first');}

        else {setPrepTask(newItem);
          const index = taskList.tasks.findIndex((tab) => tab === newItem);
        let nlist = [...taskList.tasks];
        setBox(true);
        nlist= [...nlist.slice(0, index), ...nlist.slice(index + 1)];
     editTask({
      tasks: nlist,
     }); 
        }
      
    
      }
      
      const addDoneItem = (e: DragEndEvent) => {
       
        const newItem = e.active.data.current?.title;
        if (e.over?.id != "cart-droppable2" || !newItem) return;
        if (progTasks!=""){alert('Cannot add multiple in progress tasks\nPlease finish current task first');}

        else {setProgTasks(newItem);
          const index = preppedTask.findIndex((tab) => tab === newItem);
        let nlist = [...preppedTask];
        setBox2(true);
        nlist= [...nlist.slice(0, index), ...nlist.slice(index + 1)];
        editpTask(nlist); 
        }
      };
      
  return (
    <DialogContext.Provider value={{ openDialog,afterDrag2,checkBox,progTasks,setProgTasks,checkBox2,preppedTask,doneTask,editdTask,setpTask(preppedTask) {}, preplist,editpTask, addDoneItem,afterDrag,handleClick,handleClick2, handleCloseDialog,setResponse, response, updateResponse, taskList,addPrepItem, editTask,prepTasks,setPrepTask}}>
      {children}
    </DialogContext.Provider>
  );
};

export { DialogProvider2, DialogContext2 };