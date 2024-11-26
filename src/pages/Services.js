import Header from '../components/header/Header.jsx'
import Promo from '../components/promo/Promo.jsx'
import Brands from '../components/brands/Brands.jsx'
import Text from '../components/text/Text.jsx'
import Formhook from '../components/formhook/Formhook.jsx'
import Footer from '../components/footer/Footer.jsx'
import Text2 from '../components/text/Text2.jsx'
import { Card } from '../components/services/uslugi.jsx'
import './services.css'
function Services() {
  return (
    <div className="Services">
      <Header />
      <div className="container" id="cont">
      <div className="col">
        <Card
          imgSrc="https://avtooreh.by/upload/resize_cache/iblock/edf/248_165_2/edf34bd8b9ca0967539d2876d74f7cab.jpg"
          imgAlt="Компьютерная диагностика"
          title="Компьютерная диагностика"
          description="От правильной диагностики зависит решение проблем двигателя и других частей автомобиля."
          buttonText="Подробнее"
          link="#!"
        />
        <Card
          imgSrc="https://avtooreh.by/upload/resize_cache/iblock/885/248_165_2/8859ecc8edd4680a97606d1cc10c1b47.jpg"
          title="Замена масла и других жидкостей"
          imgAlt="Замена масла и других жидкостей"
          description="Процедура, без которой не обойдется ни один, даже самый новый и дорогой автомобиль."
          buttonText="Подробнее"
          link="#!"
        />
        <Card
          imgSrc="https://avtooreh.by/upload/resize_cache/iblock/472/248_165_2/4725b06beb11b688d2bd6884e1cbfec7.jpg"
          imgAlt="Замена ГРМ"
          title="Замена ремня и шкивов ГРМ"
          description="Замена комплекта ГРМ - важный и очень ответственный процесс в тех. обслуживании авто."
          buttonText="Подробнее"
          link="#!"
        />
      </div>
      <div className="col">
        <Card
          imgSrc="https://avtooreh.by/upload/resize_cache/iblock/797/248_165_2/7973d51198397d77cb4084ff03e8b25b.jpg"
          imgAlt="Замена фильтров"
          title="Замена фильтров в системах фильтрации"
          description="Каждый из фильтров вашего автомобиля рано или поздно подлежит замене на новый."
          buttonText="Подробнее"
          link="#!"
        />
        <Card
          imgSrc="https://avtooreh.by/upload/resize_cache/iblock/be5/248_165_2/be53938aa7996373731318f3fb2afd45.jpg"
          imgAlt="Ремонт тормозной системы"
          title="Ремонт тормозной системы"
          description="Замена расходников, отвечающих за остановку автомобиля: тормозных дисков, тормозных колодок."
          buttonText="Подробнее"
          link="#!"
        />
        <Card
          imgSrc="https://avtooreh.by/upload/resize_cache/iblock/047/248_165_2/047e3aec999c058fcfe6a9be92eef57a.jpg"
          imgAlt="Регулировка и полировка фар"
          title="Регулировка и полировка фар"
          description="Со временем любые фары автомобиля теряют правильную корректировку и становятся матовыми."
          buttonText="Подробнее"
          link="#!"
        />
      </div>
      <div className="col">
        <Card
          imgSrc="https://avtooreh.by/upload/resize_cache/iblock/ab5/248_165_2/ab542b1c009718e159e7d4391222f67f.jpg"
          imgAlt="Ремонт КПП"
          title="Ремонт и восстановление КПП"
          description="СТО AMECH осуществляет ремонт механической коробки передач автомобилей."
          buttonText="Подробнее"
          link="#!"
        />

        <Card
          imgSrc="https://avtooreh.by/upload/resize_cache/iblock/201/248_165_2/2012d53ae4c07a6df340156129f0a487.jpg"
          imgAlt="Ремонт двигателя"
          title="Ремонт и диагностика двигателя"
          description="Двигатель - это сердце автомобиля, поэтому его ремонт - процесс ответственный."
          buttonText="Подробнее"
          link="#!"
        />
        <Card
          imgSrc="https://avtooreh.by/upload/resize_cache/iblock/116/248_165_2/1162ad0beb7c483248157cca337ee4e9.jpg"
          imgAlt="Шиномонтажные работы"
          title="Шиномонтажные работы"
          description="Сезонная услуга, время востребованности которой определяется погодными условиями."
          buttonText="Подробнее"
          link="#!"
        />
      </div>
      <div className='col'>
      <Card
          imgSrc="https://avtooreh.by/upload/resize_cache/iblock/823/248_165_2/8233c462f22a66ae5874ef3e20fdfe60.jpg"
          imgAlt="Проверка/замена свечей зажигания"
          title="Проверка/замена свечей зажигания"
          description="Свечи зажигания необходимы для воспламенения смеси в камере сгорания двигателя."
          buttonText="Подробнее"
          link="#!"
        />
        <Card
          imgSrc="https://avtooreh.by/upload/resize_cache/iblock/097/248_165_2/097c803719049e9ac50b33c21853deba.jpg"
          imgAlt="Диагностика и ремонт подвески"
          title="Диагностика и ремонт подвески"
          description="СТО AMECH предлагает полный комплекс работ по диагностике и ремонту подвески в Гродно"
          buttonText="Подробнее"
          link="#!"
        />
      </div>
    </div>
      <Formhook />
      <Footer />

      
      
   </div>
  );
}

export default Services;