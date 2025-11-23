export const metadata = {
  title: "??????",
  description: "????? Next.js ??????"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
