import type { DateRange } from 'react-day-picker'
import type { Log } from '~/components/logs/data'
import { useEffect, useState } from 'react'
import {
	ColumnDef,
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	useReactTable,
} from '@tanstack/react-table'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '~/components/ui/table'
import { Button } from '~/components/ui/button'
import { format } from 'date-fns'
import { DataTableViewOptions } from '~/components/logs/DataTableViewOptions'

interface DataTableProps<TData> {
	data: TData[]
	range?: DateRange
}

export function DataTable<TData>({ data, range }: DataTableProps<TData>) {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const isWithinRange = (row, columnId, value) => {
		const date = new Date(row.getValue(columnId))
		// const { from: start, to: end } = range
		const [start, end] = value // value => two date input values
		//If one filter defined and date is null filter it
		if ((start || end) && !date) return false
		if (start && !end) {
			return date.getTime() >= start.getTime()
		} else if (!start && end) {
			return date.getTime() <= end.getTime()
		} else if (start && end) {
			return (
				date.getTime() >= start.getTime() &&
				date.getTime() <= end.getTime()
			)
		} else return true
	}

	useEffect(() => {
		table.getColumn('timestamp')?.setFilterValue([range?.from, range?.to])
	}, [range])

	const columns: ColumnDef<Log>[] = [
		{
			accessorKey: 'user_id',
			header: 'UserID',
			cell: ({ getValue }) => {
				let value = getValue()
				return (
					<div className='max-w-[160px] truncate' title={value}>
						{value}
					</div>
				)
			},
		},
		{
			accessorKey: 'timestamp',
			header: 'Timestamp',
			cell: ({ getValue }) => {
				let value = getValue()
				return (
					<div className='max-w-[160px] truncate' title={value}>
						{format(new Date(value), 'PPp')}
					</div>
				)
			},
			enableColumnFilter: true,
			filterFn: isWithinRange,
		},
		{
			accessorKey: 'status',
			header: 'Status',
			cell: ({ getValue }) => {
				let value = getValue()
				if (value === 'success') {
					return (
						<span className='inline-flex rounded-md bg-green-500 px-2 py-1 font-medium text-white'>
							{value}
						</span>
					)
				} else {
					return (
						<span className='inline-flex rounded-md bg-red-500 px-2 py-1 font-medium text-white'>
							{value}
						</span>
					)
				}
			},
		},
		{
			accessorKey: 'error',
			header: 'Error Message',
			cell: ({ row, getValue }) => {
				let value = getValue()
				let status = row.getValue('status')
				if (status !== 'success') {
					return (
						<pre
							className='max-w-[160px] truncate rounded-md bg-muted px-2 py-1'
							title={value}
						>
							<code>{value}</code>
						</pre>
					)
				} else {
					return ''
				}
			},
		},
		{
			accessorKey: 'request',
			header: 'Request',
			cell: ({ getValue }) => {
				let value = getValue()
				return (
					<pre
						className='max-w-[160px] truncate rounded-md bg-muted px-2 py-1'
						title={value}
					>
						<code>{value}</code>
					</pre>
				)
			},
		},
		{
			accessorKey: 'response',
			header: 'Response',
			cell: ({ getValue }) => {
				let value = getValue()
				return (
					<pre
						className='max-w-[160px] truncate rounded-md bg-muted px-2 py-1'
						title={value}
					>
						<code>{value}</code>
					</pre>
				)
			},
		},
	]

	const table = useReactTable({
		data,
		columns,
		filterFns: {
			isWithinRange: isWithinRange,
		},
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		globalFilterFn: isWithinRange,
		onColumnFiltersChange: setColumnFilters,
		state: {
			columnFilters,
		},
	})

	return (
		<div>
			<div className='flex items-center justify-between gap-4 py-4'>
				<span className='text-lg'>Runtime logs from your API</span>
				<DataTableViewOptions table={table} />
			</div>
			<div className='rounded-md border'>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef
															.header,
														header.getContext()
												  )}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={
										row.getIsSelected() && 'selected'
									}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className='h-24 text-center'
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className='flex items-center justify-end space-x-2 py-4'>
				<div className='flex w-[100px] items-center justify-center text-sm font-medium text-muted-foreground'>
					Page {table.getState().pagination.pageIndex + 1} of{' '}
					{table.getPageCount()}
				</div>
				<Button
					variant='outline'
					size='sm'
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</Button>
				<Button
					variant='outline'
					size='sm'
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</Button>
			</div>
		</div>
	)
}
