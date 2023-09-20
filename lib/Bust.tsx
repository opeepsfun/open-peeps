import React from "react";

type PieceDetails = {
    type: string;
    options: { [key: string]: string };
};

export const Bust = ({ style, body, head, face, beard, mask, accessory }: { body: PieceDetails; head: PieceDetails; face: PieceDetails; beard?: PieceDetails; mask?: PieceDetails; accessory?: PieceDetails; style?: React.CSSProperties }) => {
    return (
        <svg style={style} xmlns='http://www.w3.org/2000/svg' viewBox='184.21621621621625 210.7874999999999 940.2702702702704 1130.5875' overflow='visible' width='940.2702702702704px' height='1130.5875px'>
            <g id='Bust'>
                <g id='Body' transform='translate(147.000000, 639.000000) scale(1 1)'>
                    {createBody(body)}
                </g>
                {createHead(
                    body,
                    <>
                        <g id='Hair' transform='translate(342.000000, 190.000000) scale(0.9978902953586498 1)'>
                            {createHair(head)}
                        </g>
                        <g id='Face' transform='translate(531.000000, 366.000000) scale(1 1)'>
                            {createFace(face)}
                        </g>
                        <g id='Beard' transform='translate(494.999934, 517.999659) scale(1 1)'>
                            {createBeard(beard)}
                        </g>
                        <g id='Mask' transform='translate(400.000000, 480.000000) scale(1 1)'>
                            {/* {createMask(mask)} */}
                        </g>
                        <g id='Accessories' transform='translate(419.000000, 421.000000) scale(1 1)'>
                            {createAccessory(accessory)}
                        </g>
                    </>
                )}
            </g>
        </svg>
    );
};

const createHair = (head: PieceDetails) => {
    if (!head) {
        return null;
    }

    const element = require(`./head/${head.type}`)?.default;

    const reactElement = React.createElement(element, head.options);

    if (head.type === "Bald") {
        return <g transform='translate(50 20)'>{reactElement}</g>;
    }

    if (head.type === "BangsTwo") {
        return <g transform='translate(20 0)'>{reactElement}</g>;
    }

    if (head.type === "BantuKnots") {
        return <g transform='translate(30 0)'>{reactElement}</g>;
    }

    if (head.type === "Bear") {
        return <g transform='translate(20 0)'>{reactElement}</g>;
    }

    if (head.type === "Bun") {
        return <g transform='translate(-20 -30)'>{reactElement}</g>;
    }

    if (head.type === "BunClip") {
        return <g transform='translate(20 -70)'>{reactElement}</g>;
    }

    if (head.type === "BunKnots") {
        return <g transform='translate(10 -30)'>{reactElement}</g>;
    }

    if (head.type === "BunTwo") {
        return <g transform='translate(-50 -90)'>{reactElement}</g>;
    }

    if (head.type === "ColorMedium") {
        return <g transform='translate(30 0)'>{reactElement}</g>;
    }

    if (head.type === "CornrowsLight") {
        return <g transform='translate(-15 0)'>{reactElement}</g>;
    }

    if (head.type === "DreadsTwo") {
        return <g transform='translate(0 -15)'>{reactElement}</g>;
    }

    if (head.type === "FlatTop") {
        return <g transform='translate(50 0)'>{reactElement}</g>;
    }

    if (head.type === "FlatTopLong") {
        return <g transform='translate(50 0)'>{reactElement}</g>;
    }

    if (head.type === "GrayShort") {
        return <g transform='translate(40 0)'>{reactElement}</g>;
    }

    if (head.type === "HatHip") {
        return <g transform='translate(-30 0)'>{reactElement}</g>;
    }

    if (head.type === "Hijab") {
        return <g transform='translate(50 20)'>{reactElement}</g>;
    }

    if (head.type === "LongAfro") {
        return <g transform='translate(-100 -130)'>{reactElement}</g>;
    }

    if (head.type === "LongBangs") {
        return <g transform='translate(-25 0)'>{reactElement}</g>;
    }

    if (head.type === "LongCurly") {
        return <g transform='translate(-50 -40)'>{reactElement}</g>;
    }

    if (head.type === "LongHair") {
        return <g transform='translate(-50 0)'>{reactElement}</g>;
    }

    if (head.type === "MediumBangs") {
        return <g transform='translate(-50 0)'>{reactElement}</g>;
    }

    if (head.type === "MediumBangsColor") {
        return <g transform='translate(-20 0)'>{reactElement}</g>;
    }

    if (head.type === "MediumBangsOne") {
        return <g transform='translate(40 10)'>{reactElement}</g>;
    }

    if (head.type === "MediumOne") {
        return <g transform='translate(40 10)'>{reactElement}</g>;
    }

    if (head.type === "MediumStraight") {
        return <g transform='translate(40 0)'>{reactElement}</g>;
    }

    if (head.type === "MediumTwo") {
        return <g transform='translate(-20 0)'>{reactElement}</g>;
    }

    if (head.type === "Mohawk") {
        return <g transform='translate(50 0)'>{reactElement}</g>;
    }

    if (head.type === "MohawkKnots") {
        return <g transform='translate(50 0)'>{reactElement}</g>;
    }

    if (head.type === "NoHairThree") {
        return <g transform='translate(30 0)'>{reactElement}</g>;
    }

    if (head.type === "NoHairTwo") {
        return <g transform='translate(30 0)'>{reactElement}</g>;
    }

    if (head.type === "Pomp") {
        return <g transform='translate(40 0)'>{reactElement}</g>;
    }

    if (head.type === "Shaved") {
        return <g transform='translate(40 0)'>{reactElement}</g>;
    }

    if (head.type === "ShavedOne") {
        return <g transform='translate(40 0)'>{reactElement}</g>;
    }

    if (head.type === "ShavedThree") {
        return <g transform='translate(10 -20)'>{reactElement}</g>;
    }

    if (head.type === "ShortFive") {
        return <g transform='translate(40 -10)'>{reactElement}</g>;
    }

    if (head.type === "ShortFour") {
        return <g transform='translate(40 -10)'>{reactElement}</g>;
    }

    if (head.type === "ShortOne") {
        return <g transform='translate(40 -10)'>{reactElement}</g>;
    }

    if (head.type === "ShortThree") {
        return <g transform='translate(40 0)'>{reactElement}</g>;
    }

    if (head.type === "ShortTwo") {
        return <g transform='translate(40 0)'>{reactElement}</g>;
    }

    if (head.type === "Turban") {
        return <g transform='translate(40 0)'>{reactElement}</g>;
    }

    if (head.type === "Twists") {
        return <g transform='translate(40 0)'>{reactElement}</g>;
    }

    if (head.type === "TwistsTwo") {
        return <g transform='translate(40 0)'>{reactElement}</g>;
    }

    if (head.type === "Wavy") {
        return <g transform='translate(40 0)'>{reactElement}</g>;
    }

    return reactElement;
};

