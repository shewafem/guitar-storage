"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Container } from "./";
import ThemedImage from "../themed-image";

const sectionsData = [
	{
		title: "Инструменты",
		links: [
			{ name: "Метроном", href: "#" },
			{ name: "Лады", href: "#" },
			{ name: "Аккорды", href: "#" },
		],
	},
	{
		title: "Мы",
		links: [
			{ name: "О нас", href: "#" },
			{ name: "Блог", href: "#" },
			{ name: "Контакты", href: "#" },
		],
	},
	{
		title: "Ресурсы",
		links: [
			{ name: "Учебные ресурсы", href: "#" },
			{ name: "Сообщество", href: "#" },
		],
	},
];

const socialLinksData = {
	instagram: "https://instagram.com",
	facebook: "https://facebook.com",
	twitter: "https://twitter.com",
	linkedin: "https://linkedin.com",
};

export const SiteFooter: React.FC = () => {
	const currentYear = new Date().getFullYear();
	const sections = sectionsData;
	const socialLinks = socialLinksData;

	return (
		<footer className="border-t border-border bg-secondary text-secondary-foreground">
			<Container>
				<div className="py-16 md:py-20 lg:py-24">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
						<div className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">
							<Link
								href={"/"}
								className="mb-4 inline-flex items-center gap-2 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
							>
								<ThemedImage />
							</Link>
							<p className="mb-6 max-w-xs text-sm text-muted-foreground">Интерактивная платформа для гитаристов</p>
							{Object.keys(socialLinks).length > 0 && (
								<ul className="flex items-center gap-4" aria-label="Social media links">
									{socialLinks.instagram && (
										<li>
											<a
												href={socialLinks.instagram}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="Instagram"
												className="block rounded-full p-1.5 text-muted-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
											>
												<FaInstagram className="size-5" />
											</a>
										</li>
									)}
									{socialLinks.facebook && (
										<li>
											<a
												href={socialLinks.facebook}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="Facebook"
												className="block rounded-full p-1.5 text-muted-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
											>
												<FaFacebook className="size-5" />
											</a>
										</li>
									)}
									{socialLinks.twitter && (
										<li>
											<a
												href={socialLinks.twitter}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="Twitter"
												className="block rounded-full p-1.5 text-muted-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
											>
												<FaTwitter className="size-5" />
											</a>
										</li>
									)}
									{socialLinks.linkedin && (
										<li>
											<a
												href={socialLinks.linkedin}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="LinkedIn"
												className="block rounded-full p-1.5 text-muted-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
											>
												<FaLinkedin className="size-5" />
											</a>
										</li>
									)}
								</ul>
							)}
						</div>
						<div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3 lg:gap-12 lg:text-left xl:gap-16">
							{sections.map((section, sectionIdx) => (
								<nav key={sectionIdx} aria-labelledby={`footer-nav-${sectionIdx}`}>
									<h3 id={`footer-nav-${sectionIdx}`} className="mb-4 text-base font-semibold text-foreground">
										{section.title}
									</h3>
									<ul className="space-y-3">
										{section.links.map((link, linkIdx) => (
											<li key={linkIdx}>
												<a
													href={link.href}
													className="inline-block text-sm text-muted-foreground transition-colors duration-200 hover:text-primary hover:underline focus-visible:rounded focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
												>
													{link.name}
												</a>
											</li>
										))}
									</ul>
								</nav>
							))}
						</div>
					</div>
					<div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t border-border pt-8 text-center md:mt-20 md:flex-row md:gap-8 md:text-left">
						<p className="text-sm text-muted-foreground">&copy; {currentYear} Все права защищены.</p>
						<ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-end">
							<li>
								<a
									href="/terms"
									className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary hover:underline focus-visible:rounded focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
								>
									Соглашения
								</a>
							</li>
							<li>
								<a
									href="/privacy"
									className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary hover:underline focus-visible:rounded focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
								>
									Приватная политика
								</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</footer>
	);
};
