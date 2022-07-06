import React from "react";

export function RenderPosts(probs) {

    const renderPostsBody = () => {
        return (
            <>
                {probs.posts.slice(0, 20).sort((a, b) => b.id - a.id).map((item, index) => {
                    return (
                        <tr key={item.id}>
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
                    <tr>
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