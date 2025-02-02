import { Raleway } from "next/font/google";
import "./globals.css";


const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Auto-X-com",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="parallax"></div>
        <div className="overlay"></div>
        <div id="app-content">
          {children}
        </div>
      </body>
    </html>
  );
}
