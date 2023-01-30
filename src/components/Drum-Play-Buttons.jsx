import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { heaterAudios, bankAudios } from './../data/Audio'
import { changeText } from './../features/activeValueSlice'

const DrumPlayButtons = () => {
	const audioVolume = useSelector((state) => parseFloat(Math.fround(state.volume.value / 100).toFixed(1)))
	const powerMode = useSelector((state) => state.powerMode.value)
	const bankMode = useSelector((state) => state.bankMode.value)
	const dispatch = useDispatch()

	const keyDownEvents = (node) => {
		let dom = document.getElementById(node);
		console.log(powerMode)
		if(powerMode){
			dom.childNodes[1].play();
		}
		dom.style.top = "10px";
		setTimeout(() => {
			dom.style.top = "";
		}, 100)
		dispatch(changeText(dom.value))
	}

	const mouseDownEvents = (e) => {
		e.target.childNodes[1].play()
		dispatch(changeText(e.target.value))
		
	}
	const setVolumeValue = (e) => {
		e.audio = audioVolume;
	}
	useEffect(() => {
		window.addEventListener('keydown', (e) => {
			switch (e.key) {
				case 'q':
					keyDownEvents("q")
					break;
				case 'w':
					keyDownEvents("w")
					break;
				case 'e':
					keyDownEvents("e")
					break;
				case 'a':
					keyDownEvents("a")
					break;
				case 's':
					keyDownEvents("s")
					break;
				case 'd':
					keyDownEvents("d")
					break;
				case 'z':
					keyDownEvents("z")
					break;
				case 'x':
					keyDownEvents("x")
					break;
				case 'c':
					keyDownEvents("c")
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
				{!bankMode ? heaterAudios.map((btn, index) => {
					return (
						<Button 
							variant="none" 
							key={index} 
							id={btn.id}
							value={btn.audioName}
							onClick={mouseDownEvents}
							className='drum-pad text-uppercase'
						>
							{btn.id}
							<audio volume={audioVolume} src={btn.audioSrc} onVolumeChange={setVolumeValue}>
							</audio>
						</Button>
					)
				})
					: bankAudios.map((btn, index) => {
						return (
							<Button 
								variant="none" 
								key={index} 
								id={btn.id}
								value={btn.audioName}
								onClick={mouseDownEvents}
								className='drum-pad text-uppercase'
							>
								{btn.id}
								<audio volume={audioVolume} src={btn.audioSrc} onVolumeChange={setVolumeValue} />
							</Button>
						)
					})
				}
			</div>
		</div>
	)
}
export default DrumPlayButtons;