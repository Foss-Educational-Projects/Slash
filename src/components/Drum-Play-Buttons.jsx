import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button'

const DrumPlayButtons = () => {
	useEffect(() => {
		document.addEventListener('keydown', (e) => {
			switch (e.key) {
				case 'q':

			}
		})
	}, [])
	const buttons = [
		{
			id: 'q',
			audioSrc: '',
			name: ''
		},
		{
			id: 'w',
			audioSrc: '',
			name: ''
		},
		{
			id: 'e',
			audioSrc: '',
			name: ''
		},
		{
			id: 'a',
			audioSrc: '',
			name: ''
		},
		{
			id: 's',
			audioSrc: '',
			name: ''
		},
		{
			id: 'd',
			audioSrc: '',
			name: ''
		},
		{
			id: 'z',
			audioSrc: '',
			name: ''
		},
		{
			id: 'x',
			audioSrc: '',
			name: ''
		},
		{
			id: 'c',
			audioSrc: '',
			name: ''
		},
	]
	return (
		<div className="play-button-container">
			<div className="drum-play-buttons">
				{buttons.map((btn, index) => {
					return (
						<Button variant="none" id={btn.id} key={index} className='drum-pad text-uppercase'>
							{btn.id}
							<audio src={btn.audioSrc} />
						</Button>
					)
				})}
			</div>
		</div>
	)
}

export default DrumPlayButtons;