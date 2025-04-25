export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-7xl text-white">Services Layout</h1>
      {children}
    </div>
  );
}
