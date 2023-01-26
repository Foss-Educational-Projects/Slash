import React from "react";
import { useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'

const DrumControlButtons = () => {
	const data = useSelector(state => state.data.text)
	const checked = (e) => {
		if (e.currentTarget.checked) {
			return true;
		}
		else {
			return false;
		}
	}
	return (
		<div className="drum-control-buttons">
			<div className="display-box text-white" id="display-box">{data}</div>
			<Form.Check 
				type="switch"
				id="custom-switch"
				label="Power"
				className="fs-3 text-white"
			/>
			<Form.Check 
				type="switch"
				id="custom-switch"
				label="Bank"
				className="fs-3 text-white"

			/>
			<Form.Label 
				className="fs-4 m-0 text-start text-white" 
				aria-valuemax={100} 
				aria-valuemin={0} 
				defaultValue={50}
			>Volume</Form.Label>
			<Form.Range />
				
		</div>
	)
}

export default DrumControlButtons;