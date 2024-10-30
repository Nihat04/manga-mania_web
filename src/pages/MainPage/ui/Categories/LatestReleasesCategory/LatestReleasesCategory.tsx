import { useEffect, useState } from 'react';

import { getLatestReleases, shortManga } from '../../../../../entities/product';
import { CoverflowSwiper } from '../../../../../features/swiper/ui/CoverflowSwiper';
import { TextLoader } from '../../../../../widgets/ui/Loader';

const LatestReleasesCategory = () => {
    const [releases, setReleases] = useState<shortManga[]>();

    useEffect(() => {
        getLatestReleases().then((res) => setReleases(res));
    }, []);

    return (
        <section>
            {releases ? (
                <CoverflowSwiper products={releases} />
            ) : (
                <TextLoader />
            )}
        </section>
    );
};

export default LatestReleasesCategory;
