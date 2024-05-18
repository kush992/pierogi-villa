import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title>Pierogi Villa</title>
				<meta
					name='description'
					content='Pierogi Villa - A glimpse into the lives of 4 university friends living together in Poland. Fun, food, and friendship - follow their adventures!'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='scheme' content='dark' />
				<link rel='icon' href='/favicon.ico' />

				{/* Open Graph Meta Tags */}
				<meta property='og:title' content='Pierogi Villa' />
				<meta
					property='og:description'
					content='Pierogi Villa - A glimpse into the lives of 4 university friends living together in Poland. Fun, food, and friendship - follow their adventures!'
				/>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://pierogi-villa.kushbhalodi.com/' />
				<meta property='og:image' content='https://img.kushbhalodi.com/images/pierogi.jpeg' />

				{/* Twitter Meta Tags */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content='Pierogi Villa' />
				<meta
					name='twitter:description'
					content='Pierogi Villa - A glimpse into the lives of 4 university friends living together in Poland. Fun, food, and friendship - follow their adventures!'
				/>
				<meta name='twitter:url' content='https://kushbhalodi.com/' />
				<meta name='twitter:image' content='https://img.kushbhalodi.com/images/pierogi.jpeg' />

				{/* LinkedIn Meta Tags */}
				<meta property='og:image:width' content='300' />
				<meta property='og:image:height' content='300' />

				{/* Pinterest Meta Tags */}
				<meta name='pinterest-rich-pin' content='true' />
			</Head>

			<main className='flex min-h-screen flex-col items-center justify-start md:gap-10'>
				<header>
					<h1 className='text-6xl font-bold font-mono p-12 md:p24 text-center text-transparent bg-clip-text bg-gradient-to-br from-[#dbddd3] to-[#49341a]'>
						Pierogi Villa
					</h1>
				</header>
				<div className='relative bg-[#dbddd3] z-[-1] place-items-center '>
					{/* before:absolute before:h-[30px] before:w-full before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] */}
					<Image
						className='relative mix-blend-multiply'
						src='https://img.kushbhalodi.com/images/pierogi.jpeg'
						alt='Pierogi Villa Logo'
						width={600}
						height={400}
						priority
					/>
				</div>
				<footer className='flex flex-col items-center justify-center gap-2'>
					<p className='text-sm text-center my-0'>© 2024 KushBhalodi™. All Rights Reserved.</p>
					<p className='text-sm text-center my-0'>
						Developed by &nbsp;
						<a href='https://kushbhalodi.com' target='_blank' rel='noopener noreferrer' className='text-[#dbddd3] hover:underline'>
							Kush Bhalodi
						</a>
					</p>
				</footer>
			</main>
		</>
	);
}
