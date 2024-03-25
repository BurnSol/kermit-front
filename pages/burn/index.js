// >> Styles
import Head from 'next/head';

// >> Components
import Burn from '@/components/burn/burn';

// >> Script
export default function Page(props) {
	// >> Render
	return (
		<>
			<Head>
				<title>$BURN</title>
			</Head>

			<div className="base">
				<Burn setLoading={props.setLoading} />
			</div>
		</>
	);
}
