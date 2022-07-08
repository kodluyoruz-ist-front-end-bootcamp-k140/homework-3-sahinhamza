import React, { useContext } from "react";
import ThemeContext from "../themes/themes";

// this component is used to render todos
export function RenderTodos( probs ) {
    const theme = useContext(ThemeContext)

    const renderBody = () => {
        return (
            <>
                {probs.todos.slice(0, 20).sort((a, b) => b.id - a.id).map((item, index) => {
                    return (
                        <tr key={item.id} style={theme}>
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
                <tr style={theme}>
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