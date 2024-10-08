import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import MobileNavbar from "@/components/MobileNavbar";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yooye for councillor",
  description: "Seeking all ira indegens for support in the forthcoming election",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        <NavBar/>
        <MobileNavbar/>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
