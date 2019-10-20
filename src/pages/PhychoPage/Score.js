import React from 'react';

import rating from 'assets/images/rating.svg';
import arrow from 'assets/images/arrow.svg';

const Score = ({ score }) => {
    return (
        <div
            style={{
                position: 'relative',
                marginBottom: '40px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
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
                        transform: `translate(${-score * ((window.innerWidth - 70) / 2)}px, 35px)`,
                    }}
                />
            </div>
        </div>
    );
};

export default Score;
