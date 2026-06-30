import Footer from "./sections/footer";
import Navbar from "./sections/navbar";
import WhatsAppButton from "../ui/whatsapp-button";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
