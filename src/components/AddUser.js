import React, { useRef, useState } from 'react';

let people = [];

const AddUser = () => {
  const [firstName, setFirstName ] = useState('');
  const [lastName, setLasttName ] = useState('');
  const [email, setEmail ] = useState('');
  const [note, setNote ] = useState('');
  const [users, setUsers] = useState({});
  const firstFocus = useRef(null); 
  const [emailError, setEmailError] = useState('');
  const [invalidEmail, setEmailInputInvalid] = useState('');
  const [invalidFirstName, setInputFirstName] = useState('');
  const [invalidLastName, setInputLastName] = useState('');
  const [invalidNote, setInputNote] = useState('');

  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const deleteUser = e => {
    const id = parseInt(e.target.id)
    people = people.filter(e => {
      return e.id !== id;
    })
    setUsers(people)
  }

  const userList = () => {
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

  const handleSubmit = e => {
    e.preventDefault();
    firstFocus.current.focus(); 
    if(!validateEmail(email)){
      setEmailError('Please enter a valid email');
      setEmailInputInvalid('invalid');
    } else {
      setEmailInputInvalid('');
    }

    
    firstName ? setInputFirstName('') : setInputFirstName('invalid');
    lastName ? setInputLastName('') : setInputLastName('invalid');
    note ? setInputNote('') : setInputNote('invalid');

  

    if(!validateEmail(email) || !firstName ||  !lastName || !note ){
      return; 
    }

    setEmailError(''); 
    setUsers({firstName:firstName,lastName:lastName,email:email,note:note});
    people.push({id: people.length,firstName:firstName,lastName:lastName,email:email,note:note});
    setFirstName('');
    setLasttName('');
    setEmail('');
    setNote('');
    setEmailInputInvalid('');
    
    setInputLastName('');
    setInputNote('');

  }

  return (
      <div className="row">
        <h1 className='text-center' >Add Users</h1>
        <div className="col-md-4">
        <form onSubmit={handleSubmit} >
          <div className='form-group'  >
          <label>First Name:</label>
          <input type="text"  ref={firstFocus} autoFocus className={`form-control ${invalidFirstName}`}   value={firstName} onChange={e => setFirstName(e.target.value) }/>
          {<p className="errors" >{invalidFirstName && "Enter a First Name"}</p>}
          </div>
          <div  className='form-group'>
          <label>Last Name:</label>
          <input type="text" className={`form-control ${invalidLastName}`}   value={lastName} onChange={e => setLasttName(e.target.value)} />
          {<p className="errors" >{invalidLastName && "Enter a Last Name"}</p>}
          </div>
          <div className='form-group'>
          <label>Email:</label>
          <input type="text" className={`form-control ${invalidEmail}`}   value={email} onChange={e => setEmail(e.target.value)} />
          {<p className="errors" >{emailError}</p>}
          
          </div>
          <div className='form-group' >
          <label>Note:</label>
          <input type="text" className="form-control" className={`form-control ${invalidNote}`}   value={note} onChange={e => setNote(e.target.value)} />
          {<p className="errors" >{invalidNote && "Enter a  Note"}</p>}
          </div>
          <button className="btn btn-primary" >+Add User</button>
        </form>
        </div>
        {userList()}
      </div>
  
  );
}

export default AddUser; 