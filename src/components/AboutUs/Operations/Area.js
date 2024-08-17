import { Col, Row } from 'react-bootstrap'

const Area = ({ areaData }) => {
    const items = Object.entries(areaData);
    const itemsLength = items.length;
    const firstColumnItems = items.slice(0, 4);
    const secondColumnItems = items.slice(4);

    return (
        <Row className='pt-4 justify-content-evenly justify-content-md-between'>
            <Col xs={5} className='p-0'>
                {firstColumnItems.map(([key, value], index) => (
                <div 
                    key={key}
                    className={`${index === itemsLength - 1 ? '' : 'border-bottom border-gray'} d-flex flex-column gap-4 justify-content-start py-4`}
                >
                    <h4>{value.title}</h4>
                    <h5>{value.description}</h5>
                </div>
                ))}
            </Col>
            <Col xs={5} className='p-0'>
                {secondColumnItems.map(([key, value], index) => (
                <div 
                    key={key}
                    className={`${index === itemsLength - 1 ? '' : 'border-bottom border-gray'} d-flex flex-column gap-4 justify-content-start py-4`}
                >
                    <h4>{value.title}</h4>
                    <h5>{value.description}</h5>
                </div>
                ))}
            </Col>
        </Row>
    );
};

export default Area;
