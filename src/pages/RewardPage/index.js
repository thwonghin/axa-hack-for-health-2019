import React from 'react';
import { Button, Card } from 'react-bootstrap';

import style from './index.module.scss';
import starbucksCup from 'assets/images/starbucks-cup.svg';
import starbucks from 'assets/images/starbucks.svg';
import rewardMBg from '../../assets/images/reward-m-bg.jpg';

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
                style={{ padding: '15px', width: '100%', margin: 0, color: '#9b9b9b',  fontSize: '14px', letterSpacing: '0.3px' }}
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
                        flexDirection: 'column',
                    }}
                >
                    <p style={{
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        fontSize: '20px',
                        textAlign: 'center',
                    }}>
                        YOU ARE DOING GREAT
                    </p>
                    <p style={{
                        letterSpacing: '0.3px',
                        fontSize: '13px',
                        marginBottom: 0,
                        textAlign: 'center',
                    }}>
                        You are on the right track!<br/>
                        Keep maintaining your healthy lifestyle
                    </p>
                </div>
            </div>
            <Button
                style={{
                    'boxShadow': '0 -3px 10px 0 rgba(128, 128, 128, 0.15)',
                    borderRadius: '10px',
                    padding: '33px 25px 16px 29px',
                    width: 'calc(100% - 30px)',
                    margin: '15px',
                    fontSize: '18px',
                    color: '#65676a',
                    fontWeight: 'bold',
                    border: 0,
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundImage: `url(${rewardMBg})`,
                    backgroundSize: 'cover',
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
                        <div
                            style={{
                                fontSize: '12px',
                                letterSpacing: '0.26px',
                                color: '#3f51b5',
                            }}
                        >
                            Stay in touch with us for
                        </div>
                        <div
                            style={{
                                fontSize: '30px',
                                letterSpacing: '0.26px',
                                color: '#3f51b5',
                            }}
                        >
                            Future Events
                        </div>
                        <Button
                            style={{
                                marginTop: '29px',
                                border: 0,
                                borderRadius: '5px',
                                boxShadow: '0 -3px 10px 0 rgba(128, 128, 128, 0.15)',
                                backgroundColor: '#002395',
                                padding: '14px 20px',
                                letterSpacing: '0.3px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                lineHeight: 1,
                            }}
                        >
                            Subscribe Now!
                        </Button>
                    </div>
                </div>
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
