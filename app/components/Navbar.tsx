import { Link } from '@remix-run/react'

export default function Navbar() {
	return (
		<header className='supports-backdrop-blur:bg-white/60 sticky top-0 z-50 flex h-20 w-screen flex-wrap items-center justify-between px-4 py-4 shadow-sm shadow-gray-200 backdrop-blur dark:bg-transparent dark:shadow-gray-700 sm:px-6 lg:px-8'>
			<div className='relative flex flex-grow basis-0 items-center'>
				<Link
					aria-label='Home page'
					className='flex items-center text-gray-900 dark:text-gray-50'
					to='/'
				>
					<img
						className='flex h-6'
						src='https://metakeep.xyz/images/MetaKeep-1.png'
						alt='logo'
					/>
				</Link>
			</div>
			<div className='flex flex-grow items-center justify-end gap-4'>
				<a href='~/components/Navbar#'>Home</a>
			</div>
		</header>
	)
}
