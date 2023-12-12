import { Link } from '@remix-run/react'
import { ExternalLink } from 'lucide-react'

export default function Navbar() {
	return (
		<header className='supports-backdrop-blur:bg-white/60 top-0 z-50 flex h-20 w-screen flex-wrap items-center justify-center px-4 py-4 shadow-sm shadow-gray-200 backdrop-blur dark:bg-transparent dark:shadow-gray-700 sm:px-6 lg:px-8'>
			<div className='flex w-full max-w-7xl items-center justify-between px-6 lg:px-8'>
				<div className='relative flex flex-grow items-center'>
					<Link
						aria-label='Home page'
						className='flex items-center text-gray-900 dark:text-gray-50'
						to='/'
					>
						<img
							className='flex h-6 invert'
							src='https://metakeep.xyz/images/MetaKeep-1.png'
							alt='logo'
						/>
					</Link>
				</div>
				<div className='flex flex-grow items-center justify-end gap-8 text-muted-foreground'>
					<a
						className='flex items-center gap-2'
						href='https://metakeep.xyz/'
						rel='noopener'
						target='_blank'
					>
						Home
						<ExternalLink className='h-4 w-4' />
					</a>
					<a
						className='flex items-center gap-2'
						href='https://github.com/0xi4o/studious-octo-bassoon'
						rel='noopener'
						target='_blank'
					>
						Github
						<ExternalLink className='h-4 w-4' />
					</a>
				</div>
			</div>
		</header>
	)
}
