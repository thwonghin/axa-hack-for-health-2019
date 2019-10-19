import React from 'react';
import { Button, Card } from 'react-bootstrap';

import style from './index.module.scss';
import starbucksCup from 'assets/images/starbucks-cup.svg';
import starbucks from 'assets/images/starbucks.svg';

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
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    letterSpacing: '6px',
                    backgroundImage: 'url(https://axahk.cdn.axa-contento-118412.eu/axahk/479237e1f3499fba4036c297b82fbaf9438a6c58_gettyimages-905802672.jpg)',
                    width: '100%',
                    height: '175px',
                    backgroundSize: 'cover',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,35,149, 0.5)'
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                    }}
                >
                    YOU ARE FINE
                </div>
            </div>
            <Button
                style={{
                    'boxShadow': '0 -3px 10px 0 rgba(128, 128, 128, 0.15)',
                    borderRadius: '10px',
                    padding: '25px',
                    width: 'calc(100% - 30px)',
                    margin: '15px',
                    fontSize: '18px',
                    color: '#65676a',
                    fontWeight: 'bold',
                    backgroundColor: 'white',
                    borderColor: 'white',
                    backgroundColor: '#1c6f4e',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '125px',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                    }}
                >
                    <div>
                        <p style={{ fontSize: '22px', color: 'white', fontWeight: 'bold', margin: 0 }}>
                            Claim your reward
                        </p>
                        <p style={{ fontSize: '22px', color: 'white', fontWeight: 500, margin: 0 }}>
                            5000 gold stars
                        </p>
                    </div>
                    <img
                        src={starbucks}
                    />
                </div>
                <img
                    src={starbucksCup}
                />
            </Button>
            <div
                className={style.contentContainer}
            >
                {
                    images.map((img) => (
                        <Card
                            style={{ minWidth: '145px', minHeight: '160px', marginRight: '15px', border: 'none',
                            boxShadow: '0 -3px 10px 0 rgba(128, 128, 128, 0.15)',
                            overflow: 'hidden',
                            borderRadius: '10px',
                        }}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    borderTopRightRadius: '10px',
                                    borderTopLeftRadius: '10px',
                                }}
                            >
                                <Card.Img
                                    variant="top"
                                    src={img.src}
                                    className={style.img}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0,
                                        backgroundColor: 'rgba(0,35,149, 0.5)'
                                    }}
                                />
                            </div>
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
