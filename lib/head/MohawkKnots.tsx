import React from "react";

export const MohawkKnotsConfig = {
    name: "Mohawk Knots",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        },
        {
            name: "hairColor"
        }
    ],
    width: 474,
    height: 567,
    viewBox: "0 0 474 567"
};

const MohawkKnots = ({ outlineColor = "#000", hairColor = "#E5E5E5", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M434.781 366.753C417.886 290.162 414.594 206.05 370.001 139.174C350.514 111.905 319.204 76.3475 282.627 87.5545C284.134 71.4075 285.557 55.2535 286.873 39.0895C287.626 29.8435 291.087 17.5245 283.262 10.4155C270.343 -0.0165462 248.956 15.9465 238.971 24.8655C217.339 45.5795 208.797 65.6985 180.302 79.5325C168.88 71.3925 157.748 62.8515 146.155 54.9315C134.342 46.8615 117.444 33.7525 105.185 48.6505C94.7946 61.2785 101.432 81.1835 105.552 95.0775C107.659 102.183 109.753 109.939 112.681 117.247C112.928 122.802 113.358 128.347 113.989 133.876C92.8805 137.632 71.1566 140.792 50.9896 148.163C39.9916 154.12 40.9616 167.649 48.7636 175.747C60.4396 187.054 75.2146 195.896 91.3446 201.831C88.4156 211.967 81.3946 220.562 72.5666 226.182C69.6056 228.059 67.9446 230.812 67.3436 233.749C62.8186 235.998 57.9736 237.62 52.8556 238.673C46.5436 239.976 42.8966 247.426 44.5236 253.347C49.1076 267.737 65.2616 259.512 75.7556 258.496C76.0716 268.545 76.2356 279.016 80.7986 288.325C56.4096 294.725 35.2816 318.062 40.9206 344.356C46.0426 369.492 73.1756 377.173 94.6536 382.885C96.2806 383.843 96.2756 384.784 96.7926 387.157C100.337 403.452 97.3526 421.379 91.7656 436.849C90.2426 441.066 92.4806 446.343 95.8636 448.872C113.355 460.009 119.154 426.094 139.093 447.681C137.605 447.458 133.903 445.607 134.093 448.289C159.961 493.685 236.339 496.475 283.136 497.589C288.752 500.321 295.218 498.772 301.642 497.028C307.771 496.696 313.893 496.237 320 495.614C331.149 493.602 350.76 495.987 351.46 480.284C380.255 468.925 405.013 449.302 421.897 423.302C434.421 406.049 439.366 387.787 434.781 366.753Z'
                fill={skinColor}
            />
            <path
                d='M97.8677 411.018C99.7487 422.215 104.156 432.916 111.589 442.363C112.008 442.894 112.435 443.424 112.867 443.951L112.368 444.22L111.857 444.485C107.939 446.482 103.954 447.538 100.287 444.441C97.0515 441.706 98.522 436.108 98.7989 432.335L98.89 430.943L99.1006 428.011L99.1787 426.823C99.4096 423.049 99.4557 419.201 98.4772 415.684C98.3004 415.048 97.9304 414.59 97.4686 414.307C97.5962 413.39 97.7112 412.47 97.8124 411.549L97.8677 411.018ZM72.5816 226.213C69.8621 236.145 68.088 246.236 67.0392 256.517C63.9922 256.586 60.9442 256.898 57.9012 256.17C55.8542 255.682 53.9412 254.928 52.1272 253.859C51.4832 253.478 50.5592 252.486 49.7882 252.083C51.4482 251.15 53.3942 247.825 54.6882 246.509C56.6842 244.48 58.7642 242.532 60.9162 240.671C63.7182 238.246 70.0202 234.974 70.5662 231.129C70.5952 230.922 70.5472 230.711 70.3502 230.6C69.843 230.314 69.321 230.147 68.7899 230.071C69.6105 228.697 70.7482 227.454 72.2358 226.441L72.5816 226.213ZM129.312 53.804L129.785 54.0406L132.112 55.16C136.466 57.2783 140.726 59.5403 144.981 61.8582C155.344 67.5032 165.553 73.3342 175.656 79.4252C176.462 79.9112 177.582 78.9052 177.003 78.0782C176.566 77.4532 176.123 76.8335 175.675 76.2188L175.906 76.3895C177.5 77.598 180.122 80.2073 175.255 83.708C163.728 92 153.335 101.902 143.496 112.107C128.156 128.02 114.725 145.815 104.326 165.297C95.5598 174.848 88.4139 186.362 82.8022 198.378C81.0972 197.616 79.4122 196.82 77.7494 195.991C79.1224 195.801 80.3214 195.281 81.8494 194.427L82.2081 194.224L82.8535 193.849C85.1525 192.498 85.8685 188.886 83.7365 187.004C81.8865 185.369 81.0985 184.118 78.6565 183.334C76.5115 182.644 74.2605 182.336 72.0905 181.73C67.5215 180.455 63.2735 178.436 59.3225 175.82C55.7793 173.474 52.5521 170.556 49.9035 167.224L49.2399 166.372L48.5842 165.542C47.3319 163.938 45.8447 161.795 46.6095 160.048C47.3963 158.251 51.0704 156.347 52.8094 155.273L53.785 154.662C70.9555 144.078 90.9055 142.65 110.15 138.425C110.923 138.256 110.665 137.206 109.975 137.136C106.44 136.784 102.869 136.563 99.2867 136.475C104.209 135.611 109.125 134.774 114.007 133.905C113.688 131.105 113.42 128.3 113.201 125.492C115.378 127.341 118.322 127.858 122.406 125.756C125.686 124.068 126.793 119.722 125.437 116.505C124.982 115.423 124.355 114.562 123.606 113.896L123.377 113.702L120.983 102.87L115.728 78.8112L115.571 78.1215L115.394 77.3903L114.32 73.1853C112.366 65.4063 110.291 54.8311 117.049 51.1062C120.762 49.061 125.707 51.9767 129.312 53.804ZM278.764 18.5912L278.929 19.3406L279.311 20.999C280.126 24.6786 280.652 28.4496 281.067 32.186C282.034 40.891 282.211 49.694 281.651 58.432C281.376 62.714 280.912 67.029 280.371 71.279C279.791 75.834 278.495 80.321 278.158 84.897C276.793 86.639 275.531 88.534 274.096 90.104C270.253 94.303 265.743 97.461 259.857 97.531C248.636 97.6635 239.216 88.9398 228.326 87.0248L227.586 86.9029C225.771 86.56 211.491 82.8763 213.242 76.6634L213.313 76.435C213.889 74.752 213.244 72.626 211.987 71.419C211.362 70.819 210.694 70.358 209.994 70.008C220.998 50.3925 235.857 33.6586 256.22 22.7112L259.016 21.2345L260.542 20.4416C265.195 18.051 270.492 15.6277 275.337 15.218C277.787 15.01 278.32 16.628 278.764 18.5912Z'
                fill={hairColor}
            />
            <path
                d='M260.154 4.6775L261.835 3.94348C267.631 1.43395 273.959 -0.972635 280.304 0.399498C287.612 1.9795 291.837 8.2645 293.646 15.1165C295.74 23.0425 296.676 31.4795 297.25 39.6375C297.843 48.0865 297.614 56.5175 296.978 64.9535C296.447 72.0085 295.349 80.1845 292.723 87.0225C292.835 86.9225 292.969 86.8485 293.129 86.8315C303.465 85.7725 312.99 86.3895 322.861 89.7185C332.056 92.8195 340.97 97.1705 348.972 102.667C366.256 114.539 379.629 132.469 388.946 151.033C407.873 188.746 411.866 231.408 417.17 272.65L417.331 273.9C420.185 295.953 423.976 317.673 430.058 339.066L431.108 342.713C436.69 362.284 440.021 381.323 435.57 401.585C426.963 440.764 396.622 470.339 361.524 487.409C343.604 496.125 324.214 502.556 304.63 506.264C284.543 510.068 262.803 510.705 244.488 500.314C235.408 495.162 243.402 482.004 252.579 486.471C271.517 495.69 292.98 492.655 312.638 487.586C332.191 482.546 351.368 475.487 368.693 465.004C398.424 447.016 423.44 415.961 424.26 379.897C424.721 359.604 416.049 340.228 411.868 320.635C408.183 303.371 405.896 285.853 403.738 268.338L402.138 255.327C397.495 218.014 391.681 179.603 372.52 146.626C355.605 117.517 326.471 94.3695 292.941 88.2125C292.74 88.1765 292.607 88.0795 292.527 87.9565C291.501 93.4795 285.414 98.6295 281.519 101.807C276 106.313 269.313 109.578 262.039 109.432C248.013 109.151 235.969 98.2745 226.355 89.1655C225.271 88.1395 226.445 86.7075 227.678 86.8935C238.836 88.5725 248.402 97.6375 259.839 97.5025C265.725 97.4325 270.235 94.2745 274.078 90.0755C275.513 88.5055 276.775 86.6105 278.14 84.8685C278.477 80.2925 279.773 75.8055 280.353 71.2505C280.894 67.0005 281.358 62.6855 281.633 58.4035C282.193 49.6655 282.016 40.8625 281.049 32.1575C280.634 28.4211 280.108 24.6501 279.293 20.9705L278.911 19.3121C278.405 17.0325 278.075 14.9555 275.319 15.1895C269.193 15.7075 262.345 19.4445 256.988 22.2645C236.22 33.2015 221.121 50.1125 209.976 69.9795C210.676 70.3295 211.344 70.7905 211.969 71.3905C213.226 72.5975 213.871 74.7235 213.295 76.4065C211.07 82.9105 203.16 83.1005 197.595 85.6475C191.531 88.4215 185.835 91.9875 180.441 95.8935C169.823 103.582 160.068 112.614 150.792 121.853C136.183 136.4 122.617 151.883 109.516 167.768L106.728 173.996C103.945 180.222 101.223 186.469 98.971 192.954C95.305 203.501 92.234 214.282 89.873 225.195C87.497 236.178 85.948 247.415 85.361 258.638C84.837 268.652 86.166 278.659 86.11 288.615C87 290.28 87.322 292.156 86.903 294.069C89.705 294.862 92.419 296.072 94.968 297.74C95.589 298.147 95.195 299.119 94.462 298.939C91.23 298.143 87.997 297.966 84.831 298.275C83.151 300.346 80.431 301.666 77.792 301.608L76.666 301.582C75.841 301.564 75.023 301.432 74.233 301.207C69.779 303.26 65.681 306.215 62.212 309.746C53.871 318.238 49.843 329.363 50.435 341.249C51.021 352.971 57.265 363.545 67.607 369.176C72.22 371.687 77.346 373.01 82.59 373.107C87.635 373.198 94.256 371.665 98.401 374.952C98.867 375.322 99.174 375.814 99.363 376.358C99.652 375.137 99.959 373.919 100.294 372.706C100.55 371.779 102.093 371.671 102.282 372.706L102.525 374.055C105.999 393.635 107.22 413.793 121.019 429.464C127.473 436.793 135.254 443.405 143.236 449.017L144.557 449.938C147.967 452.292 151.651 454.579 155.717 455.431C160.235 456.378 163.97 456.117 168.125 458.6C170.078 459.768 171.277 462.346 170.558 464.582C165.949 478.934 147.784 472.488 138.627 466.814C133.535 463.659 128.58 459.846 123.976 455.647C119.961 458.094 115.193 459.671 111.096 460.284C104.777 461.23 98.068 459.915 93.031 455.835C87.702 451.518 85.879 445.238 86.784 438.572C87.2342 435.254 88.095 432.018 89.0224 428.805L89.789 426.181C90.907 422.359 91.781 418.414 94.035 415.077C95.173 413.393 97.874 413.552 98.459 415.655C99.798 420.468 99.2185 425.901 98.8719 430.914L98.797 432.064C98.57 435.835 96.963 441.618 100.269 444.413C104.251 447.777 108.609 446.24 112.849 443.922C112.417 443.395 111.99 442.866 111.571 442.335C97.851 424.897 94.439 403.189 98.197 381.97C94.656 386.615 85.426 387.619 80.528 387.258C72.838 386.692 65.271 384.354 58.721 380.245C45.002 371.639 37.286 356.546 36.958 340.491C36.638 324.901 43.613 309.134 56.475 300.056C59.873 297.658 63.653 295.794 67.599 294.568C65.681 286.952 65.478 278.538 65.894 270.305C61.293 270.931 56.312 270.117 52.152 268.702L51.5063 268.476C45.095 266.18 36.9523 261.564 35.752 254.361C34.274 245.501 45.208 240.408 51.552 236.869C54.5193 235.215 57.5535 233.667 60.7035 232.389L61.652 232.014C64.371 230.968 67.572 229.018 70.332 230.572C70.529 230.682 70.577 230.893 70.548 231.1C70.002 234.945 63.7 238.217 60.898 240.643C58.746 242.503 56.666 244.451 54.67 246.48C53.376 247.796 51.43 251.122 49.77 252.055C50.541 252.458 51.465 253.45 52.109 253.831C53.923 254.9 55.836 255.654 57.883 256.142C60.926 256.87 63.974 256.557 67.021 256.488C68.258 244.362 70.504 232.501 74.12 220.852C80.185 201.308 90.126 180.719 104.308 165.268C114.707 145.786 128.138 127.992 143.478 112.078C153.317 101.873 163.71 91.9715 175.237 83.6795C180.347 80.0037 185.722 76.6919 191.427 74.0236L193.322 73.1543C196.489 71.6889 200.341 69.7867 204.014 69.2425C206.39 59.8145 210.623 50.7975 215.759 42.6245C222.835 31.3635 232.148 21.8655 243.045 14.2765C248.422 10.5305 254.152 7.3095 260.154 4.6775ZM71.1186 333.05C80.2616 326.909 91.4746 324.506 102.401 325.413C107.821 325.863 113.182 327.133 118.261 329.076L120.355 329.903C125.206 331.847 130.413 334.245 130.587 340.113C130.656 342.43 128.941 344.275 126.871 344.995C121.822 346.75 117.731 342.547 113.562 340.311C109.353 338.051 104.879 336.561 100.27 335.354C99.8276 335.238 99.3846 335.133 98.9426 335.028C99.1826 335.509 99.3186 336.041 99.2716 336.614C99.1576 337.986 98.7586 339.006 98.3706 340.292C98.2536 340.682 97.9686 343.063 97.6766 343.357C97.7716 344.167 97.7816 344.933 97.8066 345.749C97.8766 348.158 97.5796 350.193 96.3496 352.326C93.2856 357.639 84.5266 358.129 81.5936 352.326C78.6606 346.524 80.9526 340.846 85.4096 336.674C86.6246 335.538 88.2446 334.381 90.0046 333.583C83.8246 333.019 77.5756 333.286 71.4016 334.098C70.7996 334.178 70.7076 333.327 71.1186 333.05ZM71.6653 138.404C84.2053 136.272 97.3013 135.847 109.957 137.108C110.647 137.178 110.905 138.228 110.132 138.397C90.8874 142.622 70.9373 144.05 53.7668 154.634L52.9763 155.129C51.3283 156.177 47.4073 158.156 46.5913 160.02C45.6283 162.22 48.2363 165.048 49.4493 166.636C52.1763 170.202 55.5643 173.315 59.3043 175.792C63.2553 178.408 67.5033 180.427 72.0723 181.702C74.2423 182.308 76.4933 182.616 78.6383 183.306C81.0803 184.09 81.8683 185.341 83.7183 186.976C85.8503 188.858 85.1343 192.47 82.8353 193.821L82.19 194.196C79.1689 195.925 77.4897 196.434 73.6523 195.758C70.6503 195.228 67.7833 194.179 64.9733 193.013C59.8105 190.869 55.0984 188.062 50.7507 184.567L50.1013 184.038C42.3373 177.62 29.1823 163.582 37.8473 153.362C45.4953 144.344 60.5243 140.298 71.6653 138.404ZM102.549 41.1687C114.576 27.0007 131.562 36.6747 143.614 45.1457C156.603 54.2737 167.873 65.0407 176.985 78.0497C177.564 78.8767 176.444 79.8827 175.638 79.3967C165.535 73.3057 155.326 67.4747 144.963 61.8297C140.708 59.5118 136.448 57.2498 132.094 55.1315L129.767 54.0121C126.13 52.2171 120.909 48.9416 117.031 51.0777C108.669 55.6864 113.83 70.7821 115.553 78.093L115.71 78.7827L120.965 102.842L123.359 113.674C124.21 114.364 124.918 115.287 125.419 116.477C126.775 119.694 125.668 124.04 122.388 125.728C112.707 130.71 109.429 120.98 107.606 113.668C106.125 107.728 104.628 101.791 103.128 95.856L100.647 86.0473C96.8461 71.199 91.4507 54.2419 102.549 41.1687Z'
                fill={outlineColor}
            />
        </>
    );
};

MohawkKnots.config = MohawkKnotsConfig;
export default MohawkKnots;
