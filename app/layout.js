import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AllInOneSaver- Download Videos, Photos, Storis from social media at one place.",
  description: "Download Videos, Photos, Storis from social media",
  other: {'google-site-verification': "jaRe97M-uTV-Cs3QgkeyEVX5fJa4gITkCyWNPWs_6Nc" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
