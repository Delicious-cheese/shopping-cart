import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data.json'
import GoodItem from './GoodItem';

const Electronic = () => {
    return (
        <Container className='pt-3'>
            <Row lg={3} md={2} xs={1} className="g-3">
                {data["electronic"].map((item, index) => (
                    <Col key={item.id} >
                        <GoodItem {...item} type="electronic" index={index} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Electronic