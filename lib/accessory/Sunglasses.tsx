import React from "react";

export const SunglassesConfig = {
    name: "Sunglasses",
    props: [
        {
            name: "outlineColor"
        }
    ],
    width: 392,
    height: 138,
    viewBox: "0 0 392 138"
};

const Sunglasses = ({ outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M337.809 15C361.281 15 374.676 20.0476 379.584 20.4408L379.732 20.4514C381.773 20.5819 383.605 20.7526 385.526 21.4957C392.592 24.2169 393.743 31.6273 389.619 36.2975C389.33 45.9612 390.601 57.2526 388.42 66.9474C385.73 107.818 366.509 114.716 355.584 117.233C350.098 118.497 343.597 119 337.771 117.666C327.831 117.295 318.004 114.184 309.597 108.765C297.888 101.213 289.191 89.6055 286.368 75.8299C285.031 69.2635 284.406 62.4288 285.134 55.7543L285.242 54.8347C281.436 53.0142 277.025 52.6698 272.479 52.5091C270.307 52.4318 268.166 52.3625 266.087 52.4549C264.054 52.6818 262.045 52.9841 260.031 53.3958C257.831 54.0595 255.753 55.155 253.835 56.8901L253.703 59.4225C253.343 65.7485 252.512 72.0936 251.231 78.3001C249.339 87.4577 246.297 96.2037 239.822 102.699C237.63 105.973 234.918 108.895 231.626 111.425C219.665 120.634 203.415 124.015 188.502 122.742C158.225 120.158 140.724 96.1233 136.691 85.8501L136.45 85.2277C133.537 77.5902 131.215 67.6807 122.009 66.0397L120.051 65.6879C115.85 64.8994 111.973 63.8015 109.51 59.7027C108.43 57.9133 107.875 55.9121 107.739 53.8717C106.301 53.9822 104.866 54.0876 103.436 54.19C92.0277 56.6027 23.6002 58.6483 18.1384 58.6483C18.1384 58.6483 7.63936 63.0673 3.20667 59.6434C0.134265 57.2626 -0.876527 54.0896 0.814798 50.4948C3.36676 45.0862 15.1403 41.8329 20.3682 40.8027C20.3682 40.8027 104.733 41.5034 110.805 40.3522C114.562 36.4783 121.282 37.0084 126.898 36.3959C131.546 33.0813 138.049 30.8612 143.186 29.3751C144.233 28.9784 145.27 28.5949 146.278 28.2334C155.695 24.8796 165.484 23.1033 175.422 22.1494C185.67 21.1754 195.948 21.6162 206.136 23.0119C210.429 23.5943 214.682 24.3474 218.906 25.3325C226.468 26.3294 233.986 27.9714 241.551 29.9193L243.065 30.3129C251.031 32.4015 259.217 34.2079 267.464 32.7921C274.177 31.647 280.634 29.0632 286.824 26.2693L287.629 25.9038C301.24 19.6893 322.496 15 337.809 15ZM218.087 37.7224C213.065 36.6178 210.92 44.3606 215.958 45.4682C219.526 46.2525 222.549 48.0515 224.592 51.0993L224.807 51.4307C227.548 55.7926 234.48 51.7661 231.72 47.376C228.614 42.4357 223.788 38.9755 218.087 37.7224ZM365.173 32.9216C363.403 31.6745 360.724 32.6003 359.696 34.3626C358.565 36.3031 359.306 38.4637 360.964 39.7332L361.133 39.8571C362.654 40.9291 364.135 42.8505 364.321 44.8193L364.338 45.0655C364.537 50.2177 372.544 50.2438 372.344 45.0655C372.149 39.9997 369.215 35.7673 365.173 32.9216Z'
                fill={outlineColor}
            />
        </>
    );
};

Sunglasses.config = SunglassesConfig;

export default Sunglasses;
