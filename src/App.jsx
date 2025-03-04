import { useState } from 'react'
import Header from './components/Header/Header'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'
import EducationalExperience from './components/EducationalSection/EducationalExperience'
import WorkExperience from './components/WorkSection/WorkExperience'
import CvSheet from './components/CVSheet/CvSheet'

function App() {
  const [isInputPage, setIsInputPage] = useState(true);

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationInfo, setEducationInfo] = useState([{
    id: crypto.randomUUID(),
    schoolName: "",
    titleOfStudy: "",
    dateOfStudyStart: "",
    dateOfStudyEnd: ""
  }]);

  const [workInfo, setWorkInfo] = useState([{
    id: crypto.randomUUID(),
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateOfWorkStart: "",
    dateOfWorkEnd: ""
  }]);

  return (
    <>
      <Header
      isInputPage={isInputPage}
      setIsInputPage={setIsInputPage}
      />
      {isInputPage ?
      (<>
        <GeneralInfo
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        />
        <EducationalExperience
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
        />
        <WorkExperience
        workInfo={workInfo}
        setWorkInfo={setWorkInfo}
        />
        </>)
      :
      (<CvSheet
      generalInfo={generalInfo}
      educationInfo={educationInfo}
      workInfo={workInfo}
        />
      )}
      
    </>
  )
}

export default App
