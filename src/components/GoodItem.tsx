import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useShoppingContext } from '../context/ShoppingContext'
import imgData from '../uilt/getImg'
import carImg from '../assets/car.png'


type GoodItemProps = {
    name: string,
    price?: number,
    imgUrl: string,
    id: number,
    type: string,
    limit: number,
    index: number
}

const GoodItem = ({ name, imgUrl, id, type, limit, price, index }: GoodItemProps) => {
    const { addGood, getCurcentCount } = useShoppingContext()

    const handleAdd = (id: number, type: string) => {
        if (!getCurcentCount(id))
            addGood(id, type)
    }


    return (
        <Card className='p-2'>
            <div
                style={{ width: '70%', height: 0, paddingBottom: '70%', overflow: 'hidden', margin: '0 auto' }}
            >
                {/* <Card.Img variant="top" src={"http://127.0.0.1:5173" + imgUrl} style={{ objectFit: 'contain' }} /> */}
                <Card.Img variant="top" src={imgData[type as keyof typeof imgData][index]} style={{ objectFit: 'contain' }} />
            </div>
            <Card.Body>
                <Card.Title className='text-center'>{name}</Card.Title>
                <Card.Text className='d-flex justify-content-center'>
                    <span>
                        价格:{price}&yen;
                        <span style={{ marginLeft: '7px', color: '#F4511E', fontSize: '.9em' }}>限量:{limit}</span>
                    </span>
                </Card.Text>

                <div className='d-flex justify-content-center align-items-center' >
                    <Button variant="primary"
                        style={{ backgroundColor: '#FD8848', border: 'none', position: 'relative' }}
                        onClick={() => handleAdd(id, type)}
                    >
                        加入购物车
                        {
                            getCurcentCount(id) > 0
                            &&
                            <div
                                className='rounded-circle d-flex justify-content-center align-items-center'
                                style={{ width: '20px', height: '20px', backgroundColor: '#E6EE9C', position: 'absolute', right: '-10px', bottom: '-4px', boxShadow: '0 0 10px #FFA000' }}
                            >

                                <img height="16" width="16" src={carImg} alt="" />
                            </div>
                        }

                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default GoodItem