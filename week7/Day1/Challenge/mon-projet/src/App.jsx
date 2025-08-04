import hong from './assets/hong.jpg';
import Japon from './assets/Japon.webp';
import Las from './assets/Las.webp';
import Macao from './assets/Macao.webp'
import './App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function App() {

  return (
    <>
        <Carousel>
                <div>
                    <img src={hong}/>
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src={Japon}/>
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src={Las}/>
                    <p className="legend">Japon</p>
                </div>
                <div>
                    <img src={Macao}/>
                    <p className="legend"> Las Vegas</p>
                </div>
               
            </Carousel>
    </>
  )
}

export default App
