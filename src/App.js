import './App.css';
import { useState } from 'react';
import axios from 'axios'; 
import RepoDetails from './RepoDetails';

function App() {
  const [username,setUsername]=useState("");
  const [loading,setLoading]=useState(false);
  const [user,setUser]=useState("");
  const [repos,setRepos]=useState([]);
  const [details,setDetails]=useState({});
  const [detailsLoading,setDetailsLoading]=useState(false);

  function handleSubmit(e){
    e.preventDefault();
    searchRepos();
    searchUser();
  }

  function searchRepos(){
    setLoading(true);
    axios({
        method:"get",
        url:`https://api.github.com/users/${username}/repos`,
      }).then(res=>{
        setLoading(false);
        setRepos(res.data);
      })
  }

  function searchUser(){
    setLoading(true);
    axios({
        method:"get",
        url:`https://api.github.com/users/${username}`,
      }).then(res=>{
        setLoading(false);
        setUser(res.data);
      })
  }

  function renderRepo(repo){
    return (
      <div className='row' onClick={()=>getDetails(repo.name)} key={repo.id}>
      <h2 className='repo-name'>
      {repo.name}

      </h2>

      </div>
    )
  }

  function getDetails(repoName){
    setDetailsLoading(true);
    axios({
      method:"get",
      url:`https://api.github.com/repos/${username}/${repoName}`,
    }).then(res=>{
      setDetailsLoading(false);
      setDetails(res.data);
    });
  }
  return (
    <div className="page">
    <div className='landing-page-container'>
    <div className='left-side'>
    <h1>SecURepo</h1>
    <form className='form'>
    <input
      className='input'
      value={username}
      placeholder='Enter your Github username'
      onChange={e=>setUsername(e.target.value)}
    />
    <button className='button' onClick={handleSubmit}>{loading?"Searching..":"Search"}</button>
    </form>
    <div className='results-container'>
    <h2>{user.name}</h2>
   <img src={user.avatar_url} alt='avatar'/>
 
  
    {repos.map(renderRepo)}

    </div>

    </div>

    <RepoDetails details={details} loading={detailsLoading}/>

    </div>
      
    </div>
  );
}

export default App;
