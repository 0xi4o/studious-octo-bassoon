import { Card, LineChart } from '@tremor/react'
import Navbar from '~/components/Navbar'
import {
	DateRangePicker,
	DateRangeSelector,
} from '~/components/DateRangePicker'
import { useEffect, useState } from 'react'
import { DataTable } from '~/components/logs/DataTable'
import { columns, getSortedData } from '~/components/logs/columns'
import { subDays } from 'date-fns'
import { DateRange } from 'react-day-picker'

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
	const [days, setDays] = useState<number>()
	const [range, setRange] = useState<DateRange | undefined>()

	useEffect(() => {
		const dateRange = days
			? {
					from: subDays(new Date(), days),
					to: new Date(),
			  }
			: undefined
		setRange(dateRange)
	}, [days])

	return (
		<>
			<Navbar />
			<main className='mx-auto flex max-w-7xl flex-col items-start justify-start gap-4 px-6 py-16 sm:py-24 lg:px-8'>
				<section className='flex w-full items-center gap-4'>
					<DateRangeSelector setDays={setDays} />
					{/*{days === '0' ? <DateRangePicker days={days} /> : null}*/}
					<DateRangePicker
						dateRange={range}
						setDateRange={setRange}
					/>
				</section>
				<section className='flex w-full flex-col gap-4'>
					<Card>
						<LineChart
							className='mt-4 h-96'
							data={chartdata2}
							index='date'
							categories={['2022', '2023']}
							colors={['neutral', 'indigo']}
							yAxisWidth={30}
							connectNulls={true}
						/>
					</Card>
					<div className='flex w-full flex-col gap-4'>
						<div className='mt-8 flex flex-col gap-4'>
							<h2 className='mb-0 text-3xl'>Logs</h2>
							<span className='text-muted-foreground'>
								Runtime logs from your API
							</span>
						</div>
						<DataTable columns={columns} data={sortedData} />
					</div>
				</section>
			</main>
		</>
	)
}
