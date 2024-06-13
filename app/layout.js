import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AllInOneSaver- Download Videos, Photos, Storis from social media at one place.",
  description: "Download Videos, Photos, Storis from social media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
    <head>
    <meta name="ahrefs-site-verification" content="e38dd3d92f40ea5464663c70811c2198df478078cc9504e2ea3af1f04d78785d">
    </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
