// app/layout.tsx
export const metadata = {
  title: "Quan - AI Systems Builder",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}