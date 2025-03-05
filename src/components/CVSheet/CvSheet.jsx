import "./CvSheet.css"


function CvSheet({generalInfo, workInfo, educationInfo}){

    return (
        <>
        <div id="cvSheet">
        <div id="cvHead">
            <div id="cvName">
                <h2>{generalInfo.name}</h2>
            </div>
            <hr className="cvHr"/>
            <div id="cvContact">
                <p><strong>Phone:</strong> {generalInfo.phone}</p>
                <p><strong>Email:</strong> {generalInfo.email}</p>
            </div>

        </div>
            <hr className="cvHrLong"/>
        <div id="cvEducation">
            <div>
            <h2>Education</h2>
            </div>
            <div>
            {educationInfo.map((education)=>{
            return (
            <>
            
            <div className="cvEducationItem">
                <p>{education.titleOfStudy}: &nbsp;  <span className="cvDate">{education.dateOfStudyStart} --- {education.dateOfStudyEnd}</span></p>
                <p><strong>{education.schoolName}</strong></p>
                <p></p>
                <p></p>
            </div>
            <hr className="hrStriped"/>
            </>
            )})}
            </div>
        </div>
        </div>
        </>
    )
}

export default CvSheet