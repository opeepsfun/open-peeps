import React from "react";

export const NoHairTwoConfig = {
    name: "No Hair Two",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        }
    ],
    width: 474,
    height: 567,
    viewBox: "0 0 474 567"
};

const NoHairTwo = ({ outlineColor = "#000", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M236.452 86.8266C285.232 86.8266 379.365 143.357 379.365 143.357C379.365 143.357 423.563 328.578 414.657 381.477C405.751 434.376 359.365 499.184 282.566 499.184C205.768 499.184 184.903 472.088 166.43 459.773C147.957 447.458 110.724 391.413 110.724 391.413C110.724 391.413 85.4597 399.281 78.0442 394.728C67.5136 388.263 68.792 371.261 65.4639 354.82C63.0114 342.704 54.6602 330.814 54.6633 324.069C54.6633 299.595 72.0529 301.344 80.8133 295.479C61.6175 276.571 66.6695 210.998 90.8513 176.558C115.033 142.119 187.671 86.8266 236.452 86.8266Z'
                fill={skinColor}
            />
            <path
                d='M324.194 45.0538C328.461 44.3708 331.89 50.3688 327.373 52.5928C308.143 62.0658 287.955 69.1928 268.377 77.8278C278.378 79.0278 288.577 80.9238 298.432 83.8588C309.772 79.1978 321.417 75.4218 333.408 72.7528L337.209 71.9099C349.418 69.232 363.161 66.6988 375.02 70.8028C379.095 72.2118 378.845 77.3578 375.02 78.8488C368.136 81.5328 360.528 82.2368 353.242 83.0788C345.905 83.9258 338.648 84.9598 331.417 86.4858C326.149 87.5968 320.907 88.8878 315.713 90.3548C318.971 91.8758 322.148 93.5428 325.212 95.3898C341.721 105.344 356.749 116.709 369.324 131.459C381.53 145.774 391.134 161.986 397.67 179.632C399.381 184.252 400.479 189.162 401.188 194.037C401.757 197.941 401.403 201.766 401.499 205.617C401.704 205.697 401.88 205.852 401.938 206.086C404.276 215.369 404.573 225.457 405.311 235.001C406.077 244.901 406.863 254.798 407.518 264.707C408.171 274.565 408.068 284.852 409.913 294.568C411.589 303.393 416.569 311.229 419.372 319.771C436.19 371.023 419.774 432.437 378.876 467.834C358.227 485.705 332.482 497.033 305.471 500.768C291.427 502.709 277.483 502.659 263.456 500.59C256.798 499.609 250.219 498.133 243.794 496.13L241.412 495.391C238.745 494.558 236.037 493.657 233.575 492.429C230.064 490.678 228.543 487.732 227.311 484.15C226.563 481.976 227.77 478.638 229.938 477.691L230.644 477.388C234.36 475.828 237.355 475.158 241.409 476.687C244.676 477.919 247.993 479.01 251.352 479.962C258.016 481.851 264.85 483.255 271.745 483.931C285.64 485.295 299.698 484.599 313.328 481.546C337.819 476.06 360.251 463.746 377.236 445.173C393.833 427.025 404.229 403.876 408.214 379.704C410.19 367.71 410.352 355.123 408.764 343.073C407.939 336.82 406.538 330.617 404.723 324.58C403.698 321.172 402.378 317.87 401.306 314.482C400.335 311.414 400.039 308.133 399.595 304.931L399.489 304.194C398.284 296.053 398.699 287.762 398.707 279.559C398.715 271.308 398.669 263.055 398.751 254.804L398.832 245.475C398.86 242.364 398.894 239.253 398.948 236.144C397.811 236.325 396.397 235.488 396.288 234.133C395.886 229.119 394.752 224.25 394.124 219.264L393.958 217.952C393.365 213.37 392.644 208.877 390.729 204.638C386.841 196.031 384.103 186.949 380.418 178.257C373.095 160.989 362.181 145.055 348.668 132.049C332.446 116.435 312.347 105.347 290.806 99.0208C290.121 99.3078 289.431 99.5818 288.749 99.8748C275.108 105.761 262.158 113.334 249.862 121.653C243.524 125.941 237.425 130.57 231.604 135.539C228.77 137.958 225.929 140.375 223.159 142.869C221.974 143.935 220.801 145.016 219.641 146.111C218.867 146.839 218.101 147.574 217.339 148.315C215.586 149.547 215.548 151.281 217.225 153.513C217.822 153.267 218.208 154.25 217.658 154.542C214.337 156.306 211.727 152.536 212.433 149.411C212.992 146.936 215.286 144.665 216.901 142.722L217.116 142.459C219.626 139.358 222.198 136.279 224.926 133.365C239.296 118.015 256.256 105.323 274.643 95.2138C266.913 93.8288 259.079 93.0328 251.246 92.8368C246.737 92.7258 242.245 92.7988 237.775 93.0488C230.806 96.8368 223.925 100.781 217.175 104.966C211.542 108.459 205.991 112.086 200.536 115.851C197.694 117.812 194.885 119.818 192.087 121.84C190.677 122.861 188.522 124.072 187.39 125.353L187.305 125.458C186.513 126.493 184.223 131.011 187.2 130.886C187.518 130.873 187.579 131.365 187.274 131.439C184.559 132.099 184.206 129.3 184.671 127.189C185.832 121.924 192.859 117.67 196.81 114.387L197.063 114.174C205.059 107.381 213.319 100.896 221.806 94.7238C195.356 98.7858 170.187 109.171 148.309 125.12C120.194 145.613 99.0634 174.498 84.9844 206.093C78.2944 221.107 72.7464 237.107 70.7614 253.471C68.9824 268.137 70.8764 284.224 82.3184 294.591C82.9414 294.53 83.5644 294.467 84.1874 294.424L85.1581 294.365C93.3072 293.929 110.303 294.482 109.754 305.7C109.731 306.167 109.021 306.457 108.793 305.96C106.121 300.155 98.3162 301.198 92.754 302.116L89.6243 302.631C83.1261 303.711 76.4854 305.099 70.7724 308.479C65.2924 311.722 60.4914 316.906 59.4334 323.397C58.3894 329.794 62.6344 334.619 66.2924 339.324C70.4394 344.659 73.7734 350.178 74.1714 357.105C74.5694 364.078 71.1524 371.098 72.1434 377.992C74.3544 393.396 96.7674 388.433 106.402 386.066C109.291 385.357 113.273 386.46 114.605 389.404C120.98 403.493 129.648 416.351 140.565 427.32C145.963 432.744 151.804 437.705 158.118 442.028C164.501 446.398 170.698 449.985 175.074 456.591C176.77 459.153 174.468 462.012 171.836 462.234C163.212 462.961 156.179 458.718 149.374 453.923C142.521 449.094 136.033 443.711 130.128 437.758C119.581 427.127 110.794 414.817 104.227 401.375L103.324 401.545C88.53 404.267 72.1264 404.253 62.5224 390.726C58.2504 384.709 57.7744 377.659 58.8804 370.569C59.9574 363.663 62.4804 357.193 58.5804 350.744C55.0404 344.89 50.0014 340.069 47.9804 333.352C46.0274 326.862 47.1334 319.98 50.0484 313.974C55.6264 302.486 67.1354 296.819 79.1834 294.977C64.6754 286.242 59.8104 268.373 59.7854 252.041C59.7534 231.587 66.9834 210.917 75.1804 192.464C90.6434 157.654 116.731 126.982 148.565 106.093C178.108 86.7088 213.722 76.2628 249.102 76.5768C258.19 71.1298 267.521 66.0868 277.017 61.3938L279.047 60.3988C293.591 53.3301 308.1 47.6328 324.194 45.0538ZM75.8454 328.249C77.6064 323.952 85.3474 323.966 89.0014 324.111L89.6728 324.142C100.791 324.725 119.22 329.263 121.497 341.695C121.878 343.772 120.546 346.511 118.017 346.264C114.358 345.907 111.583 345.239 108.577 343.085L107.056 341.998C104.525 340.199 102.006 338.476 99.2314 336.997C95.8294 335.185 92.3214 333.876 88.6184 332.829C87.1004 332.401 85.5714 331.954 84.0464 331.551C83.0374 331.285 82.0214 331.051 80.9994 330.848C79.8004 330.109 79.0204 330.567 78.6614 332.22C79.1324 332.382 79.0894 333.2 78.5364 333.141C76.3414 332.908 74.9904 330.333 75.8454 328.249ZM111.175 310.21C111.175 310.159 111.239 310.149 111.264 310.18L111.275 310.21V314.818C111.275 314.87 111.211 314.881 111.185 314.849L111.175 314.818V310.21Z'
                fill={outlineColor}
            />
        </>
    );
};

NoHairTwo.config = NoHairTwoConfig;
export default NoHairTwo;