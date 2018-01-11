import {DETAIL, FETCH, LIST} from "../actions/Actions";


export default function ghettoYelpApp(state, action) {
    let newState = Object.assign({},state);

    switch(action.type) {
        case FETCH:
            let status = action.status
            newState = Object.assign({}, state, {status});
            break;
        case LIST:
            let data = action.data
            newState = Object.assign({}, state, {data});
            console.log(newState);
            break;
        case DETAIL:
            let item = action.item;
            console.log(action);
            newState = Object.assign({}, state, {item});
            console.log(newState);
            break;
        default:
            return state;

    }
    return newState;


}

