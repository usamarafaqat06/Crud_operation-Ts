type greetProps ={
 name:string;
 message:number
 login:boolean

}
type fullName ={
    Fname:{
        first:string,
        last:string
    }
}
type personList ={
    list :{
         first:string,
         last: string
    }[]
}
function Greet(props:greetProps & fullName & personList ){
    return(
        <>
        { props.login ? <h1>heloo {props.name}</h1> :"guest"}
         <h2>my name is {props.Fname.first} {props.Fname.last   }</h2>

         {props.list.map((name ,index)=>(
            <h4 key={index}  > {name.first} and {name.last} </h4>
         ))}
        </>
    )
}
export default Greet;