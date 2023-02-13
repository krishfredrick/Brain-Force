import Banner from '../DashboardComponents/Banner';
import SearchBar from '../DashboardComponents/SearchBar';
import NavBar from '../DashboardComponents/Header/Index';

const Dashboard = async() => {

  return (
    <div>
     <NavBar />
      <Banner />
      <SearchBar />
    </div>
  )
}

export default Dashboard
