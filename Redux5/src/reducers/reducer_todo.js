export function todo(state={counter:0}, action){
    let count = state.counter;
    switch(action.type){
        case "addToDo":{
            count = count+1
            return {
                counter:state.counter+1,
                tasks: {
                        ...state.tasks,
                        [count]: {
                            text: action.payload.text,
                            completed: false
                        }
                    }
                }
            }

        case "toggleToDo":{
            return {
                counter: state.counter,
                tasks:{
                    ...state.tasks,
                    [action.payload.id]:{
                        text: state.tasks[action.id].text,
                        completed: !state.tasks[action.payload.id].completed
                    }
                }
            }
        }

        default:
        return state;
    }       
}