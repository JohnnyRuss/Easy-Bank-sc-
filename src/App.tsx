import Navigation from "./Components/Navigation/Navigation";
import DigitalBanking from "./Components/DigitalBanking/DigitalBanking";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import LatestArticles from "./Components/LatestArticles/LatestArticles";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <DigitalBanking />
        <WhyChoose />
        <LatestArticles />
      </main>
      <Footer />
    </>
  );
}

export default App;
