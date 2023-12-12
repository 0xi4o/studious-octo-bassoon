export type Log = {
	user_id: number
	timestamp: Date | string
	status: 'success' | 'error'
	error?: string
	request: string
	response: string
}
