import { useState } from "react"
import "./Education.css"
import EducationalInfo from "./EducationalInfo";



function EducationalExperience () {
    
    const [educationInfo, setEducationInfo] = useState([{
        id: crypto.randomUUID(),
        schoolName: "",
        titleOfStudy: "",
        dateOfStudyStart: "",
        dateOfStudyEnd: ""
    }]);
    
    function AddEducation(){
      const newArray = [...educationInfo];
      newArray.push(
        {
          id: crypto.randomUUID(),
          schoolName: "",
          titleOfStudy: "",
          dateOfStudyStart: "",
          dateOfStudyEnd: ""
      }
      );
      setEducationInfo(newArray);

    }
    console.log(educationInfo)

    return (
    <>
        <div className="inputSection" id="educationInputSection">
        <h2 className="informationHeader">Educational Information</h2>
        <hr />
        <button id="addEducationBtn" onClick={AddEducation}>
          <i className="fa fa-plus"></i>
          </button>
        {educationInfo.length === 0 ? (
            <p>click plus to add a segment</p>
          ) : (
            educationInfo.map((education, index) => {
              return (
                <EducationalInfo
                key={education.id}
                index={index}
                educationObject={education}
                educationInfo={educationInfo}
                setEducationInfo={setEducationInfo}
                />
              );
            })
          )}
            
        </div>
    </>
    )
}

export default EducationalExperience