export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="w-full h-full flex justify-center ">
    <div className="max-w-screen-lg min-w-[400px]">

    
    {children}</div>
    </div>
    )
}
