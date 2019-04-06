import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

function HelloWorld(){
    return(
        <div><Hello/><World/></div>
    );
}

let root = document.querySelector("#root");



function Hello(){
    return(
        <span>Hello </span>
    );
}

function World(){
    return(
        <span>world</span>
    );
}


ReactDOM.render(<HelloWorld/>,root);
