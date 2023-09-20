import React from "react";

export const CrossArmColorTeeConfig = {
    name: "Cross Arm Color Tee",
    props: [
        {
            name: "skinColor"
        },
        {
            name: "topColor"
        },
        {
            name: "shoesColor"
        },
        {
            name: "outlineColor"
        }
    ],
    width: 1645,
    height: 2507,
    viewBox: "0 0 1645 2507"
};

const CrossArmColorTee = ({ skinColor = "#D08B5B", topColor = "#FFCF77", shoesColor = "white", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M1153.53 2404.69C1159.57 2380.29 1150.69 2360.82 1125.19 2346.45C1122.99 2340.64 1073.7 2321.82 1034.54 2294.18C999.354 2269.35 973.832 2235.27 972.762 2233.38C972.762 2233.38 964.85 2214.97 963.948 2206.67C959.623 2166.82 962.125 2140.71 959.454 2128.31C977.45 2125.95 1021.69 957.169 1014.54 918.432C1026.26 915.856 1038.68 913.139 1049.86 906.531C1050.75 906.302 1049.28 903.712 1049.32 903.225C1077.35 848.198 1034.36 661.084 1007.41 609.279C1028.81 608.722 1056.99 605.811 1070.24 587.941C1076.52 585.878 1080.47 582.281 1083.51 576.503C1087.02 570.998 1090.27 565.223 1093.2 559.303C1107.46 529.681 1116.25 496.79 1111.5 464.153C1112.41 463.866 1117.07 463.836 1117.31 462.53C1117.76 454.507 1116.29 447.437 1113.88 439.859C1089.4 354.504 1059.92 270.47 1020.96 190.113C1001.44 147.103 961.047 131.408 919.195 115.262C899.061 107.351 878.918 98.2196 857.905 93.0381C857.64 91.5678 858.895 87.0947 856.141 87.4594C852.74 88.1688 853.411 93.6379 852.15 96.7068C803.561 56.9285 834.374 36.4306 805.076 14.6453C774.76 -1.09191 737.788 -1.7312 704.363 1.67473C692.032 2.03143 682.165 7.5904 679.257 20.0037C668.657 45.688 643.82 64.5921 616.724 70.3872C614.485 66.4013 608.329 54.9701 604.881 58.5786C565.748 59.9145 506.415 74.2812 469.787 85.0296C433.017 94.4214 395.819 111.567 386.199 151.523C368.744 222.722 396.514 515.332 442.064 571.684L443.545 571.708C451.62 579.973 462.596 586.031 475.034 590.091C474.755 616.435 466.452 642.156 462.32 667.92C453.017 714.646 445.867 761.422 435.504 808.396C435.458 813.63 415.741 885.249 435.18 870.888C439.192 872.862 444.107 875.011 448.428 876.855C427.776 923.925 418.326 999.872 419.79 1058.02C420.156 1092.65 418.724 1122.98 410.957 1158.44C353.494 1458.9 302.83 2130.94 301.639 2139.93C300.544 2148.51 307.815 2195.12 301.639 2207.42C296.158 2218.33 272.778 2211.89 268.305 2216.1C256.69 2235.02 262.008 2247.07 252.481 2265.96C247.595 2270.33 236.671 2279.89 233.087 2286.62C225.832 2293.6 105.677 2372.45 110.547 2384.42C110.547 2384.42 109.999 2390.16 109.815 2391.41C99.571 2451.02 116.629 2450.52 171.819 2459.29C252.441 2473.51 312.695 2446.15 380.831 2409.59C403.473 2394.32 435.655 2365.16 425.18 2330.63C424.891 2328.52 418.678 2292.2 416.214 2273.76C416.214 2273.76 422.891 2258.99 397.047 2260.83C401.297 2256.17 410.634 2195.73 407.449 2187.73C405.426 2167.14 408.567 2148.44 407.573 2127.25C418.399 2128.05 608.466 1226.89 727.684 1170.89C728.421 1176.88 726.991 1188.02 734.935 1189.14C771.81 1476.84 860.47 2121.37 864.541 2122.49C858.431 2155.35 858.616 2231.51 858.502 2264.13C857.567 2265 853.275 2268.83 852.584 2269.77C852.44 2269.52 849.645 2272.32 849.502 2272.39L849.124 2271.52C836.566 2299.84 818.263 2329.01 834.44 2356.76C822.434 2355.89 824.361 2378.99 823.824 2389.63C830.662 2410.43 1025.06 2466.57 1068.51 2469.24C1082.78 2471.73 1149.25 2450.58 1162.04 2447.55C1178.62 2444.45 1162.36 2413.64 1153.53 2404.69Z'
                fill={skinColor}
            />
            <path
                d='M853.846 2268.58C850.159 2282.37 856.858 2289.26 873.942 2289.26C899.568 2289.26 915.812 2249.88 928.486 2245.37L933.413 2243.58C940.821 2240.86 953.389 2236.16 971.115 2229.47C971.636 2230.74 972.185 2232.04 972.762 2233.38C973.832 2235.27 999.354 2269.35 1034.54 2294.18C1073.7 2321.82 1122.99 2340.64 1125.19 2346.45C1150.69 2360.82 1159.57 2380.29 1153.53 2404.69C1162.36 2413.64 1178.62 2444.45 1162.04 2447.55C1149.25 2450.58 1082.78 2471.73 1068.51 2469.24C1025.06 2466.57 830.662 2410.43 823.824 2389.63L823.866 2388.64C824.258 2377.63 822.794 2355.92 834.44 2356.76C818.586 2329.56 835.848 2301.01 848.364 2273.22L849.124 2271.52L849.502 2272.39C849.645 2272.31 852.44 2269.52 852.584 2269.77C852.76 2269.53 853.172 2269.1 853.702 2268.58L853.846 2268.58ZM338.841 2243.11L339.015 2243.7C341.97 2253.9 350.055 2289.26 359.593 2289.26C366.082 2289.26 374.087 2285.24 383.61 2277.2L384.71 2276.19C393.071 2268.52 399.821 2263.35 404.959 2260.69C416.15 2261.25 419.902 2265.6 416.214 2273.76L416.527 2276.06C419.165 2295.05 424.903 2328.61 425.18 2330.63C435.655 2365.16 403.473 2394.32 380.831 2409.59C312.695 2446.15 252.441 2473.51 171.819 2459.29L166.955 2458.52C115.63 2450.5 99.8783 2449.23 109.815 2391.41L109.884 2390.88C110.108 2389.02 110.547 2384.42 110.547 2384.42C105.677 2372.46 225.832 2293.6 233.087 2286.62C236.671 2279.89 247.595 2270.33 252.481 2265.96C262.008 2247.07 256.69 2235.02 268.305 2216.1C271.447 2213.14 283.916 2215.44 292.959 2213.29C308.21 2215.78 336.128 2234.07 338.841 2243.11Z'
                fill={shoesColor}
            />
            <path
                d='M615.575 68.3429L616.724 70.3872C644.312 150.884 689.529 194.204 752.375 200.349C815.22 206.493 847.642 186.336 849.641 139.878L856.626 87.4471C858.74 87.66 857.657 91.6628 857.905 93.0381C878.918 98.2196 899.061 107.351 919.195 115.262L925.46 117.684C965.034 133.046 1002.42 149.254 1020.96 190.113C1059.92 270.47 1089.4 354.504 1113.88 439.859C1116.29 447.437 1117.76 454.507 1117.31 462.53C1117.07 463.836 1112.41 463.866 1111.5 464.153C1116.26 496.79 1107.46 529.681 1093.2 559.303C1090.27 565.223 1087.02 570.998 1083.51 576.503C1080.47 582.281 1076.52 585.877 1070.24 587.941C1057 605.811 1028.81 608.722 1007.41 609.279C1034.36 661.084 1077.35 848.197 1049.32 903.225C1049.28 903.712 1049.89 917.771 1049 918C1037.83 924.608 1017.72 928.424 1006 931L985 934C985.755 939.164 1015.49 943.051 1015.09 972.77L435 990C439.142 948.676 438.854 920.961 452 891L436 885C432.177 883.353 438.619 872.58 435.18 870.888C415.741 885.249 435.458 813.63 435.504 808.396C445.867 761.422 453.017 714.646 462.32 667.92C466.452 642.156 474.755 616.435 475.034 590.091C462.855 586.115 452.078 580.224 444.054 572.222L443.545 571.708L442.064 571.684C396.514 515.332 368.744 222.722 386.199 151.523C395.819 111.567 433.017 94.4214 469.787 85.0296L472.012 84.3805C508.781 73.7118 566.531 59.8878 604.881 58.5786C607.848 55.474 612.819 63.5018 615.575 68.3429ZM664.678 383.191C634.798 383.191 603.041 386.718 569.409 393.772L564.126 401.211L569.409 446.019C590.099 443.858 611.892 446.756 634.789 454.714L635.88 455.097C659.176 463.344 675.827 469.675 685.833 474.09L722.104 504.627L710.472 559.155L713.278 559.286C758.705 561.329 784.237 559.048 789.871 552.442C795.621 545.702 798.171 538.882 797.523 531.981L796.408 529.318C778.395 486.131 770.524 458.365 772.795 446.019C775.112 433.422 775.112 423.549 772.795 416.401L770.27 415.086C729.159 393.823 693.961 383.191 664.678 383.191Z'
                fill={topColor}
            />
            <path
                d='M687.347 13.0114C693.639 12.8158 694.84 20.7336 690.539 24.0166L690.362 24.1471C686.695 26.7481 684.975 29.0741 682.985 33.2241C673.282 58.9051 645.92 73.6341 619.159 68.1801C628.454 85.5201 634.696 102.302 644.001 119.349C686.845 207.61 827.549 236.323 844.377 115.223C818.595 110.241 803.316 52.2611 819.859 34.9631L820.306 37.0685C825.074 59.7781 828.336 83.0277 845.551 100.151C846.075 100.304 846.576 100.351 847.07 100.351C847.726 97.2421 848.482 94.1671 849.423 91.1511C851.714 83.7921 863.181 85.1761 862.859 93.1371C897.192 103.599 930.186 118.418 963.025 132.734C990.327 144.644 1012.65 165.948 1025.37 192.926C1061.02 266.721 1088.25 344.619 1111.99 422.983C1113.58 433.573 1131.33 472.931 1117.01 476.715C1120.52 509.137 1111.54 541.932 1097.66 571.047C1091.22 581.986 1086.67 597.152 1073.73 601.714C1060.3 618.587 1035.74 622.965 1015.29 624.157C1042.79 688.907 1080.16 853.839 1054.89 918.18C1057.13 928.735 1028.01 933.748 1020.22 936.16C1026.5 973.69 1025.13 1012.35 1022.42 1050.15C997.061 1372.56 992.248 1696.75 1018.93 2019.24C1020.5 2039.34 1022.19 2059.44 1023.98 2079.53L1025.06 2091.58C1026.48 2107.62 1027.69 2123.59 1027.32 2139.76C1027.2 2145.37 1022.55 2148.74 1017.9 2149.03C1002.28 2159 981.307 2159.08 963.24 2161.48C966.431 2178.9 968.219 2206.07 973.804 2220.73C985.43 2217.69 992.923 2228.53 981.336 2234.65C995.599 2242.57 1002.94 2257.72 1014.35 2268.35C1045.72 2255.62 1051.56 2274.65 1025.93 2278.99C1032.9 2284.81 1040.29 2290.18 1047.94 2295.28L1048.48 2295.21C1057.53 2293.83 1074.57 2286.36 1078.85 2296.26C1080.77 2303.43 1071.92 2305.71 1065.51 2306.58C1071.2 2310.16 1076.91 2313.73 1082.62 2317.29C1087.61 2315.09 1092.57 2312.35 1097.66 2310.59C1110.2 2307.8 1111.28 2324.07 1094.92 2324.98C1105.17 2332.56 1119.31 2328.19 1125.87 2338.88C1149.84 2348.56 1161.17 2377.79 1155.57 2401.15C1163.99 2408.64 1169.9 2419.86 1170.58 2431.13C1172.2 2443.21 1162.59 2454.58 1149.57 2457.76C1134.9 2462.64 1120.02 2467.09 1105.18 2471.28L1103.63 2471.82C1091.4 2475.99 1078.04 2479.72 1065.32 2478.99C989.895 2474.49 889.309 2443.51 828.935 2404.95C813.877 2393.63 811.244 2365.64 831.968 2356.69C822.418 2339.37 826.981 2326.79 831.029 2307.94C833.84 2295.64 837.657 2283.02 844.566 2271.64C845.179 2270.63 846.653 2270.93 846.735 2271.93C847.639 2284.79 846.438 2297.96 845.48 2310.91L845.375 2312.35C844.517 2324.3 842.581 2328.7 845.822 2340.01C853.581 2368.88 928.381 2383.29 957.775 2395.2C980.85 2402.34 1004.28 2408.75 1028.03 2414.37L1029.77 2414.75C1049.83 2419.16 1070.48 2425.84 1091.6 2422.37C1102.55 2414.41 1118.99 2416.65 1129.76 2407.53C1145.99 2390 1133.23 2364.3 1121.85 2348.37C1110.85 2351.88 1101.45 2342.43 1093.35 2337.44L1093.05 2337.26C1084.78 2332.03 1076.53 2335.69 1068.25 2330.47L1066.38 2330.83C1035.96 2336.63 1012.4 2343.24 1060.92 2325.89C1052.93 2320.89 1044.92 2315.85 1037.15 2310.55C1021.22 2312.47 1003.76 2320.84 988.945 2321.6C998.913 2312.31 1012.51 2307.17 1025.33 2302.06C1017.87 2296.4 1010.77 2290.34 1004.42 2283.67L998.351 2285.18C961.085 2294.44 946.436 2297.11 996.606 2274.54C986.739 2263.59 985.136 2247.36 974.288 2237.06C956.842 2240.71 940.812 2248.38 926.603 2258.29C920.857 2262.41 916.529 2267.55 911.978 2272.69C890.413 2300.44 857.005 2304.72 846.799 2268.73C846.622 2267.99 847.779 2267.53 848.105 2268.16L848.143 2268.25C853.024 2279.3 868.774 2288.26 881.93 2281.39L882.328 2281.18C895.193 2274.47 901.169 2260.79 911.303 2251.47C924.979 2239.13 942.121 2230.85 959.808 2224.63C955.52 2208.97 954.073 2180.44 954.56 2162.06C924.78 2163.47 894.805 2162.03 865.55 2156.37C870.237 2190.54 867.156 2235.01 869.31 2265.49C872.424 2275.71 853.48 2282.11 851.466 2271.92C850.353 2238.95 853.578 2191.39 858.6 2154.59L856.498 2154.08C854.515 2153.59 852.431 2152.99 850.73 2152.03C831.956 2154.16 837.077 2106.45 833.925 2093.03C812.744 1797.15 768.127 1503.92 730.21 1209.99C724.952 1207.98 724.019 1201.52 723.15 1196.13C675.37 1228.47 665.848 1293.11 644.46 1343.21C551.053 1602.63 509.319 1876.32 444.581 2143.46L444.937 2143.55C445.191 2143.63 445.193 2143.67 444.662 2143.63L444.54 2143.62V2143.64C448.54 2144.17 451.691 2148.37 449.25 2152.28C441.962 2166.99 421.759 2161.78 408.46 2160.85C409.751 2183.5 404.9 2232.38 407.974 2252.57C424.379 2252.87 425.422 2270.93 427.594 2281.66L427.762 2282.76C430.661 2301.1 440.404 2335.49 433.126 2350.31C444.377 2363.7 436.284 2381.89 424.612 2391.03C412.113 2400.26 396.555 2405.68 382.426 2412.79C315.927 2439.66 251.592 2491.46 170.102 2471.53L166.554 2470.78C109.44 2458.71 93.0311 2453.35 104.374 2396.82C99.7156 2385.33 99.6846 2372.75 106.239 2362.59C117.927 2347.59 137.565 2339.38 153.191 2327.99C179.658 2310.2 207.827 2294.65 233.678 2276.14C232.717 2275.31 234.051 2275 234.835 2275.14C253.079 2260.86 251.372 2236.13 264.1 2218.48C267.283 2209.39 283.356 2207.18 293.941 2208.44C290.634 2191.49 306.789 2114.36 308.841 2168.84L308.84 2169.62C308.88 2178.03 310.257 2206.11 307.781 2211.61C342.915 2222.35 350.491 2256.1 358.01 2283.36L358.494 2283.49C360.894 2284.11 364.108 2284.61 365.309 2286.96C376.607 2279.78 379.764 2265.65 390.706 2258.04C387.637 2255.64 387.475 2251.06 389.041 2247.51C394.137 2228.83 397.192 2181.27 404.89 2160.4C368.721 2154.98 331.874 2152.22 296.55 2142.39C291.96 2146.9 282.54 2145.3 282.91 2137.16C293.85 1959.8 312.666 1782.99 336.385 1606.9C355.887 1442.08 390.195 1279.35 414.092 1115.39L414.294 1092.89C414.939 1025.24 416.746 956.579 441.97 892.89C439.75 891.92 437.55 890.92 435.38 889.87C408.029 901.207 429.578 832.316 430.584 819.901C444.025 747.917 459.858 675.947 469.953 603.514C459.371 599.686 449.6 594.256 441.449 586.365C392.031 546.137 363.383 220.345 381.344 154.838C390.719 113.632 430.448 93.3891 468.313 84.0751L473.905 82.4947C516.195 70.5981 559.218 59.8183 603.248 57.1691C604.816 55.7471 609.427 56.1561 610.031 57.3421C612.789 59.0031 615.407 62.2461 617.621 65.6721C678.735 58.6481 662.205 18.6991 687.347 13.0114ZM833.554 2359.29C824.998 2378.73 836.367 2393.51 855.428 2401.68C921.435 2432.28 995.126 2456.88 1070.78 2461.57C1093.86 2455.99 1116.72 2446.76 1140.11 2441.06L1141.12 2440.87C1149.36 2439.36 1153.22 2437.85 1152.52 2429.29L1152.82 2425.83C1153.35 2419.69 1153.79 2413.56 1153.36 2407.41C1146.17 2424.62 1124.63 2434.08 1105.75 2437.56C1075.81 2451.76 1042.28 2437.32 1012.86 2431.23C965.089 2416.7 861.726 2393.88 833.554 2359.29ZM418.872 2359.7L417.883 2360C409.315 2362.65 400.602 2365.9 390.999 2363.51C348.099 2378.05 306.342 2394.55 264.899 2411.72C220.183 2433.13 148.181 2458.02 109.431 2406.28C115.002 2433.42 107.126 2442.7 144.123 2449.47C202.827 2468.62 249.996 2458.81 298.708 2432.66C334.397 2415.3 372.783 2401.51 407.328 2382.65L407.794 2382.32C414.589 2377.47 422.788 2368.62 418.872 2359.7ZM329.77 2242.87C318.569 2222.21 288.427 2210.86 266.01 2218.48C263.729 2238.41 269.638 2260.72 256.984 2278.02C268.189 2279.99 279.358 2282.25 290.511 2284.59L300.717 2286.75C305.725 2287.85 312.099 2289.73 311.263 2295.04C310.337 2300.91 302.63 2299.12 297.501 2297.64L295.514 2297.06C281.11 2292.82 266.73 2288.49 252.509 2283.65C245.013 2291.9 234.95 2298.37 225.191 2304.62L229.238 2305.08C243.42 2306.67 257.738 2308.12 271.75 2310.99C277.872 2312.8 276.551 2321.15 270.287 2320.48C253.559 2316.12 236.875 2311.18 219.86 2308.05C211.543 2313.55 203.265 2319.08 194.928 2324.55C211.325 2326.92 227.794 2327.14 244.183 2328.54C254.794 2329.52 254.791 2344.02 244.182 2343.18C225.037 2341.43 205.904 2335.76 187.676 2329.33L178.069 2335.64C166.856 2343.01 155.619 2350.36 144.27 2357.55C137.441 2361.9 128.621 2366.04 123.849 2372.34C108.779 2396.68 146.435 2419.94 171.881 2419.55C210.528 2419.97 242.716 2399.9 276.57 2387.89C295.297 2383.25 390.508 2335.58 399.172 2348.13C404.619 2345.51 412.195 2344.57 416.117 2340.26C416.911 2320.33 412.712 2299.45 409.188 2279.34C408.47 2275.83 406.754 2271.63 406.562 2268.02C390.702 2273.87 386.186 2296.01 365.31 2294.13C362.043 2299.35 351.981 2296.91 347.441 2292.77C342.5 2288.26 341.88 2281.91 340.701 2276.25L340.154 2273.65C337.938 2263.23 335.28 2252.56 329.77 2242.87ZM799.732 552.442L797.18 553.087C771.203 559.587 744.028 564.29 717.332 562.544C712.717 580.005 715.123 621.538 696.352 628.175C689.939 630.591 680.289 628.63 677.349 622.082C638.522 621.392 599.423 617.922 560.594 615.613C531.365 613.314 501.039 613.402 472.902 604.532C476.311 621.699 477.485 638.553 475.577 656.11C469.013 730.992 447.406 803.949 440.164 878.508L439.831 882.06L439.621 881.94C439.621 882.08 439.611 882.22 439.6 882.36C441.71 882.97 443.82 883.61 445.92 884.26C446.67 883.88 447.691 884.25 448.23 884.97C602.866 933.069 767.003 953.959 928.17 932.79C956.395 929.267 984.416 924.331 1012.24 918.48C1012 915.991 1015.79 915.339 1016.46 917.69C1022.63 916.613 1028.81 915.434 1034.95 914.64C1034.21 912.55 1034.08 910.29 1034.84 908.25C1046.82 872.31 1041.35 831.334 1037.57 794.061C1032.75 736.835 1020.74 680.702 1011.04 624.248C965.116 622.161 919.467 614.665 873.321 615.604C868.46 628.204 851.514 638.787 838.247 631.583C828.879 626.523 826.105 615.493 822.345 606.378C814.912 588.357 807.322 570.399 799.732 552.442ZM605.145 58.8771C556.92 73.1241 507.512 83.2981 459.726 99.1101C420.012 109.006 392.901 133.924 391.227 176.42C387.95 267.453 397.93 358.946 412.994 448.656L413.78 452.707C422.138 495.942 429.63 539.934 445.414 581.143C468.456 591.856 494.618 594.907 519.827 596.147C556.614 598.019 593.399 599.942 630.154 602.349L658.972 604.218C667.333 604.76 678.959 603.328 685.242 609.83C685.798 610.747 686.931 610.632 687.792 611.201L687.961 611.324C688.878 611.947 689.802 613.46 691.124 613.167C693.273 612.5 694.098 608.214 694.603 606.166L694.65 605.981C697.449 595.03 699.477 583.843 702.062 572.833C707.954 551.168 710.492 528.267 719.447 507.53C706.628 499.349 694.554 489.996 684.2 478.898L671.715 474.502C641.848 464.021 611.644 453.868 580.514 447.586C579.768 454.419 569.962 458.326 566.305 451.175C560.243 432.957 559.119 413.177 554.939 394.4C545.45 338.379 534.176 282.562 527.613 226.095C545.707 276.107 555.082 337.491 568.911 391.542C569.552 391.169 570.439 391.386 570.466 392.271C619.429 373.754 673.789 374.508 722.109 394.158C734.213 399.013 746.506 403.372 758.546 408.379C762.658 410.701 770.849 410.559 772.23 415.636C773.709 412.19 775.697 408.963 778.337 406.786C779.161 405.088 788.52 402.057 789.434 405.417C844.328 412.951 897.702 436.833 954.185 432.801C947.501 408.399 948.292 382.047 947.844 356.846L947.98 354.009C949.142 329.182 949.983 298.456 958.399 278.026C953.014 329.458 956.924 380.976 963.496 431.93C1003.33 426.79 984.991 449.57 958.456 448.715C904.907 452.573 855.488 428.89 806.206 411.631C779.288 400.87 776.237 409.984 777.437 435.56C777.462 468.86 792.542 499.252 806.202 528.797L812.338 542.596C822.539 565.558 832.599 588.372 842.509 611.609C885.806 597.252 934.553 605.129 979.407 607.745C1013.63 612.044 1038.21 610.518 1067.16 590.72C1077.61 570.766 1091.37 551.842 1096.75 529.335C1102.99 508.707 1105.07 487.1 1106.89 465.723L1105.25 459.742C1084.14 382.993 1060.79 306.62 1028.88 233.519L1027.15 229.491C1016.34 204.175 1005.35 177.609 983.459 159.876C946.726 132.753 901.296 120.723 862.682 96.5891L862.435 98.3548C858.516 126.039 851.748 154.738 834.029 177.012C801.289 217.214 739.473 218.345 697.576 192.235C653.99 168.136 627.841 123.267 615.119 76.3661L614.969 75.8506C613.778 71.6707 610.463 59.0149 605.145 58.8771ZM723.511 510.067C723.484 524.81 720.575 539.342 718.607 553.895C741.266 549.423 763.858 546.304 786.144 540.259C764.435 532.057 743.339 522.176 723.511 510.067ZM668.95 391.161C635.909 384.693 602.081 388.562 569.41 393.772C572.96 410.275 577.015 426.63 580.405 443.155C592.105 442.619 703.092 462.274 690.566 478.052C706.949 486.813 722.469 497.112 738.777 506.063C755.179 515.065 772.255 522.802 789.872 529.087L788.942 527.019C773.781 493.147 759.615 455.03 771.298 418.011C755.589 424.316 734.145 410.772 718.925 405.705C702.769 399.221 686.129 394.106 668.95 391.161ZM431.08 260.002C431.19 253.822 450.276 271.541 452.767 273.381L454.273 274.744C472.588 291.365 490.681 309.65 500.886 332.457C501.632 354.872 468.227 300.572 463.596 297.255C453.491 284.249 441.181 272.954 431.08 260.002ZM959.228 312.762C954.064 314.462 968.158 296.948 973.654 298.226C975.841 297.907 977.744 301.077 975.316 302.167L974.11 302.698C968.47 305.145 962.704 307.234 959.228 312.762Z'
                fill={outlineColor}
            />
        </>
    );
};

CrossArmColorTee.config = CrossArmColorTeeConfig;
export default CrossArmColorTee;
