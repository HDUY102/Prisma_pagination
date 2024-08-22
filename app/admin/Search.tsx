import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodeSearchTerm = encodeURIComponent(searchTerm);
    router.push(`/search?title=${encodeSearchTerm}`);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="flex items-center gap-8 text-white font-serif">
      <form
        onSubmit={onSearch}
        className={`p-3 flex mx-4 rounded-2xl ${isFocused ? 'bg-[#1A1A2B]' : 'bg-gray-300'}`}
      >
        <input
          type="text"
          placeholder=""
          className={`w-24 sm:w-80 bg-transparent ${isFocused ? 'text-white' : 'text-black'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FaSearch className={isFocused ? "text-white" : "text-slate-900"} />
        </button>
      </form>
    </div>
  );
};

export default Search;
