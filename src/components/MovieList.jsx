const MovieList = (props) => {
  return (
    <div className="d-flex justify-content-start m-3">
      {props.movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.Poster} alt="movie"></img>
          <div className="overlay d-flex align-items-center justify-content center"></div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
