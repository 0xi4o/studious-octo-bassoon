import { Card, Title, LineChart } from '@tremor/react'
import Navbar from '~/components/Navbar'
import {
	DateRangePicker,
	DateRangeSelector,
} from '~/components/DateRangePicker'
import { useState } from 'react'
import { DataTable } from '~/components/logs/DataTable'
import {
	columns,
	createRandomLogs,
	data,
	getSortedData,
} from '~/components/logs/columns'

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

// const data: Log[] = createRandomLogs(30)
const sortedData = getSortedData()

export default function Home() {
	const [value, setValue] = useState()

	return (
		<>
			<Navbar />
			<main className='mx-auto flex max-w-7xl flex-col items-start justify-start gap-8 px-6 py-16 sm:py-24 lg:px-8'>
				<section className='flex w-full items-center gap-4'>
					<DateRangeSelector />
					<DateRangePicker />
				</section>
				<section className='flex w-full flex-col gap-8'>
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
					<div className='flex w-full flex-col gap-4'>
						<DataTable columns={columns} data={sortedData} />
					</div>
				</section>
			</main>
		</>
	)
}
