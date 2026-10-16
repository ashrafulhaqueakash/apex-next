import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { IntroSplash } from "@/components/IntroSplash";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToHash } from "@/components/ScrollToHash";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fira-sans",
  display: "swap",
});

export const metadata = {
  title: "The Apex Media Group",
  description:
    "The Apex Media Group is a Dubai based Architectural Media company transforming the built environment into extraordinary brand opportunities.",
};

// Let the page draw behind Safari's translucent toolbars instead of
// having them tinted a solid colour.
export const viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaSans.variable}>
      <body>
        <SmoothScrollProvider>
          <IntroSplash />
          <ScrollToHash />
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
