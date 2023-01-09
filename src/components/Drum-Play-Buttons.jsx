import React from "react";
import Button from 'react-bootstrap/Button'

const DrumPlayButtons = () => {
	const playButtons = [
	{
		id:0,
		audioSrc:""
	},
	{
		id:1,
		audioSrc:""
	},
	{
		id:2,
		audioSrc:""
	},
	{
		id:3,
		audioSrc:""
	},
	{
		id:4,
		audioSrc:""
	},
	{
		id:5,
		audioSrc:""
	},
	{
		id:6,
		audioSrc:""
	},
	{
		id:7,
		audioSrc:""
	},
	{
		id:8,
		audioSrc:""
	},
	]
	return (
		<div className="play-button-container">
			<div className="drum-play-buttons">
				<Button variant="primary" className='drum-pad'>Q
					<audio src=""  />
				</Button>

				<Button variant="primary" className='drum-pad'>W
					<audio src="" />
				</Button>

				<Button variant="primary" className='drum-pad'>E
					<audio src="" />
				</Button>

				<Button variant="primary" className='drum-pad'>A
					<audio src="" />
				</Button>

				<Button variant="primary" className='drum-pad'>S
					<audio src="" />
				</Button>

				<Button variant="primary" className='drum-pad'>D
					<audio src="" />
				</Button>

				<Button variant="primary" className='drum-pad'>Z
					<audio src="" />
				</Button>

				<Button variant="primary" className='drum-pad'>X
					<audio src="" />
				</Button>

				<Button variant="primary" className='drum-pad'>C
					<audio src="" />
				</Button>
			</div>
		</div>
	)
}

export default DrumPlayButtons;