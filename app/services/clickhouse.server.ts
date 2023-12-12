import type { Log } from '~/lib/types'
import { createClient } from '@clickhouse/client'

const config = {
	host: process.env.CLICKHOUSE_HOST ?? 'http://localhost:8123',
	username: process.env.CLICKHOUSE_USER ?? 'default',
	password: process.env.CLICKHOUSE_PASSWORD ?? '',
	database: 'default',
}

const clickhouse = createClient(config)

// declare global {
// 	let __db__
// }

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
// in production, we'll have a single connection to the DB.
// if (process.env.NODE_ENV === 'production') {
// 	clickhouse = createClient(config)
// } else {
// 	// TODO: figure out how to fix these typescript errors properly
// 	// @ts-ignore
// 	if (!global?.__db__) {
// 		// @ts-ignore
// 		global.__db__ = createClient(config)
// 	}
// 	// @ts-ignore
// 	clickhouse = global.__db__
// }

export async function insertLog(log: Log) {
	try {
		await clickhouse.insert({
			table: 'logs',
			values: [log],
			format: 'JSONEachRow',
		})
	} catch (e) {
		console.log(e)
	}
}

export async function queryLogs() {
	const resultSet = await clickhouse.query({
		query: 'SELECT * from logs ORDER BY timestamp DESC',
		format: 'JSONEachRow',
	})
	const logs = await resultSet.json()

	return logs
}

// export { clickhouse }
