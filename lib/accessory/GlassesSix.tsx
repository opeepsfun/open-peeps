import React from "react";

export const GlassesSixConfig = {
    name: "Glasses Six",
    props: [
        {
            name: "outlineColor"
        }
    ],
    width: 396,
    height: 138,
    viewBox: "0 0 396 138"
};

const GlassesSix = ({ outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M367.09 74.4324C364.262 82.1284 359.958 90.1404 354.695 96.6174C333.401 114.649 312.71 104.665 302.204 80.2264C298.212 62.9554 308.811 44.3514 320.042 31.6464C336.262 15.3894 362.733 23.9214 370.191 43.2474C370.644 45.7514 370.918 48.2494 371.049 50.7394C370.894 58.8304 369.919 65.7454 367.09 73.4324M162.41 58.9114C190.462 25.5444 242.942 23.7604 241.603 75.1154C235.577 140.119 134.106 124.164 162.41 58.9114ZM375.913 31.0764C374.93 29.4114 373.839 27.8004 372.648 26.2594C372.208 25.9974 371.955 23.6734 370.337 23.5014C348.71 -0.357621 310.717 13.1794 296.989 36.9534C294.482 39.9594 292.437 43.4784 290.929 47.1964C277.403 44.7154 261.634 45.1974 249.054 50.3064C236.58 17.7344 198.815 14.8264 173.928 28.7434C158.449 36.3564 148.412 52.2994 133.358 61.0574C97.9688 63.6044 59.9878 55.6754 25.2378 64.5524C-2.16822 70.2504 20.7418 84.1274 25.3378 74.8664C58.1008 65.1864 96.9158 73.3664 130.933 71.1854C134.47 77.1684 141.253 82.0644 148.013 81.8554C155.314 146.576 249.698 135.844 252.954 78.3114C256.647 72.4724 261.24 66.8844 267.814 63.2464C270.331 62.7254 272.762 62.0484 274.984 61.0004C278.782 60.4644 284.634 62.0744 288.128 65.2364C300.097 137.052 369.052 128.688 381.375 65.7744C381.62 65.5244 382.305 64.5864 382.831 63.0814C387.049 57.5044 397.375 55.4314 395.725 46.0164C394.256 36.5994 382.364 36.7114 375.913 31.0764Z'
                fill={outlineColor}
            />
        </>
    );
};

GlassesSix.config = GlassesSixConfig;

export default GlassesSix;
