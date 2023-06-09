import React,{useContext,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import ItemContext from '../../context/project/ItemContext';
import Projectcard from './projectcard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../../context/authentication/AuthContext';
import { useSelector } from 'react-redux';
var _ = require('lodash');

const Createaccount=()=>{
    const {Projectspecific,createProject} = useContext(ItemContext);
    const {downloadDetails} = useContext(AuthContext);
    const [mobileMenu,setMobileMenu]=useState(false); 
    const [loading,setLoading]=useState(true);
    
    let [count,setCount]=useState(0);

    const items = useSelector(state => state.allProjects.specificProjects);
    // if(items)setLoading(false)
    // items.reverse();

    const getItem=async ()=>{        
        const x=await Projectspecific(); 
        if(x===200)setLoading(false);
    };
    useEffect(()=>{
        getItem();
        document.body.classList.add("disable-scrolling");
      },[]) 

    const[search,setSearch]=useState("");
    const detectChanges = async(e)=>{
      setSearch(e.target.value);   
    };

    const [itemData, setItemData] = useState({ title:"",abstract:"",cosupervisor:"",specialization:"",date:"",time:"",isbanned:false })
  
    const onChangeHandler = (e) => {
      (setItemData({...itemData,[e.target.name]:e.target.value}));
    }

    var modal = document.getElementById("myModal");

    const submit = async (e)=>{
        e.preventDefault();
        setCount(count+1);
        const x=await createProject(itemData.title,itemData.abstract,itemData.cosupervisor,itemData.specialization,itemData.date,itemData.time,itemData.isbanned);
        
        if(x===200){
          setItemData({ title:"",abstract:"",cosupervisor:"",specialization:"",date:"",time:"",isbanned:false });
  
        toast.success('Project created successfully', {
          position: toast.POSITION.TOP_CENTER
      });
        modal.style.display = "none";
    }
    }
    
    // const openNav=()=> {
    //   document.getElementById("sidenavbar").style.top="12vh"
    //   document.getElementById("sidenavbar").style.width="20vw"
    //   document.getElementById("sidenavbar").style.height="88vh"
    //   document.getElementById("text-left").style.left = "20vw";
    //   document.getElementById("text-left").style.width = "80vw";
    // }
    
    // const closeNav=()=> {
    //   document.getElementById("sidenavbar").style.top="0"
    //   document.getElementById("sidenavbar").style.width = "0vw";
    //   document.getElementById("sidenavbar").style.height="0vh"
    //   document.getElementById("text-left").style.left = "0vw";
    //   document.getElementById("text-left").style.width = "100vw";
    // }


        
var modal = document.getElementById("myModal");
// Get the button that opens the modal

var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
if(btn){
btn.onclick = function() {
  modal.style.display = "block";
}}

// When the user clicks on <span> (x), close the modal
if(span){
span.onclick = function() {
  modal.style.display = "none";
}}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    const download = async (e)=>{
      console.log("kk")
      e.preventDefault();
      const email="riyehok530@razuz.com"
      // await downloadDetails(email);
      window.open(
        'http://localhost:5000/project/intrestedpeople/riyehok530@razuz.com',
        '_blank' // <- This is what makes it open in a new window.
        );
      // window.location.href="http://localhost:5000/project/riyehok530@razuz.com"
    }
  
    return(             
          <div class="container-fluid1 flex justify-center items-center"> 

          
 
            {/* <div class="sidenavbar" id="sidenavbar">
            <button class="material-symbols-outlined closebtn" onClick={closeNav}>arrow_back</button>
               <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>×</a> 
              
              <Link className='myprojectsdivb' to={``}>
                <div className='myprojectsdiv1'><i class="fa-solid fa-user fa-xl"></i></div>
                <div className='myprojectsdiv2'>My Projects</div>
              </Link>
              <Link className='myprojectsdiva' to={`/mainpage`}>
                <div className='myprojectsdiv2'>All Projects</div>
              </Link>
              
            </div> */}
           <div class="text-left" id="text-left">
              {/* navbar 1   */}
            <nav class="backgr" style={{"paddingRight":"20px"}}>
              <div class="max-w-7xl mx-auto px-2 sm:px-10 lg:px-200">
                <div class="relative flex items-center justify-between h-16">
                  <div class="flex items-center justify-start" style={{"marginLeft":"7vw"}}>
                      <div class="input-group" className='searchdiv1'>
                      <i class="fas fa-search text-xl h-full pr-4 "></i>
                        <div class="form-outline">
                          
                          <input id="search-input" type="search"  class="form-control" name='search' placeholder="Search by Title name" value={search} onChange={detectChanges} style={{"width":"30vw","textAlign":"center"}} />
                        </div>
                      </div>
                  </div>
                  <div class="absolute inset-y-0 right-0 hidden md:flex  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div class="text-gray-800 px-3 py-2 rounded-md text-xl font-bold" style={{"textDecoration":"none"}}><i class="fa-solid fa-user text-md" style={{"backgroundColor":"transparent","paddingRight":"0.5rem"}}></i>My Projects</div>
                    <Link to={`/mainpage`} class="text-gray-700 hover:text-gray-500 px-3 py-2 no-underline rounded-md text-xl font-x-large" >All Projects</Link>
                  </div>
                  {mobileMenu?(<div className='flex md:hidden'  onClick={()=>setMobileMenu(false)}>
                            <span class="material-symbols-outlined text-white text-xl ml-12 mr-2">
                            cancel
                            </span></div>):(
                          <div className='flex md:hidden'  onClick={()=>setMobileMenu(true)}>
                          <span class="material-symbols-outlined text-white text-xl ml-12 mr-2">
                          menu_open
                          </span>
                      </div>)}
                  {mobileMenu && (<div className='flex flex-col md:hidden mt-12 z-10 border bg-white px-4 top-4 rounded-sm fixed left-8 cursor-pointer '>
                            <div className='text-gray-700 font-bold no-underline py-2 text-lg border-b'>My Projects</div>
                            <Link to={`/mainpage`} className='text-gray-600 hover:text-gray-700 text-lg py-2 border-b no-underline'>All projects</Link>
                            
                    </div>)}
                </div>
              </div>
            </nav>

            
            
              <div className='allprojectslinkdiv'>
                <div id="myBtn" className='allprojectslink'>
                  <h1 className='p-0 md:p-1'>+ </h1>NEW PROJECT
                </div>
              </div>

              {loading?(<div class="flex items-center justify-center h-screen">
              <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            ):
            <div>
              <div className='w-1/3 md:w-48  ' style={{"display":"flex","marginLeft":"5vw","fontWeight":"600","position":"absolute","top":"15vh"}}>
              <div className='text-sm md:text-lg pr-2' style={{"textAlign":"center","fontWeight":"600"}} >Download List of Interested Students</div>
              <i class="fa-solid fa-download text-4xl" onClick={download} style={{"display":"flex","flexDirection":"column","justifyContent":"center","padding":"0px","cursor":"pointer"}}></i>
            </div>
           
            <div className='grid grid-cols-2 my-12 mt-20 mx-1 px-2 md:grid-cols-3 lg:grid-cols-5'>{items.filter((projects)=>{ return search.toString().toLowerCase()==='' ? projects : projects.title.toLowerCase().includes(search.toLocaleLowerCase())}).map( (project,i)=>{ return (<Projectcard key={i} project={project}/>)})}</div>



            <div class="_feedback_container_1ob32_125 pl-4 md:pl-24 lg:pl-48" style={{"height":"15vh","width":"100vw","margin":"auto","display":"flex","alignItems":"center","backgroundColor":"whitesmoke"}}><svg style={{"height":"30px","paddingRight":"10px"}} class="MuiSvgIcon-root _add__comment_1ob32_146" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-2 13.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z"></path></svg>
        <p class="_para__feedback_1ob32_130 text-xs md:text-sm lg:text-lg flex-wrap" style={{"marginBottom":"0.5vw","display":"flex","alignContent":"center"}} hover={{"textDecoration":"underline"}}>We value your opinion, please take a moment to fill out our   <Link className='px-1 ' to={`/feedback`}  style={{"textDecoration":"none"}}> feedback form </Link>   to help us improve.</p>
       </div>
            </div>
            }
            </div>
            

            {/* modal on new project */}
            <div id="myModal" class="modal2">
                <div class="modal-content2">
                  <span class="close" style={{"justify-content":"start","height":"50px"}}>&times;</span>
                  <form class="w-100 mx-auto bg-white px-8 mb-4" onSubmit={submit}>
                    <div class="mb-4 ">
                      <label class="block text-gray-600 font-bold mb-2 text-sm d-flex justify-content-start items-center" for="username">
                      <span class="material-symbols-outlined pr-1">
                      bookmark
                      </span>Project Title
                      </label>
                      <input
                        class="appearance-none border rounded text-sm w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Enter project title"
                        name="title"
                        autoFocus
                        onChange={onChangeHandler}
                        value={itemData.title}
                        required
                      />
                    </div>
                    <div class="mb-4">
                      <label class="block text-gray-600 text-sm font-bold mb-2 d-flex justify-content-start" for="email">
                      Brief Abstract:
                      </label>
                      <textarea id="message"
                          rows="5" 
                          class="block w-full text-sm text-gray-800 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-3 py-2" 
                          placeholder="Write project details..."
                          name="abstract"
                          onChange={onChangeHandler}
                          value={itemData.abstract}
                          required
                        ></textarea>
                    </div>
                    <div class="mb-4 ">
                      <label class="block text-gray-600 text-sm font-bold mb-2 d-flex justify-content-start items-center" for="confirm-password">
                      <span class="material-symbols-outlined pr-1">
                      person
                      </span>
                      Co-Supervisor
                      </label>
                      <input
                        class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirm-password"
                        type="text"
                        placeholder="Name of Co-Supervisor"
                        name="cosupervisor"
                        onChange={onChangeHandler}
                        value={itemData.cosupervisor}
                        required
                      />
                    </div>
                    <div class="mb-8">
                      <label class="block text-gray-600 text-sm font-bold mb-2 d-flex justify-content-start items-center" for="password">
                      <span class="material-symbols-outlined pr-1">
                      school
                      </span>
                      Specialization:
                      </label>
                      <input
                        class="appearance-none border text-sm rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Enter the specialization"
                        name="specialization"
                        onChange={onChangeHandler}
                        value={itemData.specialization}
                        required
                      />
                    </div>
                    
                    <div class="flex items-center justify-center">
                      <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-100" type="submit">
                        Submit
                      </button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          
    )
}
export default Createaccount;
