import React from 'react';
import { Button, Card } from 'react-bootstrap';

import style from './index.module.scss';

const images = [
    {
        src: 'https://axahk.cdn.axa-contento-118412.eu/axahk/b0a0d7acf93afa91c6e5641e0b1210dc38e90c2c_gettyimages-1032989554.jpg',
        text: 'Understand and counteract ...',
    },
    {
        src: 'https://axahk.cdn.axa-contento-118412.eu/axahk/f510a009186269769564b02e6d7c4975012b6ee6_gettyimages-1044109276.jpg',
        text: 'The first step to losing weight ...',
    },
    {
        src: 'https://axahk.cdn.axa-contento-118412.eu/axahk/6a4a7da833d6d55f8022c6b6d5b5419b51ac5dbc_gettyimages-1140201754.jpg',
        text: 'End Yo-Yo Dieting ...',
    },
];

const RewardPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <p
                style={{ padding: '15px', width: '100%', margin: 0 }}
            >
                Based on our analysis, here are our insights
            </p>
            <div
                style={{
                    backgroundColor: 'rgba(254, 218, 119, 0.5)',
                    width: '100%',
                    height: '175px',
                }}
                // src="test"
                // alt="fine"
            />
            <Button
                style={{
                    'boxShadow': '0 -3px 10px 0 rgba(128, 128, 128, 0.15)',
                    borderRadius: '10px',
                    paddingTop: '74px',
                    paddingBottom: '74px',
                    width: 'calc(100% - 30px)',
                    margin: '15px',
                    fontSize: '18px',
                    color: '#65676a',
                    fontWeight: 'bold',
                    backgroundColor: 'white',
                    borderColor: 'white',
                }}
            >
                Click here to claim your reward
            </Button>
            <div
                className={style.contentContainer}
            >
                {
                    images.map((img) => (
                        <Card
                            style={{ minWidth: '145px', minHeight: '160px', marginRight: '15px' }}
                        >
                            <Card.Img
                                variant="top"
                                src={img.src}
                                className={style.img}
                            />
                            <Card.Body
                                style={{
                                    padding: '10px',
                                }}
                            >
                                <Card.Text>{img.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};

export default RewardPage;
