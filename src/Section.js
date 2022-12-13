import Card from './Card';

function Section() {
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

	return (
		<section style={{ top: '140%' }}>
			{arr.map((data, idx) => {
				return <Card key={idx} data={data} len={arr.length} idx={idx} />;
			})}
		</section>
	);
}

export default Section;
