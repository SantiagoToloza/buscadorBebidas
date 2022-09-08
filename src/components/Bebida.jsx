import {Col,Card,Button} from 'react-bootstrap'


const Bebida = ({bebida}) => {
  return <Col md={2} lg={4} >
          <Card className="mb-4">
            {bebida.strDrink}
           <Card.Img
           variant='top'
           src={bebida.strDrinkThumb}
           alt={`Imagen de ${bebida.strDrink}`}
           />

           <Card.Body>
              <Card.Title>{bebida.strDrink} </Card.Title>
              <Card.Text>Algo mas...</Card.Text>
              <Button className="w-100 uppercase mt-2" variant={'warning'}>Ver Receta</Button>
           </Card.Body>
          </Card>
        </Col>;
};
export default Bebida;
