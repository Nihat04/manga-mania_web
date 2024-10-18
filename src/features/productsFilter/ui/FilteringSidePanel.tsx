import styles from '../styles/Filters.module.css';

import { useState } from 'react';

import { filterTypes, filter } from '../model';

import SidePanel from '../../../shared/ui/SidePanel/SidePanel';
import OptionsItem from './PanelItems/OptionsItem';
import RangeItem from './PanelItems/RangeItem';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

const FilteringSidePanel = ({
    btnRef,
    title,
    filters,
}: {
    btnRef: React.RefObject<HTMLButtonElement>;
    title: string;
    filters: filter[];
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [, setSearchParams] = useSearchParams();

    const resetFilters = () => {
        setSearchParams((params) => {
            filters.forEach((filter) => {
                if (filter.type === filterTypes.range) {
                    params.delete('min' + filter.propertyName);
                    params.delete('max' + filter.propertyName);
                }

                params.delete(filter.propertyName);
            });
            return params;
        });
    };

    const renderFilters = (filter: filter, index?: number): JSX.Element => {
        switch (+filter.type) {
            case filterTypes.options:
                if (!filter.options)
                    throw new Error('on type options is no options');
                return (
                    <OptionsItem
                        key={index}
                        label={filter.label}
                        propertyName={filter.propertyName}
                        options={filter.options}
                    />
                );
            case filterTypes.range:
                if (!filter.range) throw new Error('on type range is no range');
                return (
                    <RangeItem
                        key={index}
                        label={filter.label}
                        propertyName={filter.propertyName}
                        range={filter.range}
                    />
                );
            default:
                throw new Error('unexpected type of filter was given');
        }
    };

    return (
        <SidePanel
            btnRef={btnRef}
            title={title}
            panelState={{ state: open, setState: setOpen }}
        >
            <div className={styles['side-panel']}>
                <ul className={styles['list']}>
                    {filters.map((el, index) => renderFilters(el, index))}
                </ul>
                <button
                    className={classNames(styles['apply--btn'], 'btn-da')}
                    onClick={() => setOpen(false)}
                >
                    применить
                </button>
                <button
                    className={classNames(styles['apply--btn'], 'btn-da')}
                    onClick={() => resetFilters()}
                >
                    Сбросить
                </button>
            </div>
        </SidePanel>
    );
};

export default FilteringSidePanel;
