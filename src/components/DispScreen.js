import React from "react";

const DispScreen = (props) => {
    return( 
        <input type='text' id='result' value={props.text} readOnly/>
    ) 
}


export default DispScreen;