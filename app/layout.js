import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Essham | Facilities Management",
  description:
    "Essham Al-Sharq Establishment for management, maintenance, and cleaning services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
