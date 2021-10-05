import React, { useState, useReducer } from 'react';

const ACTIONS = {
    ADD_USER: 'ADD_USER',
    DELETE_USER: 'DELETE_USER'
}


const deleteUser = e => {
    const id = parseInt(e.target.id)
    people = people.filter(e => {
      return e.id !== id;
    })
    setUsers(people)
 }


const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.ADD_USER:
         return;
        case ACTIONS.DELETE_USER:
            return deleteUser();
        default: return state; 
    }
    return 
}

export const [state, dispatch] = useReducer(reducer, {
    id:'', 
    firstName: '',
    lastName: '',
    email: '',
    note: ''
})