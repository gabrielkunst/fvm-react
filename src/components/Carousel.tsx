import { useEffect, useState } from "react";

interface CarouselProps {
	images: string[];
	timeout?: number;
}

export function Carousel({ images, timeout = 5000 }: CarouselProps) {
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
		<div className="w-full h-full bg-green-500">
			<img
				src={images[currentImagePosition]}
				alt={`Image ${currentImagePosition}`}
			/>
		</div>
	);
}
