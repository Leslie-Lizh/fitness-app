import { Checkbox } from "@mui/material"
import { useState } from "react"
import { patchData } from "../utilities/fetchAirData"

export default function CheckTask({todo, completeTodo}) {
    
    const [checked, setChecked] = useState(false)

    async function handleComplete(e, id) {
        setChecked(e.target.checked);
        const data = {
            fields: {
                status: "true",
            }
        }
        const completedTodo = await patchData(id, data);
        completeTodo(completedTodo);
    }

    return(        
        <>
            <Checkbox checked={checked} onChange={(e) => handleComplete(e, todo.id)} sx={{ml: '50px', alignItems: 'flex-start'}}></Checkbox>
        </>
    )
}