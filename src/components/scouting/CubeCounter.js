    var CubeCount = '0';

    function CubeAdd() {
    CubeCount++;
    }

    function CubeCounter() {
        return(
            <div>
                <p> </p>
                <p>Cube Counter:</p>
                <button type="button" onClick={CubeAdd}>{CubeCount}</button>
            </div>
        );
    }


      
export default CubeCounter;      