import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { Table } from '@tanstack/react-table'

import { Button } from '~/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
} from '~/components/ui/dropdown-menu'

interface DataTableViewOptionsProps<TData> {
	table: Table<TData>
}

export function DataTableViewOptions<TData>({
	table,
}: DataTableViewOptionsProps<TData>) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					size='sm'
					className='ml-auto hidden h-10 lg:flex'
				>
					Toggle Columns
					<ChevronDown className='ml-2 h-4 w-4' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-[150px]'>
				{table
					.getAllColumns()
					.filter(
						(column) =>
							typeof column.accessorFn !== 'undefined' &&
							column.getCanHide()
					)
					.map((column) => {
						return (
							<DropdownMenuCheckboxItem
								key={column.id}
								className='capitalize'
								checked={column.getIsVisible()}
								onCheckedChange={(value) =>
									column.toggleVisibility(!!value)
								}
							>
								{column.columnDef.header}
							</DropdownMenuCheckboxItem>
						)
					})}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
