import React from "react";

export const MediumBangsColorConfig = {
    name: "Medium Bangs Color",
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
    width: 531,
    height: 567,
    viewBox: "0 0 531 567"
};

const MediumBangsColor = ({ outlineColor = "#000", hairColor = "#E5E5E5", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M464.868 144.463C462.647 138.858 458.719 131.813 452.154 131.532C447.076 116.007 434.45 100.196 416.888 100.616C365.34 47.9021 300.444 50.3871 232.594 61.5461C196.798 68.1851 160.451 81.1851 133.753 106.839C101.777 137.041 89.326 189.74 114.366 227.931C92.725 239.528 92.305 267.048 101.56 286.907C90.435 294.6 89.759 313.272 102.286 319.14C101.62 321.868 102.091 324.688 103.361 327.112C97.15 332.282 89.066 336.101 82.383 339.384C79.429 340.835 77.725 343.205 77.017 345.876C55.073 360.272 0.354996 395.454 1.007 423.455C0.684996 438.063 11.521 447.677 24.689 451.505C16.854 467.168 10.907 485.463 18.407 502.359C20.48 507.464 36.0122 522.467 36.7942 522.744C38.1612 523.916 60.444 513.686 71.274 508.468C73.374 522.128 87.981 529.285 100.572 524.604C112.511 521.005 119.85 510.898 127.38 501.704C137.375 523.507 166.782 523.758 185.788 514.358C202.857 506.473 215.832 492.021 223.06 474.606C261.442 493.395 306.348 498.872 348.048 491.367C350.724 496.103 356.648 499.284 361.925 497.452C384.099 490.786 408.616 490.412 427.412 475.139C466.591 447.018 469.89 395.174 467.158 350.981C464.735 306.918 466.856 262.488 458.846 218.901C462.322 206.068 468.104 194.723 473.454 182.667C479.266 170.025 479.144 151.232 464.868 144.463Z'
                fill={skinColor}
            />
            <path
                d='M286.999 57L288.522 57.006C291.04 57.0226 293.553 57.0723 296.061 57.155C309.311 57.591 323.128 59.3099 338.687 62.2521L341.052 62.7066C344.922 63.4642 348.389 64.2244 353.918 65.5159L364.891 68.1019C370.478 69.4037 374.59 70.3045 378.384 71.0291L378.881 71.123C378.881 71.123 408.123 85.1388 417.567 94.3598L418.509 95.2871L418.91 95.688L423.016 95.8176L423.056 96.336L423.091 96.3413C427.168 96.9755 430.856 99.087 434.285 102.374L434.652 102.731L435.004 103.084C437.677 105.802 439.807 108.698 442.743 113.288L443.409 114.337L444.602 116.23L445.569 117.751C446.197 118.745 446.8 119.729 447.38 120.704L447.951 121.676L448.362 122.39L458.964 128.574C460.491 129.465 461.881 130.618 463.153 131.999L463.497 132.381L463.835 132.775L466.723 136.212L466.141 136.818L466.423 137.188L466.927 137.879L467.419 138.579L467.898 139.289L468.104 139.6L468.416 140.273L468.567 140.609L468.688 140.886L469.05 141.072L469.786 142.401C473.608 149.297 475.667 157.128 475.806 165.175C475.902 170.726 475.217 175.767 473.592 180.63C472.467 183.992 470.959 186.634 468.353 190.272L466.294 193.097L465.873 193.68L465.37 194.389C465.291 194.503 465.213 194.615 465.136 194.726C461.787 199.576 433.165 208.757 415.573 209.201L415.043 209.212L414.367 209.218C412.688 209.225 411.066 209.165 409.502 209.035C402.735 208.469 396.408 207.045 389.058 204.716L387.533 204.223L379.434 201.503C379.176 201.417 378.969 201.349 378.824 201.303L378.085 201.072C376.302 200.525 375.005 200.211 374.122 200.097L373.942 200.075L373.924 200.41L373.917 200.726L373.918 200.982C373.97 204.71 371.707 207.427 368.195 209.158C365.959 210.261 363.079 211.048 359.462 211.639L358.885 211.731C352.974 212.644 345.925 213.034 334.133 213.301C333.683 213.312 333.231 213.306 332.774 213.285C330.242 213.169 328.252 212.738 324.553 211.676L322.804 211.174L321.857 210.912C320.098 210.437 319.117 210.247 318.192 210.195L317.923 210.184L317.656 210.179C316.544 210.178 315.741 210.425 314.951 211.028L314.546 211.352L309.11 215.906C308.402 216.495 307.767 217.018 307.302 217.389L307.113 217.538C299.651 223.388 292.537 226.73 284.155 227.048L283.594 227.065L283.01 227.072C282.584 227.072 282.157 227.065 281.729 227.048C278.199 226.914 274.536 225.606 269.533 223.083L268.496 222.553L267.77 222.174C267.4 221.979 267.013 221.774 266.594 221.55L262.862 219.553L260.955 218.556C258.676 217.385 257.405 216.819 256.55 216.586L256.41 216.549L256.33 216.626C254.351 218.559 252.652 220.991 250.824 224.349L250.549 224.86L250.149 225.62L247.553 230.789L247.062 231.75C245.135 235.481 243.61 237.865 241.615 239.957C238.72 242.993 235.213 244.754 230.916 245.037L230.484 245.06L229.972 245.073C227.948 245.093 225.804 244.782 223.479 244.136L222.939 243.981L222.413 243.82C218.949 242.726 213.474 243.407 209.126 245.715C204.403 248.222 201.802 252.046 201.917 256.934C201.975 259.361 202.254 261.964 202.745 264.785L202.884 265.56C203.529 269.047 204.403 272.546 205.749 277.213L208.643 286.976L208.969 288.115L209.297 289.288C209.767 290.995 210.142 292.482 210.451 293.883C211.632 299.238 211.829 303.259 210.645 306.685C205.424 321.791 196.365 329.816 186.053 330.155L185.696 330.163L185.255 330.164C177.333 330.078 170.154 324.916 170.241 318.228C170.25 317.528 170.382 316.875 170.615 316.285L170.72 316.035L170.771 315.929L170.689 315.729C168.254 309.9 162.623 305.645 156.011 304.811L155.635 304.767L155.265 304.732C154.902 304.7 154.539 304.679 154.196 304.667L153.86 304.658L153.458 304.655C144.645 304.668 135.925 310.535 129.065 320.131C127.635 322.133 126.307 324.318 125.114 326.626L124.722 327.4L122.814 331.302L121.526 335.076C114.427 355.854 118.022 377.598 131.876 388.839L132.299 389.177C137.291 393.091 143.162 395.47 149.429 396.11C150.15 396.184 150.876 396.231 151.574 396.249L152.092 396.258L152.687 396.256C154.73 396.23 156.683 395.976 158.437 395.502C159.868 395.116 160.864 394.647 161.557 394.049C161.74 393.892 161.886 393.75 162.013 393.608L162.119 393.481L162.159 393.427L171.628 394.831C173.239 405.055 177.892 415.649 185.461 427.798L185.938 428.559L186.77 429.869L187.616 431.181C196.522 444.879 206.455 456.413 217.373 465.265L218.137 465.878L219.159 466.689L220.098 467.425C221.923 468.841 223.443 469.943 224.964 470.926L225.345 471.17L228.935 473.445L227.268 477.355C223.379 486.477 218.012 494.77 211.398 501.831L210.774 502.49L206.176 507.231L202.64 502.729C202.613 502.695 202.534 502.652 202.44 502.634L202.375 502.627H202.339L202.291 502.632L202.234 502.647L202.177 502.673C199.53 504.108 198.076 505.205 195.987 507.352L195.684 507.666L195.331 508.038L194.845 508.544C192.675 510.768 190.356 512.661 187.828 514.238C181.989 517.876 175.509 519.898 168.798 520.081L168.168 520.092L167.534 520.093C167.307 520.091 167.079 520.087 166.851 520.08C152.849 519.692 140.303 510.723 134.136 497.576C133.891 497.053 133.666 496.883 133.251 496.849L133.133 496.843L132.985 496.841C131.956 496.847 130.696 497.46 129.993 498.282L129.868 498.439L127.508 501.61L126.603 502.807C118.183 513.861 111.27 519.907 101.985 521.743C101.254 521.888 100.48 521.976 99.6591 522.013L99.1606 522.033H98.8695C94.876 522.044 90.2743 520.887 86.6872 518.849C81.943 516.155 79.0096 512.01 79.3811 506.875L79.4094 506.546L79.4751 505.997C79.7849 503.255 77.5905 501.765 75.9109 503.111L75.7972 503.207L75.6584 503.333C68.7407 509.82 60.784 514.798 52.2139 517.87L51.4561 518.137L50.33 518.521C44.9254 520.344 41.1144 521.249 37.1014 521.319C33.6284 521.379 30.7406 520.127 28.652 517.718C27.2589 516.112 26.4077 514.327 25.5579 511.722L25.4162 511.281L25.106 510.268L24.9136 509.609C22.4273 500.861 22.3734 491.506 24.3254 481.184C25.7836 473.475 28.1049 466.026 32.0084 455.587L32.7661 453.574L34.3296 449.468C34.4868 449.056 33.5477 447.618 32.9666 447.456L32.8981 447.444L32.3677 447.501C31.9957 447.536 31.6209 447.56 31.2367 447.575L30.6525 447.59H30.2693C17.5898 447.46 7.9053 435.026 7.99521 421.855C8.09265 409.516 14.2978 398.907 26.1451 386.314L27.1744 385.23L28.2879 384.076L29.3884 382.95C39.9159 372.231 50.6779 362.874 61.8854 354.85L62.8135 354.188L63.8466 353.459C67.6207 350.811 71.2899 348.411 76.3678 345.255L79.3571 343.409L91.4725 329.113C91.7632 328.948 92.0496 328.784 92.3318 328.62L92.4856 323.66L104.158 323.901C101.196 322.381 98.7422 320.537 96.749 318.175C90.1236 310.319 90.9551 299.405 99.0108 294.042L99.2947 293.858L102.691 291.761L105.47 294.199C107.89 296.322 110.457 297.73 113.134 298.38L113.558 298.476L115.653 298.92L116.06 299.58L116.296 299.238C116.295 299.204 116.288 299.17 116.277 299.137L116.256 299.089L116.212 299.02L115.948 298.696L115.657 298.348C114.725 297.252 113.679 296.189 111.779 294.36L110.447 293.079L109.409 292.07C106.687 289.396 105.237 287.74 103.696 285.44C99.8601 279.717 97.6937 273.265 97.6037 266.711C97.4151 253.084 105.891 240.2 118.452 234.319C118.892 234.113 119.216 232.65 118.689 231.682C106.527 209.368 103.152 182.619 109.261 157.737C114.962 134.522 129.144 114.03 149.447 98.3337C184.301 71.3854 232.651 57.489 283.951 57.0104L285.506 57H286.999Z'
                fill={hairColor}
            />
            <path
                d='M100.609 331.496C102.918 330.916 104.158 334.019 102.198 335.266C89.7541 343.181 76.8991 350.25 64.8781 358.862C53.4446 367.049 42.8841 376.375 33.0364 386.401L31.9451 387.518C23.0421 396.677 13.1821 408.329 13.0821 421.84C13.0051 432.342 21.1021 443.805 32.3991 442.425C36.6551 441.905 40.5671 447.305 39.0821 451.198L37.5196 455.301C31.234 471.906 24.8388 490.72 29.8039 508.19L29.9861 508.813C31.1871 512.813 32.4531 516.348 37.0961 516.268C41.4051 516.192 45.8891 514.739 49.9231 513.352C58.2941 510.473 65.8801 505.672 72.3191 499.634C78.0145 494.294 85.2911 499.719 84.5243 506.506L84.4971 506.723C83.4481 514.339 95.5811 517.875 101.097 516.786C111.988 514.632 119.753 503.72 125.938 495.401C128.911 491.404 136.132 489.83 138.744 495.401C143.92 506.436 154.589 514.684 167.07 515.03C173.553 515.209 179.773 513.364 185.264 509.942C187.505 508.544 189.51 506.883 191.348 504.999L191.804 504.524C194.524 501.641 196.401 500.108 199.875 498.225C203.298 496.37 207.726 498.67 207.705 502.717C207.677 507.959 206.141 511.444 202.526 515.246C199.535 518.395 195.981 521.159 192.245 523.368C184.737 527.804 175.811 530.3 167.07 530.011C153.292 529.555 140.141 522.688 131.616 512.008C122.912 522.415 112.115 531.977 98.0841 531.72C87.5801 531.528 77.7911 526.06 73.1011 517.588C66.4801 522.153 59.2131 525.722 51.4391 528.053L50.7464 528.258C39.7424 531.46 27.079 532.733 19.9961 521.809C13.3461 511.553 12.8501 497.35 14.3741 485.627C15.7351 475.155 18.9571 465.21 22.6571 455.401C12.1251 452.256 3.95009 442.363 1.14209 431.699C-3.10591 415.573 5.13509 399.934 15.3231 387.952C26.3901 374.936 40.3191 363.927 54.3521 354.291C68.3481 344.682 84.0271 335.652 100.609 331.496ZM460.479 205.364C460.505 204.916 461.239 204.759 461.307 205.251C466.141 240.329 468.94 275.336 471.257 310.655C472.432 328.548 473.766 346.423 475.226 364.294C476.627 381.431 478.959 399.024 478.432 416.231C477.607 443.175 464.523 465.083 443.069 480.849C422.512 495.958 397.01 503.428 371.989 506.584C357.458 508.417 342.725 508.505 328.178 506.783C320.623 505.888 313.077 504.698 305.677 502.91L302.477 502.11C296.65 500.621 290.143 498.601 289.312 491.699C288.909 488.356 290.685 485.89 293.553 484.212C297.292 482.024 301.579 483.312 305.432 484.309C311.925 485.989 318.487 487.431 325.123 488.428C339.376 490.572 354.028 490.699 368.354 489.215C392.452 486.717 417.872 478.901 436.452 462.759C444.527 455.745 451.548 447.198 455.241 437.044C459.989 423.99 459.286 409.749 459.127 396.079C458.758 364.294 459.083 332.509 458.641 300.721C458.197 268.836 458.584 237.202 460.479 205.364ZM218.145 56.819C246.303 49.557 274.88 47.67 303.804 49.856C331.081 51.916 362.154 58.019 384.432 74.796C385.513 75.61 384.866 77.151 383.528 76.938C368.634 74.564 354.116 70.246 339.286 67.389C325.022 64.641 310.501 62.578 295.977 62.1C246.855 60.481 192.196 71.612 152.586 102.237C134.013 116.596 119.839 135.904 114.198 158.877C108.413 182.44 111.543 207.922 123.16 229.237C124.833 232.306 124.143 237.161 120.653 238.795C110.063 243.753 102.52 254.737 102.684 266.59C102.763 272.339 104.745 277.852 107.93 282.604C111.298 287.629 116.425 291.145 120.192 295.838C121.675 297.686 121.732 300.231 120.557 301.933C122.76 302.898 125.136 303.416 127.304 304.556C129.142 305.523 129.194 308.542 127.304 309.494C122.524 311.901 117.356 309.346 114.13 305.465C113.554 304.772 113.056 304.051 112.602 303.315C108.738 302.496 105.276 300.557 102.253 297.905C96.493 301.354 95.704 309.032 100.652 314.899C103.179 317.894 106.769 319.743 110.397 321.072L110.833 321.229C114.364 322.483 117.598 323.183 119.892 326.008C121.405 322.854 123.142 319.881 125.078 317.172C132.117 307.325 142.937 298.589 155.776 299.698C165.833 300.565 174.546 307.765 176.607 317.699C176.759 318.434 175.651 319.008 175.321 318.241C170.496 306.99 155.229 306.577 146.135 312.44C135.44 319.336 129.595 332.331 127.25 344.434C124.942 356.356 126.276 370.856 135.199 379.924C138.85 383.635 143.817 386.201 149.001 386.877C151.535 387.209 153.77 386.882 156.194 386.395L157.8 386.059C158.914 385.829 160.021 385.643 161.19 385.746L162.931 385.98L163.92 386.443C164.778 386.828 164.701 386.723 163.688 386.125C166.646 385.883 168.175 388.069 168.337 390.466C168.431 390.526 168.522 390.591 168.598 390.684C179.824 404.422 188.159 420.213 200.072 433.501L203.559 437.394C212.525 447.367 222.76 458.179 234.939 463.352L236.388 463.952C239.931 465.448 243.489 467.497 243.941 471.768C244.346 475.594 241.33 478.473 237.853 479.366C229.935 481.397 220.909 474.36 215.11 469.743C202.64 459.818 192.16 447.166 183.505 433.854L182.649 432.528C175.535 421.417 168.848 408.745 166.77 395.557L166.395 396.165C166.367 396.208 166.345 396.241 166.331 396.26C165.907 396.836 165.44 397.322 164.898 397.788C163.442 399.045 161.666 399.779 159.821 400.277C156.358 401.212 152.561 401.396 149.001 401.032C141.77 400.293 135.011 397.541 129.295 393.059C111.891 379.41 109.836 354.012 116.875 333.407C111.099 334.786 104.52 330.899 100.01 327.568C94.838 323.746 90.573 318.229 89.554 311.739C88.542 305.299 92.648 296.771 98.738 294.286C92.419 286.699 88.74 275.932 88.36 267.311C87.7 252.315 95.667 238.141 107.899 229.959C96.396 205.308 94.18 176.709 101.925 150.535C117.294 98.596 168.778 69.551 218.145 56.819ZM174.324 451.443L174.468 450.986C175.693 446.97 177.275 438.98 183.276 442.022C189.009 444.927 185.349 453.526 183.344 457.712C180.945 462.721 176.802 466.737 171.238 467.813C166.712 468.688 161.742 467.564 158.576 464.067C157.653 463.048 157.132 461.93 156.585 460.696C156.372 460.216 156.276 459.887 156.236 459.673C156.184 459.908 156.036 460.258 155.658 460.67C153.132 463.43 150.746 466.643 148.913 469.908C148.479 470.68 147.111 470.139 147.457 469.294C149.592 464.072 149.233 455.997 153.992 452.22C158.187 448.89 162.128 451.51 164.347 455.388L164.46 455.59C167.703 461.478 172.871 455.886 174.324 451.443ZM128.695 432.574L129.133 431.966C133.618 425.836 141.182 418.462 148.751 424.163C151.158 425.976 151.247 429.002 148.751 430.801L147.807 431.476C144.5 433.82 141.208 436.034 138.779 439.395C136.14 443.05 133.77 446.92 130.222 449.787C123.947 454.857 113.806 455.857 108.361 449.022L107.825 448.344C107.37 447.758 106.847 447.051 106.423 446.346L106.093 446.804C106.06 446.85 106.03 446.894 106.002 446.935L105.926 447.051C103.688 450.627 100.861 453.572 97.3401 455.896C90.6481 460.311 83.1071 460.925 75.5361 458.588C74.7951 458.358 74.9941 457.365 75.7111 457.299C84.6821 456.461 93.4231 450.088 97.0721 441.881L97.4842 440.96C98.9608 437.696 100.615 434.593 104.263 433.311C107.814 432.063 111.542 433.381 113.977 436.067C116.013 438.312 116.537 442.775 120.21 441.791C124.232 440.713 126.496 435.676 128.695 432.574ZM103 378.051C104.987 376.541 108.099 378.161 108.646 380.349C111.125 390.255 100.829 401.928 90.9351 402.235C88.3881 402.313 85.9381 401.697 83.6821 400.518C81.9321 399.604 79.8611 397.268 77.9401 396.881C75.4591 396.382 73.2611 399.686 71.5141 401.382C69.3471 403.487 67.2031 405.441 64.7751 407.235C63.8051 407.952 62.3001 406.748 62.7101 405.647L63.5314 403.458C66.5043 395.666 71.6248 384.292 81.2071 387.525C85.9021 389.109 89.4361 394.451 94.3801 390.221C98.3391 386.834 98.7081 381.312 103 378.051ZM145.279 338.172C154.212 327.918 175.211 333.334 179.193 345.809C180.073 348.564 179.155 352.145 177.003 354.095C174.168 356.664 170.124 357.442 166.682 355.427C163.72 353.694 162.504 350.858 160.327 348.425C157.134 344.86 152.791 342.881 148.316 341.463C147.197 342.051 146.156 342.824 145.222 343.756C144.744 344.233 143.841 343.579 144.265 343.017C144.841 342.253 145.545 341.534 146.346 340.871L145.961 340.758C144.783 340.43 144.528 339.036 145.279 338.172ZM203.336 224.958C205.338 224.961 207.67 226.841 207.414 229.036L207.337 229.645C206.761 233.824 205.418 236.19 201.235 238.132C197.686 239.777 193.958 240.686 190.068 241.046C188.596 241.182 187.038 241.19 185.459 241.073L185.127 242.991C184.466 246.827 183.855 250.666 183.74 254.577C183.526 261.826 186.231 267.8 189.132 274.272C194.701 286.704 195.327 299.114 189.264 311.528C188.377 313.343 185.866 314.823 183.84 314.639C181.213 314.401 179.944 313.641 178.416 311.528C177.133 309.753 177.426 307.245 178.315 305.39L178.416 305.187C181.471 299.268 182.434 292.581 180.874 286.075C179.408 279.96 176.087 274.464 174.604 268.368C172.188 258.438 174.761 248.588 179.789 240.069C175.994 238.976 172.484 237.028 170.142 234.057L170.152 234.053C169.258 233.098 169.746 231.103 171.315 231.223L173.089 231.366C178.165 231.79 182.837 232.231 187.97 230.817C190.601 230.09 192.872 228.88 195.131 227.414L195.615 227.097C198.441 225.219 200.008 224.954 203.336 224.958ZM215.483 151.565C228.207 150.842 239.07 159.239 244.351 170.417C250.088 182.552 247.681 196.477 242.618 208.416L241.179 211.758C238.662 217.548 235.356 224.433 230.199 227.54C224.407 231.03 219.4 226.983 221.108 220.55C222.126 216.719 224.881 213.764 227.11 210.602C229.19 207.649 231.131 204.593 232.833 201.405C236.167 195.153 238.656 188.187 238.629 181.024C238.582 167.95 229.944 152.967 215.483 153.159C214.45 153.171 214.467 151.622 215.483 151.565ZM279.836 130.469C279.043 129.867 279.752 128.528 280.639 129.093C295.394 138.477 306.411 156.104 308.629 173.421C309.86 183.029 308.92 193.297 304.828 202.164C302.481 207.252 298.453 212.109 292.821 213.504C287.643 214.785 282.306 211.828 280.699 206.774C280.076 204.813 281.148 202.762 282.767 201.691C288.017 198.22 292.244 193.84 294.717 187.948C297.29 181.822 298.316 175.321 298.347 168.713C298.423 153.238 292.247 139.901 279.836 130.469ZM460.077 137.176C459.394 136.419 460.253 135.303 461.157 135.777C471.824 141.387 478.602 152.133 480.544 163.902C482.447 175.424 479.887 191.11 470.968 199.443C465.935 204.147 456.919 197.891 461.103 191.832C464.053 187.559 467.242 184.04 468.931 178.991C470.437 174.486 470.97 169.943 470.888 165.209C470.709 154.881 467.019 144.876 460.077 137.176ZM329.659 122.748C347.884 121.88 358.929 142.685 361.459 158.192C363.021 167.773 361.847 177.641 356.557 185.951L356.244 186.435C351.88 193.073 343.944 200.716 335.393 197.573C331.774 196.244 330.811 192.367 333.242 189.426C336.962 184.924 342.712 183.089 346.21 178.282C350.134 172.891 351.42 166.137 351.193 159.581L351.162 158.857C350.554 146.798 344.802 123.651 329.659 124.061C328.81 124.083 328.82 122.787 329.659 122.748ZM386.666 119.291C404.294 117.038 415.029 137.776 418.34 152.062C420.408 160.993 420.86 170.956 418.215 179.82L418.018 180.452C415.865 187.067 409.513 198.402 401.22 195.021C398.948 194.095 396.629 191.572 397.717 188.852C399.106 185.375 401.111 184.473 403.783 182.248C405.841 180.535 407.278 178.076 408.336 175.654C411.154 169.199 411.782 161.658 411.397 154.702L411.344 153.879C410.348 140.292 402.981 120.044 386.666 120.416C385.921 120.433 385.972 119.379 386.666 119.291ZM418.939 99.7951C428.75 96.0591 436.788 105.44 442.428 112.135C449.493 120.524 455.902 129.561 459.525 140.004C462.752 149.309 463.32 159.655 460.413 169.127C458.974 173.817 456.732 178.166 453.672 181.994L453.281 182.477C450.097 186.36 447.022 188.746 441.805 187.356C439.682 186.789 438.785 184.69 439.152 182.684C439.938 178.398 442.147 177.285 445.008 174.293C447.531 171.654 449.403 168.404 450.662 164.987C453.258 157.938 453.393 150.301 451.65 143.039C449.7 134.909 445.862 127.402 441.422 120.367L440.464 118.86C435.759 111.423 429.051 99.9692 419.126 101.176C418.276 101.28 418.265 100.051 418.939 99.7951Z'
                fill={outlineColor}
            />
        </>
    );
};

MediumBangsColor.config = MediumBangsColorConfig;
export default MediumBangsColor;