import Card from './Card';

function Section({ frame, items, Active }) {
	return (
		<section style={{ top: '140%' }} ref={frame}>
			{items.map((data, idx) => {
				return <Card key={idx} data={data} len={items.length} idx={idx} Active={Active} />;
			})}
		</section>
	);
}

export default Section;
