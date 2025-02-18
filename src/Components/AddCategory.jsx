import { useState } from "react"  

export const AddCategory =({OnNewCategory})=>{    
const [inputValue, setInputValue] = useState('');

 const onInputchange=(event)=>{
    //console.log(event.target.value)
   setInputValue(event.target.value)
 }

 const onsubmit=(event)=>{
    event.preventDefault();
    console.log(inputValue)
    if(inputValue.trim().length <= 1) return
    OnNewCategory(inputValue.trim())
    setInputValue('')
    //setcategories(  cats => [...cats,inputValue])
    
    
 }

return (
<form onSubmit={ onsubmit}>
<input
       type="text"
       placeholder="Buscar Gifs"
       value={inputValue}
     onChange={onInputchange}
      />
</form>
       
     
      )
    }