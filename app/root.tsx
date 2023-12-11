import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react'
import styles from '~/main.css'

export const links: LinksFunction = () => {
	return [
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
		},
		{ rel: 'stylesheet', href: styles },
		{
			rel: 'shortcut icon',
			type: 'image/x-icon',
			sizes: '32x32',
			href: 'https://metakeep.xyz/images/favicon.png',
		},
	]
}

export const meta: MetaFunction = () => [
	{
		charSet: 'utf-8',
	},
	{
		title: 'MetaKeep Dashboard',
	},
	{
		name: 'description',
		content: '',
	},
	{
		name: 'viewport',
		content: 'width=device-width,initial-scale=1',
	},
]

export default function App() {
	return (
		<html className='dark' lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<Meta />
				<Links />
			</head>
			<body className='h-full w-full font-sans'>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
