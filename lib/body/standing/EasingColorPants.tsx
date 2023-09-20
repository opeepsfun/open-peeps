import React from "react";

export const EasingColorPantsConfig = {
    name: "Easing Color Pants",
    props: [
        {
            name: "skinColor"
        },
        {
            name: "pantsColor"
        },
        {
            name: "jacketColor"
        },
        {
            name: "shoesColor"
        },
        {
            name: "outlineColor"
        }
    ],
    width: 1645,
    height: 2535,
    viewBox: "0 0 1645 2535"
};

const EasingColorPants = ({ skinColor = "#D08B5B", pantsColor = "#9DDADB", jacketColor = "#BA98DE", shoesColor = "white", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M1136.92 1040.63C1163.26 1041.22 1151.96 794.995 1134.38 749.622C1131.91 740.427 1129.88 727.862 1130.29 716.579C1152.04 718.758 1149.7 703.84 1148.58 685.851C1148.95 671.567 1149.94 642.096 1128.12 653.572C1062.71 522.361 1133.43 183.182 961.221 151.236C940.47 146.186 919.022 140.96 901.551 126.543C883.064 92.2999 873.648 87.9265 843.014 85.7113C837.342 54.8667 826.739 21.9155 795.142 9.91303C766.213 -1.44576 732.544 -2.35186 702.379 3.70981C677.412 11.8699 675.128 58.3723 669.582 81.2997C635.955 72.3647 594.513 53.5722 576.409 96.1733C567.641 93.547 559.516 95.2517 550.606 98.1746C475.927 110.232 403.472 144.084 375.773 214.718C358.664 257.105 370.806 303.246 377.223 347.144C383.207 394.946 367.427 439.231 360.112 485.209C349.22 548.524 347.251 599.309 354.358 646.367C335.572 650.65 334.186 667.773 341.787 685.69C344.019 691.753 346.267 698.145 351.202 701.572C361.242 707.905 374.218 700.607 385.129 699.49C387.399 724.773 391.793 749.582 399.065 777.776C396.959 786.216 394.544 795.641 392.375 804.116L391.643 803.32C366.733 907.873 292.647 1009.43 315.673 1120.55C317.027 1124.25 319.596 1123.48 321.569 1123.41C332.999 1127.77 343.498 1125.01 355.025 1125.45C382.366 1125.47 408.78 1128.98 433.284 1132.03C437.763 1161.35 452.326 1209.35 478.296 1220.53C478.733 1220.68 486.431 1219.07 487.075 1219.03C417.939 1499.93 293.544 1759.67 244.132 2046.23C243.839 2049.73 249.518 2047.88 251.381 2048.3C251.126 2056.26 256.253 2058.17 263.433 2061C254.181 2080.38 245.847 2099.73 236.636 2119.17C232.366 2128.78 225.405 2138.28 224.137 2148.57C213.941 2155.09 207.073 2167.86 207.255 2179.77C179.759 2191.42 187.232 2248.94 180.959 2277.42C174.616 2319.87 144.445 2349.5 123.757 2384.3C119.542 2391.29 115.052 2400.44 114.853 2409.21C102.028 2415.24 97.2463 2428.4 98.0949 2450.55C98.0492 2476.46 105.345 2486.33 125.017 2486.96C178.45 2492.31 240.801 2490.13 294.544 2484.05C334.748 2478.92 370.374 2483.17 361.386 2434.77C359.536 2423.05 363.089 2407.27 356.167 2397.79C351.9 2369.55 354.383 2341.1 363.585 2313.21C369.179 2289.72 378.631 2241.21 374.715 2209.7C372.903 2195.12 343.207 2187.1 337.98 2186.39C339.643 2175.42 338.911 2156.24 333.019 2148.62C343.838 2147.1 346.558 2144.24 348.811 2132.2C354.196 2112.7 354.912 2091.52 368.247 2075.09C392.231 2075.4 416.134 2069.3 440.104 2068.56L441.297 2065.8C455.475 2065.62 469.573 2063.11 483.03 2058.19C486.014 2059.6 489.831 2060.82 491.508 2056.29L499.513 2031.21C592.698 1734.06 695.988 1436.2 796.701 1141.23C802.58 1126.89 809.65 1111.65 818.844 1098.87C821.958 1279.35 859.689 1459.64 862.929 1640.03C867.308 1764.13 866.181 1886.92 877.83 2011.46C880.829 2037.82 884.016 2036.94 887.942 2035.32C889.516 2035.57 893.218 2036.36 894.825 2036.7C892.199 2062.89 889.177 2105.41 877.968 2132.2C853.19 2136.03 857.628 2155.08 863.123 2170.87C857.212 2175.93 858.053 2187.72 859.807 2194.25C836.494 2194.27 831.411 2213.27 833.015 2225.26C835.233 2245.32 833.992 2276.52 847.345 2293.65C855.209 2315.48 868.009 2336.09 873.009 2359.62C876.151 2376.93 874.938 2402.15 877.968 2419.32C870.344 2422.85 873.574 2428.38 872.289 2439.08C865.689 2488.08 888.919 2479.75 929.993 2483.13C954.612 2488.57 1142.03 2499.41 1133.94 2466.81C1135.32 2453.54 1129.16 2447.71 1126.52 2434.64C1125.33 2431.17 1101.98 2391.03 1088.05 2375.83C1041.34 2331.85 1043.38 2272.81 1044.86 2204.8C1042.11 2186.36 1027.96 2168.71 1009.91 2170.7C1015.09 2151.01 1005.48 2133.89 985.4 2128.2C987.406 2105.91 989.518 2075.62 996.861 2056.34L989.945 2049.29L999.203 2050.39L1002.28 2042.64L1005.63 2051.14C1021.52 2051.14 1039.46 2047.6 1054.68 2045.94C1057.11 2046.08 1056.03 2042.77 1056.43 2041.49C1070.8 2038.51 1072.38 2030.85 1069.84 2012.61C1073.19 1716.45 1071.73 1423.06 1067.16 1126.34C1089.63 1127.34 1111.54 1119.13 1133.62 1113.66C1141.46 1118.59 1143.69 1101.02 1142.77 1097.23C1141.52 1077.6 1139.1 1058.45 1136.92 1040.63Z'
                fill={skinColor}
            />
            <path
                d='M924.657 813.351C924.657 813.351 945.241 957.044 955.984 1012.31C956.208 1013.46 958.315 1014.67 959.979 1014.37L960.149 1014.33L962.407 1013.78L966.173 1015.19L969.325 1016.36L996.056 1026.23L1003.4 1028.96C1028.39 1038.29 1042.71 1044.12 1058.95 1051.69L1068.71 1056.27L1063.77 1063.54C1063.74 1063.59 1063.7 1063.65 1063.67 1063.74L1063.63 1063.84L1063.61 1063.9L1063.9 1064.69C1068.55 1077.59 1069.39 1089.09 1068.48 1108.91L1068.4 1110.61L1068.2 1114.71L1068.04 1117.92L1068.04 1118.19C1068.02 1118.91 1067.97 1119.56 1067.88 1120.42L1067.83 1120.8L1067.55 1122.97L1067.48 1123.61C1067.46 1123.74 1067.45 1123.86 1067.45 1123.96L1067.43 1124.26L1067.42 1124.5L1067.42 1124.56L1069.17 1126.52L1068.97 1129.66C1068.3 1139.99 1060.73 1980.65 1065.9 2021.29L1066.06 2022.36L1066.16 2022.94L1066.17 2023.52C1066.2 2025.08 1066.02 2026.49 1065.66 2028.19L1065.51 2028.84L1065.09 2030.6C1064.99 2031.02 1064.93 2031.32 1064.89 2031.55L1064.86 2031.74L1064.84 2031.98L1065.39 2033.28L1065.09 2038.08L1065.04 2038.95C1065.02 2039.51 1065 2040.03 1064.98 2040.53L1064.82 2047.82L1055.43 2048.37C1039.26 2049.3 1025.09 2049.75 1000.4 2050.18L997.502 2050.23L970.152 2050.66C942.592 2051.12 924.524 2051.71 906.172 2052.92L900.111 2053.34L897.742 2051.19C897.607 2051.06 897.234 2050.98 897.003 2051.02L896.914 2051.05L885.49 2055.6L886.737 2042.69L886.297 2042.6L887.156 2035.44L887.229 2034.75C887.683 2030.13 887.469 2025.39 886.642 2017.32L886.114 2012.25C885.614 2007.33 885.379 2004.33 885.299 2001.22L885.291 2000.89L885.269 1999.55L884.908 1994.57C881.267 1943.99 868.483 1618.11 868.483 1618.11C866.056 1572.26 818.825 1125.68 818.825 1125.68L818.641 1118.19L818.564 1115.54L817.795 1116.85L816.878 1118.43L815.712 1120.46C802.167 1144.1 790.883 1167.99 785.58 1186.18L785.273 1187.25L782.283 1195.23C689.102 1444.2 599.444 1704.4 491.639 2033.95L484.001 2057.32L481.031 2058.7C460.732 2068.07 439.533 2069.93 410.437 2067.02L409.475 2066.92L407.555 2066.72C404.226 2066.35 401.224 2065.99 397.28 2065.48L394.651 2065.14L381.299 2063.35C376.207 2062.67 372.877 2062.25 369.536 2061.88L366.828 2061.59L362.895 2061.21L359.686 2060.91C319.234 2057.14 286.146 2056.47 254.673 2059.52L253.432 2059.64L246.209 2060.38L244.446 2053.7C244.103 2052.29 243.926 2050.81 243.897 2049.25L243.893 2048.66L243.902 2047.96L244.452 2045.15C257.992 1976.46 354.731 1650.56 354.731 1650.56C365.682 1615.01 413.053 1462.74 428.58 1412.31L430.35 1406.55L432.551 1399.36C455.294 1324.93 467.551 1281.71 470.635 1263.91L470.813 1262.85L470.859 1262.56L470.927 1262.28L472.791 1254.44L473.621 1253.26C475.92 1250 477.028 1246.21 477.708 1239.8L477.815 1238.73L477.907 1237.7L479.127 1222.74L489.929 1230.6L490.77 1231.2C497.851 1236.22 503.184 1238.2 506.504 1237.8L506.73 1237.76L506.722 1237.71L521.201 1234.02L522.354 1237.3L522.938 1238.94C524.218 1242.41 526.839 1244.75 529.101 1245.12C530.552 1245.35 531.71 1244.68 532.758 1241.97L532.86 1241.7L532.91 1241.56L532.975 1241.22L533.141 1240.33C534.966 1230.21 535.065 1220.78 534.043 1202.88L533.95 1201.28L533.497 1193.78C532.768 1181.28 532.605 1174.6 533.01 1166.92L533.084 1165.6L537.005 1100.33L550.395 1179.08L555.546 1209.17L556.347 1214.01L556.557 1215.24C559.268 1230.83 562.564 1239.17 568.997 1243.29L569.334 1243.5L569.323 1240.99L569.289 1236.03C569.267 1233.51 569.24 1230.94 569.206 1228.29L569.11 1221.48L569.005 1215.13L567.949 1161.9L581.726 1171.87L582.079 1172.12C582.67 1172.53 583.185 1172.86 583.622 1173.12L583.883 1173.27L584.237 1172.7C591.633 1160.5 593.203 1146.88 589.791 1131.06L589.637 1130.36L589.486 1129.69C586.396 1116.36 580.523 1103.02 570.043 1083.8L569.564 1082.93L568.018 1080.12L563.395 1071.82L560.117 1065.93L558.772 1063.48C557.919 1061.92 557.146 1060.48 556.411 1059.1L556.137 1058.58L550.681 1048.21L561.376 1046.82C568.312 1045.93 556.352 930.928 636 879C724.071 821.581 924.657 813.351 924.657 813.351Z'
                fill={pantsColor}
            />
            <path
                d='M395.588 772.837C400.205 789.163 405.372 813.354 410.785 829.467C420.514 874.123 427.813 919.463 432.591 964.918C434.19 980.115 435.441 995.311 437.276 1010.44C435.41 1020.27 439.245 1048.23 437 1058C398.094 1065.23 343.74 1096.07 312.555 1120.68C302.523 1038.09 348.556 945.586 368.253 867.572C369.559 862.56 370.862 857.497 372.111 852.396C377.74 836.533 388.768 796.647 392.674 780.693L393.199 778.517L393.931 779.314L395.588 772.837ZM898.756 123.977C903.132 126.729 907.685 129.053 912.357 131.066C948.717 152.015 1012.55 152.653 1034.52 193.666C1091.29 311.954 1093.06 512.113 1125 653C1126.76 660.771 1143.21 652.459 1145 660C1149.44 678.717 1144.81 696.712 1150 713.672C1129.75 718.898 1077.2 722.327 1057 727.672C1062 745 1115.95 885.252 1137.35 1085.18C1129.6 1083.43 1122.03 1080.91 1114.63 1078.01L1111.79 1076.78C1070.14 1058.62 1004.69 1030.38 959.492 1023.1C930.868 848.524 904.71 663.045 901.448 484.75L901.31 476.521C900.344 423.78 893.892 371.513 885.785 319.467L885.339 315.807C880.946 279.563 877.211 241.807 885.724 206.018C888.479 206.859 880.588 187.598 877 163C874.777 147.766 880.937 130.154 872 115C859.589 93.9559 842.701 120.864 844 115C844.652 112.052 827.607 76.2355 834 80C840.976 84.1084 867 84 877 94C898.851 115.852 902.834 132.471 899.096 124.679L898.756 123.977ZM527.049 107.172C536.143 105.396 562.526 96.491 572 97C566.448 108.882 580 56 623 68C624.881 68.5252 669.183 75.2905 669 84C668.879 89.8411 620.145 96.7423 616 104C611.13 112.525 619.42 138.174 616 147C605.723 173.512 610.58 180.846 613.676 178.013C616.13 181.812 616.471 187.211 616.967 192.249L617.527 197.711C626.559 283.907 645.296 368.795 652.123 455.25C661.995 551.982 640.651 647.478 633.779 743.559C628.168 830.122 635.759 922.873 632.694 1009.43C632.277 1014.23 630.785 1020.74 627.762 1024.97L627.464 1025.37L627.433 1025.38L626.237 1025.62C604.311 1030.05 571.594 1043.87 549.033 1043.75C527.983 1002.77 505.166 897.982 512 827C517.08 774.231 524 706 524 693C524 669.488 388 706 348 701C334.838 699.355 334.214 684.328 332.762 659.865C332.347 652.888 347.805 649.744 348 642C349.408 585.922 349.265 510.97 349.935 506.563C355.609 462.666 370.171 420.047 372.134 375.704C372.788 330.945 354.18 287.215 361.695 242.331C372.629 176.965 430.854 131.598 491.206 114.985C502.996 111.379 514.992 109.52 527.049 107.172Z'
                fill={jacketColor}
            />
            <path
                d='M994.957 2137.97L995.815 2138.43L996.025 2138.57C1000.45 2141.36 1003.44 2146.24 1007.62 2155.42L1009.96 2160.68L1013.96 2161.76C1029.38 2165.94 1040.87 2176.03 1051.26 2199.59L1051.57 2200.31L1051.89 2201.04C1055.38 2209.18 1056.7 2218.18 1056.39 2228.79L1056.36 2229.59L1056.31 2230.72C1056.03 2237.06 1055.41 2242.28 1053.7 2253.35L1052.46 2261.31L1052.1 2263.63C1049.96 2277.71 1049.21 2285.61 1049.42 2294.5C1049.59 2301.48 1050.48 2307.89 1052.21 2313.93C1059.25 2338.53 1073.05 2364.16 1090.83 2388.79C1096.98 2397.3 1124.94 2444.78 1125.18 2445.78L1125.67 2447.78L1126.13 2449.72C1126.21 2450.03 1126.28 2450.35 1126.36 2450.66L1126.93 2453.15L1127.29 2454.72C1128.5 2460.15 1129.4 2464.79 1129.95 2468.67L1130.02 2469.2C1131.01 2476.5 1130.98 2480.82 1128.52 2484.31L1128.35 2484.54L1127.95 2485.09L1127.45 2485.55L1127.15 2485.82L1126.84 2486.09L1125.91 2486.86L1124.79 2487.3C1120.84 2488.84 1107.11 2492.73 1092.69 2495.79C1069.3 2500.74 1044.98 2503.65 1020.95 2503.5C1013.91 2503.46 1006.58 2503.19 998.986 2502.72C978.473 2501.45 956.784 2498.75 933.829 2494.93L929.836 2494.25L925.622 2493.51C910.696 2490.84 889.248 2486.64 885.387 2485.94L885.021 2485.87L884.87 2485.87C876.022 2485.59 870.338 2479.65 868.192 2470.65L868.1 2470.25L868.014 2469.86C866.585 2463.1 866.937 2454.49 868.661 2444.84C870.103 2436.77 873.539 2391.27 873.539 2391.27L860.656 2348.32C860.656 2348.32 833.447 2224.69 837.739 2208.12L837.836 2207.76C838.413 2205.71 862.709 2191.07 863.999 2188C865.31 2184.89 862.176 2149.02 863.491 2145.34L863.62 2145.01L863.74 2144.7L863.795 2144.58C865.146 2141.54 877.97 2128.72 912.999 2127C926.282 2126.35 952.207 2124.44 968.999 2127C984.644 2129.38 991.525 2136.15 994.957 2137.97ZM316.26 2160.93L317.983 2161.33L318.345 2161.13C321.386 2159.45 324.009 2158.55 327.325 2158.72C331.751 2158.93 335.688 2161.25 338.913 2165.39C340.815 2167.83 339.957 2187.8 339.937 2188.76L339.933 2189.01L339.932 2189.46L339.933 2189.59L340.019 2189.65C341.324 2190.53 344.124 2191.09 349.664 2191.4L350.925 2191.47L353.558 2191.58C358.11 2191.8 360.449 2192.02 363.146 2192.6L363.427 2192.66C368.375 2193.74 372.309 2195.84 375.043 2199.56C379.414 2205.51 380.25 2213.84 378.987 2224.48C378.548 2228.19 349.319 2337.77 347.255 2347.17C344.13 2361.4 350.114 2436.77 350.766 2443.77C351.55 2452.2 351.69 2459.79 351.023 2465.88C350.068 2474.62 347.595 2480.73 341.815 2483.47L341.502 2483.61L340.829 2483.91L339.01 2484.32L337.863 2484.57C326.031 2487.1 314.711 2488.41 295.833 2489.8L281.424 2490.83L278.267 2491.06C273.894 2491.4 270.572 2491.68 267.225 2492.02L264.267 2492.33L264.153 2492.34C214.385 2496.2 153.785 2496.58 110.071 2492.79L107.505 2492.56L105.591 2492.5C98.6151 2492.23 94.2746 2487.52 91.9922 2480.47L91.876 2480.1L91.7634 2479.73C90.486 2475.43 89.8621 2470.34 89.5469 2463.48L89.4372 2460.69C89.4184 2460.13 89.4014 2459.55 89.3834 2458.88L89.2084 2451.75L89.1586 2450.19C89.1245 2449.24 89.0878 2448.45 89.0439 2447.72L88.9884 2446.88L88.7882 2445.6C87.442 2436.82 168.055 2330.31 172.458 2318.45C177.826 2303.99 186.519 2192.44 190.27 2187.99L190.392 2187.84L201.799 2174.95L203.46 2191.95L203.472 2191.93C203.744 2191.35 203.947 2190.78 204.067 2190.26L204.121 2190L204.16 2189.76L204.176 2189.64L204.195 2189.53C206.211 2177.4 212.599 2168.24 222.593 2162.25C230.988 2157.21 241.644 2154.55 254.253 2153.81C272.596 2152.73 292.959 2155.55 316.26 2160.93Z'
                fill={shoesColor}
            />
            <path
                d='M675.466 40.0005C678.806 42.6425 678.457 49.9664 678.785 54.0664L678.808 54.3349C679.86 66.7195 678.438 79.161 675.424 91.1851L675.169 92.1861C673.651 98.0861 672.308 105.461 667.583 109.595C662.466 114.072 654.337 111.174 654.151 103.955C654.059 100.6 655.176 97.3694 656.591 94.222C646.677 98.0549 636.763 101.846 626.807 105.544C620.448 158.237 693.914 222.749 736.447 245.334C798.388 279.688 850.505 227.068 858.433 165.209C859.766 156.992 860.658 148.547 860.832 140.217C860.976 133.257 859.562 123.545 864.217 117.593C860.92 117.515 857.991 117.98 854.763 118.487L854.918 118.755C856.748 122.031 859.333 130.186 853.543 130.806C841.04 129.488 835.225 107.527 832.177 96.9944C830.195 89.8241 827.462 60.0635 833.51 56.5578C835.332 63.6263 834.616 71.3025 836.832 78.3918C841.877 80.4277 851.482 80.9783 853.707 81.3532C879.688 81.6545 894.419 100.341 904.949 122.216C935.82 147.602 980.193 143.24 1013.53 164.147C1115.53 238.233 1082.22 526.649 1133.03 649.349C1143.2 645.132 1153.57 653.575 1154.93 663.881C1156.33 671.806 1155.91 680.293 1156.02 688.322L1156.07 689.325C1156.9 705.747 1159.74 724.205 1137.6 724.563C1137.64 733.731 1139.36 742.606 1141.57 751.456C1153.83 805.025 1159.18 860.202 1160.38 915.117L1160.44 919.152C1160.84 948.016 1161.19 1037.31 1144.63 1047.88L1145.41 1054.17C1147.32 1069.9 1149.13 1085.67 1150.14 1101.48C1151.73 1109.68 1146.32 1129.35 1135.28 1124.14C1115.04 1129.16 1095.09 1136.56 1074.06 1136.59C1079.15 1306.44 1076.62 1476.46 1077.37 1646.38C1075.75 1771.63 1082.51 1897.92 1076.6 2022.69L1076.81 2024.45C1078.48 2038.46 1078.98 2050.64 1062.82 2055.44C1062.59 2058.87 1059.95 2060.7 1056.83 2061.1C1047.97 2062.3 1039.11 2063.43 1030.25 2064.52C1021.98 2065.14 1013.15 2067.2 1004.91 2066.21C1005.71 2067.02 1003.55 2067.14 1003.31 2066.56C995.805 2085.43 993.627 2106 991.768 2126.14C1009.99 2133.1 1019.93 2148.75 1016.96 2168.37C1035.34 2169.12 1048.77 2189.59 1051.35 2206.84C1053 2218.74 1051.67 2230.56 1051.14 2242.49C1048.6 2283.24 1054.58 2327.14 1080.83 2359.64L1081.93 2360.94C1098.81 2380.84 1120.22 2399.07 1127.5 2425.07C1129.52 2426.02 1131.18 2427.85 1131.91 2430.7L1136.63 2449.25L1138.97 2458.53C1140.69 2465.29 1142.22 2472.21 1141.3 2479.21L1141.2 2479.89C1136.6 2524.23 955.165 2502.86 919.754 2499.67C905.518 2497.44 889.9 2498.66 877.083 2491.11C861.362 2480.71 859.395 2459.62 862.094 2442.35L862.318 2440.73C863.411 2433 865.011 2424.91 872.326 2420.59C869.863 2404.58 870.816 2388.21 867.887 2372.26C863.463 2349.71 850.081 2330.13 843.249 2308.48C833.284 2297.37 832.948 2280.07 830.864 2265.87C829.285 2252.09 827.994 2238.23 827.461 2224.37C826.015 2206.05 833.949 2190.95 853.174 2188.56C852.282 2185.08 854.723 2182.08 857.152 2179.86C851.421 2159.47 849.839 2131.47 874.704 2124.51C884.121 2101.11 886.86 2075.75 889.365 2050.8C889.068 2050.74 888.771 2050.68 888.473 2050.63C876.088 2055.8 873.512 2031.32 872.684 2021.74C860.96 1897.54 862.039 1772.62 857.636 1648.04L857.205 1639.04C853.345 1556.96 851.048 1474.15 836.88 1393.17C822.622 1302.91 818.894 1211.17 814.02 1119.96C808.28 1128.9 805.193 1139.16 800.547 1148.69C740.266 1326.13 678.416 1503.04 618.821 1680.73C575.627 1809.38 534.36 1938.71 492.97 2067.96C490.858 2074.58 484.204 2075.95 479.334 2073.83C466.938 2078.14 453.928 2080.58 440.836 2081.01C440.047 2082.82 438.427 2084.15 436.058 2083.89C429.056 2083.12 420.997 2085.32 413.995 2086.14C397.972 2087.72 382.418 2090.18 366.249 2090.42C356.232 2103.11 355.601 2120.31 350.984 2135.41C348.325 2143.11 348.742 2160.38 339.561 2162.55C342.852 2167.62 343.283 2173.72 342.75 2180.01C345.605 2180.66 348.501 2181.89 351.188 2183.14C353.804 2184.47 357.259 2184.36 359.063 2187.03C410.343 2196.34 372.868 2293.91 363.954 2326.18C355.206 2352.56 352.466 2380.11 356.458 2407.65C362.561 2416.1 360.516 2428.66 361.45 2438.67C361.943 2447.6 362.845 2456.67 362.764 2465.61C361.768 2502.77 315.991 2496.72 290.164 2501.54C274.037 2503.42 257.838 2504.73 241.639 2505.75C200.555 2508.31 159.24 2508.5 118.24 2504.52C91.768 2503.68 86.0758 2486.38 86.1178 2462.72L86.0774 2461.74C85.4809 2445.67 88.0658 2426.28 103.291 2417.93C104.05 2409.44 108.346 2400.87 112.733 2393.45C133.134 2359.09 163.764 2328.97 169.788 2287.73C175.698 2260.73 169.002 2201.3 196.394 2187.23C197.029 2175.07 204.483 2162.68 213.711 2156.11C215.492 2145.98 222.202 2136.67 226.352 2127.36C234.819 2109.6 242.651 2091.55 251.072 2073.77C246.663 2071.9 241.977 2068.46 241.362 2063.58C237.128 2063.63 232.945 2060.89 233.457 2055.72C234.953 2040.74 238.226 2026 241.316 2011.27L241.702 2009.43C296.69 1743.1 410.242 1494.05 476.679 1231.13C467.74 1232.75 459.383 1222.51 454.441 1215.84C438.478 1194.3 429.05 1168.25 424.904 1141.81L417.4 1140.88C392.376 1137.8 367.23 1135.1 341.997 1135.83L335.916 1136.03C329.159 1136.24 322.392 1136.18 315.97 1133.75C311.49 1134.16 306.825 1131.75 305.719 1126.72C287.029 1033.39 332.967 944.829 365.869 860.501C373.62 839.768 379.136 818.734 384.397 797.264C384.57 796.568 385.657 796.713 385.626 797.43C384.601 821.3 378.695 845.367 372.697 868.375C353 946.388 311.966 1022.89 321.999 1105.48C353.184 1080.88 390.222 1063.78 429.128 1056.55C431.373 1046.78 433.854 1037.07 435.72 1027.24C433.885 1012.11 432.634 996.917 431.035 981.721C426.257 936.266 418.958 890.926 409.228 846.27C394.135 801.337 380.957 755.797 376.245 708.421L375.387 708.59C364.922 710.719 353.393 715.339 343.684 708.66C337.521 704.381 334.855 697.286 332.365 690.472C325.254 673.952 323.938 652.237 344.062 645.329C336.56 592.804 341.435 537.97 350.501 485.936C357.763 440.327 373.69 395.392 367.727 348.7C361.107 303.832 348.766 256.839 366.608 212.918C395.929 139.62 470.183 104.843 543.208 93.6507L544.391 93.3024C553.425 90.6225 561.651 87.7975 571.064 89.8282C593.266 48.5482 629.273 65.3371 664.434 74.5382C666.808 67.5382 668.787 60.3772 670.647 53.2224C671.806 49.5775 671.423 41.168 675.466 40.0005ZM878.98 2440.61L878.888 2442.41C877.958 2461.74 879.006 2478.3 902.92 2478.17C919.376 2479.93 935.834 2481.65 952.317 2483.14L958.499 2483.69C1007.42 2488.06 1056.93 2490.2 1105.75 2483.63L1107.79 2483.36C1111.87 2482.77 1119.42 2482.89 1122.65 2479.87C1126.55 2474.62 1122.04 2464.6 1121.09 2458.51C1044.91 2457.62 968.625 2454.81 892.39 2455.78C884.372 2455.82 880.753 2448.95 881.491 2442.7C880.589 2442.09 879.738 2441.38 878.98 2440.61ZM105.475 2430.92C101.729 2444.12 102.652 2456.59 104.768 2469.81C105.826 2483.65 112.397 2484.54 124.288 2484.86C170.708 2489.15 217.464 2488.25 263.897 2484.66C288.783 2481.97 314.358 2482.07 338.782 2476.55C350.434 2471.38 343.707 2455.11 344.103 2445.13C289.253 2480.55 206.298 2476.05 146.485 2455.56L145.526 2455.15C131.378 2449.19 113.29 2445.45 105.475 2430.92ZM196.333 2192.61C189.771 2200.02 189.895 2221.7 189.598 2227.72C188.89 2242.23 189.002 2256.77 188.375 2271.28C188.837 2332.39 153.621 2362.86 127.467 2412C120.314 2423.92 130.721 2425.61 139.185 2429.48C193.996 2455.04 258.83 2458.94 316.092 2439.38C344.875 2430.99 338.59 2411.59 336.147 2387.85C333.741 2339.33 359.216 2295.62 366.752 2248.7L367.025 2247.05C369.279 2232.98 372.859 2198.47 351.177 2205.94C346.41 2208.88 341.93 2205.2 341.366 2200.69C340.799 2200.78 340.215 2200.83 339.654 2200.84C337.121 2216.53 334.496 2232.19 331.974 2247.88C334.097 2249.23 336.086 2250.75 337.849 2252.5C339.992 2254.63 338.495 2259.1 335.265 2258.82C333.606 2258.68 331.964 2258.43 330.334 2258.12C329.041 2271.75 307.432 2264.1 313.674 2253.17C282.602 2242.42 248.371 2243.27 216.818 2251.52L216.687 2251.58C214.244 2252.55 196.681 2256.08 202.331 2258.82C204.686 2259.11 199.324 2262.2 198.383 2257.42C198.08 2251.43 211.732 2248.48 215.915 2246C205.365 2230.87 198.157 2211.26 196.333 2192.61ZM992.342 2144.7C963.073 2128.82 927.102 2134.71 895.353 2137.52L894.02 2137.67C885.94 2138.55 874.68 2139.08 870.971 2147.42C865.602 2160.78 874.502 2190.67 877.298 2205.53L878.566 2210.72C880.766 2219.8 882.805 2228.82 883.562 2238.21C883.583 2238.52 883.286 2238.74 883.009 2238.74C871.888 2226.83 866.89 2210.82 861.695 2195.55C859.479 2196.81 857.316 2198.18 855.276 2199.69C847.306 2227.14 844.638 2256.36 850.948 2284.36L851.175 2285.34C858.971 2319.94 883.244 2348.24 885.551 2384.4C887.093 2399.01 886.749 2413.99 890.944 2428.19C893.331 2428.72 895.412 2430.48 896.347 2432.7L910.031 2432.71C976.169 2432.83 1042.33 2433.43 1108.42 2436.16C1106.29 2417.53 1089.89 2401.01 1078.33 2388.24C1042.88 2351.85 1027.54 2299.59 1033.38 2249.22C1036.46 2224.02 1050.49 2184.42 1016.16 2175.11C1013.65 2195.65 1010.26 2216.12 1008.39 2236.74C1014.87 2239.87 1014.47 2248.13 1006.55 2247.97C1003 2259.95 991.087 2255.11 992.374 2243.81C948.803 2227.68 923.805 2222.27 881.358 2246.57C880.17 2246.39 884.619 2241.62 885.182 2240.77C898.596 2226.28 919.198 2219.46 938.527 2219.22C957.686 2219.22 975.704 2226.45 993.778 2232.05C996.495 2212.59 998.325 2193.01 1000.48 2173.49L1000.94 2169.31C1002.07 2159.06 1001.66 2150.59 992.342 2144.7ZM292.133 2395.96C298.51 2394.53 304.374 2392.37 310.854 2393.84C333.656 2411 240.488 2415.84 232.555 2414.62C212.361 2414.03 192.158 2411.46 172.723 2405.74L171.228 2405.3C168.665 2404.58 150.157 2399.35 153.755 2396.98C180.042 2399.32 205.775 2404.16 232.555 2402.9C245.914 2402.62 259.325 2401.67 272.54 2399.66C279.112 2398.65 285.653 2397.42 292.133 2395.96ZM908.107 2374.69C903.932 2368.43 924.284 2376.75 926.931 2376.82C943.784 2380.99 960.935 2384.15 978.245 2385.46C989.851 2386.34 1001.58 2386.53 1013.21 2385.95C1021.82 2385.66 1030.33 2384.38 1038.89 2383.5L1039.2 2383.49C1044.28 2383.31 1054.47 2386.47 1048.19 2392.53C1038.43 2400.12 1023.98 2397.81 1012.28 2398.92C976.753 2398.8 939.13 2393.07 908.107 2374.69ZM240.143 2329.13C250.386 2327.27 306.764 2326.66 301.145 2344C299.781 2347.29 296.664 2348.38 293.384 2347.87C258.49 2339.36 220.851 2334.91 186.07 2346.64C185.506 2346.84 185.117 2345.91 185.67 2345.66C202.771 2337.08 221.069 2331.07 240.143 2329.13ZM971.95 2312.17C981.154 2311.47 990.414 2311.72 999.624 2312.41L1002.62 2312.65C1006.75 2312.97 1011 2313.35 1014.96 2314.56L1015.7 2314.79C1020.76 2316.43 1032.15 2325.13 1023.5 2329.32C1014.21 2332.34 1006.36 2328.75 997.397 2326.45C972.419 2320.52 946.163 2322.52 921.415 2328.59L924.901 2329.71C925.116 2329.55 925.393 2329.92 925.188 2330.09C922.687 2332.28 919.252 2331.5 917.478 2328.78C917.171 2328.32 917.365 2327.57 917.858 2327.31C934.631 2318.49 953.126 2313.61 971.95 2312.17ZM193.995 2309.96C222.204 2297.45 254.887 2296.07 285.14 2299.69L287.295 2299.96C296.733 2301.07 309.042 2301.58 314.443 2310.39C316.309 2313.44 314.381 2316.94 311.367 2318.04C302.488 2321.29 292.051 2314.78 283.521 2312.36C258.299 2305.44 231.361 2304.71 205.714 2309.49C205.893 2310.45 201.646 2310.03 200.721 2310.37C199.562 2310.3 191.868 2312.85 193.995 2309.96ZM905.36 2290.42C929.969 2278.43 958.422 2275.57 984.991 2281.76L986.096 2282.08C997.868 2285.39 1016.82 2289.3 1021.04 2301.79C1021.95 2304.6 1019.97 2308.4 1017.01 2308.97C1006.97 2310.9 997.858 2303.55 988.775 2300.02C962.049 2289.95 931.797 2287.55 904.16 2294.95C903.976 2296.04 903.791 2297.12 903.596 2298.21C904.068 2297.9 904.56 2298.6 904.181 2298.98C899.77 2302.08 895.182 2294.26 905.36 2290.42ZM257.407 2269.34C277.32 2268.01 297.399 2270.55 316.622 2275.81L320.237 2276.81C325.491 2278.29 332.297 2280.61 333.061 2286.3C333.358 2288.56 332.795 2290.12 330.959 2291.53C324.267 2296.54 309.712 2286.03 301.392 2284.79C271.185 2275.7 238.76 2275.83 208.161 2282.79L207.119 2283.03L207.857 2288.29C208.583 2290.81 201.856 2284.88 204.412 2282.17C220.565 2273.93 239.413 2270.82 257.407 2269.34ZM924.132 2259.93C940.113 2257.04 956.599 2256.49 972.757 2257.94L974.666 2258.12C984.315 2258.97 1015.58 2260.22 1008.18 2276.57C1006.94 2279.3 1003.34 2279.65 1001.02 2278.47C993.203 2274.5 984.663 2273.07 976.04 2271.76C945.596 2267.51 914.493 2269.25 884.772 2277.47C885.418 2278.49 884.085 2279.69 882.824 2279.93C879.687 2280.51 879.687 2276.76 881.03 2274.77C882.63 2272.41 885.818 2271.55 888.279 2270.51C899.724 2265.51 911.861 2262.13 924.132 2259.93ZM318.851 2168.96L317.031 2168.53C286.534 2161.34 218.919 2148.44 211.917 2190.55C209.432 2209.09 217.63 2227.18 217.024 2245.55C248.648 2232.66 283.618 2232.79 316.473 2241.31C319.384 2222.25 322.163 2203.17 325.136 2184.12L325.616 2181.84C326.939 2175.42 327.389 2170.39 318.851 2168.96ZM250.928 2176.63C257.574 2170.92 268.656 2171 275.175 2177.23C281.136 2178.49 285.342 2184.83 285.438 2190.27C294.502 2206.24 283.571 2228.3 266.266 2232.29C227.19 2240.54 209.721 2186.74 250.928 2176.63ZM927.946 2151.15C960.641 2145.3 972.518 2186.87 945.684 2203.73C907.776 2222.79 882.518 2162.87 927.946 2151.15ZM267.106 2058.81C267.587 2061.99 266.029 2064.25 264.164 2066.39C257.461 2093.93 247.372 2119.56 237.425 2145.97C269.785 2140.59 300.36 2145.28 328.992 2154.09C329.334 2146.03 332.998 2137.68 335.542 2130.09C340.498 2115.66 346.487 2101.61 353.395 2088.04L354.263 2086.34C356.745 2081.51 359.133 2076.47 362.066 2071.84C330.394 2067.51 298.723 2063.6 267.106 2058.81ZM904.96 2052.94L904.117 2056.77C900.482 2073.4 897.031 2090.18 891.621 2106.33L891.547 2106.66C890.719 2110.74 888.856 2129.61 887.684 2116.29C886.782 2118.3 885.818 2120.28 884.793 2122.23L890.387 2121.56C920.318 2118 951.664 2114.92 981.085 2122.47C978.109 2099.36 982.489 2077.27 988.887 2055.41C960.848 2054.77 933.059 2054.97 904.96 2052.94ZM373.989 2081.67C372.964 2082.64 371.959 2083.62 371.006 2084.65C372.298 2084.32 373.591 2084 374.789 2083.72C374.74 2082.96 374.206 2082.39 373.989 2081.67ZM1005.83 2060.47L1005.22 2061.91C1005.12 2062.15 1005.02 2062.38 1004.92 2062.62C1005.39 2062.34 1005.92 2062.07 1006.48 2061.83C1006.22 2061.41 1006.01 2060.97 1005.83 2060.47ZM493.657 692.56C490.787 693.952 487.793 694.305 483.835 694.471C451.681 695.808 419.63 699.541 388.056 705.908C389.799 731.512 397.57 756.317 404.965 780.727L406.499 786.077C431.487 873.54 453.298 964.935 448.905 1056.42C449.151 1056.51 449.387 1056.63 449.612 1056.75C449.213 1057.87 448.927 1059.02 448.526 1060.13L448.269 1060.79L446.769 1064.52C445.939 1066.6 445.134 1068.68 444.435 1070.81C443.208 1071.26 441.699 1071.58 440.262 1071.79C432.967 1120.22 439.903 1174.53 472.773 1212.4C459.132 1183.8 453.894 1148.23 459.517 1116.99C462.569 1120.31 462.787 1127.95 463.956 1132.91C467.165 1149.86 469.417 1167.05 474.238 1183.65L474.761 1185.31C480.166 1202.31 489.21 1224.23 504.885 1233.01C507.842 1233.9 512.415 1232.79 513.814 1236.43C514.622 1239.67 513.116 1243.68 509.794 1244.69L509.559 1244.76C500.014 1247.47 491.914 1240.26 485.794 1232.66L485.488 1236.63C484.9 1244.14 484.08 1251.36 479.724 1257.54C479.211 1259.69 478.709 1261.85 478.188 1264.01C466.398 1336.92 448.663 1412.3 416.373 1478.12L412.618 1489.47C351.233 1674.81 287.658 1860.04 250.661 2052.35C289.535 2048.24 328.735 2050.23 367.53 2054.09C404.114 2057.9 442.81 2068.04 477.858 2051.85C572.813 1761.09 670.764 1471.19 778.115 1184.86C791.054 1139.42 815.355 1095.59 827.377 1049L828.13 1046.54C830.956 1037.2 832.282 1031.14 830.208 1020.7L830.12 1019.43C829.692 1012.9 829.542 1003 836.975 1001.19C838.236 1000.87 839.887 1001.11 840.759 1002.2C845.355 1008.11 841.052 1015.64 842.377 1022.5C846.236 1048.75 835.901 1073.5 823.821 1096.14C824.61 1097.09 825.154 1098.27 825.246 1099.55C826.302 1113.5 826.169 1127.6 826.775 1141.58C828.494 1181.78 830.995 1221.94 834.166 1262.05C844.094 1335.51 858.169 1408.21 865.816 1481.99C883.227 1653.84 880.096 1827.01 892.74 1999.21C892.841 2014.33 897.577 2030.05 892.779 2044.73C895.804 2042.74 900.101 2043.19 902.755 2045.6C954.297 2042.02 1005.92 2043.77 1057.45 2040.7C1057.5 2038.38 1057.67 2036.2 1057.76 2034.53C1056.32 2031.1 1058.72 2027.28 1058.65 2023.63C1052.36 1987.89 1057.53 1949.49 1056.24 1912.95C1056.3 1878.37 1056.47 1843.8 1056.71 1809.22C1058.66 1593.14 1056.04 1377.01 1059.98 1160.95C1060.29 1150.33 1060.77 1139.73 1061.45 1129.14C1058.62 1125.97 1060.51 1121.48 1060.51 1117.68L1060.68 1114.3C1061.54 1097.22 1062.52 1081.53 1055.88 1064.7C1056.03 1062.7 1056.49 1060.82 1057.54 1059.28C1026.46 1044.67 994.008 1033.61 961.923 1021.58C956.509 1022.92 949.732 1019.54 948.594 1013.7C936.507 951.525 926.982 888.952 918.749 826.161C864.874 861.623 799.185 867.231 738.007 881.597L726.428 884.606C697.874 892.065 667.923 900.749 646.205 921.08C644.01 953.174 660.321 1045.66 611.306 1043.25C595.248 1048.16 578.742 1052.1 562.309 1054.22C581.442 1090.63 616.344 1139.14 588.75 1179.45C584.747 1183.7 579.367 1179.39 575.709 1176.75C576.162 1200.32 576.79 1223.77 576.816 1247.32C576.816 1250.46 573.586 1253.3 570.47 1252.23C552.795 1246.12 550.61 1224.91 547.873 1208.9C545.423 1194.61 542.962 1180.31 540.542 1166.01C539 1191.68 545.161 1218.1 540.143 1243.47C535.326 1257.98 520.359 1253.66 515.873 1241.49L515.74 1241.12C506.868 1216.46 502.546 1190.12 500.752 1164L500.657 1162.47C500.14 1154.54 499.299 1146.15 501.255 1138.47C505.223 1145.95 504.236 1158.16 506.083 1167.21C509.18 1186.54 513.367 1205.75 519.249 1224.42L519.402 1225.08C522.06 1236.03 532.472 1257.37 532.352 1230.56C532.75 1216.94 531.582 1203.36 530.843 1189.77L530.741 1187.82C529.777 1169.26 529.88 1150.52 535.437 1132.63C536.851 1128.05 544.541 1127.18 545.474 1132.63C549.207 1154.4 552.774 1176.19 556.341 1197.98C558.943 1211.29 558.835 1226.31 566.738 1237.79C566.83 1212.72 565.444 1187.73 564.246 1162.7L564.007 1161.92C563.034 1158.73 561.981 1154.47 564.215 1151.71C565.087 1146 573.412 1146.65 574.119 1152.63C574.273 1153.88 574.386 1155.15 574.509 1156.4C577.267 1159.87 579.83 1163.41 583.09 1166.4C604.86 1121.83 533.634 1044.87 523.801 994.549C494.84 896.55 511.491 793.799 519.914 694.004C511.204 692.97 502.421 692.694 493.657 692.56ZM249.78 2055.75C249.449 2056.99 249.196 2058.34 248.6 2059.46C249.072 2059.55 249.554 2059.64 250.036 2059.74C250.62 2058.56 251.235 2057.41 251.902 2056.27C251.194 2056.11 250.487 2055.94 249.78 2055.75ZM611.326 1596.78C612.239 1596.63 612.608 1597.89 611.716 1598.18C581.707 1608.19 556.414 1626.8 531.121 1645.27C527.532 1647.89 524.18 1642.42 526.691 1639.46C537.27 1627.04 550.225 1618.47 564.647 1611.26L565.497 1610.84C579.925 1603.55 595.402 1598.91 611.326 1596.78ZM898.696 1578.18C898.347 1577.5 899.27 1576.98 899.69 1577.59C906.375 1587.03 915.223 1595.82 924.009 1603.23C932.908 1610.75 942.618 1616.69 952.142 1623.29C957.279 1626.84 952.87 1634.42 947.293 1631.69C936.445 1626.41 926.706 1617.67 918.739 1608.58C910.527 1599.2 904.447 1589.17 898.696 1578.18ZM712.375 1250.87C679.255 1306.66 630.353 1362.84 593.856 1420.05C569.209 1456.73 546.914 1494.98 519.904 1530C514.501 1537.38 504.084 1531.22 507.785 1522.82C518.058 1499.58 529.511 1477.25 543.299 1455.94L547.747 1449.32C595.765 1377.99 646.659 1306.52 712.375 1250.87ZM850.354 1165.72C850.068 1164.79 851.426 1164.38 851.793 1165.2L851.831 1165.3C876.694 1233.66 915.025 1295.8 948.564 1359.89C951.158 1365.14 944.247 1371.46 940.116 1366.5C916.442 1338.04 899.844 1304.56 885.122 1270.67C869.598 1237.09 860.075 1201.31 850.354 1165.72ZM908.128 128.542C923.353 159.184 934.528 191.613 942.269 224.987C944.654 235.291 930.871 241.615 925.303 232.588L925.137 232.309C918.289 220.854 908.085 210.765 895.168 206.82C886.368 243.816 890.656 282.913 895.229 320.27C903.336 372.315 909.789 424.583 910.754 477.324L910.8 480.15C913.626 660.262 940.023 839.563 968.936 1015.91C1015.16 1023.35 1057.47 1044.35 1100.08 1062.81C1107.48 1065.71 1115.04 1068.24 1122.8 1069.98C1101.39 870.054 1019.98 682.557 994.824 483.36C988.174 431.553 987.864 378.944 997.048 327.437C997.203 326.45 998.596 326.783 998.658 327.655C999.667 348.813 1003.28 369.694 1005.41 390.737C1006.87 378.719 1010.23 366.545 1012.95 355.026C1016.27 343.756 1017.5 325.664 1027.23 318.317L1027.85 316.188C1028.1 315.273 1029.46 315.658 1029.24 316.572C1029.14 317.008 1029.04 317.434 1028.94 317.87C1035.2 319.537 1029.36 326.973 1027.81 330.532C1017.77 357.532 1014.79 386.758 1007.94 414.586C1017.85 501.461 1035.7 587.234 1057.68 671.671C1077.88 666.326 1098.15 661.181 1118.4 655.955C1073.23 508.281 1099.64 343.476 1031.97 202.469C1006.61 155.148 944.173 161.576 908.128 128.542ZM564.954 101.545C555.48 101.036 545.587 106.199 536.493 107.975C524.436 110.322 512.44 112.182 500.651 115.787C440.298 132.399 382.072 177.768 371.139 243.134C363.624 288.017 382.232 331.748 381.578 376.506C379.615 420.85 365.053 463.469 359.379 507.365C352.553 552.253 350.204 599.237 356.058 644.342C410.197 628.92 466.737 627.954 522.253 635.918C517.623 567.552 523.698 498.849 527.06 430.531C529.48 386.655 533.622 342.582 532.156 298.623C532.125 297.646 533.704 297.407 533.856 298.384C550.506 388.166 540.739 479.308 539.058 569.855C537.989 592.732 540.811 615.827 539.671 638.577C564.911 644.034 563.998 673.588 556.28 693.068C554.912 697.756 550.268 696.942 546.509 696.372C542.437 700.67 532.721 695.062 527.183 695.063C522.848 807.455 496.515 927.502 550.477 1032.55C573.038 1032.67 594.755 1024.86 616.681 1020.42L617.877 1020.18L617.908 1020.17C621.131 1015.96 622.707 1009.19 623.138 1004.23C626.203 917.676 616.612 830.925 622.224 744.361C629.095 648.28 650.439 552.785 640.566 456.052C633.741 369.598 615.003 284.71 605.971 198.514L605.513 194.054C604.95 188.74 604.738 182.868 602.119 178.816C586.883 192.758 574.097 209.336 564.944 227.988C559.876 236.998 546.299 232.989 546.09 222.816C544.138 204.654 543.849 186.422 545.827 168.255L546.007 166.652C548.458 143.912 555.301 122.206 564.954 101.545ZM1131.4 725.311C1111.77 726.353 1092.13 728.539 1072.47 728.282L1074.45 735.739C1098.24 825.221 1123.58 914.543 1138.52 1006.1L1139.07 997.514C1139.61 988.928 1140.12 980.337 1140.46 971.728C1144.7 889.445 1138.23 807.27 1131.4 725.311ZM1073.98 725.394L1071.66 725.28L1071.8 725.789C1072.28 725.692 1072.77 725.604 1073.25 725.519L1073.98 725.394ZM1137.94 664.961C1137.57 664.847 1136.94 664.847 1136.25 664.878C1135.24 667.205 1133.21 669.126 1130.85 669.76L1111.18 675.099C1094.79 679.546 1078.38 683.975 1061.96 688.28C1064.72 698.958 1067.52 709.637 1070.34 720.304C1092.75 713.038 1117.55 714.687 1140.39 710.01C1140.11 697.685 1139.44 685.296 1139.23 672.949C1139.18 670.934 1139.59 667.693 1138.56 665.885C1137.92 664.732 1138.56 665.158 1137.94 664.961ZM385.422 706.448L384.806 706.583C385.011 707.144 385.195 707.705 385.37 708.276C385.381 707.663 385.39 707.061 385.422 706.448ZM531.265 647.136C489.058 640.951 446.136 637.295 403.568 641.505C384.314 644.13 364.768 646.931 345.897 650.512C339.336 660.66 346.596 685.351 354.766 693.162C357.216 694.097 361.43 692.279 363.778 691.75C381.394 687.743 399.183 684.516 417.06 681.996C417.594 682.671 418.373 683.107 419.336 683.014L423.444 682.632C448.101 680.369 472.977 678.709 497.688 680.126L497.871 680.272C514.543 681.497 531.157 684.143 547.76 686.057C554.315 668.795 553.185 648.986 531.265 647.136ZM838.359 84.1152C839.99 89.6786 841.95 95.0852 844.387 100.34C846.932 99.6307 850.442 100.2 852.313 101.815L853.108 101.67C855.297 101.252 857.924 100.611 858.608 100.537C888.765 96.3327 886.467 136.98 886.577 157.408C886.761 167.65 886.966 177.902 887.274 188.144C895.903 185.182 907.444 190.506 914.987 195.217C909.081 175.409 902.14 155.922 894.399 136.779L892.638 132.301C886.616 117.101 879.874 101.791 867.128 91.2097C857.277 88.6139 847.734 88.1424 838.359 84.1152ZM619.714 73.917C591.684 63.8445 580.582 86.7349 572.807 109.564C563.641 134.847 561.14 162.685 562.667 189.889L563.611 188.631C573.924 174.779 588.793 151.915 607.594 155.59C607.411 145.08 607.788 133.535 609.788 122.621C608.619 115.578 608.322 108.463 609.133 101.348C609.562 92.4261 619.206 93.7795 625.557 92.5185C631.052 88.831 637.706 87.3457 644.391 89.9425C649.435 89.2673 654.479 88.6233 659.523 87.9793C660.297 86.2654 660.923 84.5432 661.574 82.7856C647.613 79.8783 633.656 76.8815 619.714 73.917Z'
                fill={outlineColor}
            />
        </>
    );
};

EasingColorPants.config = EasingColorPantsConfig;
export default EasingColorPants;