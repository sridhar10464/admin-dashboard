import './App.css';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import AddUser from './components/AddUser'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {

  let data={
    earningsMonthly:"4,00,000",
    earningsAnnual:"48,00,000",
    task:20,
    pendingRequest:18
  }

  let [users,setUsers] = useState([
    {
      name:"Shivam",
      email:"shivam@gmail.com",
      batch:"B39WDT",
      mobile:"9876543210"
    },
    {
      name:"Syed",
      email:"syed@gmail.com",
      batch:"B39WDT",
      mobile:"9123456789"
    },
    {
      name:"Ashok",
      email:"ashok@gmail.com",
      batch:"B39WDT",
      mobile:"9859877321"
    }
  ])

  return <>
      <div id='wrapper'>
      
         <BrowserRouter>
         <Sidebar/>

            <Routes>
                <Route path='/dashboard' element={<Dashboard data={{data,users,setUsers}}/>}/>
                <Route path='/add-user' element={<AddUser data={{users,setUsers}}/>}/>
                <Route path='/edit-user/:id' element={<EditUser  data={{users,setUsers}}/> }/> 
                <Route path='*' element={<Navigate to='/add-user'/>}/>
            </Routes>
            
         </BrowserRouter>
          
      
          
          
      </div>
  </>
}

export default App;