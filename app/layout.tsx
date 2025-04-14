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
					<SiteFooter />
				</ThemeProvider>
			</body>
		</html>
	);
}
