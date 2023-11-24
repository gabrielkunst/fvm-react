import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface CarouselImage {
	image: string;
	label: string;
}

interface CarouselProps {
	images: CarouselImage[];
	timeout?: number;
	className?: string;
}

export function Carousel({ images, timeout = 5000, className }: CarouselProps) {
	const [currentImagePosition, setCurrentImagePosition] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImagePosition((prevImage) => {
				if (prevImage === images.length - 1) {
					return 0;
				} else {
					return prevImage + 1;
				}
			});
		}, timeout);

		return () => clearInterval(interval);
	}, [timeout, images]);

	return (
		<div
			className={twMerge(
				"w-full h-full relative overflow-hidden",
				className
			)}
		>
			<div
				className="flex transition-transform duration-500"
				style={{
					transform: `translateX(-${currentImagePosition * 100}%)`,
				}}
			>
				{images.map(({ image, label }) => (
					<img
						key={label}
						className="object-cover w-full h-full"
						src={image}
						alt={label}
					/>
				))}
			</div>
		</div>
	);
}
