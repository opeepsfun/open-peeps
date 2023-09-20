import React from "react";

export const MediumBangsConfig = {
    name: "Medium Bangs",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        }
    ],
    width: 579,
    height: 567,
    viewBox: "0 0 579 567"
};

const MediumBangs = ({ outlineColor = "#000", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M402.602 145.163C287.512 140.963 177.54 218.312 140.513 327.641C137.822 336.217 146.195 344.228 154.643 342.778C146.003 386.284 164.886 444.844 214.075 451.016C224.15 452.287 234.278 451.555 244.367 452.48C253.36 453.304 302.315 480.844 320.648 487.296C359.243 500.778 456.364 498.309 494.999 487.296C496.406 490.496 526.411 367.45 533.243 329.3C535.735 312.771 512.967 300.533 514.646 283.5C516.803 261.62 542.395 234.943 534.555 214.113C513.887 161.097 453.906 146.304 402.602 145.163Z'
                fill={skinColor}
            />
            <path
                d='M345.445 48.7876C350.615 49.2176 355.815 49.9476 360.925 50.9076C376.455 48.3676 392.525 51.1876 407.585 56.0776C442.855 67.5276 476.805 87.4076 503.385 113.358C517.065 126.718 528.255 142.108 535.145 160.008C538.645 169.088 540.615 178.778 541.185 188.488L541.248 189.664C541.408 192.886 541.481 196.749 541.096 200.576C542.327 208.301 543.424 216.089 543.507 223.902C543.546 227.521 543.311 231.134 542.871 234.723L543.022 235.064C542.384 239.349 541.622 243.616 540.754 247.861L540.537 248.142C540.418 249.005 540.281 249.866 540.152 250.727C539.68 252.909 539.187 255.086 538.664 257.255C537.532 261.952 536.279 266.618 534.929 271.256C534.693 272.069 534.92 272.71 535.363 273.131C534.379 276.661 533.304 280.165 532.112 283.631C532.697 286.664 533.288 289.696 533.915 292.718C537.185 308.438 539.955 324.258 543.675 339.888C551.215 371.608 562.675 402.818 565.825 435.428C568.275 460.718 564.205 488.368 548.485 509.028C534.935 526.828 514.555 537.338 492.545 540.138C482.015 541.488 471.215 540.868 460.915 538.208L459.792 537.912C454.633 536.523 448.069 534.348 443.275 530.848C438.075 529.018 433.165 525.638 430.205 522.338C426.165 517.828 421.755 510.118 422.855 503.708C416.845 504.198 410.795 504.338 404.845 504.318C390.185 504.288 375.395 503.128 361.295 498.868C348.715 495.068 334.055 488.718 326.615 477.258C326.265 476.718 326.845 475.938 327.455 476.148C333.465 478.258 339.085 481.108 345.285 482.718C351.385 484.298 357.485 485.788 363.775 486.438C376.072 487.705 388.554 487.534 400.893 486.926L405.129 486.706C418.331 485.998 431.977 484.991 444.325 480.048C449.17 478.11 453.654 475.404 457.742 472.189L458.385 471.678C460.575 469.898 462.835 468.398 465.135 466.978C465.465 466.558 465.795 466.138 466.125 465.708C471.355 458.998 476.975 452.528 481.685 445.438C491.045 431.368 494.655 416.748 495.145 399.968C495.658 382.256 495.717 364.519 495.928 346.802L496.005 340.898C496.275 320.638 496.315 300.308 497.875 280.098C498.593 270.708 499.617 261.363 501.189 252.085L501.535 250.098L504.075 235.788C504.686 232.341 505.043 228.789 505.824 225.357C504.946 223.917 503.931 222.531 502.754 221.211C501.669 219.994 500.567 218.813 499.467 217.64L498.674 216.94C496.862 215.323 495.305 213.779 493.846 211.555L493.494 211.005C491.927 209.114 490.449 207.136 489.143 204.963L488.902 204.541C488.576 204.132 488.252 203.722 487.915 203.318C486.868 202.059 485.77 200.87 484.635 199.731C480.654 207.421 475.023 214.082 467.051 218.246C464.168 219.752 460.651 218.462 459.706 215.258C457.321 207.17 453.699 199.649 448.906 192.838C440.903 206.156 428.213 216.573 413.258 221.656C409.521 222.926 406.23 219.006 407.108 215.505C409.806 204.744 410.343 193.801 408.758 182.983C403.113 187.017 397.291 190.816 391.313 194.338C378.01 204.621 363.915 213.875 348.411 220.52C344.829 222.056 339.438 219.475 341.066 214.874C342.436 211 343.563 207.061 344.284 203.016L344.444 202.081C344.449 202.053 344.451 202.025 344.455 201.996C308.548 251.527 221.474 299.259 214.79 299.718L214.609 299.72C218.783 303.707 222.152 308.633 224.356 314.294C226.67 320.239 217.232 322.828 214.791 317.143L214.713 316.953C210.958 307.307 201.67 300.393 191.565 298.758C185.457 299.867 179.684 302.812 175.745 307.278C167.995 316.068 167.925 326.668 173.215 336.668L173.991 338.125C176.855 343.467 179.871 348.821 181.485 354.688C183.455 361.888 181.965 369.188 183.255 376.378L183.325 376.759C183.936 379.956 185.257 383.593 189.065 382.718C189.359 382.65 189.643 382.559 189.926 382.462C190.729 383.102 191.695 383.631 192.899 383.982C195.847 384.841 199.104 384.424 202.038 383.73C204.872 383.06 207.624 382.009 210.273 380.779C210.566 381.503 210.747 382.26 210.765 382.988C210.855 386.708 209.315 389.768 206.945 392.258C210.725 397.038 213.955 402.298 217.595 407.178C222.825 414.178 228.175 421.028 233.865 427.658C239.785 434.568 246.235 441.098 252.925 447.268C257.615 451.588 265.365 456.208 268.305 462.478C271.685 463.528 274.555 466.118 275.605 470.378C277.515 478.098 278.075 496.188 276.575 504.038C275.085 511.818 269.405 516.668 263.125 520.768C261.385 521.908 259.415 521.788 257.815 520.938C256.405 522.308 254.815 523.568 252.995 524.688C246.275 528.838 238.465 530.348 230.725 531.218C220.275 534.558 209.005 535.438 197.865 533.358C194.225 533.788 190.585 534.178 186.935 534.498C149.595 537.748 111.635 534.978 75.2147 526.088C58.5047 522.008 42.7257 514.593 28.0247 505.068C2.68666 488.651 -8.03734 442.571 6.66466 398.518L7.82877 395.044C14.4537 375.364 21.598 355.788 31.1747 337.428L32.318 335.244C41.1207 318.498 50.8038 301.77 63.6647 287.798C70.1047 280.808 77.5847 274.458 86.0347 270.018C89.2427 268.334 92.9877 267.166 96.6477 265.841L96.7224 264.925L96.8017 264.01C97.0427 261.076 97.3497 258.147 97.7457 255.225C99.2237 244.297 101.31 233.53 104.273 222.899C107.24 212.254 110.888 201.788 115.277 191.644C122.599 174.72 131.795 158.666 142.41 143.602C143.168 142.046 143.937 140.496 144.725 138.958C153.675 121.468 165.265 104.788 180.215 91.8776C197.375 77.0576 218.045 67.8576 239.615 61.3976C261.985 54.7076 285.325 50.1276 308.635 48.5876C320.905 47.7776 333.195 47.7676 345.445 48.7876ZM181.845 329.768C193.075 322.418 208.375 327.457 214.065 339.398C218.175 348.048 204.585 352.918 202.435 344.298C200.295 335.658 191.105 329.468 182.275 330.788C181.665 330.888 181.285 330.128 181.845 329.768Z'
                fill={outlineColor}
            />
        </>
    );
};

MediumBangs.config = MediumBangsConfig;
export default MediumBangs;
