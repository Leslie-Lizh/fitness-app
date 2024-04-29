import { Typography, Box, Stack, TextField, Checkbox, Pagination } from "@mui/material"
import { useState } from "react";
export default function CompletedRecord({completedTodo}) {

    const todoPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const lastTodoIdx = todoPerPage * currentPage;
    const firstTodoidx = lastTodoIdx - todoPerPage;
    const currentPageTodo = completedTodo.slice(firstTodoidx, lastTodoIdx);

    function handlePage(e, value) {
        setCurrentPage(value);
    }

    return(
        <>
            <Typography variant="h4">Your completed history</Typography>
            <Box sx={{mt: -5, border: '1px solid black'}}>
                <Stack direction='row' gap='50px' mb='20px'>
                    <Typography>Target body part</Typography>
                    <Typography>Used equipment</Typography>
                    <Typography sx={{ml: '22px'}}>Detailed instruction</Typography>
                    <Typography>Target completion date</Typography>
                    <Typography>Completed?</Typography>
                </Stack>
                {completedTodo.length === 0 ? <div>No Data</div> :
                currentPageTodo.map((todo) => (
                    <Stack key={todo.id} direction='row' gap='25px' mb='10px'>
                        <TextField value={todo?.fields?.target_muscle} sx={{width: '110px'}}></TextField>
                        <TextField value={todo?.fields?.equipment} sx={{width: '180px'}}></TextField>
                        <TextField value={todo?.fields?.description} multiline rows={3} sx={{width: '190px'}}></TextField>
                        <TextField value={todo?.fields?.complete_by} sx={{width: '150px'}}></TextField>
                        <Checkbox disabled checked sx={{ml: '50px', alignItems: 'flex-start'}}></Checkbox>
                    </Stack>
                ))}
                <Stack mt='70px' alignItems='center'>
                    {completedTodo.length > 4 && <Pagination defaultPage={1} count={Math.ceil(completedTodo.length / todoPerPage)} page={currentPage} onChange={handlePage}></Pagination>}
                </Stack>
            </Box>
            
        </>
    )
}