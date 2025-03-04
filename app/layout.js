import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Pick Online - Your One-Stop Shop for Electronics, Fashion, and More",
  description: "Discover a wide range of products at Pick Online, from the latest electronics to trendy fashion. Enjoy seamless shopping with great deals and fast delivery.",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en" className="h-full">
      <body>
        <Navbar />
        <main className="flex-1 mx-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
