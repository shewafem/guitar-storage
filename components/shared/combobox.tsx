"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

interface Props {
	items: string[];
	value: string | null;
	onValueChange: (value: string) => void;
	className?: string;
}

export const Combobox: React.FC<Props> = ({ items, value, onValueChange, className }) => {
	const [open, setOpen] = React.useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const selectedItem = items.find((item) => item === value) || null;

	return (
		<div className={cn(className)}>
			{isDesktop ? (
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button variant="outline" className="w-full sm:w-[200px] justify-start font-mono">
							{" "}
							{/* Responsive width */}
							{selectedItem ? <>{selectedItem}</> : <>Выберите тип</>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-full sm:w-[200px] p-0 font-mono" align="start">
						{" "}
						{/* Responsive width */}
						<ItemList items={items} setOpen={setOpen} onValueChange={onValueChange} />
					</PopoverContent>
				</Popover>
			) : (
				<Drawer open={open} onOpenChange={setOpen}>
					<DrawerTrigger asChild>
						<Button variant="outline" className="w-full sm:w-[200px] justify-start font-mono">
							{" "}
							{/* Responsive width */}
							{selectedItem ? <>{selectedItem}</> : <>Выберите тип</>}
						</Button>
					</DrawerTrigger>
					<DrawerContent>
						<div className="p-4">
							<DrawerTitle className="font-mono">Выберите тип</DrawerTitle>
							<DrawerDescription className="font-mono">Выберите тип из списка ниже.</DrawerDescription>
							<div className="mt-4 border-t font-mono">
								<ItemList items={items} setOpen={setOpen} onValueChange={onValueChange} />
							</div>
						</div>
					</DrawerContent>
				</Drawer>
			)}
		</div>
	);
};

function ItemList({
	items,
	setOpen,
	onValueChange,
}: {
	items: string[];
	setOpen: (open: boolean) => void;
	onValueChange: (value: string) => void;
}) {
	return (
		<Command>
			<CommandInput placeholder="Найти тип..." />
			<CommandList>
				<CommandEmpty>Таких аккордов нет...</CommandEmpty>
				<CommandGroup heading="Типы">
					{items.map((item) => (
						<CommandItem
							key={item}
							value={item}
							onSelect={(value) => {
								onValueChange(value);
								setOpen(false);
							}}
						>
							{item}
						</CommandItem>
					))}
				</CommandGroup>
			</CommandList>
		</Command>
	);
}
