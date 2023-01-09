import React from "react";
import { Form,  } from 'react-bootstrap'

const DrumControlButtons = () => {

	const checked = (e) => {
		if(e.currentTarget.checked){
			return true;
		}
		else {
			return false;
		}
	}
	return (
		<div className="drum-control-buttons">
			<div className="display-box text-white" id="display-box"></div>
			<Form.Check 
				type="switch"
				id="custom-switch"
				label="Power"
				className="fs-3 text-white"
				defaultChecked={false}
			/>
			<Form.Check 
				type="switch"
				id="custom-switch"
				label="Bank"
				className="fs-3 text-white"

			/>
			<Form.Label className="fs-4 m-0 text-start text-white">Volume</Form.Label>
			<Form.Range />
				
		</div>
	)
}

export default DrumControlButtons;