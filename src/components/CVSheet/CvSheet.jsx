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
            <hr className="cvHrLong"/>

        </div>
        </div>
        </>
    )
}

export default CvSheet