import logo from './logo.svg';
import './App.css';
import SearchAppBar  from "./component/menubar.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import SimplePaper from "./component/Card"
import Carousel from 'react-bootstrap/Carousel'


function App() {
  return (
    <div className="App">
       <header> 
   <SearchAppBar/>
  
 
    </header> 

  
   
<Carousel fade>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://s.alicdn.com/@img/tfs/TB1e.XyReL2gK0jSZFmXXc7iXXa-990-400.png"
    alt="First slide"
  />
  <Carousel.Caption>
   </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://s.alicdn.com/@img/imgextra/i2/O1CN01tzlNNl28xaqEZItHA_!!6000000007999-0-tps-990-400.jpg"
    alt="Second slide"
  />

  <Carousel.Caption>
 </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://s.alicdn.com/@img/imgextra/i1/O1CN01aX23AE1uRABJ4InsG_!!6000000006033-0-tps-990-400.jpg"
    alt="Third slide"
  />

  <Carousel.Caption>
 </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://s.alicdn.com/@img/imgextra/i3/O1CN01VNUdjq1ftoijrNU7P_!!6000000004065-2-tps-990-400.png"
    alt="Third slide"
  />

  <Carousel.Caption>
 </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://s.alicdn.com/@img/imgextra/i2/O1CN01UKsNwd1QnfAFepFwM_!!6000000002021-2-tps-990-400.png"
    alt="Third slide"
  />

  <Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
</Carousel>

<SimplePaper />

  </div>
  );
}

export default App;
