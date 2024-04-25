import { Stack, TextField, Select, MenuItem, InputLabel, FormControl, Button } from "@mui/material"
import { useState } from "react"
import { postData } from "../utilities/fetchAirData"

export default function FormField({addTodo}) {
    const bodyOption = ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']

    const eqptOption = ['assisted', 'band', 'barbell', 'body weight', 'bosu ball', 'cable', 'dumbbell', 'elliptical machine', 'ez barbell', 'hammer', 'kettlebell', 'leverage machine', 'medicine ball', 'olympic barbell', 'resistance band', 'roller', 'rope', 'skierg machine', 'sled machine', 'smith machine', 'stability ball', 'stationary bike', 'stepmill machine', 'tire', 'trap bar', 'upper body ergometer', 'weighted', 'wheel roller']

    const [bodyPart, setBodyPart] = useState('')
    const [equipment, setEquipment] = useState('')
    const [date, setDate] = useState('2024-04-30')
    const [instruction, setInstruction] = useState('')



    async function handleSubmission(e) {
        e.preventDefault();

        const formData = new FormData(e.target); 
        const data = Object.fromEntries(formData);
        const payload = {
            fields: {
                target_muscle: data.bodyPart,
                equipment: data.equipment,
                description: data.instruction,
                complete_by: data.date,
                status: "false",
                delete: "false", 
            }
        }
        const newData = await postData(payload)
        console.log(newData)
        addTodo(newData);
        setBodyPart("");
        setEquipment("");
        setDate("2024-04-30");
        setInstruction("");
    }    

    return(
        <form onSubmit={handleSubmission}>
            <fieldset style={{ width: '900px', height: '150px', borderRadius: '10px'}}>
                <legend>Make your fitness schedule</legend>
                    <Stack direction='row' gap='10px' mt='5px'>
                        <FormControl required sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel id='body' sx={{fontSize: '8px', fontWeight: 'bold'}}>Select your target body part</InputLabel>
                            <Select name="bodyPart" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} labelId="body" autoWidth sx={{height: '40px'}}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {bodyOption.map((option) => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <FormControl required sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel id='eqpt' sx={{fontSize: '8px', fontWeight: 'bold'}}>Select your equipment</InputLabel>
                            <Select name="equipment" value={equipment} onChange={(e) => setEquipment(e.target.value)} labelId="eqpt" autoWidth sx={{height: '40px'}}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {eqptOption.map((option) => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <TextField name="date" required value={date} onChange={(e) => setDate(e.target.value)} label='Date of completion' type="date" sx={{height: '10px', ml: '10px'}}></TextField>
                        <TextField name="instruction" required value={instruction} onChange={(e) => setInstruction(e.target.value)} label='How you want to perform' sx={{width: '300px', ml: '20px'}} multiline rows={3}></TextField>
                        <Button type="submit" variant='contained' sx={{height: '40px', ml: '10px'}}>Submit</Button>
                    </Stack>
            </fieldset>
        </form>
    )
}