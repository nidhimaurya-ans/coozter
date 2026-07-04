import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Coozter | Affiliate Branding and Performance Marketing",
  description: "Coozter helps companies build visibility, trust, partnerships, and revenue through affiliate branding and performance-focused digital marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem("coozter-theme");
                const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = stored === "dark" || stored === "light" ? stored : systemDark ? "dark" : "light";
                document.documentElement.classList.toggle("dark", theme === "dark");
                document.documentElement.dataset.theme = theme;
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>
        <ScrollProgress />
        <Header />
        <main className="site-flow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
