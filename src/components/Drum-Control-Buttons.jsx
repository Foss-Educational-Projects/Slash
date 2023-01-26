import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { increase } from "../features/volumeSlice";
import { changeText } from "../features/activeValueSlice";

import volumeValueStyles from "../assets/styles/volumeValueStyle";
const DrumControlButtons = () => {
	const powerRef = useRef(null)
	const bankRef = useRef(null)
	const volumeRef = useRef(null)

	const activeValue = useSelector(state => state.activeValue.value)
	const volume = useSelector(state => state.volume.value)

	const [vol, setVol] = useState(volume)

	const dispatch = useDispatch();

	const handleVolume = () => {
		dispatch(increase(vol))
	}
	const handleRangeInput = (e) => {
		setVol(e.target.value)
		dispatch(changeText("Volume: " + e.target.value))
	}
	const switchChecked = (e) => {
		if(e.currentTarget.checked){
			console.log("Checked")
			volumeRef.current.removeAttribute("disabled")
		}
		else {
			console.log("Unchecked")
			volumeRef.current.setAttribute("disabled", "false")
			
		}
	}
	return (
		<div className="drum-control-buttons">
			<div className="display-box text-white" id="display-box">{activeValue}</div>
			<Form.Check 
				type="switch"
				defaultChecked
				id="custom-switch"
				label="Power"
				className="fs-3 text-white"
				ref={powerRef}
				onClick={switchChecked}
			/>
			<Form.Check 
				type="switch"
				id="custom-switch"
				label="Bank"
				className="fs-3 text-white"
				ref={bankRef}
			/>
			<Form.Label 
				className="fs-4 m-0 text-start text-white drum-control-form-label" 
				style={{display:"flex", justifyContent:"space-between"}}
			>
			<p>Volume</p>
			<p style={volumeValueStyles}>{vol}</p>
			</Form.Label>
			<Form.Range 
				aria-valuemax={100}
				aria-valuemin={0}
				defaultValue={vol}
				onInput={handleRangeInput}
				ref={volumeRef}
			/>
				
		</div>
	)
}
export default DrumControlButtons;