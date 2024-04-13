import {cn} from '@/lib/utils/mergeCss'

function ToDoListItem({children, className, uid, payload}) {
	const {category, finish, start, status, todo} = payload

	return (
		<aside className={cn('odd:bg-neutral-50 even:bg-gray-100 flex justify-between align-middle py-4 px-3 rounded', className)}>
			<div className="flex flex-col gap-y-1 text-[10px] items-center">
				<button className="border border-neutral-500 text-neutral-600 px-2 py-0.5 rounded">Delete</button>
				<button className="bg-neutral-500 text-white px-2 py-0.5 rounded w-full">Edit</button>
			</div>
			<div className='flex items-center'>
				<p className="text-lg font-bold text-neutral-600">{todo}</p>
			</div>
			<div className="text-right">
				<p className="text-xs text-neutral-400">{category}</p>
				<p className="text-sm text-neutral-600">Due: {finish}</p>
			</div>
		</aside>
	)
}

export {ToDoListItem}
