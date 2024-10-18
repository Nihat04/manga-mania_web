import styles from './styles/index.module.css';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../features/store/store';
import { WaitingListItem } from './ui/WaitingListItem/WaitingListItem';
import { shortManga } from '../../entities/product';
import { getCatalog } from '../CatalogPage/api/catalogApi';

import Filters from '../../features/productsFilter/ui/Filters';

const WaitingListPage = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const [waitingList, setWaitingList] = useState<shortManga[]>([]);

    useEffect(() => {
        //check authorization
        if (!user) {
            console.error('unauth user gay');
            return;
        }
        //get waiting list
        getCatalog().then((res) => setWaitingList(res));
    }, [user]);

    return (
        <main>
            <section>
                <Filters
                    title="Лист ожидания"
                    filters={[]}
                    orderings={[{ propertyName: 'TEST', label: 'TEST' }]}
                />
            </section>
            <section className={styles['list-section']}>
                {waitingList.map((item) => (
                    <WaitingListItem key={item.id} item={item} />
                ))}
            </section>
        </main>
    );
};

export default WaitingListPage;
