

//Dynamic Search Bar
const SearchBar = ({searchTerm, updateSearch}) => {

    return (
        <div className="searchBar">
        <form>
            <h3 className="searchBarText">Search by Color Name: </h3>
            <input className="inputBar"
                placeholder="Search Here"
                value={searchTerm}
                onChange={updateSearch}
            />
        </form>
    </div>
    )
}

export default SearchBar