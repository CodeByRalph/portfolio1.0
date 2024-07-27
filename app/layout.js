
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ralph Stout",
  description: "Ralph Stout portfolio website",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-navy-blue w-full h-25 text-center text-lavender-blush flex justify-center">
          <Link href="https://www.linkedin.com/in/ralphstout/"><Image src={'/Linkedin.png'} width={30} height={30} className="m-2" alt="linkedin Logo"/></Link>
          <Link href="https://github.com/CodeByRalph"><Image src={'/github.png'} width={30} height={30} className="m-2" alt="github logo"/></Link>
        </footer>
      </body>
    </html>
  );
}
