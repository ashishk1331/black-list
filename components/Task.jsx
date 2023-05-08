import { ArrowUpRightIcon, VideoCameraIcon } from "@heroicons/react/24/solid"
import Button from './Button'
import Image from 'next/image'

export default function Task(props){
	return (
		<li className="flex flex-wrap items-center gap-3 my-4 border-2 border-zinc-900 rounded p-3">
			<VideoCameraIcon className="w-6 h-6 fill-purple m-3" />
			<div className="w-full md:w-fit ms-3 md:mx-0 order-last md:order-none flex flex-col gap-2">
				<h1 className="text-xl">
					{props.Title}
				</h1>
				<div className="flex items-center gap-2">
					<Image 
						src={props.Avatar}
						width={64}
						height={64}
						alt={props.Speaker}
						className="w-6 h-6 rounded-full"
					/>
					<p className="text-sm">
						{props.Speaker}
					</p>
				</div>
			</div>
			<Button cl="ml-auto" href={props.URL}>
				<ArrowUpRightIcon className="w-6 h-6 text-purple" />
			</Button>
		</li>
	)
}