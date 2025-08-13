import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Samsung para Empresas | Soluções Corporativas',
  description: 'Explore o portfólio de produtos e soluções da Samsung para empresas. Encontre smartphones, displays, climatização e serviços para otimizar seu negócio.',
  openGraph: {
    title: 'Samsung para Empresas | Soluções Corporativas',
    description: 'Explore o portfólio de produtos e soluções da Samsung para empresas.',
    url: 'https://samsung-business-hub.com', // Replace with your actual domain
    siteName: 'Samsung para Empresas',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with your actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
