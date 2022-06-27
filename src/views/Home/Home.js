import React from "react";
// import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Carousel } from "react-bootstrap";
import Hero4 from "../../assets/image/hero4-min.jpg";
import Hero3 from "../../assets/image/hero3-min.jpg";
import Hero2 from "../../assets/image/hero2-min.jpg";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Hero4} alt="First slide" />
            <Carousel.Caption>
              <h3>Box de Regalo Personalizadas</h3>
              <p>Ideas para regalar</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Hero3} alt="Second slide" />

            <Carousel.Caption>
              <h3>Box de Regalo Personalizadas</h3>
              <p>Ideas para regalar</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 " src={Hero2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Box de Regalo Personalizadas</h3>
              <p>Ideas para regalar</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
      {/* <ItemListContainer title="Nuestros productos" /> */}
      <Footer />
    </div>
  );
}
