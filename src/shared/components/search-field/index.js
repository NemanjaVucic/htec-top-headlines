const SearchField = ({ term, handleSearchTerm }) => (
  <div className="w-full flex items-center justify-center mt-5 mb-5">
    <div className="w-full lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg border-2 border-gray-400 py-2 focus-within:border-green-400 focus-within:shadow-xl transition-shadow">
      <input
        placeholder="Search term..."
        className="appearance-none rounded-lg bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        name="term"
        value={term}
        onChange={handleSearchTerm}
      />
    </div>
  </div>
);

export default SearchField;
