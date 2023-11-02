import React from 'react'

function Object() {
    type User ={
        name:string,
        email:string,
        isActive:boolean
    }
     function  createUser(user:User) :User{
           return {name:"" ,email:"",isActive:true}
     }
      createUser({name:"" ,email:"",isActive:true})
      console.log(createUser  )
  return (
    <div>Object</div>
  )
}

export default Object