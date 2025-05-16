import React, {useState} from 'react'
import './MovieCard.css'


const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language, overview} }) => {
  
const [info, setInfo] = useState(false);

const toggleInfo = () => {
  setInfo(!info);
};

  return (
    <> 
    {/* making the movie card a component */}
    <div className="movie-card" onClick={toggleInfo} >
      <img className='cursor-pointer' src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt={title} />

      <div className="mt-4 cursor-pointer">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="star icon" />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>
          <span>•</span>
          <p className='lang'>{original_language}</p>

          <span>•</span>
          <p className='year'>
            {release_date ? release_date.split('-')[0] : 'N/A'}
          </p>
        </div>
      </div>
      {/* creating a poput card to display more information about the movie */}
       {info && (
        <div className="modal" onClick={toggleInfo}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={toggleInfo}>&times;</span> 
            <h2>{title}</h2>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt={title} />
            <div className="content">
              <div className="rating">
                <img src="star.svg" alt="star icon" />
                <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
              </div>
              <span>•</span>
              <p className='lang'>{original_language}</p>
              <span>•</span>
              <p className='year'>
                {release_date ? release_date.split('-')[0] : 'N/A'}
              </p>
            <p className='overview mt-1 text-gray-100'>{overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default MovieCard