import styles from '../../styles/ProfilePage.module.css'

import { ReactElement } from 'react';

const ProfileDropdownTab = ({
    title,
    children,
}: {
    title: string;
    children: ReactElement;
}) => {
    return (
        <div className={styles['dropdown']}>
            <button className={styles['dropdown__btn']}>{title}</button>
            <div className="">{children}</div>
        </div>
    );
};

export default ProfileDropdownTab;
