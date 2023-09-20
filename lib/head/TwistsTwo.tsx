import React from "react";

export const TwistsTwoConfig = {
    name: "Twists Two",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        }
    ],
    width: 480,
    height: 567,
    viewBox: "0 0 480 567"
};

const TwistsTwo = ({ outlineColor = "#000", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M414.074 252.065C410.362 222.444 398.702 190.995 386.439 163.38C358.865 104.994 295.738 96.9554 239.147 84.9174C183.303 76.7874 124.168 69.4464 69.1657 85.6674C38.2447 93.2424 26.1677 130.068 31.0477 159.129C33.8327 177.238 42.0757 194.377 49.1047 211.16C63.0757 245.626 71.9397 282.525 71.9547 319.841C70.9957 344.227 67.5537 372.061 95.5777 382.39C122.245 395.651 124.498 431.599 157.889 451.995C171.391 479.344 208.17 481.751 234.641 488.095C251.372 491.297 268.292 493.654 285.258 495.176C334.384 501.471 373.684 487.236 399.4 443.474C416.609 416.841 429.424 386.089 426.258 353.811C423.105 319.821 417.852 286.009 414.074 252.065Z'
                fill={skinColor}
            />
            <path
                d='M239.571 13.9589C242.375 10.7809 246.695 11.8709 249.317 14.3839C251.024 14.8869 252.678 15.6349 254.24 16.6249C257.77 16.1719 261.471 16.1719 264.933 16.2989C265.773 15.8279 266.673 15.4089 267.653 15.0489C274.653 12.4899 280.852 13.7899 285.965 17.2159C288.428 14.8859 291.535 13.4239 295.507 13.6449C299.052 13.8429 301.578 15.5109 303.743 17.7079C305.902 14.5949 309.392 12.3739 313.74 12.0649C319.817 11.6329 325.659 14.0699 330.501 17.8429C333.322 14.6069 337.168 12.7469 341.454 12.7289C344.274 12.2169 347.25 12.4189 349.939 13.2309C353.843 14.4099 357.271 16.6189 360.001 19.4859C364.32 15.3499 369.607 12.3739 375.703 12.8079C383.593 13.3779 390.133 19.1789 393.173 26.3189C398.513 28.4579 403.443 31.5089 407.563 35.8589C407.783 36.0879 407.993 36.3279 408.213 36.5689C410.433 37.3879 412.523 38.5489 414.363 40.0779C420.193 44.9289 421.493 51.9489 419.563 58.8279C419.833 59.9289 420.063 61.0489 420.273 62.1679C425.733 62.9979 430.693 66.1489 433.513 71.2789C437.373 78.3189 436.613 87.5979 432.433 94.3189C430.636 97.2099 428.355 99.6459 425.793 101.776C428.69 108.356 427.3 116.208 422.629 121.53C421.491 123.365 420.094 125.021 418.522 126.52C420.257 133.323 417.171 140.342 411.011 143.977L410.484 145.296C410.395 145.515 410.305 145.733 410.213 145.949C410.145 146.229 410.061 146.5 409.978 146.773C409.831 149.187 409.036 151.556 407.458 153.788C404.227 158.362 400.223 161.345 398.099 166.685L397.887 167.246C396.974 169.773 394.026 171.556 391.514 170.776C405.461 199.417 412.773 231.286 417.793 262.518C420.296 278.099 422.228 293.734 423.794 309.429L425.331 325.058C426.682 338.951 427.885 352.889 427.893 366.828C427.913 398.359 418.893 428.688 399.533 453.779C381.223 477.498 355.313 494.688 326.043 501.458C295.823 508.438 260.373 505.688 233.273 489.708C225.283 485.009 232.283 473.708 240.413 477.489C255.803 484.649 271.443 489.969 288.503 491.159C305.133 492.328 321.803 490.248 337.573 484.808C363.663 475.799 385.863 456.929 400.133 433.429C407.163 421.848 412.253 409.279 414.963 395.998C418.336 379.445 417.828 362.336 416.588 345.571L416.503 344.429C414.053 312.128 410.823 279.628 405.603 247.649C400.989 219.37 393.894 191.664 384.683 164.571C381.075 161.395 377.039 158.767 372.72 156.771C341.093 155.45 309.409 155.836 277.823 158.018C250.885 159.891 224.077 163.06 197.472 167.678L194.623 168.179C188.733 169.228 182.193 169.828 176.643 172.199C171.883 174.239 169.953 178.159 168.753 182.978C165.733 195.168 165.273 208.509 164.763 221.009C164.263 233.228 165.393 245.549 164.413 257.728C163.583 267.918 160.973 278.348 153.423 285.719C149.473 289.578 144.613 291.688 140.053 294.618C137.103 296.509 135.853 298.458 136.233 301.958C137.053 309.618 143.223 319.268 136.293 325.828C135.073 326.978 132.963 327.128 131.763 325.828C128.903 322.719 124.953 320.348 121.563 317.838C120.143 316.799 121.323 314.779 122.933 315.498C125.053 316.449 127.213 317.569 129.423 318.549C124.543 314.529 117.603 312.558 111.823 311.388C108.913 310.808 105.853 310.638 102.823 310.909C100.583 311.978 98.2927 312.969 96.0027 313.938C93.0927 315.159 90.1527 316.268 87.1927 317.319C76.9227 325.688 72.0227 339.299 74.1627 352.609C75.3327 359.958 78.7227 367.949 85.1127 372.239C92.6827 377.319 102.823 375.138 111.003 378.909C118.663 382.438 123.323 389.569 126.813 396.949L128.268 400.021C131.507 406.824 134.837 413.447 139.263 419.638C144.383 426.808 150.653 433.248 157.493 438.779C160.811 441.456 164.348 443.863 168.003 446.056L169.003 446.649C172.703 448.819 175.353 450.888 175.603 455.478C175.683 457.078 174.673 458.538 173.373 459.368C167.773 462.918 162.203 458.478 157.543 455.378C152.513 452.038 147.703 448.279 143.253 444.179C134.793 436.399 127.473 427.159 121.843 417.128C117.553 409.489 115.113 398.739 108.333 392.819C104.193 389.208 98.3427 389.179 93.1727 388.518C88.3627 387.899 83.8127 386.899 79.5327 384.529C62.1227 374.859 57.2027 351.449 61.3327 333.359C62.0327 330.308 63.0127 327.338 64.2227 324.478C57.7427 325.558 50.4627 318.859 53.0927 312.098C53.2927 311.588 53.5227 311.109 53.7427 310.618C49.4727 307.808 46.1027 303.549 44.5027 297.978C43.6827 295.098 43.5627 292.188 43.9927 289.378C41.9227 287.989 40.2127 286.078 39.1127 283.728C35.6727 282.138 32.6227 279.759 30.8027 276.359C28.2827 271.668 28.6027 267.348 30.5227 263.458C30.2527 262.969 29.9927 262.469 29.7427 261.958C22.6927 257.489 17.7727 249.788 18.3327 241.248C18.5127 238.418 19.2127 235.868 20.2927 233.569C20.2027 233.279 20.1127 232.978 20.0327 232.688C14.1327 229.688 9.25267 224.759 7.51267 218.179C5.77267 211.558 7.82267 204.958 11.9227 199.878C5.92267 195.489 2.31267 189.359 4.50267 180.088C5.39267 176.319 7.18267 172.888 9.60267 169.998C9.59267 169.909 9.57267 169.819 9.55267 169.728L8.99132 169.293C1.58427 163.448 -2.67367 155.999 1.87267 146.838C3.91267 142.719 6.82267 139.848 10.2427 137.958L10.4127 137.418C7.96267 132.168 7.13267 126.338 8.82267 120.208C10.2027 115.159 13.4727 111.138 17.6527 108.469C17.3727 106.208 17.4127 103.799 17.8627 101.188C18.6127 96.7789 20.8027 92.9289 24.0027 90.1989C24.1227 89.6179 24.2727 89.0489 24.4427 88.4779C25.5227 84.9889 27.5427 81.1989 29.8827 78.3879C31.8127 76.0579 33.9727 75.2079 36.6127 75.1179C36.4527 72.9689 36.5627 70.7879 37.0027 68.5779C38.3527 61.7589 42.6927 55.3479 49.1227 52.4379C51.7627 51.2479 54.5427 50.8989 57.2227 51.1879C59.5027 46.3879 63.9527 42.9089 69.4227 42.1589C71.5527 41.8589 73.5327 41.8779 75.3527 42.1489C76.3827 41.6679 77.4527 41.2389 78.5727 40.8479C79.3127 40.5879 80.0627 40.3479 80.8127 40.1089C83.3427 36.9689 86.6727 34.4579 90.5627 32.9489C95.0527 31.1989 99.6227 31.3779 103.673 32.8479L104.963 32.5779C106.983 29.0779 110.203 26.3679 115.153 25.1379C120.773 23.7479 126.543 25.6879 130.963 29.2189C130.983 29.2189 131.003 29.2189 131.033 29.2079C133.343 24.0379 137.293 20.4379 143.923 20.6879C148.053 20.8479 151.783 22.8989 154.663 25.8189C156.263 25.6179 157.863 25.4379 159.473 25.2589C161.173 23.2679 163.063 21.4089 165.153 19.7389C168.573 16.9979 173.023 17.2189 175.543 21.0779C176.093 21.9179 176.603 22.7679 177.113 23.6179L179.423 23.4579C182.143 19.7879 185.853 17.3079 190.933 17.1089C195.593 16.9179 198.913 19.1989 201.443 22.3879C203.503 22.3379 205.573 22.2989 207.643 22.2679C210.053 19.4779 212.893 17.0179 216.133 14.9779C218.613 13.4179 222.273 13.9489 224.283 16.0289C225.641 17.4429 226.905 18.9189 228.08 20.4469C231.109 17.0509 235.2 14.8139 239.571 13.9589ZM92.3927 331.508C97.0627 328.848 103.343 331.728 107.863 333.988C113.373 336.738 118.843 340.888 122.213 346.088C126.803 353.168 116.013 358.888 111.183 352.538C108.213 348.628 105.843 344.688 102.243 341.268C98.9527 338.128 94.1827 336.028 92.2927 331.888C92.2227 331.748 92.2427 331.588 92.3927 331.508ZM95.6733 159.658L95.7607 159.408C97.0887 155.775 91.2927 154.209 89.9757 157.812C87.9797 163.273 90.2807 169.21 95.6747 171.568C97.1697 172.222 98.8777 171.995 99.7787 170.492C100.536 169.227 100.185 167.035 98.7027 166.388C95.6677 165.061 94.6511 162.718 95.6733 159.658ZM45.7417 149.499C48.6427 146.939 44.3857 142.708 41.4987 145.257C38.8047 147.635 36.8067 150.865 37.3257 154.58C37.8547 158.366 40.7097 161.039 43.8347 162.928C47.1467 164.931 50.1657 159.745 46.8627 157.747L46.4916 157.52C45.1051 156.659 43.4823 155.475 43.2477 153.781C42.9987 151.981 44.5217 150.576 45.7417 149.499ZM62.2091 104.327L62.4147 104.176C65.5307 101.952 62.5377 96.7459 59.3857 98.9949C56.4957 101.058 54.1777 103.738 53.9337 107.434C53.6967 111.026 55.5247 114.14 57.9147 116.667C60.5737 119.478 64.8117 115.23 62.1577 112.425C59.5717 109.691 59.0662 106.708 62.2091 104.327Z'
                fill={outlineColor}
            />
        </>
    );
};

TwistsTwo.config = TwistsTwoConfig;
export default TwistsTwo;