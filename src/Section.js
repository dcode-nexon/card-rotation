import Card from './Card';

function Section({ frame, len }) {
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
	len.current = arr.length;

	return (
		<section style={{ top: '140%' }} ref={frame}>
			{arr.map((data, idx) => {
				return <Card key={idx} data={data} len={arr.length} idx={idx} />;
			})}
		</section>
	);
}

export default Section;
