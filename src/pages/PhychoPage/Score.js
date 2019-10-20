import React from 'react';

import rating from 'assets/images/rating.svg';
import arrow from 'assets/images/arrow.svg';

const Score = ({ score, text }) => {
    const displayScore = Math.round(score > 0 ? 50 - (score * 50) : 50 + (-score * 50));
    const color = [
        '#00a800',
        '#7ed502',
        '#f6e800',
        '#fb8001',
        '#f70101',
    ][Math.floor(displayScore / 20)];

    return (
        <div
            style={{
                position: 'relative',
                marginBottom: '40px',
            }}
        >
            <div style={{ display: 'flex' }}>
                <h2 style={{ color: '#9b9b9b', fontSize: '14px', }}>{ text }</h2>
                <div
                    style={{
                        borderRadius: '50%',
                        borderWidth: '5px',
                        borderColor: color,
                        borderStyle: 'solid',
                        width: '45px',
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 'auto',
                        fontSize: '16px',
                        fontWeight: 'bold',
                    }}
                >
                    {displayScore}
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                }}
            >
                <span style={{ color: '#9b9b9b '}}>Positive</span>
                <span style={{ color: '#9b9b9b '}}>Negative</span>
            </div>
            <img
                src={rating}
                style={{
                    width: '100%',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    display: 'flex',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    justifyContent: 'center',
                }}
            >
                <img
                    src={arrow}
                    style={{
                        transform: `translate(${-score * ((window.innerWidth - 70) / 2)}px, 65px)`,
                    }}
                />
            </div>
        </div>
    );
};

export default Score;
