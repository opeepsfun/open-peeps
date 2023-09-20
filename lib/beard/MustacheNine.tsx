import React from "react";

export const MustacheNineConfig = {
    name: "Mustache Nine",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "beardColor"
        }
    ],
    width: 293,
    height: 230,
    viewBox: "0 0 293 230"
};

const MustacheNine = ({ outlineColor = "#000", beardColor = "brown" }) => {
    return (
        <>
            <path
                d='M245.365 32.8226C231.339 30.4572 216.767 33.9531 203.243 37.6782C181.76 23.5728 153.923 37.8103 138.537 55.4329C133.271 59.7696 122.213 65.5298 128.039 73.8036C125.831 79.6522 125.24 82.4044 129.811 75.567C155.679 78.5451 183.434 72.9192 209.035 67.6129C217.752 70.5441 225.45 77.3976 235.033 75.0502C244.093 76.9767 253.901 78.7753 262.08 72.9629C268.308 72.7103 282.164 83.894 281.942 70.8883C280.015 58.4217 255.297 37.6782 245.365 32.8226Z'
                fill={beardColor}
            />
            <path
                d='M255.884 72.8453C240.656 74.5303 225.213 72.0543 212.462 63.2123C211.131 62.2893 209.819 62.2993 208.749 62.8403C207.448 62.6963 206.117 63.2153 205.345 64.7013C202.143 70.8683 191.53 69.4943 185.696 69.6203C166.613 69.9883 146.864 68.9353 128.499 74.7043C146.063 40.3703 170.354 25.5483 207.941 39.0273C204.547 41.7603 221.483 35.3623 222.969 35.2403C248.975 28.7243 270.43 50.5363 280.911 72.1503C272.982 70.2633 264.097 71.9363 255.884 72.8453ZM292.208 78.6883C280.741 52.8593 258.131 24.4593 226.594 28.9233C220.119 29.8763 213.308 34.2993 206.789 33.5013C187.914 26.5303 172.334 22.9883 153.431 34.2603C145.411 34.8593 100.279 90.7363 121.726 86.1743C148.052 71.0563 193.826 85.2963 210.174 71.7743C242.269 92.8433 268.365 69.9563 286.453 83.1263C289.598 86.0113 294.009 82.4183 292.208 78.6883Z'
                fill={outlineColor}
            />
        </>
    );
};

MustacheNine.config = MustacheNineConfig;
export default MustacheNine;
