import React, { useState,useContext} from "react";
import { useNavigate,Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var _ = require('lodash');

const NewProject=()=> {
  const {createProject} = useContext(ItemContext);
  const [itemData, setItemData] = useState({ title:"",abstract:"",cosupervisor:"",specialization:"",date:"",time:"",isbanned:false })
  
  const onChangeHandler = (e) => {
    (setItemData({...itemData,[e.target.name]:e.target.value}));
  }

  const navigate=useNavigate()
    const submit = async (e)=>{
        e.preventDefault();
        const x=await createProject(itemData.title,itemData.abstract,itemData.cosupervisor,itemData.specialization,itemData.date,itemData.time,itemData.isbanned);
        
        if(x===200){
        navigate('/owner')
        toast.success('Project created successfully', {
          position: toast.POSITION.TOP_CENTER
      });
    }
    }
 
  
  return (
        <div class=" py-4" style={{"position":"absolute","width":"100vw","top":"15vh","left":"0",}}>
          <Link className='goback' to={`/owner`}><i class="fa-sharp fa-solid fa-arrow-left fa-2xl"/></Link>
          <div className="cardheaddiv">Create New Project</div>
          <form class="max-w-md mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="username">
                Project Title
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter project title"
                name="title"
                autoFocus
                onChange={onChangeHandler}
                value={itemData.title}
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="email">
              Brief Abstract:
              </label>
              <textarea id="message"
                        rows="5" 
                        class="block w-full text-m text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-3 py-2" 
                        placeholder="Write project details..."
                        name="abstract"
                        onChange={onChangeHandler}
                        value={itemData.abstract}
                ></textarea>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="confirm-password">
                Co-Supervisor
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="text"
                placeholder="Name of Co-Supervisor"
                name="cosupervisor"
                onChange={onChangeHandler}
                value={itemData.cosupervisor}
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="password">
              Specialization:
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter the specialization"
                name="specialization"
                onChange={onChangeHandler}
                value={itemData.specialization}
              />
            </div>
            
            <div class="flex items-center justify-center">
              <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>

            </div>
          </form>
        </div>
  
    
);
  }
export default NewProject

{/* <div className="readmorepage">
      <br/>
      
    <Link className='goback' to={`/owner`}><i class="fa-sharp fa-solid fa-arrow-left fa-2xl"/></Link>
    <form className="cardformm" onSubmit={submit}>
    <div className="cardheaddiv">Please fill out the information about the project</div>
    <label className="cardlabell">
    <div className="carddiv" id="card-titl">Title:</div>    
    <input name="title" type="text" className="cardinput" autoFocus id="card-title" onChange={onChangeHandler} value={itemData.title} required/>
    </label>
    <label className="cardlabell">
     <div className="carddiv">Brief Abstract:</div>    
    <textarea className="cardinput" name="abstract" rows="7" cols="120" value={itemData.abstract} onChange={onChangeHandler} required></textarea>
    </label>
    <label className="cardlabell">
     <div className="carddiv">Co-Supervisor:</div>    
        <input type="text" name="cosupervisor" className="cardinput" value={itemData.cosupervisor} onChange={onChangeHandler}/>
    </label>
    <label className="cardlabell">
     <div className="carddiv">Specialization:</div>    
   
    <input name="specialization" type="text" className="cardinput" value={itemData.specialization} onChange={onChangeHandler}/>
    </label>
    
    <button className='cardbuttonn' type="submit">Submit</button>
</form>
</div> */}