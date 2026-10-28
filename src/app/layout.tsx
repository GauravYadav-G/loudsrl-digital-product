import type { Metadata, Viewport } from 'next';
import '../index.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'ARKA Technovation — Digital Products, Software & Growth',
  description:
    'ARKA Technovation designs and builds enterprise software, high-performance web platforms, and growth systems for ambitious brands.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'ARKA Technovation — Digital Products, Software & Growth',
    description:
      'Enterprise software, high-performance web platforms, and growth systems for ambitious brands.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/geist-400-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cabinet-grotesk-500-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Speculation Rules API for instant same-origin client navigation */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: { href_matches: '/*' },
                  eagerness: 'moderate',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-black antialiased selection:bg-solar selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
