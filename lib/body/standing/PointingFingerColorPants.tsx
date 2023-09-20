import React from "react";

export const PointingFingerColorPantsConfig = {
    name: "Pointing Finger Color Pants",
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
    height: 2522,
    viewBox: "0 0 1645 2522"
};

const PointingFingerColorPants = ({ skinColor = "#D08B5B", shoesColor = "white", pantsColor = "#9DDADB", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M427.661 696.967L417.817 695.986C412.973 615.237 426.59 535.904 442.493 457.872L452.388 458.456C455.879 503.426 478.823 546.022 468.316 592.302C458.27 628.854 436.984 660.361 427.661 696.967ZM1550.58 290.288L1544.82 291.521C1555.56 271.141 1545.54 264.435 1533.4 247.586L1532.07 250.646L1527.4 240.41C1526.47 237.811 1525.52 235.604 1522.96 234.632C1520.46 221.896 1513 210.233 1503.08 203.898L1501.18 206.038C1497.24 202.593 1492.5 201.281 1487.98 199.686C1497.68 185.026 1503.91 166.008 1510.44 150.291C1515.77 133.783 1524.08 117.763 1525.65 101.024C1524.39 84.9364 1509.22 95.3862 1501.81 103.41C1479.21 123.274 1459.74 154.735 1445.15 192.941C1420.09 186.41 1405.72 193.301 1398.76 227.602C1392.35 250.903 1385.8 274.804 1384.94 298.962C1381.57 297.805 1375.61 293.456 1372.38 296.867C1316.7 357.913 1250.95 404.943 1187.36 456.414C1139.31 420.997 1114.3 350.927 1087.87 298.327C1041.77 208.042 995.666 75.8677 877.078 76.333C861.362 74.6913 846.013 72.8088 831.177 68.236C825.432 66.6721 818.33 64.7887 816.38 61.2925C812.866 50.0317 812.2 37.8473 806.022 27.5203C789.069 -0.0902214 752.339 -2.26028 723.557 3.73459C674.69 12.8083 675.92 7.51146 672.392 59.0066C671.334 71.231 661.877 72.9816 651.781 75.5131C640.319 79.1342 628.642 82.0932 616.861 84.477C618.084 84.1324 619.306 83.7919 620.529 83.4454C429.275 86.4813 302.289 308.758 277.097 466.011C247.837 626.893 285.682 805.94 345.513 941.064C342.944 990.272 352.579 1039.7 358.679 1088.21C362.508 1100.34 375.764 1101.52 379.554 1087.47L384.226 1068.96L389.227 1087.38C392.398 1098.77 397.494 1100.13 402.079 1100.21C407.767 1100.21 410.885 1097.4 411.072 1082.58L420.493 1080.31C424.123 1087.24 427.728 1093.37 433.432 1097.63C444.902 1181.17 452.102 1268.04 479.943 1348.88C491.045 1378.88 508.094 1406.12 520.615 1435.55C461.579 1569.05 451.683 1716.99 437.508 1859.94C438.648 1860.03 444.507 1860.54 445.758 1860.65L442.525 1869.26C438.11 1871.13 435.515 1875.07 434.178 1879.44C431.2 1879.19 418.776 1879.28 419.468 1882.13C419.778 1885.76 538.375 1887.8 539 1891C539.595 1894.04 541.102 1914.18 530 1917C498.791 1924.91 429.361 1914.6 434.511 1919.65C434.633 1922.35 434.798 1925.09 435.006 1927.64C417.338 1989.41 404.391 2055.26 396.524 2123.16C386.523 2132.8 384.02 2164.51 398.936 2172.97C440.114 2201.38 495.428 2214.86 547.508 2209.74C603.871 2204.4 671.092 2181.9 644.119 2117.5C643.77 2115.5 641.033 2115.4 638.875 2115.84C634.097 2111.19 628.917 2107.68 623.314 2105.71C612.181 2077.85 602.168 2048.64 593.434 2019.48C589.179 2006.08 584.779 1992.23 585.141 1977.55C587.247 1941.48 590.953 1926.57 615.97 1898.16C631.457 1905.62 660.971 1851.6 667.735 1840.26C681.963 1806.71 681.413 1859.78 681.413 1859.78C687.335 1880.51 689.673 1915.12 704.483 1930.55C712.539 1984.24 657.414 2008.84 692.935 2068.39C680.913 2069.22 679.792 2074.04 680.002 2088.66C679.962 2099.17 679.689 2110.19 681.666 2120C684.063 2132.06 695.174 2135.3 711.852 2138.85C725.368 2141.85 738.382 2145.27 751.795 2148.5C765.36 2153.02 779.652 2152.65 785.229 2138.91C852.403 2161.71 1046.05 2159.1 1110.1 2128.88C1127.78 2121.79 1140.26 2117.78 1124.02 2097.81C1115.07 2040.82 953.625 2105.05 933.004 2042.54C930.062 2034.43 891.227 1983.6 880.696 1977.55C884.997 1971.35 880.525 1921.47 880.696 1919.65C881.169 1914.65 842.23 1926.92 820 1922C809.243 1919.62 804.276 1903.83 806 1898C806.685 1895.68 891.833 1875.52 892.566 1873.09C908.3 1820.8 934.383 1742.43 938.283 1701.19C943.922 1602.63 938.633 1519.53 968.611 1419.37C1010.52 1260.77 1091.92 1111.94 1093.02 944.106C1091.62 916.284 1099.32 886.661 1092.34 859.359L1101.01 854.842C1102.26 856.282 1104.51 856.242 1104.96 854.284C1110.65 845.039 1104.28 833.952 1102.97 823.828C1105.94 820.638 1104.46 817.728 1100.87 815.987C1062.36 679.82 997.95 659.928 1015.68 489.72C1044.61 551.121 1108.69 613.277 1179.33 604.139C1250.49 614.793 1416.49 441.15 1448.55 385.017C1454.43 385.473 1454.5 381.254 1455.39 377.278C1484.68 380.728 1512.08 357.706 1512.63 329.54C1538.32 345.497 1565.78 322.709 1552.17 294.877C1551.63 293.373 1551.09 291.84 1550.58 290.288Z'
                fill={skinColor}
            />
            <path
                d='M633.958 2113.34L640.885 2135.89C647.1 2156.12 639.671 2173.15 620.663 2183.84C561.6 2215.21 483.671 2212.98 420.059 2180.7C414.672 2177.92 409.463 2174.96 404.444 2171.82L402.945 2170.87L401.69 2170.07L401.058 2169.66C398.462 2167.94 396.795 2166.38 395.655 2164.19L395.496 2163.87L395.416 2163.71L395.357 2163.54C395.077 2162.71 394.822 2161.88 394.59 2161.04L394.412 2160.38L394.241 2159.71C393.079 2155.07 392.704 2150.86 392.439 2142.64L392.318 2138.74L392 2129.12L397.727 2136.85C400.068 2140.01 403.255 2142.71 408.484 2146.24L410.782 2147.76L415.258 2150.7L415.386 2150.78C426.681 2158.35 439.296 2164.7 453.212 2169.98C503.589 2188.7 560.964 2186.37 605.606 2162.47L606.923 2161.75L610.44 2159.64L611.534 2158.98C618.314 2154.81 622.351 2151.71 625.485 2147.84L625.725 2147.54L625.961 2147.24L626.905 2146.01L628.45 2146.07C632.608 2146.23 635.171 2142.49 635.03 2137.2L635.02 2136.9L633.958 2113.34ZM691.408 2066.74L695.739 2069.5C743.916 2100.2 787.867 2119.54 832.678 2127.43C858.265 2131.68 885.308 2132.85 916.259 2131.54L919.863 2131.38L922.84 2131.23C941.408 2130.28 958.535 2128.73 990.048 2125.38L1001.86 2124.12L1016.6 2122.2L1022.88 2121.37C1050.72 2117.63 1068.44 2114.76 1086.86 2110.75L1088.85 2110.32L1088.9 2110.28C1089.41 2109.92 1089.95 2109.58 1090.74 2109.13L1091.43 2108.75C1093.29 2107.71 1093.99 2107.19 1094.35 2106.54L1094.39 2106.45L1095.28 2104.63L1098.02 2104.82L1098.07 2104.8C1098.63 2104.49 1099.21 2104.18 1099.79 2103.88L1100.67 2103.44L1101.57 2103L1101.94 2102.82L1103 2102.62L1104.15 2102.4C1106.28 2101.98 1108.33 2101.48 1111.37 2100.67L1113.79 2100.01L1114.68 2099.76L1115.55 2100.06C1122.62 2102.46 1124.49 2109.17 1120.39 2114.32L1120.21 2114.54L1120.08 2114.69L1120.06 2114.83C1119.81 2116.52 1118.65 2117.77 1116.88 2118.89L1116.63 2119.05L1116.25 2119.28L1115.94 2119.46L1115.82 2119.61C1115.56 2119.94 1115.26 2120.25 1114.93 2120.54L1114.68 2120.74L1114.41 2120.94L1114.29 2121.02L1111.88 2122.58L1111.08 2123.08C1109.29 2124.19 1107.95 2124.89 1106.5 2125.39L1106.18 2125.5L1106.16 2125.52C1100.25 2131.27 1091.14 2134.39 1077.47 2137L1076.04 2137.26L1075.33 2137.39L1073.17 2137.78C1002.53 2150.43 930.028 2153.9 858.016 2148.15C846.821 2147.25 835.688 2146.13 824.636 2144.8L820.955 2144.35L816.582 2143.79L811.808 2143.22L810.558 2143.06L809.324 2142.9C798.386 2141.39 791.967 2139.24 786.219 2134.14L785.906 2133.86L785.479 2133.46C783.133 2131.23 778.639 2132.77 778.578 2135.67L778.579 2135.84L778.589 2136.03C778.896 2140.37 776.231 2143.11 771.941 2143.89C769.042 2144.42 765.343 2144.13 760.867 2143.24C759.131 2142.89 757.32 2142.46 755.408 2141.95L754.05 2141.57L752.189 2141.04C751.92 2140.96 751.647 2140.88 751.375 2140.79L747.296 2139.57L742.273 2138.19C740.357 2137.65 738.249 2137.06 735.575 2136.31L721.267 2132.26L717.808 2131.3C714.775 2130.47 712.212 2129.78 709.515 2129.08L708.22 2128.75L705.084 2128.14L703.964 2127.91L702.954 2127.69C692.337 2125.32 690.535 2122.41 690.314 2109.07L690.298 2107.89L689.732 2102.79L689.389 2099.84C688.998 2096.56 688.63 2093.79 688.227 2091.14L687.989 2089.62L687.908 2089.11L687.591 2087.23C687.567 2087.09 687.093 2084.93 686.911 2084C686.656 2082.7 686.459 2081.5 686.324 2080.35C686.012 2077.69 686.049 2075.53 686.625 2073.79C687.332 2071.65 688.889 2070.28 690.91 2070.04L691.145 2070.02L691.231 2070.01L691.408 2066.74Z'
                fill={shoesColor}
            />
            <path
                d='M430.625 829.315L437.974 833.283C466.216 848.528 497.282 861.203 532.831 872.485L535.734 873.401C562.211 881.699 589.532 888.838 627.186 897.655L628.568 897.978L636.77 899.885L645.336 901.859C760.457 929.773 880.187 929.408 993.501 900.381L995.956 899.833C1021.92 893.994 1041 888.157 1058.69 879.961C1071.67 873.945 1082.2 866.933 1089.81 858.598L1090.3 858.053L1094.09 853.801L1095.46 859.331C1097.37 867.119 1098.25 875.393 1098.33 884.821L1098.34 885.989L1098.25 887.195L1098.13 888.513C1097.75 892.88 1097.23 897.082 1096.29 903.581L1096.1 904.912L1094.52 915.577C1093.65 921.553 1093.16 925.39 1092.79 929.314L1092.66 930.749L1092.58 931.684L1092.5 933.353C1090.75 972.473 1084.12 1012.54 1072.81 1056.73L1072.29 1058.74L1071.5 1061.76L1070.47 1065.67C1062.55 1095.49 1054.13 1122.21 1038.34 1168.9L1036.24 1175.11L1025.48 1206.75C1023.84 1211.61 1022.47 1215.65 1021.24 1219.33L1020.71 1220.88L1015.97 1235.17L1013.15 1242.85L1010.58 1249.86C983.559 1324.01 966.127 1377.94 952.721 1432.32L951.79 1436.12C934.929 1505.57 926.803 1569.57 928.153 1632.02C929.418 1705.95 915.27 1782.12 887.361 1862.65L885.779 1867.19L881.613 1867.03C821.219 1864.83 761.864 1871.12 705.777 1886.01L703.969 1886.49L701.009 1887.29L700.267 1884.26C700.041 1883.12 696.189 1861.82 693.908 1851.91L693.767 1851.3L693.471 1850.07L693.001 1848.18C687.893 1828.06 681.718 1816.93 675.487 1817.96C666.003 1819.52 652.472 1833.87 637.865 1856.1C632.681 1863.99 627.631 1872.47 623.269 1880.45L622.272 1882.28L621.003 1884.67C618.322 1889.76 616.339 1893.9 616.125 1894.69L615.011 1899.91L611.138 1896.31C609.504 1894.79 606.892 1893.84 602.829 1893.15L601.855 1892.99L596.907 1892.31L595.981 1892.17L595.244 1892.04L592.352 1891.52C581.706 1889.63 570.711 1888.08 559.217 1886.83L556.425 1886.53L555.291 1885.88C537.514 1875.92 513.651 1873.61 492.856 1879.43L491.495 1879.82L489.331 1879.44C477.506 1877.44 465.804 1876.4 454.534 1876.42L453.127 1876.42L449.718 1876.45L450.386 1870.81C450.739 1867.8 451.085 1864.74 451.426 1861.64L451.992 1856.4C453.294 1844.18 454.358 1833.01 455.701 1817.45L456.79 1804.6L460.274 1762.45C460.606 1758.52 460.903 1755.06 461.208 1751.58L461.652 1746.56L461.958 1743.23C470.937 1646.62 487.861 1548.65 512.365 1448.97L513.422 1444.69L517.993 1433.91L520.07 1442.92C521.198 1447.82 521.591 1452.62 521.179 1457.59C521.044 1459.24 521.985 1460.1 523.711 1460.1C525.61 1460.1 527.047 1458.95 527.199 1457.1C528.023 1447.05 525.903 1438 520.65 1426.66L520.325 1425.96L519.747 1424.75L519.151 1423.52L517.302 1419.8L514.722 1414.65L507.371 1400.15C490.44 1366.67 482.836 1349.48 476.836 1328.47L476.463 1327.15L475.998 1325.48L471.944 1311L471.055 1307.76C469.215 1301.01 467.917 1295.82 466.776 1290.51L466.362 1288.56C457.514 1246.71 451.1 1205.73 443.036 1143.63L442.283 1137.81L440.828 1126.44L436.961 1095.94L437.874 1094.92C440.758 1091.7 442.34 1086.85 443.102 1080.15L443.195 1079.29C443.457 1076.88 443.871 1074.81 444.746 1071.41L445.112 1070.01L445.82 1067.38L446.455 1064.98C447.005 1062.83 447.382 1061.12 447.64 1059.5L447.757 1058.73L447.899 1058.39C450.118 1053.06 451.371 1046.97 452.137 1038.95L452.207 1038.19C452.323 1036.91 452.413 1035.8 452.511 1034.43L452.548 1033.9L453.137 1024.67L453.724 1016.56L454.087 1011.26C454.19 1009.73 454.292 1008.16 454.399 1006.49L454.618 1003.01L455.652 985.96L456.631 970.187L456.641 969.915L456.643 969.801L456.617 967.88L456.614 967.051L456.624 966.334C456.684 963.646 456.981 962.07 458.222 960.817C459.98 959.05 462.498 958.829 466.69 959.233L467.088 959.272C467.458 959.311 467.831 959.353 468.234 959.402L468.648 959.453L471.673 959.849L472.253 959.914L472.557 959.94L472.966 959.966C480.657 960.705 490.015 959.407 496.627 956.319C504.123 952.818 507.486 947.601 505.997 940.311L505.948 940.083L505.893 939.911C504.825 936.755 502.697 934.297 498.446 930.868L497.637 930.223L495.184 928.308L494.476 927.748L490.813 924.803C489.598 923.828 488.37 922.847 487.078 921.816L486.095 921.033L458.862 899.457L453.677 895.326L450.731 892.966L446.137 889.263L445.696 888.877C444.974 888.239 444.305 887.608 443.457 886.767L442.639 885.948L440.294 883.563C437.125 880.367 435.4 878.891 433.17 877.614L430.859 876.323L431.836 872.918L432.233 871.499C436.305 856.725 437.226 845.964 433.93 837.456L433.77 837.052L430.625 829.315Z'
                fill={pantsColor}
            />
            <path
                d='M808.774 20.5107C808.734 19.9507 807.913 19.7807 807.763 20.3707C805.413 29.3407 803.683 37.8107 804.373 47.2107C805.76 66.5327 812.247 85.5007 823.684 101.191C823.896 101.482 824.112 101.778 824.331 102.079C829.764 109.539 837.268 119.843 847.303 119.651C851.413 119.571 853.473 116.021 852.903 112.291C851.559 105.71 846.555 100.737 841.59 95.8022C838.349 92.5815 835.124 89.3769 832.944 85.7517C851.933 90.0707 872.963 96.7007 888.183 109.181C913.809 129.098 915.378 169.174 894.912 193.431L894.435 194.005C882.588 208.084 864.998 215.634 847.593 220.281C759.057 243.637 615.803 218.499 583.422 120.672C582.011 106.147 595.936 98.9058 607.597 92.8417C609.015 92.1041 610.4 91.3839 611.72 90.6701L612.833 90.0607C618.573 88.4597 624.303 86.8252 630.033 85.1909C639.824 82.3981 649.615 79.6056 659.453 76.9807C655.944 83.2307 651.623 88.9607 646.473 94.3207C642.593 98.3507 638.133 106.332 644.673 110.201C651.567 114.27 658.249 106.505 662.11 101.427L662.793 100.521C675.075 84.5017 680.904 63.8327 678.383 43.7507L678.343 43.4432C677.692 38.4475 677.005 33.1701 674.543 28.7107C674.141 28.071 673.664 27.5339 673.189 26.9991C672.469 26.1879 671.753 25.3818 671.313 24.2307C671.073 23.6207 670.173 23.8407 670.313 24.5017C670.657 26.1176 670.359 27.9986 670.063 29.8698C669.86 31.1472 669.659 32.4201 669.663 33.6007C669.665 34.5023 669.68 35.4013 669.694 36.2992C669.73 38.5392 669.765 40.772 669.623 43.0207C668.973 53.9277 665.757 64.8867 660.783 74.5207C626.313 76.7167 592.152 79.6037 558.523 88.1107C392.416 132.563 304.519 308.054 272.062 464.819C239.603 624.824 284.102 787.099 334.103 938.731C335.223 942.101 337.523 944.121 340.163 945.021C338.375 974.359 342.295 1003.54 346.211 1032.68C347.791 1044.44 349.37 1056.19 350.573 1067.94C350.768 1069.81 350.908 1071.72 351.048 1073.64C351.469 1079.39 351.899 1085.27 353.863 1090.59C359.734 1108.2 379.765 1107.22 384.273 1089.34C386.593 1097.89 391.123 1105.62 401.473 1105.87C414.033 1106.17 415.67 1094.91 415.915 1084.86L415.944 1083.29C419.216 1089.49 422.946 1096.22 428.593 1100.89C429.06 1104.57 429.526 1108.25 429.992 1111.93C437.894 1174.3 445.809 1236.78 459.233 1298.26C460.158 1304.41 462.065 1310.22 464.374 1315.95C465.48 1319.68 466.506 1323.42 467.531 1327.14C469.79 1335.36 472.04 1343.54 475.123 1351.61L475.885 1353.65C482.047 1369.94 489.99 1385.58 497.913 1401.18C503.888 1412.94 509.852 1424.68 515.033 1436.66C461.446 1559 448.605 1692.77 435.949 1824.62C434.329 1841.49 432.712 1858.34 431.013 1875.12C429.766 1875.42 428.314 1875.62 426.796 1875.83C421.098 1876.62 414.474 1877.55 414.343 1884.1C414.493 1885.99 414.693 1887.89 414.951 1889.79L417.172 1889.61C426.152 1888.91 434.38 1888.94 442.195 1889.79C447.263 1890.32 452.062 1891.14 456.639 1892.29C457.372 1892.48 458.036 1892.78 458.613 1893.18L458.855 1893.36L458.984 1893.47L460.141 1893.71L461.733 1894.07C461.97 1894.13 462.218 1894.18 462.481 1894.25L465.368 1894.93C466.764 1895.26 467.82 1895.5 468.781 1895.7L469.978 1895.93L471.681 1895.82C478.106 1895.44 484.052 1895.36 494.605 1895.43L507.62 1895.52L510.009 1895.52L511.819 1895.51C515.968 1895.48 519.605 1895.4 523.108 1895.24C526.812 1895.07 529.148 1897.96 528.878 1901.33C528.629 1904.44 526.278 1907.06 522.921 1907.21L521.607 1907.27L519.504 1907.35C515.725 1907.47 511.698 1907.51 506.905 1907.5L500.935 1907.46L493.662 1907.4L490.081 1907.38C488.841 1907.38 487.721 1907.38 486.642 1907.39L484.015 1907.41L483.929 1907.47C483.434 1907.8 482.879 1908.05 482.277 1908.21L481.972 1908.29L481.698 1908.34L481.592 1908.36L480.542 1908.49C478.525 1908.71 476.938 1908.67 473.973 1908.42L472.48 1908.29C469.785 1908.05 468.242 1908.01 466.683 1908.21L465.887 1908.32L465.345 1908.2C462.288 1907.51 459.559 1907.23 454.078 1906.97L451.073 1906.83C448.317 1906.69 446.657 1906.58 444.906 1906.39L444.146 1906.3L438.078 1905.58L439.392 1904.24L439.152 1904.22C432.9 1903.65 426.116 1903.91 418.444 1904.88C420.831 1911.78 424.365 1918.22 429.483 1923.55C429.573 1925.35 429.683 1927.14 429.823 1928.93C411.785 1992.28 399.259 2057.66 391.613 2123.06C382.78 2132.93 382.991 2147.97 384.362 2160.76L384.523 2162.21C385.553 2169.92 389.783 2174.87 395.983 2179.22C439.88 2209.29 495.193 2221.9 547.923 2216.89C583.531 2212.54 635.587 2203.47 651.784 2167.11C657.644 2152.11 653.816 2134.8 649.303 2119.82L648.773 2118.08C648.146 2116.04 646.957 2114.63 645.508 2113.75C643.76 2108 637.73 2107.16 632.231 2106.38C630.649 2106.16 629.111 2105.94 627.732 2105.62C618.29 2081.87 609.785 2057.76 602.163 2033.37C600.925 2028.87 599.5 2024.38 598.071 2019.88C593.887 2006.69 589.67 1993.4 590.012 1979.53C590.873 1965.25 592.543 1950.23 596.913 1936.57C599.79 1927.7 605.375 1920.98 611.119 1914.06C613.374 1911.34 615.653 1908.6 617.803 1905.68C619.023 1906.03 620.323 1906.02 621.603 1905.48C629.84 1902.66 634.009 1900.32 639.093 1893.06C651.885 1877.52 663.269 1860.81 672.703 1843.02C676.792 1866.46 682.1 1889.71 688.453 1912.64C690.713 1920.77 693.564 1929.04 699.673 1934.8C702.719 1954.69 696.988 1968.75 687.814 1985.58L687.153 1986.79C674.684 2011.39 671.767 2041.91 685.153 2066.72C675.407 2068.54 674.834 2080.33 674.861 2088.88L674.883 2091.9L674.88 2092.19C674.78 2102.22 674.672 2113.18 676.633 2123.03C679.85 2139.24 696.161 2142.72 710.679 2145.82C713.825 2146.5 716.887 2147.15 719.713 2147.91C729.963 2150.41 740.213 2152.91 750.463 2155.45C763.52 2159.3 779.029 2161.01 787.083 2147.44C792.842 2150.14 799.356 2151.43 805.663 2152.37L807.173 2152.59C819.843 2154.41 832.573 2155.91 845.314 2157.14C923.317 2164.66 1002.39 2161.22 1079.45 2146.94C1086.45 2145.64 1094.92 2143.77 1102.6 2140.6C1106.66 2139.89 1110.21 2138.03 1113.77 2136.16C1115.84 2135.07 1117.92 2133.98 1120.1 2133.12C1121.23 2132.63 1122.46 2132.16 1123.72 2131.69C1127.52 2130.25 1131.63 2128.69 1134.22 2125.9C1137.15 2122.75 1137.25 2118.63 1136.24 2114.65L1136.14 2114.26C1134.86 2109.28 1133.29 2103.15 1128.88 2100.11C1125.94 2071.02 1094.66 2065.2 1070.51 2062.22L1068.29 2061.95L1031.62 2056.1C1028.17 2055.55 1024.63 2055.05 1021.05 2054.54C1002.34 2051.9 982.505 2049.1 967.213 2038.01C958.766 2032.22 955.681 2025.23 952.914 2018.96C949.867 2012.05 947.205 2006.02 938.194 2003.42C938.826 1995.72 934.207 1989.09 926.863 1986.85C926.401 1986.69 925.864 1986.56 925.308 1986.43C924.116 1986.15 922.837 1985.85 922.033 1985.1C921.382 1984.49 920.857 1983.21 920.339 1981.94C919.959 1981.01 919.582 1980.09 919.163 1979.45C914.632 1972.6 908.042 1967.74 901.147 1963.31L899.963 1962.55C901.777 1958.77 900.334 1955.27 898.896 1951.78C898.271 1950.27 897.648 1948.75 897.293 1947.22C896.379 1940.24 897.344 1933.28 898.31 1926.31C898.942 1921.76 899.574 1917.2 899.683 1912.63C899.959 1905.87 899.723 1899.27 898.692 1892.72L898.686 1892.72L898.345 1892.86L897.33 1893.27L895.507 1893.54C879.021 1896 862.961 1900.28 839.641 1907.87L836.511 1908.89L833.364 1909.93L827.222 1911.97C823.845 1913.1 820.794 1911.19 819.872 1908.06C819.014 1905.15 820.229 1901.99 823.249 1900.68L823.491 1900.58L823.734 1900.49L828.334 1898.96L828.485 1898.78C829.093 1898.08 829.872 1897.54 830.782 1897.19L831.059 1897.09L831.32 1897.01L835.411 1895.8L849.694 1891.57L854.719 1890.1C874.943 1884.23 888.581 1880.78 902.75 1878.24L902.906 1878.22C903.309 1877.65 903.641 1877.04 903.895 1876.4L903.689 1869.11L904.368 1869.93C922.383 1815.69 937.782 1760.23 943.133 1703.14C945.542 1677.46 945.942 1651.69 946.341 1625.91C946.698 1602.9 947.055 1579.88 948.843 1556.92C952.413 1511.17 961.493 1466.04 973.314 1421.75C987.13 1369.51 1005.27 1318.13 1023.41 1266.73C1060.13 1162.66 1096.89 1058.53 1097.89 947.051C1097.89 946.219 1097.89 945.388 1097.89 944.558C1097.9 934.471 1097.9 924.501 1098.63 914.401C1098.77 912.486 1098.91 910.565 1099.05 908.64C1100.29 891.856 1101.56 874.748 1097.03 858.371C1100.01 861.958 1106.36 862.513 1108.76 857.901C1108.93 857.583 1109.09 857.266 1109.26 856.948C1110.28 855.004 1111.31 853.043 1111.86 850.921C1112.82 844.55 1111.24 838.184 1109.69 831.903C1109.13 829.654 1108.58 827.415 1108.14 825.191C1111.12 820.742 1108.88 815.481 1105.04 813.071C1090.75 761.124 1073.81 728.819 1058.72 700.022C1033.31 651.541 1013.12 613.007 1019.48 507.441C1047.09 558.812 1096.57 602.153 1155.78 609.881C1156.46 609.968 1157.15 610.061 1157.85 610.155C1165.11 611.133 1173.42 612.25 1180.07 609.231C1256.32 616.047 1411.78 452.913 1451.33 389.502C1455.6 389.162 1458.36 385.88 1459.21 382.151C1486.09 383.364 1512.9 363.776 1516.55 336.561C1535.54 345.384 1558.47 333.761 1560.6 312.591C1561.33 305.701 1559.03 299.213 1556.75 292.783C1555.84 290.197 1554.92 287.62 1554.21 285.031C1554.02 284.351 1553.41 284.111 1552.85 284.231C1558.21 270.947 1549.27 259.158 1541.04 249.291L1538.92 246.761C1537.97 245.458 1537.24 243.92 1536.51 242.383C1535.52 240.308 1534.53 238.234 1533.01 236.742C1532.8 236.541 1532.51 236.611 1532.35 236.832C1529.75 240.789 1531.97 247.011 1533.48 251.229C1533.62 251.647 1533.77 252.045 1533.9 252.419L1534.13 253.121C1542.76 272.731 1543.15 281.083 1520.06 286.341C1498.81 279.249 1498.42 322.42 1536.88 300.401C1542.64 297.431 1548.02 293.13 1551.26 287.521C1550.46 291.17 1550.43 294.966 1550.4 298.72C1550.34 306.413 1550.29 313.928 1543.53 319.641C1539.68 322.891 1535.01 324.662 1529.94 323.981C1526.11 323.471 1523.56 321.622 1520.86 319.668C1519.54 318.709 1518.18 317.724 1516.62 316.861C1509.59 312.961 1502.86 320.441 1505.84 327.221C1502.21 330.177 1499.66 334.052 1497.11 337.939C1495.05 341.088 1492.98 344.246 1490.31 346.931C1483.5 353.971 1473.82 358.87 1464.17 359.391C1456.7 359.152 1446.37 359.497 1445.23 369.051C1413.31 360.37 1398.23 328.037 1386.29 299.647L1384.43 295.201C1394.72 277.268 1400.77 257.379 1406.76 237.651C1407.46 235.348 1408.16 233.047 1408.86 230.752L1409.64 228.221C1416.16 197.72 1425.56 197.849 1451.49 205.784L1453.94 206.542C1463.44 209.031 1478.05 213.38 1473.83 226.332C1472.29 231.051 1468.57 234.091 1463.53 234.13L1463.15 234.14C1459.23 234.173 1455.8 232.103 1453.03 229.471C1452.22 228.88 1451.35 228.561 1450.49 228.244C1449.61 227.923 1448.74 227.605 1447.96 227.011C1443.19 223.361 1438.44 229.371 1439.08 233.832C1438.93 240 1442.02 243.35 1446.93 246.334L1447.53 246.691C1449.43 260.432 1447.74 274.255 1444.95 287.752C1444.82 288.337 1444.68 288.915 1444.54 289.489C1443.14 295.422 1441.86 300.845 1443.13 307.082C1444.44 313.521 1452.81 314.811 1457.12 310.771C1471.46 295.228 1464.5 267.435 1456.41 250.231C1485.39 257.192 1502.75 219.803 1481.13 200.92C1472.97 194.32 1462.87 191.821 1452.84 189.339C1449.95 188.624 1447.06 187.91 1444.23 187.101C1448.72 180.792 1453.08 174.349 1457.45 167.896C1472.71 145.347 1488.06 122.674 1509.14 105.191C1509.46 104.918 1509.88 104.528 1510.37 104.073C1512.57 102.036 1516.18 98.687 1518.11 98.6707C1519.91 102.457 1516.42 111.674 1513.91 118.336C1513.2 120.195 1512.58 121.855 1512.16 123.143L1511.99 123.681C1506.38 140.198 1499.86 156.389 1492.58 172.251C1490.77 176.191 1488.91 180.111 1487.01 184.011C1486.67 184.709 1486.31 185.408 1485.95 186.11C1484.12 189.676 1482.24 193.332 1482.7 197.401C1483.09 201.116 1486.83 204.023 1490.46 201.861C1495.46 198.712 1498.35 191.671 1500.98 185.23C1502.05 182.61 1503.09 180.089 1504.2 177.971C1507.99 169.211 1511.61 160.371 1514.99 151.441C1518.5 142.162 1521.82 132.811 1524.9 123.38L1525.11 122.766C1525.51 121.558 1525.94 120.333 1526.37 119.094C1528.52 112.965 1530.78 106.494 1530.51 100.121C1530.23 93.6617 1526.63 87.3107 1519.62 86.7307C1512.42 86.1275 1505.66 92.3224 1500.32 97.2132C1499.94 97.5649 1499.56 97.9099 1499.19 98.2452L1497.53 99.7392C1472.26 122.682 1455.39 153.186 1442.74 184.574L1441.93 186.601C1410.3 179.792 1399.81 198.388 1393.77 225.901C1393.34 227.525 1392.9 229.151 1392.46 230.779C1387.1 250.561 1381.67 270.625 1380.3 291.051C1376.5 289.351 1371.36 290.111 1368.62 293.011C1345.39 317.571 1320.98 341.011 1295.42 363.13L1292.24 365.892C1274.02 381.588 1255.02 396.27 1236.01 410.953C1219.47 423.731 1202.93 436.511 1186.9 449.961C1172.92 440.554 1162.73 426.516 1153.55 412.571L1152.05 410.291C1141.62 394.281 1132.13 377.721 1123.34 360.761C1112.42 339.439 1102.36 317.627 1092.29 295.811C1069.42 246.266 1046.55 196.704 1013.65 152.832C973.735 96.7407 947.982 74.5407 877.223 70.6237C862.178 69.0247 847.038 67.2137 832.533 62.7307L832.034 62.5799C831.492 62.4202 830.874 62.2487 830.211 62.0645C826.592 61.0599 821.626 59.6813 820.444 57.8317C819.403 56.2007 817.973 55.3607 816.484 55.1207C812.323 43.9407 809.593 31.9117 808.774 20.5107ZM628.833 2149.11C635.88 2149.38 638.781 2142.73 638.513 2136.81C644.43 2156.07 637.092 2171.48 619.753 2181.23C559.347 2213.31 482.064 2208.59 421.933 2178.08C416.163 2175.1 410.523 2171.87 405.053 2168.38C404.86 2168.26 404.666 2168.13 404.472 2168.01C402.201 2166.57 399.9 2165.11 398.694 2162.61C396.556 2156.34 396.179 2150.14 395.959 2143.42L395.813 2138.68C399.578 2143.76 405.394 2147.55 410.844 2151.1C411.603 2151.6 412.354 2152.09 413.092 2152.57L414.213 2153.32C426.203 2161.35 439.194 2167.72 452.663 2172.83C502.543 2191.37 561.787 2190.24 608.893 2164.41C609.326 2164.15 609.761 2163.89 610.198 2163.63C616.946 2159.59 624.018 2155.36 628.833 2149.11ZM693.083 2073.2C693.843 2073.42 694.583 2072.81 694.623 2072.07C760.142 2116.04 837.774 2141.34 917.113 2134.42C961.963 2132.32 1006.68 2127.39 1051.02 2120.41C1058.76 2119.18 1066.49 2117.88 1074.21 2116.5C1076.09 2116.09 1078.02 2115.78 1079.97 2115.47C1085.45 2114.6 1091 2113.73 1095.36 2110.36L1095.37 2110.34C1101.23 2108.89 1107.06 2107.4 1112.9 2105.87C1116.41 2108.17 1116.49 2114.28 1113.82 2117.19C1113.64 2117.62 1113.43 2118.05 1113.19 2118.48C1113.69 2121.34 1100.04 2127.97 1097.35 2128.2C1090.31 2131.58 1081.55 2133.35 1075.45 2134.46L1070.9 2135.27C1000.99 2147.59 929.514 2150.85 858.753 2145.2C845.303 2144.12 831.863 2142.72 818.484 2140.99L817.961 2140.93C816.939 2140.8 815.906 2140.67 814.869 2140.55C805.296 2139.41 795.276 2138.22 788.043 2131.33L787.885 2131.19C783.724 2127.49 775.649 2130.05 776.093 2136.28L776.107 2136.58C776.309 2145.2 757.715 2139.5 750.555 2137.31C749.815 2137.08 749.198 2136.89 748.735 2136.76L744.109 2135.49C740.265 2134.42 736.426 2133.33 732.588 2132.24C724.864 2130.05 717.139 2127.86 709.373 2125.86L708.876 2125.77C695.36 2123.16 694.002 2122.9 693.809 2109.09L693.794 2107.75C693.024 2100.72 692.253 2093.72 691.043 2086.76C691 2086.51 690.914 2086.12 690.804 2085.62C689.966 2081.79 687.749 2071.65 693.083 2073.2ZM434.373 874.871C437.873 862.781 441.283 847.641 436.523 835.931C498.474 869.374 567.762 887.015 636.07 902.816L644.603 904.783C759.384 932.614 879.637 932.647 994.123 903.318C1016.57 898.351 1038.99 892.391 1059.92 882.691C1072.39 876.912 1085.13 869.061 1094.03 858.291C1097.48 875.292 1094.93 892.351 1092.38 909.356C1091.27 916.754 1090.16 924.142 1089.55 931.511C1085.9 1019.94 1057.21 1104.17 1028.82 1187.55C1023.52 1203.1 1018.24 1218.63 1013.12 1234.14C966.027 1362.16 922.142 1493.99 925.127 1632.08C926.486 1711.47 909.76 1789.44 883.653 1864.11C822.973 1861.72 761.867 1867.8 703.163 1883.6C697.146 1859.17 692.549 1834.44 688.683 1809.58C731.739 1709.54 754.387 1602.87 776.945 1496.61C781.852 1473.5 786.755 1450.41 791.863 1427.41C819.829 1297.13 843.009 1164.67 838.723 1030.93C838.713 1030.06 837.503 1030.1 837.413 1030.93C816.367 1211.48 781.305 1389.97 740.491 1567C722.713 1645.81 702.683 1724.68 670.403 1798.97C668.533 1800.56 667.343 1802.82 667.453 1805.66C659.494 1823.75 650.091 1841.21 638.743 1857.41C634.623 1863.35 630.273 1869.12 625.653 1874.7C624.962 1875.51 624.258 1876.31 623.554 1877.11C619.096 1882.19 614.607 1887.3 613.153 1894.12C609.818 1891.03 604.264 1890.28 599.378 1889.63C597.964 1889.44 596.605 1889.26 595.373 1889.03L592.85 1888.57C581.075 1886.48 569.235 1884.87 557.343 1883.62C538.08 1872.56 512.627 1870.57 491.303 1876.75C478.893 1874.57 465.944 1873.31 453.073 1873.43C456.545 1844.22 458.936 1815.01 461.331 1785.77C462.393 1772.8 463.455 1759.82 464.613 1746.84C473.956 1644.25 492.051 1542.78 516.944 1442.86C518.063 1447.41 518.593 1452.17 518.163 1457.35C517.533 1465.05 529.533 1465 530.163 1457.35C531.184 1444.89 527.693 1434.39 522.417 1423.44L521.813 1422.2C518.752 1416 515.612 1409.82 512.47 1403.63C499.526 1378.16 486.549 1352.63 478.944 1324.98C478.195 1322.26 477.433 1319.56 476.672 1316.86C474.098 1307.72 471.536 1298.62 469.553 1289.28C458.094 1235.37 450.738 1180.73 443.778 1126.08L440.083 1096.93C444.083 1092.46 445.493 1085.88 446.123 1079.89C446.494 1076.28 447.484 1072.62 448.476 1068.96C449.326 1065.82 450.177 1062.68 450.643 1059.55C454.539 1050.19 455.205 1039.34 455.833 1029.14C455.959 1027.08 456.084 1025.06 456.233 1023.07L456.66 1017.21C457.311 1007.99 457.864 998.753 458.418 989.52C458.802 983.113 459.186 976.705 459.603 970.301C459.625 969.946 459.615 969.385 459.604 968.725C459.568 966.704 459.516 963.755 460.323 962.941C461.704 961.552 466.339 962.176 469.744 962.635C470.923 962.793 471.955 962.932 472.653 962.961C487.269 964.365 513.226 958.999 508.823 939.31C507.095 933.805 502.547 930.267 498.164 926.857C497.78 926.558 497.397 926.26 497.018 925.963L496.333 925.421C488.615 919.2 480.838 913.052 473.061 906.904C464.705 900.298 456.35 893.694 448.073 887.002C446.458 885.606 444.954 884.068 443.45 882.529C440.663 879.678 437.874 876.824 434.373 874.871ZM353.363 939.082C382.978 933.024 414.055 916.335 428.933 889.221C430.505 890.608 431.896 892.223 433.284 893.834C434.517 895.266 435.748 896.695 437.103 897.961C440.344 901.003 443.814 903.832 447.269 906.65C448.665 907.787 450.058 908.923 451.433 910.071C456.13 914.052 460.833 917.955 465.526 921.849C474.22 929.064 482.879 936.25 491.403 943.851C485.131 947.365 478.206 947.018 471.269 946.67C465.796 946.395 460.316 946.121 455.143 947.741C444.422 951.727 443.987 962.858 443.6 972.745C443.553 973.943 443.507 975.124 443.444 976.271L443.031 983.571C442.903 985.806 442.774 988.041 442.645 990.276C442.072 1000.21 441.499 1010.14 441.023 1020.08L440.972 1021.09C440.877 1022.94 440.758 1024.83 440.637 1026.74C440.14 1034.63 439.615 1042.96 440.563 1050.86C436.539 1060.1 434.363 1069.73 433.723 1079.82C431.873 1079.32 429.893 1079.56 428.473 1080.53C420.885 1066.99 418.671 1050.67 417.047 1035.28L416.694 1031.87C415.873 1023.82 404.053 1023.45 403.873 1031.87C403.796 1035.69 403.726 1039.51 403.659 1043.32L403.273 1066.23L402.962 1084.03C402.963 1084.49 403.01 1085.1 403.062 1085.79C403.287 1088.78 403.62 1093.19 400.883 1092.77L400.697 1092.75C396.574 1092.12 395.352 1080.95 394.498 1073.13C394.223 1070.62 393.986 1068.45 393.702 1067.1L393.623 1066.74L388.823 1032.47C387.733 1024.72 376.493 1027.36 375.953 1034.21L375.635 1037.9C374.392 1052.33 373.15 1066.77 372.084 1081.21C372.031 1081.6 371.986 1082.03 371.937 1082.49C371.644 1085.25 371.247 1089 368.713 1090.01C366.537 1088.05 365.831 1084.98 365.335 1082.12L365.053 1080.43C362.352 1055.59 358.348 1030.92 354.344 1006.25C351.061 986.012 347.777 965.78 345.213 945.451C348.903 944.921 352.283 942.621 353.363 939.082ZM443.269 479.276L447.273 458.621C448.487 475.195 452.457 491.607 456.423 508.005C463.082 535.534 469.732 563.022 463.314 591.17C458.487 608.6 451.002 625.081 443.516 641.564C435.473 659.272 427.43 676.982 422.683 695.871C420.902 658.206 421.997 620.519 426.203 583.041C430.218 548.171 436.619 513.704 443.269 479.276ZM1499.04 195.661C1498.29 195.354 1497.99 196.481 1498.54 196.86C1512.13 206.63 1519.68 222.081 1519.14 238.79L1519.13 239.155C1518.73 251.229 1513.37 267.144 1500.01 269.591C1500.28 266.7 1497.38 264.48 1494.55 265.12C1492.56 265.581 1490.58 266.36 1488.77 267.341C1482.31 264.502 1475.23 260.789 1470.73 255.241L1470.68 255.174C1470.35 254.849 1469.77 255.084 1469.87 255.6L1469.93 255.978C1471.56 266.951 1478.48 278.729 1490.24 280.721C1499.92 284.65 1510.55 280.32 1517.64 272.831C1539.01 249.607 1527.42 207.436 1499.04 195.661Z'
                fill={outlineColor}
            />
        </>
    );
};

PointingFingerColorPants.config = PointingFingerColorPantsConfig;
export default PointingFingerColorPants;
