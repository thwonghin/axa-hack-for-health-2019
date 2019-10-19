import React, { useState, useCallback } from 'react';
import { Card, Media, Row, Col, Button } from 'react-bootstrap';

import doctorIcon from '../../assets/images/doctor-icon.svg';
import googleMapIcon from '../../assets/images/google-map.png';
import googleMapIcon2x from '../../assets/images/google-map@2x.png';
import googleMapIcon3x from '../../assets/images/google-map@3x.png';
import mtrIcon from '../../assets/images/mtr-logo.png';
import styles from './index.module.scss';
import { usePushHistory } from 'libs/hooks';

export default function BookingDoctorPage () {
    const onClickBookNow = usePushHistory('/booking-confirmed');
    const [isLoading, setLoading] = useState(false);

    const handleClickBookNow = useCallback(
        () => {
            setLoading(true);
            setTimeout(() => onClickBookNow(), 1000);
        },
        [onClickBookNow],
    )

    return (
        <div className={styles.bookingPage}>
            <div className={styles.doctorCardContainer}>
                <Card className={styles.doctorCard}>
                    <Card.Body>
                        <Media>
                            <img
                                className={styles.doctorIcon}
                                src={doctorIcon}
                                width={84}
                                height={83}
                                alt="Doctor"
                            />
                            <Media.Body>
                                <h2><span style={{ fontWeight: 'normal' }}>Dr.</span> Cody Cheng Wong</h2>
                            </Media.Body>
                        </Media>
                        <Row noGutters className="mt-3">
                            <Col xs="auto" style={{ paddingRight: '12px' }}>
                                <img
                                    src={googleMapIcon}
                                    srcset={`${googleMapIcon} 1x, ${googleMapIcon2x} 2x, ${googleMapIcon3x} 3x`}
                                    width={17}
                                    height={17}
                                    alt="Google Map"
                                />
                            </Col>
                            <Col xs>
                                Suite 556, 5/F, Lee Garden Three, 1 Sunning Road
                            </Col>
                        </Row>
                        <Row noGutters className="mt-3">
                            <Col xs="auto" style={{ paddingRight: '12px' }}>
                                <img src={mtrIcon} width={17} alt="Google Map" />
                            </Col>
                            <Col xs className={styles.mtrText}>
                                Causeway bay A1 Exit
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className={styles.timeSlot}>
                <div className={styles.timeSlotDateSelector}>
                    <div
                        className={`${styles.timeSlotDateItem} ${styles.timeSlotDateItemActive}`}
                    >
                        <div>Sun</div>
                        <div>Oct 20</div>
                    </div>
                    <div className={styles.timeSlotDateItem}>
                        <div>Mon</div>
                        <div>Oct 21</div>
                    </div>
                    <div className={styles.timeSlotDateItem}>
                        <div>Tues</div>
                        <div>Oct 22</div>
                    </div>
                    <div className={styles.timeSlotDateItem}>
                        <div>Wed</div>
                        <div>Oct 23</div>
                    </div>
                </div>
                <div type="radio" name="options" className={styles.timeSlotBody}>
                    <Row className={styles.timeSlotTimeSelector}>
                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-1" name="time"/><label for="time-1" value={1} className={styles.timeSlotTimeItemContent}>09:00 AM</label></Col>
                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-2" name="time"/><label for="time-2" value={2} className={styles.timeSlotTimeItemContent}>09:15 AM</label></Col>
                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-3" name="time"/><label for="time-3" value={3} className={styles.timeSlotTimeItemContent}>09:30 AM</label></Col>
                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-4" name="time"/><label for="time-4" value={4} className={styles.timeSlotTimeItemContent}>09:45 AM</label></Col>

                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-5" name="time"/><label for="time-5" value={5} className={styles.timeSlotTimeItemContent}>10:00 AM</label></Col>
                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-6" name="time"/><label for="time-6" value={6} className={styles.timeSlotTimeItemContent}>10:15 AM</label></Col>
                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-7" name="time"/><label for="time-7" value={7} className={styles.timeSlotTimeItemContent}>10:30 AM</label></Col>
                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-8" name="time"/><label for="time-8" value={8} className={styles.timeSlotTimeItemContent}>10:45 AM</label></Col>

                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-9" name="time"/><label for="time-9" value={9} className={styles.timeSlotTimeItemContent}>11:00 AM</label></Col>
                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-10" name="time"/><label for="time-10" value={10} className={styles.timeSlotTimeItemContent}>11:15 AM</label></Col>
                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-11" name="time"/><label for="time-11" value={11} className={styles.timeSlotTimeItemContent}>11:30 AM</label></Col>
                        <Col xs={3} className={styles.timeSlotTimeItem}><input type="radio" id="time-12" name="time"/><label for="time-12" value={12} className={styles.timeSlotTimeItemContent}>11:45 AM</label></Col>
                    </Row>
                </div>
                <div className={styles.bookNowButtonContainer}>
                    <Button className={styles.bookNowButton} disabled={isLoading} onClick={handleClickBookNow}>{!isLoading ? 'Book Now' : 'Loading...'}</Button>
                </div>
            </div>
        </div>
    );
}