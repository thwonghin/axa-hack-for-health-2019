import React from 'react';
import ProgressArc from 'react-progress-arc';

const Score = ({ score }) => {
    const percentage = (score / 100);
    return (
        <div
            style={{
                position: 'relative',
                width: '150px',
                margin: 'auto',
            }}
        >
            <ProgressArc
                completed={percentage}
                stroke={'#f70101'}
                diameter={150}
                strokeWidth={10}
            />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                }}
            >
                <span
                    style={{
                        fontSize: '50px',
                    }}
                >
                    {Math.round(score)}
                </span>
                <span
                    style={{
                        fontSize: '20px',
                    }}
                >
                    %
                </span>
            </div>
        </div>
    );
};

export default Score;
