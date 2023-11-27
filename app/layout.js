import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sharpen Your Logic Skills for Tech Interviews with VRPlaced",
  description:
    "Navigate Computer Science Challenges - Interact with Our Logical Interview Bot. Just Say 'Hello' to Kickstart Your Prep!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
