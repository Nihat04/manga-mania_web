import { useEffect, useState } from 'react';

import { getLatestReleases, shortManga } from '../../../../../entities/product';
import { CoverflowSwiper } from '../../../../../features/swiper/ui/CoverflowSwiper';

const LatestReleasesCategory = () => {
    const [releases, setReleases] = useState<shortManga[]>([]);

    useEffect(() => {
        getLatestReleases().then((res) => setReleases(res));
    }, []);

    return (
        <section>
            <CoverflowSwiper products={releases} />
            <CoverflowSwiper products={releases} />
            <CoverflowSwiper products={releases} />
        </section>
    );
};

export default LatestReleasesCategory;
