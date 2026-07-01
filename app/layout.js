import "./globals.css";
import Footer from "./components/Footer";
import RevealObserver from "./components/RevealObserver";
import { LanguageProvider } from "../lib/i18n/LanguageProvider";

export const metadata = {
  title: "Essham | Facilities Management",
  description:
    "Essham Al-Sharq Establishment for management, maintenance, and cleaning services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="description"
          content="Essham Al-Sharq Establishment for management, maintenance, and cleaning services."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+Arabic:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <RevealObserver />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
