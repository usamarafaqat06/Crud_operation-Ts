

import { useReducer } from 'react';
import ContactForm from './ContactForm';
import Header from './component/Header';
// import Greet from './component/Greet';
// import Object from './component/Object';
import { contactReducer ,State } from './component/contactReducer';
const initialState: State = {
  contacts: []
};
function App() {

 

  
  const [state ,dispatch] =useReducer(contactReducer ,initialState)
  return (
    <>
       <Header/>
      
       <ContactForm dispatch={dispatch} contacts={state.contacts} />
      
     
    </>
  );
}

export default App;
