import React, { useContext } from "react";
import { useState } from "react";
import { DataGridClsComponent, DataGridFnComponent } from "../data-grid";
import ThemeContext, { themes } from "../../themes/themes";

export function Body(probs) {
    // to choose cls or fn component
    const [activeTab, setActiveTab] = useState("fn");
    //to get theme information
    const theme = useContext(ThemeContext);

    return (
        <>
            <div className='container d-flex justify-content-between' style={theme}>
                <div className="btn-group tabs d-inline-flex flex-row p-2 " role="group">
                    <button onClick={() => setActiveTab("cls")} className={activeTab === "cls" ? "btn btn-primary" : "btn btn-default"}>Class Component</button>
                    <button onClick={() => setActiveTab("fn")} className={activeTab === "fn" ? "btn btn-primary" : "btn btn-default"}>Fn Component</button>
                </div>
                <div className="btn-group tabs d-inline-flex p-2 " role="group">
                    <button onClick={() => probs.setTheme(themes.light)} className={"btn btn-light"}>Light</button>
                    <button onClick={() => probs.setTheme(themes.dark)} className={"btn btn-dark"}>Dark</button>
                </div>
            </div>
            <div>
                <br />
                {activeTab === "fn" ? <DataGridFnComponent /> : <DataGridClsComponent />}
            </div>
        </>
    )
}