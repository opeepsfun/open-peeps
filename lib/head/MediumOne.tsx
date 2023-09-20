import React from "react";

export const MediumOneConfig = {
    name: "Medium One",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        }
    ],
    width: 474,
    height: 567,
    viewBox: "0 0 474 567"
};

const MediumOne = ({ outlineColor = "#000", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M195.396 82.6721C346.966 75.2183 357.552 119.272 378.366 147.357C388.695 161.295 415.363 181.936 419.787 229.602C422.858 262.69 403.309 300.827 403.309 330.393C403.309 345.485 421.787 377.886 413.185 399.882C394.038 448.841 353.498 503.176 301.838 503.176C250.178 503.176 154.816 474.704 97.7334 392.973C79.0362 366.201 43.8265 90.1258 195.396 82.6721Z'
                fill={skinColor}
            />
            <path
                d='M416.009 333.345C412.699 329.695 410.129 326.695 409.269 321.675C408.909 319.584 408.749 317.435 408.679 315.275C421.969 296.695 434.891 252.808 434.889 228.804C434.887 194.939 422.399 162.355 401.899 135.405C361.939 82.9143 295.419 56.0043 230.319 58.1153C167.979 60.1243 101.671 83.1043 62.7833 132.226C-66.2407 295.201 42.0473 473.217 121.359 510.254C128.263 513.478 150.561 512.358 147.454 505.473C138.53 485.694 131.499 449.265 129.859 441.064C132.399 442.775 134.959 444.445 137.529 446.175C142.079 449.224 148.179 452.714 153.899 451.704C154.169 451.655 154.339 451.365 154.349 451.115C154.609 445.744 150.769 440.224 147.389 436.394C142.699 431.074 138.239 425.624 133.189 420.634C131.039 418.504 128.859 416.394 126.679 414.284C126.399 401.624 127.249 388.905 129.519 376.175C133.449 354.105 140.229 332.605 148.019 311.445C154.529 306.644 160.849 301.595 166.699 296.074C180.789 282.784 191.539 266.525 200.759 249.425C200.869 249.374 200.989 249.314 201.099 249.265C218.969 240.954 236.689 232.325 254.269 223.425C263.339 218.834 272.349 214.134 281.359 209.435C286.259 206.874 291.309 204.544 296.319 202.134C294.969 209.054 293.149 215.874 290.939 222.584C289.119 228.095 294.679 232.164 299.599 231.254C316.349 228.155 332.539 221.925 347.109 213.105C354.329 208.735 361.199 203.685 367.569 198.144C373.939 207.634 381.679 216.534 389.489 224.195C394.759 229.365 400.269 234.284 405.989 238.945C403.399 256.775 401.179 274.644 398.369 292.435C396.899 301.735 395.129 311.034 394.019 320.384C392.809 330.574 396.179 337.834 402.889 345.284C412.269 355.695 412.259 370.754 408.669 383.685C408.229 385.284 407.679 386.845 407.109 388.394C406.989 388.714 406.639 389.584 406.509 389.925C406.509 389.935 406.509 389.945 406.499 389.964C406.499 389.974 406.489 389.985 406.489 389.994C406.479 389.994 406.479 390.004 406.469 390.015V390.034V390.044L406.459 390.054C406.039 391.034 405.589 391.994 405.139 392.954C403.089 397.284 400.799 401.515 398.419 405.675C386.719 426.214 371.939 445.004 355.099 461.584C347.259 469.304 339.109 476.485 329.899 482.365C327.959 483.595 325.979 484.784 323.949 485.874C322.859 486.464 321.739 487.015 320.619 487.574C318.979 488.384 319.659 488.064 318.659 488.464C316.849 489.175 314.999 489.794 313.109 490.284C312.099 490.544 311.079 490.765 310.049 490.954C310.039 490.954 310.019 490.964 309.989 490.964C309.979 490.964 309.969 490.974 309.959 490.964C309.949 490.974 309.929 490.974 309.909 490.974C309.529 491.004 308.849 491.064 308.719 491.064C294.359 491.115 280.119 489.185 266.219 485.615C258.689 483.675 251.169 481.324 244.089 478.095C240.489 476.445 236.969 474.615 233.599 472.544C232.089 471.615 230.659 470.494 229.069 469.685C226.689 468.464 224.359 468.595 221.789 468.485C217.869 468.324 215.089 472.425 216.049 476.025C217.219 480.414 219.059 483.004 222.839 485.615C225.859 487.695 229.059 489.534 232.319 491.204C239.419 494.855 246.929 497.824 254.529 500.254C268.759 504.794 283.739 507.584 298.639 508.605C309.489 509.345 318.889 507.894 328.769 503.324C339.199 498.494 348.549 491.284 357.199 483.804C376.569 467.064 393.419 446.754 407.709 425.564C421.139 405.644 431.559 383.954 428.129 359.224C426.759 349.304 422.719 340.765 416.009 333.345Z'
                fill={outlineColor}
            />
        </>
    );
};

MediumOne.config = MediumOneConfig;
export default MediumOne;