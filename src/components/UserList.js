import React, { useRef, useState } from 'react';

const UserList = people => {
    
    const deleteUser = e => {
        const id = parseInt(e.target.id)
        people = people.filter(e => {
          return e.id !== id;
        })
        setUsers(people)
     }


    if(people.length < 1){
        return (
          <div className="col-md-6" >
              No users yet ... 
            </div>
        )
      } 
        return (
          <div className="col-md-6" >
           {people.map(person=> {
             return(
             <div>
               <p>{person.firstName} {person.lastName} | {person.email} | {person.note} <button id={person.id} onClick={deleteUser} >Remove</button> </p> 
             </div>)
           })}
          </div>
        )
}

 export default UserList; 
