import './brands.css'
import BMW from './../../img/bmw.jpg'
import MB from './../../img/mercedes-benz.jpg'
import Honda from './../../img/honda-1s.jpg'
import Jeep from './../../img/jeep.jpg'
import Mazda from './../../img/mazda-5s.jpg'
import Nissan from './../../img/nissan-2s.jpg'
import Audi from './../../img/audi.jpg'

const Brands = () => {
    return (
    <section className="brands">
        <div className="container">
            <div className="container1">
            <span className="brands_list">
                    <img src={BMW} alt="BMW" />
                    <img src={MB} alt="MB" />
                    <img src={Honda} alt="Honda" />
                    <img src={Jeep} alt="Jeep" />
                    <img src={Mazda} alt="Mazda" />
                    <img src={Nissan} alt="Nissan" />
                    <img src={Audi} alt="Audi" />
            </span>

            <span className="brands_list">
                    <img src={BMW} alt="BMW" />
                    <img src={MB} alt="MB" />
                    <img src={Honda} alt="Honda" />
                    <img src={Jeep} alt="Jeep" />
                    <img src={Mazda} alt="Mazda" />
                    <img src={Nissan} alt="Nissan" />
                    <img src={Audi} alt="Audi" />
            </span>
            </div>
        </div>
    </section> );
}

export default Brands;