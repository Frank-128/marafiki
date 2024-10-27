import localFont from "next/font/local";
import "./globals.css";
import Main from "@/components/Main";
import { AppComponent } from "@/components/context/AppContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Marafiki Coffee Marketing",
  description: "Marafiki Coffee Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppComponent>
        <Main>
        {children}
        </Main>
        </AppComponent>
      </body>
    </html>
  );
}
