import React from 'react';
import { Card, Media, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import styles from './index.module.scss';

import Score from './Score';

const PhychoPage = () => {
    const location = useLocation();

    console.log(location);

    const queryParams = new URLSearchParams(location.search);

    const captionSentimentScore = queryParams.get('captionSentimentScore');
    const imageSentimentScore = queryParams.get('imageSentimentScore');

    console.log(captionSentimentScore, imageSentimentScore);

    return (
        <div>
            <p className={styles.intro}>Based on our analysis, here are our insights</p>
            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '24px',
                    letterSpacing: '6px',
                    backgroundImage: 'url(https://static.businessinsider.sg/2018/08/08/5b85bf218905f2fb1e8b4a6b.png)',
                    width: '100%',
                    height: '175px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
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
                        padding: '40px',
                        flexDirection: 'column',
                    }}
                >
                    <p style={{
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        fontSize: '20px',
                        textAlign: 'center',
                    }}>
                        IS EVERYTHING ALRIGHT?
                    </p>
                    <p style={{
                        letterSpacing: '0.3px',
                        fontSize: '13px',
                        marginBottom: 0,
                        textAlign: 'center',
                    }}>
                        A positive attitude gives you power over your circumstances instead of your circumstances having power over you.
                    </p>
                </div>
            </div>
            <Card className={styles.phycho}>
                <Card.Body>
                    <Media>
                        <Media.Body>
                            <h2 style={{ color: '#4a4a4a' }}>Insights</h2>
                            <p style={{ color: '#9b9b9b', marginBottom: '20px' }}>Results are based on social profile</p>
                            {
                                (imageSentimentScore) && (
                                    <>
                                        <h2 style={{ color: '#9b9b9b', fontSize: '14px', }}>Image Rating</h2>
                                        <Score score={imageSentimentScore} />
                                        <br />
                                    </>
                                )
                            }
                            {
                                (captionSentimentScore) && (
                                    <>
                                        <h2 style={{ color: '#9b9b9b', fontSize: '14px', }}>Caption Rating</h2>
                                        <Score score={captionSentimentScore} />
                                    </>
                                )
                            }
                        </Media.Body>
                    </Media>
                </Card.Body>
            </Card>

            <div className={styles.cta}>
                <Button className={styles.ctaButton}>Lets Chat!</Button>
            </div>
        </div>
    );
};

export default PhychoPage;
