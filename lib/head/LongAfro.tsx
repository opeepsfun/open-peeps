import React from "react";

export const LongAfroConfig = {
    name: "Long Afro",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        }
    ],
    width: 734,
    height: 687,
    viewBox: "0 0 734 687"
};

const LongAfro = ({ outlineColor = "#000", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M558.514 394.944C551.65 311.269 530.75 237.159 432.545 233.999C388.227 234.395 342.988 243.81 302.234 261.23C203.178 310.896 171.749 492.377 259.02 565.431C258.501 565.726 258.376 566.579 258.989 566.991C277.019 579.121 297.06 589.101 317.132 597.487C370.598 620.091 433.539 629.909 488.066 605.39C571.279 569.982 572.527 471.457 558.514 394.944Z'
                fill={skinColor}
            />
            <path
                d='M722.306 355.943C725.726 352.863 728.276 348.823 729.566 344.293C730.746 340.163 730.826 335.653 729.576 331.533C728.236 327.113 725.346 323.594 725.996 318.993C726.066 318.543 726.156 318.073 726.296 317.603C728.796 308.943 734.946 302.693 732.746 293.093C732.126 290.383 730.956 287.944 729.326 286.023C729.506 283.944 729.666 281.844 729.796 279.743C733.406 271.293 733.276 261.253 729.426 252.933C728.956 248.673 728.246 244.453 727.246 240.303C727.706 236.633 727.066 232.593 725.886 229.383C723.813 223.735 721.251 218.169 718.471 212.695C718.798 211.198 718.651 209.616 717.825 208.209C716.323 205.652 714.338 203.404 712.309 201.207C710.874 198.644 709.429 196.102 707.996 193.593C707.332 192.44 706.599 191.161 705.791 189.806C707.993 185.72 709.169 181.738 706.84 176.933C705.965 175.128 703.559 173.797 701.578 173.915C699.413 174.044 697.228 174.141 695.031 174.224C690.925 169.266 686.272 164.815 681.286 162.253C676.236 157.973 671.116 153.773 666.136 149.483C664.726 148.263 663.306 147.043 661.896 145.823C661.886 145.793 661.876 145.753 661.866 145.723C660.826 141.933 659.656 138.193 658.486 134.433C657.756 132.103 657.536 129.663 655.266 128.393C650.526 125.743 643.236 125.323 637.796 124.873C637.256 124.393 636.716 123.923 636.176 123.443C638.646 116.863 638.206 109.873 635.096 103.283C634.036 101.043 630.356 100.033 628.336 101.513C623.676 104.933 618.146 106.143 612.676 105.643C604.636 99.4635 572.206 71.5175 567.195 68.5675C567.133 68.4615 567.083 68.3555 567.017 68.2505C564.2 63.7525 560.779 60.1405 556.933 57.2445C556.384 56.6715 555.835 56.0975 555.286 55.5235C555.769 52.0945 557.04 48.7835 559.086 46.0135C559.306 45.6935 559.556 45.3835 559.806 45.0835C563.386 40.8235 559.016 35.3435 554.016 37.5735C553.656 37.7335 553.296 37.8935 552.936 38.0635C549.092 39.7775 544.839 41.6405 540.41 43.2125C538.789 42.6055 537.137 42.0555 535.63 41.4495L519.494 34.9625C516.838 33.8945 514.03 32.9895 511.461 31.7345C510.565 25.7755 504.593 21.8675 498.391 22.0715C498.749 20.9275 499.283 19.8165 500.036 18.7635C500.256 18.4535 500.496 18.1535 500.746 17.8635C503.936 14.1535 499.676 7.27349 495.116 10.5735C494.796 10.8035 494.466 11.0335 494.146 11.2635C492.879 12.1525 491.582 12.9865 490.271 13.7945C488.172 12.8785 485.808 12.6695 483.334 13.6385C477.856 15.7835 472.806 17.9645 467.983 21.3265C467.787 21.4635 467.584 21.5785 467.386 21.7075C464.992 18.8155 461.191 16.8815 457.768 16.9025C457.698 16.9025 457.644 16.9015 457.582 16.9005C455.023 13.0015 450.332 10.7355 445.802 11.2865C446.108 5.69149 440.507 0.698487 435.408 0.0914866C429.45 -0.616513 424.08 2.84249 422.292 8.65449C421.794 10.2725 421.297 11.8915 420.799 13.5105C416.173 11.1755 411.291 9.38649 406.191 8.49349C394.578 6.45949 383.223 8.62549 372.032 11.8495C370.914 12.1715 369.797 12.5025 368.68 12.8325C367.084 10.9835 365.587 9.09049 364.156 7.32349C361.686 4.27349 355.756 6.71349 356.156 10.6335C356.434 13.3385 355.335 15.2845 353.566 16.6675C351.623 16.9515 349.745 17.0375 346.913 16.9805C343.17 16.9045 341.467 16.7875 337.553 15.2615C335.729 14.5515 333.458 12.6845 332.395 11.0085C328.32 4.58149 317.969 2.85049 313.039 8.97849C307.851 6.70749 301.301 9.83949 298.421 14.2555C296.914 16.5645 293.77 17.8555 289.812 18.9655C286.841 19.7975 283.803 20.4275 280.751 20.9785C279.391 19.1335 276.527 17.8965 274.426 19.4435C273.003 20.4945 271.621 21.5735 270.258 22.6795C259.748 24.1275 249.293 24.1795 239.272 20.0815C230.788 16.6115 222.998 26.0885 224.398 34.0445C221.941 35.3235 219.275 36.1745 216.848 37.5145C211.553 40.4405 207.205 45.0655 204.555 50.4995C204.08 51.4725 203.651 52.4605 203.242 53.4535C201.263 55.0645 199.306 56.7185 197.396 58.4635C194.216 56.8335 191.046 55.2035 187.866 53.5735C185.486 52.3535 181.476 53.2035 181.006 56.3635C180.236 61.5635 178.366 65.8735 175.696 69.4835C167.016 74.0435 158.666 79.1635 150.676 84.8535C141.486 87.7335 131.716 89.4135 123.686 91.3035C120.936 91.9535 119.436 95.5435 120.986 97.9335C122.626 100.463 124.266 102.993 125.896 105.523C121.326 109.983 117.036 114.643 112.986 119.463C101.716 132.863 92.2859 147.553 83.8459 163.113C80.5059 164.463 77.1659 165.803 73.8259 167.153C70.6059 168.453 69.1559 172.193 71.7659 174.943C73.0059 176.253 74.1159 177.633 75.0659 179.083C70.3359 186.913 64.7659 194.053 56.9759 198.733C54.6059 200.153 52.8259 202.383 51.8759 204.913C51.0659 205.453 50.2659 206.033 49.4759 206.623C47.2759 208.283 45.9459 211.903 48.5259 214.053C50.3359 215.573 52.0359 217.373 53.4759 219.363C53.7859 220.493 54.1059 221.633 54.4259 222.763C47.1859 229.423 41.1659 237.163 36.6459 245.843C35.5759 245.673 34.4759 245.783 33.5859 246.443C25.5059 252.413 25.2659 261.923 28.5159 270.423C26.5559 283.233 27.8159 296.363 31.5959 308.773C26.6259 313.733 23.6359 320.893 22.4159 327.793C20.2659 339.913 20.1159 358.553 19.5559 370.923C14.1359 376.154 10.2759 382.923 8.12591 390.203C6.31591 391.103 4.50591 392.003 2.69591 392.903C1.08591 393.703 -0.0940889 395.813 0.00591105 397.593C0.465911 406.203 4.01591 413.003 8.72591 419.163C10.3959 423.913 12.8659 428.293 16.1059 432.493C18.3459 435.374 20.5359 438.134 22.4659 441.243C22.6659 441.553 22.7859 441.843 22.8759 442.043C22.1159 442.863 21.4859 444.223 20.9359 445.193C16.3159 453.333 16.2459 462.874 22.8059 469.964C20.3359 471.983 20.2559 476.063 22.4359 478.563C36.6259 494.773 48.4559 514.484 68.1459 523.094C68.2359 523.244 68.3159 523.393 68.3859 523.543C64.3959 533.143 63.8559 538.133 67.1159 548.053C67.1359 548.143 67.1659 548.223 67.1959 548.313C68.9359 553.513 72.1359 561.844 77.9059 563.464C79.7259 563.974 81.5159 564.203 83.2859 564.193C87.8659 568.603 92.4359 573.023 97.0059 577.443C97.4059 579.633 97.6559 581.844 97.7359 584.073C97.8659 587.803 101.376 590.823 105.156 589.724C106.486 589.333 113.846 582.184 115.196 582.224C115.876 582.904 116.536 583.583 117.196 584.273C119.626 586.823 122.996 590.844 123.276 593.513C123.816 598.544 127.116 604.303 132.446 605.323C134.446 607.354 137.646 607.964 140.096 605.313C140.256 605.143 140.416 604.974 140.586 604.823C140.846 604.793 141.096 604.763 141.356 604.733C142.536 608.253 143.716 611.773 144.906 615.284C147.236 622.203 156.136 626.653 162.456 622.613C163.476 623.223 164.476 623.873 165.476 624.523C166.996 625.493 168.536 626.484 170.116 627.414C170.206 627.674 170.296 627.933 170.376 628.183C171.396 631.293 175.636 632.963 178.246 631.173C179.056 631.433 179.886 631.643 180.726 631.813C185.136 632.683 189.576 632.443 193.836 630.974C196.886 629.934 199.796 627.943 203.076 627.673C203.281 627.656 203.492 627.67 203.7 627.664C206.376 633.146 212.491 637.87 217.31 639.475C223.622 641.578 230.082 640.826 235.83 638.251C237.381 641.352 239.329 644.288 241.656 647.003C242.946 648.503 245.276 648.183 246.606 647.003C249.132 644.764 251.642 642.514 254.148 640.261C255.962 639.562 257.793 638.724 259.703 637.943C265.677 635.503 272.226 634.492 277.751 630.966C280.374 629.292 282.841 627.156 284.873 624.681C288.701 622.471 292.218 619.719 295.386 616.563C296.966 616.573 298.616 616.203 300.216 615.393C306.906 611.993 310.426 605.073 310.736 597.993C316.156 585.243 319.356 571.643 320.236 557.724C320.516 553.154 320.566 548.544 320.216 543.974C319.976 540.754 319.166 538.603 317.946 535.693C317.536 534.743 317.166 533.874 316.876 532.914C316.946 529.833 316.986 526.753 317.026 523.683C317.856 521.093 319.336 518.684 321.396 516.654C324.586 513.513 326.046 506.993 323.146 503.113C321.256 500.603 319.376 498.094 317.486 495.583C318.016 484.814 320.596 467.673 314.876 465.873C315.106 464.273 315.596 462.693 315.876 461.103C317.216 453.463 316.416 446.633 312.356 439.953C311.506 438.563 310.786 437.333 310.196 436.133C309.826 433.933 309.456 431.733 309.086 429.533C308.516 426.143 307.956 422.723 307.476 419.283C307.226 414.903 306.996 410.523 306.746 406.133C306.516 402.093 306.256 398.053 305.986 394.003C306.096 392.193 306.256 390.383 306.486 388.573C307.856 377.783 312.266 373.793 319.906 366.293C321.106 366.103 322.296 365.893 323.466 365.653C328.916 364.523 334.616 362.773 340.226 363.403C346.316 364.083 351.766 366.713 357.686 363.353C359.426 362.353 363.256 359.593 363.586 357.403C363.606 357.263 363.636 357.143 363.676 357.053C364.086 356.993 364.616 356.943 364.946 356.933C369.646 356.773 374.136 358.624 378.876 358.113C384.486 357.513 389.506 355.023 392.806 351.333C397.036 352.374 401.356 352.843 405.746 352.263C409.426 351.783 412.726 350.583 415.986 348.803C418.356 347.523 417.606 347.153 420.186 348.193C426.056 350.573 431.366 353.714 437.976 352.083C441.406 351.243 444.366 349.393 446.856 346.903C447.446 346.323 448.446 345.453 449.116 344.633C452.256 346.223 460.156 349.813 461.456 350.133C465.136 351.033 469.036 350.893 472.616 349.693C475.246 348.813 478.466 346.413 480.776 345.923C483.766 345.283 490.406 349.443 493.976 350.873C500.236 353.383 506.866 354.003 513.206 351.413C515.386 350.523 519.626 346.973 521.256 347.003C523.906 350.273 531.306 368.163 533.526 374.693C542.516 401.093 544.846 483.523 540.696 504.553C540.536 505.173 540.366 505.783 540.196 506.403C535.096 524.693 529.786 543.294 521.256 560.333C513.206 576.393 502.076 590.853 486.106 599.623C469.546 608.723 450.106 611.113 431.486 609.883C419.496 609.103 407.706 606.693 396.106 603.673C390.046 602.103 384.036 600.354 378.056 598.534C375.446 597.744 372.796 597.003 370.236 596.083C365.716 594.453 363.346 594.323 359.016 596.414C355.076 598.314 354.066 603.923 356.116 607.453C359.456 613.214 365.576 613.613 371.486 615.293C377.506 617.003 383.546 618.643 389.626 620.113C401.276 622.913 413.116 625.063 425.056 626.053C446.436 627.843 468.466 625.083 487.926 615.753C490.126 614.693 492.246 613.563 494.296 612.344C493.536 613.404 492.766 614.464 491.986 615.513C489.826 618.423 491.426 623.373 494.456 624.964C495.416 625.464 496.376 625.944 497.346 626.414C497.476 626.724 497.616 627.034 497.776 627.344C500.546 632.904 506.346 636.184 512.256 637.604C519.276 639.284 527.136 638.094 534.276 637.883C540.896 637.683 547.516 637.484 554.126 637.284C555.686 637.244 557.246 637.193 558.806 637.143C566.666 636.904 574.516 636.673 582.366 636.433C589.366 636.223 589.036 636.763 595.606 633.964C598.536 632.703 600.936 630.923 602.956 628.553C604.216 627.993 605.436 627.353 606.606 626.623C610.366 624.283 613.706 621.143 616.786 617.683C622.016 619.333 629.346 617.803 630.366 611.233C632.006 600.723 645.666 596.233 652.046 588.633C657.196 582.503 660.876 574.474 660.686 566.763C673.666 560.483 680.726 543.933 682.376 529.893C683.146 523.383 683.026 516.414 684.136 509.793C684.626 509.263 685.066 508.703 685.436 508.103C688.696 502.833 691.536 497.403 694.036 491.843C697.436 489.393 701.526 487.883 705.806 487.633C716.326 487.023 718.306 472.833 708.276 469.413C708.226 469.393 708.186 469.383 708.136 469.363C710.856 462.564 710.626 454.513 707.326 448.073C707.466 447.373 707.596 446.684 707.726 445.983C713.356 439.934 716.586 431.523 716.226 423.333C718.796 421.523 721.676 420.123 724.826 419.253C729.696 417.913 729.726 411.973 726.126 409.313C724.676 408.243 723.476 406.993 722.476 405.613C724.966 398.133 723.986 389.483 718.896 383.343C722.126 379.203 725.356 375.064 728.586 370.923C730.726 368.184 731.856 363.533 728.586 360.933C726.496 359.263 724.406 357.603 722.306 355.943Z'
                fill={outlineColor}
            />
        </>
    );
};

LongAfro.config = LongAfroConfig;
export default LongAfro;