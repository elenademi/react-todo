import React from 'react';

function InputWithLabel(props) {

   const inputRef = React.useRef();

   React.useEffect(()=> {
    inputRef.current.focus()
   })
    
     
    return(
<>
<label htmlFor="todoTitle">{props.children} </label>
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