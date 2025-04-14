import { useCallback, useEffect, useRef } from "react";

interface InfiniteScrollProps {
	hasMore: boolean;
	isLoading: boolean;
	next: () => void;
	children: React.ReactNode;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ hasMore, isLoading, next, children }) => {
	const observerRef = useRef<IntersectionObserver | null>(null);
	const loadMoreRef = useRef<HTMLDivElement | null>(null);

	const handleObserver = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			const target = entries[0];
			if (target.isIntersecting && hasMore && !isLoading) {
				next();
			}
		},
		[hasMore, isLoading, next]
	);

	useEffect(() => {
		observerRef.current = new IntersectionObserver(handleObserver, {
			root: null,
			rootMargin: "100px",
			threshold: 0.1,
		});

		if (loadMoreRef.current) {
			observerRef.current.observe(loadMoreRef.current);
		}

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, [handleObserver]);

	return (
		<>
			{children}
			{hasMore && (
				<div ref={loadMoreRef} className="flex justify-center py-4">
					{isLoading ? (
						<p className="text-sm text-muted-foreground">Загружаюсь...</p>
					) : (
						<p className="text-sm text-muted-foreground">Загружаю больше аккордов...</p>
					)}
				</div>
			)}
		</>
	);
};
