import React from "react";

export const DreadsTwoConfig = {
    name: "Dreads Two",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        }
    ],
    width: 517,
    height: 581,
    viewBox: "0 0 517 581"
};

const DreadsTwo = ({ outlineColor = "#000", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M280.041 89.2596C336.821 89.2596 395.551 133.272 416.365 161.357C440.431 193.832 459.416 349.729 450.51 402.628C441.604 455.527 397.365 513.184 320.566 513.184C243.768 513.184 197.03 503.724 195.156 489.984C193.282 476.245 144.502 399.765 144.502 399.765C144.502 399.765 94.6124 385.733 94.4174 352.214C94.2225 318.695 121.152 306.5 121.152 306.5C121.152 306.5 111.55 174.221 135.732 139.782C159.914 105.342 223.26 89.2596 280.041 89.2596Z'
                fill={skinColor}
            />
            <path
                d='M241.758 3.84521C249.394 -5.14149 262.863 3.35301 262.558 13.1732C265.607 13.9984 269.203 16.8455 270.59 20.5574C273.591 20.3628 276.617 20.9591 279.342 22.5179L279.917 21.81C289.362 10.2788 301.861 0.38367 314.758 8.87552C318.269 11.1865 319.84 15.0059 319.066 19.1457L319.007 19.4388L319.292 18.1606C319.583 16.9461 319.149 19.3761 318.986 19.8903L318.966 19.9486C318.625 20.8144 318.285 21.2504 317.977 21.905C331.181 12.5239 351.287 18.0152 340.693 36.1749L345.001 34.4946C359.907 28.7342 378.441 22.5484 392.03 32.9053C398.103 38.7483 391.362 46.5393 385.172 48.428L386.236 48.2501C398.113 46.2333 422.891 41.2484 426.43 56.7092C427.704 62.2723 423.991 66.338 419.307 68.5763C429.218 68.5399 438.993 70.1736 447.569 75.0104C455.726 80.8076 449.133 90.401 440.602 89.9827C443.247 93.2533 444.125 98.7883 441.571 102.321C446.419 103.594 450.892 105.231 455.014 107.782L456.147 107.928C464.388 108.956 473.789 109.568 478.322 117.661C484.994 135.221 461.237 134.522 451.04 128.354C451.645 129.337 452.094 130.411 452.345 131.558L455.65 132.485C468.116 135.953 482.224 139.783 490.25 150.275C493.929 156.312 488.809 166.573 481.117 164.739C501.961 174.665 493.972 200.815 473.588 187.212C472.634 188.094 471.474 188.75 470.26 189.039L474.561 191.371C485.486 197.352 498.625 205.541 496.344 219.12C494.174 226.307 484.205 224.993 479.138 222.243C487.991 229.856 496.345 238.098 503.933 247.01L506.033 249.508C511.935 256.581 522.201 269.602 511.08 276.406C497.37 283.384 490.536 262.778 482.562 255.423C488.938 270.425 468.21 280.888 460.975 265.777C459.76 265.99 458.538 266.012 457.34 265.851C463.578 272.463 480.448 317.703 459.464 307.783C456.122 304.247 453.189 300.383 450.494 296.327C453.862 322.247 456.326 348.29 457.92 374.351L458.487 383.798C459.066 393.597 459.505 403.438 458.404 413.205C457.133 424.575 453.864 435.245 448.914 445.545C444.353 455.045 438.473 463.845 431.744 471.935C428.144 476.265 424.324 480.475 419.624 483.644C415.883 486.165 411.513 487.825 407.303 489.425C400.454 496.265 391.664 501.435 383.074 505.565C368.914 512.355 353.564 516.105 338.034 517.985C322.154 519.894 306.114 519.435 290.364 516.705C275.314 514.105 259.183 507.455 249.914 494.785C249.114 493.695 250.603 492.665 251.583 493.115C278.484 505.565 308.713 508.815 338.034 504.885C351.713 503.055 365.173 499.275 377.664 493.405C388.204 488.455 397.093 481.255 406.553 474.735C408.394 472.285 410.253 469.875 412.374 467.635L415.683 464.165C418.156 461.559 420.585 458.917 422.793 456.065C429.614 447.275 435.263 437.305 438.994 426.815C446.25 406.396 444.288 384.23 443.005 362.95L442.894 361.075C441.574 338.315 439.423 315.635 436.444 293.035C435.205 283.63 433.827 274.241 432.317 264.872C429.897 260.935 427.313 257.126 424.42 253.558C426.774 262.706 418.623 275.422 408.628 269.385C397.183 259.601 397.736 243.809 388.144 231.828C378.201 216.469 309.593 186.597 289.195 182.402C292.481 187.183 298.484 190.513 299.884 196.155C324.969 218.319 284.078 230.117 271.309 198.531C271.592 209.047 272.658 219.472 274.997 229.736C278.404 239.162 281.079 266.479 263.994 258.236C255.815 260.598 249.579 253.632 248.553 245.772C242.645 263.533 248.232 291.909 237.399 304.999C234.077 308.442 228.944 306.149 227.217 302.218C217.199 299.594 218.053 287.915 216.838 279.555C207.701 312.876 196.265 336.005 194.69 370.765C201.76 380.83 186.252 388.232 179.596 380.166C170.254 366.669 178.868 348.218 181.066 333.444C178.438 333.308 175.838 332.142 173.668 329.593C172.485 334.23 173.164 340.339 173.563 345.368C167.639 368.528 145.118 353.693 146.05 334.907C145.077 340.207 144.341 345.561 143.873 350.954C148.223 355.958 151.447 361.948 153.353 368.305C154.725 372.899 150.055 375.653 146.491 374.986C144.594 381.457 136.369 386.126 130.959 379.941C125.612 374.533 124.683 366.718 124.256 358.937C123.512 358.146 123.058 357.11 123.133 355.855C123.202 354.676 123.491 353.676 123.951 352.834C123.861 351.244 123.747 349.683 123.573 348.174C119.434 361.05 122.127 374.542 122.489 387.729C129.8 391.846 138.146 393.605 146.529 395.343L147.744 395.595C150.333 396.135 151.154 399.995 149.204 401.615C154.394 406.695 158.874 412.755 163.244 418.345C169.047 425.761 174.596 433.471 179.995 441.198L183.163 445.737C192.418 458.919 205.214 476.777 199.484 493.015C198.704 495.245 195.444 496.045 194.173 493.705C190.003 486.005 187.673 477.525 183.713 469.735C179.824 462.095 174.984 455.015 170.183 447.935L167.414 443.832C162.804 436.98 158.236 430.053 154.003 422.995L151.055 418.108C148.286 413.493 145.544 408.724 143.503 403.765C136.233 405.517 128.626 404.26 121.654 401.229L121.565 401.713L121.388 402.585C120.393 406.776 114.61 409.642 110.916 406.9C102.074 400.234 98.4738 390.312 97.5357 379.703C95.7536 376.706 94.2429 373.541 93.011 370.267C92.4301 376.8 89.9089 383.135 82.142 382.938C68.6633 381.832 67.3409 369.102 70.9851 356.441C55.0284 361.314 53.1586 338.749 58.1943 326.857C56.3245 326.298 54.5931 325.184 53.6021 323.684L52.7752 325.134C49.7084 330.443 46.232 335.598 41.3871 338.354C34.6179 342.203 24.776 337.435 25.2259 328.958C26.6751 315.142 38.7853 304.62 46.1576 293.548C44.8446 293.733 43.4803 293.686 42.1422 293.436C27.4071 301.656 20.3736 282.31 25.5635 271.102C29.3671 261.032 36.2507 252.372 43.6292 244.738L41.4662 246.03C37.5638 248.328 33.2106 250.547 28.9204 249.645C0.849266 268.09 -8.36445 237.069 23.1358 227.373L23.1254 227.229C19.9636 224.18 18.5919 219.354 21.05 214.534C9.49565 218.593 -7.00011 209.41 3.18468 196.861C9.82808 190.605 17.6649 185.224 26.3532 182.409C25.9201 180.106 25.7796 177.762 25.9589 175.404L25.4405 175.475C19.9555 176.264 13.1929 178.504 9.81025 172.598C8.09461 169.624 8.29595 164.722 11.1085 162.41C20.792 154.448 31.8399 147.826 43.841 145.141C44.2815 143.68 44.7408 142.227 45.2263 140.782C34.9891 140.592 23.4945 126.994 35.2544 119.289C45.5923 114.022 56.2427 110.634 67.9156 110.948C61.0719 104.199 65.1125 91.9671 74.2129 90.0867C68.2533 77.3965 82.9768 70.849 93.9596 72.8501C93.5559 67.2121 96.575 60.9278 102.383 59.5126C99.3362 41.6714 118.228 43.3592 130.065 47.5883C126.101 40.7098 130.175 32.6181 137.167 30.2059C148.619 27.6138 159.575 38.5214 168.294 45.2105C165.321 38.2321 167.829 31.7981 174.91 29.0175C182.204 26.1632 190.063 31.6794 196.15 35.4277C199.46 31.2715 205.111 29.9166 210.18 30.1737C210.722 28.6128 211.516 27.311 212.535 26.2818C212.507 16.6645 228.881 11.3771 234.596 20.3357C235.568 14.1067 238.131 8.11275 241.758 3.84521ZM446.613 178.279L446.802 179.315C447.044 179.529 447.272 179.755 447.505 179.975C448.235 180.147 448.939 180.329 449.607 180.516C448.634 179.728 447.632 178.998 446.613 178.279ZM459.253 153.04L459.031 153.348C458.993 153.399 458.954 153.449 458.913 153.497C459.531 153.731 460.146 153.97 460.759 154.216L461.678 154.592L462.002 154.735C461.089 154.162 460.174 153.595 459.253 153.04ZM311.855 25.9831L311.303 26.1201C311.127 26.1629 310.96 26.2027 310.808 26.2391C310.751 26.2537 310.699 26.2599 310.648 26.2807L310.792 26.2495C310.531 26.4483 310.188 26.6824 309.903 26.8697C310.183 26.8468 310.462 26.8198 310.743 26.8042C311.11 26.5295 311.481 26.2558 311.855 25.9831Z'
                fill={outlineColor}
            />
        </>
    );
};

DreadsTwo.config = DreadsTwoConfig;
export default DreadsTwo;