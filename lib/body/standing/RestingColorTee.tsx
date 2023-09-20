import React from "react";

export const RestingColorTeeConfig = {
    name: "Resting Color Tee",
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
    height: 2532,
    viewBox: "0 0 1645 2532"
};

const RestingColorTee = ({ skinColor = "#D08B5B", pantsColor = "#9DDADB", shoesColor = "white", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M526.001 561.539L524.586 578.422L523.53 576.444C523.38 610.501 518.335 644.931 512.771 678.911C498.227 666.948 486.271 656.401 489.724 635.98C498.47 606.877 509.687 578.488 518.755 549.543L520.275 557.133L526.261 558.339L526.001 561.539ZM1564.71 2355.67C1562.03 2343.84 1559.11 2331.31 1556.37 2319.45C1556.1 2318.44 1553.59 2318.22 1552.79 2317.95C1538.31 2282.49 1525.64 2274.41 1497.6 2269.58C1452.38 2261.4 1407.76 2243.66 1365.05 2217.38C1366.04 2213.46 1368.77 2206.71 1371.25 2199.49C1370.92 2199.61 1370.6 2199.7 1370.26 2199.77C1369.69 2199.88 1369.15 2199.9 1368.64 2199.87C1365.74 2206.67 1362.59 2212.65 1360.92 2214.85C1355.58 2211.41 1349.65 2207.63 1344.42 2203.97L1344.44 2203.9C1339.79 2200.68 1334.04 2196.69 1329.48 2194.21C1328.63 2189.49 1321.72 2188.03 1318.11 2184.91C1311.1 2179.91 1307.21 2177.32 1300.78 2183.72C1286.92 2165.71 1275.75 2146.66 1264.77 2122.04C1257.9 2107.65 1254.53 2091.71 1245.29 2078.86C1245.47 2078.76 1251.34 2076.93 1251.48 2076.77C1146.51 1844.17 1129.7 1585.35 1107.3 1336.73C1102.37 1281.13 1097.2 1225.02 1087.57 1171.05C1086.25 1162.87 1085.06 1154.82 1080.15 1148.31C1139.14 1099.69 1139.71 1005.46 1111.14 935.562C1176.83 758.301 1048.06 570.033 1057.56 389.125C1062.89 266.412 1040.81 124.227 902.221 94.7839C885.035 84.8899 864.432 83.4129 848.033 83.1459C833.269 75.6859 830.942 59.2149 825.686 45.6749L820.55 45.7069C819.043 39.5789 817.551 32.8599 816.255 26.6859C814.306 22.7709 815.461 17.6689 809.321 18.7539C795.405 -1.39811 684.036 -11.5291 682.771 20.9189C678.751 23.2899 677.957 27.9179 677.021 33.5379C670.845 73.3899 628.297 105.171 589.96 98.7619L589.339 98.2009C426.127 92.1509 361.876 208.287 329.983 366.563C305.064 489.541 289.225 622.816 308.739 745.997C327.804 801.821 385.551 828.681 430.227 863.071C425.077 876.052 424.596 890.373 424.439 904.419C423.85 920.633 422.671 936.979 421.237 952.977C418.299 973.252 413.543 1008.15 441.135 1010.52C451.824 1252.83 474.15 1494.51 440.035 1737.53C411.714 1871.93 422.556 2034.55 457.573 2166.05C459.593 2172.54 464.782 2178.39 471.41 2176.31C474.776 2178.49 477.405 2179.85 480.188 2177.8C481.828 2180.84 483.625 2183.76 485.568 2186.59C486.303 2222.71 490.398 2258.16 488.534 2294.52C485.754 2294.2 479.639 2291.14 477.263 2293.14L476.923 2295.91L474.661 2296.68C469.926 2310.05 466.955 2324.07 464.757 2335.39C455.176 2354.78 442.935 2389.1 449.761 2410.71C449.43 2411.09 447.592 2413.23 447.303 2413.56C445.672 2414.49 445.371 2415.74 444.973 2417.17C440.323 2418.92 439.846 2424.23 439.367 2429.67C437.038 2442.84 440.498 2454.81 441.687 2467.69L441.757 2467.6C441.757 2467.6 445.661 2472.13 445.667 2472.14C494.732 2475.12 543.047 2475.89 591.894 2477.64C595.58 2470.58 596.69 2461.04 599.46 2453.28C657.37 2495.66 757.705 2479.44 830.444 2469.04C859.984 2464.78 887.892 2460.75 912.635 2459.41C914.245 2459.19 914.36 2458.5 914.402 2457.85C914.645 2448.16 916.469 2438.21 915.559 2428.8C920.668 2423.83 918.339 2414.79 914.828 2406.84C901.917 2378.87 866.824 2375.81 838.392 2371.04C784.902 2360.66 741.89 2341.12 707.095 2311.27C709.436 2309.15 711.561 2307.07 713.497 2305.03C712.741 2304.53 711.985 2304.03 711.231 2303.52C709.4 2302.72 707.649 2301.89 706.043 2300.85C705.225 2301.31 704.2 2301.41 703.188 2300.84C699.691 2298.88 696.841 2295.99 693.519 2293.78C692.86 2294.73 692.198 2295.69 691.532 2296.7C688.346 2293.34 684.74 2289.54 681.589 2286.02C681.476 2285.04 681.732 2282.62 680.545 2282.35C671.587 2283.26 661.211 2286.28 651.84 2289.63C641.248 2254.82 635.113 2217.14 635.821 2181.56C646.237 2181.56 655.36 2181.46 663.127 2176.51C665.25 2177.08 668.208 2178.31 668.757 2174.97C671.909 2161.35 672.728 2146.92 673.521 2132.97C689.643 1869.07 714.207 1657.01 795.681 1433.45C803.505 1464.49 816.641 1496.78 828.595 1527.68C882.979 1656.82 922.159 1796.08 955.744 1931.63C968.958 1982.37 983.322 2038.12 997.509 2088.32C1003.01 2112.46 1014.19 2121.3 1037.63 2121.1C1055.69 2121.95 1073.81 2121.69 1091.95 2120.42C1116.67 2142.96 1126.8 2173.39 1134.03 2200.79C1128.01 2205.26 1118.46 2203.58 1111.42 2205.05C1105.36 2214.83 1107.46 2228.51 1107.6 2240.57C1108.55 2256.25 1107.74 2273.06 1112.3 2287.86C1113.12 2304.05 1113.22 2321.78 1114.44 2340.6C1101.03 2348.37 1103.49 2365.55 1107.94 2381.98C1109.93 2386.16 1181.96 2385.33 1199.83 2385.16C1220.82 2383.94 1250.76 2389.3 1257.65 2366.28C1307.64 2394.05 1383.68 2384.67 1441.92 2376.49C1484.18 2371.34 1522.47 2366.55 1563.98 2357.81C1564.41 2357.62 1565.01 2356.28 1564.71 2355.67Z'
                fill={skinColor}
            />
            <path
                d='M452.697 984.623C465.389 983.268 594.539 993.31 607.44 990.305L608.009 990.171L613.031 988.967L615.947 993.23C630.347 1014.28 637.606 1028.11 641.233 1042.15L641.485 1043.15L641.588 1043.57C644.642 1056.22 644.88 1067.93 643.224 1091.69L643.053 1094.1L642.86 1096.73L642.397 1102.86L642.408 1102.9C643.21 1105.48 645.701 1106.24 648.799 1104.5L649.016 1104.38L649.113 1104.32L649.447 1104.09C656.086 1099.42 660.549 1093.27 663.522 1085.18L663.727 1084.61L663.928 1084.04C666.31 1077.1 667.549 1069.63 668.602 1057.67L668.789 1055.47L669.376 1048.14C670.21 1037.86 670.832 1032.4 672.004 1026.57L672.16 1025.81L675.499 1010.21L685.359 1021.79C690.301 1027.6 693.322 1035.52 695.201 1045.9L695.421 1047.15C696.441 1053.11 697.028 1059.08 697.639 1068.66L697.81 1071.43L698.344 1080.49L698.555 1083.8C699.371 1096.07 700.182 1102.46 701.815 1108.48L701.987 1109.11L702.111 1109.54C704.237 1116.85 707.12 1120.58 711.318 1121.75L711.572 1121.82L711.671 1121.84L711.838 1121.83C716.619 1121.51 717.823 1119.2 717.485 1111.47L717.448 1110.71L717.427 1110.34L717.372 1109.48L717.252 1107.9L717.332 1106.94C717.655 1103.3 718.303 1100.25 719.721 1095.09L719.876 1094.53L721.268 1089.56L721.582 1088.37C725.025 1074.97 725.743 1060.17 723.834 1045.09L723.703 1044.08L718.746 1007.16L737.604 1039.29C750.096 1060.57 757.486 1084.84 759.453 1110.15L759.537 1111.29L759.601 1112.23C760.557 1113.93 762.402 1114.32 763.952 1113.16L764.111 1113.04L764.258 1112.91C768.297 1109.23 770.787 1102.59 773.108 1090.87L773.228 1090.26L774.134 1085.5L774.552 1083.35L774.802 1082.28C779.226 1063.1 780.149 1047.87 776.818 1034.07L776.654 1033.4L770.628 1009.5L788.945 1025.99C791.869 1028.62 794.849 1031.17 797.863 1033.61C803.617 1038.23 808.198 1038.76 810.863 1036.74C813.716 1034.56 814.998 1029.26 813.162 1022.22L813.055 1021.82L809.767 1009.87L821.882 1012.51C862.625 1021.38 900.019 1025.71 934.833 1024.73C974.895 1023.6 1010.53 1015.39 1041.44 999.116L1042.43 998.588L1051.28 993.865L1053.31 1003.69C1056.26 1017.98 1055.53 1032.67 1051.68 1048.74L1051.4 1049.86C1048.73 1060.74 1045.22 1070.64 1038.72 1086.68L1038.04 1088.37L1034.96 1095.9L1032.67 1101.56L1031.59 1104.25C1028.32 1112.6 1027.27 1118.78 1027.98 1122.49C1028.37 1124.46 1028.99 1125.11 1030.5 1125.45C1036.04 1126.68 1047.05 1122.14 1057.11 1113.55L1057.54 1113.18L1067.86 1104.12L1071.26 1120.03L1070.45 1122.12C1068.53 1127.09 1067.86 1131.83 1068.65 1135.6L1068.74 1135.97L1069.52 1139.21L1067.63 1141.97C1067.48 1142.18 1067.5 1142.44 1067.88 1143.03C1068.36 1143.77 1069.11 1144.23 1069.67 1144.28L1069.79 1144.28L1076.26 1144.07L1077.42 1150.43L1078.05 1153.98C1082.9 1181.26 1100.65 1369.57 1100.65 1369.57C1104.54 1418.8 1150.64 1748.62 1159.31 1790.72C1178.88 1892.16 1202.26 1980.19 1232.63 2061.75L1233.55 2064.22L1236.03 2070.86L1229.56 2073.72C1170.13 2099.95 1101.84 2111.87 1032.84 2109L1030.91 2108.91L1030.15 2108.91C1014.92 2108.67 1007.28 2102.22 1003.44 2087.51L1003.2 2086.6L1003.1 2086.15L1002.96 2085.58L1000.44 2077C992.395 2049.57 901.002 1711.82 886.122 1664.95L885.149 1661.89L883.352 1656.28L881.776 1651.4C861.002 1587.39 839.146 1530.96 814.181 1478.51L813.322 1476.71L813.152 1476.4C810.347 1471.28 808.108 1465.94 805.584 1458.72L805.312 1457.94L804.78 1456.39L804.38 1455.21L801.974 1447.95L801.139 1445.47L800.796 1444.34C797.848 1434.46 796.238 1424.98 796.125 1415.72L796.119 1414.76L796.119 1414.64L795.655 1415.68C785.853 1437.85 774.747 1467.13 763.327 1501.94L762.87 1503.33L761.412 1507.82C730.281 1604.31 708.014 1707.64 691.834 1824.15L690.959 1830.5C678.883 1918.94 670.92 2006.85 662.305 2134.71L661.504 2146.69L660.564 2160.93L654.767 2161.95C648.134 2163.12 642.404 2164.69 637.317 2166.83L636.628 2167.12L635.44 2167.64L634.148 2167.73L617.204 2168.94C615.81 2169.04 614.525 2169.12 613.294 2169.2L609.675 2169.42C559.503 2172.69 517.726 2170.26 479.025 2160.1L477.842 2159.79L476.358 2159.43L462.302 2155.91L422 1926L446.979 1710.49L447.88 1704.02C462.689 1595.56 445.375 1106.34 444.189 1074.02L443.942 1067.13L443.712 1060.49L443.398 1055.62L442.296 1036.57L442.118 1033.75C441.058 1017.44 439.788 1006.38 437.468 995.457L435.663 987.102L443.479 985.849C446.516 985.362 449.586 984.954 452.697 984.623Z'
                fill={pantsColor}
            />
            <path
                d='M905 2421C913.769 2431.12 911 2453 911 2453C910.454 2453.21 769.924 2477.95 675 2477C636.287 2476.61 609.253 2450 596 2450C592 2450 594.063 2475.48 579 2473L440.868 2466.89L438 2421L452 2406C452 2406 552.566 2426.02 604 2421C664.886 2415.06 892 2406 905 2421ZM1548 2319C1558.12 2327.4 1560.47 2349.55 1560.47 2349.55C1560.47 2349.55 1446.19 2375.8 1407.78 2376.59L1400.35 2376.73L1391.8 2376.86C1380.76 2376.99 1308 2387 1261 2365C1252.27 2360.91 1236.64 2379.63 1222.82 2379.69C1175.26 2379.87 1107 2377 1107 2377C1106.82 2373.83 1104.2 2358.18 1103.95 2353.3C1103.95 2353.3 1112.66 2335.62 1113 2326C1113.45 2313.06 1197.17 2327.15 1290 2326C1406.3 2324.56 1537.8 2310.53 1548 2319Z'
                fill={shoesColor}
            />
            <path
                d='M680.26 12.204C683.49 11.553 686.27 12.513 688.23 14.284C688.65 18.654 688.6 23.013 688.24 27.373C687.88 27.683 687.48 27.984 687.04 28.263L687.374 28.0493C687.677 27.8533 687.885 27.7087 688.02 27.603C683.76 56.02 664.037 80.193 638.47 93.043C636.888 95.653 633.31 95.476 630.74 96.653L627.128 97.7901C617.184 100.909 607.119 103.857 596.6 104.053C623.346 179.204 727.939 220.033 801.929 225.581C865.829 228.95 901.288 175.941 884.43 116.484C847.413 111.692 811.02 72.3003 824.438 34.236L824.86 33.083C824.95 32.694 825.47 32.833 825.51 33.173C825.92 37.053 828.23 41.324 829.259 45.114L829.733 46.46C833.293 56.723 836.453 68.9609 846.51 74.423L848.23 74.4622C866.321 74.9341 885.211 77.3244 901.14 86.284C918.902 89.775 935.88 96.814 951.686 105.535C1076.51 173.323 1056.53 317.507 1060.42 437.583C1072.53 602.12 1172.75 766.548 1113.64 931.734C1140.63 1000.52 1142.72 1092.98 1083.81 1145.46C1084.46 1146.48 1085 1147.59 1085.46 1148.74C1088.26 1155.74 1089.13 1163.76 1090.46 1171.19L1090.61 1172.04C1093.8 1189.32 1096.09 1206.78 1098.33 1224.2C1102.75 1258.57 1105.96 1293.09 1109.01 1327.61L1109.45 1332.54C1117.11 1419.3 1123.79 1506.25 1133.83 1592.79L1135.71 1605.62C1149.3 1698.27 1164.11 1791.14 1186.41 1881.92C1187.06 1884.36 1187.72 1886.79 1188.39 1889.22C1196.42 1918.34 1205.88 1946.98 1214.77 1975.83C1217.59 1984.97 1220.71 1993.96 1223.99 2002.89L1228.08 2013.03C1228.76 2014.72 1229.44 2016.41 1230.13 2018.1C1237.38 2035.93 1245.1 2053.56 1253.23 2071.01C1254.69 2074.16 1252.56 2077.06 1250.04 2077.87C1257.46 2089.64 1260.26 2103.66 1266.46 2116.16C1275.33 2136.09 1285.83 2155.48 1298.94 2172.96C1306.19 2167.51 1314.29 2174.55 1320.32 2178.57C1324.19 2180.98 1329.21 2182.79 1330.73 2187.04C1333.65 2188.72 1336.49 2190.57 1339.18 2192.42L1339.45 2191.55C1342.72 2181.09 1349.11 2167.05 1359.5 2162.38C1371.65 2157.28 1381.34 2167.46 1377.7 2179.64C1375.47 2190.53 1371.99 2200.95 1368.28 2211.45C1405.65 2234.02 1446.51 2251.14 1489.49 2259.72L1490.96 2260.01C1501.33 2262.07 1511.87 2263.5 1521.38 2268.43C1537.13 2277.08 1547.31 2293.52 1553.67 2309.96C1555.88 2310.5 1557.91 2312.43 1558.4 2314.55L1562.59 2332.68C1563.99 2338.73 1565.38 2344.77 1566.75 2350.82C1567.5 2354.1 1565.75 2358.23 1562.13 2358.96C1537.18 2363.95 1512.11 2368.32 1486.93 2372.02C1415.45 2378.64 1323.48 2401.91 1257.11 2369.23C1246.52 2391.01 1217.03 2384.78 1197.02 2386.43C1184.86 2385.53 1099.55 2390.17 1100.36 2379.85L1099.89 2378.08C1096.12 2363.67 1092.72 2344.31 1106.46 2334.39C1105.6 2318.13 1104.96 2301.86 1104.69 2285.59C1099.9 2270.15 1100.73 2253.07 1099.76 2236.95C1099.88 2224.94 1097.08 2211.07 1103.65 2200.32C1104.23 2193.2 1120.05 2197 1125.29 2194.39L1124.83 2192.7C1117.6 2166.5 1107.55 2140.99 1087.26 2121.8C1069.71 2122.97 1052.12 2123.17 1034.56 2122.35C1007.82 2122.46 995.623 2110.87 989.8 2085.7C985.63 2070.94 981.56 2056.15 977.55 2041.34C946.265 1924.83 917.857 1807.29 883.283 1691.67C870.066 1652.93 855.445 1614.65 840.703 1576.48C830.711 1550.6 820.704 1524.73 810.705 1498.86C805.568 1485.57 800.506 1472.2 796.041 1458.67C794.667 1454.51 793.423 1450.33 792.248 1446.13C714.693 1661.67 690.094 1890.67 676.37 2118.06C675.12 2136.22 674.9 2154.58 670.79 2172.35C669.53 2177.82 664.91 2179.33 660.83 2178.13C653.317 2182.11 647.761 2182.58 638.09 2182.73L638.162 2185.85C638.711 2208.2 640.079 2230.48 645.15 2252.3C647.16 2261.41 650.76 2270.27 652.71 2279.34C660.59 2276.66 668.64 2274.64 676.92 2273.65C681.1 2273.15 683.49 2276.65 683.66 2280.24C685.2 2281.94 686.75 2283.62 688.33 2285.29L689.128 2284.27C696.564 2274.66 706.096 2261.5 719.02 2260.41C724.9 2260.05 730.27 2263.37 731.551 2269.35C732.778 2283.09 721.395 2298.15 711.79 2307.26C747.377 2336.7 791.482 2353.71 836.499 2362.38L838.258 2362.67C867.137 2367.4 902.76 2371.13 916.53 2401L916.819 2401.64C920.05 2408.93 923.103 2419.96 917.84 2426.63C918.462 2435.75 916.778 2445.12 916.56 2454.32C916.33 2458.06 913.81 2460.23 910.24 2460.65C818.346 2465.58 678.275 2508.59 599.57 2457.41C597.95 2463.08 596.28 2468.74 594.73 2474.43C594.05 2476.94 591.52 2478.99 588.87 2478.89C540.15 2477.14 491.27 2476.35 442.61 2473.38C441.194 2473.41 440.01 2472.78 439.025 2471.63C437.883 2473.03 434.967 2472.65 434.577 2470.66C433.89 2467.17 433.885 2463.62 433.571 2460.08C433.207 2455.98 432.112 2452.2 431.47 2448.19C430.285 2440.79 430.818 2432.85 431.552 2425.43L431.74 2423.55C432.253 2418.64 433.168 2413.06 437.604 2410.28L437.898 2410.1C437.914 2410.1 437.93 2410.09 437.946 2410.08C438.437 2408.52 439.601 2407.17 441.073 2406.09L441.16 2405.99C438.842 2400.46 439.735 2393.46 440.411 2387.69C442.279 2367.63 447.894 2347.78 457.149 2329.97C459.787 2316.43 462.986 2302.41 467.74 2289.52C467.61 2288.93 468.35 2288.43 468.92 2288.69C469.117 2288.59 469.311 2288.51 469.503 2288.45C469.527 2288.25 469.566 2288.05 469.629 2287.86C470.45 2285.44 472.988 2284.11 475.364 2283.74C477.377 2283.42 479.121 2283.95 480.928 2284.41C482.23 2249.4 478.094 2214.45 477.67 2179.45C474.343 2181.07 470.608 2179.64 467.54 2177.78C458.64 2179.15 452.33 2171.56 449.889 2163.58L448.458 2157.11C435.628 2098.87 424.067 2040.11 417.851 1980.74C409.259 1897.87 419.638 1814.92 432.247 1733.02C466.471 1517.37 441.68 1299.37 439.24 1082.53C437.2 1058.86 436.356 1034.92 433.76 1011.26C424.108 1010.11 416.811 1001.08 413.55 992.423C408.44 978.704 412.13 962.873 413.42 948.773C414.85 933.143 415.9 917.484 416.581 901.814L416.661 897.237C416.893 885.019 417.424 872.715 421.48 861.083C378.225 827.786 320.864 801.628 302.56 745.963C294.232 738.461 295.909 703.698 294.55 690.943C288.994 580.626 298.408 469.577 322.262 361.737C352.116 214.78 413.275 83.091 584.7 89.383C584.57 89.284 584.43 89.173 584.3 89.063C586.11 88.463 587.98 89.053 589.31 90.253C618.499 94.001 646.398 76.757 660.98 51.973C664.56 45.793 667.22 39.343 668.64 32.333L668.751 31.773C670.235 24.0639 670.654 14.1358 680.26 12.204ZM458.8 2412.15C454.657 2414.45 450.124 2414.72 446.31 2417.77C443.63 2432.43 443.85 2447.64 447.07 2462.19C492.77 2462.68 538.53 2464.99 584.21 2466.56C586.05 2459.49 587.79 2452.38 589.71 2445.33L589.755 2445.19L589.856 2444.91C594.597 2445.07 599.339 2445.21 604.082 2445.33C674.236 2495.61 819.583 2452.88 904.27 2448.68L905.14 2434.59C904.283 2435.19 903.434 2435.52 902.619 2435.64C903.406 2433.58 902.007 2430.9 899.215 2431.68C894.708 2432.94 890.179 2434.1 885.634 2435.2C885.289 2435.06 884.898 2435 884.46 2435.03C844.705 2438.43 804.787 2438.11 764.923 2438.23C725.197 2438.35 685.513 2440.02 645.783 2439.91C629.578 2439.87 613.374 2439.62 597.176 2439.14C550.521 2430.48 504.198 2420.25 458.8 2412.15ZM1547.79 2326.24C1545.83 2327.67 1543.26 2327.79 1540.53 2328.16L1540.14 2328.22C1537.64 2328.58 1535.14 2328.92 1532.62 2329.11C1526.41 2333.13 1514.05 2332.58 1508.06 2333.72C1376.64 2346.86 1244.3 2331.27 1112.75 2341.82C1106.47 2350.78 1108 2361.87 1111.34 2371.88C1148.07 2373.26 1184.85 2374.01 1221.6 2372.42L1224.54 2372.31C1229.08 2372.14 1233.73 2371.81 1237.93 2370.09C1241.68 2368.56 1246.29 2364.77 1245.7 2360.22L1245.66 2359.96C1244.76 2354.74 1250.24 2348.63 1255.57 2352.34C1305.84 2385.69 1374.14 2368.92 1430.77 2365.64C1471.58 2361.32 1512.17 2355.17 1552.45 2347.38C1550.89 2340.34 1549.34 2333.29 1547.79 2326.24ZM629.748 2178.51C625.533 2179 621.313 2179.43 617.087 2179.81C600.138 2181.34 583.13 2182.11 566.122 2182.6L558.182 2182.82C542.333 2183.24 526.382 2183.62 510.563 2182.76C502.563 2182.32 494.359 2181.38 486.624 2179.2C493.429 2214.9 496.929 2251.25 496.82 2287.58C498.945 2289.42 498.515 2292.46 497.95 2294.78L498.483 2296.36C499.723 2300.06 500.907 2303.81 501.38 2307.59C550.487 2336.8 591.256 2306.89 636.03 2285.94C628.651 2266.75 626.406 2245.71 625.17 2225.32C624.481 2209.47 625.666 2194 629.748 2178.51ZM719.01 2272.78C716.964 2273.02 715.066 2274.3 713.41 2275.43C706.58 2280.32 700.68 2286.11 695.29 2292.37C697.36 2294.41 699.47 2296.42 701.62 2298.39C709.687 2291.89 716.023 2282.84 719.01 2272.78ZM1240.95 2087.18L1234.3 2089.42C1193.26 2103.2 1151.36 2116.12 1107.76 2119.98C1110.1 2122.3 1112.07 2125.05 1113.8 2127.97C1115.31 2129.25 1116.83 2130.89 1116.4 2132.83C1117.8 2135.66 1119.04 2138.53 1120.22 2141.24C1127.12 2157.65 1135.08 2173.79 1140.89 2190.67C1142.58 2197.72 1149.21 2207.58 1146.12 2214.4C1192.47 2234.59 1250.13 2225.6 1285.54 2188.67L1284.29 2186.83C1263.94 2156.69 1246.06 2123.57 1240.95 2087.18ZM1366.67 2172.39C1363.86 2169.97 1358.93 2176.65 1357.68 2178.31C1353.06 2184.46 1349.88 2191.19 1347.52 2198.23C1350.49 2200.27 1353.48 2202.18 1356.5 2204.13L1356.67 2203.85C1359.48 2199 1369.58 2175.47 1366.67 2172.39ZM485.18 2171.87L485.229 2172.12C487.717 2172.51 490.21 2172.86 492.714 2173.14C498.796 2173.83 504.958 2174.14 511.097 2174.27C502.457 2173.02 493.811 2172.01 485.18 2171.87ZM551.055 998.35L549.01 998.144L546.382 997.82C512.65 993.628 478.658 988.028 444.69 993.473C449.394 1015.23 449.708 1038.04 451.228 1060.33C458.478 1275.07 484.585 1491.03 455.334 1705.25L454.431 1711.74C443.769 1787.93 431.083 1864.39 436.19 1941.59C440.173 2011.96 454.493 2081.14 468.72 2150C472.14 2150.86 475.56 2151.72 478.99 2152.56C479.09 2151.61 479.684 2152.16 479.8 2152.76C521.937 2164.01 565.914 2164.98 609.21 2162.15C617.374 2161.68 625.501 2161.02 633.66 2160.46C639.948 2157.73 646.67 2155.98 653.49 2154.78C667.871 1936.26 686.703 1715.24 754.298 1505.73C797.33 1372.64 851.077 1243.03 882.88 1106.52C883.98 1102.69 889.78 1104.3 888.838 1108.17L887.845 1113.41C879.771 1156.16 872.493 1199.05 859.92 1240.83C869.465 1230.43 880.351 1221.26 889.36 1210.37C892.17 1206.94 894.75 1203.33 896.971 1199.48C899.076 1194.71 902.457 1190.98 907.69 1189.86C910.09 1188.89 912.32 1190.93 913.11 1192.94C915.311 1198.49 914.383 1202.45 911.177 1207.34L910.376 1208.54C896.237 1229.44 873.607 1241.65 854.93 1258.05C839.296 1310.25 821.302 1361.7 803.66 1413.23C803.439 1423.49 805.301 1433.61 808.3 1443.38C811.716 1453.43 814.775 1464.08 820.021 1473.5C892.963 1625.99 929.72 1792.13 974.04 1954.38C985.706 1997.65 997.52 2040.91 1010.24 2083.88L1010.42 2084.67C1013.32 2096.78 1017.84 2101.65 1031.12 2101.63C1097.64 2104.69 1165.95 2093.83 1226.55 2067.07C1193.17 1977.98 1169.99 1885.79 1151.97 1792.35C1142.87 1748.19 1135.51 1703.67 1129.3 1658.98C1120.66 1601.92 1113.04 1544.73 1105.31 1487.83C1089.51 1376.31 1090.2 1262.83 1070.06 1151.99C1063.18 1152.22 1057.28 1144.05 1061.47 1137.94C1060.01 1131.87 1061.31 1125.24 1063.48 1119.63L1063.22 1118.41C1039.62 1139.37 1008.83 1142.03 1024.63 1101.73L1025.72 1099C1037.59 1069.43 1052.69 1037.85 1045.99 1005.42C977.542 1041.96 893.875 1036.07 820.31 1020.05C826.04 1040.89 810.604 1053.66 793.19 1039.67C790.05 1037.13 786.97 1034.5 783.95 1031.78C788.377 1049.34 786 1067.74 781.91 1085.14L781.52 1087.15C779.528 1097.59 777.269 1111.45 769.33 1118.67C763.54 1123.93 754.82 1121.69 752.219 1114.18C750.767 1089.34 743.841 1064.91 731.16 1043.3C733.28 1059.09 732.76 1075.31 728.87 1090.45C727.37 1096.24 725.29 1102.15 724.799 1108.14L724.874 1109.12C725.62 1119.68 724.218 1129.37 711.058 1129.58C679.853 1124.08 699.539 1050.23 679.67 1026.87C673.633 1055.06 680.666 1092.11 653.23 1110.82C645.65 1115.56 636.4 1112.81 634.859 1103.61L635.405 1096.38C638.678 1052.27 638.067 1039.04 609.78 997.683C590.598 1002.28 570.511 1000.31 551.055 998.35ZM1106.94 2132.19C1106.96 2132.36 1106.97 2132.52 1106.98 2132.69C1107.31 2133.03 1107.63 2133.36 1107.96 2133.71L1108.44 2134.22L1107.88 2132.84C1107.57 2132.64 1107.25 2132.41 1106.94 2132.19ZM1081.19 1147.74L1079.9 1148.83C1079.69 1149.01 1079.47 1149.19 1079.25 1149.36C1080.39 1154.45 1081.46 1159.55 1082.49 1164.66L1082.29 1161.3C1082.1 1157.99 1082.63 1151.99 1081.19 1147.74ZM1060.36 695.507C1050.7 650.582 1041.08 631.624 1053.31 696.329L1054.63 703.318C1059.93 731.335 1065.51 763.097 1070.75 797.291L1071.84 804.45C1077.31 839.903 1085.9 891.801 1086.54 933.379C1087.26 980.553 1063.31 994.553 1053.85 1000.66C1052.08 1005.85 1054.33 1010.18 1055.82 1015.16C1057.83 1023.16 1058.35 1030.85 1057.78 1039.07C1055.79 1067.12 1040.81 1092.45 1034 1119.06C1042.72 1116.67 1052.46 1108.8 1060.08 1102.57C1073.61 1091.8 1083.06 1075.85 1087.14 1058.92C1089.08 1050.93 1087.67 1041.06 1093.11 1034.51C1094.71 1032.58 1098.17 1032.77 1099.8 1034.51C1104.24 1039.24 1103.82 1045.04 1103.1 1051.09C1100.68 1071.68 1091.63 1091.86 1077.05 1106.67C1076.36 1114.28 1074.09 1121.05 1072.59 1128.28C1073.17 1129.9 1073.75 1131.52 1074.3 1133.15C1084.18 1124.62 1092.43 1114.3 1098.83 1102.93C1127.38 1052.78 1117.41 995.034 1110.02 940.343C1108.54 944.005 1105.16 945.463 1101.87 945.103C1099.98 949.832 1095.04 946.817 1094.85 940.702C1093.63 902.596 1088.56 848.419 1079.25 792.923C1073.7 759.856 1066.98 726.33 1060.36 695.507ZM699.82 868.543C685.659 912.498 629.85 921.072 597.25 947.883C613.624 991.086 659.454 1037.35 645.97 1093.08L645.894 1093.5C645.489 1095.64 644.16 1101.66 645.59 1102.79C646.5 1103.51 652.1 1098.04 653.081 1096.96C672.691 1073.62 661.282 1040.61 672.31 1014C673.76 1010.46 678.28 1008.37 681.34 1011.62C695.131 1026.24 698.465 1045.94 700.578 1065.19L700.65 1065.85C702.349 1080.83 701.416 1096.25 705.85 1110.81L706.017 1111.33C706.96 1114.14 708.723 1118.11 710.69 1118.82C716.12 1120.79 714.08 1112.09 714.27 1108.65C714.84 1098.71 719.06 1089.4 720.54 1079.61C723.7 1058.61 720.55 1036.58 713.58 1016.67C711.37 1010.35 720.07 1008.11 723.43 1012.52C737.38 1030.84 748.56 1051.2 755.93 1073.05C758.9 1081.86 760.48 1090.78 762.46 1099.76C774.812 1062.26 774.456 1022.83 746.48 992.083C739.86 984.133 750.89 972.673 758.02 980.553C765.414 989.366 772.653 998.276 780.69 1006.52C788.616 1014.51 796.255 1024.35 806.06 1030.05C804.468 994.154 765.958 977.935 745.419 953.353C724.481 928.599 713.031 897.724 699.82 868.543ZM514.74 565.383C507.242 588.192 498.458 610.595 491.681 633.643C490.273 649.242 495.075 655.712 506.53 665.614C511.487 637.32 513.54 608.623 516.19 580.023C515.787 575.134 515.706 570.203 514.74 565.383ZM518.44 554.173L517.69 556.484L517.939 556.925L518.18 557.373L518.44 554.173ZM975.503 268.753L978.367 287.636C988.887 356.874 999.739 426.101 1014.67 494.545C1015.49 498.316 1020.35 493.253 1019.46 485.951C1010.27 410.852 975.632 267.865 975.496 268.684L975.503 268.753ZM887.11 116.914C887.78 117.713 888.41 118.553 889.02 119.404C888.89 118.643 888.76 117.873 888.62 117.103C888.11 117.043 887.61 116.984 887.11 116.914Z'
                fill={outlineColor}
            />
        </>
    );
};

RestingColorTee.config = RestingColorTeeConfig;
export default RestingColorTee;
