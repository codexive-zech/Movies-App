import { Header } from "./components";
import "./globals.css";

export const metadata = {
  title: "Chic Movies App",
  description: "Get all the Latest and Trending Movies information here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {/* Navbar */}
        {children}
      </body>
    </html>
  );
}
