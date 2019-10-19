import React from 'react';
import styles from './index.module.scss';

import drinkCoffeeWithLaptopInCafe from '../../assets/images/drink-coffee-with-laptop-in-cafe.png';

export default function BookingConfirmedPage () {
    return (
        <div className={`${styles.bookingConfirmPage} d-flex align-items-center justify-content-center`}>
            <div className="text-center">
                <img src={drinkCoffeeWithLaptopInCafe} alt="Drink coffee with laptop in cafe" width={170} />
                <h1 className={styles.title}>Booking Confirmed</h1>
                <div className={styles.message}>Thank you, mud mud mud</div>
            </div>
        </div>
    )
}