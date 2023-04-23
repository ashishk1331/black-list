export default function Button(props) {
	return (
		<a
			href={props.href}
			taregt="_blank"
			className={
				"p-3 border-2 border-zinc-900 rounded bg-transparent transition-all " +
				props.cl
			}
			{...props}
		>
			{props.children}
		</a>
	);
}

Button.defaultProps = {
	href: "#",
};
