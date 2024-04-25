import { Stack, Box, Typography, Checkbox, Button, TextField } from "@mui/material"
import { deleteData } from "../utilities/fetchAirData"
import { useState } from "react";
import { Pagination } from "@mui/material"

export default function TodoList({todoList, deleteTodo}) {

    const todoPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const lastTodoIdx = todoPerPage * currentPage;
    const firstTodoidx = lastTodoIdx - todoPerPage;
    const currentPageTodo = todoList.slice(firstTodoidx, lastTodoIdx);

    function handleDelete(id) {
        deleteData(id);
        deleteTodo(id);
    }

    function handlePage(e, value) {
        setCurrentPage(value);
    }

    return(
        <>
            <Typography variant="h4">Manage your fitness schedule</Typography>
            <Box sx={{mt: -5, border: '1px solid black'}}>        
                <Stack direction='row' gap='50px' mb='20px'>
                    <Typography>Target body part</Typography>
                    <Typography>Used equipment</Typography>
                    <Typography sx={{ml: '22px'}}>Detailed instruction</Typography>
                    <Typography>Target completion date</Typography>
                    <Typography>Completed?</Typography>
                    <Typography>Delete schedule</Typography>
                </Stack>
                {currentPageTodo.map((todo) => (
                    <Stack key={todo.id} direction='row' gap='25px' mb='10px'>
                        <TextField value={todo?.fields?.target_muscle} sx={{width: '110px'}}></TextField>
                        <TextField value={todo?.fields?.equipment} sx={{width: '180px'}}></TextField>
                        <TextField value={todo?.fields?.description} multiline rows={3} sx={{width: '190px'}}></TextField>
                        <TextField value={todo?.fields?.complete_by} sx={{width: '150px'}}></TextField>
                        <Checkbox sx={{ml: '50px', alignItems: 'flex-start'}}></Checkbox>
                        <Button sx={{ml: '80px', alignItems: 'flex-start'}} onClick={() => handleDelete(todo.id)}>❌</Button>
                    </Stack>
                ))}
                <Stack mt='70px' alignItems='center'>
                    {todoList.length > 4 && <Pagination defaultPage={1} count={Math.ceil(todoList.length / todoPerPage)} page={currentPage} onChange={handlePage}></Pagination>}
                </Stack>
            </Box>
        </>
    )
}