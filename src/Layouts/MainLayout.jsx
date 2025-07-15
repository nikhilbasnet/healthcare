function Layout({ children }) {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      {/* Add SearchBar here */}
      <div className="p-4 bg-gray-50">
        <SearchBar />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
