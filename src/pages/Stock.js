import Header from '../components/header/Header'
import Brands from '../components/brands/Brands'
import Textfree from '../components/text/Textfree'
import Formhook from '../components/formhook/Formhook'
import Footer from '../components/footer/Footer'
import Free from '../components/stock/Free'
function Stock() {
  return (
    <div className="App">
      <Header />
      <Free />
      <Brands />
      <Textfree />
      <Formhook />
      <Footer />
    </div>
  );
}

export default Stock;
