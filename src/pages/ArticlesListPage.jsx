import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleList from '../components/ArticlesList';
import nlp from 'compromise';

const ArticlesListPage = ({ searchQuery }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  var people;
  // const serverAddress = "http://localhost:8000";
  const serverAddress = 'http://pjha:8000/api/articles';
  //const someParam = 'tell me about winflex';
  const nlpData = () => {
    let doc = nlp(searchQuery);
    console.log("NLP doc: ", doc);
    // Example: find people's names
    people = (doc.nouns() && !doc.adjectives()).out('array');
    console.log('People:', doc, people);
    
    //return people;
    // Add more NLP processing as needed
  };
  // var testDoc;
  // //hey this is a try to figure out what NLP could perform
  // const nlpDataDemo = () => {
  //   testDoc = nlp(someParam);
  //   console.log("NLP test doc: ", testDoc);
  //   // Example: find people's names
  //   let people = testDoc.verbs().out('array');
  //   console.log('People verbs:', people);
  //   return people;
  //   // Add more NLP processing as needed
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const url = `${serverAddress}`;
        const response = await axios.get(url);

        // const filteredData = response.data.filter(item =>
        //   item.title.toLowerCase().includes(searchQuery.toLowerCase())
        // );

        // const nlpData = () => {
        //   let doc = nlp(searchQuery);
        //   console.log("NLP doc: ", doc);
        //   // Example: find people's names
        //   let people = doc.all().out('array');
        //   console.log('People:', people);
        //   return people;
        //   // Add more NLP processing as needed
        // };
        nlpData;
        console.log('People:', people);
        const filteredData = response.data.filter(item =>
          item.title.toLowerCase().includes(people.negate().text())
        );
console.log(filteredData.negate().text());
        //nlpDataDemo('This is a test string to see if NLP can find people in this string.');
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
          <ArticleList articles={currentItems} />

        </div>
      )}
      {!loading && !error && currentItems.length === 0 && <p>No results found.</p>}
    </>
  );
};

export default ArticlesListPage;