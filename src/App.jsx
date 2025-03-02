import { useState } from 'react'
import Header from './components/Header/Header'
import GeneralInfo from './components/GeneralInfo/GeneralInfo'
import EducationalExperience from './components/EducationalSection/EducationalExperience'
import WorkExperience from './components/WorkSection/WorkExperience'

function App() {
  

  return (
    <>
      <Header />
      <>
      <GeneralInfo/>
      <EducationalExperience />
      <WorkExperience />
      </>
    </>
  )
}

export default App
