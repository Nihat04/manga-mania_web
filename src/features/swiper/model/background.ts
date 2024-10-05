type element = {
    title: string;
    linkUrl: string;
    imgUrl: string;
    color: string;
};

let bgPosition = 0;

const applyBg = (elements: element[]) => {
    let gradientString = '';

    for (let i = 0; i < elements.length; i++) {
        gradientString += `, ${elements[i].color} ${calculateSectionSize(i, elements)}%`;
    }

    return `linear-gradient(90deg${gradientString})`;
};

const calculateSectionSize = (index: number, elements: element[]) => {
    const count = elements.length;
    return (100 / (count + 1)) * (index + 1);
};

const updateBg = (translateValue: number) => {
    const itemWidth = 204;

    const padding = (screenWidth - itemWidth) / 2;
    const visibleSide = padding - spaceBetween;

    // const firstPosition = visibleSide - itemWidth * 0 - spaceBetween * -1; // 94.5
    // const secondPosition = visibleSide - itemWidth * 1 - spaceBetween * 0; // -159
    // const thirdPosition = visibleSide - itemWidth * 2 - spaceBetween * 1; // -413.5

    const elementCount = elements.length;

    const start = visibleSide - itemWidth * 0 - spaceBetween * -1;
    const end =
        visibleSide -
        itemWidth * (elementCount - 1) -
        spaceBetween * (elementCount - 2);

    const position = ((translateValue - start) / (end - start)) * 100;

    if (position > 100 || position < 0) return;

    bgRef.current?.animate(
        [
            { backgroundPosition: `${bgPosition}% top` },
            { backgroundPosition: `${position}% top` },
        ],
        {
            duration: 300,
            fill: 'forwards',
        }
    );
    bgPosition = position;
    console.log(translateValue);
};
