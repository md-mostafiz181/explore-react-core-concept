

// const Todo = ({task,isDone}) => {
//     return (
//         <div>
//             <li>Task: {task}</li>
            
//         </div>
//     );

// };

// export default Todo;



const Todo = ({task, isDone}) => {
    if(isDone){
        return <li>Task: ${task}</li>
    }
    else{
        return <li>Work on : {task}</li>
    }
};

export default Todo;