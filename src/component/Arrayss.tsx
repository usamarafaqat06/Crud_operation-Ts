import { type } from 'os'
import React from 'react'

function Arrayss() {

  // const armeer :number[]=[]
  const armeer:Array<number>=[]
  armeer.push(2)
  console.log(armeer)
  const  superHero :string[]= []
  superHero.push("hello")
  console.log(superHero)

     type  User ={
      name:string,
      isActive:boolean
     }
          const allUsers :User[] =[]

          allUsers.push({name:"usama",isActive:true})
          console.log(allUsers)


          const allModels : number[][]=[
            [255 ,255 ,255],
            []
          ]
          console.log(allModels)


          type Users ={
            name:string
,
role:string          }

 type Admin ={
   username:string,
   role:string
 }
           let hit:  Users | Admin = { name:"usama" ,username:"helll" ,role :"king"}
           console.log(hit.role)
  return (
    <div>array</div>
  )
}

export default Arrayss