import { Stack, Typography } from "@mui/material"
import FormField from '../components/FormField'
import TodoList from '../components/TodoList'
import CompletedRecord from "../components/CompletedRecord"
import { useEffect, useState } from "react"

export default function FitnessTracker() {

    const [todoList, setTodoList] = useState([])

    useEffect(()=> {
        async function fetchAirtableData() {
            const url = 'https://api.airtable.com/v0/appeJcPDiKfIk03Rc/Table%201';
            const token = 'pat0uHbyykpYkbsGA.6acbfa9e949f3632d070b6b7f726443fff54246c6df73911ef9754eccb772780';
            const response = await fetch(url, {
                method: 'Get',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            })
            const jsonData = await response.json();
            setTodoList(jsonData?.records)
        }
        fetchAirtableData();
    }, [])

    const addTodo = (todo) => {
        setTodoList([todo, ...todoList]);
    };

    const deleteTodo = (todoId) => {
        setTodoList(todoList.filter((todo) => todo.id !== todoId))
    }

    const completeTodo = (item) => {
        setTodoList(todoList.map((todo) => todo.id === item.id ? item : todo))
    }

    const incompleteTodo = todoList.filter((todo) => todo.fields?.status === 'false');
    const completedTodo = todoList.filter((todo) => todo.fields?.status === 'true');

    return(
        <Stack gap="60px" alignItems='center' p='20px' mt='20px'>
             <Typography variant="h4">
                DIY your fitness today!
             </Typography>
             <FormField addTodo={addTodo}/>
             <TodoList incompleteTodo={incompleteTodo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
             <CompletedRecord completedTodo={completedTodo}/>
        </Stack>
    )
}