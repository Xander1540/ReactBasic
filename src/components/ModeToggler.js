import React from 'react';

function ModeToggler(){

    var darkModeOn = false;

    const clickHandler = ()=>{
        if(darkModeOn){
            console.log("Dark Mode")
            darkModeOn = false
        }else{
            console.log("Light Mode")
            darkModeOn = true
        }
    }

    return(
        <div>
            <button onClick={clickHandler}>
                Mode
            </button>
        </div>
    )
}

export default ModeToggler;