import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap'
import { increase } from "../features/volumeSlice";
import { changeText } from "../features/activeValueSlice";
import { switchPowerMode } from "../features/powerModeSlice";
import { switchBankMode } from './../features/bankModeSlice'

import volumeValueStyles from "../assets/styles/volumeValueStyle";
const DrumControlButtons = () => {
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
			console.log(powerMode)
			dispatch(changeText("Powered On"))
			dispatch(switchPowerMode(true))
			volumeRef.current.removeAttribute("disabled")
		}
		else {
			console.log("Unchecked")
			console.log(powerMode)
			dispatch(changeText(""))
			dispatch(switchPowerMode(false))
			volumeRef.current.setAttribute("disabled", "false")
		}
	}
	const toggleBankMode = (e) => {
		if (e.currentTarget.checked) {
			console.log(bankMode)
			dispatch(changeText("Piano Kit"))
			dispatch(switchBankMode(true))
		}
		else {
			console.log(bankMode)
			dispatch(changeText("Heater Kit"))
			dispatch(switchBankMode(false))
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
				style={{ display: "flex", justifyContent: "space-between" }}
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