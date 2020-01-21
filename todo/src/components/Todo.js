import React from 'react';

function Todo(props){
    console.log(props);
return(

    <p>{props.props.item}{props.props.completed}</p>
);
};

export default Todo;