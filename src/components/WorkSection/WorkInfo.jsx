import { useState } from "react"
import "./Work.css"


function WorkInfo ({workObject, workInfo, setWorkInfo, index}) {
    
    const [info, setInfo] = useState(workObject);

    const handleSetInfo = (e) => {
        const val = e.target.value;
        const key = e.target.name;
        setInfo({
          ...info,
          [key]: val,
        });
    
        let dupWork = [...workInfo];
        dupWork[index][key] = val;
        setWorkInfo(dupWork);
    };

    const removeWork = () => {
        let dupArr = [...workInfo];
        dupArr.splice(index, 1);
        setWorkInfo(dupArr);
    };
    return (
    <>
        <div className="workBox">
            <div className="inputRow">
            <input 
                name="companyName"
                className="inputText"
                placeholder="Company Name Here"
                type="text"
                value={info.companyName}
                onChange={handleSetInfo}
            />
            </div>
            <div className="inputRow">
            <input 
                name="positionTitle"
                className="inputText"
                placeholder="Title of Position Here"
                type="text"
                value={info.positionTitle}
                onChange={handleSetInfo}
            />
            </div>
            <div className="inputRow">
            <input 
                name="mainResponsibilities"
                className="inputText"
                placeholder="Main Responsibilites"
                type="text"
                value={info.mainResponsibilities}
                onChange={handleSetInfo}
            />
            </div>
            <div className="flex">
            <div className="inputRow">
                <input 
                    name="dateOfWorkStart"
                    className="inputText"
                    placeholder="Start Date"
                    type="date"
                    value={info.dateOfWorkStart}
                    onChange={handleSetInfo}
                />
            </div>
            <div><p className="whiteTextBold">To</p></div>
            <div className="inputRow">
                <input 
                    name="dateOfWOrkEnd"
                    className="inputText"
                    placeholder="End Date"
                    type="date"
                    value={info.dateOfWOrkEnd}
                    onChange={handleSetInfo}
                />
            </div>
            </div>
            <div className="inputRow">
                <button
                type="button"
                className="deleteWorkBtn"
                onClick={removeWork}
                >
                Delete Work
                </button>
            </div>
        </div>
        <hr />
    </>
    )
}

export default WorkInfo