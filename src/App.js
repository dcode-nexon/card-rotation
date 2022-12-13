import './scss/style.scss';
import Footer from './Footer';
import Header from './Header';
import Section from './Section';
import Btns from './Btns';
import { useRef } from 'react';

function App() {
	const frame = useRef(null);
	const len = useRef(0);

	return (
		<>
			<Header />
			<Section frame={frame} len={len} />
			<Footer />
			<Btns frame={frame} len={len} />
		</>
	);
}

export default App;
