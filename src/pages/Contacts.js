import Header from '../components/header/Header'
import Brands from '../components/brands/Brands'
import Footer from '../components/footer/Footer'
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
