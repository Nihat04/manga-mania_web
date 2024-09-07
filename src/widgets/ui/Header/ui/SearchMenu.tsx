import React from 'react';

const SearchMenu = ({ search }: { search: string }) => {
    return (
        <div>
            {!search && <p>История</p>}
            <div className=""></div>
        </div>
    );
};

/* Историю поиска будем хранить в локал стораге */

export default SearchMenu;
