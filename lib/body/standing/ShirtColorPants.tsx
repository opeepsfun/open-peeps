import React from "react";

export const ShirtColorPantsConfig = {
    name: "Shirt Color Pants",
    props: [
        {
            name: "skinColor"
        },
        {
            name: "pantsColor"
        },
        {
            name: "shoesColor"
        },
        {
            name: "outlineColor"
        }
    ],
    width: 1645,
    height: 2580,
    viewBox: "0 0 1645 2580"
};

const ShirtColorPants = ({ skinColor = "#D08B5B", pantsColor = "#9DDADB", shoesColor = "white", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M526.193 1077.06C525.259 1081.69 523.851 1086.7 522.385 1091.2C529.689 1098.23 540.027 1107.65 547.445 1114.46C540.107 1069.14 562.433 1027.3 576.098 984.431C570.944 977.821 552.994 971.057 553.572 963.729C554.957 936.582 557.001 906.283 559.948 872.298C569.925 766.164 579.852 655.483 556.304 549.027C554.695 537.456 552.254 525.288 536.734 525.019C490.895 707.456 528.039 891.14 527.028 1074.73L528.362 1075.92L526.193 1077.06ZM351.741 2551.14C342.068 2547.74 330.052 2543.51 328.376 2536.66C325.62 2517.92 327.528 2499.5 329.547 2480.01C332.74 2446.56 332.422 2420.56 341.448 2384.55C351.108 2351.1 359.341 2324.96 349.914 2290.38C349.158 2280.08 357.21 2269.61 362.529 2259.98C370.059 2245.92 373.88 2231.29 379.861 2216.88C368.111 2214.83 355.91 2212.01 344.629 2208.52L342.735 2215.34C342.319 2216.84 341.172 2217.6 339.328 2217.6C338.187 2217.6 335.268 2217.05 334.842 2214.61C336.612 2188.27 339.176 2162.07 341.869 2135.31C369.831 1877.58 412.172 1665.12 483.276 1453.23C500.354 1403.6 517.799 1351.95 517.923 1298.03C508.214 1295.95 497.401 1294.75 487.505 1296.12C416.996 1279.78 430.934 1130.63 433.739 1085.99C428.766 1084.5 423.201 1082.38 419.075 1079.55L417.406 1080.37C347.392 906.608 376.144 619.319 392.159 426.183C402.667 356.76 387.887 231.356 449.442 197.05C499.142 179.45 548.622 169.558 600.557 157.951C610.175 152.43 622.045 149.279 632.777 145.706L627.233 137.912C619.962 127.667 620.929 107.573 630.44 100.512C636.285 100.836 644.498 106.707 650.084 109.464C658.119 92.8497 665.557 75.4717 670.895 55.5087L672.814 56.1957C678.431 -0.270313 751.648 -10.1253 792.93 8.74368C837.995 33.4817 814.524 89.4437 835.013 129.842L842.439 119.943C853.907 119.731 878.164 134.765 884.005 140.408C888.187 142.357 885.162 155.476 885.771 160.753C946.226 174.441 1028.98 178.199 1048.19 246.053C1080.16 373.646 1075.67 504.452 1111.94 631.592C1149.92 734.651 1205.69 860.757 1206.16 955.14C1207.25 972.829 1209.63 1072.87 1194.98 1068.85L1185.32 1078.49C1198.49 1099.51 1188.03 1130.96 1182.99 1155.84C1170.56 1208.63 1146.28 1265.52 1094.42 1240.22C1038.63 1548.23 898.433 1858.94 946.26 2176.63C946.833 2178.49 945.672 2180.53 943.681 2179.72L941.326 2178.63C935.243 2180.51 927.524 2181.17 921.171 2182.59C926.577 2202.85 929.476 2222.85 932.282 2245.25C935.685 2247.28 934.097 2252.65 934.27 2255.9C985.022 2253.46 1013.49 2306.61 1049.88 2335.83C1073.91 2357.27 1101.28 2377.69 1131.23 2396.51C1155.98 2410.57 1176.87 2426.67 1173.11 2453.23C1173.46 2453.19 1181.1 2452.01 1181.48 2451.97C1192.99 2490.28 1155.19 2498.2 1116.25 2502.82C1021.12 2512.39 939.789 2491.24 829.642 2451.19C816.133 2452.79 805.605 2432.71 803.808 2419.09C802.029 2409.96 807.086 2400.68 803.226 2390.86C789.944 2362.64 783.03 2287.93 801.756 2254.41C808.329 2246.82 816.759 2239.81 815.666 2226.69C815.36 2213.56 814.124 2200.44 815.236 2187.53C792.728 2185.36 770.447 2180.51 750.811 2172.64C747.335 2173.98 743.387 2172.33 743.144 2167.98C739.376 2107.93 734.866 2042.31 733.891 1980.83C729.366 1847.03 759.965 1716.47 783.383 1586.7C785.008 1545.07 792.693 1504.85 795.115 1463.2C797.721 1423.7 798.181 1385.03 800.448 1345.59L786.934 1342.66C674.738 1631.91 586.877 1921.39 525.381 2204.65C526.772 2205.84 530.725 2207.18 530.557 2209.59C530.511 2210.88 530.542 2210.97 529.66 2211.1C514.803 2214.08 500.1 2216.27 485.376 2217.98C489.527 2253.33 467.383 2294.18 486.981 2327.28C492.186 2335.26 492.41 2336.93 489.221 2342.42C517.773 2395.56 535.468 2439.78 546.936 2487.29L554.325 2481.04C565.037 2488.82 565.259 2503.52 565.493 2519.05C564.731 2528.1 569.149 2537.58 562.381 2545.19C546.088 2564.24 489.304 2571.73 457.55 2571.84C419.885 2571.85 385.261 2565 351.741 2551.14Z'
                fill={skinColor}
            />
            <path
                d='M485.896 2319.97C486.485 2322.4 485.3 2334.53 485.896 2336.71C492.125 2357.58 509.754 2366.23 517.724 2386.32L521.459 2395.75C531.526 2421.2 541.281 2446.77 547.314 2473.77L548.319 2478.27C548.319 2478.27 567.786 2496.94 568.326 2509.85C568.326 2509.85 570.397 2542.71 564.124 2547.45C518.381 2578.63 456.527 2577.73 403.656 2569.54C382.578 2565.7 362.001 2559.28 342.464 2550.49C335.079 2547.98 329.556 2545.33 326.177 2540.98C323.308 2537.29 322.121 2532.38 322.587 2525.56C321.372 2513.99 322.263 2502.94 323.28 2491.91L323.757 2486.76C324.609 2477.45 325.346 2468.12 324.886 2458.74C326.309 2422.36 337.84 2386.23 345.999 2350.72L354.764 2336.71C354.764 2336.71 406.975 2297.28 425.072 2297.33L426.823 2297.33C444.549 2297.23 485.896 2319.97 485.896 2319.97ZM818.089 2245.76C828.313 2280.14 843.535 2297.34 863.754 2297.34C894.082 2297.34 898.102 2257.31 921.876 2257.31C921.876 2257.31 941.146 2256.33 961.81 2254.72C982.314 2262.05 999.22 2278.72 1015.44 2295.79L1024.17 2305.01C1033.22 2314.56 1042.22 2323.81 1051.6 2331.35C1076.74 2353.78 1103.95 2373.74 1132.46 2391.66L1134.7 2392.99C1145.78 2399.56 1157.9 2407.32 1166.26 2417.38C1172.33 2424.71 1176.39 2433.28 1176.28 2443.59L1176.25 2447.12C1176.25 2447.12 1185.88 2456.31 1185.97 2460.2L1186 2461.51C1186.03 2462.56 1180.84 2484.84 1172.46 2490.39C1160.68 2498.21 1117.33 2505.09 1115.83 2505.33C1019.76 2515.62 922.509 2489.98 833.453 2454.94L829.999 2453.58C829.755 2453.62 829.509 2453.66 829.259 2453.69C822.105 2454.64 815.951 2450.82 811.083 2445.31C804.357 2437.68 799.978 2426.66 798.93 2418.11C798.135 2414.51 800.24 2395.88 798.769 2391.3C786.383 2363.14 784.756 2332.51 786.528 2302.5C786.066 2267.22 793.743 2255.99 800.464 2247.84L802.196 2245.76L818.089 2245.76Z'
                fill={shoesColor}
            />
            <path
                d='M576.595 989.311L583.382 994.098C589.712 998.572 596.123 1003.14 603.288 1008.27L610.728 1013.62L651.897 1043.33C715.155 1088.9 749.358 1112.26 789.484 1136.22L792.812 1138.2L793.243 1138.23C800.213 1138.62 806.308 1135.67 816.04 1128.37L817.043 1127.61L820.904 1124.66L821.824 1123.97L825.321 1121.38L855.181 1099.32C871.1 1087.56 882.023 1079.41 892.164 1071.69L898.082 1067.17L905.66 1061.33L907.219 1061.91C909.249 1062.65 911.508 1062.49 913.142 1061.51L913.361 1061.37L915.482 1059.95L918.188 1062.84L919.9 1064.66C923.605 1068.58 927.338 1072.44 932.353 1077.52L933.534 1078.72L948.055 1093.35L952.393 1097.74C957.976 1103.41 962.097 1107.68 966.155 1112.03L967.261 1113.21L969.465 1115.6L969.875 1115.98L970.394 1116.48C972.197 1118.22 973.908 1120.09 976.307 1122.89L977.012 1123.72L979.366 1126.51L980.581 1127.93C988.119 1136.69 992.633 1140.47 998.903 1142.31L999.235 1142.41L999.797 1142.56L1000.02 1142.59C1004.51 1143.33 1007.64 1141.96 1011.59 1137.87L1011.87 1137.57L1012.15 1137.27L1014.72 1134.56C1025.06 1123.7 1034.66 1114.12 1050.52 1098.78L1055.97 1093.52L1078 1072.33L1082.47 1068C1084.06 1066.45 1085.56 1065 1087.01 1063.58L1089.12 1061.51L1095.23 1055.5L1097.31 1058.09C1098.59 1059.69 1101.25 1060.27 1103.02 1059.28L1103.2 1059.18L1107.9 1056.16L1107.82 1061.74C1107.78 1064.45 1107.71 1067.21 1107.59 1070.02L1107.46 1073.02C1106.92 1084.52 1105.94 1094.98 1103.88 1112.55L1103.66 1114.4L1101 1136.48L1100.52 1140.8C1093.86 1199.95 1082.96 1261.42 1067.52 1330.29L1066.58 1334.44C1056.37 1379.65 1046.86 1417.75 1028.83 1486.39L1024.61 1502.43L1010.5 1555.85C994.491 1616.55 984.957 1653.98 975.526 1693.99L974.949 1696.45L973.732 1701.65L972.511 1706.9C961.007 1756.66 951.937 1801.86 944.96 1845.3L944.595 1847.58L943.888 1852.07C926.239 1965.04 923.01 2066.59 936.382 2165.23L936.792 2168.22L937.193 2171.1L934.325 2171.59C877.071 2181.36 822.659 2184.99 770.403 2181.84L768.089 2181.7L766.018 2181.09C762.527 2180.04 759.112 2178.91 755.781 2177.71L754.122 2177.11L752.036 2176.34L752.237 2172.97L752.36 2170.82C754.257 2136.89 753.697 2107.55 750.736 2047.93L750.448 2042.19L749.076 2015.43C748.411 2002.27 747.974 1992.89 747.613 1983.8L747.377 1977.61L747.139 1970.76L747.033 1967.44C745.497 1917.42 746.747 1877.79 751.94 1840.25L752.288 1837.78L752.634 1835.41L753.128 1830.61C756.958 1794.09 761.857 1762.75 772.487 1703.55L774.272 1693.64L778.894 1668.14C790.903 1601.56 796.325 1566.87 800.133 1527.29L800.376 1524.73L800.749 1520.7L802.179 1501.14C804.556 1468.06 805.54 1447.32 805.386 1425.71L805.364 1423.39C805.055 1396.04 802.639 1371.78 797.582 1349.13L797.193 1347.41L797.194 1347.39L796.558 1344.72L796.536 1344.66L795.511 1342.18L797.04 1340.76C806.786 1331.72 815.566 1322.19 823.118 1312.36C827.462 1306.62 817.396 1298.17 812.346 1302.95L812.194 1303.1L802.175 1313.33L807.245 1299.94C810.029 1292.58 812.805 1285.16 815.576 1277.67L817.238 1273.17L817.803 1271.63L815.853 1275.81C758.209 1399.7 706.314 1536.61 657.72 1689.64L656.249 1694.29L654.54 1699.7C608.353 1846.25 567.034 2000.22 519.266 2197.44L517.38 2205.24L515.567 2205.65L512.966 2206.24C470.91 2215.52 428.223 2217.94 365.739 2216.65L363.495 2216.6L361.468 2216.13C358.71 2215.49 355.988 2214.81 353.313 2214.09L351.314 2213.55L347.051 2212.37L347.47 2205.57C361.943 1976.29 406.033 1739.5 478.194 1482.26L480.39 1474.46L481.65 1469.87L488.788 1444.31L490.179 1439.3C500.938 1400.36 505.775 1379.2 508.916 1354.41L509.014 1353.63L509.046 1353.43C512.209 1337.05 514.092 1321.43 514.623 1306.2L514.673 1304.63L514.761 1301.54L517.843 1301.72C534.393 1302.67 554.524 1293.41 562.766 1280.78L563.012 1280.4L564.777 1277.6L567.391 1279.63C573.101 1284.07 581.744 1279.73 586.756 1271.37L586.901 1271.12L587.146 1270.63C591.372 1262.1 592.927 1252.27 592.227 1240.93L592.177 1240.17L592.12 1239.41C591.373 1229.89 589.287 1220.27 585.504 1207.12L583.936 1201.7L588.597 1202.44C598.3 1203.96 609.593 1200.26 616.692 1193.38C623.859 1186.43 625.478 1177.76 620.235 1168.99L620.019 1168.63L619.79 1168.27L618.24 1166.92L616.667 1165.57C611.018 1160.73 605.164 1156.03 596.374 1149.19L593.843 1147.23L583.116 1138.94C567.824 1127.08 559.077 1119.91 550.172 1111.63L549.748 1111.23L547.683 1109.29L547.624 1108.08C546.801 1091.07 549.009 1073.8 553.984 1054.75L554.422 1053.09L554.993 1050.99C558.29 1038.97 561.916 1028.4 569.11 1009.19L576.595 989.311Z'
                fill={pantsColor}
            />
            <path
                d='M1184.56 1103.45C1173.36 1141.11 1163.08 1196.86 1134.57 1224.58C1125.37 1231.91 1114.15 1228.7 1103.61 1226.88C1110.84 1183.08 1116.14 1138.9 1120.75 1094.73C1143.2 1090.12 1164.84 1082.15 1184.94 1071.15C1190.38 1080.27 1186.98 1094.14 1184.56 1103.45ZM1098.17 1136.23C1060.27 1482.59 884.729 1814.61 933.967 2168.71C874.923 2178.79 814.864 2182.99 755.097 2177.78C762.294 2068.4 739.037 1948.65 755.758 1835.86C766.447 1730.12 794.297 1626.86 803.887 1521C808.152 1462.49 813.467 1401.39 799.577 1343.91C799.467 1343.62 799.347 1343.33 799.227 1343.04C808.74 1334.22 817.73 1324.58 825.657 1314.25C832.417 1305.32 817.697 1293.42 810.197 1301.08C820.543 1273.75 830.486 1246.29 840.127 1218.71C691 1519.66 595.476 1870.18 515.047 2202.81C460.952 2215.13 405.269 2214.83 350.147 2213.35C365.246 1963 415.399 1716.34 483.429 1475.33C498.65 1419.61 517.432 1362.93 514.077 1304.4C531.835 1307.17 556.127 1297.27 565.697 1282.08C574.407 1288.85 585.087 1280.54 589.677 1272.65C600.278 1251.96 594.423 1226.69 588.277 1205.48C609.93 1208.89 637.041 1188.81 622.226 1166.37C599.335 1146.29 573.21 1129.18 550.767 1108.02C548.847 1068.34 564.223 1031.31 578.187 994.083C648.746 1043.81 717.923 1097.32 792.015 1141.22C804.755 1142.51 815.045 1132.87 824.607 1125.83C851.897 1105.58 879.437 1085.6 906.327 1064.8C909.277 1065.89 912.667 1065.62 915.177 1063.94C932.349 1082.33 950.498 1099.32 967.487 1117.8C977.692 1127.23 985.064 1141.96 999.306 1145.57C1005.97 1146.79 1010.21 1144.03 1014.48 1139.41C1040.39 1111.99 1068.27 1086.53 1095.12 1060.05C1097.24 1062.69 1101.7 1063.88 1104.97 1061.78C1104.63 1086.64 1101.08 1111.52 1098.17 1136.23ZM919.277 2253.15C894.504 2260.3 890.579 2299 861.408 2295.22C842.519 2291.24 827.286 2274.88 822.447 2256.48C823.897 2255.56 824.877 2253.95 824.727 2251.63C823.487 2232.76 822.237 2213.89 820.997 2195.02C853.819 2196.84 886.776 2194.25 919.377 2189.75C918.197 2198.71 917.727 2207.75 917.467 2216.88C917.933 2228.49 914.533 2242.5 919.277 2253.15ZM809.847 2244.66C810.657 2243.49 811.397 2242.28 812.027 2240.98C812.127 2242.48 812.227 2243.98 812.317 2245.47C811.537 2245 810.707 2244.74 809.847 2244.66ZM975.467 2275.2C992.307 2286.67 1005.43 2303.01 1019.77 2317.28C1050.27 2347.64 1084.09 2374.68 1120.3 2397.92C1139.15 2409.64 1179 2427.37 1163.22 2454.88C1151.45 2472.21 1120.61 2464.13 1115.75 2473.85C1048.64 2476.61 983.002 2458.26 919.217 2439.47C886.837 2428.89 852.958 2422.72 821.567 2409.27C791.48 2382.91 791.385 2324.95 795.525 2287.78C797.168 2278.99 799.609 2242.99 812.457 2247.52C812.478 2251.12 812.848 2255.97 816.737 2256.98C816.797 2257.26 816.847 2257.55 816.917 2257.83C816.177 2257.59 815.197 2258.13 815.557 2259.02C825.236 2287.84 857.146 2320.29 888.298 2300.09C902.137 2290.35 908.197 2271.5 924.697 2265.39C941.987 2258.98 960.917 2265.29 975.467 2275.2ZM1178.74 2453.04C1179.17 2453.25 1179.62 2453.35 1180.08 2453.36C1181.4 2456.74 1180.75 2470.51 1180.5 2472.88C1176.43 2493.6 1143.8 2497.04 1126.51 2500.17C1065.73 2509.75 1003.92 2503.06 944.637 2487.78C915.697 2480.61 886.917 2472.32 858.827 2462.33C833.869 2454.74 802.997 2442.12 806.097 2410.46C819.998 2429.24 864.493 2434.8 886.816 2442.56C956.968 2463.86 1028.14 2486.79 1102.18 2487.52C1113.39 2487.04 1128.89 2490.17 1137.31 2481.72C1155.15 2479.17 1173.66 2469.29 1178.74 2453.04ZM477.857 2248.88C472.114 2267.03 465.507 2285.67 465.327 2304.87C431.875 2284.99 389.913 2304.29 362.187 2326.06C364.125 2312.47 355.745 2299.67 358.025 2286.31C366.495 2266.16 377.846 2245.73 373.817 2222.95C410.938 2229.29 448.649 2228.9 485.897 2225.01C482.977 2232.87 480.457 2240.87 477.857 2248.88ZM490.657 2359.31C497.253 2372.25 501.874 2389.41 514.517 2397.57C521.572 2423.66 529.505 2449.51 535.637 2475.83C538.074 2488.36 541.761 2501.33 539.937 2514.23C537.041 2515.03 535.013 2515.65 533.407 2517.74C472.079 2530.81 404.665 2532.87 347.977 2502.51C328.961 2459.99 343.887 2410.2 350.364 2366.16C350.755 2351.74 360.389 2346.69 361.537 2332.94C391.94 2315.44 439.296 2292.49 468.127 2323.88C472.13 2332.79 474.824 2345.08 485.117 2348.45C487.037 2352.05 488.867 2355.68 490.657 2359.31ZM540.907 2514.27C540.897 2514.29 540.887 2514.31 540.857 2514.34C540.767 2514.33 540.767 2514.3 540.907 2514.27ZM559.977 2522.19C559.827 2519.52 558.497 2516.86 556.317 2515.28C557.347 2505.45 555.397 2495.28 553.317 2485.68C563.617 2496.9 559.221 2514.66 560.918 2528.63C560.782 2534.2 563.483 2541.3 557.007 2544.17C536.787 2558.15 512.277 2564.67 488.117 2567.48C435.407 2573.52 380.611 2563.83 333.517 2539.32C327.123 2530.64 329.335 2508.36 328.597 2497.14C332.941 2533.16 420.766 2543.12 450.637 2543.42C467.252 2543.53 559.802 2540.09 559.977 2522.19ZM504.287 1281.89C497.277 1281.19 490.307 1281.68 483.367 1282.68C442.291 1254.77 435.815 1140.28 429.367 1091.95C458.76 1099.46 489.894 1097.44 518.427 1087.55C518.965 1092.82 524.978 1095.54 528.637 1091.98C547.986 1126.43 576.939 1154.01 606.807 1178.66C606.457 1177.51 606.207 1179.62 606.647 1178.82C602.843 1187.54 588.874 1183.02 582.267 1189.09C578.027 1192.25 577.137 1197.78 579.837 1201.47C572.69 1221.22 584.052 1245.34 573.357 1264.07C570.954 1266.86 567.826 1268.87 565.757 1272C551.522 1262.25 538.552 1282.88 524.137 1283.78C524.237 1283.78 524.337 1283.78 524.447 1283.77C522.228 1284.02 518.667 1283.9 516.717 1283.62C512.582 1282.98 508.457 1282.31 504.287 1281.89ZM530.767 591.783C533.787 572.093 537.307 552.522 541.877 533.142C547.387 534.102 548.617 546.723 549.317 550.442C572.906 657.18 562.692 767.027 552.586 874.763C550.137 903.652 548.117 932.593 546.537 961.553C544.497 974.871 559.813 979.39 567.987 986.682C556.617 1023.29 536.997 1058.71 539.317 1097.7C536.267 1094.9 533.247 1092.07 530.247 1089.22C531.007 1086.77 531.657 1084.32 532.207 1081.85C535.94 1079.91 537.126 1074.54 533.927 1071.71C535.156 912.063 505.198 751.051 530.767 591.783ZM824.303 290.273C829.973 280.182 844.981 293.296 835.552 300.613C828.988 305.929 819.891 297.199 824.303 290.273ZM852.054 407.656C858.109 399.78 870.255 408.9 864.964 417.042C858.78 429.883 846.402 417.199 852.054 407.656ZM871.493 510.533C883.622 510.567 880.843 531.123 869.392 528.304C859.643 525.996 861.249 510.343 871.493 510.533ZM881.433 634.483C884.242 624.968 898.605 627.481 898.503 637.264C898.139 650.472 878.588 646.484 881.433 634.483ZM904.973 754.004C908.965 742.05 924.308 748.236 923.022 759.813C924.695 766.5 911.736 779.993 909.113 769.063C905.613 764.844 903.963 759.424 904.973 754.004ZM929.073 891.853C929.103 891.813 929.133 891.773 929.163 891.733C937.697 895.75 930.311 914.039 922.083 907.324C914.1 902.45 919.625 886.998 929.073 891.853ZM940.303 1003.76C950.259 1013.55 934.862 1029.05 925.042 1019.02C915.074 1009.25 930.462 993.76 940.303 1003.76ZM1186.87 1070.1C1187 1070.39 1187.14 1070.68 1187.3 1070.95C1187.04 1070.73 1186.78 1070.51 1186.52 1070.29C1186.63 1070.23 1186.75 1070.17 1186.87 1070.1ZM1194.88 842.593C1178.63 778.557 1152.48 717.61 1127.03 656.852C1099.52 576.181 1091.45 490.737 1081.63 406.553C1076.22 359.057 1070.38 311.624 1059.44 265.022C1050.14 178.15 961.914 168.679 892.727 155.213C892.824 147.795 895.105 139.357 887.666 134.613C880.837 127.676 844.378 106.117 837.177 115.243C834.349 108.365 832.966 100.733 831.627 93.3924C830.727 90.4954 830.355 80.5034 827.208 80.5824C826.534 100.141 818.236 128.773 834.887 143.463C824.893 158.696 816.56 177.153 803.387 189.283C803.397 189.272 803.407 189.263 803.417 189.253C802.757 189.682 802.087 190.072 801.397 190.442C801.557 190.312 800.607 190.663 799.827 190.913C798.037 191.254 795.076 190.599 793.247 189.772H793.267C747.91 163.992 703.525 136.383 659.617 108.102C665.893 98.8184 674.016 53.3094 666.228 47.0024C660.782 64.9554 655.112 82.9684 646.847 99.8624C639.687 95.9544 628.101 88.9264 622.067 98.1124C614.457 110.876 612.284 129.382 621.417 142.072C582.165 157.54 539.834 162.956 499.307 175.044C481.647 179.572 462.947 182.942 446.377 190.793C397 218.189 396.959 285.687 391.544 335.401C377.647 577.388 333.572 827.546 402.595 1064.93C405.247 1072.22 409.167 1079.22 412.217 1086.39C413.427 1089.23 416.567 1089.14 418.637 1087.6C420.977 1088.99 423.547 1090.1 426.237 1091C421.717 1152.72 415.594 1265.47 475.164 1302.27C479.807 1304.46 483.967 1303.7 488.297 1303.16C495.25 1302.26 503.484 1302.56 510.677 1303.91C501.989 1418.4 444.345 1523 422.024 1635.18C374.18 1824.87 343.271 2018.76 327.717 2213.73C327.158 2225.82 346.095 2229.17 349.367 2217.31C356.207 2219.29 363.147 2220.94 370.177 2222.28C366.506 2231.84 363.472 2241.5 359.237 2250.82C354.617 2261.35 346.207 2271.05 343.567 2282.32C340.407 2300.38 352.164 2317.28 345.645 2335.35C344.409 2355.55 335.226 2374.56 332.037 2394.57C327.057 2419.36 323.277 2445.04 324.577 2470.38C319.425 2488.92 319.667 2508.14 320.386 2526.92C320.767 2533.09 320.447 2540.9 325.127 2545.65C335.453 2553.91 349.259 2557.43 361.306 2562.59C426.257 2583.87 507.15 2589.83 566.738 2551.41C578.083 2542.41 570.991 2520.22 571.869 2507.06C572.273 2497.02 564.484 2469.23 550.817 2474.84C538.852 2428.46 519.408 2384.52 496.977 2342.4C500.561 2336.07 496.639 2329.86 493.157 2324.52C475.897 2297.96 494.528 2255.58 492.467 2224.25C505.347 2222.68 518.177 2220.6 530.917 2218.06C539.627 2216.32 538.987 2205.49 533.137 2201.52C596.742 1909.75 685.364 1623.64 793.347 1345.29C791.825 1375.6 790.568 1405.88 789.558 1436.24C788.209 1486.63 778.617 1536.27 776.275 1586.53C752.464 1716.92 722.226 1847.55 726.779 1981.04C727.807 2043.55 732.117 2105.99 736.037 2168.36C736.368 2175.54 742.782 2181.6 750.147 2180.03C768.587 2187.13 788.077 2191.59 807.787 2193.84C805.785 2216.64 816.117 2233.05 796.156 2250.16C778.693 2277.44 782.823 2333.22 787.444 2364.88C789.507 2374.97 793.057 2384.21 796.707 2393.78C799.466 2402.47 794.733 2411.13 796.748 2420.04C798.726 2436.19 811.947 2460.68 830.447 2458.23C936.003 2498.2 1058.29 2534.45 1169.32 2497.23C1177.04 2493.38 1185.09 2488.41 1187.86 2479.78C1190.22 2472.08 1193.41 2442.93 1180.08 2445.18C1178.61 2405.68 1132.77 2393.23 1106.64 2371.98C1070.14 2346.92 1037.93 2316.47 1007.43 2284.54C989.838 2266.43 967.748 2249.38 941.347 2249.28C941.424 2246.5 940.567 2244.04 938.817 2242.1L938.807 2242.09C936.498 2224.16 934.006 2205.77 929.637 2188.19C933.295 2187.5 937.07 2187.19 940.637 2186.17C947.74 2189.36 954.691 2182.94 953.066 2175.66C941.031 2099.1 940.882 2021.14 947.968 1944.1C969.79 1707.09 1056.1 1482.64 1099.68 1249.67C1157.46 1270.31 1178.94 1200.32 1189.71 1157.49C1194.9 1131.4 1206.09 1099.28 1191.14 1074.87C1234.87 1092.31 1205.8 866.275 1194.88 842.593Z'
                fill={outlineColor}
            />
        </>
    );
};

ShirtColorPants.config = ShirtColorPantsConfig;
export default ShirtColorPants;