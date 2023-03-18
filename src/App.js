import './App.css';
import Header from './components/home/header';
import Banner from './components/home/banner';
import AboutUs from './components/home/about-us';
import SmartSearch from './components/home/smart-search';
import HighlightedProfile from './components/home/highlighted-profile';
import Footer from './components/shared/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <SmartSearch></SmartSearch>
      <HighlightedProfile></HighlightedProfile>
      <Footer></Footer>
    </div>
  );
}

export default App;
