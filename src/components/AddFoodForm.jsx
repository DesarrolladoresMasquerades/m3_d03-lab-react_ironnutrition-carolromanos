import {Button, Input, InputNumber}  from "antd";
import { useState } from "react/cjs/react.development"
export default function AddFoodForm(props){
    const [formState, setFormState] = useState({})

    function handleSubmit(event){
        event.preventDefault()
       // props.parentCB(formState)
        setFormState({})
    }

    function handleInput(event){
        let {name, value} = event.target
        setFormState(Object.assign({}, formState, {[name]: value}))

    }
        
    return(
        <div>
            <label htmlFor="name">Name:</label>
            <Input width="30px" value={"formState.name"} placeholder="Name" type="text" onChange={handleInput} />
            
            <label htmlFor="image">Image:</label>
            <Input value={"formState.image"} placeholder="Image url" type="text" onChange={handleInput} />
            
            <label htmlFor="calories">Calories:</label>
            <Input value={"formState.calories"} placeholder="Calories" type="text" onChange={handleInput} />

            <label htmlFor="servings">Calories:</label>
            <InputNumber value={"formState.servings"} placeholder="Servings" type="text" onChange={handleInput} />
            <Button />
        </div>
    )
}