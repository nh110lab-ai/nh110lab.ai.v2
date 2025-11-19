import "./globals.css";

export const metadata = {
  title: "NH110Lab — AI Solutions",
  description: "Automatisations, IA sur mesure, et solutions avancées pour entreprises.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
