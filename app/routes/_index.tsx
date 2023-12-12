import { Card, LineChart } from '@tremor/react'
import { useLoaderData } from '@remix-run/react'
import Navbar from '~/components/Navbar'
import {
	DateRangePicker,
	DateRangeSelector,
} from '~/components/DateRangePicker'
import { useEffect, useState } from 'react'
import { DataTable } from '~/components/logs/DataTable'
import { subDays } from 'date-fns'
import { DateRange } from 'react-day-picker'
import { Button } from '~/components/ui/button'
import { XCircle } from 'lucide-react'
import { queryLogs } from '~/services/clickhouse.server'
import { json } from '@remix-run/node'
import { computeChartDate } from '~/lib/utils'

// const data: Log[] = createRandomLogs(30)
// const sortedData = getSortedData()

export async function loader() {
	const logs = await queryLogs()

	// calculate chart data from logs
	const chartData = computeChartDate(logs)

	return json({ chartData, logs })
}

export default function Home() {
	const { chartData: data, logs } = useLoaderData<typeof loader>()
	const [days, setDays] = useState<string>('')
	const [range, setRange] = useState<DateRange | undefined>()
	const [chartData, setChartData] = useState()

	useEffect(() => {
		const chartData = range
			? data.filter((day) => {
					return (
						new Date(day.date) >= new Date(range?.from) &&
						new Date(day.date) <= new Date(range?.to)
					)
			  })
			: data
		setChartData(chartData)
	}, [range])

	useEffect(() => {
		const dateRange = parseInt(days)
			? {
					from: subDays(new Date(), parseInt(days)),
					to: new Date(),
			  }
			: undefined
		setRange(dateRange)
	}, [days])

	const clearFilters = () => {
		setDays('')
		setRange(undefined)
	}

	return (
		<>
			<Navbar />
			<main className='mx-auto flex max-w-7xl flex-col items-start justify-start gap-4 px-6 py-16 sm:py-24 lg:px-8'>
				<section className='flex w-full flex-col items-start gap-4 md:flex-row md:items-center'>
					<DateRangeSelector days={days} setDays={setDays} />
					<DateRangePicker
						dateRange={range}
						setDateRange={setRange}
					/>
					{days || range ? (
						<Button variant='ghost' onClick={clearFilters}>
							<XCircle className='mr-2 h-4 w-4' />
							Clear Filters
						</Button>
					) : null}
				</section>
				<section className='flex w-full flex-col gap-4'>
					<Card>
						<LineChart
							className='mt-4 h-96'
							data={chartData}
							index='date'
							categories={['users', 'calls', 'failures']}
							colors={['green', 'indigo', 'red']}
							yAxisWidth={30}
							connectNulls={true}
						/>
					</Card>
					<div className='flex w-full flex-col gap-4'>
						<DataTable data={logs} range={range} />
					</div>
				</section>
			</main>
		</>
	)
}
