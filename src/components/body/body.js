import React from "react";
import { DataGridClsComponent, DataGridFnComponent} from "../data-grid"; 

export function Body(probs) {
    return (
        <>
            <div className='container d-flex justify-content-between'>
                <div className="btn-group tabs d-inline-flex flex-row p-2 " role="group">
                    <button onClick={() => probs.setActiveTab("cls")} className={probs.activeTab === "cls" ? "btn btn-primary" : "btn btn-default"}>Class Component</button>
                    <button onClick={() => probs.setActiveTab("fn")} className={probs.activeTab === "fn" ? "btn btn-primary" : "btn btn-default"}>Fn Component</button>
                </div>
                <div className="d-inline-flex p-2 " role="group">
                    <button className={"btn btn-light"}>Light</button>
                    <button className={"btn btn-dark"}>Dark</button>
                </div>
            </div>
            <div>
                <br />
                {probs.activeTab === "fn" ? <DataGridFnComponent /> : <DataGridClsComponent />}
            </div>
        </>
    )
}