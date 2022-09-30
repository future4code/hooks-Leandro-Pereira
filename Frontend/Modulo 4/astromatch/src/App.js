import React, {useState} from 'react';
import Profile from './components/Profile/Profile'
import MatchList from './components/MatchList/MatchList'
import GlobalStyles from './GlobalStyle';

const App = () =>{
  const [currentPage, setCurrentPage] = useState("Profile")

  const goToProfile = () =>{
    setCurrentPage("Profile")
  }

  const goToMatchList = () =>{
    setCurrentPage("MatchList")
  }

  const changePage = () =>{
    switch(currentPage){
      case "Profile":
        return <Profile goToMatchList={goToMatchList} />
      case "MatchList":
        return <MatchList  goToProfile={goToProfile} /> 
      default:
        return <p>Page not found try again soon</p>  
    }
  }


  return(
    <div>
      {changePage()}
      <GlobalStyles/>
    </div>
  )
}
export default App;