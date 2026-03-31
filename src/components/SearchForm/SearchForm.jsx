import './SearchForm.css';

function SearchForm({ searchQuery, setSearchQuery, setPage, searchFunction }) {
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            setPage(1);
            searchFunction();
        }
    }

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Enter name..."
                className="search__input"
                value={searchQuery}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <button
                className="search__button"
                onClick={() => {
                    setPage(1);
                    searchFunction();
                }}
            >
                Search
            </button>
        </div>
    );
}

export default SearchForm;
