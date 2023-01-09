import React from "react";
import { Form,  } from 'react-bootstrap'

const DrumControlButtons = () => {
	return (
		<div className="drum-control-buttons">
			<div className="display-box" id="display-box"></div>
			<Form.Check 
				type="switch"
				id="custom-switch"
				label="Power"
				className="fs-3"

			/>
			<Form.Check 
				type="switch"
				id="custom-switch"
				label="Bank"
				className="fs-3"

			/>
			<Form.Label className="fs-4 m-0 text-start">Volume</Form.Label>
			<Form.Range />
				
		</div>
	)
}

export default DrumControlButtons;