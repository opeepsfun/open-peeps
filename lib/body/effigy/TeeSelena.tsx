import React from "react";

export const TeeSelenaConfig = {
    name: "Tee Selena",
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
    width: 829,
    height: 765,
    viewBox: "0 0 829 765"
};

const TeeSelena = ({ skinColor = "#D08B5B", topColor = "#FFCF77", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M526.847 749.808C445.696 750.036 397.091 749.085 305.299 747.758C199.058 744.947 170.426 750.002 110.908 738.316C101.808 736.382 94.885 733.454 87.863 729.371C85.346 732.215 81.079 736.446 77.027 733.645C69.563 728.713 72.985 711.481 71.134 701.751C68.07 616.067 63.169 527.826 79.923 443.179C69.766 439.877 10.25 415.394 7 407.192C60.821 266.461 178.887 101.776 334.226 107.978C337.35 111.83 340.129 117.531 343.596 121.453C364.716 113.545 394.033 105.619 395.48 75.1704C399.137 54.8494 401.772 35.8764 403.533 17.2004C403.852 15.0644 406.414 14.3304 407.988 13.4204C408.657 8.59136 410.193 3.65536 413.527 0.344358C440.751 -2.10164 502.896 9.12536 519.204 13.7514C541.452 17.5584 539.138 41.4344 543.282 59.5344C549.852 81.9094 554.425 105.131 564.189 126.991C566.398 127.295 572.586 128.372 574.867 128.771C574.986 126.294 573.824 118.942 576.095 117.442C580.304 113.212 581.275 121.258 582.21 123.882C674.142 106.522 734.259 184.533 754.404 271.673C768.993 315.496 788.326 359.846 813.563 407.41C829.389 436.942 783.921 442.429 764.861 454.215C784.529 530.741 786.897 608.675 790.125 685.805C790.977 697.669 792.135 713.802 787.932 719.706C785.938 721.256 784.552 721.213 782.53 721.326C778.629 725.536 771.937 725.256 766.304 726.458C748.496 729.697 730.247 731.86 713.102 732.187C664.978 761.971 590.786 745.316 526.847 749.808Z'
                fill={skinColor}
            />
            <rect x='245' y='229' width='438' height='288' fill={topColor} />
            <path
                d='M396.838 17.1426C399.366 4.48758 420.254 7.41958 419.305 20.1826C408.761 67.6826 415.18 125.506 348.533 120.831C390.84 195.247 521.484 240.507 563.712 142.806C542.904 140.323 538.787 91.1336 536.274 73.9226L536.171 72.3842C535.614 63.5329 535.8 55.3288 541.122 47.7586C546.432 51.7336 548.566 58.9326 550.364 65.4976L551.681 70.7558C556.083 88.2773 560.689 105.72 567.673 122.443L567.92 122.483C567.571 111.141 582.132 105.956 585.741 118.106C684.26 104.539 738.152 185.838 759.415 270.864C774.923 317.407 795.141 362.185 818.107 405.467C835.439 439.286 793.35 447.027 771.087 458.279C788.21 526.88 791.571 597.951 794.745 668.312C793.692 683.328 800.481 714.131 791.414 724.899C777.987 735.405 770.753 717.397 772.82 705.85C774.748 624.207 766.246 542.926 763.804 461.413C746.995 468.514 729.981 475.057 712.777 481.135C713.653 557.626 722.748 634.116 725.992 710.216C730.248 713.57 732.599 719.384 728.965 724.451C709.501 751.595 674.312 755.649 643.35 756.038C569.667 756.962 495.907 756.677 422.219 756.457C349.837 754.818 276.825 759.453 204.825 751.157C190.715 761.755 187.829 738.91 189.719 729.165L190.437 709.645C190.92 696.633 191.431 683.621 192.089 670.617L193.73 638.908C196.477 586.066 199.388 533.251 204.006 480.512C162.182 474.794 120.959 464.644 81.0504 450.947C84.3354 542.502 77.5964 635.039 88.8334 726.128C96.2484 736.191 81.3774 745.638 72.6964 739.334C61.9304 731.125 66.5474 715.065 64.3974 703.247L64.1215 695.607C61.1081 613.211 56.9914 529.084 72.3494 447.821L65.7432 445.257C45.6057 437.396 -6.18186 416.372 0.609364 405.999C54.6744 264.335 175.615 94.8946 335.792 102.947C339.85 105.763 341.922 111.249 344.932 115.181L349.697 113.451C368.152 106.696 388.195 98.1313 388.741 75.4156C392.235 56.0596 395.006 36.6996 396.838 17.1426ZM660.805 370.247C683.75 338.155 524.612 388.875 513.297 392.223L509.037 393.775C439.336 419.113 364.196 443.615 308.618 494.122C307.45 495.401 308.904 497.168 310.415 496.451L310.609 496.336C312.82 495.106 322.394 491.688 315.611 492.983C395.916 442.341 489.213 414.522 580.376 390.191C593.624 386.988 606.935 384.043 620.298 381.362C633.778 378.086 648.989 378.122 660.805 370.247ZM409.339 359.802C411.302 351.802 424.49 278.283 402.586 298.452C396.746 309.031 394.504 321.289 393.453 333.201C390.628 347.089 397.758 362.056 390.825 374.859C384.618 391.581 361.805 411.116 360.281 380.048C397.605 378.773 386.4 331.481 360.989 346.102C347.075 358.011 344.667 380.436 351.633 396.865C340.384 384.621 322.144 384.58 309.124 375.34C285.611 349.924 325.104 323.475 346.609 314.321C347.82 312.988 365.45 306.844 361.714 306.101C344.832 306.257 327.914 309.849 313.345 318.728C283.191 333.439 272.928 378.986 307.422 394.948C314.881 398.542 323.044 400.474 330.429 404.185C349.039 413.831 343.026 425.954 323.814 426.31C315.912 428.036 289.835 420.803 292.755 434.652C297.472 443.31 307.744 444.6 316.743 444.842C340.795 446.491 370.703 432.905 357.11 404.612C373.518 418.59 394.007 399.048 401.039 383.861C409.608 400.664 431.148 395.604 443.304 385.661C461.878 400.288 485.184 384.03 493.458 365.872C493.627 369.65 493.796 373.427 493.979 377.205C494.353 384.948 506.353 387.434 508.127 379.12C510.825 366.48 514.545 353.981 519.662 342.1C531.434 310.867 538.632 324.95 539.042 349.425C540.492 358.614 545.094 366.848 555.251 367.467C558.082 367.64 561.775 365.122 562.217 362.164L562.802 358.25C564.039 350.049 565.473 341.605 568.569 333.9C571.552 359.406 604.956 359.283 614.269 338.134C633.592 349.729 653.867 333.53 662.875 316.775L663.144 316.268C666.292 310.538 658.293 303.608 653.72 308.997L652.133 310.649C643.509 319.575 629.788 332.518 618.447 321.495C618.824 316.524 618.672 311.446 618.366 306.556C617.999 300.724 609.949 295.536 605.372 300.751C598.921 295.27 590.907 296.059 584.159 299.883C566.679 304.822 555.668 321.838 551.876 338.75C551.473 325.237 547.052 310.576 532.207 309.305C516.998 309.176 511.176 326.179 505.989 337.622C505.688 332.497 505.398 327.373 505.137 322.247C504.69 313.428 492.456 313.52 491.454 321.986L491.427 322.248C489.5 340.545 479.365 384.375 453.791 375.798C464.575 363.919 484.082 327.721 465.537 316.446C436.996 309.263 422.356 354.284 434.528 375.235L433.897 375.678C426.943 380.474 415.452 385.814 411.57 375.063L411.13 374.071C409.137 369.525 407.377 364.601 409.339 359.802ZM368.512 354.727C373.916 351.573 375.839 362.019 374.46 365.525C372.25 371.149 366.222 374.282 360.214 376.426L360.234 375.79C360.5 369.368 362.642 358.159 368.512 354.727ZM459.477 328.652C459.599 329.405 459.4 330.324 459.375 331.023C458.451 343.336 452.973 355.159 445.354 364.768C440.968 351.713 446.621 334.461 459.477 328.652ZM589.399 313.253C592.901 312.33 596.613 312.589 600.223 313.565C599.961 317.669 600.852 321.774 602.639 325.541C593.32 353.527 571.412 331.984 589.399 313.253Z'
                fill={outlineColor}
            />
        </>
    );
};

TeeSelena.config = TeeSelenaConfig;
export default TeeSelena;
