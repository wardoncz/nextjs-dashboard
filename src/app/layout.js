import Baloo from 'next/font/local'
import "./globals.css";

const baloo = Baloo({ src: './Baloo-Regular-webfont.woff' })

export const metadata = {
  title: "Arcade Allies",
  description: "Find and play together",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/favicon-or.ico',
        href: '/images/favicon-or.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/favicon.ico',
        href: '/images/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baloo.className}>{children}</body>
    </html>
  );
}
