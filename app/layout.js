import localFont from "next/font/local";
import "./globals.css";
import Main from "@/components/Main";
import { AppComponent } from "@/components/context/AppContext";


const helveticaNeue = localFont({
  src: [
    {
      path: 'fonts/HelveticaNeueBlack.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: 'fonts/HelveticaNeueBlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: 'fonts/HelveticaNeueBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'fonts/HelveticaNeueBoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: 'fonts/HelveticaNeueLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'fonts/HelveticaNeueLightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: 'fonts/HelveticaNeueMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/HelveticaNeueMediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: 'fonts/HelveticaNeueRoman.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/HelveticaNeueThin.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: 'fonts/HelveticaNeueThinItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: 'fonts/HelveticaNeueUltraLight.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: 'fonts/HelveticaNeueUltraLightItalic.otf',
      weight: '100',
      style: 'italic',
    },
  ],
  variable: '--font-helvetica', // Optional CSS variable
});

export const metadata = {
  title: "Marafiki Coffee Marketing",
  description: "Marafiki Coffee Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96"/>
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg"/>
      <link rel="shortcut icon" href="/favicon/favicon.ico"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="manifest" href="/favicon/site.webmanifest"/>
    </head>
    <body
        className={helveticaNeue.className}
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
