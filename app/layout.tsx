import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Mrityunjoy Mondal | Software Engineer',
  description: 'Portfolio of Mrityunjoy Mondal, a Software Engineer specializing in Full Stack development and AI-powered web applications.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, jetbrainsMono.variable)}>
      <body suppressHydrationWarning className="bg-slate-950 text-slate-200 antialiased selection:bg-blue-500/30 selection:text-blue-200 font-sans">
        <TooltipProvider>
          <AnimatedBackground />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
