import React from "react";

export const ShirtProthesisColorPantsConfig = {
    name: "Shirt Prothesis Color Pants",
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
            name: "prothesisColor"
        },
        {
            name: "outlineColor"
        }
    ],
    width: 1645,
    height: 2562,
    viewBox: "0 0 1645 2562"
};

const ShirtProthesisColorPants = ({ skinColor = "#D08B5B", pantsColor = "#9DDADB", shoesColor = "white", prothesisColor = "#9DDADB", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M988.869 1596.84C985.711 1624.54 975.535 1681.85 970.538 1709.99C969.086 1718.17 968.069 1723.91 967.776 1725.79C939.503 1873.59 927.931 2023.78 922.564 2173.95C920.987 2193.48 921.77 2212.97 925.167 2232.28C925.342 2233.27 925.523 2234.26 925.711 2235.25C926.661 2235.06 927.625 2234.88 928.603 2234.72C968.366 2228.26 995.15 2257.3 1021.03 2284.68C1031.15 2295.38 1041.13 2305.93 1051.6 2314.34C1076.74 2336.77 1103.95 2356.73 1132.46 2374.64C1144.11 2381.5 1157.33 2389.61 1166.26 2400.37C1172.33 2407.69 1176.39 2416.27 1176.28 2426.57L1176.25 2430.11L1179.74 2429.57C1180.79 2429.41 1181.66 2429.46 1182.36 2429.8C1183.11 2430.16 1183.63 2430.81 1184.04 2431.57C1185.9 2434.98 1185.89 2440.39 1186 2444.5C1186.03 2445.55 1186.05 2446.52 1186.09 2447.39C1186.41 2459.7 1180.84 2467.82 1172.46 2473.38C1159.42 2482.03 1139.96 2484.75 1124.18 2487.06C1121.26 2487.48 1118.46 2487.89 1115.83 2488.31C1018.79 2498.71 920.544 2472.45 830.757 2436.86C830.505 2436.76 830.253 2436.66 829.999 2436.56C829.755 2436.61 829.509 2436.64 829.259 2436.68C822.105 2437.62 815.951 2433.81 811.084 2428.29C804.357 2420.67 799.978 2409.65 798.93 2401.1C798.016 2396.96 798.592 2393.11 799.102 2389.29C799.779 2384.22 800.349 2379.2 798.769 2374.28C786.383 2346.12 784.756 2315.49 786.528 2285.49C786.041 2248.34 794.573 2237.86 801.516 2229.56C807.344 2222.58 812.052 2216.92 810.538 2201.09C810.349 2198.75 809.61 2183.71 809.931 2176.24L812.254 2175.9C808.57 2122.78 795.209 2070.17 781.84 2017.61C760.067 1931.99 738.199 1846.47 759.177 1758.95C765.798 1731.98 778.896 1708.09 792.036 1684.06C800.374 1668.81 808.737 1653.5 815.556 1637.35C815.678 1637.06 815.8 1636.77 815.92 1636.48C815.854 1636.19 815.793 1635.9 815.737 1635.61C814.446 1628.92 816.043 1622.1 817.561 1615.24C818.947 1608.97 820.305 1602.65 819.981 1596.35C819.865 1584.49 817.529 1573.14 815.076 1561.65C814.95 1561.06 814.824 1560.47 814.696 1559.88C814.122 1559.72 813.549 1559.56 812.976 1559.39C801.746 1556.14 790.771 1552.15 780.231 1546.94L777.409 1545.55L776.151 1548.43C775.752 1549.35 775.168 1550.05 774.464 1550.53C773.689 1551.06 772.784 1551.33 771.874 1551.36C770.884 1551.4 769.884 1551.17 769.018 1550.69C768.336 1550.32 767.738 1549.78 767.311 1549.08C766.109 1544.16 767.451 1538.96 768.651 1533.82C769.444 1530.42 770.22 1527.04 770.479 1523.74C770.869 1521.86 771.203 1519.65 771.556 1517.3C772.544 1510.74 773.575 1502.82 777.122 1498.11C778.129 1496.77 779.361 1495.72 780.948 1495.21C782.469 1494.71 784.274 1494.7 786.416 1495.19C787.677 1495.49 788.756 1495.88 789.666 1496.38C789.805 1495.12 789.941 1493.85 790.075 1492.59C795.742 1439.03 796.823 1385.02 793.677 1331.26C793.433 1327.09 793.163 1322.92 792.867 1318.76C791.18 1322.59 789.528 1326.43 787.915 1330.27C778.256 1353.29 769.778 1377.17 761.305 1401.05C749.447 1434.46 737.602 1467.86 722.486 1498.82C722.24 1499.32 721.994 1499.82 721.748 1500.32C722.04 1500.64 722.279 1501.02 722.478 1501.43C722.836 1502.18 723.021 1502.95 722.875 1503.73C722.735 1504.48 722.293 1505.2 721.593 1505.89C715.98 1511.33 713.057 1518.61 710.229 1525.91C710.087 1526.27 709.944 1526.64 709.801 1527.01C707.674 1533.72 704.187 1539.81 699.454 1544.47C695.249 1548.62 690.054 1551.63 684.005 1552.77C683.37 1552.89 682.737 1552.99 682.105 1553.07C681.949 1553.73 681.794 1554.39 681.641 1555.04C680.888 1558.24 680.104 1561.62 679.285 1565.14C669.705 1606.41 655.379 1668.32 629.556 1713.88C613.028 1743.03 591.809 1765.58 563.756 1770.87C561.713 1771.26 559.671 1771.55 557.631 1771.74C559.335 1772.6 560.761 1773.76 561.751 1775.39C564.979 1780.68 561.758 1787.88 559.321 1794.49C557.882 1798.39 556.511 1802.18 555.97 1805.53C553.35 1813.03 551.157 1820.72 548.963 1828.42C544.941 1842.54 540.931 1856.7 534.118 1869.63C533.862 1870.12 533.602 1870.6 533.341 1871.08C533.614 1871.41 533.826 1871.75 533.987 1872.15C534.259 1872.83 534.311 1873.48 534.235 1874.29C534.167 1875.01 534.022 1875.6 533.711 1876.15C534.37 1876.42 535.019 1876.74 535.652 1877.13C538.688 1878.99 540.546 1881.82 541.468 1885.06C542.586 1888.98 542.364 1893.46 541.168 1897.71C539.921 1902.15 537.605 1906.34 534.497 1909.39C531.89 1911.94 528.714 1913.69 525.137 1913.9C524.895 1913.91 524.655 1913.92 524.416 1913.92C524.223 1914.05 524.03 1914.17 523.835 1914.28C522.253 1915.17 520.05 1915.66 517.989 1915.69L517.28 1921.59C517.728 1922.09 517.794 1922.35 517.763 1922.62C514.728 1959.13 506.049 1994.72 497.418 2030.18C495.815 2036.76 494.214 2043.34 492.65 2049.92C489.606 2060.4 487.356 2071.19 485.107 2082C481.416 2099.73 477.744 2117.5 470.376 2133.85C470.194 2134.25 470.009 2134.66 469.824 2135.06C470.005 2135.45 470.178 2135.84 470.343 2136.24C474.02 2145.05 473.269 2155.25 471.443 2164.43C468.47 2167.83 462.886 2167.54 458.245 2167.68C456.464 2167.73 454.752 2167.79 453.212 2167.95C452.229 2168.05 451.185 2168.21 450.103 2168.39C450.261 2169.38 450.411 2170.37 450.552 2171.35C452.803 2187.18 452.717 2203.29 452.642 2219.35C452.599 2228.42 452.558 2237.48 452.924 2246.45C452.967 2247.51 453.016 2248.57 453.072 2249.63C454.039 2249.49 455.043 2249.38 456.085 2249.33C466.239 2248.77 473.293 2252.95 478.427 2259.49C486.361 2269.6 489.942 2284.99 493.089 2298.11C493.947 2301.68 494.767 2305.09 495.617 2308.21C502.086 2329.88 510.365 2350.76 518.644 2371.63C529.679 2399.44 540.72 2427.24 547.314 2456.76L548.319 2461.26L552.027 2458.51C552.359 2458.27 552.75 2458.09 553.183 2458.08C553.612 2458.06 554.062 2458.2 554.527 2458.47C567.776 2466.43 567.921 2482.84 568.478 2496.66C568.528 2497.88 568.576 2499.08 568.631 2500.27C568.501 2503.18 568.715 2506.33 568.94 2509.52C569.479 2517.17 570.599 2525.54 564.124 2530.43C518.381 2561.61 456.527 2560.71 403.656 2552.53C382.578 2548.68 362.001 2542.26 342.464 2533.47C335.079 2530.97 329.556 2528.32 326.177 2523.97C323.308 2520.27 322.121 2515.36 322.587 2508.55C321.285 2496.15 322.401 2484.35 323.499 2472.54C324.45 2462.3 325.392 2452.05 324.886 2441.73C326.436 2402.1 335.504 2362.92 344.418 2324.33C344.775 2322.79 345.132 2321.24 345.489 2319.7C346.01 2318.06 346.535 2316.39 347.069 2314.7C353.935 2292.88 362.037 2266.15 381.757 2253.93C382.304 2253.81 383.185 2253.78 384.162 2253.7C386.764 2253.48 389.839 2253.13 391.667 2252.25C391.716 2252.22 391.765 2252.2 391.813 2252.17L390.69 2255.97L396.56 2253.45C397.915 2252.87 399.333 2252.44 400.787 2252.17C401.267 2252.08 401.749 2252 402.235 2251.95C402.471 2251.47 402.705 2251 402.935 2250.52C410.919 2234.01 414.628 2216.02 418.305 2198.03C420.577 2186.92 422.844 2175.8 426.177 2165.06C426.463 2164.14 426.758 2163.22 427.06 2162.3C426.157 2162.02 425.266 2161.71 424.39 2161.37C415.111 2157.8 406.693 2150.66 404.085 2141C404.713 2138.27 406.014 2135.29 407.98 2133.05C409.437 2131.4 411.283 2130.14 413.57 2130L417.691 2129.74L416.171 2125.9C414.664 2122.09 414.447 2117.76 414.909 2113.68C422.676 2065.8 433.024 2018.33 444.172 1971.11C448.414 1953.55 452.953 1936.05 458.078 1918.73C458.829 1916.64 459.423 1914.29 460.028 1911.87C461.281 1906.86 462.424 1901.38 466.073 1898.22C466.94 1897.47 467.917 1896.88 468.97 1896.41C468.032 1895.57 467.114 1894.7 466.218 1893.82C458.428 1886.14 451.821 1876.81 451.632 1866.33C451.267 1861.92 453.351 1857.38 456.571 1854.56C457.63 1853.64 458.82 1852.89 460.103 1852.44L465.04 1855.48C466.222 1856.2 467.352 1857.03 468.484 1857.86C469.437 1858.55 470.39 1859.25 471.367 1859.89L483.169 1867.7L475.549 1855.78C469.556 1846.4 472.528 1834.98 474.941 1824.49C475.592 1821.66 476.23 1818.88 476.714 1816.2C477.35 1813.34 477.975 1810.47 478.601 1807.59C482.387 1790.2 486.207 1772.58 492.861 1756.2C493.132 1755.53 493.408 1754.87 493.684 1754.2C493.138 1753.74 492.592 1753.28 492.048 1752.81C466.141 1730.31 456.003 1702.56 454.692 1672.78C452.804 1629.88 469.057 1582.85 483.453 1540.97C487.112 1530.33 490.658 1520.01 493.772 1510.18C493.985 1509.5 494.198 1508.83 494.41 1508.15C493.826 1507.69 493.244 1507.25 492.663 1506.84C489.136 1504.3 484.907 1501.95 480.543 1499.53C469.713 1493.53 457.411 1487.3 455.777 1475.11C455.958 1468.56 458.524 1462.24 460.978 1456.03C461.975 1453.5 462.964 1450.99 463.81 1448.5C464.465 1445.56 466.465 1441.75 469.012 1440.03C469.564 1439.65 470.145 1439.35 470.766 1439.42C471.319 1439.48 471.828 1439.85 472.352 1440.4L475.875 1444.13L477.397 1439.23C478.175 1436.73 478.956 1434.22 479.738 1431.71C494.652 1383.86 509.783 1335.13 508.421 1284.58C508.401 1283.84 508.377 1283.1 508.35 1282.37C507.614 1282.13 506.866 1281.92 506.103 1281.74C500.911 1280.53 495.636 1281.01 490.429 1281.53C483.887 1282.19 477.382 1283.09 471.512 1278.7C418.034 1237.79 423.854 1133.52 428.433 1072.65C428.493 1071.86 428.553 1071.06 428.613 1070.26C427.872 1070.05 427.131 1069.82 426.393 1069.58C423.91 1068.75 421.535 1067.73 419.375 1066.44L417.602 1065.39L415.983 1066.67C415.199 1066.7 414.739 1066.24 414.229 1065.69C412.14 1063.48 410.075 1059.44 408.019 1054.5C400.741 1036.99 394.229 1008.33 392.306 999.883C392.258 999.671 392.213 999.471 392.163 999.253C353.247 822.877 368.135 641.009 382.721 462.304C383.763 449.535 384.804 436.781 385.824 424.048C388.964 400.509 390.167 376.412 391.369 352.264C393.829 302.853 396.235 253.209 415.729 207.806C428.748 174.64 465.447 166.939 496.615 159.962C497.47 159.771 498.322 159.58 499.17 159.39C515.402 154.555 531.723 150.822 548.022 147.093C573.001 141.377 597.929 135.662 621.722 126.284C623.01 125.776 624.293 125.258 625.572 124.73C624.659 123.796 623.817 122.8 623.058 121.743C618.881 115.925 617.244 108.311 617.674 100.757C618.119 92.921 620.793 85.1053 625.377 79.3146C627.175 77.9931 629.288 77.8538 631.431 78.2036C635.631 78.8894 640.013 81.3791 643.577 83.3444C643.929 83.5388 644.274 83.729 644.611 83.9132L647.287 85.3782L648.707 82.6782C654.312 72.0196 658.202 60.2725 662.006 48.743C664.202 42.0852 666.371 35.503 668.852 29.2638C676.447 13.2071 689.478 5.50838 704.511 2.54462C727.168 -1.92229 754.267 4.10962 775.227 9.34054C775.979 9.53289 776.736 9.72493 777.496 9.91789C788.069 12.6008 799.409 15.3935 808.199 21.9941C822.834 33.6839 825.943 51.86 829.25 69.6912C830.924 78.7175 832.605 87.6995 835.554 95.8946C835.885 96.8145 836.235 97.7318 836.602 98.6456C837.435 98.2694 838.252 97.9848 839.045 97.8033C850.636 95.1527 876.077 110.22 884.845 118.246C887.137 119.764 888.186 121.277 888.732 122.98C889.64 125.817 889.348 129.067 889.138 132.275C889.043 133.729 888.95 135.179 888.932 136.594C888.922 137.422 888.937 138.262 888.964 139.109C889.765 139.266 890.563 139.422 891.36 139.577C896.523 140.579 901.791 141.56 907.126 142.553C945.302 149.66 986.931 157.299 1016.63 178.317C1037.39 193.012 1052.2 214.341 1055.66 246.76C1066.63 293.615 1072.46 340.954 1077.85 388.317C1078.58 394.574 1079.29 400.836 1080.01 407.101C1088.7 483.073 1097.46 559.482 1121.06 632.518C1123.38 638.195 1125.63 643.659 1127.88 649.129C1163.18 734.951 1199.01 821.932 1207.48 915.253C1212.08 959.85 1211.38 1004.9 1203.75 1049.11C1203.3 1051.49 1201.41 1053.16 1199.26 1054.04C1196.9 1055.01 1194.06 1055.09 1191.94 1053.75L1180.65 1046.63L1187.81 1057.9C1202.89 1081.63 1190.26 1123.36 1181.71 1152.82C1180.45 1157.18 1179.26 1161.29 1178.23 1165.05C1171.67 1186.81 1161.06 1210.5 1144.38 1223.07C1138.07 1227.83 1130.88 1230.95 1122.7 1231.65C1115.18 1232.28 1106.85 1230.88 1097.61 1226.93C1096.45 1226.44 1095.33 1225.93 1094.25 1225.41C1094 1226.63 1093.75 1227.86 1093.49 1229.09C1075.36 1317.23 1055.12 1404.6 1031.09 1491.36L1027.74 1503.45L1036.2 1494.18C1037.55 1492.71 1039.09 1491.84 1040.71 1491.52C1042.52 1491.16 1044.38 1491.48 1046.09 1492.25C1048.05 1493.13 1049.81 1494.61 1051.13 1496.46C1052.33 1498.16 1053.16 1500.17 1053.4 1502.35C1052.7 1514.21 1048.88 1525.6 1045.1 1536.97C1043.08 1543.04 1041.07 1549.1 1039.49 1555.21C1037.74 1561.52 1034.03 1565.39 1029.28 1567.83C1022.01 1571.57 1012.51 1572.18 1003.54 1572.84C998.865 1573.18 994.316 1573.52 990.232 1574.22C989.621 1574.32 989.003 1574.44 988.378 1574.57C988.201 1575.16 988.027 1575.75 987.855 1576.34C986.649 1580.52 985.591 1584.75 984.533 1588.97C983.687 1592.35 982.841 1595.72 981.916 1599.08L987.68 1600.75C988.102 1599.35 988.498 1598.05 988.869 1596.84ZM541.337 1071.88C541.536 1046.56 550.558 1022.69 559.5 998.859C563.226 988.928 566.947 979.004 570.057 968.992C570.241 968.397 570.424 967.801 570.605 967.205C570.136 966.734 569.663 966.285 569.185 965.859C566.904 963.832 564.087 961.986 561.213 960.12C557.202 957.514 553.019 954.897 550.531 951.361C549 949.186 548.207 946.628 548.737 943.138C550.181 917.049 551.961 890.969 554.092 864.93C554.591 859.371 555.095 853.812 555.599 848.249C564.49 750.185 573.446 650.996 555.837 553.417C555.061 548.974 554.157 544.576 553.252 540.177C552.644 537.221 552.036 534.265 551.468 531.298C551.386 530.862 551.295 530.283 551.188 529.61C550.681 526.407 549.833 521.308 548.121 517.589C546.574 514.229 544.31 512.079 541.597 511.606C540.639 511.44 539.664 511.488 538.689 511.737C538.513 512.431 538.339 513.142 538.166 513.854C508.676 635.305 516.077 759.204 523.507 882.864C526.926 939.756 530.343 996.596 530.132 1053.12C530.13 1053.68 530.127 1054.23 530.124 1054.79C530.476 1054.9 530.814 1055.08 531.117 1055.35C531.882 1056.05 532.093 1057.02 531.94 1057.92C531.754 1059.02 531.067 1060.06 530.012 1060.62C529.644 1060.81 529.252 1060.94 528.854 1061C528.737 1061.53 528.615 1062.06 528.491 1062.59C527.924 1065 527.287 1067.4 526.576 1069.79C526.402 1070.37 526.224 1070.95 526.041 1071.54C526.489 1071.96 526.937 1072.39 527.385 1072.82C530.397 1075.68 533.43 1078.52 536.493 1081.33L541.957 1086.35L541.516 1078.94C541.375 1076.58 541.318 1074.22 541.337 1071.88Z'
                fill={skinColor}
            />
            <path
                d='M571.62 974.366L575.029 965.278L1117.73 1018.04L1116.49 1042.03C1114.16 1087.41 1108.85 1133.66 1099.77 1193.68L1098.89 1199.43L1097.92 1204.98C1090.54 1246.76 1082.7 1282.94 1066.4 1353.1C1066.4 1353.1 1035.15 1474.07 1033.33 1486.24L1040.47 1498.53L1040.48 1498.33C1040.63 1496.38 1039.67 1495.89 1038.77 1496.53L1038.7 1496.58L1048.48 1507.94L1048.59 1507.84L1048.77 1507.65C1049.32 1507.06 1049.79 1506.4 1050.2 1505.35C1051.1 1503.03 1050.82 1500.28 1049.15 1498.12L1048.58 1497.5C1048.05 1496.94 1047.92 1496.84 1047.3 1496.42L1046.76 1496.11L1046.58 1496.01C1046.52 1495.99 1046.46 1495.96 1046.38 1495.92L1046.19 1495.84L1045.97 1495.75C1046.28 1495.86 1046.56 1495.98 1046.9 1496.14C1047.92 1496.62 1048.87 1497.3 1049.71 1498.2C1049.97 1498.49 1050.22 1498.79 1050.45 1499.11L1050.68 1499.44L1051.71 1500.98L1051.9 1502.82C1052.23 1505.95 1051.95 1509.09 1051.19 1512.49L1051 1513.29L1050.85 1513.9C1050.45 1515.43 1049.98 1516.95 1049.22 1519.24L1048.21 1522.26L1047.97 1522.98C1047.41 1524.71 1047.09 1525.82 1046.84 1526.89L1046.69 1527.62L1046.52 1528.46L1046.17 1529.24C1045.44 1530.84 1044.8 1533.04 1043.91 1536.91L1042.42 1543.56L1042.12 1544.84C1040.57 1551.34 1039.09 1555.76 1036.81 1559.69C1033.37 1565.63 1028.37 1569.37 1021.83 1569.94L1021.42 1569.97L1021.21 1569.98L1019.99 1570.19C983.066 1576.45 944.553 1577.63 903.306 1574.32L901.371 1574.16L899.461 1574C863.641 1570.9 826.454 1564.59 783.365 1554.87L779.431 1553.97L773.21 1552.55L773.66 1545.55L773.741 1544.43C773.981 1541.34 774.329 1538.39 774.985 1533.63L776.174 1525.12L776.202 1524.91C777.636 1514.15 777.851 1507.19 776.57 1500.58L776.484 1500.15L792.002 1494L796.535 1486.94L796.747 1483.96L796.863 1482.22C798.11 1463.07 799.009 1434.93 799.034 1409.02L799.03 1404.77L799.01 1400.53L798.975 1396.49C798.636 1364.42 796.861 1339.46 793.63 1326.15L793.514 1325.68L793.263 1326.01L793.021 1326.32C788.808 1331.92 783.774 1341.83 780.081 1351.36L774.448 1366.16C765.963 1388.55 757.398 1411.51 743.199 1449.79L726.691 1494.26L718.89 1515.19L715.765 1508.98L713.749 1512.52C712.092 1515.43 710.886 1518.1 708.738 1523.47L708.021 1525.27L707.789 1525.93L707.377 1527.05C705.212 1532.86 702.752 1537.57 699.498 1541.47C698.032 1543.22 670.389 1557.27 639.002 1553C580.161 1545 496.275 1511.28 463.403 1483.45L461.885 1482.16L459.63 1480.21L459.329 1477.24C459.057 1474.56 465.222 1446.64 465.981 1445.55C467.462 1443.41 469.602 1441.83 472.583 1441.63L472.905 1441.62L476.283 1441.51L479.903 1445.35L484.619 1426.53L486.265 1421.24C494.396 1395.03 499.364 1377.25 503.353 1359.02L503.666 1357.58C508.963 1333.02 511.56 1310.75 511.256 1289.24L511.234 1287.93L511.077 1279.92L519.081 1280.29C533.685 1280.97 552.562 1272.33 559.551 1261.41L559.764 1261.07L564.147 1253.94L570.755 1259.08C572.301 1260.28 573.908 1260.32 576.27 1259.11C578.913 1257.75 581.664 1255.05 583.441 1252.15L583.555 1251.96L583.724 1251.62C587.56 1243.86 588.99 1234.82 588.337 1224.24L588.288 1223.5L588.234 1222.77C587.531 1213.83 585.578 1204.69 582.023 1192.21L581.528 1190.48L578.252 1179.16L589.898 1180.99C598.188 1182.29 608.067 1179.06 614.162 1173.15C619.757 1167.73 621.047 1161.48 617.238 1154.75L617.047 1154.42L616.927 1154.22L615.528 1153.01L613.687 1151.43C607.401 1146.07 600.706 1140.76 589.793 1132.32L581.737 1126.1L576.703 1122.18C563.223 1111.65 555.078 1104.86 546.479 1096.77L543.877 1094.32L543.731 1091.3C542.884 1073.79 545.15 1056.07 550.232 1036.62L550.553 1035.4C554.271 1021.43 558.098 1010.28 566.655 987.533L571.62 974.366Z'
                fill={pantsColor}
            />
            <path
                d='M557.86 1769.37C537.194 1771.89 495.001 1749 495.001 1749C495.001 1749 471.795 1843.5 472.863 1849.31C474.337 1857.32 478.621 1863.86 486.011 1868.62L485.843 1868.4L486.423 1868.91C486.893 1869.31 487.458 1869.85 488.116 1870.46C492.481 1874.58 500.941 1882.54 513.001 1883C519.019 1883.23 533.58 1874.3 533.58 1874.3C538.327 1868.69 541.753 1860.46 544.043 1849.82L544.087 1849.61L545.327 1845.76C551.645 1826 557.64 1805.95 563.315 1785.62L563.425 1785.23L563.574 1784.72C564.057 1783.11 564.389 1782.46 564.745 1782.11L581.057 1766.33L558.556 1769.28L557.86 1769.37ZM465.488 1888.54L474.702 1896.36C486.792 1906.62 501.098 1912.75 515.075 1913.18L515.73 1913.2L519.667 1927.19L519.654 1927.31C517.718 1944.03 489.188 2065.17 479.634 2105.73L479.634 2105.73L479.632 2105.74C478.066 2112.39 477.011 2116.87 476.665 2118.37L476.132 2120.71L476.115 2120.84C475.36 2126.26 473.442 2130.76 470.654 2134.22L470.684 2134.21L472.282 2143.96L472.512 2145.4C473.496 2151.76 473.802 2156.5 473.336 2161.56L473.281 2162.13L472.728 2167.51L467.439 2168.68C466.527 2168.88 465.597 2169.06 464.595 2169.23L463.984 2169.33L452.09 2171.21L455.834 2159.1C457.184 2154.63 457.415 2151.25 456.718 2149.88L456.654 2149.77L452.238 2142.42C449.356 2142.38 446.325 2141.88 443.211 2140.93L442.543 2140.71L442.334 2140.64L440.491 2140.16L439.366 2139.86C431.633 2137.77 426.731 2135.71 422.941 2131.92L422.673 2131.65L422.408 2131.37C418.471 2127.13 417.614 2121.79 418.409 2115.25C418.582 2113.83 418.816 2112.46 419.159 2110.75C419.159 2110.75 459.249 1913.72 462.179 1901.85L465.488 1888.54ZM422.345 2157.54L431.199 2160.68C438.222 2163.17 444.425 2164.65 450.45 2165.15L451.172 2165.21L450.719 2171.65L457.936 2170.64L459.332 2180.82L458.772 2180.78L458.633 2181.27C454.254 2196.83 452.117 2213.81 451.435 2234.82L451.398 2236.02L451.364 2237.22C451.301 2239.56 451.255 2241.79 451.223 2244.09L458.003 2244.93C474.496 2246.97 485.015 2259.73 489.249 2277.84L489.668 2279.7L490.081 2281.6C490.729 2284.64 491.361 2287.88 492.157 2292.15L494.154 2302.92L494.486 2304.66C494.735 2305.94 494.964 2307.09 495.205 2308.26L500.995 2335.95L482.606 2316.08C479.41 2312.63 477.31 2309.57 473.832 2303.68L471.413 2299.56L470.942 2298.77C469.501 2296.37 468.516 2294.87 467.379 2293.35L467.074 2292.94L466.587 2292.31L465.606 2290.22L464.353 2287.48C464.036 2286.8 463.773 2286.24 463.511 2285.7L463.143 2284.95C460.592 2279.83 458.557 2277.55 456.537 2277.15L456.393 2277.12L451.319 2276.33L451.335 2278.14L445.036 2279.21C427.978 2282.11 415.082 2282.23 402.917 2278.23L402.31 2278.03L395.184 2275.6L392.248 2279.59L388.231 2275.69L388.077 2275.98L387.654 2276.76L386.855 2278.17L383.685 2283.61L382.976 2284.85L382.442 2285.8C382.271 2286.11 382.106 2286.41 381.947 2286.7L381.499 2287.54C380.204 2289.99 379.342 2291.94 378.917 2293.4L378.824 2293.74L379.378 2294.3L379.596 2295.87L386.57 2301.59L378.226 2307.23C374.43 2309.79 370.604 2312.6 366.371 2315.9L364.655 2317.25L344.508 2333.2L353.423 2307.44L354.093 2305.47C354.209 2305.13 354.329 2304.77 354.453 2304.4L357.441 2295.41L358.328 2292.79L358.891 2291.17L359.461 2289.55C365.058 2273.84 370.443 2263.51 378.646 2254.94L379.059 2254.51L379.795 2253.76L380.71 2253.24C382.468 2252.23 383.981 2251.71 386.31 2251.13L387.98 2250.72L388.374 2250.61C388.727 2250.52 388.965 2250.44 389.159 2250.37L389.39 2250.28C389.398 2250.27 389.404 2250.27 389.408 2250.27C389.413 2250.27 389.415 2250.27 389.416 2250.27L390.655 2248.15L393.566 2246.9C395.217 2246.2 396.929 2245.65 398.677 2245.28L399.334 2245.14L409.247 2243.27C409.807 2241.51 410.327 2239.73 410.806 2237.92L411.158 2236.56L411.642 2234.47L412.022 2232.79C414.886 2219.86 416.723 2206.95 419.184 2185.06L420.922 2169.6L421.242 2166.87L422.345 2157.54Z'
                fill={prothesisColor}
            />
            <path
                d='M494.999 2315C495.588 2317.43 485.3 2318.53 485.896 2320.71C492.125 2341.58 509.754 2350.23 517.724 2370.32L521.459 2379.75C531.526 2405.2 541.281 2430.77 547.314 2457.77L548.319 2462.27C548.319 2462.27 567.786 2480.94 568.326 2493.85C568.326 2493.85 570.397 2526.71 564.124 2531.45C518.381 2562.63 456.527 2561.73 403.656 2553.54C382.578 2549.7 362.001 2543.28 342.464 2534.49C335.079 2531.98 329.556 2529.33 326.177 2524.98C323.308 2521.29 322.121 2516.38 322.587 2509.56C321.372 2497.99 322.263 2486.94 323.28 2475.91L323.757 2470.76C324.609 2461.45 325.346 2452.12 324.886 2442.74C326.309 2406.36 337.84 2370.23 345.999 2334.72L354.764 2320.71C354.764 2320.71 368.903 2254.94 386.999 2255L460.999 2249C484.999 2252 494.999 2315 494.999 2315ZM818.089 2229.76C828.313 2264.14 843.535 2281.34 863.754 2281.34C894.082 2281.34 898.102 2241.31 921.876 2241.31C921.876 2241.31 941.146 2240.33 961.81 2238.72C982.314 2246.05 999.22 2262.72 1015.44 2279.79L1024.17 2289.01C1033.22 2298.56 1042.22 2307.81 1051.6 2315.35C1076.74 2337.78 1103.95 2357.74 1132.46 2375.66L1134.7 2376.99C1145.78 2383.57 1157.9 2391.32 1166.26 2401.38C1172.33 2408.71 1176.39 2417.28 1176.28 2427.59L1176.25 2431.12C1176.25 2431.12 1185.88 2440.31 1185.97 2444.2L1186 2445.51C1186.03 2446.56 1180.84 2468.84 1172.46 2474.39C1160.68 2482.21 1117.33 2489.09 1115.83 2489.33C1019.76 2499.62 922.509 2473.98 833.453 2438.94L829.999 2437.58C829.755 2437.62 829.509 2437.66 829.259 2437.69C822.105 2438.64 815.951 2434.82 811.083 2429.31C804.357 2421.68 799.978 2410.66 798.93 2402.11C798.135 2398.51 800.24 2379.88 798.769 2375.3C786.383 2347.14 784.756 2316.51 786.528 2286.5C786.066 2251.22 793.743 2239.99 800.464 2231.84L802.196 2229.76L818.089 2229.76Z'
                fill={shoesColor}
            />
            <path
                d='M1184.91 1086.45C1173.71 1124.1 1163.44 1179.85 1134.92 1207.58C1124.89 1215.68 1113.1 1210.73 1101.58 1209.75C1109 1166.19 1114.13 1122.27 1118.26 1078.29C1141.72 1073.79 1164.34 1065.61 1185.29 1054.15C1190.73 1063.27 1187.33 1077.14 1184.91 1086.45ZM1091.4 1198.23C1080.59 1260.45 1065.86 1321.89 1051.59 1383.25C1044.04 1420.65 1027.95 1459.22 1024.48 1496.13C951.699 1525.17 872.952 1513.88 797.673 1502.03C798.832 1501.05 799.718 1499.55 799.843 1497.72C801.713 1496.87 803.243 1495.18 803.523 1492.65C807.76 1437.2 815.509 1376.9 802.413 1323.26C811.065 1315.46 818.803 1306.39 826.013 1297.25C832.573 1288.59 818.923 1277.14 811.253 1283.44C821.87 1256.91 832.826 1230.53 844.313 1204.37C847.383 1197.36 837.043 1191.25 833.943 1198.31C791.164 1296.21 755.075 1396.41 717.763 1496.55C715.686 1492.42 707.336 1492.91 710.363 1498.78C633.922 1505.17 554.133 1485.66 483.803 1453.94C500.61 1399.96 519.756 1344.97 518.633 1287.86C535.095 1288.62 557.339 1279.25 566.053 1265.08C574.763 1271.85 585.443 1263.54 590.033 1255.65C600.639 1234.95 594.769 1209.69 588.633 1188.48C610.286 1191.88 637.397 1171.8 622.582 1149.37C599.691 1129.28 573.566 1112.18 551.123 1091.02C549.204 1051.34 564.579 1014.3 578.543 977.077C649.102 1026.8 718.28 1080.31 792.371 1124.21C805.111 1125.51 815.4 1115.87 824.963 1108.83C852.253 1088.58 879.793 1068.6 906.683 1047.8C909.633 1048.89 913.023 1048.62 915.533 1046.94C932.705 1065.33 950.854 1082.31 967.843 1100.8C978.048 1110.23 985.419 1124.95 999.663 1128.57C1006.32 1129.79 1010.56 1127.03 1014.83 1122.41C1040.74 1094.99 1068.62 1069.52 1095.47 1043.05C1098.93 1047.54 1105.58 1046.02 1108.9 1041.72C1106.21 1094.12 1099.33 1146.37 1091.4 1198.23ZM1043.41 1502.41C1042.59 1503.11 1043.56 1502.51 1044.34 1503.68C1045.13 1511.2 1040.71 1518.84 1039.23 1526.23C1034.32 1537.08 1034.8 1562.2 1020.3 1562.59C940.241 1576.52 859.345 1564.65 781.003 1546.74C782.022 1530.84 786.946 1514.46 783.733 1498.73C785.043 1497.55 786.433 1496.73 787.983 1496.41C787.547 1498.63 787.847 1501.36 789.553 1502.47C856.584 1531.91 953.693 1537.99 1023.26 1510.63C1030.58 1512.94 1036.05 1503.51 1030.31 1498.32C1031.28 1498.19 1032.21 1497.85 1033 1497.25C1031.86 1502.22 1039.14 1506.06 1043.41 1502.41ZM820.513 1565.84C822.553 1566.38 824.603 1566.88 826.653 1567.37C825.08 1571.12 827.35 1576.55 826.733 1580.78C825.293 1575.54 823.263 1570.48 820.513 1565.84ZM700.893 1522.73C697.705 1531.87 692.643 1542.04 681.953 1543.5C679.453 1542.49 676.573 1542.67 674.693 1544.39C605.011 1543.44 519.75 1522.44 466.691 1476.56C466.053 1470.28 469.039 1463.96 469.663 1457.72C470.539 1455.24 471.543 1439.65 474.863 1442.55C472.332 1448.75 470.146 1457.84 479.803 1456.93C548.122 1496.34 628.855 1511.35 707.133 1508.89C704.643 1513.26 702.763 1518 700.893 1522.73ZM556.133 1783.26C550.139 1804.74 543.726 1826.11 536.873 1847.34C530.28 1878.81 514.409 1883.03 490.822 1862.41C473.754 1852.08 480.952 1833.52 483.534 1817.53C486.723 1797.87 490.863 1778.35 493.843 1758.66C512.643 1772.59 536.313 1779.43 559.573 1776.38C557.713 1778.18 556.903 1780.5 556.133 1783.26ZM524.713 1884.04C524.503 1883.98 524.283 1883.91 524.073 1883.84C524.313 1883.76 524.543 1883.67 524.773 1883.59C524.753 1883.74 524.733 1883.89 524.713 1884.04ZM512.423 1924.55C504.986 1990.71 483.501 2054.28 468.785 2119.04C467.123 2132.45 456.871 2137.35 444.512 2133.1C439.433 2131.79 431.663 2129.91 427.943 2125.92C423.703 2121.36 426.583 2112.47 427.523 2107.15C433.363 2074.25 439.923 2041.49 446.643 2008.75C454.645 1973.18 461.149 1936.9 469.893 1901.74C482.565 1912.49 498.706 1920.04 515.633 1920.36C513.993 1920.96 512.623 1922.36 512.423 1924.55ZM465.863 2161.02C464.863 2161.24 463.863 2161.42 462.853 2161.58C464.373 2156.76 465.827 2150.05 463.123 2145.56C463.743 2145.34 464.343 2145.1 464.923 2144.83C465.813 2150.26 466.433 2155.47 465.863 2161.02ZM457.243 2297.44C473.358 2307.9 482.765 2325.5 491.013 2342.31C496.313 2353.09 500.633 2366.1 508.743 2375.29C512.103 2384.34 515.483 2393.38 518.703 2402.48C528.339 2432.42 540.363 2464.19 539.203 2495.77C539.213 2495.74 539.213 2495.7 539.233 2495.65C539.124 2496.44 538.856 2497.2 538.673 2497.98C539.403 2497.47 540.247 2496.98 539.103 2497.82C538.998 2497.73 538.677 2498.02 538.663 2498C538.663 2498.02 538.653 2498.04 538.653 2498.06C538.723 2498 538.793 2497.95 538.883 2497.89C538.807 2497.94 538.712 2498.04 538.633 2498.11C538.633 2498.13 538.623 2498.16 538.613 2498.19C538.553 2498.24 538.11 2498.57 538.203 2498.45C537.153 2498.93 536.293 2499.59 535.493 2500.39C473.746 2513.77 405.576 2516.16 348.483 2485.49C326.545 2440.84 349.05 2366.23 358.053 2318.15C386.796 2301.76 424.433 2280.97 457.243 2297.44ZM482.103 2279.71C484.433 2289.99 486.003 2300.37 488.153 2310.65C481.839 2303.82 478.587 2295.26 473.075 2288.05C469.68 2280.93 466.038 2270.69 457.593 2269.37C457.362 2263.59 457.203 2257.81 457.123 2252.03C471.483 2253.81 479.053 2266.18 482.103 2279.71ZM560.333 2505.16C560.163 2502.34 558.683 2499.54 556.263 2498C556.818 2488.05 555.118 2478.38 553.563 2468.58C564.016 2479.74 559.565 2497.63 561.274 2511.63C561.138 2517.2 563.839 2524.29 557.363 2527.17C537.143 2541.15 512.633 2547.67 488.473 2550.48C435.764 2556.51 380.967 2546.82 333.873 2522.32C327.571 2513.78 329.778 2493.02 328.933 2482.09C331.913 2491.84 337.141 2500.52 347.484 2503.57C411.553 2534.42 486.956 2530.71 554.353 2513.35C558.769 2512.16 560.545 2508.72 560.333 2505.16ZM391.183 2289.29C391.553 2288.84 391.903 2288.39 392.263 2287.93C394.513 2287.82 396.763 2287.62 399.013 2287.37C395.647 2288.71 392.334 2290.17 389.103 2291.81C389.803 2290.98 390.503 2290.14 391.183 2289.29ZM418.473 2238.05C423.966 2214.87 425.942 2191.03 428.733 2167.41C436.816 2170.27 444.918 2172.25 453.413 2172.48C443.005 2204.01 443.541 2238.54 443.823 2271.48C431.05 2273.64 417.294 2274.86 404.773 2270.59C411.053 2260.53 415.563 2249.59 418.473 2238.05ZM504.643 1264.89C497.633 1264.19 490.663 1264.68 483.723 1265.68C442.647 1237.76 436.171 1123.28 429.723 1074.95C459.117 1082.46 490.25 1080.43 518.783 1070.55C519.321 1075.81 525.334 1078.53 528.993 1074.98C548.342 1109.42 577.295 1137 607.163 1161.66C606.813 1160.51 606.563 1162.62 607.003 1161.82C603.199 1170.54 589.23 1166.01 582.623 1172.09C578.383 1175.25 577.493 1180.78 580.193 1184.47C573.046 1204.22 584.408 1228.33 573.713 1247.07C571.31 1249.86 568.183 1251.86 566.113 1255C551.879 1245.24 538.908 1265.87 524.493 1266.78C524.593 1266.78 524.693 1266.78 524.803 1266.77C522.584 1267.01 519.023 1266.89 517.073 1266.62C512.938 1265.97 508.814 1265.3 504.643 1264.89ZM531.123 574.777C534.143 555.087 537.663 535.516 542.233 516.136C547.743 517.096 548.973 529.717 549.673 533.436C573.262 640.175 563.048 750.021 552.942 857.757C550.493 886.646 548.473 915.587 546.893 944.547C544.853 957.865 560.169 962.384 568.343 969.676C556.973 1006.29 537.353 1041.71 539.673 1080.7C536.623 1077.9 533.603 1075.07 530.603 1072.22C531.363 1069.77 532.013 1067.32 532.563 1064.85C536.297 1062.9 537.482 1057.54 534.283 1054.71C535.512 895.057 505.554 734.045 531.123 574.777ZM829.243 264.006C834.913 253.919 849.927 267.02 840.493 274.346C833.929 279.662 824.831 270.932 829.243 264.006ZM852.013 370.247C856.609 361.799 871.536 365.992 868.743 376.006C868.783 375.577 868.813 375.237 868.843 374.976C869.24 383.133 853.43 389.751 852.333 379.327C850.613 376.617 850.203 373.066 852.013 370.247ZM873.093 485.006C884.473 480.526 888.667 497.345 879.023 501.827C868.652 505.51 862.94 488.718 873.093 485.006ZM886.373 608.217C889.183 598.701 903.545 601.215 903.443 610.997C903.08 624.205 883.529 620.218 886.373 608.217ZM909.913 727.737C913.906 715.783 929.247 721.97 927.962 733.547C929.636 740.233 916.676 753.726 914.053 742.797C910.553 738.577 908.903 733.157 909.913 727.737ZM934.013 865.587C934.043 865.547 934.073 865.507 934.103 865.467C942.638 869.483 935.251 887.772 927.023 881.057C919.04 876.183 924.565 860.731 934.013 865.587ZM945.243 977.497C955.2 987.286 939.803 1002.78 929.982 992.756C920.015 982.987 935.403 967.492 945.243 977.497ZM1187.22 1053.1C1187.35 1053.39 1187.49 1053.68 1187.65 1053.95C1187.39 1053.73 1187.13 1053.51 1186.87 1053.29C1186.98 1053.23 1187.1 1053.17 1187.22 1053.1ZM813.993 2219.22C814.369 2226.46 814.907 2233.78 816.653 2240.8C821.836 2269.33 858.491 2303.59 888.653 2283.09C902.493 2273.35 908.553 2254.5 925.053 2248.39C942.343 2241.98 961.273 2248.29 975.823 2258.2C992.663 2269.67 1005.78 2286.01 1020.12 2300.28C1050.62 2330.64 1084.44 2357.67 1120.65 2380.92C1139.6 2392.68 1179.28 2410.33 1163.57 2437.88C1151.55 2455.32 1121.31 2447 1116.1 2456.85C1049.01 2459.61 983.355 2441.26 919.573 2422.47C887.194 2411.88 853.314 2405.71 821.923 2392.27C791.84 2365.92 791.739 2307.94 795.882 2270.78C797.233 2262.65 800.588 2224.01 813.243 2230.89C817.001 2231.31 811.543 2227.15 810.203 2227.66C811.966 2225.15 813.413 2222.26 813.993 2219.22ZM1179.09 2436.04C1179.52 2436.25 1179.97 2436.35 1180.43 2436.36C1181.75 2439.74 1181.1 2453.51 1180.85 2455.88C1176.79 2476.6 1144.16 2480.04 1126.86 2483.17C1066.09 2492.75 1004.28 2486.05 944.993 2470.78C916.053 2463.61 887.273 2455.32 859.183 2445.33C834.212 2437.73 803.375 2425.12 806.443 2393.46C820.392 2412.24 864.819 2417.78 887.172 2425.55C957.324 2446.86 1028.5 2469.78 1102.53 2470.52C1113.75 2470.03 1129.25 2473.17 1137.66 2464.72C1155.5 2462.17 1174.01 2452.29 1179.09 2436.04ZM1195.23 825.587C1178.98 761.551 1152.84 700.604 1127.38 639.846C1099.87 559.175 1091.81 473.731 1081.98 389.546C1076.58 342.05 1070.73 294.618 1059.79 248.016C1050.5 161.144 962.27 151.672 893.083 138.207C893.181 130.789 895.461 122.351 888.022 117.607C881.193 110.67 844.734 89.1106 837.533 98.2366C834.705 91.3586 833.322 83.7266 831.983 76.3856C831.083 73.4886 830.712 63.4966 827.564 63.5756C826.891 83.1336 818.592 111.767 835.243 126.457C825.249 141.69 816.916 160.147 803.743 172.277C803.753 172.266 803.763 172.256 803.773 172.247C803.113 172.676 802.443 173.066 801.753 173.436C801.913 173.306 800.963 173.657 800.183 173.907C798.393 174.248 795.432 173.592 793.603 172.766H793.623C748.262 146.986 703.883 119.376 659.973 91.0956C666.25 81.8106 674.372 36.3036 666.584 29.9956C661.138 47.9486 655.468 65.9616 647.203 82.8556C640.043 78.9476 628.457 71.9196 622.423 81.1056C614.813 93.8686 612.64 112.376 621.773 125.066C582.52 140.534 540.191 145.95 499.663 158.038C482.003 162.566 463.303 165.936 446.733 173.787C397.356 201.183 397.316 268.681 391.9 318.395C378.004 560.382 333.927 810.54 402.951 1047.93C405.603 1055.22 409.523 1062.22 412.573 1069.39C413.783 1072.23 416.923 1072.14 418.993 1070.6C421.333 1071.99 423.903 1073.1 426.593 1074C422.075 1135.72 415.949 1248.46 475.52 1285.27C485.935 1289.01 495.763 1283.68 506.573 1286.24C508.013 1339.09 491.233 1389.85 475.683 1439.92C464.245 1431.05 459.861 1457.73 456.403 1464.59C444.787 1489.2 475.799 1500.21 492.063 1510.85C467.816 1587.2 417.612 1692.94 491.233 1756.65C483.422 1775.88 479.413 1796.91 474.923 1817.19C472.512 1830.42 466.183 1846.68 474.173 1858.97C472.011 1857.54 469.969 1855.85 467.763 1854.5C477.365 1854.35 463.164 1847.34 457.434 1852.58C441.434 1864.49 453.286 1886.33 465.263 1897.53C460.603 1901.01 458.993 1910.63 457.613 1915.2C451.953 1933.96 446.993 1952.95 442.403 1972C431.232 2019.31 420.865 2066.88 413.082 2114.87C412.553 2119.57 412.863 2124.35 414.533 2128.58C408.51 2128.84 404.892 2134.59 402.974 2139.62C400.256 2150.87 414.668 2161.94 424.463 2165.75C414.14 2200.01 413.213 2238.13 391.343 2267.88C388.993 2265.6 384.973 2265.19 382.963 2268.98C380.768 2275.26 367.276 2292.34 372.333 2297.46C372.503 2298.69 373.133 2299.9 374.073 2300.67C369.243 2303.93 364.633 2307.39 360.043 2311.03C366.181 2293.45 371.276 2272.94 384.472 2259.4C387.953 2257.42 392.403 2258.09 395.183 2254.78C397.213 2252.36 397.313 2249.47 395.283 2247.1C394.323 2245.97 392.113 2247.17 392.703 2248.6C394.383 2252.64 384.043 2251.93 381.663 2252.75C358.447 2267.17 350.115 2299.96 342.591 2324.81C333.555 2368.48 320.906 2412.98 323.701 2457.9C320.697 2473.6 316.372 2516.77 325.481 2528.65C373.555 2557.29 433.198 2565.7 488.473 2560.19C513.113 2556.62 577.805 2548.81 573.184 2514.61C571.635 2495.3 576.098 2469.51 557.194 2457.46C555.023 2456.19 552.933 2456.54 551.393 2457.68C539.837 2405.95 514.729 2359.46 499.663 2309C493.345 2285.84 488.773 2246.18 457.073 2247.91C456.054 2222.96 458.212 2197.38 454.763 2172.67C454.763 2172.68 454.763 2172.68 454.753 2172.68C454.733 2172.62 454.703 2172.56 454.673 2172.51C461.185 2171.72 472.134 2173.46 475.584 2166.65C477.35 2157.07 478.216 2145.82 474.263 2136.66C486.143 2110.41 488.635 2079.96 496.705 2052.25C506.733 2010.08 518.293 1967.88 521.893 1924.55C522.083 1922.24 520.843 1920.81 519.193 1920.27C521.765 1920.22 524.496 1919.58 526.463 1918.47C544.214 1917.44 554.344 1885.91 538.373 1876.15C538.513 1874.79 538.333 1873.6 537.923 1872.61C548.724 1851.97 552.455 1829.42 560.045 1807.84C561.479 1798.23 570.925 1784.03 565.463 1775.4C647.441 1754.1 667 1628.39 685.713 1557.3C712.74 1552.02 710.18 1526.28 724.851 1509.59C727.423 1507.11 727.543 1504.12 726.333 1501.71C752.275 1448.57 768.633 1388.29 791.833 1333.01C794.966 1386.6 793.907 1440.45 788.243 1493.85C771.11 1489.87 771.043 1513.54 768.653 1524.9C767.413 1531.96 766.173 1539.01 764.933 1546.07C763.113 1556.46 776.473 1559.43 780.053 1551.21C790.753 1556.5 801.893 1560.55 813.293 1563.85C815.703 1575.17 818.043 1586.33 818.133 1598.02C818.847 1611.4 811.444 1624.8 813.943 1637.76C797.439 1677.12 771.554 1710.9 759.623 1751.92C720.19 1895.46 800.65 2035.25 810.413 2177.69C806.299 2159.73 808.697 2203.59 808.864 2207.22C809.306 2236.46 783.706 2222.91 784.686 2286.89C782.878 2317.34 784.611 2348.53 797.064 2376.78C799.823 2385.47 795.089 2394.12 797.104 2403.04C799.081 2419.19 812.303 2443.67 830.803 2441.23C936.36 2481.19 1058.65 2517.44 1169.67 2480.22C1177.39 2476.38 1185.44 2471.41 1188.21 2462.78C1190.58 2455.08 1193.77 2425.92 1180.43 2428.18C1180.72 2401.65 1155.52 2385.63 1135.2 2373.68C1106.8 2355.82 1079.68 2335.93 1054.64 2313.58C1016.68 2283.1 985.388 2224.23 929.273 2233.34C921.965 2193.28 929.62 2152.43 929.562 2112.01C933.218 1933.72 968.289 1758.92 994.828 1583.28C995.063 1581.76 992.983 1581.12 992.473 1582.64C935.324 1747.47 920.82 1924.32 910.079 2097.46C906.529 2144 910.537 2190.33 920.073 2235.98C894.968 2242.88 891.083 2281.98 861.764 2278.22C846.189 2274.95 832.239 2262.65 825.983 2248.18C832.645 2237.34 827.932 2222.2 827.665 2209.89C826.633 2197.95 825.423 2186.02 824.013 2174.11C814.293 2037.3 739.335 1904.95 768.899 1766.62C783.031 1698.58 850.105 1641.5 828.973 1567.92C889.202 1581.77 951.967 1584.52 1013.22 1576.37C1035.46 1575.68 1042.56 1566.29 1047.22 1545.56C1050.58 1531.76 1057.44 1518.2 1057.55 1503.87C1056.56 1492.73 1043.15 1484.95 1035.13 1493.74C1059.17 1406.92 1079.44 1319.45 1097.58 1231.27C1156.19 1256.41 1179.28 1184.06 1190.06 1140.49C1195.26 1114.39 1206.45 1082.27 1191.49 1057.87C1235.23 1075.3 1206.15 849.269 1195.23 825.587Z'
                fill={outlineColor}
            />
        </>
    );
};

ShirtProthesisColorPants.config = ShirtProthesisColorPantsConfig;
export default ShirtProthesisColorPants;
