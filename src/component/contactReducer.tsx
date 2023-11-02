 export interface  Contact {
    id:number,
    firstName:string,
    lastName:string,
    phone:string
 }
  export interface Action{
    type: 'Add_Contact' | 'Delete_Contact'| "Update_Contacts"
    payload: Contact;
  }
    export interface State{
        contacts:Contact[]
    }


export const contactReducer =(state:State ,action:Action):State=>{
     switch(action.type){
        case "Add_Contact":
        return{
            contacts:[...state.contacts ,action.payload],
           
        };
        case 'Delete_Contact':
            return{
                
                contacts:state.contacts.filter((contact)=>contact.id !==action.payload.id)
            }
            case 'Update_Contacts': {
                const updatedIndex = state.contacts.findIndex((contact) => contact.id === action.payload.id);
                  const updatedRow = state.contacts[updatedIndex]=action.payload

                  const updatedContacts = [...state.contacts];
                  updatedContacts[updatedIndex] = updatedRow;
                  
                  return {
                    contacts: updatedContacts
                  };
                }
                
                
              
             
              
              
              
              
              
              
            
               
        
        default:
            return state;
     }
}