export const metadata = {
  title: "Quan | AI Systems Builder",
  description: "Building AI-powered data systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}