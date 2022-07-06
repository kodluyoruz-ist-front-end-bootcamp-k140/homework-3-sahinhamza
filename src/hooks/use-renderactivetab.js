import React from "react";
import { RenderTodos} from "./use-rendertodos";
import { RenderPosts } from "./use-renderposts";

export function RenderActiveTab(probs) {

    const renderActiveTab = () => {
        if (probs.activeTab === "todos") {
            return <RenderTodos todos={probs.todos} />
        }
        return <RenderPosts posts={probs.posts} />

    }

    return (
        <div className="container">
            <div className="btn-group tabs" role="group">
                <button
                    onClick={() => probs.changeActiveTab("todos")}
                    className={probs.activeTab === "todos" ? "btn btn-primary" : "btn btn-default"}>Todos
                </button>
                <button
                    onClick={() => probs.changeActiveTab("posts")}
                    className={probs.activeTab === "posts" ? "btn btn-primary" : "btn btn-default"}>Post
                </button>
            </div>

            {probs.todos.loading ? "Loading..." : renderActiveTab()}
        </div>
    )
}