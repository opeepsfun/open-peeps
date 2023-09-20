import React from "react";

export const DocTwoConfig = {
    name: "Doc Two",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "capColor"
        },
        {
            name: "skinColor"
        }
    ],
    width: 484,
    height: 567,
    viewBox: "0 0 484 567"
};

const DocTwo = ({ outlineColor = "#000", capColor = "#8FA7DF", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M432.69 196.993C430.415 192.497 429.816 193.18 433.746 189.193C448.177 167.475 412.023 150.721 417.697 127.777C421.279 104.249 394.355 96.0535 382.188 78.2705C373.881 56.5375 369.408 39.6855 343.529 40.5785C327.106 37.6665 309.996 55.6365 296.568 48.5525C291.722 45.0375 290.552 40.2425 288.815 35.9525C274.177 -7.28849 222.103 15.7265 200.997 44.5795C192.426 57.0445 173.433 60.0355 161.387 48.4885C138.708 31.0215 106.915 45.9075 100.497 72.4235C91.3316 100.793 75.1686 106.531 47.6076 105.681C18.4766 111.912 20.7986 147.673 39.3806 164.991C55.1366 194.981 8.35959 197.708 17.4536 236.255C19.4466 246.467 24.0326 257.055 30.3446 266.335C31.1356 271.652 33.0026 276.78 35.7346 281.417C36.9916 283.549 38.4666 285.569 40.0446 287.477C39.7176 287.645 39.3976 287.824 39.0946 288.031C35.4486 290.507 33.6946 295.083 34.9916 299.354C35.3906 300.671 36.0656 301.898 36.9356 302.973C34.2726 303.625 31.7416 304.642 29.6636 305.846C23.0396 309.681 19.0356 317.03 18.2996 324.523C4.45059 344.098 3.34759 376.449 22.5286 389.434C31.9656 395.991 44.6986 399.54 49.9176 411.783C54.5116 423.095 46.1986 431.819 51.1186 442.421C67.3956 478.754 126.936 468.265 149.866 444.897C186.502 499.964 256.622 501.503 316.262 505.557C392.693 502.038 441.128 401.909 417.285 335.964C417.285 335.964 416.404 333.439 416.407 333.439C424.389 308.97 415.643 280.741 416.136 255.393C438.503 254.635 442.167 213.339 432.69 196.993Z'
                fill={capColor}
            />
            <path
                d='M143.104 340.028C142.703 337.569 144.064 334.928 147.203 335.248C161.024 336.618 174.844 338.449 188.474 341.139C219.712 343.52 171.109 423.731 161.583 436.19C149.54 448.863 142.933 395.784 142.133 388.508L141.712 382.34C140.771 368.245 140.118 353.868 143.104 340.028ZM149.374 298.056C174.961 195.107 318.346 130.277 406.694 195.248C410.244 198.788 404.744 204.278 401.194 200.748C399.484 199.059 397.674 197.489 395.774 196.038C420.138 229.698 411.262 275.035 416.004 314.059C422.106 319.543 414.983 326.902 408.294 324.288C396.084 321.248 384.234 317.378 371.824 315.028C354.826 311.871 337.402 310.999 320.234 313.348C312.652 323.072 288.215 325.925 275.984 329.638C246.919 336.955 216.353 337.776 187.344 329.767C173.735 327.513 160.242 321.266 146.76 319.029C142.258 318.637 144.195 313.212 145.44 310.647L145.536 309.788C146.006 305.745 146.801 301.3 149.374 298.056Z'
                fill={skinColor}
            />
            <path
                d='M422.588 354.647C420.472 330.784 396.027 321.607 375.119 320.547C357.569 315.241 338.794 317.757 321.391 322.583C287.734 327.361 255.403 338.952 221.455 342.155C215.594 335.953 205.243 336.329 197.248 334.217C173.766 329.095 150.452 323.232 127.17 317.274C111.639 313.311 96.2292 308.936 80.7842 304.659C67.4802 299.4 50.4052 299.9 40.2322 289.124C39.1122 288.107 37.4072 289.408 38.1262 290.829C28.4992 308.601 184.661 341.902 203.034 345.468C208.139 371.871 193.726 401.033 180.334 423.203C177.489 427.219 174.296 430.983 170.848 434.495C167.108 437.836 153.992 447.329 164.285 450.005C174.898 472.096 199.846 480.886 222.242 486.288C262.421 500.508 306.064 509.198 346.135 489.696C377.275 480.357 388.655 465.571 401.716 436.866C414.283 411.442 426.143 383.592 422.588 354.647'
                fill='white'
            />
            <path
                d='M250.478 6.18111C263.396 5.03911 277.799 9.32011 286.569 19.2221C290.231 23.3563 292.218 28.0606 294.117 33.0318L295.728 37.2869C296.666 39.742 297.85 42.5234 299.952 44.0031C303.328 46.3821 307.605 43.6321 310.763 42.1341C331.807 32.1481 365.496 29.2841 378.697 53.1131C382.672 60.2881 383.356 68.8291 387.56 75.8481C390.449 80.6716 394.946 84.3994 399.363 87.8525L402.535 90.3244C412.667 98.2654 421.969 106.463 423.691 120.106C424.734 128.372 422.848 137.34 426.419 145.132C429.771 152.446 436.082 157.897 439.911 164.899C444.817 173.87 445.327 187.252 438.327 195.048C449.132 216.721 444.682 244.544 427.206 261.594C425.866 262.901 424.366 263.454 422.911 263.464L423.313 270.483C423.651 276.331 424.005 282.179 424.469 288.015C425.14 296.456 425.761 304.911 425.927 313.379L425.952 314.704C426.074 321.74 425.99 328.282 423.261 334.834C432.651 361.773 430.599 393.84 422.513 420.579C414.834 445.975 399.864 468.884 379.604 486.023C369.406 494.65 358.088 502.462 345.795 507.789C334.691 512.601 323.29 514.166 311.241 513.643C296.326 512.996 281.384 511.386 266.558 509.591L259.041 508.671C245.57 507.009 232.024 505.197 218.871 501.872C204.701 498.29 191.276 492.417 179.143 484.254L177.666 483.254C166.829 475.867 155.875 467.28 148.184 456.6C143.518 460.931 137.287 464.01 131.808 466.169C120.354 470.681 107.515 473.204 95.253 473.929C74.411 475.16 52.114 466.872 43.973 446.163C42.272 441.835 41.538 437.242 41.944 432.599C42.432 427.04 45.153 421.141 42.839 415.698C38.614 405.754 25.793 402.213 17.736 396.241C0.422016 383.409 -3.74898 359.96 3.19302 340.339C6.56002 330.821 12.168 321.622 18.577 313.83C22.975 308.483 28.895 304.409 35.432 303.963C31.703 298.938 31.9 289.102 36.804 286.606C32.264 282.593 28.312 277.999 24.905 272.704L24.0821 271.419C17.6499 261.316 11.5964 250.372 9.89002 238.422C7.93302 224.719 10.302 209.44 19.662 198.747C26.964 190.403 41.056 182.597 32.877 169.977C28.548 163.299 23.244 158.222 20.222 150.63C17.305 143.301 16.477 135.308 18.071 127.568C20.871 113.981 31.988 102.404 45.758 99.9691C54.289 98.4601 63.256 100.224 71.648 97.9931C77.719 96.3781 82.223 92.2481 85.542 87.0481C92.159 76.6791 94.936 64.3431 101.734 54.0631C109.658 42.0801 122.416 35.6891 136.705 35.3121C143.969 35.1201 151.442 36.4061 157.953 39.6901C164.558 43.0201 170.756 49.4701 178.348 50.4031C185.246 51.2501 190.961 45.4561 195.311 40.9191C200.266 35.7491 205.007 30.5081 210.419 25.7881C221.775 15.8861 235.148 7.53411 250.478 6.18111ZM374.578 322.464C360.853 319.866 346.618 319.466 332.763 321.258C307.63 324.509 284.318 335.433 259.463 339.966C239.953 343.524 220.202 342.153 200.781 338.845C202.935 343.636 203.245 350.525 202.367 356.501C202.622 370.22 199.515 383.919 194.165 396.806C190.045 406.727 184.477 416.032 177.985 424.579C174.749 428.84 171.306 432.935 167.61 436.806C165.819 438.681 163.976 440.503 162.079 442.271C161.135 443.151 160.179 444.02 159.209 444.873L158.612 445.388C170.497 453.337 180.246 464.074 192.417 471.775C205.003 479.739 218.669 484.425 233.201 487.424C246.395 490.148 259.812 491.949 273.188 493.552L282.85 494.703C293.828 496.002 304.909 497.215 315.918 497.401C338.418 497.784 358.711 484.731 374.901 470.079C393.268 453.456 408.116 432.671 416.126 409.104C419.334 399.667 421.512 389.878 422.66 379.975C422.836 372.794 422.9 365.622 421.938 358.372C421.24 353.116 420.136 347.966 418.514 342.915C417.953 341.17 417.147 339.497 416.303 337.839C415.189 337.45 414.219 336.752 413.651 335.763L413.525 335.724L408.876 333.773C397.678 329.095 386.684 324.757 374.578 322.464ZM38.357 306.401C28.59 307.922 21.994 319.261 17.608 327.118C12.126 336.938 8.03501 347.214 8.51002 358.663C8.86901 367.298 11.952 376.245 17.577 382.885C23.814 390.245 33.077 393.202 40.757 398.644C47.509 403.429 53.398 410.224 54.056 418.808C54.434 423.753 52.74 428.423 52.415 433.3C52.154 437.207 52.901 441.154 54.499 444.727C62.71 463.083 85.476 465.716 102.977 463.213C111.801 461.951 120.891 459.994 129.195 456.689C132.921 455.207 136.613 453.292 139.766 450.797C140.474 450.236 141.136 449.632 141.773 449.005C140.614 446.913 139.707 444.615 138.846 442.905C136.349 437.94 134.171 432.802 132.287 427.575C128.535 417.16 126.053 406.311 124.461 395.366C122.832 384.167 122.029 372.898 121.996 361.583C121.98 356.143 122.016 350.698 122.45 345.276L122.579 343.798C122.826 341.163 122.972 338.395 123.468 335.735C102.676 330.598 82.2421 324.164 62.2146 316.496L59.1625 315.315C54.7164 313.565 47.7908 310.626 42.3 306.806C40.818 307.092 39.504 306.913 38.357 306.401ZM128.187 336.876C128.345 338.795 128.365 340.739 128.428 342.653L128.472 343.798C128.732 349.441 128.714 355.089 128.916 360.735C129.307 371.636 130.032 382.587 131.686 393.374C133.32 404.035 135.812 414.588 139.485 424.737C141.337 429.852 143.511 434.84 146.028 439.663C146.454 440.481 146.991 441.327 147.555 442.194C147.639 442.058 147.732 441.929 147.822 441.796L147.202 439.824C147.097 439.498 146.99 439.172 146.88 438.849C145.204 433.951 143.686 428.998 142.338 423.999C139.761 414.449 137.765 404.718 136.546 394.899C135.253 384.494 134.757 373.98 135.012 363.499L135.11 359.559C135.298 352.829 135.708 345.406 137.702 339.031C134.523 338.342 131.351 337.626 128.187 336.876ZM141.158 339.768C141.753 347.828 140.556 356.447 140.609 364.404C140.674 374.324 141.424 384.229 142.856 394.046C144.286 403.86 146.253 413.571 148.91 423.129C150.181 427.701 151.6 432.232 153.146 436.72C153.771 436.218 154.394 435.712 154.991 435.183C159.077 431.572 162.94 427.712 166.557 423.633C173.529 415.772 179.5 407.019 184.285 397.665C192.164 382.265 196.526 365.484 197.127 348.331C189.586 348.05 181.936 346.794 174.45 345.647L171.651 345.224C162.707 343.897 153.797 342.339 144.933 340.552C143.673 340.298 142.416 340.032 141.158 339.768ZM293.355 370.028C296.341 369.356 299.388 372.614 297.537 375.467C291.556 384.692 276.929 388.266 266.699 389.716C254.852 391.395 243.368 390.071 232.114 386.03C231.511 385.813 231.554 384.747 232.276 384.833C242.962 386.105 253.978 385.174 264.362 382.347C269.466 380.958 274.521 379.147 279.255 376.781C283.911 374.454 288.215 371.185 293.355 370.028ZM101.597 355.529L104.577 355.556C107.085 355.599 109.7 355.818 111.59 357.624C117.781 363.538 107.938 369.902 103.911 373.285L103.782 373.394C98.091 378.235 91.182 386.64 83.157 386.765C80.819 386.802 79.138 384.461 79.722 382.256C81.255 376.464 86.74 373.384 91.328 370.09L99.296 364.37C100.15 363.757 101.486 363.046 102.762 362.267L102.195 362.215C96.9188 361.754 86.9928 361.577 85.0378 361.561L84.854 361.56C77.873 361.532 70.849 361.785 63.896 362.399C62.916 362.486 62.794 360.998 63.672 360.742C72.238 358.247 80.759 356.659 89.653 355.976C93.6281 355.67 97.6119 355.52 101.597 355.529ZM374.545 363.383C374.316 363.113 374.612 362.656 374.943 362.868C375.865 363.458 378.355 364.026 379.491 364.648L382.811 366.481C383.365 366.785 383.919 367.088 384.476 367.387C388.09 369.331 391.877 370.837 395.773 372.114C399.838 373.445 404.028 374.441 408.286 374.903C411.947 375.299 415.299 375.307 418.795 376.649C421.501 377.687 421.497 381.127 418.795 382.163C410.913 385.187 400.628 381.347 393.259 378.178C389.26 376.458 385.496 374.218 381.981 371.655C380.279 370.415 378.687 369.112 377.212 367.602C375.901 366.262 375.711 364.758 374.545 363.383ZM38.136 289.323C37.47 290.577 37.047 291.921 36.867 293.364C37.1 300.602 47.796 305.045 54.339 307.704C66.946 312.825 80.124 316.925 93.118 320.909C103.867 324.206 114.722 327.155 125.661 329.753C125.978 329.573 126.435 329.621 126.609 329.974C132.96 331.47 139.338 332.851 145.74 334.11C154.313 335.794 162.927 337.265 171.573 338.518C180.055 339.749 188.691 340.284 197.158 341.585C197.133 340.452 197.09 339.32 197.032 338.186C192.635 337.382 188.256 336.492 183.904 335.542C158.471 329.988 133.144 323.238 108.123 316.011L96.27 312.571C86.2456 309.658 76.223 306.719 66.276 303.565C56.189 300.368 46.184 296.309 38.136 289.323ZM352.763 174.835C320.714 168.544 287.37 171.595 256.792 182.93C227.241 193.884 201.169 212.964 181.318 237.391C171.783 249.125 163.734 262.182 157.261 275.839C150.708 289.664 147.088 304.149 142.588 318.653C161.2 323.382 179.895 327.952 198.75 331.321C211.97 333.683 225.406 335.204 238.854 334.84C251.732 334.49 264.213 331.772 276.552 328.222C300.235 321.404 323.246 312.798 348.21 312.489C369.529 312.225 393.632 316.312 412.59 327.011C412.442 321.466 412.799 315.928 412.697 310.296C412.544 301.802 412.001 293.321 411.436 284.848C410.355 268.625 410.452 252.238 408.701 236.077L408.542 234.658C406.983 221.162 403.927 207.167 395.551 196.161C385.14 182.481 368.838 177.991 352.763 174.835ZM353.159 151.44C304.323 135.275 246 149.043 205.61 179.735C183.766 196.335 166.336 217.167 153.318 241.293C146.602 253.741 141.288 266.88 137.093 280.383C133.547 291.798 131.428 303.517 128.831 315.147L139.236 317.804C140.095 300.559 146.679 283.115 153.946 267.657C161.531 251.524 171.708 236.597 183.628 223.354C206.187 198.294 235.613 180.153 267.956 170.718C299.908 161.397 337.699 158.989 369.637 169.741C384.959 174.898 398.623 182.466 407.702 196.156C397.794 173.809 375.912 158.973 353.159 151.44ZM264.721 16.6961C250.547 12.8161 236.609 17.8861 224.899 25.9461C218.792 30.1491 213.131 35.1771 207.966 40.4871C203.639 44.9361 199.656 49.6911 194.698 53.4751C189.986 57.0721 184.406 59.6721 178.348 59.2821C171.512 58.8431 165.624 54.9741 160.012 51.4151C153.568 47.3311 147.454 44.7631 139.733 44.5101C132.517 44.2741 125.157 45.6241 118.94 49.4361C108.622 55.7651 104.426 68.1421 99.88 78.6971L99.2237 80.2073C95.1659 89.4526 90.1847 98.9175 81.085 104.04C67.619 111.624 50.493 104.21 37.818 113.202C25.155 122.186 23.488 140.28 31.084 153.097C37.31 163.601 48.353 172.776 41.956 186.093C37.286 195.813 26.523 200.646 21.618 210.198C14.8 223.476 16.187 240.372 22.654 253.487L24.2825 256.783C28.1155 264.501 32.2449 272.327 38.005 278.714C45.118 286.602 54.149 292.888 63.152 298.636C66.8464 299.656 70.5767 300.576 74.2926 301.505L77.076 302.205C91.561 305.882 106.089 309.383 120.577 313.046L125.848 314.388C125.032 299.71 128.347 284.585 132.573 270.691C137.324 255.073 144.31 239.78 152.825 225.862C183.246 176.144 236.133 142.807 294.023 136.199C342.336 130.684 399.832 147.849 418.395 197.196C420.105 201.744 414.719 204.252 411.315 202.313C417.614 214.565 420.173 228.513 421.412 242.134C421.59 244.101 421.753 246.071 421.904 248.042C433.304 233.522 434.651 212.485 424.69 196.632C422.984 193.917 423.941 189.696 426.761 188.079L426.961 187.97C431.5 185.638 431.602 180.069 430.182 175.679C428.086 169.196 423.335 163.829 419.568 158.288C415.174 151.821 412.52 145.034 412.001 137.198C411.511 129.796 413.186 121.702 409.98 114.731C407.755 109.892 403.658 106.191 399.625 102.839L399.208 102.493C389.492 94.4581 379.472 87.6451 374.742 75.4171C372.148 68.7061 371.291 61.0791 366.671 55.3151C363.309 51.1231 358.493 48.5291 353.381 47.1261C341.819 43.9511 329.394 46.3161 318.335 50.2681L317.599 50.537C311.23 52.9129 304.992 56.3833 298.072 53.8931C292.685 51.9561 289.669 47.0971 287.583 42.0541C285.377 36.7201 284.093 30.8921 280.386 26.3201C276.446 21.4621 270.682 18.3271 264.721 16.6961ZM38.769 288.27L38.663 288.421C39.129 288.724 39.593 289.028 40.065 289.317C39.625 288.975 39.198 288.621 38.769 288.27ZM80.6178 195.953L84.7206 195.672C103.176 194.439 125.17 193.674 140.177 205.667C143.066 207.978 144.158 211.794 141.297 214.666C138.232 217.741 133.08 216.96 129.142 217.054L126.168 217.125C121.527 217.248 116.827 217.469 112.299 218.389C107.761 219.312 102.805 222.026 98.1598 220.884C96.6608 220.516 95.7558 218.823 96.1628 217.366C98.0748 210.523 107.556 208.935 113.528 208.14C117.614 207.597 121.676 207.462 125.793 207.522C126.712 207.535 127.63 207.567 128.549 207.592C126.709 206.569 124.809 205.665 122.864 204.86C118.685 203.132 114.37 201.81 109.958 200.826C100.329 198.682 90.4428 198.078 80.6178 197.547C79.5878 197.491 79.5978 196.025 80.6178 195.953ZM107.313 122.917L107.411 122.93C123.642 126.219 137.276 134.913 151.834 142.294C155.193 143.998 158.604 145.605 162.117 146.965L163.645 147.544C165.903 148.425 173.918 151.736 175.138 150.537C175.482 150.2 168.097 142.454 167.321 141.458L166.435 140.315C164.403 137.66 162.687 135.058 162.81 131.522C162.88 129.506 165.08 128.075 166.901 129.174C171.604 132.011 173.863 138.013 177.569 142.008L177.929 142.392C180.545 145.144 183.825 148.037 182.859 152.233C180.831 161.047 168.261 156.064 163.072 154.062C143.193 146.392 127.059 131.442 107.087 124.106C106.385 123.848 106.614 122.865 107.313 122.917ZM343.108 68.6977C344.419 68.5337 345.221 69.2917 345.296 70.5227C345.329 71.0747 344.604 71.1667 344.335 70.7817C344.253 70.6657 342.994 76.5247 342.939 77.0357C342.805 78.2687 342.725 79.5047 342.608 80.7387L342.336 83.541C342.156 85.4084 341.989 87.2757 341.897 89.1537C341.643 94.3329 341.646 99.5692 341.961 104.752L342.054 106.165C342.066 106.339 342.274 107.631 342.498 109.1C342.797 108.178 343.076 107.249 343.32 106.314C344.523 101.711 343.821 96.6397 347.127 92.9857C349.058 90.8527 352.227 91.7487 353.679 93.8297C356.106 97.3089 354.996 102.367 353.766 106.583L352.801 109.783C351.624 113.655 350.115 118.209 346.975 120.81C343.874 123.38 339.489 123.501 336.549 120.635C333.713 117.872 333.658 113.635 333.576 109.949C333.325 98.6325 334.722 87.0657 338.637 76.4026L338.951 75.5627C339.632 73.7767 340.543 69.0187 343.108 68.6977ZM213.223 62.0207C218.4 55.9679 225.957 77.586 227.403 81.7781L228.549 85.1003C231.543 93.7307 234.991 102.875 241.486 109.251C240.965 106.098 239.676 102.79 239.19 100.161L238.974 98.974C238.157 94.4051 237.508 89.6218 238.357 85.0687C238.643 83.5297 240.162 82.1537 241.637 81.7877C242.529 81.5677 243.242 81.5587 244.134 81.7877C245.653 82.1797 247.064 83.5137 247.414 85.0687C248.828 91.3627 248.767 97.9867 250.09 104.366L250.256 105.184C251.272 110.348 251.642 115.212 248.946 120.001C247.732 122.157 244.707 122.96 242.592 121.667C233.588 116.163 228.068 107.324 224.702 97.5107C223.099 92.8374 221.881 88.0059 220.751 83.1851L219.947 79.7373C219.031 75.9311 215.582 62.2244 214.018 63.0517C213.337 63.4107 212.745 62.5787 213.223 62.0207Z'
                fill={outlineColor}
            />
        </>
    );
};

DocTwo.config = DocTwoConfig;
export default DocTwo;