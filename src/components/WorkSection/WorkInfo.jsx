import { useState } from "react"
import "./Work.css"


function WorkInfo ({workObject, workInfo, setWorkInfo, index}) {
    
    const [info, setinfo] = useState(workObject);

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
                name="nameOfCompany"
                className="inputText"
                placeholder="Company Name Here"
                type="text"
                value={info.companyName}
                onChange={(event) => setinfo({ ...info, companyName: event.target.value })}
            />
            </div>
            <div className="inputRow">
            <input 
                name="titleOfPosition"
                className="inputText"
                placeholder="Title of Position Here"
                type="text"
                value={info.positionTitle}
                onChange={(event) => setinfo({ ...info, positionTitle: event.target.value })}
            />
            </div>
            <div className="inputRow">
            <input 
                name="mainResponsibilities"
                className="inputText"
                placeholder="Main Responsibilites"
                type="text"
                value={info.mainResponsibilities}
                onChange={(event) => setinfo({ ...info, mainResponsibilities: event.target.value })}
            />
            </div>
            <div className="flex">
            <div className="inputRow">
                <input 
                    name="studyStartDate"
                    className="inputText"
                    placeholder="Start Date"
                    type="date"
                    value={info.dateOfWorkStart}
                    onChange={(event) => setinfo({ ...info, dateOfWorkStart: event.target.value })}
                />
            </div>
            <div><p className="whiteTextBold">To</p></div>
            <div className="inputRow">
                <input 
                    name="studyEndDate"
                    className="inputText"
                    placeholder="End Date"
                    type="date"
                    value={info.dateOfWOrkEnd}
                    onChange={(event) => setinfo({ ...info, dateOfWorkEnd: event.target.value })}
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