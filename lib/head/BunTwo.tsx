import React from "react";

export const BunTwoConfig = {
    name: "Bun Two",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        },
        {
            name: "clipColor"
        }
    ],
    width: 574,
    height: 664,
    viewBox: "0 0 574 664"
};

const BunTwo = ({ outlineColor = "#000", clipColor = "#C93305", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M497.502 340.757C495.126 310.013 498.808 277.789 486.954 248.567C466.286 200.082 408.33 183.916 363.399 165.457C345.399 160.138 284.83 159.395 263.754 152.355C216.054 136.423 204.657 117.441 166.755 147.776C160.357 152.958 156.354 158.59 153.434 166.285L153.554 166.318C152.72 169.526 153.614 172.727 155.493 175.172C139.059 191.97 132.182 217.154 140.614 239.515C168.131 297.704 166.837 329.167 157.971 391.723C146.393 450.123 172.85 471.456 216.666 503.232C214.882 506.691 214.512 511.288 216.838 514.34C267.505 585.539 363.038 619.533 444.891 583.395C478.116 568.607 492.949 533.224 501.414 501.297C511.275 465.548 514.305 427.878 506.277 391.462C503.039 374.62 498.821 357.9 497.502 340.757Z'
                fill={skinColor}
            />
            <path d='M134.604 253.543L164.73 273.613L272.569 159.925L236.683 131.68C236.683 131.68 171.576 179.799 158.775 192.498C145.974 205.198 134.604 253.543 134.604 253.543Z' fill={clipColor} />
            <path
                d='M205.244 0.137207C211.394 -0.786301 216.039 3.02942 218.248 8.40761L218.364 8.69721C219.074 10.5272 219.864 12.3072 220.714 14.0572C236.104 6.50721 258.064 8.44721 267.804 23.7372C274.754 34.6572 270.514 47.6172 267.894 59.1972L266.174 66.8272C269.499 68.943 272.006 72.7318 271.888 76.6552L271.874 76.9572L271.174 87.5972C273.394 85.3472 275.424 82.8972 277.234 80.2872C278.484 77.9972 279.834 75.7472 281.284 73.5672C289.814 60.7372 308.964 71.8872 301.924 85.6272C300.574 88.2772 299.054 90.7872 297.424 93.2072C295.584 96.7772 294.074 100.447 292.914 104.217C296.244 105.667 298.804 108.887 299.074 113.747C299.704 125.097 293.744 134.567 284.264 140.517C281.474 142.267 278.594 142.607 275.984 141.957C275.524 142.577 275.064 143.197 274.624 143.827C278.404 146.897 281.814 150.397 284.744 154.277C293.564 152.957 302.434 152.337 311.304 152.317C322.144 147.007 335.124 147.117 346.774 149.107C354.274 150.387 361.474 152.877 368.854 154.667C376.634 156.547 384.534 156.617 392.404 157.897C402.324 159.507 411.024 164.087 416.494 171.397C422.504 171.577 428.824 174.037 434.064 177.377C446.264 185.157 458.394 193.047 470.564 200.877C475.235 203.883 476.981 208.682 476.122 214.035L476.064 214.377L475.654 216.597L476.617 217.964C480.341 223.223 484.394 228.732 486.804 234.537C491.264 240.967 495.294 247.707 498.864 254.657C503.674 263.997 507.644 273.897 510.334 284.057C511.004 286.627 511.674 289.217 512.114 291.837C512.744 295.537 511.774 298.407 511.244 301.957C510.584 306.457 510.344 311.017 509.644 315.527C509.174 318.517 506.634 319.987 503.974 320.067C504.974 327.677 505.694 335.337 506.384 342.937C507.354 353.797 508.014 364.687 508.584 375.577C511.524 379.847 517.534 383.227 521.874 384.397C527.884 386.007 534.184 384.257 539.864 382.207C543.434 380.917 546.364 385.407 544.624 388.407C539.154 397.827 527.454 397.787 518.594 393.617C514.844 391.857 511.554 389.307 509.114 385.987C509.264 389.147 509.424 392.307 509.584 395.477L509.733 398.348C511.535 431.88 515.424 466.566 509.124 499.767C498.214 557.277 450.622 601.067 392.484 604.467C361.976 606.252 336.571 597.241 323.937 592.214C311.304 587.187 316.214 576.938 324.984 579.868C340.092 584.915 367.846 592.434 392.684 589.187C451.224 581.534 500.864 552.275 495.764 426.257C495.041 408.387 492.814 390.507 492.334 372.637C491.874 355.167 492.044 337.687 491.274 320.227L491.017 314.27C490.717 307.309 490.395 300.316 489.874 293.347C489.244 290.647 488.724 287.907 487.954 285.257C485.864 278.047 483.134 271.037 479.744 264.347C478.994 264.917 478.154 265.327 477.244 265.487C470.334 266.727 463.854 266.377 457.384 263.497C454.364 262.167 451.704 260.397 449.224 258.207C448.044 257.177 447.254 256.177 446.634 255.137C443.504 255.187 440.374 254.247 438.414 251.997C436.179 249.433 435.807 246.784 436.682 244.332L436.774 244.087L436.554 244.007C433.914 250.837 428.654 256.847 422.884 260.907C413.764 267.347 402.354 269.207 391.414 269.377C379.334 269.557 366.594 267.697 354.674 265.797C351.524 265.297 348.394 264.727 345.324 263.957C345.204 264.077 345.084 264.217 344.954 264.337C334.724 274.127 320.334 276.647 307.354 271.057C299.854 267.827 293.564 262.627 288.004 256.667C287.924 259.787 287.764 262.907 287.494 265.997L287.382 267.224C286.829 272.979 285.763 279.084 281.414 283.237C274.384 289.967 264.184 287.267 256.074 282.887C256.084 283.097 256.084 283.317 256.084 283.537C258.274 290.977 260.474 298.427 262.674 305.877L263.148 307.464C264.748 312.754 266.502 318.051 266.984 323.587C267.904 334.167 260.864 344.617 249.104 341.067C242.936 339.212 237.994 334.025 233.252 329.871L230.264 327.287C237.994 352.557 243.354 378.727 243.854 405.097C243.884 406.527 242.654 407.607 241.294 407.657C238.114 407.787 234.694 407.157 231.494 405.887C231.314 405.877 231.134 405.867 230.944 405.837C225.484 405.047 220.414 403.077 215.944 400.167C216.974 403.437 217.434 406.947 217.164 410.617C217.094 411.507 215.704 411.817 215.504 410.837C212.924 398.147 198.074 388.557 185.274 390.987C171.534 393.597 161.414 405.417 158.934 418.867C156.274 433.317 161.364 450.027 170.794 461.177C175.134 466.317 180.844 470.607 187.624 471.687C190.724 472.177 193.944 472.007 196.954 471.127C198.234 470.747 199.434 470.217 200.654 469.717C202.434 468.997 204.514 468.887 206.194 468.127C210.004 466.417 213.834 469.927 211.904 473.837C210.224 477.247 208.714 479.547 205.924 481.307C208.184 484.067 210.234 487.907 210.994 488.937C214.874 494.177 218.814 499.127 223.234 503.917C227.734 508.777 232.644 513.217 237.834 517.327L240.016 519.051C245.015 523.016 249.368 526.69 252.894 532.377C255.674 536.867 252.074 542.957 246.864 542.887C230.564 542.657 218.714 528.337 210.274 515.827C209.074 514.037 207.944 512.147 206.894 510.207C206.514 510.817 206.094 511.387 205.624 511.907L206.554 514.407C209.314 521.767 197.424 526.577 193.974 519.707C191.464 514.727 188.554 509.987 185.314 505.507C183.404 505.237 181.534 504.077 180.494 502.577C177.864 498.767 174.914 494.917 172.424 490.857C171.044 489.547 169.624 488.287 168.174 487.057C167.754 487.427 167.324 487.797 166.914 488.187C165.094 492.337 162.844 496.127 160.054 499.697L159.456 500.459C154.111 507.195 147.149 514.089 138.534 515.737C135.904 516.237 133.374 512.967 135.704 510.877C141.734 505.457 148.864 501.767 154.424 495.717C157.163 492.736 159.679 489.454 161.841 486.014L162.334 485.217C162.694 484.627 163.064 484.037 163.444 483.437C160.934 481.727 158.424 480.007 155.914 478.287C149.004 484.19 140.006 486.891 132.364 491.781L131.604 492.277C124.694 496.897 117.414 486.677 122.954 481.067C129.061 474.906 134.159 467.559 139.569 460.711C137.025 456.025 135.821 450.484 135.37 444.884C135.192 443.299 135.053 441.713 134.914 440.127C131.034 440.187 127.134 438.857 123.834 436.567L122.584 435.677C118.574 436.957 114.364 437.577 110.334 437.467C100.854 437.187 96.9742 426.357 102.904 419.507C108.954 412.507 119.544 410.977 127.934 414.377C128.204 414.237 128.484 414.087 128.754 413.937C128.354 412.097 128.443 410.428 128.898 408.962L128.766 408.068C126.921 405.237 125.708 402.005 125.248 398.59C124.884 395.885 124.958 393.204 125.584 390.533C125.792 389.644 126.225 388.723 126.556 387.796C125.874 386.074 125.473 384.294 125.349 382.504C125.158 382.277 124.968 382.044 124.788 381.792C120.625 375.947 121.466 368.904 125.428 364.174C125.446 363.873 125.474 363.572 125.515 363.273C125.283 362.751 125.07 362.224 124.876 361.691C121.005 357.786 118.163 353.087 118.693 347.264C119.004 343.838 120.412 340.754 122.543 338.449C122.165 337.331 122.129 336.036 122.587 334.955C119.186 325.909 119.616 315.014 122.064 304.897C121.524 303.357 121.244 301.687 121.304 299.917C121.584 292.407 128.084 285.507 135.784 285.597C136.711 285.605 137.579 285.726 138.413 285.903L138.424 285.724C138.719 283.47 139.339 281.387 140.244 279.518C139.799 279.357 139.387 279.126 139.026 278.819C134.092 281.451 128.871 283.463 123.397 284.834C119.372 285.842 115.249 281.267 117.751 277.489C118.912 275.736 120.193 274.162 121.573 272.724C119.611 272.735 117.619 272.868 115.604 273.127C111.984 273.597 107.944 271.127 105.594 267.787C102.674 270.627 99.7441 273.457 96.8141 276.287C89.3941 283.477 78.1841 278.187 77.0141 268.707C74.8041 268.117 72.7441 267.117 70.9342 265.687C59.2341 270.767 46.6441 273.557 33.7741 274.087C24.5341 274.467 19.1341 263.707 23.4541 256.107C26.3541 251.007 29.9541 246.427 34.1041 242.447C27.6641 244.417 21.0141 245.837 14.2241 246.747C10.5541 247.237 5.36415 244.197 3.89415 240.827C-1.72585 227.867 -1.24585 214.357 5.22415 201.747C5.47415 201.247 5.75415 200.767 6.02415 200.287C6.69415 198.617 7.42415 196.967 8.21415 195.347C0.254148 187.047 -0.435852 174.707 3.85415 164.377C2.13415 161.587 1.47415 158.227 2.64415 155.187C5.97415 146.437 10.7741 138.357 16.8341 131.417C16.2541 130.297 15.7441 129.107 15.3141 127.827C11.9041 117.477 15.8541 104.987 23.8241 97.7772C28.8341 93.2372 34.5941 90.5172 40.7441 88.7772C43.3341 84.1972 46.6641 80.0672 50.5441 76.5872C50.6941 76.2572 50.8442 75.9272 51.0141 75.5972C57.0541 64.2172 68.0541 58.1172 79.8441 56.7072C80.3041 52.2572 83.3041 48.0072 87.6641 46.6272C88.8641 42.7772 90.6542 39.0972 93.1142 35.7572C96.9842 30.4972 103.414 28.0172 109.474 31.4672C112.794 33.3572 115.974 35.5272 118.954 37.9272C120.293 37.2995 121.81 36.8934 123.522 36.7638L123.954 36.7372L133.814 36.2372C137.944 34.4072 142.064 32.4872 146.194 30.6172C148.674 28.5672 151.444 26.8572 154.464 25.5872C157.884 24.1572 161.384 23.3472 164.894 23.0772C167.744 22.1472 170.614 21.3272 173.534 20.6872C180.394 19.1872 187.574 18.3472 194.694 18.4172C194.84 16.5744 194.912 14.7095 194.898 12.8225L194.884 11.8772C194.724 5.82721 199.554 0.997207 205.244 0.137207ZM198.334 484.187C197.354 484.397 196.364 484.567 195.374 484.687C195.674 485.427 195.974 486.167 196.264 486.907C197.064 487.357 197.874 487.787 198.684 488.187C198.444 486.827 198.304 485.457 198.334 484.187ZM146.957 468.92L146.292 470.144C146.185 470.345 146.078 470.543 145.974 470.737C147.384 470.627 148.804 470.657 150.204 470.817L150.2 470.668C150.02 470.607 149.84 470.551 149.668 470.467C148.702 470.003 147.804 469.483 146.957 468.92ZM174.724 413.067C183.571 413.583 191.067 414.939 199.113 418.809L199.804 419.147C206.914 422.677 218.674 429.197 217.684 438.547C217.404 441.207 215.474 444.007 212.434 443.797C204.104 443.227 199.344 434.827 193.704 429.587C188.014 424.307 181.024 418.877 174.134 415.247C173.16 414.736 173.544 413.119 174.604 413.067L174.724 413.067ZM134.604 289.877C132.484 289.947 133.194 292.007 134.284 290.287C134.374 290.147 134.484 290.007 134.604 289.877ZM249.04 152.355C228.962 152.883 208.755 164.738 193.714 176.721C180.629 187.146 169.33 199.546 159.325 212.911C156.751 219.567 154.541 226.362 152.674 233.207C151.444 237.727 150.674 242.297 149.644 246.857L149.324 248.255C148.515 249.767 147.914 251.394 147.476 253.075C149.299 254.903 151.664 256.212 154.268 256.833C155.107 257.033 155.804 257.466 156.355 258.04C158.451 254.542 160.283 250.85 161.349 246.936L161.388 246.755C165.417 240.156 169.793 233.762 174.484 227.587C187.424 210.537 201.674 194.997 218.804 182.067C231.794 172.267 246.314 164.587 261.754 159.597C257.975 156.548 253.683 154.136 249.04 152.355Z'
                fill={outlineColor}
            />
        </>
    );
};

BunTwo.config = BunTwoConfig;
export default BunTwo;
