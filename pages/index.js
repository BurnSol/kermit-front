// >> Styles
import Head from 'next/head';

// >> Components
import Landing from '@/components/landing/landing';

// >> Script
export default function Page(props) {
	// >> Render
	return (
		<>
			<Head>
				<title>$BURN</title>
			</Head>

			<div className="base">
				<Landing setLoading={props.setLoading} />
			</div>
		</>
	);
}
