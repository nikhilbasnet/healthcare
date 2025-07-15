import React from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Search Results</h1>
      <p>Showing results for: <strong>{query}</strong></p>
      {/* Your search results UI */}
    </div>
  );
}
