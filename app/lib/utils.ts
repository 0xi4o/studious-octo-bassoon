import type { Log } from '~/lib/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function computeChartDate(logs: Log[]) {
	const grouped_data = logs.reduce((groups, log) => {
		const month = format(new Date(log.timestamp), 'LLL')
		const day = format(new Date(log.timestamp), 'dd')
		const year = format(new Date(log.timestamp), 'yyyy')
		const date = `${month} ${day} ${year}`

		if (!groups.hasOwnProperty(date)) {
			groups[date] = []
		}

		groups[date].push(log)

		return groups
	}, {})

	const data = Object.entries(grouped_data).map((group) => {
		const date = group[0]
		const value = group[1]

		return {
			date,
			users: new Set(value.map((v) => v.user_id)).size, // convert to set, so we only get the unique values and then get the set size
			calls: value.length, // length of value is the number of api calls
			failures: value.filter((v) => v.status === 'error').length, // filter all the calls with 'error' status and get the length
		}
	})

	return data
}
