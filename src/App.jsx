import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link,Routes, Route, useNavigate, Navigate  } from 'react-router-dom';

import NavigationBar from './NavigationBar'

//import HomePage from './pages/pages/HomePage';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import AriticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import SaveArticlePage from './pages/SaveArticlePage';

import NotFoundPage from './pages/NotFoundPage';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);
  const isActive = true;
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser)); // Store user in local storage
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user'); 
    navigate('/login');
  };

  const handleSaveArticle = (newArticle) => {
    setArticles((prevArticles) => [...prevArticles, newArticle]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
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
    { title: "About", src: "Chart_fill", pageName: "About" },
    { title: "Articles List", src: "Calendar", pageName: "articles" },
    { title: "Save Articles", src: "Calendar", pageName: "save-article" },
  ];

  return (
    <div>
          {user ? <div className='flex sticky h-screen'>
      <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-dark-purple h-full p-5  pt-8 relative duration-300`}
        >
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="gap-x-3 flex flex-nowrap">
            <Link to='/' className="flex className={({ isActive }) =>
                isActive ? 'text-blue-700 font-bold' : ''">
              <img
                src="./src/assets/HexureIcon.png"
                className={`cursor-pointer duration-300 ${
                  open && "rotate-[180deg]"
                }`}
              />
            </Link>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
              <Link className={`flex w-full (${ isActive }) =>
                  ${isActive} ? 'text-blue-700 font-bold' : ''`} to={`/${Menu.pageName}`}>
                <span className='flex'>
                    <img src={`./src/assets/${Menu.src}.png`} /> &nbsp;&nbsp;<span className={`${!open && "hidden"} origin-left duration-200`}>{`${Menu.title}`}</span>
                </span>
              </Link>
              </li>
            ))}
          </ul>
        </div>
      

      <div className="container h-fit p-0 sticky">
        <NavigationBar user={user} onLogout={handleLogout} onSearch={handleSearch} searchQuery={searchQuery} />
         <section className="container p-5 m-0 mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/:articleId" element={<AriticlePage />} />
            <Route path="/articles" element={<ArticlesListPage searchQuery={searchQuery} />} />
            <Route path="/save-article" element={<SaveArticlePage onSave={handleSaveArticle} />} />

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
      
      <div className="container h-fit p-0 sticky mx-auto">
        <section className="container p-0 m-0 mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/:articleId" element={<AriticlePage />} />
            <Route path="/articles" element={<ArticlesListPage searchQuery={searchQuery} />} />
            <Route path="/save-article" element={<SaveArticlePage onSave={handleSaveArticle} />} />

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
      
      }
    </div>
  );
}

export default App;
