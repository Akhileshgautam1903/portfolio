import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Akhilesh - Web Developer",
  description: "Personal Portfolio of Akhilesh Gautam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
