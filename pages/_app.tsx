import '@fontsource/recursive'
import Head from 'next/head'
import type React from 'react'
import '~styles/globals.css'
import useGtag from '~utils/useGtag'


function MyApp({ Component, pageProps }: any) {
	useGtag()

	return (
		<>
			<Head>
				

				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
				/>

				<link rel="manifest" href="/manifest.json" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/icons/apple-touch-icon.png"
				/>

				<title>draw</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
