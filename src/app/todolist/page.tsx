'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

interface Tdata {
    "id": string;
    "text": string;
    "completed": string;
}

// 기본 URL 설정
const baseurl:string = "http://localhost:3005/todos"

export default function TodoList() {
    const [tdata, setTdata] = useState<Tdata[]>([]);

    // Todoitem들을 가져오는 함수
    const getData = async () => {
        const data = await axios.get(baseurl);
        setTdata(data.data);
    }

    // DB에 Todoitem의 내용과 완료 여부를 추가하는 함수
    const addTodo = async (text:string, completed:string) => {
        const resp = await axios.post(baseurl, {
            text: text,
            completed: completed
        })
        console.log("addTodo", resp.data)
        getData();
    }

    // DB에 Todoitem의 내용을 삭제하는 함수
    const handleDelete = async (id:string) => {
        await axios.delete(baseurl + `/${id}`);
        
        getData();
    }

    // DB에 Todoitem의 완료 여부를 수정하는 함수
    const handleToggle = async (id:string) => {
        const resp = await axios.get(baseurl + `/${id}`);
        const todo = resp.data;

        const done = todo.completed == "O" ? "X" : "O";
        await axios.patch(baseurl + `/${id}`, {
            completed : done
        });
        getData();
    }

    // 화면 랜더링 시 DB에서 Todoitem들을 가져옴
    useEffect(()=>{
        getData();
    },[]);

    useEffect(()=>{
        if(!tdata) return;

    }, [tdata]);

    return (
    <div className="w-full flex flex-col justify-center items-center">
        <TodoForm addTodo={addTodo}/>
        <div className="w-10/12 mt-10 flex flex-col justify-center">
            {/* 초기값을 빈 배열로 했으니 tdata && 설정 안 해도 됨 */}
            { tdata.map((item:Tdata) => 
                <TodoItem key={item.id} id={item.id} text={item.text} completed={item.completed} handleDelete={handleDelete} handleToggle={handleToggle}/>)}
        </div>
    </div>
    )
}
