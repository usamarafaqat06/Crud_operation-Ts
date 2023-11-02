import React,{FC} from 'react';
import {  Contact } from './component/contactReducer';


interface ContactListProps{
  contacts:Contact[]
  handleDelete: (id: number) => void;
  rowToUpdate: (values: Contact) => void;
}
 
const ContactList: FC<ContactListProps> =({contacts ,handleDelete,rowToUpdate })=> {
 
  
 
  return (
    <>
   <h1 className='font-bold text-center my-4 text-[14px] md:text-[30px]  text-blue-400'>Contact list</h1>
<table className="w-[250px] md:w-full border-collapse border border-gray-200 mx-[auto] my-0">
  <thead>
    <tr className="bg-blue-100">
      <th className="py-2 px-2 md:px-4 border border-gray-200 text-[12px] md:text-[16px]">First Name</th>
      <th className="py-2 px-2 md:px-4 border border-gray-200 text-[12px] md:text-[16px]">Last Name</th>
      <th className="py-2 px-2 md:px-4 border border-gray-200 text-[12px] md:text-[16px]">Phone</th>
      <th className="py-2 px-2 md:px-4 border border-gray-200 text-[12px] md:text-[16px]">Action</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((items, index) => (
      <tr key={items.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
        <td className="py-2 px-4 border border-gray-200">{items.firstName}</td>
        <td className="py-2 px-4 border border-gray-200">{items.lastName}</td>
        <td className="py-2 px-4 border border-gray-200">{items.phone}</td>
        <tr className='flex items-center justify-center gap-2 py-2'>
          <td><button onClick={()=>handleDelete(items.id)
          } className='bg-[red] p-1 md:p-3 rounded text-[#fff] text-[12px] md:text-[16px] ms-1 '>Delete</button></td>
         <td> <button onClick={()=>rowToUpdate(items)} className='bg-[blue] p-1 md:p-3 rounded text-[#fff] text-[12px] md:text-[16px] me-1'>update</button></td>
        </tr>
      </tr>
    ))}
  </tbody>
</table>







    </>
  )
}

export default ContactList