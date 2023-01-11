import Heater1 from './../assets/audio/Heater-1.mp3';
import Heater2 from './../assets/audio/Heater-2.mp3';
import Heater3 from './../assets/audio/Heater-3.mp3';
import Heater4 from './../assets/audio/Heater-4.mp3';
import Heater5 from './../assets/audio/Heater-5.mp3';
import Cev_H2 from './../assets/audio/Cev_H2.mp3';
import Dsc_Oh from './../assets/audio/Dsc_Oh.mp3';
import Kick_n_Hat from './../assets/audio/Kick_n_Hat.mp3';
import RP4_KICK_1 from './../assets/audio/RP4_KICK_1.mp3';


const buttons = [
		{
			id: 'q',
			audioSrc: Heater1,
			name: 'Heater-1',
			event: 'Q'
		},
		{
			id: 'w',
			audioSrc: Heater2,
			name: 'Heater-2',
			event: 'W'
		},
		{
			id: 'e',
			audioSrc: Heater3,
			name: 'Heater-3',
			event: 'E'
		},
		{
			id: 'a',
			audioSrc: Heater4,
			name: 'Heater-4',
			event: 'A'
		},
		{
			id: 's',
			audioSrc: Heater5,
			name: 'Heater-5',
			event: 'S'
		},
		{
			id: 'd',
			audioSrc: Kick_n_Hat,
			name: 'Kick_n_Hat',
			event: 'D'
		},
		{
			id: 'z',
			audioSrc: Cev_H2,
			name: 'Cev_H2',
			event: 'Z'
		},
		{
			id: 'x',
			audioSrc: Dsc_Oh,
			name: 'Dsc_Oh',
			event: 'X'
		},
		{
			id: 'c',
			audioSrc: RP4_KICK_1,
			name: 'RP4_KICK_1',
			event: 'C'
		},
	]

export default buttons;