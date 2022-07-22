import React, { useContext } from "react";
import ThemeContext from "../themes/themes";

// this component is used to render posts
export function RenderPosts(probs) {

    const theme = useContext(ThemeContext)

    const renderPostsBody = () => {
        return (
            <>
                {probs.posts.slice(0, 20).sort((a, b) => b.id - a.id).map((item, index) => {
                    return (
                        <tr key={item.id} style={theme}>
                            <th scope="row" >{item.id}</th>
                            <td>{item.title}</td>
                        </tr>
                    )
                })}
            </>
        )
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr style={theme}>
                        <th scope="col">#</th>
                        <th scope="col">Başlık</th>
                    </tr>
                </thead>
                <tbody>
                    {renderPostsBody()}
                </tbody>
            </table>
        </>
    )
}