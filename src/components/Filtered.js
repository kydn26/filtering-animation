import { useEffect } from 'react';

export const Filtered = ({
  setActiveGenre,
  activeGenre,
  popular,
  setFiltered,
}) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    setFiltered(
      popular.filter((movie) => movie.genre_ids.includes(activeGenre))
    );
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? 'active' : ''}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? 'active' : ''}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? 'active' : ''}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
};
