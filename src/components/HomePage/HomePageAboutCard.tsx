interface AboutCardProps {
	title: string;
	description: string;
}

export function AboutCard({ description, title }: AboutCardProps) {
	return (
		<div className="md:w-[32%] text-center max-w-[500px] mx-auto md:mx-0">
			<h4 className="mb-2 text-xl font-medium text-primary">{title}</h4>
			<p>{description}</p>
		</div>
	);
}
