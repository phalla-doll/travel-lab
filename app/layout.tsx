import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Travel Lab',
  description: 'Discover the world with Travel Lab',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@900,800,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="font-satoshi antialiased">{children}</body>
    </html>
  );
}
