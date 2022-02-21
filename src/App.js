import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Filtered } from './components/Filtered';
import { Movie } from './components/Movie';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=e300c9898e1d3935bd4c1ef8541908e0&language=en-US&page=1'
    );
    const data = await response.json();
    setPopular(data.results);
    setFiltered(data.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
      <Filtered
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className="popular-movies"
      >
        <AnimatePresence>
          {filtered.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
