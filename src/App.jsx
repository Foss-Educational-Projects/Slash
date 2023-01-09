import { useSelector } from 'react-redux'

import DrumPlayButtons from './components/Drum-Play-Buttons';
import DrumControlButtons from './components/Drum-Control-Buttons';
import DrumTitle from './components/Drum-Title';

function App() {
  // const volume = useSelector((state) => state.volume)
  return (
    <div className="App" id='drum-machine'>
        <DrumTitle />
        <DrumPlayButtons />
        <DrumControlButtons />
    </div>
  )
}

export default App