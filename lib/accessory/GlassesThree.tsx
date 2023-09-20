import React from "react";

export const GlassesThreeConfig = {
    name: "Glasses Three",
    props: [
        {
            name: "outlineColor"
        }
    ],
    width: 418,
    height: 138,
    viewBox: "0 0 418 138"
};

const GlassesThree = ({ outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M380.133 98.3183C373.4 107.363 360.918 110.244 349.405 109.249C324.574 106.859 316.759 78.6583 315.945 56.7393C332.596 61.4233 314.537 28.2493 371.456 24.6013C391.521 22.9293 385.989 35.0473 394.854 43.9013C394.672 62.4833 391.579 82.6743 380.133 98.3183ZM261.862 76.9663C247.202 145.619 166.924 129.289 158.491 67.4033C166.278 61.9073 164.227 48.3363 173.901 43.4193C189.233 33.6233 208.399 34.0423 225.81 34.2723C248.065 35.8013 254.407 45.0203 265.839 55.0783C265.289 61.7963 263.703 69.7583 261.862 76.9663ZM411.934 13.2313C411.111 13.0943 410.287 12.9653 409.463 12.8443C408.82 12.4793 408.065 12.1983 407.187 12.0293C405.182 11.5203 403.191 11.1773 401.203 10.9923C372.671 4.57131 306.664 13.6883 303.94 38.0363C294.854 41.0693 286.992 38.3533 276.461 38.6233C268.445 5.11831 129.862 9.84731 123.197 30.0473C123.172 30.0403 123.147 30.0343 123.121 30.0263C116.717 28.0443 107.276 28.5223 99.9463 28.2083C84.2953 27.8803 68.6263 29.2753 53.3133 32.5763C24.6383 37.1333 -14.4967 42.4683 5.44632 78.2763C5.45032 78.2823 5.45332 78.2893 5.45832 78.2953L5.46132 78.2923C8.89832 81.8153 14.7313 78.9783 14.9483 74.2093C8.24332 57.2453 23.3873 55.2083 35.0393 50.3333C64.0323 39.9173 93.5503 38.4733 123.536 41.6953C125.792 44.3513 129.215 46.6673 132.833 47.8793C152.882 51.2073 142.316 66.0793 154.989 68.2423C152.661 120.084 215.602 148.382 252.071 114.303C266.632 100.067 270.103 78.9783 273.479 59.9693C275.264 59.5683 276.399 58.5923 277.062 57.3003C281.355 53.0143 284.052 49.0563 292.541 47.8793C301.03 46.7033 307.565 49.0643 308.449 49.7873C308.672 50.2363 308.911 50.6863 309.189 51.1363C309.577 51.8073 310.105 52.3423 310.705 52.7633C302.322 104.387 342.399 137.035 382.858 110.26C400.438 93.7233 404.153 68.4053 404.887 45.8073C407.27 44.3693 408.779 41.5823 407.954 38.0783C406.817 33.2483 409.483 29.0663 413.729 26.9663C419.246 24.2393 418.27 14.2803 411.934 13.2313Z'
                fill={outlineColor}
            />
        </>
    );
};

GlassesThree.config = GlassesThreeConfig;

export default GlassesThree;
