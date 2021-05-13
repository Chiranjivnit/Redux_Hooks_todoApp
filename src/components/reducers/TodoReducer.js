
const initialState = {
    list: []
}

const TodoReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'ADD_Item':
            let { id, data } = actions.payLoad;
            if (data !== '') {
                return {
                    ...state, list: [...state.list, { id:id, data:data }]
                }
            }
            break;
        case'EDIT_ITEM':
        //console.log(actions.payLoad.data)
         //return {...state,list:actions.payLoad.data}
        case 'DELETE_ITEM':
            return { ...state, list: actions.payLoad.data }
        default: return state;
    }
}
export default TodoReducer;