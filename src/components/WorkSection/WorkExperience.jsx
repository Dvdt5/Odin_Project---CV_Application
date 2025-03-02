import { useState } from "react"
import WorkInfo from "./WorkInfo"
import "./Work.css"



function WorkExperience () {
    
    const [workInfo, setWorkInfo] = useState([{
        id: crypto.randomUUID(),
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        dateOfWorkStart: "",
        dateOfWorkEnd: ""
    }]);
    
    function AddWork(){
      const newArray = [...workInfo];
      newArray.push(
        {
          id: crypto.randomUUID(),
          companyName: "",
          positionTitle: "",
          mainResponsibilities: "",
          dateOfWorkStart: "",
          dateOfWorkEnd: ""
      }
      );
      setWorkInfo(newArray);

    }

    return (
    <>
        <div className="inputSection" id="workInputSection">
        <h2 className="informationHeader">Practical Experience Information</h2>
        <hr />
        <button id="addWorkBtn" onClick={AddWork}>
          <i className="fa fa-plus"></i>
          </button>
        {workInfo.length === 0 ? (
            <p id="noWorkText">Click plus to add an Work Experience</p>
          ) : (
            workInfo.map((work, index) => {
              return (
                <WorkInfo
                key={work.id}
                index={index}
                workObject={work}
                workInfo={workInfo}
                setWorkInfo={setWorkInfo}
                />
              );
            })
          )}
            
        </div>
    </>
    )
}

export default WorkExperience