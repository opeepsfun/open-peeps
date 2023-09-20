import React from "react";

export const ShavedThreeConfig = {
    name: "Shaved Three",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        }
    ],
    width: 504,
    height: 598,
    viewBox: "0 0 504 598"
};

const ShavedThree = ({ outlineColor = "#000", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M383.42 82.0238C329.951 66.3308 146.067 82.4168 141.52 85.8158C134.079 91.9988 97.8839 111.617 92.2519 116.096C41.3269 170.07 89.8746 250.223 86.1386 315.335C86.3766 338.431 76.5346 359.519 72.0106 381.738C70.1006 393.382 70.5216 405.426 76.5906 415.88C87.2606 434.56 109.794 438.347 128.12 445.879C137.239 449.805 145.759 455.372 153.569 461.463C206.153 507.98 235.423 539.834 312.15 529.34C312.542 533.003 315.787 536.602 319.81 534.965C329.23 531.129 338.583 527.06 348.085 523.424C350.116 528.318 355.95 529.715 359.902 525.393L359.925 525.424C377.514 511.156 388.7 491.647 397.008 470.762C402.822 458.713 407.583 446.141 411.221 433.195C411.632 431.73 411.578 430.421 411.206 429.294C427.992 371.451 434.204 310.487 429.785 250.43C428.89 238.039 426.55 225.484 427.125 213.041C427.645 201.799 432.488 191.165 436.18 180.695C455.218 136.186 426.116 96.0378 383.42 82.0238Z'
                fill={skinColor}
            />
            <path
                d='M390.145 9.7561L390.715 9.31422C396.88 4.47779 402.693 -1.86077 411.385 0.516101C418.515 2.4661 422.115 8.3661 423.645 15.4961C425.815 13.2261 427.925 10.8761 429.985 8.4461C435.585 1.8461 448.095 5.2661 449.765 13.6761C453.145 30.6161 453.315 47.8561 450.025 64.8261C449.525 67.3961 448.935 69.9561 448.245 72.4861C451.995 67.8161 455.485 62.9461 458.615 57.8161C462.005 52.2461 469.665 55.0061 470.195 60.9561C470.335 62.4961 470.415 64.0561 470.435 65.6261C472.825 66.4661 474.475 68.9261 473.845 71.9461C470.365 88.5661 465.955 104.956 460.655 121.066C469.175 116.546 478.725 113.866 487.715 117.056C501.995 122.136 505.395 137.716 502.605 151.126C499.095 167.986 488.055 182.096 473.815 191.346C472.125 193.886 470.455 196.446 468.865 199.056C468.835 206.426 467.495 213.776 464.795 220.606C461.755 228.276 456.395 234.906 449.795 239.946C447.476 244.997 441.332 248.687 435.938 247.664L435.655 247.606L435.645 247.616C437.025 252.556 438.215 257.546 439.245 262.546C447.22 301.284 443.182 341.608 435.908 380.127L435.675 381.356C429.145 415.636 421.545 451.136 406.775 482.966C393.415 511.746 370.765 537.056 338.395 543.336C300.315 550.726 258.165 539.016 225.415 519.486C213.545 512.406 224.425 493.746 236.245 500.946C253.305 511.326 271.835 518.576 291.435 522.396C309.755 525.956 330.245 527.166 347.815 519.786C372.285 509.506 386.825 484.396 396.025 460.756C401.445 446.806 405.505 432.406 409.285 417.946C414.155 399.356 418.695 380.646 422.105 361.726C428.455 326.436 430.515 289.786 423.795 254.396C421.655 243.106 418.625 231.746 414.675 220.826C414.055 220.056 413.465 219.196 412.935 218.256C408.805 211.016 405.955 202.786 402.885 194.956C400.195 190.286 397.255 185.796 394.135 181.406C389.47 177.821 385.027 173.988 380.957 169.806C392.778 162.152 403.209 152.57 410.714 140.364C411.952 138.351 411.166 136.427 409.699 135.342C403.706 142.839 395.948 149.188 387.788 154.813C383.608 158.393 379.106 161.609 374.388 164.515C371.017 165.182 367.609 165.64 364.305 166.016C354.895 167.086 345.435 166.686 336.075 165.436C315.835 162.736 230.237 139.162 194.155 148.326C186.639 150.235 183.095 156.976 179.115 163.306C175.663 168.812 171.272 173.37 166.004 177.122L165.415 177.536C155.115 184.666 134.406 207.222 125.701 227.354C114.461 253.346 103.665 331.236 108.635 331.906C121.635 333.666 128.835 340.506 139.425 347.846C140.125 348.326 139.715 349.626 138.815 349.296C131.825 346.776 124.265 345.286 116.935 344.066C110.305 342.956 103.325 342.756 96.9251 345.126C87.1051 348.766 82.3151 356.996 80.3451 366.276C79.5751 369.906 79.2351 373.696 79.1951 377.446L79.1895 378.534C79.1947 390.357 81.3993 403.464 89.9851 412.186C93.6351 415.896 98.5851 418.396 103.765 419.086C109.435 419.846 112.935 417.286 118.145 415.956C124.145 414.426 128.825 418.376 128.265 423.526C129.535 424.636 130.765 425.806 131.985 426.996L131.986 427.001L131.995 427.006C132.795 427.366 133.555 427.846 134.245 428.426C135.375 429.386 136.325 430.436 137.085 431.566C138.775 431.896 140.395 432.836 141.725 434.556C144.465 438.086 146.995 441.656 149.345 445.296C153.555 449.766 157.745 454.246 161.875 458.796C166.847 464.265 171.686 469.858 176.556 475.419L178.995 478.196C181.625 481.186 184.245 484.176 186.865 487.176L187.647 488.057C190.282 491.008 192.302 493.187 192.585 497.436C192.785 500.586 189.395 502.726 186.585 502.006C182.253 500.889 180.241 497.488 177.646 494.114L173.725 489.085L170.035 484.346C168.205 481.986 166.355 479.636 164.515 477.286C163.965 481.616 159.385 485.106 155.205 485.296L154.231 485.334C144.415 485.66 132.486 484.275 125.015 477.356C121.655 480.746 117.475 483.416 112.325 485.016C100.625 488.656 88.6651 482.206 83.9351 472.396C74.7651 476.326 64.4051 477.116 54.4951 474.226C48.7792 472.551 46.8024 465.427 50.7855 461.067L50.9651 460.876L51.0111 460.824C50.1891 459.755 49.7371 458.447 49.6641 457.022C49.5751 455.292 50.8361 453.458 50.5761 451.843C49.5841 445.684 39.5401 450.247 36.3481 451.581C35.7381 451.835 35.1661 451.956 34.6321 451.975C29.6971 453.412 24.3301 446.928 26.9151 441.576C32.7051 429.616 38.3551 417.566 44.2151 405.626C43.4751 405.876 42.7151 406.106 41.9651 406.296C31.4351 408.996 18.6651 403.816 21.0951 391.126C21.6551 388.146 24.3551 386.106 27.0351 385.186C32.2551 383.386 36.1751 384.686 40.1951 383.006C44.7251 381.126 49.4551 377.676 53.4351 374.426C57.6851 370.966 61.3551 367.076 64.6051 362.856C65.9051 356.726 68.1551 350.866 71.7551 345.826C71.9751 345.526 72.1951 345.226 72.4251 344.936C49.3383 339.432 52.3614 316.727 42.1778 296.605L41.3174 294.937C34.4009 281.478 28.3669 266.303 31.8551 250.976C32.4751 248.266 33.3751 245.676 34.5351 243.256C32.6851 243.486 30.8251 243.696 28.9751 243.906C24.7251 244.386 20.4051 238.906 22.0951 234.876C22.9851 232.766 23.9651 230.726 25.0251 228.746C27.9651 223.286 31.5751 218.326 35.8251 213.846C28.6851 213.656 21.5351 213.656 14.4751 212.836C7.80511 212.066 0.795105 208.416 1.0005 200.726C1.20711 193.394 7.64011 187.844 13.6051 184.267C19.4761 176.458 26.9231 169.968 35.3461 165.145C33.6798 164.771 31.9915 164.493 30.2755 164.322L29.4151 164.246C24.6051 163.866 20.2851 162.546 15.9251 160.536C12.0251 158.736 12.0851 153.276 14.6351 150.526C22.8791 141.614 35.2311 144.516 44.8421 149.623C44.1729 148.774 43.4399 147.956 42.6412 147.173L42.1541 146.708C37.4321 142.311 44.5191 135.255 49.2251 139.637C50.7121 141.022 52.0441 142.527 53.2321 144.122L53.3451 143.886C59.5628 131.274 68.6568 119.986 79.4161 110.94L81.9447 108.838C101.346 92.6313 107.333 84.9499 133.135 87.3361C132.035 82.6491 132.143 77.3766 132.391 73.0413L132.425 72.4561C133.415 56.1561 139.425 36.6461 155.325 29.3261C159.455 27.4361 164.135 30.5261 163.035 35.2561C162.265 38.6061 161.325 41.8661 160.155 45.0361C163.625 41.3861 167.345 37.9761 171.285 34.8361C187.345 22.0361 208.805 11.0261 229.915 14.6261C241.515 16.6161 250.615 23.8961 260.325 29.9761C270.085 36.0961 280.985 39.7261 292.415 41.0361C308.385 42.8761 324.415 41.0261 340.205 38.1061C351.055 33.3761 361.585 27.8361 371.865 21.8661C378.185 18.1961 384.335 14.1861 390.145 9.7561ZM106.606 363.786C109.986 362.916 113.776 362.926 117.166 363.776C125.916 365.976 134.056 373.296 134.566 382.526C134.796 386.696 131.436 390.686 127.536 391.756C123.116 392.976 119.316 390.816 116.736 387.356C113.966 383.656 113.276 379.646 109.886 376.286L109.104 375.525C106.222 372.769 101.865 369.207 97.8656 369.846C97.2756 369.936 96.8356 369.136 97.4356 368.816C100.696 367.036 102.836 364.746 106.606 363.786ZM152.055 320.316C153.598 319.056 155.638 320.534 154.912 322.346L154.855 322.476C153.025 326.336 155.175 330.866 157.395 334.096C159.305 336.886 155.695 339.536 153.155 338.336C146.015 334.946 146.385 324.916 152.055 320.316ZM178.155 204.346C178.025 203.406 179.275 203.016 179.595 203.946C184.925 219.416 186.455 233.116 185.585 249.476L185.503 250.928C184.562 266.686 181.802 283.364 172.265 296.306C170.055 299.296 165.535 297.536 166.265 293.776C169.195 278.726 174.825 264.436 177.015 249.206C179.305 233.286 180.335 220.276 178.155 204.346ZM128.375 260.576C129.155 256.446 135.505 252.196 138.715 256.346C139.795 257.756 138.525 259.486 137.225 260.006C136.005 260.486 134.915 259.826 133.715 260.066C132.745 260.262 132.035 260.867 131.563 261.695L131.465 261.876C130.525 263.676 128.045 262.336 128.375 260.576ZM125.776 227.676C128.056 223.456 133.306 220.766 137.796 223.396C139.276 224.266 138.696 226.796 136.896 226.716L135.829 226.673C132.628 226.556 129.427 226.621 126.736 228.646C126.136 229.096 125.476 228.246 125.776 227.676ZM133.792 112.428C121.003 106.678 108.284 111.869 97.8411 119.965C96.9771 120.635 96.5581 121.417 96.4661 122.203C103.438 119.488 110.861 117.708 117.957 116.239C123.759 115.037 129.616 114.226 135.48 113.906C135.152 113.317 134.613 112.797 133.792 112.428Z'
                fill={outlineColor}
            />
        </>
    );
};

ShavedThree.config = ShavedThreeConfig;
export default ShavedThree;