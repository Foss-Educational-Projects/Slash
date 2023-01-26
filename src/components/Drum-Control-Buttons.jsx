import React, { useRef } from "react";
import { useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'

const DrumControlButtons = () => {
	const powerRef = useRef(null)
	const bankRef = useRef(null)
	const data = useSelector(state => state.data.text)
	const volume = useSelector(state => state.volume.value)
	const switchChecked = () => {
		if (powerRef.current.checked) {
			console.log("Checked");
		}
		else {
			console.log("Unchecked");
		}
	}
	console.log(powerRef.current)
	return (
		<div className="drum-control-buttons">
			<div className="display-box text-white" id="display-box">{data}</div>
			<Form.Check 
				type="switch"
				id="custom-switch"
				label="Power"
				className="fs-3 text-white"
				ref={powerRef}
			/>
			<Form.Check 
				type="switch"
				id="custom-switch"
				label="Bank"
				className="fs-3 text-white"
				ref={bankRef}

			/>
			<Form.Label 
				className="fs-4 m-0 text-start text-white" 
				style={{display:"flex", justifyContent:"space-between"}}
				aria-valuemax={100}
				aria-valuemin={0}
				defaultValue={50}
				onInput={switchChecked}
				onChange={switchChecked}
			>
			<p>Volume</p>
			<p>{volume}</p>
			</Form.Label>
			<Form.Range />
				
		</div>
	)
}

export default DrumControlButtons;