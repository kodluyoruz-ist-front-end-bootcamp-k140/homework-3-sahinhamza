import React, { useState } from "react";
import { useFetch, RenderActiveTab } from "../../hooks";

export function DataGridFnComponent() {

    const [activeTab, setActiveTab] = useState("todos")
    
    // to fetch todos and posts
    const todos = useFetch("https://jsonplaceholder.typicode.com/todos")
    const posts = useFetch("https://jsonplaceholder.typicode.com/posts")

    // to change the data to be displayed
    const changeActiveTab = (value) => {
        return (
            setActiveTab(value)
        )
    }
    return (
        <>
            <RenderActiveTab
                activeTab={activeTab}
                changeActiveTab={changeActiveTab}
                todos={todos.data}
                posts={posts.data} />

            {todos.error ? todos.error : null}
            {posts.error ? posts.error : null}

        </>
    )
}

