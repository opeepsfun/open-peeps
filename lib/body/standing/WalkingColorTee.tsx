import React from "react";

export const WalkingColorTeeConfig = {
    name: "Walking Color Tee",
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
    height: 2536,
    viewBox: "0 0 1645 2536"
};

const WalkingColorTee = ({ skinColor = "#D08B5B", topColor = "#FFCF77", shoesColor = "white", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M1212.24 2409.58C1219.27 2376.82 1187.09 2365.75 1166.8 2358.46C1152.26 2349.03 1098.41 2316.38 1056.74 2276.08C1022.64 2243.1 999.432 2200.83 989.77 2196.8C989.77 2196.8 979.824 2191.03 978.791 2186.75C972.739 2161.64 977.787 2138.23 978.791 2123C998.189 2117.91 1013.73 2111.56 1025.36 2102.67C1028.75 2103.8 1033.83 2105.25 1035.35 2100.29C1045.85 2030.2 1050.39 1960.93 1058.93 1890.78C1091.29 1623.6 1094.94 1311.46 1039.28 1067.43C1038.69 1055.34 1039.75 1044.41 1040.82 1034.02C1048.35 1033.21 1052.9 1025.92 1059.05 1021.57C1068.59 1013.98 1079.88 1008.16 1079.42 994.908C1081.68 993.192 1081.42 992.227 1080.3 990.041C1087.58 958.751 1055.12 925.779 1045.94 899.983C1062.63 736.789 1039.93 582.574 1052.59 419.341C1068.59 412.647 1057.83 370.809 1056.74 353.552C1047.88 242.378 990.087 132.46 886.017 96.1412C880.068 94.9352 871.126 88.1352 866.203 92.7012C856.689 88.9322 844.031 96.3632 836.668 87.8082L836.742 87.7522C830.542 79.1552 827.763 68.2262 825.725 57.8922C826.066 60.8042 826.635 63.6922 827.336 66.5152C809.395 15.9512 804.875 2.43122 747.118 0.0502247C721.101 -0.297775 686.805 0.483225 671.635 25.2972C665.419 36.8322 667.318 50.0772 663.46 62.2192C656.378 84.5002 625.808 73.7332 609.759 85.3032C481.311 126.501 375.952 210.593 341.321 345.566C334.241 361.834 326.211 378.025 320.292 394.814C319.376 397.306 316.856 405.739 322.908 409.62L325.835 411.497C287.281 591.698 284.723 743.542 414.25 863.675C423.97 915.296 398.965 985.791 408.577 1035.91C403.1 1043.68 410.045 1049.94 417.047 1050.44C417.722 1050.82 420.45 1052.01 421.194 1052.35C410.051 1209.66 456.835 1421.67 477.457 1505.34C480.264 1555.58 463.117 1596.85 427.843 1624.23C388.87 1648.24 311.82 1756.65 326.104 1870.37C309.411 1873.65 292.839 1875.44 276.824 1881.72C206.75 1869.35 207.445 2004.44 202.98 2051.94C195.418 2131.47 190.718 2246.74 266.271 2297.65C286.175 2312.09 326.533 2328.99 347.214 2305.88C353.991 2297.74 355.688 2289.87 353.022 2281.56C387.172 2233.31 377.969 2170.2 381.106 2113.61C391.009 2113.01 401.37 2117.66 410.949 2115.97C420.781 2107.3 384.913 2109.66 381.193 2109.15C381.574 2100.43 382.276 2091.24 383.182 2082.44C388.808 2083.57 396.015 2086.27 401.425 2086.47C404.627 2087.25 406.89 2082.84 404.957 2080.56C400.735 2076.53 389.97 2077.16 383.912 2076.58C384.935 2069.22 386.186 2061.48 387.576 2054.35C394.987 2054.09 402.64 2058.81 409.657 2057.84C404.346 2054.3 394.377 2055.38 387.903 2053.04C392.113 2030.1 400.691 2008.32 408.666 1986.86C428.234 1994.93 445.115 1995.25 464.218 1992.83C472.032 1994.03 475.842 1992.43 477.107 1982.66L476.608 1982.04C491.749 1891.44 540.607 1805.07 631.36 1707.12C649.286 1687.06 669.543 1663.43 683.04 1637.02C710.161 1582.06 714.793 1521.41 735.69 1464.33C755.2 1406.96 781.877 1352.08 806.924 1297.7C810.597 1325.57 815.531 1354.16 820.66 1381.5C843.234 1478.35 841.046 1581.68 824.433 1679.07C799.853 1815.48 811.701 1952.53 806.234 2089.9C806.309 2097.82 807.291 2105.02 806.129 2113.26C805.975 2113.9 806.275 2114.65 807.027 2114.63L808.446 2114.67C820.26 2123.32 836.576 2124.88 850.458 2129.58C856.288 2134.19 854.646 2141.5 855.18 2147.2C856.705 2171.77 858.655 2196.44 856.235 2221.76C845.523 2242.29 832.22 2238.05 829.499 2266.98C827.117 2300.01 822.903 2335.14 838.989 2364.55L832.903 2365.6C823.871 2384.56 829.385 2396.86 850.613 2404.88C955.411 2445.97 1102.88 2483.27 1212.24 2452.26C1214.22 2454.23 1217.11 2452.18 1219.37 2449.09C1221.55 2446.11 1223.14 2442.16 1222.78 2439.87C1220.91 2429.81 1223.48 2411.44 1212.24 2409.58Z'
                fill={skinColor}
            />
            <path
                d='M417.835 872.534L425.758 880.738L429.55 884.646L435.089 890.322C446.941 902.428 459.294 914.78 477.234 932.518L523.521 978.196L532.438 987.054L536.799 991.396L518.842 993.635L515.067 994.117L512.14 994.502L509.22 994.897C490.408 997.482 477.957 1000 465.589 1004.07C447.496 1010.02 433.4 1018.61 422.874 1030.97L422.375 1031.56L418.071 1036.72L417.103 1030.07C416.124 1023.35 415.731 1016.37 415.761 1008.2L415.79 1005.03L415.839 1002.5L415.894 1000.42C415.928 999.248 415.97 997.97 416.021 996.508L416.421 985.552L416.52 982.305L416.558 980.768C416.574 980.023 416.587 979.307 416.598 978.593L416.621 976.367L416.523 974.008L416.407 970.927L416.331 968.721C415.553 944.978 415.955 922.292 417.413 883.548L417.835 872.534ZM616.341 85.6768L615.509 90.5089C610.853 117.564 623.029 139.939 649.171 156.304C673.097 171.283 707.623 180.27 744.613 181.695C781.295 183.108 817.08 176.941 843.211 164.311C871.216 150.775 886.469 130.886 885.867 106.143L885.844 105.392L885.667 100.651L890.026 102.524C944.663 125.999 987.046 170.79 1013.66 229.542C1037.97 283.202 1047.7 345.916 1041.47 404.722L1041.27 406.503L1040.89 409.978L1037.51 409.066C1031.49 407.441 1016.01 412.058 992.006 423.044L989.99 423.972L978.996 431.616L978.809 437.275C971.47 668.134 993.577 832.806 1044.99 931.19L1046.55 934.151L1048.17 937.13C1049.1 938.872 1050.14 940.681 1051.46 942.843L1053 945.327L1055.33 949.058L1056.6 951.105L1057.22 952.123C1059.72 956.252 1061.23 959.067 1062.67 962.329C1064.95 967.51 1066.23 972.427 1066.41 977.411L1066.42 978.034L1066.42 978.238L1066.52 978.432C1067.28 979.969 1067.24 981.814 1066.4 983.384L1066.27 983.618L1066.22 983.692L1066.01 985.308L1064.64 985.576L1064.45 985.756C1062.45 987.618 1059.76 988.811 1056.26 989.682L1055.78 989.799L1055.31 989.907C1054.57 990.073 1053.81 990.224 1052.93 990.384L1049.67 990.951L1045.74 991.723L1040.81 992.685L1039.47 992.957L1038.07 993.249C1029.82 994.997 1024.29 996.707 1019.14 999.316C993.167 1012.95 967.421 1019.5 940.234 1020.27C918.57 1020.87 897.1 1018.01 869.075 1011.64L863.366 1010.31L860.049 1009.53L855.974 1008.54C854.698 1008.22 853.328 1007.89 851.81 1007.51L832.094 1002.59L825.879 1001.07L822.265 1000.19C808.203 996.813 798.701 994.821 787.867 993.004C768.898 989.822 751.626 988.53 734.619 989.33L733.311 989.396L732.548 989.437L731.857 989.107C696.886 972.386 668.171 948.098 642.071 915.15L640.307 912.911L639.206 911.498C621.31 888.439 607.777 866.348 582.068 820.618L575.348 808.657L570.623 800.295L567.543 794.878C554.048 771.223 545.33 757 534.602 741.346C517.294 716.091 499.704 695.601 479.942 678.566L478.936 677.703L478.814 677.593C474.893 673.861 472.251 670.492 470.582 666.716L470.394 666.278L470.101 665.579L470.622 660.271L471.165 654.586C475.521 608.403 480.133 545.377 484.998 465.515L485.874 451L462.14 441.783L451.176 437.565L448.797 436.662L445.987 435.607L443.13 434.543L440.318 433.505C428.232 429.064 417.376 425.348 406.944 422.135L404.59 421.417C379.217 413.745 357.808 409.622 340.027 409.541L339.209 409.54L335.469 409.549L335.602 408.944L335.49 408.932C334.628 408.824 333.823 408.658 333.078 408.42L332.71 408.295L332.353 408.157C329.299 406.911 327.817 404.169 329.001 400.89L329.097 400.636L329.726 398.361C351.709 319.128 381.468 256.984 422.676 207.672L423.928 206.182L425.213 204.669C470.913 151.169 530.927 112.701 609.28 87.8839L611.66 87.136L616.341 85.6768Z'
                fill={topColor}
            />
            <path
                d='M1025 2453C1006.17 2449.61 898.001 2425 836.001 2393C823.338 2386.46 826.455 2371.02 830.581 2360.99C832.471 2356.4 836.944 2352.94 836.001 2352C816.178 2332.18 831.001 2280 831.001 2270C831.001 2255.14 855.094 2235.01 851.001 2227C846.276 2217.75 852.086 2249.38 864.001 2267C874.386 2282.35 890.687 2283.54 892.303 2282.87L892.596 2282.74L892.804 2282.63C897.288 2280.18 964.992 2182.64 993.001 2197C1006.18 2203.76 1013.26 2233.63 1028 2246C1061.05 2273.73 1077 2318 1200 2375C1213.17 2381.1 1213.28 2394.15 1210.6 2404.36C1209.61 2408.12 1223 2408 1221 2410C1215.92 2415.08 1230.02 2444.28 1219 2449C1175.67 2467.58 1063.15 2459.88 1025 2453ZM322.022 1872C322.022 1872 329.13 1880.9 329.001 1885C327.94 1918.8 319.901 1943.69 319.65 1960.31L319.635 1961.43L319.663 1961.85C320.149 1968.59 330.446 1994.48 353.001 2000C365.74 2003.12 403.001 1989 403.001 1989C403.001 1989 381.714 2047.8 378.001 2101C375.085 2142.78 377.438 2190.16 372.001 2227C369.033 2247.11 358.284 2269.49 346.001 2285C342.991 2288.8 356.077 2296 353.001 2299C347.241 2304.62 333.001 2324 289.001 2309C276.193 2304.63 238.929 2280.37 218.001 2234C202.714 2200.13 201.275 2150.78 199.001 2107C196.488 2058.62 205.827 1983.12 218.001 1942C231.538 1896.28 248.37 1887.34 251.858 1884.81C252.673 1884.22 278.009 1879.21 280.448 1878.94L280.874 1878.9L281.211 1878.86L281.396 1878.79C291.343 1874.94 302.716 1873.09 317.671 1872.23L318.591 1872.18L322.022 1872Z'
                fill={shoesColor}
            />
            <path
                d='M1217.23 2442.49C1123.06 2484.77 952.058 2431.42 859.528 2400.55C834.579 2391.54 826.268 2389.78 833.258 2361.02C846.338 2386.26 874.468 2392.36 901.418 2397.42C992.708 2418.23 1085.78 2456.65 1183.41 2437.9C1197.74 2435.65 1211.92 2427.89 1216.09 2413.57C1218.66 2419.64 1217.07 2427.86 1218.1 2434.53C1218.29 2437.19 1218.35 2440.07 1217.23 2442.49ZM836.358 2285.2C838.058 2268.24 840.778 2250.33 850.428 2235.35C849.378 2259.58 863.928 2300.76 895.808 2287.04C904.838 2282.26 909.899 2272.62 915.708 2264.88C935.018 2239.42 959.778 2217.31 987.749 2201.25C1003.31 2203.93 1010 2232.38 1020.03 2244.29C1008.85 2249.27 988.588 2260.62 986.539 2272.37C1000.5 2267.67 1013.35 2258.92 1027.99 2255.85C1032.68 2262.32 1037.65 2268.6 1042.87 2274.66C1036.05 2277.67 1008.55 2291.57 1008.73 2298.51C1023.6 2296.09 1038.01 2288.81 1052.96 2285.82C1059.61 2292.42 1065.66 2299.51 1072.28 2306.13C1062.28 2310.25 1051.72 2314.85 1046.26 2324.45C1046 2324.88 1046.64 2325.37 1046.99 2324.95C1054.48 2315.92 1067.37 2314.26 1078.54 2312.23C1095.68 2328.37 1114.87 2342.6 1136.35 2353.25C1157.84 2365.01 1190.5 2367.69 1199.05 2393.18C1205.89 2418.67 1184.56 2421.39 1164.88 2423.19C1144.97 2426.02 1124.92 2426.45 1105.14 2424.8C1043.31 2422.22 984.858 2404.02 926.428 2388.11C854.989 2374.96 831.808 2364.32 836.358 2285.2ZM857.308 2136.17C857.138 2137.29 856.989 2138.41 856.829 2139.54C856.628 2138.35 856.489 2137.15 856.198 2135.98C856.569 2136.04 856.938 2136.11 857.308 2136.17ZM972.729 2193.08C945.358 2213.33 918.638 2235.88 899.628 2264.11C887.048 2287.09 870.308 2273.1 866.149 2254.7C862.778 2213.62 865.678 2178.14 861.729 2136.81C899.579 2141.97 938.458 2138.79 975.428 2129.66C970.979 2148.11 968.938 2155.11 968.798 2174.04C969.039 2180.28 968.948 2187.89 972.729 2193.08ZM1034 680.858C1034.81 741.328 1035.19 801.818 1033.09 862.268C979.858 724.688 996.149 575.398 988.588 430.788C1004.32 425.548 1021.22 423.258 1037.43 421.018C1030.92 510.778 1032.6 590.958 1034 680.858ZM733.168 986.358C602.468 923.868 584.388 763.648 480.899 675.378C477.558 672.198 474.789 668.928 473.178 665.078C480.598 590.108 480.058 524.378 488.829 449.488C498.628 431.708 502.499 411.058 509.798 392.138C513.619 380.618 518.258 369.208 519.358 357.118C520.278 353.138 514.058 351.408 512.899 355.168C499.088 382.008 492.218 411.858 481.909 440.158C480.458 440.738 478.528 440.278 477.958 438.758C477.869 439.128 477.768 439.498 477.678 439.868C433.308 422.528 387.558 406.378 339.218 406.498C339.249 406.348 339.289 406.188 339.319 406.038C336.338 406.128 330.088 405.888 331.958 401.568C374.448 246.618 450.739 140.408 612.569 89.9577C591.878 210.188 893.018 217.148 888.858 105.238C1002.3 153.978 1051.17 290.868 1038.31 406.128C1027.53 403.218 999.458 414.668 988.508 421.318C986.278 374.518 991.819 318.038 988.558 276.188C971.298 489.568 939.088 744.888 1045.54 938.498C1052.45 951.478 1063.72 963.898 1063.44 979.138C1064.27 979.978 1064.35 981.448 1063.34 982.528C1063.34 982.598 1063.34 982.668 1063.33 982.738C1063.28 982.748 1063.22 982.748 1063.16 982.748C1060.07 986.428 1053.57 987.158 1049.1 987.968C1038.54 990.098 1027.43 991.718 1017.76 996.618C914.729 1050.71 833.918 980.978 733.168 986.358ZM765.729 1084.68C770.708 1094.19 779.069 1101.84 788.979 1106.62C787.758 1109.02 787.338 1111.72 787.208 1114.25C769.358 1117.9 774.378 1126.37 762.319 1130.41C754.428 1132.59 746.838 1133.52 740.018 1138.3C716.808 1159.92 711.048 1158.33 686.138 1139.31C686.479 1137.59 652.579 1104.48 642.079 1085.97C633.329 1070.53 624.168 1054.98 610.758 1043.04C545.088 975.798 475.128 912.338 411.558 843.238C284.159 716.288 308.468 572.338 337.729 413.768C384.958 419.408 432.448 430.738 474.979 451.538C459.979 521.528 459.018 584.968 452.558 655.988C450.608 664.768 452.808 681.678 465.249 677.778C579.598 768.568 592.888 955.138 742.948 1009.09C804.108 1033.95 778.298 1054.13 798.508 1101.07C787.388 1099.03 777.468 1089.71 772.688 1080.79C770.319 1076.36 763.418 1080.26 765.729 1084.68ZM420.088 1029.6C417.499 1011.81 419.518 994.098 419.638 976.278C418.249 943.828 419.329 912.198 420.579 879.638C456.438 916.788 493.718 952.678 530.338 989.138C491.338 994.058 446.358 998.108 420.088 1029.6ZM419.428 1055.77C420.039 1055.57 420.638 1055.3 421.188 1054.97C421.048 1068.93 421.268 1082.89 421.778 1096.83C420.798 1083.15 420.018 1069.46 419.428 1055.77ZM375.558 2048.07C365.039 2047.26 320.048 2045.71 314.649 2052.77C320.729 2055.34 329.088 2053.92 335.628 2054.21C348.329 2054.73 360.999 2055.85 373.569 2057.63C372.628 2062.53 371.778 2067.42 371.079 2072.33C358.399 2073.54 333.708 2074.09 325.659 2082.96C340.018 2085.25 354.968 2083.19 369.378 2086.05C368.678 2092.77 368.168 2099.5 367.789 2106.23C362.048 2106.84 328.289 2112.43 328.319 2117.74C340.958 2119.42 354.348 2117.21 367.229 2118.46C364.438 2158.79 373.899 2280.58 318.778 2288.03C270.588 2285.49 249.448 2207.39 242.899 2169.92C228.378 2082.62 230.869 1989.54 259.649 1905.39C269.928 1881.99 297.909 1877.93 321.569 1876.72C322.468 1880.68 323.358 1884.57 324.358 1888.49C314.098 1911.75 310.829 1937.94 310.548 1963.11C312.718 1999.29 357.358 2026.19 389.778 2002.29C383.718 2017.09 379.039 2032.49 375.558 2048.07ZM311.789 2308.34C216.338 2287.82 200.678 2177.28 207.239 2096C212.588 2039.42 206.159 1920.13 258.388 1886.89C190.888 1948.51 196.749 2368.01 346.338 2294.79C342.608 2306.61 323.428 2310.02 311.789 2308.34ZM330.489 1913.94C330.659 1912.48 330.848 1911.03 331.048 1909.57C341.638 1938.34 359.778 1965.68 386.789 1982.34C376.448 1995.24 356.308 1999.08 342.718 1988.52C319.018 1970.75 328.899 1938.6 330.489 1913.94ZM655.848 75.9977C655.659 76.3277 655.458 76.6577 655.258 76.9777C653.938 77.0677 652.608 77.1877 651.258 77.3377C652.789 76.8777 654.319 76.4477 655.848 75.9977ZM837.239 86.5577C837.188 86.4077 837.138 86.2577 837.098 86.1177C837.218 86.1877 837.338 86.2677 837.468 86.3477C837.369 86.4077 837.308 86.4777 837.239 86.5577ZM1226.5 2424.98C1226.24 2417.82 1226.14 2408.58 1217.76 2406.04C1221.56 2375.2 1195.96 2357.64 1169.08 2349.1C1146.16 2335.08 1120.17 2325.28 1099.11 2308.38C1108.89 2306.54 1118.67 2304.32 1127.36 2300.07C1133.92 2296.86 1130.76 2286.17 1123.65 2287.16C1111.06 2288.82 1099.75 2295.22 1087.92 2299.67C1081.2 2294.15 1074.69 2288.39 1068.54 2282.29C1076.2 2280.81 1085.94 2281.35 1090.4 2273.75C1091.79 2271.37 1091.17 2268.9 1089.49 2267.07C1081.73 2259.21 1066.35 2267.06 1056.71 2269.34C1052.08 2264.01 1047.61 2258.56 1043.22 2253.06C1050.5 2252.39 1069.44 2253.72 1065.73 2241.7C1058.62 2232.3 1043.33 2237.94 1033.05 2239.87C1020.01 2223.84 1015.81 2199.24 995.428 2190.42C994.698 2186.53 989.619 2186.83 986.229 2187.98C981.239 2164.16 981.619 2152.05 983.079 2127.63C998.208 2123.44 1013.22 2117.94 1025.8 2108.92C1031.58 2110.62 1038.59 2108.66 1039.79 2101.87C1043.39 2077.94 1045.4 2050.33 1047.92 2025.89H1048.84C1053.63 1981.31 1057.49 1936.6 1062.91 1892.14C1093.94 1635.13 1100.7 1321.43 1043.26 1067.52C1042.81 1057.9 1043.49 1048.27 1044.46 1038.72C1051.31 1036.89 1055.39 1030.2 1061.06 1026.33C1071.6 1017.74 1082.32 1012.93 1083.29 997.938C1085.42 995.908 1085.67 992.838 1084.5 990.178C1087.23 974.788 1083.21 959.508 1075.02 946.208C1066.04 931.058 1057.56 915.768 1050.07 899.868C1066.45 739.608 1044.23 584.288 1056.38 423.228C1071.96 414.978 1062.18 369.138 1060.73 353.858C1051.63 253.508 1004.78 142.708 905.168 100.968C898.178 95.0677 888.418 93.0677 879.878 89.8177C874.108 86.9777 864.718 84.5177 860.768 91.1277C856.579 89.1777 843.088 87.6877 838.468 84.3077C837.608 83.6777 837.058 82.9877 836.928 82.2177C836.588 82.2277 836.188 82.1577 835.758 82.0677C831.499 76.0477 827.438 34.1177 822.188 37.1077C816.458 51.5077 820.428 67.7777 825.909 82.3177C829.688 95.1777 834.869 128.258 854.948 119.798C858.409 118.078 856.268 113.608 853.168 113.248C843.649 110.528 841.528 96.5377 837.848 88.3377C842.208 91.9577 862.069 97.3877 864.239 98.5377C907.319 197.418 646.848 192.228 626.369 124.058C611.768 100.508 624.369 87.7477 650.399 83.9677C631.268 105.228 655.489 109.948 664.698 89.0977C673.508 74.1677 677.518 56.0277 674.508 38.8477C676.058 32.8177 677.369 24.7577 668.348 26.3777C668.039 25.5777 667.548 26.2077 667.739 26.7777C664.448 32.0177 666.739 39.5477 665.569 45.5977C664.579 55.4977 661.768 65.1977 656.999 73.9577C648.149 75.6477 639.338 77.4577 630.569 79.4377C625.308 68.7477 591.188 90.0677 582.028 92.5777C460.338 128.528 367.798 224.268 335.499 345.028C328.289 361.108 320.508 377.268 314.608 393.848C311.968 401.028 311.968 409.938 319.218 414.588C283.888 576.658 275.268 745.518 408.739 867.078C411.768 880.238 409.749 894.198 409.659 907.598C410.778 938.118 384.698 1042.72 414.989 1056.25C406.138 1191.75 439.329 1376.12 471.499 1506.84C473.878 1551.77 460.329 1592.64 423.858 1620.99C354.518 1672.83 325.308 1759.36 317.198 1841.82C316.048 1850.27 317.178 1858.87 319.079 1867.17C304.048 1869.97 289.979 1871.79 275.388 1877.3C194.918 1861.88 200.659 2034.77 194.499 2086.07C189.678 2161.91 192.688 2252.82 262.378 2302.48C285.808 2319.16 327.168 2335.18 349.999 2309.92C356.458 2302.19 359.979 2293.15 357.438 2283.27C390.168 2235.34 382.438 2174.08 384.888 2119.54C393.458 2119.84 402.798 2123.66 411.239 2121.56C417.739 2119.84 418.569 2111.5 413.069 2108.18C405.128 2103.68 394.338 2105.39 385.458 2105.09C385.729 2099.87 386.119 2094.65 386.619 2089.43C395.048 2091.49 407.128 2096.44 409.638 2084.66C410.649 2073.93 397.098 2073.11 388.659 2072.65C389.249 2068.6 389.909 2064.57 390.659 2060.55C397.119 2061.2 403.938 2065.32 410.289 2063.35C413.888 2061.93 415.138 2058.29 412.508 2055.34C407.619 2050.55 399.258 2051.51 392.789 2050.02C396.718 2030.77 403.819 2012.36 410.659 1993.95C423.039 1998.25 436.448 2001.09 449.659 2000.01C456.508 1998.57 463.989 1998.16 470.909 1999.09C478.608 1997.05 480.388 1988.82 481.399 1982.1C481.249 1981.86 481.098 1981.63 480.928 1981.42C498.718 1877.82 562.539 1788.32 634.098 1711.21C653.808 1689.15 673.138 1666.21 686.528 1640.01C713.729 1585.25 718.608 1523.64 739.418 1466.75C756.948 1415.09 780.378 1365.55 803.348 1315.94C812.558 1381.28 829.758 1445.55 831.729 1511.81C834.729 1595.64 816.258 1678.25 808.378 1761.41C796.993 1849.35 803.058 1937.73 802.336 2025.89H802.826C802.639 2047.15 802.062 2069.32 800.739 2090.52C800.789 2098.27 801.789 2105.57 800.688 2113.32C800.079 2117.61 803.159 2120.3 806.399 2120.39C818.298 2128.2 833.249 2130.97 846.928 2134.31C850.718 2137.21 849.079 2144.35 849.749 2148.72C851.218 2173.27 853.159 2191.79 850.768 2216.55C837.388 2236.33 827.749 2233.17 824.028 2263.24C821.979 2294.64 817.468 2328.58 831.188 2357.08C825.048 2358.48 822.718 2377.22 823.638 2382.17C825.198 2396.16 837.528 2400.58 849.448 2405.41C936.558 2438.05 1121.65 2491.78 1211.16 2454.83C1217.57 2458.46 1224.72 2451.35 1226.79 2445.62C1229.53 2438.65 1227.01 2431.9 1226.5 2424.98Z'
                fill={outlineColor}
            />
        </>
    );
};

WalkingColorTee.config = WalkingColorTeeConfig;
export default WalkingColorTee;
