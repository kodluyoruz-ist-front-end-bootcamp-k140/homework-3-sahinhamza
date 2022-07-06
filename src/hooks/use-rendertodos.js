import React from "react";

export function RenderTodos( probs ) {
  
    const renderBody = () => {
        return (
            <>
                {probs.todos.slice(0, 20).sort((a, b) => b.id - a.id).map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <th scope="row" >{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.completed ? "Tamamlandı" : "Tamamlanmadı"}</td>
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
                    <th scope="col">Durum</th>
                </tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    </>
    )
}