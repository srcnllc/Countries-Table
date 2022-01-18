import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  // const [filtiredCountries,setFiltiredCountries] =useState({});



  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://restcountries.com/v2/all");
      setPosts(response.data);

    }
    fetchData();
  },[]);

  // useEffect(() => {
  //  setFiltiredCountries(
  //   posts.filter(country =>{
  //     return country.capital.toLowerCase().includes(search.toLowerCase());
  //   })
  //  )
  // }, [search,posts])

  return (
   
      <div className="App border m-5">
        <div className="row m-3">
          <input type="text" className='form-control' placeholder='Search a capıtal' onChange={e => setSearch(e.target.value)}/> {search}

        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col">CAPITAL</th>
              <th scope="col">REGION</th>
              <th scope="col">flag</th>

            </tr>
          </thead>
          <tbody>
            {posts.map((country, index) =>
              <tr key={index}>
                <td>{index} -</td>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td><img src={country.flags.png} alt={country.name}></img></td>
              </tr>)}
          </tbody>
        </table>
      </div>
  );
}
export default App;
