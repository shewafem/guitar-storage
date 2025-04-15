import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "./section";

export function HeroSection() {
	return (
		<Section className="py-12 md:py-16 lg:py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
					<div className="flex flex-wrap flex-col space-y-6 text-center lg:text-left">
						<div className="space-y-4">
							<h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl font-mono">
								Интерактивные инструменты для гитары
							</h1>
							<p className="mx-auto max-w-[600px] lg:mx-0 text-muted-foreground text-base sm:text-lg md:text-xl font-mono leading-relaxed">
								Осваивайте гитару с удовольствием благодаря нашим инновационным онлайн-инструментам, подходящим для всех
								уровней подготовки.
							</p>
						</div>
						<div className="flex flex-col items-center lg:items-start gap-3 sm:flex-row">
							<Button
								size="lg"
								className="w-full sm:w-auto px-8 py-3 text-base font-medium bg-primary hover:bg-primary/90 transition-colors"
							>
								Начать обучение
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="w-full sm:w-auto px-8 py-3 text-base font-medium border-primary/20 hover:bg-primary/5 transition-colors"
							>
								Изучить инструменты
							</Button>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<Image
							src="/images/guitar-hero.jpg"
							width={550}
							height={550}
							className="rounded-lg object-cover"
							alt="Guitar player"
							priority
						/>
					</div>
				</div>
			</div>
		</Section>
	);
}
