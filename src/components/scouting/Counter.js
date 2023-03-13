    var testButton = '0';

    function test() {
    testButton++;
    }

    function Counter() {
        return(
            <div>
                <p> </p>
                <p>Counter:</p>
                <button type="button" onClick={test}>{testButton}</button>
            </div>
        );
    }


      
export default Counter;      