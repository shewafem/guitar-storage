"use client";

import { ModeToggle } from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Link from "next/link";
import { Music, User } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	const { theme, systemTheme } = useTheme();

	const currentTheme = theme === "system" ? systemTheme : theme;
	const logoSrc = currentTheme === "dark" ? "/images/logo-light.png" : "/images/logo-dark.png";

	return (
		<header className={cn("border-b", className)}>
			<Container className="flex items-center justify-between">
				{/* Левая часть */}
				<Link href="/">
					<Image src={logoSrc} alt="logo" width={35} height={35} />
				</Link>
				<div className="flex items-center gap-3">
					<Link href="/chords" className="flex items-center gap-1">
						<Music size={16} />
						Аккорды
					</Link>
					<Link href="/login" className="flex items-center gap-1">
						<User size={16} />
						Войти
					</Link>
					<ModeToggle />
				</div>
			</Container>
		</header>
	);
};
