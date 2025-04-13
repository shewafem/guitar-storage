import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geologica, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";

const geologica = Geologica({
	variable: "--font-geologica",
	subsets: ["latin", "cyrillic"],
});

const jetBrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: 'Website Title',
  description: 'Website description',
  //icons: {
  //  icon: [
  //    {
  //      media: '(prefers-color-scheme: light)',
  //      url: '/images/logo-light.png',
  //      href: '/images/logo-light.png',
  //    },
  //    {
  //      media: '(prefers-color-scheme: dark)',
  //      url: '/images/logo-dark.png',
  //      href: '/images/logo-dark.png',
  //    },
  //  ],
  //},
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
				</ThemeProvider>
			</body>
		</html>
	);
}
