    var ConeCount = '0';

    function ConeAdd() {
    ConeCount++;
    }

    function ConeCounter() {
        return(
            <div>
                <p> </p>
                <p>Cone Counter:</p>
                <button type="button" onClick={ConeAdd}>{ConeCount}</button>
            </div>
        );
    }


      
export default ConeCounter;      