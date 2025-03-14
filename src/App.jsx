import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import NotFound from './pages/404'
import "preline/preline";
import Neko from './services/neko';
import BlogPost from './pages/BlogPost';
import Blogs from './pages/Blogs';
export const AppContext = createContext();

function App() {
	const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "dark");

	useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);

	const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    

	return (
		<AppContext.Provider value={{ theme, switchTheme }}>
      <Neko />
        <BrowserRouter>
        <div className="bg-[#eae8e5] dark:bg-zinc-900">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        </BrowserRouter>
        
      </AppContext.Provider>
	)
}

export default App
