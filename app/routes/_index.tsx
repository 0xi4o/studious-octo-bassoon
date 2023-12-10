import { Card, Title, LineChart, DateRangePicker } from '@tremor/react'
import Navbar from '~/components/Navbar'
import { useState } from 'react'

const chartdata2 = [
	{
		date: 'Jan 23',
		'2022': 45,
		'2023': 78,
	},
	{
		date: 'Feb 23',
		'2022': 52,
		'2023': 71,
	},
	{
		date: 'Mar 23',
		'2022': 48,
		'2023': 80,
	},
	{
		date: 'Apr 23',
		'2022': 61,
		'2023': 65,
	},
	{
		date: 'May 23',
		'2022': 55,
		'2023': 58,
	},
	{
		date: 'Jun 23',
		'2022': 67,
		'2023': 62,
	},
	{
		date: 'Jul 23',
		'2022': 60,
		'2023': 54,
	},
	{
		date: 'Aug 23',
		'2022': 72,
		'2023': 49,
	},
	{
		date: 'Sep 23',
		'2022': 65,
		'2023': 52,
	},
	{
		date: 'Oct 23',
		'2022': 68,
		'2023': null,
	},
	{
		date: 'Nov 23',
		'2022': 74,
		'2023': null,
	},
	{
		date: 'Dec 23',
		'2022': 71,
		'2023': null,
	},
]

export default function Home() {
	const [value, setValue] = useState()

	return (
		<>
			<Navbar />
			<main className='mx-auto flex max-w-7xl flex-col items-start justify-start gap-4 px-6 py-24 sm:py-32 lg:px-8'>
				<Card>
					<Title>Closed Pull Requests</Title>
					<LineChart
						className='mt-4 h-96'
						data={chartdata2}
						index='date'
						categories={['2022', '2023']}
						colors={['neutral', 'indigo']}
						yAxisWidth={30}
						onValueChange={(v) => setValue(v)}
						connectNulls={true}
					/>
				</Card>
				<DateRangePicker enableSelect={true} />
			</main>
		</>
	)
}
