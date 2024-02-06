import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticlesList';

const ArticlesListPage = ({ searchQuery }) => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const url = 'http://localhost:8000/api/articles';
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* <SearchBox data={searchResults} onSearch={handleSearch} /> */}
      <div className="flex">
          <h1 className='mb-4 text-2xl md:text-3xl text-coolGray-900 font-bold text-left md:w-1/2'>Questions</h1>
          <div className='py-5 md:w-1/2 hidden xl:flex items-center justify-end'>
            {/* <ChevronLeftIcon className='h-9 w-10 relative z-10 inline-flex items-center bg-blue-900 text-sm font-semibold text-white focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'></ChevronLeftIcon> */}
            {Array.from({ length: Math.ceil(searchResults.length / itemsPerPage) }, (_, index) => (
              <button className='relative z-10 inline-flex items-center bg-blue-900 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' key={index + 1} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && currentItems.length > 0 && (
        <div className='max-w-md md:max-w-5xl ml-10'>
          <ArticleList articles={currentItems} />

        </div>
      )}
      {!loading && !error && currentItems.length === 0 && <p>No results found.</p>}
    </>
  );
};

export default ArticlesListPage;