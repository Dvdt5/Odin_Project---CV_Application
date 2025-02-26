import { useState } from "react"
import "./Education.css"


function EducationalInfo ({educationObject, educationInfo, setEducationInfo, index}) {
    
    const [info, setinfo] = useState(educationObject);

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
                name="nameOfSchool"
                className="inputText"
                placeholder="School Name Here"
                type="text"
                value={info.schoolName}
                onChange={(event) => setinfo({ ...info, schoolName: event.target.value })}
            />
            </div>
            <div className="inputRow">
            <input 
                name="titleOfStudy"
                className="inputText"
                placeholder="Title of Study"
                type="text"
                value={info.titleOfStudy}
                onChange={(event) => setinfo({ ...info, titleOfStudy: event.target.value })}
            />
            </div>
            <div className="inputRow">
            <input 
                name="studyStartDate"
                className="inputText"
                placeholder="Start Date"
                type="text"
                value={info.dateOfStudyStart}
                onChange={(event) => setinfo({ ...info, dateOfStudyStart: event.target.value })}
            />
            </div>
            <div className="inputRow">
            <input 
                name="studyEndDate"
                className="inputText"
                placeholder="End Date"
                type="text"
                value={info.dateOfStudyEnd}
                onChange={(event) => setinfo({ ...info, dateOfStudyEnd: event.target.value })}
            />
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