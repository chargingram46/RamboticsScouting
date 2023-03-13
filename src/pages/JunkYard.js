import Display from '../components/scouting/Display.js';
import TestForm from '../components/scouting/TestForm.js';
import CubeCounter from '../components/scouting/CubeCounter.js';
import ConeCounter from '../components/scouting/ConeCounter.js';
import Counter from '../components/scouting/Counter.js';

function JunkYardPage() {
    return(
        <div className='junk'>
            <Display />
            <TestForm />
            <Counter />
            <ConeCounter />
            <CubeCounter />
        </div>
    );
}

export default JunkYardPage;