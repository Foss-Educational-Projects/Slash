import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import buttons from './../data/Audio'
import { changeText } from './../data/Data'

const [text, setText] = useState("")
const DrumPlayButtons = () => {
	const dispatch = useDispatch()
	const playAudioByMouse = (e) => {
		e.currentTarget.childNodes[1].play()

	}
	useEffect(() => {
		window.addEventListener('keydown', (e) => {
			switch (e.key) {
				case 'q':
					document.getElementById('q').childNodes[1].play()
					setText(buttons[0].name)
					break;
				case 'w':
					document.getElementById('w').childNodes[1].play()
					setText(buttons[1].name)
					break;
				case 'e':
					document.getElementById('e').childNodes[1].play()
					setText(buttons[2].name)
					break;
				case 'a':
					document.getElementById('a').childNodes[1].play()
					setText(buttons[3].name)
					break;
				case 's':
					document.getElementById('s').childNodes[1].play()
					setText(buttons[4].name)
					break;
				case 'd':
					document.getElementById('d').childNodes[1].play()
					setText(buttons[5].name)
					break;
				case 'z':
					document.getElementById('z').childNodes[1].play()
					setText(buttons[6].name)
					break;
				case 'x':
					document.getElementById('x').childNodes[1].play()
					setText(buttons[7].name)
					break;
				case 'c':
					document.getElementById('c').childNodes[1].play()
					setText(buttons[8].name)
					break;
				default:
					console.log("This Key Is Not Associated With Any Functionality Of The App");
					break;
			}
		})
	}, [])
	return (
		<div className="play-button-container">
			<div className="drum-play-buttons">
				{buttons.map((btn, index) => {
					return (
						<Button 
							variant="none" 
							key={index} 
							id={btn.id} 
							onClick={playAudioByMouse}  
							className='drum-pad text-uppercase'
						>
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
export { text };
export default DrumPlayButtons;