import "./globals.css";
export const metadata = {
  title: "أكاديمية تبارك | تدريس المنهج المصري أون لاين",
  description: "أكاديمية تبارك لتدريس المنهج المصري أون لاين عربي ولغات لجميع المراحل داخل مصر وخارجها.",
  icons: { icon: "/logo.jpeg" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
