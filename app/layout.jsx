import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/header-footer/Navbar";
import Footer from "../components/header-footer/Footer";
import { StoreProvider } from "@/context/cart";
import { Lalezar } from "next/font/google";

export const metadata = {
  title: "jahan-yadak-shop",
};

const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"],

  variable: "--font-lalezar",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fn">
      <body
        className={`${lalezar.variable} bg-white dark:bg-slate-900 `}
        suppressHydrationWarning={true}
      >
        <StoreProvider>
          <Providers>
            <header className=" sticky top-3 z-40">
              <Navbar />
            </header>
            <main className="">{children}</main>
            <footer>
              <Footer />
            </footer>
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
