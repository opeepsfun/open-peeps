import React from "react";

export const PompConfig = {
    name: "Pomp",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        }
    ],
    width: 495,
    height: 567,
    viewBox: "0 0 495 567"
};

const Pomp = ({ outlineColor = "#000", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M385.415 173.222C381.554 149.862 394.226 145.016 385.415 122.811C365.833 81.6673 312.468 83.4401 273.308 80.2766C229.63 78.6026 185.422 84.3689 145.156 101.875C135.538 106.056 126.287 110.973 117.419 116.56C109.751 121.391 110.805 130.577 115.64 135.588C80.7747 184.96 100.716 251.232 72.8967 303.202C67.7577 312.491 60.9607 320.821 56.4937 330.487C49.7037 345.18 49.2687 366.233 64.6667 375.99C86.3537 387.631 98.4557 364.584 109.112 397.993C162.33 514.483 269.329 521.044 370.905 460.31C379.693 455.422 388.662 449.897 395.298 442.217C410.361 425.266 408.587 401.428 408.92 380.259C409.106 367.854 409.137 355.447 409.016 343.039C408.542 292.781 391.885 223.065 385.415 173.222Z'
                fill={skinColor}
            />
            <path
                d='M169.067 33.5077C230.397 5.68772 299.958 -4.86228 366.858 2.05772C399.878 5.46792 432.464 12.7843 463.475 24.6689L466.193 25.7194C473.848 28.6657 482.1 31.5903 487.918 37.5877C494.689 44.5577 496.588 55.0977 491.748 63.7077C487.988 70.3977 481.228 75.1967 474.018 77.7577C476.558 79.8377 478.968 82.1577 481.228 84.7477C485.038 89.0877 485.328 95.2767 481.228 99.5577C473.328 107.808 463.078 113.777 452.038 116.638C453.278 122.628 452.608 129.258 449.948 135.228C442.315 152.365 420.813 154.407 404.267 153.389L403.768 153.358L402.848 163.888C402.358 169.498 398.998 173.848 393.298 174.708C393.098 174.738 392.897 174.758 392.698 174.777C401.718 207.398 407.168 241.027 412.198 274.458C414.826 291.909 417.178 309.4 419.43 326.903L420.178 332.738C422.578 351.608 425.578 370.668 426.618 389.678C427.548 406.928 424.258 423.398 413.628 437.318C404.088 449.798 391.078 459.148 377.088 466.088C345.478 481.777 312.208 493.458 277.248 498.878L274.916 499.236C261.421 501.296 247.517 503.032 234.168 499.298C222.439 496.018 210.138 487.558 212.788 473.968C213.678 469.378 220.098 469.178 222.298 472.728L222.805 473.541C225.444 477.727 228.335 481.617 232.939 483.777C238.328 486.318 244.578 487.027 250.468 487.098C266.918 487.288 284.048 483.188 299.888 479.078C329.468 471.399 359.848 458.878 384.078 439.908C394.388 431.848 402.668 421.768 405.588 408.798C409.198 392.808 405.878 375.328 404.238 359.258C400.863 326.098 396.846 293 392.608 259.939L391.758 253.328C388.189 225.688 384.439 198.038 382.658 170.238C381.918 169.228 381.418 168.078 381.218 166.818L380.939 165.008C380.698 163.458 380.658 162.038 380.828 160.728C380.838 155.708 380.978 150.718 381.268 145.697C381.317 144.798 381.358 143.898 381.388 143.008C376.168 144.158 370.908 145.088 365.628 145.878C328.508 151.468 290.808 152.868 253.388 150.088C234.718 148.697 216.189 146.308 197.718 143.318C188.317 141.798 178.948 140.118 169.608 138.238C162.858 136.888 156.248 135.058 149.608 133.338C142.758 143.308 139.058 155.578 139.778 167.628C140.588 181.378 149.748 193.848 147.178 207.898C144.766 221.047 133.5 225.124 122.378 228.38L117.648 229.747C114.009 230.809 111.366 231.835 110.708 236.208C109.578 243.718 110.968 252.168 111.258 259.718C111.608 268.648 112.067 277.578 112.278 286.508C112.388 291.128 112.567 295.768 112.558 300.388C112.548 303.668 112.058 305.908 110.788 308.027C111.768 309.258 112.647 310.588 113.428 311.998C113.678 312.458 113.058 312.947 112.689 312.568C111.698 311.538 110.647 310.608 109.538 309.777C108.978 310.468 108.328 311.168 107.567 311.918L107.508 311.838C105.128 314.208 101.348 314.438 98.3966 311.918L97.6223 311.247C95.4624 309.354 93.9783 307.777 93.3776 304.648C93.3476 304.488 93.3166 304.328 93.2976 304.168C87.8076 303.978 82.2276 305.277 77.2876 308.008C69.4576 312.338 63.9476 318.508 60.6886 326.128C61.9876 327.648 63.5076 329.008 65.2776 330.148C65.5276 330.318 65.3076 330.688 65.0376 330.558C63.2276 329.708 61.6076 328.658 60.1576 327.428C58.9876 330.428 58.1676 333.648 57.6676 337.058C55.9076 349.098 59.0476 363.808 69.9276 370.668C74.6376 373.638 80.0176 375.248 85.5976 375.268C88.3166 375.277 90.6676 374.818 93.3076 374.168C95.0976 373.728 96.8776 373.088 98.7476 373.088C100.348 373.088 101.828 373.488 103.198 374.288L102.818 374.321C101.894 374.408 102.072 374.447 103.358 374.447C107.358 374.618 109.647 378.678 107.808 382.208L107.566 382.753C107.516 382.863 107.472 382.954 107.439 383.027L107.293 383.963C107.279 384.052 107.264 384.144 107.248 384.238L107.192 384.427C107.182 384.458 107.171 384.488 107.158 384.518L113.157 393.666C120.512 404.857 128.031 416.006 136.588 426.228C142.588 433.398 148.948 440.428 155.668 446.938C161.708 452.788 168.948 455.608 175.788 460.208C179.439 462.648 180.508 467.758 177.189 471.048C167.448 480.718 153.658 473.038 145.668 465.178C138.108 457.728 131.578 448.768 125.948 439.798C115.958 423.848 108.008 406.888 104.528 388.478C103.078 389.808 101.228 390.638 99.3576 391.288C95.6076 392.588 91.4776 393.128 87.5176 393.268C79.9276 393.518 72.3276 391.678 65.4976 388.418C37.7076 375.168 33.6276 335.488 50.6176 312.088C48.3267 305.444 47.0472 298.236 45.6571 292.088L45.0247 289.341C37.998 258.648 33.2818 226.333 45.7376 196.258C47.3376 192.378 49.1376 188.598 51.2676 184.978C52.9776 182.068 55.9176 178.968 56.7276 175.658C58.5276 168.388 47.4176 160.748 44.1776 154.978C40.3676 148.208 39.8276 140.218 45.0176 134.027C45.6776 133.248 46.3966 132.527 47.1776 131.898C42.2576 122.978 42.0276 111.758 48.5076 102.958C52.7676 97.1577 59.2676 93.0977 66.3676 91.8677C70.7076 91.1177 75.9276 91.3977 80.6976 92.7377C106.817 68.4877 136.618 48.2277 169.067 33.5077ZM68.7671 336.938C75.7381 330.788 83.4381 327.568 92.9381 328.378C102.488 329.197 113.988 333.148 119.597 341.338C124.028 347.808 114.998 357.298 108.498 352.438C102.578 348.008 98.6271 343.008 91.2781 340.628C84.6771 338.498 76.5071 337.128 69.5971 338.348C68.8371 338.478 68.0781 337.538 68.7671 336.938Z'
                fill={outlineColor}
            />
        </>
    );
};

Pomp.config = PompConfig;
export default Pomp;