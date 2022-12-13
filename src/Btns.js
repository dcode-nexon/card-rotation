import { useState } from 'react';

function Btns({ frame, len }) {
	let [Num, setNum] = useState(0);

	const moveCard = (num) => {
		setNum(num);
		frame.current.style.transform = `rotate(${(360 / len) * Num}deg)`;
	};

	return (
		<>
			<button className='prev' onClick={() => moveCard(++Num)}>
				PREV
			</button>
			<button className='next' onClick={() => moveCard(--Num)}>
				NEXT
			</button>
		</>
	);
}

export default Btns;
