import "./GeneralInfo.css"
import { useState } from "react";

function GeneralInfo({generalInfo, setGeneralInfo}){
    

    return (
        <>
        <div id="generalInformation" className="inputSection">
            <h2 className="informationHeader">General Information</h2>
            <hr />
            <div className="inputRow">
                <input 
                id="name"
                className="inputText"
                placeholder="Your Name Here"
                type="text"
                value={generalInfo.name}
                onChange={(event) => setGeneralInfo({ ...generalInfo, name: event.target.value })}
                />
            </div>
            <div className="inputRow">
                <input 
                id="email"
                className="inputText"
                placeholder="Your Email Here"
                type="text"
                value={generalInfo.email}
                onChange={(event) => setGeneralInfo({ ...generalInfo, email: event.target.value })}
                />
            </div>
            <div className="inputRow">
                <input 
                id="phone"
                className="inputText"
                placeholder="Your Phone Here"
                type="text"
                value={generalInfo.phone}
                onChange={(event) => setGeneralInfo({ ...generalInfo, phone: event.target.value })}
                />
            </div>
        </div>

        </>
    )
}

export default GeneralInfo