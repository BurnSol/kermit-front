// >> Imports
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const name = '$BURN';
const desc = '$BURN THEM ALL';
const img = 'https://i.imgur.com/DHsu8zu.png';

// >> Script
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content="#101010" />

					<meta property="og:type" content="website" />

					<meta property="og:title" content={name} />
					<meta name="twitter:title" content={name} />

					<meta name="description" content={desc} />
					<meta property="og:description" content={desc} />
					<meta name="twitter:description" content={desc} />

					<meta property="og:image" content={img} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:image" content={img} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
