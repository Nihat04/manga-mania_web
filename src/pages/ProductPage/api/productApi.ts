import img1 from '../../../../public/img/test/VQ3PhZxoKBrPnv82upnTPynbpCi0TJPrTP7EBxDt 1.png';
import manga from '../../../entities/manga/model/mangaModel';

export async function getProduct(id: number): Promise<manga> {
    return {
        id: id,
        name: 'Атака титаноа',
        imgUrl: img1,
        weight: 0,
        pagesNumber: 0,
        releaseYear: 0,
        genreString: '',
        authorName: '',
        description: '',
        salesCount: 0,
        price: 700,
        rating: 0,
        volume: 0,
        source: '',
        discount: 0,
    };
}
