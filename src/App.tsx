
import './App.css';
import { XData } from './Context/XContext';
import Color from './Color/Color';
import Page1 from './Page/Page1';
import Page2 from './Page/Page2';
import Page3 from './Page/Page3';
import img1 from './imagenes/santa cruz ok.jpg'
import img2 from './imagenes/samaipata.jpeg'
import img3 from './imagenes/jardin.jpg'


function App() {
  return (
    <>
      <XData>
        <div className="App">
          <Page1 pimg={img1}
            ptext='Bienvenidos a Santa Cruz' />

          <Page2 pimg={img2}
            ptext='Bienvenidos a Samaipata' />
          
          <Page3 pimg={img3}
            ptext='Bienvenidos a Jardin de las Delicias' />
        
        </div>
        <Color />
      </XData>
    </>
  );
}

export default App;
