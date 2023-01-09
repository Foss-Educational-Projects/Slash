import React from "react";
import Button from 'react-bootstrap/Button'
import buttons  from './../data/Audio'
const DrumPlayButtons = () => {
	
	const playAudio =(e) => {
		e.currentTarget.childNodes[1].play()
	}
	return (
		<div className="play-button-container">
			<div className="drum-play-buttons">
				{buttons.map((btn, index) => {
					return (
						<Button variant="none" key={index} id={btn.id} onClick={playAudio} className='drum-pad text-uppercase'>
							{btn.id}
							<audio>
								<source src={btn.audioSrc} type="audio/mpeg" />
							</audio>
						</Button>
					)
				})}
			</div>
		</div>
	)
}

export default DrumPlayButtons;