import { Header } from "./components";
import "./globals.css";
import { Provider } from "./components";

export const metadata = {
  title: "Chic Movies App",
  description: "Get all the Latest and Trending Movies information here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* Header */}
          <Header />
          {/* Navbar */}
          {children}
        </Provider>
      </body>
    </html>
  );
}
