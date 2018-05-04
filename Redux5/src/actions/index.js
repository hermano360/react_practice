export function addTodo(value){
    return {
        type:"addToDo",
        payload: {
            text: value
        }
    };
};

export function toggleTodo(id){
    return {
        id
    };
};
