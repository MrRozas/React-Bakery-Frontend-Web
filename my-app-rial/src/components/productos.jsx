import React, { Component } from 'react'  
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from './components-cards/Card';
import Container from 'react-bootstrap/Container';
import "./productos.css"

const cards = [
  {
    id: 1,
    title: "Categoria Producto",
    
    image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-2-1024x681.jpg",
  },
  {
    id: 2,
    title: "Categoria Producto",
   
    image: "https://www.leotertenerife.com/wp-content/uploads/2020/07/Tipos-de-reposter%C3%ADa-4-1024x683.jpg",
  },
  {
    id: 3,
    title: "Categoria Producto",
    
    image: "https://gastronomicainternacional.com/wp-content/uploads/2020/04/reposteria-2-1.jpg",
  },
  {
    id: 4,
    title: "Categoria Producto",
    
    image: "https://img77.uenicdn.com/image/upload/v1568111479/category/shutterstock_1151488724.jpg",
  },
  {
    id: 5,
    title: "Producto",
    
    image: "https://www.semana.com/resizer/FzEJAIB9fQObyHvpR-E3u9GJZG8=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/YKCQ2PGTRZBYPKGOALBVFBWFMM.jpg",
  },

  {
    id: 6,
    title: "Categoria Producto",
    
    image: "https://animalgourmet.com/wp-content/uploads/2019/12/postres-guadalajara.jpg",
  },
];

var titulo="Producto";
var fondo="https://images.homify.com/c_fill,f_auto,q_0,w_740/v1526483607/p/photo/image/2561426/3.jpg";

function Groupspruductos() {
  return (
    <Container>
      <Row xs={4} md={1} className="g-4">
    {Array.from({ length: 6}).map((_, idx) => (
      <Col>
        <div>
          <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {cards.map(({ title, image, url, id }) => (
              <div className="col-md-4" key={id}>
                <Card imageSource={fondo} title={titulo} url={url} />
              </div>
            ))}
          </div>
        </div>

        </div>
      </Col>
        ))}
        </Row>
    </Container>
  );
}

export default Groupspruductos;



