import Baloo from 'next/font/local'
import "./globals.css";
import Head from 'next/head';

const baloo = Baloo({ src: './Baloo-Regular-webfont.woff' })

export const metadata = {
  title: "Arcade Allies",
  description: "Find and play together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head> {}
        <link rel="icon" href="/images/favicon.ico" /> {}
        {}
        <script>
          {`
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const faviconLink = document.querySelector('link[rel="icon"]');
            if (faviconLink) {
              faviconLink.href = prefersDarkMode ? '/images/favicon.ico' : '/images/favicon-bk.ico';
            }
          `}
        </script>
      </Head>
      <body className={baloo.className}>{children}</body>
    </html>
  );
}
