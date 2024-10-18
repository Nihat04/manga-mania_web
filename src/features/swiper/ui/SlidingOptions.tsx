import styles from '../styles/SlidingOptions.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { optionsButton } from '../model';

export const SlidingOptions = ({
    children,
    options,
}: {
    children: JSX.Element;
    options: optionsButton[];
}) => {
    return (
        <div>
            <Swiper>
                <SwiperSlide>{children}</SwiperSlide>
                <SwiperSlide>
                    <div className={styles['actions']}>
                        {options.map((option) =>
                            option.ready ? (
                                option.ready
                            ) : (
                                <div
                                    className={styles['action']}
                                    style={{
                                        backgroundColor: `${option.color}`,
                                    }}
                                >
                                    <button
                                        className={styles['action-btn']}
                                        onClick={option.action}
                                    >
                                        <img
                                            className={styles['icon']}
                                            src={option.icon}
                                        />
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
