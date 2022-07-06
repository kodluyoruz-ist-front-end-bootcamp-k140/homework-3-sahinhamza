import React from "react";
import { RenderActiveTab } from "../../hooks";

export class DataGridClsComponent extends React.Component {
    constructor(probs) {
        super(probs)
        this.state = {
            loading: false,
            activeTab: "todos",
            todos: [],
            posts: [],

        }
    }

    componentDidMount() {
        this.setState({ ...this.state, loading: true })
        Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then(res => res.json()),
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
        ])
            .then(([TODOS, POSTS]) => {
                this.setState({
                    ...this.state,
                    loading: false,
                    todos: TODOS,
                    posts: POSTS
                });
            })
            .catch(e => {
                this.setState({ ...this.state, loading: false })
            })
    }

    changeActiveTab = (value) => {
        this.setState({ ...this.state, activeTab: value })
    }

    render() {
        return (
            <>
            <RenderActiveTab
                activeTab={this.state.activeTab}
                changeActiveTab={this.changeActiveTab}
                todos={this.state.todos}
                posts={this.state.posts} />

            </>
        )
    }

}