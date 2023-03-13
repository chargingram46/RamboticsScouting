const displays = ['3201', '254'];  

function Display() {
    const chosenDisplay = Math.random() > 0.5 ? displays[0] : displays[1];
    
    return (
        <div>
            <p>{chosenDisplay}</p>
        </div>
    )
}

export default Display;