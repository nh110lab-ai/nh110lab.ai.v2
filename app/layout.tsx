import "./globals.css";

export const metadata = {
  title: "NH110Lab – Labo d’IA appliquée",
  description: "NH110Lab conçoit, teste et déploie des agents IA concrets pour ton business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
