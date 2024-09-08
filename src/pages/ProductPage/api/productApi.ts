import img1 from '../../../../public/img/test/VQ3PhZxoKBrPnv82upnTPynbpCi0TJPrTP7EBxDt 1.png';

export async function getProduct(id: number) {
    return {
        id: 1,
        name: 'Токийские мстители',
        img: img1,
        price: 700,
    };
}
