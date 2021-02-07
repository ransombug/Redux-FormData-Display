import {ADD} from './action-types';

export const add = (fname,lname,text) => ({
    type : ADD,
    fname : fname,
    lname : lname,
    text : text
})

