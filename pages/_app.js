// >> Modules
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import '@solana/wallet-adapter-react-ui/styles.css';
import WalletWrapper from '@/components/overlay/wrapper';

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import '@/styles/variables.scss';
import '@/styles/fonts.css';
import '@/styles/globals.scss';

import NoSSR from 'react-no-ssr';
 
// >> Script
function MyApp({ Component, pageProps }) {
	// >> Variables
	const [loading, setLoading] = useState(true);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		Aos.init({ duration: 700, once: true });
		setLoading(false);
	}, []);

	useEffect(() => {
		setLoaded(!loading);
	}, [loading]);

	// >> Render
	return (
		<NoSSR>
		<StyledEngineProvider injectFirst>
			<CssBaseline />
			<WalletWrapper>
				<Toaster
					position="top-center"
					reverseOrder={false}
					toastOptions={{
						style: {
							background: '#101010',
							color: '#fff',
							borderRadius: '5px',
						},
					}}
				/>
				<Component {...pageProps} setLoading={setLoading} />
			</WalletWrapper>

			<div className="pageLoader" data-visible={loaded}></div>
		</StyledEngineProvider>
		</NoSSR>
	);
}

export default MyApp;
