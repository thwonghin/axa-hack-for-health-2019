import React from 'react';
import { Card, Media, Button } from 'react-bootstrap';

import mildDepression from '../../assets/images/mild-depression.svg';
import severeAnxiety from '../../assets/images/severe-anxiety.svg';
import phychoLevel from '../../assets/images/phycho-level.svg';

import styles from './index.module.scss';

const PhychoPage = () => {
    return (
        <div>
            <p className={styles.intro}>Based on our analysis, here are our insights</p>
            <header className={styles.header}>
                <h1>Mud Mud</h1>
            </header>
            <div className={styles.phychoList}>
                <Card className={styles.phycho}>
                    <Card.Body>
                        <Media>
                            <Media.Body>
                                <div className={styles.phychoIntro}>You might have</div>
                                <h2>Mild Depression</h2>
                            </Media.Body>
                            <img
                                src={mildDepression}phychoLevel
                                width={39}
                                height={48}
                                alt="Mild Depression"
                            />
                        </Media>
                        {/* <div className={styles.phychoLevel}>
                            <img className={styles.phychoLevelBar} src={phychoLevel} alt="Phycho level" />
                        </div> */}
                    </Card.Body>
                </Card>
                <Card className={styles.phycho}>
                    <Card.Body>
                        <Media>
                            <Media.Body>
                                <div className={styles.phychoIntro}>You might have</div>
                                <h2>Mild Depression</h2>
                            </Media.Body>
                            <img
                                src={severeAnxiety}
                                width={39}
                                height={48}
                                alt="Severe Anxiety"
                            />
                        </Media>
                    </Card.Body>
                </Card>
            </div>

            <div className={styles.cta}>
                <Button className={styles.ctaButton}>CTA talk to chat bot?</Button>
            </div>
        </div>
    );
};

export default PhychoPage;
