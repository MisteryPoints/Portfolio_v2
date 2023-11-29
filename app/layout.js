import "../styles/globals.css";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "DevPoint Portfolio",
  description: "Welcome to my Personal Portfolio",
  icons: "/DevIcon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
        <main className={`font-mont bg-light dark:bg-dark w-full min-h-screen`}>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
