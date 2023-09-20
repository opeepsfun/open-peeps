import React from "react";

export const KillerConfig = {
    name: "Killer",
    props: [
        {
            name: "skinColor"
        },
        {
            name: "knifeColor"
        },
        {
            name: "outlineColor"
        }
    ],
    width: 818,
    height: 789,
    viewBox: "0 0 818 789"
};

const Killer = ({ skinColor = "#D08B5B", knifeColor = "silver", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M407.257 13.2591C473.811 -15.3976 522.967 6.84953 538.966 41.5565C551.626 69.0204 551.876 127.124 576.638 150.145C697.17 239.106 723.454 394.113 748.058 532.696C759.085 599.62 766.094 667.193 768.931 734.959C769.191 741.175 763.263 747.163 757.02 746.872C578.993 738.267 400.599 738.918 222.578 746.614C212.073 746.69 201.423 745.72 191.506 741.991C177.533 747.467 168.686 730.614 169.04 718.954C167.855 711.218 160.106 705.854 154.464 700.91C141.109 689.829 130.31 677.108 122.954 661.262C112.427 639.782 110.982 616.145 101.608 594.597C97.3558 582.152 95.7298 569.157 93.7178 556.247C88.4778 543.291 86.8258 529.392 86.2608 515.629C66.5058 503.214 76.1158 472.768 77.9308 453.582C81.0288 431.311 84.3268 409.04 88.3568 386.917C111.93 234.682 219.267 147.724 366.683 117.034C396.286 98.1753 396.286 17.9829 407.257 13.2591Z'
                fill={skinColor}
            />
            <path
                d='M495.468 248.888L496.545 250.157L497.638 251.42C505.331 260.223 513.898 268.253 522.64 276.077L525.141 278.308L527.549 280.441L539.815 291.275L545.285 296.062C556.245 305.612 567.314 315.045 578.278 324.577C607.089 349.617 635.848 374.697 664.448 399.977C679.538 413.307 694.589 426.697 709.558 440.186C706.178 440.016 702.778 440.436 699.348 440.467C693.818 440.516 688.278 440.186 682.799 439.457C680.872 439.197 678.949 438.888 677.034 438.536L675.6 438.264L674.169 437.977L674.129 437.707L674.109 437.637C674.037 437.476 673.811 437.517 673.713 437.653L673.683 437.709L673.669 437.766L673.659 437.867L672.231 437.557C666.05 436.184 659.958 434.402 653.968 432.397C636.108 426.406 618.749 418.686 601.938 410.207C569.238 393.727 538.468 373.497 510.228 350.207C494.799 337.477 480.058 323.766 465.638 309.907C466.709 306.896 467.709 303.907 468.778 301.117C471.213 294.767 473.567 288.371 475.888 281.969L477.276 278.127L478.826 273.816L479.159 272.865L480.611 268.592C482.643 262.685 485.016 256.731 489.858 252.727C491.024 251.767 492.266 250.913 493.54 250.096L494.179 249.69L495.468 248.888ZM322.879 150.207C327.818 141.648 337.255 143.554 345.529 146.428L345.821 146.529L346.976 146.943L348.124 147.366L351.589 148.677L353.151 149.278C361.427 152.531 369.269 156.684 377.291 160.482L378.898 161.237L377.146 162.006L375.974 162.528L374.801 163.058C366.001 167.067 357.213 171.854 351.398 179.486C350.045 178.014 347.977 177.107 345.964 176.368L345.588 176.231L343.861 175.621L337.802 173.412L326.358 169.257L326.145 169.183C324.207 168.54 319.966 167.8 318.629 166.337C317.965 165.622 317.937 164.7 318.053 163.761L318.079 163.559L318.209 162.757L318.306 162.203L318.422 161.618C319.237 157.711 320.928 153.577 322.879 150.207Z'
                fill={knifeColor}
            />
            <path
                d='M386.179 81.2941L386.845 79.4586C390.876 68.3186 395.815 67.4886 393.435 78.2886L393.075 79.9157C391.014 89.1561 388.548 98.7051 383.496 106.789C374.786 120.73 351.965 125.899 336.746 130.858C336.795 131.209 336.795 131.56 336.755 131.89C346.055 133.31 355.605 137.789 363.395 142.81C370.525 147.419 376.965 152.589 381.765 159.459L405.246 149.259C412.996 145.899 420.805 141.899 429.225 140.549C441.095 138.649 459.395 145.009 457.996 159.98C457.815 161.999 456.545 163.499 454.986 164.239C456.175 164.14 457.376 164.108 458.565 164.149C466.505 164.419 477.725 171.449 473.576 180.719C472.515 183.108 469.456 181.539 469.215 179.539C467.645 166.39 454.055 169.48 444.626 171.629C436.095 173.569 427.666 175.949 419.416 178.858C410.595 181.969 402.065 185.929 394.195 191.019C386.076 196.278 378.486 202.659 378.986 213.159C379.005 213.379 378.656 213.489 378.555 213.278C374.365 204.339 382.525 194.909 389.156 189.759C398.755 182.31 409.996 176.949 421.355 172.769C427.196 170.624 433.217 168.936 439.261 167.44L440.656 167.099C444.206 166.239 447.885 165.249 451.585 164.649C450.218 164.314 449.024 163.321 448.493 161.527L448.425 161.278C443.085 140.129 414.465 157.14 402.876 162.249C394.585 165.899 386.195 169.399 377.996 173.269L376.939 173.772C370.583 176.822 363.958 180.427 359.685 186.169C348.725 200.869 358.565 220.719 362.025 236.239C363.015 240.689 363.965 245.409 364.025 249.98C364.073 253.721 362.926 257.248 361.997 260.848L361.456 262.969C361.935 262.98 362.425 263.48 362.265 263.989C358.376 276.689 351.795 288.73 345.385 300.31C338.845 312.129 332.115 323.89 324.895 335.299C299.215 375.879 269.815 414.189 237.565 449.759C222.105 466.81 205.385 482.719 190.295 500.108C183.275 508.199 176.706 516.679 171.225 525.919C168.265 530.909 165.605 536.089 163.365 541.459L162.923 542.522C161.087 546.91 159.282 550.779 155.865 554.289C154.166 556.039 150.765 555.299 150.225 552.799C147.715 541.039 156.036 528.339 162.076 518.739C168.595 508.379 176.215 498.719 184.315 489.549C186.605 486.949 188.935 484.39 191.295 481.858C180.736 484.759 169.615 485.528 158.855 487.429C147.835 489.369 136.885 491.679 126.206 495.039C116.395 498.119 107.055 502.189 98.126 507.289C93.845 509.739 89.656 512.429 85.736 515.439C85.365 515.719 85.005 516.019 84.645 516.31C91.045 532.39 95.965 549.069 101.105 565.56C104.614 576.833 108.044 588.136 111.452 599.447L119.105 624.9C124.626 643.249 129.225 663.209 138.956 679.9C143.156 687.099 148.835 693.608 155.335 698.829C158.486 701.369 161.916 703.299 165.475 705.169C167.715 706.349 169.695 707.879 171.775 709.278C173.144 707.716 175.221 706.749 177.77 707.158L178.055 707.209C186.105 708.789 194.406 705.939 201.565 702.419C209.025 698.739 216.456 694.419 222.765 688.98C235.175 678.269 245.465 664.919 255.496 652.039C291.255 606.079 321.706 555.739 346.525 503.079C359.135 476.299 370.906 449.069 381.965 421.608C387.496 407.89 392.945 394.14 398.255 380.329L398.956 378.482C403.713 365.81 407.878 352.053 415.525 340.879C415.585 340.778 415.666 340.699 415.755 340.64C415.775 340.319 415.876 340.019 416.036 339.759C418.406 335.969 422.945 334.858 426.876 333.099C431.305 331.108 435.725 329.129 440.145 327.15C443.626 325.589 448.725 324.269 451.335 321.31C454.295 317.98 455.286 312.049 456.725 307.929C459.986 298.619 463.515 289.419 467.045 280.209C470.145 272.119 472.826 263.439 477.175 255.9C480.888 249.468 486.195 246.076 492.329 242.372L493.66 241.568C496.224 240.006 498.958 238.134 499.975 235.209C501.635 230.429 497.945 225.858 494.025 223.579C485.315 218.528 474.885 224.358 467.246 228.81C459.565 233.289 452.076 238.669 443.865 242.14C443.685 242.209 443.555 241.939 443.685 241.819C450.285 235.772 458.351 230.791 465.931 225.877L467.815 224.649C472.845 221.358 478.576 218.149 484.635 217.259C483.376 216.839 483.765 215.209 484.965 215.06C496.885 213.608 508.986 215.469 520.786 212.689C531.315 210.209 540.505 204.259 547.865 196.429C554.805 189.049 560.305 180.509 565.435 171.81C568.416 166.749 571.326 161.649 574.345 156.608C574.795 155.849 575.246 155.009 575.706 154.108C570.305 152.858 564.805 148.839 561.135 145.719C555.435 140.879 551.275 134.339 548.376 127.519C541.576 111.509 542.115 93.1986 547.206 76.8186C547.515 75.8186 548.996 75.7686 549.286 76.8186C553.195 90.8486 553.545 106.06 559.685 119.439C562.145 124.799 565.576 129.619 569.795 133.719C571.935 135.789 574.095 137.528 576.715 138.969C579.525 140.519 582.525 141.028 584.755 143.489C584.885 143.629 585.005 143.769 585.115 143.919C586.422 143.742 587.546 143.93 588.446 144.492L588.635 144.619L588.675 144.56C584.645 141.81 580.595 139.089 576.305 136.689C575.166 136.049 575.996 134.519 577.135 134.719L579.957 135.218C589.388 136.898 598.996 138.809 607.605 142.999C617.156 147.659 626.275 153.039 634.975 159.129C652.115 171.108 667.715 185.259 681.365 201.089C706.545 230.299 724.345 265.419 735.355 302.239C749.115 348.249 754.435 396.579 760.246 444.108C763.023 466.86 765.514 489.654 767.729 512.474L768.326 518.699C769.435 530.439 770.635 542.159 771.765 553.869C773.765 557.009 773.906 560.739 772.725 563.98C773.595 573.469 774.376 582.969 774.996 592.499C776.576 617.089 777.595 641.759 778.036 666.409C778.475 691.409 777.565 716.369 777.275 741.369C777.156 751.89 761.215 751.849 760.965 741.369C760.326 713.749 758.345 686.119 756.935 658.519C755.555 631.579 754.275 604.65 752.626 577.73C752.465 575.169 752.315 572.599 752.175 570.039C749.85 570.925 746.97 571.291 744.526 571.776L743.925 571.9C739.012 572.944 734.09 573.695 729.099 574.151L727.482 574.288C722.955 574.6 699.745 575.099 686.025 572.599C687.115 590.209 688.215 607.819 689.425 625.419C690.805 645.489 691.065 665.589 692.076 685.679C692.585 695.719 693.195 705.689 694.475 715.669C695.059 720.211 695.656 724.761 696.369 729.287L696.736 731.549C697.376 735.439 698.175 738.769 696.525 742.239C697.965 746.689 695.725 752.299 689.826 751.849C652.005 749.019 614.095 747.819 576.175 747.65C510.707 747.339 445.278 749.961 379.839 751.761L362.154 752.24C300.857 753.917 239.258 755.708 178.246 748.929C178.115 756.739 163.515 756.65 164.295 747.939L164.486 745.838C165.365 736.36 166.504 726.543 169.445 717.419C167.005 717.489 164.555 717.39 162.255 716.629C158.986 715.56 155.845 713.619 153.005 711.699C146.685 707.439 141.345 702.189 136.736 696.129C127.685 684.239 121.675 670.15 116.925 656.079C111.874 641.082 107.253 625.913 102.936 610.692L98.2893 594.207C92.3908 573.241 86.5989 551.957 83.085 530.439C82.706 530.939 82.185 531.369 81.496 531.679C62.695 540.079 46.615 522.849 43.435 505.429C41.5628 495.156 42.0017 484.641 42.1593 474.242L42.175 473.129C42.335 461.15 42.385 449.169 42.996 437.199C45.015 397.179 54.345 358.4 68.855 321.119C82.525 286.028 99.045 250.659 120.326 219.489C130.435 204.689 142.095 190.469 156.145 179.219C170.965 167.369 187.626 158.358 205.076 151.019C222.906 143.519 241.395 137.589 259.906 131.989C280.326 125.81 300.986 120.499 321.996 116.769C323.525 116.499 325.025 116.949 325.876 118.349C326.615 119.579 327.305 120.839 327.975 122.119C330.845 120.319 335.255 119.879 338.126 118.999C347.135 116.209 363.345 114.539 370.486 108.179C378.628 100.932 382.542 91.2707 386.179 81.2941ZM81.475 519.099C80.206 520.259 78.935 521.419 77.626 522.509C79.335 521.789 80.885 522.269 82.025 523.329C81.826 521.919 81.645 520.509 81.475 519.099ZM494.795 248.65C492.855 249.849 490.935 251.049 489.185 252.489C482.899 257.688 480.774 266.176 478.154 273.578L477.986 274.049C474.765 283.009 471.515 291.989 468.105 300.879C467.036 303.669 466.036 306.659 464.965 309.669C479.385 323.528 494.126 337.239 509.555 349.969C537.795 373.259 568.565 393.489 601.265 409.969C618.076 418.449 635.435 426.169 653.295 432.159C659.746 434.319 666.315 436.219 672.986 437.629L672.996 437.528C673.025 437.289 673.416 437.179 673.456 437.469L673.496 437.739C676.355 438.329 679.236 438.829 682.126 439.219C687.605 439.949 693.145 440.278 698.675 440.23C702.105 440.199 705.505 439.778 708.885 439.949C693.916 426.459 678.865 413.069 663.775 399.739C635.175 374.459 606.416 349.379 577.605 324.339C564.814 313.219 551.881 302.233 539.143 291.037L526.876 280.203C516.036 270.617 505.263 260.877 495.872 249.919L494.795 248.65ZM366.965 322.969C366.095 321.899 367.416 320.539 368.486 321.449C374.876 326.858 382.095 329.229 389.765 332.139C391.555 332.819 391.416 335.669 389.296 335.639C380.385 335.479 372.355 329.719 366.965 322.969ZM456.486 189.768L457.125 189.513C466.135 185.98 477.824 184.223 484.916 192.419C490.056 198.369 491.365 209.629 484.666 214.819C483.056 216.069 479.645 214.999 480.666 212.489C483.605 205.319 484.226 195.928 474.976 193.169C466.952 190.774 457.567 195.446 450.26 198.697L448.17 199.619C433.919 205.945 419.767 213.611 411.036 227.008C410.806 227.348 410.195 227.129 410.346 226.718C417.315 207.419 438.656 197.028 456.486 189.768ZM350.916 148.439L347.452 147.129C338.642 143.84 327.671 140.5 322.206 149.969C320.158 153.508 318.396 157.889 317.634 161.965L317.536 162.519C317.326 163.778 317.055 165.129 317.956 166.099C319.345 167.619 323.865 168.358 325.685 169.019L337.13 173.174L342.845 175.259C345.445 176.209 348.805 177.159 350.725 179.249C357.445 170.429 368.135 165.409 378.225 160.999C369.135 156.769 360.326 151.98 350.916 148.439Z'
                fill={outlineColor}
            />
        </>
    );
};

Killer.config = KillerConfig;
export default Killer;
