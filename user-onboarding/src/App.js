import React, {useState} from 'react';
import './App.css';
import './Components/Form';
import SubmitForm from './Components/Form';
import UserList from './Components/Userform';

function App() {
   
  
  const [user, setUsers] = useState([]);
    
  const updateTeamlist = (props) => {
    setUsers({...user, props});
  }

   

  return (
    <div className="App">     
     
     <div className="form-Header"></div>

    <SubmitForm updateTeamlist={updateTeamlist}/>
    <UserList />
    </div>
  );
}

export default App;
