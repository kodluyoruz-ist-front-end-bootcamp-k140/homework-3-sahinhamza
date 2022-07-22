import React, { useContext } from "react";
import { RenderTodos} from "./use-rendertodos";
import { RenderPosts } from "./use-renderposts";
import ThemeContext from "../themes/themes";

export function RenderActiveTab(probs) {
    
    // to render active tab
    const renderActiveTab = () => {
        if (probs.activeTab === "todos") {
            return <RenderTodos todos={probs.todos} />
        }
        return <RenderPosts posts={probs.posts} />

    }

    const theme = useContext(ThemeContext);

    return (
        <div className="container" style={theme}>
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