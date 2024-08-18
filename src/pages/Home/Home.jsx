import { useEffect, useState } from "react";
import axios from 'axios'
import { useStoreState , useStoreActions} from "../../store/hooks.ts";
import HomeHeader from "./HomeHeader.jsx";
import HomeFav from "./HomeFav.jsx";
import HomeBody from "./HomeBody.jsx";




function Home() {
  const [movieList, setMovieList]= useState([]);
  const [searchMovieName, setSearchMovieName]= useState('abc')
  const [favMovieList, setFavMovieList] = useState([]);
  const [showToast, setShowToast]= useState(false)
  const [toastMessage, setToastMessage]= useState('')

  async function fetchData(){
    const options = {
      method: 'GET',
      url: "https://www.omdbapi.com/?",
      params: { s:searchMovieName,page:1,apikey:'7d13a6a5'},
    }
    await axios
    .request(options)
    .then(function (response) {
      setMovieList(response.data.Search)
      console.log(response.data.Search);
    })
    .catch(function (error) {
      console.error(error);

    });
    console.log(movieList);
  }

  useEffect(() => {
  fetchData()
  },[setMovieList])

  useEffect(()=>{
setTimeout(()=>{
  setShowToast(false)
},10000)
  },[showToast])


  return (
    <div className="container">
    <HomeHeader />
      <div className="row">
      <HomeFav favMovieList={favMovieList} 
      setFavMovieList={setFavMovieList} 
      setShowToast={setShowToast} 
      setToastMessage={setToastMessage}
      />
        <div className="col-md-6 col-lg-9">
          <HomeBody showToast={showToast}
           toastMessage={toastMessage} 
           setToastMessage={setToastMessage} 
           setShowToast={setShowToast} 
           movieList={movieList}
           favMovieList={favMovieList}
           setFavMovieList={setFavMovieList}
           setSearchMovieName={setSearchMovieName}
           fetchData={fetchData}
           />
        </div>
      </div>
 
    </div>
  );
}

export default Home;