import { useState, useEffect } from 'react';
import { NavLink,Routes, Route, useNavigate, Navigate  } from 'react-router-dom';
// import Fuse from 'fuse.js';
// import nlp from 'compromise';
import NavigationBar from './NavigationBar'

//import HomePage from './pages/pages/HomePage';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import AriticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import SaveArticlePage from './pages/SaveArticlePage';
import UpdateArticlePage from './pages/UpdateArticlePage';
import HowToUsePage from './pages/HowToUse';
import ArticlesUpdateListPage from './pages/ArticlesUpdateListPage';

import NotFoundPage from './pages/NotFoundPage';
import Register from './pages/Register';
import Login from './pages/Login';
import AboutForeSightPage from './pages/AboutForeSight';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);

  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser)); // Store user in local storage

    // setTimeout(() => {
    //   handleLogout();
    // }, 50000);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user'); 
    navigate('/login');
  };

  const handleSaveArticle = (newArticle) => {
    setArticles((prevArticles) => [...prevArticles, newArticle]);
  };


  // const [results, setResults] = useState([]);
  // // Initialize Fuse with your items and options
  //   const fuse = new Fuse(searchQuery, {
  //     keys: ['title', 'description'], // Adjust based on your item properties
  //     includeScore: true,
  //     threshold: 0.3, // Tweak threshold for fuzziness
  //   });

  const handleSearch = (query) => {
    setSearchQuery(query);

    // if (query.length > 2) {
    //   // Use NLP to process the query for more relevant search keywords
    //   const processedQuery = nlp(query).topics().out('array');

    //   // If NLP finds relevant topics, use them; otherwise, use the original query
    //   const effectiveQuery = processedQuery.length > 0 ? processedQuery[0] : query;

    //   // Perform fuzzy search with the processed or original query
    //   const searchResults = fuse.search(effectiveQuery).map(result => result.item);

    //   setResults(searchResults);
    // } else {
    //   setResults([]);
    // }
    
    // console.log(results);
    navigate(`/articles${query ? `?q=${query}` : ''}`);
  };

 

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const Menus = [
    { title: "About us", src: "Chart_fill", pageName: "About" },
    { title: "Articles List", src: "Calendar", pageName: "articles" },
    { title: "Articles Update", src: "Calendar", pageName: "articlesupdate" },
    { title: "Save Articles", src: "Calendar", pageName: "save-article" },
    { title: "How to use", src: "Chart_fill", pageName: "HowToUse" },
    { title: "About ForeSight", src: "Chart_fill", pageName: "AboutForeSight" },
    //{ title: "Update Article", src: "Calendar", pageName: "update-article" },
    
  ];

  return (
    <div>
          {user ? <div className='flex h-screen'>
      <div
          className={` ${
            open ? "fixed top-0 left-0 w-72" : "w-20 "
          } bg-dark-purple h-full p-5 top-0 left-0 pt-8 relative duration-300`}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="gap-x-3 flex flex-nowrap">
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
              <img
                src="./src/assets/HexureIcon.png"
                className={`cursor-pointer duration-300 ${
                  open && "rotate-[180deg]"
                }`}
              />
            </NavLink>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`nav-Link 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
              <NavLink to={`/${Menu.pageName}`} className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                <span className='flex'><img src={`./src/assets/${Menu.src}.png`} /> &nbsp;&nbsp;<span className={`${!open && "hidden"} origin-left duration-200`}>{`${Menu.title}`}</span>
                </span>
              </NavLink>
              </li>
            ))}
          </ul>
        </div>
      

      <div className="container h-fit p-0">
        <NavigationBar user={user} onLogout={handleLogout} onSearch={handleSearch} searchQuery={searchQuery} />
         <section className="container p-5 m-0 mx-auto h-[90vh] overflow-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage isOpen={open}/>}  />
            <Route path="/:articleId" element={<AriticlePage />} />
            <Route path="/articles" element={<ArticlesListPage searchQuery={searchQuery} />} />
            <Route path="/articlesupdate" element={<ArticlesUpdateListPage searchQuery={searchQuery} />} />
            <Route path="/save-article" element={<SaveArticlePage onSave={handleSaveArticle} />} />
            <Route path="/HowToUse" element={<HowToUsePage />} />
            <Route path="/AboutForeSight" element={<AboutForeSightPage />} />
            <Route path="/update-article" element={<UpdateArticlePage onSave={handleSaveArticle} />} />
            <Route
              path="/login"
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/register"
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <Register onRegister={handleLogin} />
                )
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </section>
      </div>
      </div> : 
      
      <div className="container">
        {/* <section className="container p-0 m-0 mx-auto"> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/:articleId" element={<AriticlePage />} />
            <Route path="/articles" element={<ArticlesListPage searchQuery={searchQuery} />} />
            <Route path="/save-article" element={<SaveArticlePage onSave={handleSaveArticle} />} />
            <Route path="/articlesupdate" element={<ArticlesUpdateListPage searchQuery={searchQuery} />} />
            <Route path="/update-article" element={<UpdateArticlePage onSave={handleSaveArticle} />} />
            <Route
              path="/login"
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/register"
              element={
                user ? (
                  <Navigate to="/" />
                ) : (
                  <Register onRegister={handleLogin} />
                )
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        {/* </section> */}
      </div>
      
      }
    </div>
  );
}

export default App;
