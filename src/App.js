import './scss/style.scss';
import Footer from './Footer';
import Header from './Header';
import Section from './Section';
import Btns from './Btns';
import { useRef, useState, useEffect } from 'react';

function App() {
	const arr = [
		'Blizzards',
		'Calm',
		'Dusty_Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
		'Vespers',
	];
	const frame = useRef(null);

	let [Active, setActive] = useState(0);

	useEffect(() => {
		console.log(Active);
	}, [Active]);

	const prev = () => setActive((Active) => (Active === 0 ? (Active = arr.length - 1) : --Active));
	const next = () => setActive((Active) => (Active === arr.length - 1 ? (Active = 0) : ++Active));

	return (
		<>
			<Header />
			<Section frame={frame} items={arr} Active={Active} />
			<Footer />
			<Btns frame={frame} len={arr.length} prev={prev} next={next} />
		</>
	);
}

export default App;
