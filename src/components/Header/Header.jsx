import "./Header.css";


export default function Header({isInputPage, setIsInputPage}) {

    function togglePages(){
        if (isInputPage){
            setIsInputPage(false);
        } else {
            setIsInputPage(true);
        }
    }

    return(
    <>
    <div id="header">
        <h1>CV Maker</h1>
        <button id="inspectBtn" type="button" onClick={togglePages} ><i className="fa fa-eye"></i></button>
    </div>

    </>
    )
}

