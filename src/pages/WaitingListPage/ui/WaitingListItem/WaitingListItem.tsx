import styles from './styles/index.module.css';

import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';

import { shortManga } from '../../../../entities/product';
import { API_URL } from '../../../../shared/config';
import { BuyButton, WishlistButton } from '../../../../shared/ui';

import deleteIcon from '../../../../shared/assets/svg/trashIcon.svg';

export const WaitingListItem = ({ item }: { item: shortManga }) => {
    return (
        <div className={styles['container']}>
            <Swiper slidesPerView={'auto'}>
                <SwiperSlide>
                    <div className={styles['waiting-list-item']}>
                        <div className={styles['info']}>
                            <p
                                className={classNames(
                                    styles['name'],
                                    styles['info__text--regular']
                                )}
                            >
                                {item.name}
                            </p>
                            <p
                                className={classNames(
                                    styles['price'],
                                    styles['info__text--regular']
                                )}
                            >
                                {item.price + '₽'}
                            </p>
                            <p
                                className={classNames(
                                    styles['status'],
                                    styles['info__text--medium']
                                )}
                            >
                                В наличии
                            </p>
                            <BuyButton
                                className={styles['buy-btn']}
                                product={item}
                            />
                        </div>
                        <div className={styles['img--wrapper']}>
                            <img
                                className={styles['img']}
                                src={API_URL + item.imageUrls[0]}
                                alt={'фотография' + item.name}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles['actions-panel']}>
                    <div className={styles['actions']}>
                        <div
                            className={styles['action']}
                            style={{ backgroundColor: '#DEDEDE' }}
                        >
                            <div className={styles['wishlist-btn']}>
                                <WishlistButton productId={item.id} />
                            </div>
                        </div>
                        <div
                            className={styles['action']}
                            style={{ backgroundColor: '#D0D0D0' }}
                        >
                            <button className={styles['action-btn']}>
                                <img
                                    className={styles['icon']}
                                    src={deleteIcon}
                                />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
