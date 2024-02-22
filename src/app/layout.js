import Baloo from 'next/font/local'
import "./globals.css";

const baloo = Baloo({ src: './Baloo-Regular-webfont.woff' })

export const metadata = {
  title: "Arcade Allies",
  description: "Find and play together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={baloo.className}>{children}</body>
    </html>
  );
}
