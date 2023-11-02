import React,{FC ,useState} from 'react'
import { Action, Contact } from './component/contactReducer';
import ContactList from './ContactList';

interface ContactFormProps{
    dispatch: React.Dispatch<Action>
    contacts:Contact[]
   
}
const ContactForm:FC<ContactFormProps>=({dispatch ,contacts}) =>
{
  const [contact, setContact] = useState({
    id:0,
    firstName: '',
    lastName: '',
    phone: ''
  });
  const handleClose =()=>{
    setContact({
      id: 0, 
      firstName: "",
      lastName: "",
      phone: "",
     
    });
   }

      const handleChange =(event:React.ChangeEvent<HTMLInputElement> )=>{
        const {name ,value}=event.target;
        setContact({...contact ,[name]:value})
      }
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
       if(contact.id === 0){
        dispatch({
            type:"Add_Contact",
            payload:{
                ...contact,
                id:Date.now(),
            }
        })
         handleClose()
        }
       else{
        dispatch({
          type:"Update_Contacts",
          payload:{
            ...contact
          }
         })
         handleClose()
       
        }
       
       }
    
      const handleDelete=(id: number)=>{
      dispatch({
        type:"Delete_Contact",
        payload: {
          ...contact,
          id:id,
          
        }

  })
}
 const rowToUpdate=(values:Contact)=>{
  setContact({
    firstName: values.firstName,
    lastName: values.lastName,
    phone: values.phone,
    id: values.id, 
  });
    console.log(contact ,"")
 }
  return (
   <>
    <form onSubmit={handleSubmit} className='w-[300px] md:w-[600px] bg-gray mx-[auto] my-0 text-[#7C7850]'>
        
        <label className='my-1 block'> First Name</label>
        <input type="text" name='firstName' value={contact.firstName} onChange={handleChange} className='w-full bg-[#DEE1E6] rounded border border-solid border-[#000] px-2 py-2'  />
        <label className='my-1 block'> Last Name</label>
        <input type="text" name='lastName'value={contact.lastName} onChange={handleChange}  className='w-full bg-[#DEE1E6] rounded border border-solid border-[#000] px-2 py-2'  />
        <label className='my-1 block'> Phone</label>
        <input type="number" name='phone' value={contact.phone} onChange={handleChange} className='w-full bg-[#DEE1E6] rounded border border-solid border-[#000] px-2 py-2'  />
        <button type='submit' className='w-[130px] md:w-[200px]  rounded bg-[#4D996F] flex items-center justify-center text-[#fff] font-semibold h-[40px] md:h-[50px] text-[16px] md:text-[24px] mt-2 md:mt-3' >{contact.id===0?"Add Contact":"Update Contact"}</button>
    </form>
       {contacts.length>0 &&  <ContactList contacts ={contacts} rowToUpdate={rowToUpdate} handleDelete={handleDelete}/> }
   </>
  )
}

export default ContactForm