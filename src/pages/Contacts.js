import Header from '../components/header/Header'
import Promo from '../components/promo/Promo'
import Brands from '../components/brands/Brands'
import Text from '../components/text/Text'
import Formhook from '../components/formhook/Formhook'
import Footer from '../components/footer/Footer'
import Text2 from '../components/text/Text2'
import  MyMap  from '../components/map/Map'
import Table from '../components/table/Table'
function Contacts() {
  return (
    <div className="App">
      <Header />
      <MyMap />
      <Brands />
      <Table />
      <Footer />
      
      
    </div>
  );
}

export default Contacts;