const createFace = (face: PieceDetails) => {
    const element = require(`./face/${face.type}`)?.default;
    const reactElement = React.createElement(element, face.options);

    return reactElement;
};

const createBody = (body: PieceDetails) => {
    const element = require(`./body/effigy/${body.type}`)?.default;
    const reactElement = React.createElement(element, body.options);

    return reactElement;
};

const createBeard = (beard: PieceDetails | undefined) => {
    if (!beard) {
        return null;
    }

    const element = require(`./beard/${beard.type}`)?.default;

    const reactElement = React.createElement(element, beard.options);

    return reactElement;
};

// const createMask = (mask: PieceDetails | undefined) => {
//   if (!mask) {
//     return null;
//   }

//   const element = lazy(() => import(`./mask/${mask.type}`));
//   const reactElement = React.createElement(element, mask.options);

//   return reactElement;
// };

const createAccessory = (accessory: PieceDetails | undefined) => {
    if (!accessory) {
        return null;
    }

    const element = require(`./accessory/${accessory.type}`)?.default;

    const reactElement = React.createElement(element, accessory.options);

    if (accessory.type === "Eyepatch") {
        return <g transform='translate(0 -60)'>{reactElement}</g>;
    }

    if (accessory.type === "SunglassesTwo") {
        return <g transform='translate(-10 0)'>{reactElement}</g>;
    }

    return reactElement;
};

const createHead = (body: PieceDetails, children: React.JSX.Element) => {
    const group = (
        <g id='Head' transform='translate(0 0)'>
            {children}
        </g>
    );

    if (body.type === "StrippedPocketTee") {
        return <g transform='translate(250 0)'>{group}</g>;
    }

    if (body.type === "Whatever") {
        return <g transform='translate(90 0)'>{group}</g>;
    }

    return group;
};
