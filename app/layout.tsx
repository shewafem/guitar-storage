import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geologica, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";
import { SiteFooter } from "@/components/shared/footer";

const geologica = Geologica({
	variable: "--font-geologica",
	subsets: ["latin", "cyrillic"],
});

const jetBrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
	title: "Website Title",
	description: "Website description",
};

// 1. Mock Logo Data
const mockLogo: SiteFooterProps["logo"] = {
	// Using a simple SVG placeholder for demonstration. Replace with your actual logo path/URL.
	src: "/images/logo-dark.png",
	alt: "Logo Alt Text",
	title: "LogoSite",
	href: "#", // Link logo to homepage
};

// 2. Mock Footer Sections Data
const mockSections: SiteFooterProps["sections"] = [
	{
		title: "Product",
		links: [
			{ name: "Features", href: "#" },
			{ name: "Pricing", href: "#" },
			{ name: "Integrations", href: "#" },
			{ name: "Case Studies", href: "#" },
			{ name: "Documentation", href: "#" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About Us", href: "#" },
			{ name: "Careers", href: "#" },
			{ name: "Blog", href: "#" },
			{ name: "Press Kit", href: "#" },
			{ name: "Contact", href: "#" },
		],
	},
	{
		title: "Resources",
		links: [
			{ name: "Help Center", href: "#" },
			{ name: "API Status", href: "#" },
			{ name: "Community Forum", href: "#" },
			{ name: "System Status", href: "#" },
		],
	},
];

// 3. Mock Social Links Data (Use '#' or actual profile URLs)
const mockSocialLinks: SiteFooterProps["socialLinks"] = {
	instagram: "#",
	facebook: "#",
	twitter: "#",
	linkedin: "#",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geologica.variable} ${jetBrainsMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<Header />
					{children}
					<SiteFooter logo={mockLogo} sections={mockSections} socialLinks={mockSocialLinks} />
				</ThemeProvider>
			</body>
		</html>
	);
}
