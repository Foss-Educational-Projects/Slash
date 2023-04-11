import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { increase } from "../features/volumeSlice";
import { changeText } from "../features/activeValueSlice";
import { switchPowerMode } from "../features/powerModeSlice";
import { switchBankMode } from './../features/bankModeSlice'

import { formLabelStyles } from "../assets/styles/formStyles";
import volumeValueStyles from "../assets/styles/volumeValueStyle";

const DrumControlButtons = (props) => {
	const volumeRef = useRef(null)
	const activeValue = useSelector(state => state.activeValue.value)
	const volume = useSelector(state => state.volume.value)
	const bankMode = useSelector(state => state.bankMode.value)
	const powerMode = useSelector(state => state.powerMode.value)

	const [vol, setVol] = useState(volume)

	const dispatch = useDispatch();
	const handleRangeInput = (e) => {
		dispatch(increase(e.target.value))
		dispatch(changeText("Volume: " + e.target.value))
	}
	const togglePowerMode = (e) => {
		if (e.currentTarget.checked) {
			console.log("Checked")
			dispatch(changeText("Powered On"))
			dispatch(switchPowerMode(true))
			volumeRef.current.removeAttribute("disabled")
		}
		else {
			console.log("Unchecked")
			dispatch(changeText(""))
			dispatch(switchPowerMode(false))
			volumeRef.current.setAttribute("disabled", "false")
		}
	}
	const toggleBankMode = (e) => {
		if (e.currentTarget.checked) {
			dispatch(changeText("Piano Kit"))
			dispatch(switchBankMode(true))
		}
		else {
			dispatch(changeText("Heater Kit"))
			dispatch(switchBankMode(false))
		}
	}

	return (
		<div className="drum-control-buttons">
		{(() => {
			if (powerMode) {
				return <div className="display-box text-white" id="display-box">{activeValue}</div>
			}
			else {
				return <div className="display-box text-white" id="display-box"></div>
			}
		})()}
			
			<Form.Check 
				type="switch"
				defaultChecked
				id="custom-switch"
				label="Power"
				className="fs-3 text-white"
				onClick={togglePowerMode}
			/>
			<Form.Check 
				type="switch"
				id="custom-switch"
				label="Bank"
				className="fs-3 text-white"
				onClick={toggleBankMode}
			/>
			<Form.Label 
				className="fs-4 m-0 text-start text-white drum-control-form-label" 
				style={formLabelStyles}
			>
				<p>Volume</p>
				<p style={volumeValueStyles}>{volume}</p>
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