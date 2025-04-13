import React from "react";
import {cn} from '@/lib/utils' // Import React for FC type
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui";

interface Props {
	items: string[];
  className?: string;
}

export const SelectSuffix: React.FC<Props> = ({ items, className }) => {
	return (
		<div className={cn(className)}>
			<Select>
				<SelectTrigger className="w-[200px] font-mono">
					<SelectValue placeholder="Выберите суффикс" />
				</SelectTrigger>
				<SelectContent className="font-mono">
					<SelectGroup>
						<SelectLabel>Суффиксы</SelectLabel>
						{items.map((suffix, index) => (
							<SelectItem key={index} value={suffix}>
								{suffix}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};
