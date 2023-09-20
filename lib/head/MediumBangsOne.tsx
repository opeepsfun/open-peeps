import React from "react";

export const MediumBangsOneConfig = {
    name: "Medium Bangs One",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        }
    ],
    width: 476,
    height: 567,
    viewBox: "0 0 476 567"
};

const MediumBangsOne = ({ outlineColor = "#000", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M258.576 38.9776C315.356 38.9776 386.472 103.748 407.285 131.311C424.784 154.484 422.309 273.865 422.309 344.682C422.309 359.493 415.614 387.525 413.183 401.692C404.277 453.607 365.475 497.146 288.676 497.146C226.144 497.146 178.021 477.339 131.486 426.68C120.869 415.123 69.0209 456.498 58.4173 441.598C30.7206 441.598 7.56163 182.82 61.9403 105.201C116.319 27.5832 201.795 38.9776 258.576 38.9776Z'
                fill={skinColor}
            />
            <path
                d='M87.9165 57.2049C120.726 27.3549 164.436 12.9949 208.536 14.0549C231.376 14.6049 254.136 18.9549 275.706 26.4049C286.496 30.1449 296.947 35.0249 306.936 40.5449C310.536 42.5295 313.855 44.855 317.05 47.3246L317.846 47.9449H317.856C326.426 51.0249 334.076 56.5549 341.016 63.0249C354.926 61.9149 368.946 63.1649 382.396 67.4549C401.116 73.4349 418.446 84.3849 430.616 99.9349C444.792 118.038 449.505 139.997 447.824 162.665L447.513 166.516C445.85 186.541 442.871 212.297 426.436 225.455C425.186 226.455 423.806 227.215 422.376 227.675C432.966 245.815 441.656 265.955 446.856 286.295C466.706 363.985 451.446 445.005 427.576 519.885C425.616 526.055 416.286 530.155 411.536 524.125C403.056 513.345 390.736 505.125 376.876 503.585C368.326 502.635 359.816 504.355 351.736 500.475C348.566 498.945 345.507 496.445 343.306 493.405C329.666 498.575 314.976 501.015 300.406 500.415C276.496 499.435 250.936 491.155 234.486 472.995C231.846 470.08 231.177 466.807 231.785 463.857C233.848 463.121 235.966 462.573 238.148 462.23C259.008 474.524 282.002 482.739 306.714 483.255C320.993 483.553 334.921 481.556 346.499 472.64C349.004 470.71 351.308 468.573 353.438 466.277C377.645 450.705 394.712 424.256 402.826 395.925C410.386 369.505 409.456 341.995 406.856 314.895L405.485 300.594C403.485 279.605 401.63 258.553 401.11 237.475L401.267 237.467C406.379 237.137 406.416 229.134 401.267 229.467C387.948 230.329 374.73 228.144 361.452 229.096C361.341 222.819 360.889 216.57 359.044 210.516C357.991 207.057 351.968 206.375 351.33 210.516C350.476 216.056 350.164 221.565 350.071 227.13C330.2 226.866 310.348 225.194 290.474 225.881C286.809 221.971 285.641 215.038 283.926 210.215C283.676 209.505 283.426 208.805 283.166 208.095C281.659 214.987 279.523 221.728 276.713 228.327L271.839 228.343C244.185 228.473 215.967 229.3 188.962 235.043C187.085 233.602 185.968 231.088 185.666 228.805C183.708 213.949 180.912 199.488 175.957 185.331L175.249 183.334C175.191 183.168 175.129 182.992 175.065 182.807C171.414 188.7 167.058 194.193 162.307 199.308C159.507 202.323 156.571 205.206 153.558 208.007C150.631 211.257 147.606 214.458 144.674 217.718C144.789 218.311 144.889 218.913 144.97 219.526C145.867 226.291 145.96 233.152 145.303 239.943C144.115 252.22 140.649 264.05 135.081 274.994L134.905 276.09C134.06 281.218 132.857 286.519 130.047 290.381C133.553 294.309 136.254 299.001 137.82 304.214C139.214 308.855 132.793 312.877 129.463 309.079C126.818 306.062 123.879 303.565 120.651 301.573C120.447 301.85 120.079 301.986 119.666 301.755C110.676 296.765 95.4065 298.275 86.4265 302.975C75.2565 308.815 70.8965 320.805 72.1365 332.955C73.3265 344.565 78.4065 358.135 88.2565 364.085C92.7765 366.815 96.2965 367.045 101.096 365.735C102.631 365.318 104.534 364.04 105.351 363.405L106.154 362.76C109.301 360.273 112.232 358.57 115.946 358.505C119.746 357.32 123.564 358.964 125.017 362.947L125.106 363.205C125.786 365.235 127.026 367.785 126.756 370.885C126.476 374.205 124.956 377.225 122.686 379.655C122.296 380.075 121.876 380.495 121.446 380.885C160.546 423.215 165.566 489.175 145.516 542.055C144.646 544.375 143.716 546.665 142.746 548.935C139.396 556.715 126.496 554.305 124.856 546.595C124.366 544.285 123.826 541.985 123.236 539.705C122.152 535.492 120.91 531.318 119.509 527.204L118.976 525.665C117.786 522.265 116.676 518.835 115.476 515.435L115.356 515.046C115.311 514.892 115.261 514.715 115.206 514.515L113.176 518.945L107.006 532.315C104.119 538.554 94.9458 535.163 94.6047 529.151L94.5965 528.945C94.5665 527.835 94.5265 526.735 94.4565 525.645C94.0165 517.475 92.6065 509.535 90.3665 501.765L89.5583 502.769C77.5244 517.647 63.4011 531.592 44.0265 535.025C39.1665 535.885 33.6665 530.805 37.0065 525.895C38.3865 523.865 39.7165 521.785 40.9765 519.675C39.8865 519.165 38.8565 518.635 37.9065 518.095C30.5565 513.965 24.4365 508.085 19.3765 501.415C8.64648 487.275 4.80648 469.475 3.86648 452.055C2.86648 433.645 4.48648 414.235 9.51648 396.475C11.6965 388.795 14.6465 381.425 18.0565 374.275C17.8165 373.635 17.5865 372.995 17.3565 372.355C13.6765 362.095 10.6565 351.605 8.14648 340.995C3.08648 319.575 0.366478 297.475 0.0364778 275.465C-0.563522 236.035 6.23648 195.975 20.5665 159.205C35.3665 121.285 57.6265 84.7549 87.9165 57.2049ZM69.4865 401.945C66.7688 397.666 59.969 401.522 62.4924 405.831L62.5865 405.985C66.8965 412.775 68.9165 420.495 71.3965 428.065C72.9865 432.935 80.7165 430.855 79.1065 425.935L78.5735 424.292C76.1057 416.616 73.8545 408.814 69.4865 401.945ZM93.1565 320.265L94.962 319.391C100.657 316.673 105.647 314.822 112.376 317.195C121.386 320.365 131.036 330.455 124.946 340.245C122.706 343.855 118.726 345.295 114.626 344.445C107.714 343.011 105.931 336.787 102.423 331.677L101.82 330.812C99.6811 327.721 96.9768 323.447 93.4165 322.235C92.6065 321.955 92.2665 320.695 93.1565 320.265ZM98.235 112.406L98.8165 111.885C102.686 108.465 97.0065 102.825 93.1565 106.225C75.5365 121.795 69.4165 146.165 60.2765 166.935C58.2265 171.605 65.1165 175.685 67.1865 170.975C75.9051 151.155 81.6923 127.447 98.235 112.406ZM309.976 105.595C305.373 103.52 301.345 110.22 305.771 112.426L305.936 112.505C321.496 119.535 328.116 135.455 334.456 150.235C336.476 154.955 343.366 150.885 341.366 146.205L340.222 143.553C333.607 128.321 325.891 112.796 309.976 105.595ZM334.366 95.9749C329.486 94.2849 327.396 102.005 332.236 103.695C345.426 108.285 354.477 118.185 362.107 129.505C364.966 133.745 371.896 129.745 369.007 125.465C360.146 112.325 349.626 101.295 334.366 95.9749Z'
                fill={outlineColor}
            />
        </>
    );
};

MediumBangsOne.config = MediumBangsOneConfig;
export default MediumBangsOne;