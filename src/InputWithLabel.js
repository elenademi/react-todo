import React from 'react';
import style from './App.module.css';

function InputWithLabel(props) {

   const inputRef = React.useRef();

   React.useEffect(()=> {
    inputRef.current.focus()
   })
    
     
    return(
<>
<label htmlFor="todoTitle" className={style.input}>{props.children} </label>
 <input
   type="text"
   
   id="todoTitle"
   value={props.value} 
   onChange={props.onChange}
   name="title"
   ref={inputRef} >
   </input>

    


</>
    )
}

export default InputWithLabel