import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import './Components/Form';
import SubmitForm from './Components/Form';


function App() {
   
  
  const [user, setUsers] = useState([]);
 //const addNewMember = teamMember => {
  //setMembers([...members, teamMember]);


  return (
    <div className="App">     
     
     <div className="form-Header"></div>

    <SubmitForm />

    </div>
  );
}

export default App;
