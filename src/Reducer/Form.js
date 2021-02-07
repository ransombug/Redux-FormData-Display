import {ADD} from '../Action/action-types';

export default (state = [], action) => {
    switch(action.type)
        {
            case ADD : return [...state, action.fname, action.lname, action.text];

            default : return state;
        }
}