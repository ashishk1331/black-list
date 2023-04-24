import { EyeIcon } from "@heroicons/react/24/solid"

export default function Footer(props) {
	return (
		<footer className="w-full pt-8 my-16 border-t-2 border-zinc-900 flex flex-col items-center gap-6">
			<EyeIcon className="w-8 h-8 fill-purple" />
			<p className="text-center text-zinc-700">
				Curated by{" "}
				<a
					href="https://twitter.com/ashishk1331"
					className="border-b-2 border-zinc-700"
				>
					ashishk1331
				</a>
				.
				<br />
				Hosted on{" "}
				<a href="https://vercel.com/" className="border-b-2 border-zinc-700">
					Vercel
				</a>
				.
				<br />
				Icons from the limited{" "}
				<a href="https://heroicons.com/" className="border-b-2 border-zinc-700">
					Hero Icons
				</a>
				.
				<br />
				Source code available on{" "}
				<a
					href="https://github.com/ashishk1331/black-list"
					className="border-b-2 border-zinc-700"
				>
					Github
				</a>
				.
			</p>
		</footer>
	);
}
