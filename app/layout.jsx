import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";

export const metadata = {
  title: "Coozter | Affiliate Branding and Performance Marketing",
  description: "Coozter helps companies build visibility, trust, partnerships, and revenue through affiliate branding and performance-focused digital marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/assets/mainhero.jpg" as="image" />
      </head>
      <body>
        <ScrollProgress />
        <Header />
        <main className="site-flow">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
