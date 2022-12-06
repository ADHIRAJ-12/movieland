// import React from 'react'; 
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const REACT_APP_API_URL='https://www.omdbapi.com?apikey=148c3a8b';


const movie1={
    "Title": "Captain Marvel",
    "Year": "2019",
    "imdbID": "tt4154664",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
}

const App=()=>{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');

     const searchMovies= async(title)=>{
      const response= await fetch(`${REACT_APP_API_URL}&s=${title}`);
      const data= await response.json();
      setMovies(data.Search);
     }
useEffect(()=>{
 searchMovies('marvel');
},[]);

    return (

        <div className="app">
            <h1>MovieLand</h1>
             
<div className="search">
    <input
    placeholder="Serch For Movies"
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}
    />
    <img 
    src={SearchIcon}
    alt="serch"
    onClick={()=>searchMovies(searchTerm)}
    />
    
</div>

{
 movies?.length>0
 ?(
    <div className="container">
    
{movies.map((movie)=>(
    <MovieCard movie={movie}/>
))}

</div>
 ): (
    <div className="empty">
<h2>No Movies Found</h2>
    </div>

 )

}

{/* 
<div className="container">
    
<MovieCard movie1={movie1}/>

</div> */}

        </div>
    );
}

export default App; 
// const App = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [movies, setMovies] = useState([]);
  
//     useEffect(() => {
//       searchMovies("marvel");
//     }, []);
  
//     const searchMovies = async (title) => {
//       const response = await fetch(`${API_URL}&s=${title}`);
//       const data = await response.json();
  
//       setMovies(data.Search);
//     };
  
//     return (
//       <div className="app">
//         <h1>MovieLand</h1>
  
//         <div className="search">
//           <input
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search for movies"
//           />
//           <img
//             src={SearchIcon}
//             alt="search"
//             onClick={() => searchMovies(searchTerm)}
//           />
//         </div>
  
//         {movies?.length > 0 ? (
//           <div className="container">
//             {movies.map((movie) => (
//               <MovieCard movie={movie} />
//             ))}
//           </div>
//         ) : (
//           <div className="empty">
//             <h2>No movies found</h2>
//           </div>
//         )}
//       </div>
//     );
//   };
  
//   export default App;

// //148c3a8b