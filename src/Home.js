import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Brands from './components/brands/Brands'
import Text from './components/text/Text'
import Formhook from './components/formhook/Formhook'
import Footer from './components/footer/Footer'
import Text2 from './components/text/Text2'
const app = function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Text />
      <Formhook />
      <Text2 />
      <Footer />
      
      
    </div>
  );
}

export const Pageone = app;
