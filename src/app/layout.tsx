import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Pierogi Villa',
	description:
		'Pierogi Villa - A glimpse into the lives of 4 university friends living together in Poland. Fun, food, and friendship - follow their adventures!',
	icons: 'https://img.kushbhalodi.com/images/pierogi.png',
	authors: {
		name: 'Kush Bhalodi',
		url: 'https://kushbhalodi.com',
	},
	applicationName: 'Pierogi Villa',
	twitter: {
		card: 'summary_large_image',
		site: '@kushbhalodi',
		description:
			'Pierogi Villa - A glimpse into the lives of 4 university friends living together in Poland. Fun, food, and friendship - follow their adventures!',
		title: 'Pierogi Villa',
		images: 'https://img.kushbhalodi.com/images/pierogi.png',
		creator: '@kush_115',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
