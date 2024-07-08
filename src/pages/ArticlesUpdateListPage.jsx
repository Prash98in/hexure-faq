import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticlesListUpdate from '../components/ArticlesListUpdate';

const ArticlesUpdateListPage = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const url = 'http://pjha:8000/api/articles';
        const response = await axios.get(url);

        const filteredData = response.data.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(filteredData);
        setError(null);
      } catch (error) {
        setError('Error fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setLocalSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(localSearchQuery);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    return (
    <>
      {/* <SearchBox data={searchResults} onSearch={handleSearch} /> */}

      <div className="lg:block mr-auto ml-5 relative max-w-xl md-w-5 w-full">
                    <p className="flex absolute inset-y-0 left-.88 pointer-events-none">
                      <span className="items-center flex">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                          strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0
                      11-14 0 7 7 0 0114 0z"/></svg>
                      </span>
                    </p>
                    {/* <input placeholder="Type to search" type="search" className="border border-gray-300 focus:ring-indigo-600
                  focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"/> */}
                  <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={localSearchQuery}
                      onChange={handleSearchChange}
                      className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm rounded-lg py-2 px-5 w-full"
                    />
                    {/* <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                      Search
                    </button> */}
                    <div className="relative">
                      <p
                        onClick={handleSearchSubmit}
                        className="pt-1 pr-1 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200 hover:text-gray-900 focus:outline-none hover:bg-gray-100 cursor-pointer"
                      >
                        <span className="items-center justify-center flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.2rem"
                            height="1.2rem"
                            viewBox="0 0 456.147 456.147"
                            style={{ enableBackground: 'new 0 0 456.147 456.147' }}
                          >
                            <g>
                              <path d="M445.666,4.445c-4.504-4.858-11.756-5.954-17.211-2.19L12.694,290.14c-3.769,2.609-5.878,7.012-5.555,11.586 c0.323,4.574,3.041,8.635,7.139,10.686l95.208,47.607l37.042,86.43c1.78,4.156,5.593,7.082,10.064,7.727 c0.621,0.091,1.242,0.136,1.856,0.136c3.833,0,7.506-1.697,9.989-4.701l38.91-46.994l107.587,52.227 c1.786,0.867,3.725,1.306,5.663,1.306c1.836,0,3.674-0.393,5.384-1.171c3.521-1.604,6.138-4.694,7.146-8.432L448.37,18.128 C449.314,14.629,449.878,8.988,445.666,4.445z M343.154,92.883L116.681,334.604l-71.208-35.603L343.154,92.883z M162.003,416.703 l-27.206-63.48L359.23,113.665L197.278,374.771c-0.836,0.612-1.634,1.305-2.331,2.146L162.003,416.703z M312.148,424.651 l-88.604-43.014L400.427,96.462L312.148,424.651z" />
                            </g>
                          </svg>
                        </span>
                      </p>
                    </div>
                  </form>
                  </div>
      <div className="flex max-w-4xl "> {/*md:max-w-3xl*/}
          <h1 className='mb-4 text-2xl md:text-3xl text-coolGray-900 font-bold text-left'>Questions</h1>
          <div className='w-full flex justify-end'>
            {/* <ChevronLeftIcon className='h-9 w-10 relative z-10 inline-flex items-center bg-blue-900 text-sm font-semibold text-white focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'></ChevronLeftIcon> */}
            {Array.from({ length: Math.ceil(searchResults.length / itemsPerPage) }, (_, index) => (
              <span key={index + 1} >&nbsp;<button className='items-center bg-blue-900 px-3 py-2 text-sm font-semibold text-white rounded' onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button> </span>
            ))}
          </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && currentItems.length > 0 && (
        <div className='max-w-4xl ml-5'> {/*md:max-w-3xl*/} 
          <ArticlesListUpdate articles={currentItems} />

        </div>
      )}
      {!loading && !error && currentItems.length === 0 && <p>No results found.</p>}
    </>
  );
};

export default ArticlesUpdateListPage;