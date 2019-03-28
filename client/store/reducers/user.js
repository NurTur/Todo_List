import { CREATE, ENTERID } from "../actions/user";
import propTypes from 'prop-types';
import WithPropTypes from "./withPropTypes";

const InitalState = { _id: "", username: "", todolist: [] };
function User(state = InitalState, action) {
    switch (action.type) {
        case CREATE: return action.payload;
        case ENTERID: return Object.assign({}, state, { _id: action.payload });
        default: return state;
    }
};

export default User;
