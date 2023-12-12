import type { LoaderFunctionArgs } from '@remix-run/node'
import type { Log } from '~/lib/types'
import { insertLog } from '~/services/clickhouse.server'
import { faker } from '@faker-js/faker'

function randomizer(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export async function loader({ request, params }: LoaderFunctionArgs) {
	let user_id = parseInt(params.user_id as string)
	let response
	const rand = randomizer(0, 1)
	const req = JSON.stringify(request)
	const timestamp = new Date(
		faker.date.between({
			from: new Date('2023-09-01T00:00:00'),
			to: new Date(),
		})
	).toISOString()
	let log: Log

	if (rand === 0) {
		response = new Response('Failed to load resource', {
			headers: {
				'Content-Type': 'application/json',
			},
			status: 400,
		})
		log = {
			user_id,
			timestamp,
			status: 'error',
			error: 'Failed to load resource',
			request: req,
			response: JSON.stringify(response),
		}
	} else {
		response = new Response(`Hello, ${user_id}!`, {
			headers: {
				'Content-Type': 'application/json',
			},
			status: 200,
		})
		log = {
			user_id,
			timestamp,
			status: 'success',
			error: '',
			request: req,
			response: JSON.stringify(response),
		}
	}
	await insertLog(log)

	return response
}
