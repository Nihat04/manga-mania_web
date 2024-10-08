import styles from '../styles/Filters.module.css';

import { useState } from 'react';

import SidePanel from '../../../shared/ui/SidePanel/SidePanel';
import OptionsItem from './PanelItems/OptionsItem';
import RangeItem from './PanelItems/RangeItem';

enum FilterType {
    options,
    range,
}

type Filter = {
    label: string;
    propertyName: string;
    type: FilterType;
    options?: string[];
    range?: { min: number; max: number };
};

const FilteringSidePanel = ({
    btnRef,
    title,
    filters,
}: {
    btnRef: React.RefObject<HTMLButtonElement>;
    title: string;
    filters: Filter[];
}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <SidePanel
            btnRef={btnRef}
            title={title}
            panelState={{ state: open, setState: setOpen }}
        >
            <div className="">
                <ul className={styles['list']}>
                    <RangeItem name="цена" range={{ start: 50, end: 2000 }} />
                    <OptionsItem
                        name="возраст"
                        options={['18+', '16+', '12+']}
                    />
                    <OptionsItem
                        name="год издания"
                        options={['до 2000', '2000-2020', 'после 2020']}
                    />
                    <OptionsItem name="издаительство" options={['Классное']} />
                    <OptionsItem
                        name="переплет"
                        options={['твердый', 'мягкий']}
                    />
                    <OptionsItem
                        name="автор"
                        options={['Роналду', 'Цой', 'Гермиона']}
                    />
                    {filters.map((el) => {
                        switch (+el.type) {
                            case FilterType.options:
                                return (
                                    <OptionsItem
                                        name={el.label}
                                        options={el.options}
                                    />
                                );
                        }
                    })}
                </ul>
                <button className={styles['apply--btn']}>применить</button>
            </div>
        </SidePanel>
    );
};

export default FilteringSidePanel;
