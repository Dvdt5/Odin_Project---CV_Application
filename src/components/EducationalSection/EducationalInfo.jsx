import { useState } from "react"
import "./Education.css"


function EducationalInfo ({educationObject, educationInfo, setEducationInfo, index}) {
    
    const [info, setInfo] = useState(educationObject);
    
    const handleSetInfo = (e) => {
    const val = e.target.value;
    const key = e.target.name;
    setInfo({
      ...info,
      [key]: val,
    });

    let dupEducation = [...educationInfo];
    dupEducation[index][key] = val;
    setEducationInfo(dupEducation);
    };

    const removeEducation = () => {
        let dupArr = [...educationInfo];
        dupArr.splice(index, 1);
        setEducationInfo(dupArr);
    };
    return (
    <>
        <div className="educationBox">
            <div className="inputRow">
            <input 
                name="schoolName"
                className="inputText"
                placeholder="School Name Here"
                type="text"
                value={info.schoolName}
                onChange={handleSetInfo}
            />
            </div>
            <div className="inputRow">
            <input 
                name="titleOfStudy"
                className="inputText"
                placeholder="Title of Study"
                type="text"
                value={info.titleOfStudy}
                onChange={handleSetInfo}
            />
            </div>
            <div className="flex">
            <div className="inputRow">
                <input 
                    name="dateOfStudyStart"
                    className="inputText"
                    placeholder="Start Date"
                    type="date"
                    value={info.dateOfStudyStart}
                    onChange={handleSetInfo}
                />
            </div>
            <div><p className="whiteTextBold">To</p></div>
            <div className="inputRow">
                <input 
                    name="dateOfStudyEnd"
                    className="inputText"
                    placeholder="End Date"
                    type="date"
                    value={info.dateOfStudyEnd}
                    onChange={handleSetInfo}
                />
            </div>
            </div>
            <div className="inputRow">
                <button
                type="button"
                className="deleteEducationBtn"
                onClick={removeEducation}
                >
                Delete Education
                </button>
            </div>
        </div>
        <hr />
    </>
    )
}

export default EducationalInfo