import Cabecalho from "@/src/components/layout/cabecalho/Cabecalho";
import Footer from "@/src/components/layout/footer/Footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Cabecalho />
      {children}
      <Footer />
    </>
  );
}
