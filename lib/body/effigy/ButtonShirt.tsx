import React from "react";

export const ButtonShirtConfig = {
    name: "Button Shirt",
    props: [
        {
            name: "skinColor"
        },
        {
            name: "topColor"
        },
        {
            name: "outlineColor"
        }
    ],
    width: 818,
    height: 784,
    viewBox: "0 0 818 784"
};

const ButtonShirt = ({ skinColor = "#D08B5B", topColor = "#FFCF77", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M421.519 772.902C339.242 772.902 257.407 768.858 178.2 760.881L178.165 760.724L173.959 760.216C161.99 758.724 149.754 757.548 137.921 756.411C106.706 753.411 74.426 750.308 44.318 741.095L38.999 739.467L38.478 740.8C37.695 740.394 36.873 739.973 35.999 739.569C40.736 662.206 48.638 586.274 55.774 521.987L56.067 519.355L54.32 517.366C44.231 505.877 40.514 496.25 42.97 487.953C63.089 445.96 67.354 392.386 71.479 340.569C80.03 233.173 88.106 131.734 227.587 127.343L227.81 127.333L229.281 127.231C258.368 125.238 288.445 123.176 315.313 109.803L318.444 108.246L318.63 104.754C318.856 100.54 324.044 95.528 328.212 91.502C329.647 90.116 331.001 88.807 332.219 87.496L332.474 87.221L332.693 86.918C338.981 78.18 346.366 72.965 352.448 72.965C361.306 72.965 365.598 84.082 367.368 90.709L370.159 101.156L377.546 93.258C394.904 74.705 403.208 54.302 402.276 32.544L402.906 32.348L402.098 27.15C400.573 18.129 401.587 11.437 405.115 7.263C409.245 2.376 417.344 0 429.875 0C438.155 0 447.165 1.044 455.115 1.965C457.714 2.266 460.219 2.556 462.585 2.799C478.499 4.475 494.768 7.491 510.5 10.407L512.708 10.816L511.214 14.885L515.036 17.527C520.129 21.048 523.922 28.111 525.443 36.904L525.511 37.301L525.633 37.687C527.895 44.857 528.753 52.864 529.662 61.341C531.19 75.604 532.769 90.351 541.307 103.047L546.437 110.674L551.355 102.908C553.754 99.119 556.971 97.276 561.189 97.276C572.567 97.276 586.463 109.858 588.932 119.61L589.725 122.742L592.776 123.803C613.727 131.098 630.99 136.422 646.221 141.119C684.463 152.912 703.658 158.832 715.975 176.183C728.646 194.032 735.058 225.186 745.725 287.169C757.397 354.338 765.196 423.377 772.737 490.143C782.208 574.003 792 660.686 809.575 744.774C808.352 746.032 807.425 747.284 806.793 748.528C799.035 749.214 791.145 749.835 783.47 750.439C770.696 751.445 757.487 752.485 744.58 753.838L741.716 754.138L741.081 755.126C739.903 755.225 738.742 755.341 737.601 755.456C735.781 755.639 734.026 755.815 732.311 755.915L731.792 754.877L727.628 755.344C623.97 766.995 520.98 772.902 421.519 772.902Z'
                fill={skinColor}
            />
            <path
                d='M352.448 72.965C361.306 72.965 365.598 84.082 367.368 90.709L370.159 101.156L374.47 96.546L366.625 110.273L427.702 166.33L430.04 167.977C455.001 185.461 471.994 194.203 481.02 194.203C490.325 194.203 518.02 171.409 564.106 125.819L539.221 110.273L541.464 103.282L546.437 110.674L551.355 102.908C553.754 99.119 556.971 97.276 561.189 97.276C572.567 97.276 586.463 109.858 588.932 119.61L589.725 122.742L595.273 124.669C611.799 130.381 626.008 134.865 638.747 138.811L655.04 143.845C687.49 153.932 704.643 160.22 715.975 176.183C728.393 193.675 734.799 223.945 745.09 283.487L745.725 287.169C756.867 351.285 764.479 417.105 771.707 481.025L774.518 505.898C783.462 584.828 793.098 665.941 809.575 744.774C808.352 746.032 807.425 747.284 806.793 748.528C801.621 748.985 796.39 749.414 791.204 749.828L776.464 750.993C765.903 751.833 755.14 752.731 744.58 753.838L741.716 754.138L741.081 755.126C740.296 755.192 739.518 755.266 738.749 755.341L737.601 755.456C735.781 755.639 734.026 755.815 732.311 755.915L731.792 754.877L727.628 755.344C623.97 766.995 520.98 772.902 421.519 772.902C339.242 772.902 257.407 768.858 178.2 760.881L178.165 760.724L173.959 760.216C164.384 759.022 154.638 758.031 145.064 757.1L131.217 755.764C102.106 752.937 72.2755 749.65 44.318 741.095L38.999 739.467L38.478 740.8C37.695 740.394 36.873 739.973 35.999 739.569L36.3231 734.356C41.0908 658.799 48.7984 584.829 55.774 521.987L56.067 519.355L54.32 517.366C44.231 505.877 40.514 496.25 42.97 487.953C63.089 445.96 67.354 392.386 71.479 340.569L71.9926 334.133C80.3198 230.225 90.6818 133.637 223.442 127.504L227.81 127.333L234.423 126.876C261.895 124.956 290.025 122.389 315.313 109.803L318.444 108.246L318.63 104.754C318.831 100.998 322.975 96.6081 326.824 92.8474L329.421 90.331C330.41 89.3678 331.349 88.4324 332.219 87.496L332.474 87.221L332.693 86.918C338.981 78.18 346.366 72.965 352.448 72.965Z'
                fill={topColor}
            />
            <path
                d='M244.542 357.727C244.778 357.314 245.568 357.459 245.504 357.988C242.067 380.806 233.73 402.915 228.656 425.443L228.81 425.872C231.4 433.281 237.352 460.007 222.795 452.576L221.631 458.669C202.696 558.201 187.413 658.797 189.544 760.406C189.857 768.493 185.624 792.45 174.188 780.715C165.788 766.624 169.487 749.347 168.825 733.703C170.269 647.823 179.016 561.279 201.477 478.198L202.406 475.325C217.264 429.646 217.208 444.277 210.226 393.273C210.057 388.567 206.655 378.339 211.134 375.513C215.17 378.06 216.508 385.539 217.97 389.971L218.07 390.268C220.242 396.605 222.179 402.996 224.098 409.413C230.476 392.187 235.602 373.831 244.542 357.727ZM481.939 751.534C490.187 749.097 497.613 758.482 494.732 766.168C492.867 774.184 477.287 779.157 476.694 767.981C472.433 763.425 473.816 755.047 479.636 752.517C479.577 752.506 481.401 751.772 481.939 751.534ZM681.764 296.914C682.071 295.854 682.951 296.82 682.714 297.494C684.554 306.817 683.058 317.071 683.48 326.756C684.658 323.982 686.184 321.331 688.167 318.847C689.886 316.696 693.005 319.769 691.217 321.896C686.777 327.179 684.835 333.548 683.989 340.167C690.504 478.377 709.688 616.345 742.598 750.765C749.731 769.304 720.962 776.813 724.119 756.626C702.347 662.347 684.987 566.078 681.105 469.161C675.868 426.632 677.931 382.321 678.649 339.238C678.678 325.202 680.035 310.82 681.764 296.914ZM388.803 15.0005C396.887 15.6415 401.573 29.0615 403.185 36.4235C409.095 65.2795 393.206 95.3115 372.294 114.235C403.171 142.053 436.701 166.845 472.887 187.373C477.809 181.798 486.504 182.599 492.562 185.961C512.155 167.427 532.004 149.287 551.079 130.235C521.424 111.478 518.947 72.8577 524.883 41.4354L525.066 40.4855C525.515 37.7885 529.273 38.7675 529.486 41.0845L529.619 42.5768C531.399 63.0122 531.558 85.075 542.923 102.931C555.853 82.5105 586.84 103.408 591.386 121.37C721.342 166.614 722.558 139.948 748.277 289.384C774.279 442.155 781.635 597.548 812.093 749.622C812.469 753.935 808.553 757.462 804.654 758.048C789.755 760.031 789.292 719.772 785.858 708.529C778.527 666.556 772.991 624.29 768.219 581.956C753.569 456.557 748.554 329.254 720.187 205.904C717.334 195.526 713.271 185.259 706.089 177.073C676.156 144.501 624.238 151.622 591.796 122.594C594.938 132.268 595.191 142.961 594.573 153.066C591.023 206.919 588.881 260.874 585.068 314.708C584.626 320.754 577.308 322.74 573.882 317.737C546.734 278.115 518.871 239.09 492.408 198.987C488.144 201.009 483.595 201.931 478.712 200.962C470.969 210.738 474.314 236.31 471.786 249.718L470.848 259.977C456.39 418.991 445.779 578.402 446.565 738.153L446.595 743.307C446.588 748.208 446.964 753.289 446.598 758.175C443.292 774.053 427.661 768.372 428.538 754.211C427.842 575.219 435.238 395.062 464.773 218.304C438.11 251.91 411.478 285.542 384.803 319.141C382.807 321.675 379.013 320.561 377.43 318.214L377.33 318.059L377.986 319.819C376.382 319.305 374.981 318.329 373.527 317.487C360.116 284.557 351.437 250.018 340.901 216.137C332.107 182.915 318.923 150.329 314.065 116.286L313.845 116.194C300.649 122.828 286.029 127.086 271.254 127.339C254.545 131.643 236.971 133.673 220.303 135.861C99.1356 141.045 75.1806 261.352 76.2886 361.072L76.0782 365.833C74.812 395.488 74.2148 425.66 66.8626 454.507C64.1486 459.948 55.5616 494.955 46.9246 482.52C39.6426 492.253 41.9226 497.921 51.6276 503.934C68.5786 518.486 85.1186 541.655 88.3806 565.532C88.9876 569.939 82.6616 573.812 80.4126 568.893L79.29 566.445C72.7219 552.188 65.7776 538.243 56.3976 525.854C55.9826 526.548 55.4176 527.132 54.7416 527.522C52.4876 586.607 47.9236 645.585 43.8426 704.566C41.6112 713.019 45.817 766.674 28.7144 753.418L28.1896 752.995C24.2833 744.726 26.6337 734.727 27.4321 725.898L29.8356 697.621C35.0266 639.904 39.2766 582.073 46.4486 524.559L45.8855 523.912C37.6373 514.355 29.9309 501.736 33.9926 488.984C36.0746 481.316 42.9776 477.499 47.6476 471.639C72.9846 338 29.2116 131.077 224.036 124.579L232.191 124.015C258.454 122.152 285.501 119.498 309.277 107.665C309.724 99.3215 319.255 92.2515 324.46 86.6455C340.494 64.3675 362.018 63.2505 369.801 92.3935C390.498 70.1385 398.858 44.2975 388.803 15.0005ZM476.028 662.486C486.117 652.761 499.634 670.476 481.34 682.99C478.021 689.073 468.949 684.783 470.492 678.416L470.473 677.344C470.338 671.803 469.792 664.961 476.028 662.486ZM477.103 532.701C495.523 526.766 490.933 560.313 478.781 564.89C471.438 568.537 468.921 559.409 470.262 553.839C465.492 546.592 469.861 537.056 477.103 532.701ZM476.806 436.3C473.408 421.926 494.038 419.533 494.157 434.547C494.823 440.86 489.065 444.968 487.61 450.457C487.303 454.029 482.92 456.545 480.115 453.562C475.435 448.582 474.429 441.825 476.806 436.3ZM474.215 308.578C476.317 291.752 495.361 298.845 488.636 301.648C488.5 301.794 488.359 301.937 488.21 302.082C495.901 302.829 495.362 311.861 494.506 317.639C491.488 330.574 471.937 318.806 474.215 308.578ZM357.099 255.057C358.664 260.717 360.24 266.374 361.853 272.021C366.008 286.568 370.945 300.728 376.151 314.865C369.781 294.935 363.433 274.997 357.099 255.057ZM367.625 94.8415C349.392 64.2245 339.553 98.7415 326.33 112.308C335.672 179.096 363.943 241.485 383.185 305.868C409.994 271.602 436.832 237.357 463.648 203.096C465.252 201.042 466.797 198.889 468.398 196.783C434.735 177.329 402.995 154.33 376.277 125.796C371.138 126.895 367.197 120.025 363.508 117.166L363.121 116.848C359.708 113.973 356.546 109.437 358.694 104.964C358.409 104.358 358.842 103.8 359.431 103.616C362.099 100.687 364.929 97.8635 367.625 94.8415ZM580.279 158.997C582.059 137.145 578.455 105.817 549.07 110.802C554.303 117.97 564.142 119.128 569.324 126.01C571.221 129.161 568.893 133.064 565.445 133.662C542.637 154.318 521.075 175.477 497.788 195.814C523.665 229.316 548.508 263.453 573.673 297.472C575.411 251.294 578.467 205.164 580.279 158.997Z'
                fill={outlineColor}
            />
        </>
    );
};

ButtonShirt.config = ButtonShirtConfig;
export default ButtonShirt;
