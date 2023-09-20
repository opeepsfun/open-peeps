import React from "react";

export const OneLegColorPantsConfig = {
    name: "One Leg Color Pants",
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
    width: 1534,
    height: 1934,
    viewBox: "0 0 1534 1934"
};

const OneLegColorPants = ({ skinColor = "#D08B5B", pantsColor = "#9DDADB", shoesColor = "white", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M822.162 907.317C824.401 930.677 819.823 952.985 808.918 971.844L805.37 977.98L812.123 980.342C824.413 984.64 838.08 986.73 853.906 986.73C870.193 986.73 887.13 984.462 900.739 982.638L909.452 981.472L905.172 973.904C901.73 967.821 901.093 960.45 900.418 952.646C900.236 950.549 900.049 948.382 899.803 946.237C886.908 830.977 870.608 714.212 854.845 601.292C850.696 571.579 846.407 540.853 842.246 510.629L830.31 511.089C827.099 567.032 823.983 623.922 820.97 678.938C819.645 703.131 818.319 727.324 816.983 751.514C812.22 812.671 813.865 862.191 822.162 907.317ZM827.033 1598.49C809.504 1598.49 791.941 1596.66 774.834 1593.06C721.301 1581.83 672.666 1555.31 631.282 1531.35C629.169 1530.15 627.025 1528.95 624.824 1527.72C608.622 1518.65 588.459 1507.38 575.823 1493.62C561.961 1478.52 559.575 1463.48 568.316 1446.28L569.699 1443.56L568.254 1440.87C559.203 1424.03 559.876 1403.18 569.89 1390.19L578.306 1379.27L564.469 1380.74C550.517 1382.22 536.455 1384.22 522.855 1386.16C507.766 1388.32 492.161 1390.54 476.793 1392.03L472.522 1392.45L471.54 1396.56C470.993 1398.85 470.318 1400.24 465.577 1400.24C461.466 1400.24 455.941 1399.04 450.094 1397.76C442.837 1396.18 434.611 1394.39 426.679 1394.39C423.19 1394.39 420.052 1394.72 417.084 1395.41L415.357 1395.81L414.128 1397.07C413.342 1397.87 412.004 1398.37 410.637 1398.37C409.603 1398.37 408.644 1398.08 408.003 1397.58L406.065 1396.07L403.606 1396.34C360.763 1401.04 323.82 1409.3 290.67 1421.57L290.52 1421.63L289.801 1421.94C277.814 1427.11 265.421 1432.46 254.134 1432.46C245.883 1432.46 239.183 1429.65 233.047 1423.63L231.313 1421.93L228.867 1421.9C204.049 1421.67 192.709 1392.73 191.141 1373.34L190.944 1370.9L189.052 1369.31C145.8 1333.01 120.266 1283.16 110.988 1216.91C102.538 1156.56 109.026 1092.93 116.487 1038.65C133.746 897.97 151.747 771.86 197.505 652.253L199.643 646.662L193.946 644.615C174.183 637.513 159.079 629.041 147.77 618.712L146.987 617.995L146.001 617.59C129.793 610.931 121.855 586.35 119.808 578.976L119.644 578.381L119.358 577.833C116.051 571.489 115.288 562.665 117.266 553.622L117.478 552.647L117.355 551.657C116.287 543.071 119.832 534.095 123.585 524.591C125.3 520.249 127.072 515.761 128.367 511.292C132.819 498.518 137.266 485.518 141.568 472.944C151.22 444.734 161.199 415.563 171.83 387.186L173.284 383.305L170.081 380.631C164.613 376.063 166.439 370.687 174.324 357.832C176.187 354.796 177.949 351.923 179.289 349.092C189.396 331.628 200.228 314.863 211.49 299.257L211.722 298.937L211.907 298.59C269.696 190.662 372.203 131.224 500.544 131.224L503.16 131.229L504.606 130.359C528.66 115.894 545.831 91.0748 557.1 54.4845L557.46 53.318L557.321 52.1062C556.935 48.7339 556.512 44.3123 556.657 40.0218C557.024 29.156 561.283 19.4597 568.341 13.4185C581.732 1.95665 602.061 0.99707 621.736 0.99707L624.561 1.002C649.716 1.07392 667.475 5.4413 680.451 14.7485C695.527 25.562 703.859 43.0178 705.924 68.1128C706.541 75.6219 706.52 83.4011 706.501 90.924L706.496 93.0235L706.749 93.857C708.557 99.8214 710.675 105.552 713.043 110.892L715.479 116.386L721.019 113.909C724.602 112.308 729.144 111.484 734.908 111.392C736.57 111.353 738.191 111.335 739.826 111.335C753.209 111.335 767.525 112.557 781.371 113.738C791.803 114.629 802.591 115.55 813.033 115.959L813.176 115.965C813.176 115.965 814.618 115.956 815.265 115.956C840.644 115.956 859.042 119.947 873.163 128.517C888.368 137.744 899.301 152.552 907.568 175.12C951.91 304.48 970.14 443.817 986.22 566.747C995.341 631.034 998.115 696.938 1000.8 760.671C1003.63 827.942 1006.56 897.504 1016.93 965.503L1017.75 970.878L1023.25 970.522C1047.48 968.959 1073.67 965.59 1101.39 962.024C1143.51 956.606 1187.07 951.004 1229.17 951.004C1288.04 951.004 1332.68 962.588 1365.61 986.412C1388.56 1008.05 1400.44 1037.34 1399.95 1071.14C1399.26 1118.9 1374 1171.71 1335.59 1205.67L1335.45 1205.8C1286.9 1251.66 1198.29 1291.44 1072.06 1324.03C955.992 1354 835.932 1370.28 774.695 1377.32L759.539 1379.07L771.841 1387.96C776.82 1391.56 781.363 1394.73 785.73 1397.65L788.547 1399.54L791.633 1398.12C800.433 1394.08 806.022 1393.24 809.163 1393.24C811.95 1393.24 815.312 1393.84 815.497 1396.73C815.618 1398.62 814.274 1401.42 811.437 1401.77L796.373 1403.65L808.673 1412.43C816.889 1418.29 829.147 1425.35 843.342 1433.53C889.781 1460.28 959.961 1500.72 947.891 1536.23L947.099 1538.56L948.221 1540.76C951.464 1547.12 951.741 1553.02 949.065 1558.8C943.335 1571.2 925.41 1580.6 910.187 1584.43L909.926 1584.49L909.671 1584.58C883.183 1593.81 855.379 1598.49 827.033 1598.49Z'
                fill={skinColor}
            />
            <path
                d='M707.456 1331.82C707.926 1331.09 708.346 1330.07 708.575 1329.16C711.787 1333.73 763.178 1378.77 814 1417C861.204 1452.51 915.345 1479.33 936.364 1508.93C944.352 1520.18 948.412 1553.15 946.876 1558.69C943.442 1563.05 905.655 1582.6 905.655 1582.6C897.116 1584.91 828.586 1603.49 798.145 1597.17C786.946 1595.46 706.2 1569.62 696 1565L609.231 1514.65C607.335 1513.82 605.449 1512.99 603.575 1512.17L601.038 1511.16C581.687 1503.41 557 1487 562.055 1463.34C568 1439 557.334 1433.68 559.776 1417.64C561.89 1403.76 566.503 1389.63 573.876 1376.16C602.356 1408.19 638.506 1405.39 656.716 1365.58L657.133 1364.77L657.544 1363.95C663.498 1352.07 669.128 1336.98 683.226 1332.31C691.006 1327.05 700.956 1325.96 707.456 1331.82ZM447.201 1242.48L448.964 1246.53C457.531 1266.13 475.72 1306.85 482.946 1322.92C481.336 1319.95 479.496 1317.09 477.426 1314.39C471.376 1306.51 478.473 1330.33 478.529 1355.2C478.58 1378.27 471.456 1402.24 469.815 1402.63C467.796 1403.13 439.617 1389.27 413.201 1393.48C391.874 1396.87 359.537 1400.7 327.412 1409.47C301.299 1416.6 275.327 1428.69 255.52 1432.8C239.428 1436.14 236.283 1418.7 225.769 1419.78C216.296 1420.75 214.771 1420.52 212.426 1418.56C199.276 1407.69 186.846 1364.71 188.086 1348.57C199 1263 367.471 1235.42 447.201 1242.48Z'
                fill={shoesColor}
            />
            <path
                d='M281.582 673.264L287.058 674.768L529.634 742.647C531.184 743.661 532.339 744.397 533.448 745.071L534.237 745.545L538.827 748.266L537.76 753.496C535.359 765.259 535.002 777.36 536.092 794.255L536.154 795.198L536.287 797.116L536.48 799.729L536.549 800.62L537.869 816.725L538.117 819.956C538.311 822.567 538.454 824.751 538.58 827.033L538.609 827.561L538.798 831.258L538.869 832.844C539.525 848.952 538.389 864.685 535.445 887.441L535.299 888.566L534.88 891.723L534.591 894.485L533.374 905.776L532.95 909.812C530.198 936.424 528.837 957.315 529.188 976.786L529.206 977.758C529.743 1003.3 533.665 1020.62 540.186 1026.57L540.384 1026.75L540.556 1026.89L540.596 1026.9C541.238 1026.93 542.288 1026.53 544.326 1025.3L545.18 1024.77C545.707 1024.43 546.707 1023.8 547.172 1023.52L547.683 1023.21C548.63 1022.64 549.453 1022.21 550.315 1021.83C551.653 1021.26 553.016 1020.88 554.367 1020.77L554.772 1020.75L554.831 1020.74L555.203 1020.42C556.427 1019.32 557.594 1018.1 558.66 1016.81L559.11 1016.26L559.5 1015.75L562.124 1012.3L563.906 1009.21C565.273 1006.85 566.512 1004.33 567.624 1001.67L568.035 1000.66L568.395 999.75L583.956 959.459L582.889 1002.64C582.527 1017.3 588.011 1024.9 594.763 1024.98C601.868 1025.06 609.143 1017.25 611.245 1003.38L611.316 1002.9L626.195 1004.78C625.221 1013.48 628.325 1027.22 633.301 1034.96C635.461 1038.32 637.494 1039.91 638.948 1040.03C640.706 1040.18 643.48 1038.53 647.198 1033.75L647.194 1033.75L647.118 1033.85L647.278 1033.62C650.514 1028.99 652.312 1022.78 653.256 1013.92L653.322 1013.29L653.384 1012.66L658.595 957.865L668.235 1012.05C669.18 1017.37 670.243 1022.7 671.424 1028.07L671.646 1029.07L671.81 1029.01C672.164 1028.87 672.617 1028.65 673.145 1028.36L673.376 1028.22L673.591 1028.09C676.808 1026.14 680.609 1022.18 682.124 1019.61L682.268 1019.36L683.992 1016.22L687.516 1015.59C688.13 1015.48 688.785 1015.19 689.256 1014.86L689.424 1014.73L691.957 1012.67L695.193 1013.12C742.407 1019.68 777.182 1014.15 799.311 990.972L799.978 990.264L803.427 986.553L808.158 988.367C829.193 996.437 1111.66 960.832 1135.23 958.623L1140.46 958.142L1144.83 957.753C1181.82 954.514 1215.1 955.001 1247.08 955.351L1249.14 955.376L1252 955.548L1254.63 955.717C1281.48 957.497 1302.7 960.79 1321.91 967.082C1345.98 974.972 1365 987.25 1378.46 1005.09L1379.06 1005.89L1379.71 1006.89C1397.37 1034.16 1402.7 1067.06 1396.56 1101.49C1391 1132.68 1376.16 1163.74 1355.4 1188.72L1354.73 1189.52L1353.53 1191.02C1309.6 1245.21 1219.14 1288.77 1093.48 1323.42L1089.66 1324.47L1085.75 1325.53C992.635 1350.65 888.017 1369.09 785.594 1381.45L782.394 1381.83L776.064 1382.58L754.926 1385.06L768.38 1371.36L768.319 1371.34C766.921 1370.88 745.288 1375.38 745.288 1375.38L740.667 1371.53C738.013 1369.31 736.021 1367.6 734.131 1365.9L733.241 1365.09L729.686 1361.82L730.329 1357.82C730.332 1357.75 730.302 1357.64 730.17 1357.4L730.107 1357.29C730.107 1357.29 714.464 1338.99 713.253 1337.93L713.05 1337.76L712.756 1337.51L712.634 1337.42C709.809 1335.31 680.33 1336.32 680.33 1336.32C680.33 1336.32 660.001 1301.8 657.325 1298.15L656.683 1297.27L650.024 1297.22L652.546 1292.99C656.219 1286.81 658.478 1279.89 659.426 1272.26L659.52 1271.47L659.574 1270.96L659.156 1271.24C656.331 1273.15 654.683 1275.06 654.136 1276.86L654.075 1277.07L654.033 1277.25L653.992 1277.44L653.775 1278.23C650.707 1289.02 644.19 1297.49 634.635 1304.22C627.883 1308.98 530.815 1342.82 506.791 1348.94L505.116 1349.37L499.129 1350.88L494.837 1341.75C488.232 1327.63 479.676 1308.77 469.166 1285.16L463.99 1273.51L458.677 1261.5L433.377 1246.65L416 1246.94C412.324 1247 408.945 1247.07 405.865 1247.13L404.35 1247.16L394.773 1247.36L393.047 1247.55C352.974 1251.84 313.933 1260.53 276.938 1273.52L275.059 1274.19L273.1 1274.89L272.055 1275.23L270.195 1275.84C244.058 1284.52 226.603 1293.37 214.077 1305.13C199.53 1318.79 191.782 1336.64 190.747 1361.44L190.717 1362.23L190.106 1379.3L177.951 1367.3C141.755 1331.54 118.056 1283.01 107.951 1227.73C98.6691 1176.95 101.359 1122.49 115.119 1073.41L115.325 1072.68L115.361 1072.19C116.391 1058.47 118.878 1044.44 122.795 1029.09L123.167 1027.65L123.547 1026.2C126.359 1015.55 129.154 1006.41 134.176 991.198L134.733 989.514L141.397 969.524C175.926 870.114 221.476 773.343 276.965 680.926L278.649 678.126L281.582 673.264Z'
                fill={pantsColor}
            />
            <path
                d='M776.075 1370.37C777.905 1368.51 778.675 1366.07 776.965 1363.2C770.355 1354.76 756.644 1360.53 748.115 1362.48C744.894 1359.8 741.695 1357.11 738.615 1354.28C739.685 1347.64 731.705 1343.22 728.425 1338.1C725.205 1334.33 722.175 1330.04 718.314 1326.88C708.905 1319.54 695.865 1324.51 684.945 1324.17C676.535 1313.47 667.875 1303.11 659.875 1292.06C669.095 1276.57 669.745 1258.41 666.685 1241.14C808.115 1187.48 930.535 1085.87 1083.49 1062.39C1088.75 1061.51 1091.7 1055.12 1090.39 1050.43C1079.72 1024.97 926.394 1090.67 903.474 1102.57C835.875 1134.94 772.554 1175.28 706.855 1210.88C693.155 1218.16 678.085 1222.07 663.105 1225.86C640.085 1150.3 601.144 1081.05 571.285 1008.2C573.224 1004.84 574.875 1001.32 576.275 997.692C575.285 1037.75 614.245 1037.19 619.625 999.189C617.405 1019 632.385 1061.42 654.005 1033.59C659.075 1026.59 660.875 1017.64 661.734 1008.61C662.845 1014.85 664.105 1021.07 665.505 1027.26C671.054 1039.54 686.205 1024.61 689.724 1018.21C691.755 1017.85 693.655 1016.92 695.045 1015.79C733.275 1021.1 778.304 1020.79 806.355 990.609C853.935 1008.86 906.595 992.509 954.715 985.221C1052.63 973.962 1150.94 956.802 1249.74 958.113C1293.85 960.674 1345.89 967.796 1373.79 1005.43C1409.58 1059.69 1389.35 1132.97 1349.87 1179.93C1254.9 1300.18 928.915 1352.46 776.075 1370.37ZM778.745 1413.68C780.474 1413.22 782.215 1412.8 783.945 1412.39C811.665 1435.47 942.215 1495.4 932.285 1531.2C928.775 1535.65 920.375 1536.66 915.064 1538.1C905.814 1540.6 896.474 1542.77 887.045 1544.49C856.564 1550.03 824.995 1551 794.554 1544.67C783.355 1542.97 773.245 1538.19 763.045 1533.57C730.085 1519.07 693.785 1503.05 660.984 1488.67C619.314 1472.15 546.224 1439.6 576.285 1384.66C604.765 1416.7 640.915 1413.9 659.125 1374.08C665.405 1362 670.885 1345.71 685.635 1340.82C693.415 1335.56 703.365 1334.47 709.865 1340.33C710.335 1339.6 710.755 1338.57 710.984 1337.67C718.314 1348.1 724.635 1359.08 733.224 1368.62C730.275 1368.77 699.575 1391.5 708.635 1391.51C719.535 1385.89 730.365 1381.22 742.135 1378.19C750.665 1386.77 760.045 1394.75 769.765 1402.13C760.325 1408.36 751.845 1416 745.025 1424.28C744.435 1425.01 745.155 1425.96 746.035 1425.56C756.625 1420.84 767.515 1416.7 778.745 1413.68ZM919.265 1568.47C813.234 1616.1 700.984 1563.06 610.564 1506.52C589.695 1494.87 562.245 1478.35 566.465 1450.92C581.835 1473.41 607.175 1486.21 631.495 1497.31C672.355 1515.78 713.484 1533.66 754.445 1551.9C758.314 1564.74 776.814 1565.23 787.995 1568.08C837.765 1577.73 891.265 1572.93 938.105 1553.69C935.394 1561.71 926.525 1565.4 919.265 1568.47ZM496.224 1383.02C493.605 1383.35 490.984 1383.66 488.365 1383.95C488.635 1380.49 486.545 1377.02 483.185 1375.95C484.695 1368.6 485.255 1361 484.445 1353.55C488.825 1364.86 502.965 1361.43 511.945 1358.17C524.775 1354.68 537.525 1350.93 550.205 1346.93C555.205 1356.22 560.505 1365.37 567.015 1373.78C543.314 1375.89 519.835 1380.07 496.224 1383.02ZM485.795 1347.42C485.165 1348.75 484.265 1350.16 484.245 1351.75C483.605 1346.25 482.355 1340.81 480.455 1335.6C482.234 1339.54 484.015 1343.48 485.795 1347.42ZM470.835 1317.9C459.175 1302.7 437.625 1290.28 417.705 1294.51C416.425 1294.79 416.394 1296.85 417.705 1297.1C444.465 1300.74 467.965 1321.96 468.894 1349.41C471.005 1361.83 462.365 1374.03 465.275 1385.94C464.695 1385.98 464.115 1386.01 463.545 1386.05C463.335 1386.85 463.144 1387.56 462.894 1388.18C465.785 1388.66 466.635 1393.31 463.224 1394.14C461.205 1394.63 459.095 1394.89 456.945 1395C446.035 1392.05 434.525 1391.37 424.095 1387.02C413.775 1382.46 416.355 1369.64 412.715 1360.77C410.045 1350.53 406.974 1340.34 403.105 1330.52C402.825 1329.73 401.755 1329.91 401.665 1330.7C398.935 1350.3 399.025 1370.22 399.685 1389.97C396.105 1390.34 392.545 1390.74 388.974 1391.18C389.205 1385.67 372.655 1318.46 363.935 1335.71C368.325 1354.67 368.855 1374.48 369.325 1393.99C343.435 1398.26 317.925 1404.61 293.105 1413.26C275.615 1418.56 254.814 1434.24 237.835 1420.06C224.685 1409.19 220.255 1390.22 221.495 1374.07C238.595 1278.56 373.655 1267.39 453.385 1274.46C460.915 1291.83 468.585 1309.15 476.355 1326.43C474.745 1323.45 472.905 1320.6 470.835 1317.9ZM198.905 1372.21C197.445 1350.52 201.095 1323.52 217.165 1307.36C253.945 1276.26 305.445 1266.48 351.405 1255.22C372.814 1250.99 394.515 1248.19 416.305 1246.79C424.035 1246.18 433.855 1247.93 439.314 1241.61C442.125 1248.27 444.974 1254.91 447.825 1261.56C356.325 1249.58 165.425 1291.22 218.885 1416.57C207.564 1404.3 200.064 1389.37 198.905 1372.21ZM653.495 1300.51C657.705 1311.03 662.855 1321.05 669.585 1330.21C661.935 1335.21 655.695 1342.61 651.295 1350.56C623.095 1424.34 592.935 1384.82 555.465 1345.23C587.175 1333.26 629.175 1324.3 653.495 1300.51ZM184.105 1357.2C110.775 1284.76 96.5446 1164.08 123.635 1069.22C126.045 1034.05 138.345 1000.53 149.365 967.224C184.455 866.199 230.605 769.005 285.955 677.239C354.625 696.103 423.175 715.468 492.005 733.711C501.484 735.77 510.974 739.838 520.705 740.429C524.185 742.646 527.675 745.089 531.295 747.235C526.025 773.054 530.885 799.413 532.115 825.389C533.234 845.838 531.025 865.864 528.314 886.097C525.285 915.53 512.814 1011.26 537.805 1028.79C546.275 1032.88 553.845 1020.77 557.495 1024.1C560.785 1021.81 563.855 1018.82 566.355 1015.53C576.005 1046.74 591.775 1075.69 601.515 1106.92C614.474 1152.82 657.035 1227.13 647.585 1270.91C640.275 1297.95 608.295 1303.78 585.215 1312.62C558.545 1321.9 531.575 1330.42 504.165 1337.33C490.785 1308.93 477.995 1280.27 465.445 1251.5C408.085 1118.74 357.285 983.221 311.885 846.084C311.035 843.041 300.595 810.062 298.685 819.262C298.525 818.316 297.335 815.873 296.885 817.962C304.585 850.163 312.394 882.354 320.845 914.377C300.085 911.471 277.765 910.339 258.765 920.514C257.785 921.036 258.505 922.325 259.474 922.169C281.974 918.268 303.675 925.636 325.285 930.926C355.635 1034.24 394.795 1134.93 436.245 1234.36C423.425 1230.27 408.545 1234.79 395.165 1235.11C353.025 1239.47 311.365 1248.69 271.555 1263.03C221.515 1279.25 186.135 1300.41 184.105 1357.2ZM143.734 603.302C131.415 590.034 121.734 573.091 123.605 555.114C131.005 545.244 133.455 532.37 137.765 520.962C154.615 473.227 170.255 425.128 188.595 377.906C227.605 389.904 265.984 404.295 302.185 423.197C308.845 426.597 315.435 430.123 321.945 433.777C328.765 437.599 336.205 444.239 344.385 442.337C335.445 454.995 317.035 468.165 313.925 482.792C313.255 487.423 316.535 491.717 321.575 490.683C400.465 546.722 481.935 601.579 556.505 663.999C612.345 708.209 655.215 744.064 674.365 815.795C687.275 862.259 687.314 910.821 685.415 958.595C685.045 967.883 685.035 977.39 684.285 986.738C685.405 993.732 683.275 1007.97 675.415 1008.22C675.595 1009.92 676.155 1011.48 677.045 1012.86C676.795 1013.2 676.535 1013.51 676.265 1013.84C675.875 1011.93 675.495 1010.02 675.135 1008.11C669.015 981.005 668.195 949.553 669.215 920.691C669.644 912.417 656.955 912.614 656.245 920.691C654.335 942.51 652.425 964.328 650.515 986.137C648.224 1000.27 651.835 1018.76 640.535 1029.51C629.045 1018.89 632.845 997.948 633.405 984.246C634.304 961.895 635.275 939.555 636.105 917.204C636.365 910.122 624.635 908.299 623.304 915.5C619.535 936.028 615.455 956.497 611.064 976.907C608.415 984.797 606.595 1020.2 593.355 1014.05C585.465 1008.66 591.155 977.075 590.115 966.614C590.605 945.908 590.894 925.232 592.415 904.576C593.035 896.243 579.465 894.47 577.605 902.606C574.585 915.776 571.695 928.946 569.075 942.204C563.325 964.555 565.415 994.855 544.655 1009.71C536.525 951.651 548.224 893.997 549.865 836.146C548.885 817.4 545.665 798.842 542.825 780.323C539.685 759.845 537.855 737.553 545.205 717.803C543.195 708.958 535.295 732.884 534.555 734.874C528.605 723.152 514.115 722.246 502.655 718.591C477.185 710.346 451.095 704.131 425.325 696.802C356.984 677.82 288.564 659.134 220.125 640.488C192.785 632.922 164.005 623.969 143.734 603.302ZM828.085 912.121C818.655 861.007 818.915 809.215 822.945 757.54C827.375 677.397 831.675 597.235 836.275 517.102C856.245 662.139 877.535 807.008 893.814 952.508C894.974 962.634 894.795 973.351 899.905 982.384C871.665 986.167 841.564 989.979 814.105 980.375C826.155 959.541 830.405 935.821 828.085 912.121ZM970.775 552.1C992.125 689.562 979.945 829.437 1000.65 966.742C971.925 969.963 943.415 974.73 914.984 979.971C918.095 963.008 912.195 945.495 911.175 928.414C895.734 806.584 878.685 684.834 856.095 564.068C850.554 535.167 844.955 506.385 838.535 477.641C839.505 460.236 840.355 442.83 840.915 425.414C872.265 405.704 907.615 392.947 944.175 386.515C954.054 441.559 963.925 496.564 970.775 552.1ZM723.625 120.142C722.375 118.004 721.185 115.817 720.045 113.601C723.905 113.749 727.665 113.887 731.465 114.517C731.295 120.634 731.635 126.8 731.705 132.967C729.804 128.455 726.085 124.338 723.625 120.142ZM1368.44 981.567C1277.25 915.254 1127.47 957.502 1021.83 964.319C1001.69 832.254 1009.91 698.033 991.144 565.753C973.855 433.6 955.625 299.606 912.205 172.989C894.285 124.032 863.285 109.493 812.245 109.887C786.345 108.873 758.955 104.726 733.785 105.316C728.265 105.405 722.495 106.134 717.515 108.361C710.515 92.5803 706.715 75.6376 704.795 58.5669C704.675 57.4834 703.295 57.2864 702.885 58.3207C696.965 73.1849 696.335 89.4084 699.554 104.972C701.885 116.123 715.755 160.006 731.865 142.837C733.144 178.84 725.234 221.837 689.965 240.523C628.335 267.395 543.144 242.926 507.445 185.893C500.545 174.496 494.595 162.369 486.955 151.426C540.185 136.355 570.064 72.5741 557.525 24.002C549.775 61.7781 535.644 103.987 500.455 125.146C372.314 124.86 265.775 183.223 205.575 295.635C193.795 311.958 182.905 328.919 172.925 346.178C167.554 357.723 151.825 373.779 165.175 384.929C149.755 426.084 136.075 467.81 121.615 509.29C117.644 523.111 108.564 537.61 110.375 552.14C108.415 561.094 108.505 571.683 112.995 580.292C117.255 595.639 126.814 616.285 142.665 622.796C156.115 635.08 173.125 643.541 190.865 649.914C143.554 773.556 125.545 906.901 109.515 1037.54C93.8036 1151.82 85.6946 1290.84 184.135 1373.43C186.045 1397.07 200.064 1427.18 227.785 1427.43C246.984 1446.29 270.385 1435.94 291.755 1426.72C327.825 1413.37 365.655 1405.96 403.245 1401.83C407.275 1404.98 413.835 1404.46 417.425 1400.79C440.195 1395.54 471.755 1416.8 476.355 1397.54C505.715 1394.69 534.755 1389.35 564.085 1386.24C551.724 1402.28 552.615 1425.93 561.925 1443.25C538.215 1489.9 593.445 1516.9 627.215 1536.04C672.804 1562.44 720.415 1587.49 772.554 1598.44C818.394 1608.08 866.415 1605.15 910.644 1589.75C933.885 1583.91 966.345 1564.73 952.554 1537.71C970.035 1486.29 847.275 1433.01 811.165 1407.26C825.925 1405.42 826.465 1374.78 788.075 1392.39C783.435 1389.28 778.875 1386.08 774.365 1382.82C929.644 1364.97 1226.19 1315.87 1338.57 1209.72C1400.31 1155.14 1435.93 1044.74 1368.44 981.567Z'
                fill={outlineColor}
            />
        </>
    );
};

OneLegColorPants.config = OneLegColorPantsConfig;
export default OneLegColorPants;