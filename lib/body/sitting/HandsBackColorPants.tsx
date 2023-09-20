import React from "react";

export const HandsBackColorPantsConfig = {
    name: "Hands Back Color Pants",
    props: [
        {
            name: "skinColor"
        },
        {
            name: "shoesColor"
        },
        {
            name: "pantsColor"
        },
        {
            name: "outlineColor"
        }
    ],
    width: 1534,
    height: 1934,
    viewBox: "0 0 1534 1934"
};

const HandsBackColorPants = ({ skinColor = "#D08B5B", shoesColor = "white", pantsColor = "#9DDADB", outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M354.445 905.795C334.598 955.371 310.841 1011.65 288.985 1059.94C290.735 1075.24 297.304 1090.89 292.164 1106.21C314.817 1091.47 340.286 1082.22 366.283 1075.23L367.745 1085.02C370.639 1084.93 375.853 1084.88 378.784 1084.84C378.327 1080.94 377.709 1074 377.429 1070.08L377.42 1070.08C373.794 1027.88 380.568 984.68 388.841 943.442C390.859 928.563 385.934 905.448 367.181 905.067C364.393 905.491 359.802 897.951 358.111 896.49L354.445 905.795ZM616.718 1476.11C522.234 1481.41 468.209 1404.1 422.529 1331.77C417.72 1334.96 412.392 1338.52 407.536 1341.4C400.064 1353.4 384.855 1357.04 371.725 1358.38C324.927 1360.77 314.903 1318.74 303.285 1282.59C301.072 1284.14 296.123 1292.05 292.401 1290.31C271.386 1285.66 250.926 1280.09 228.646 1281.48C203.075 1276.02 70.5652 1334.38 82.7952 1283.48C88.7682 1261.35 121.643 1250.86 138.575 1235.58C163.197 1207.57 157.201 1171.53 168.963 1138.17C178.742 1104.7 190.168 1073.18 211.313 1042.41C213.222 927.431 217.528 786.703 247.293 684.444C266.271 612.679 289.782 538.484 280.745 463.178L275.612 463.041C273.367 461.768 269.916 460.808 267.161 461.231C264.837 458.662 260.529 459.443 257.371 458.403C251.679 405.214 249.484 359.69 256.707 311.437C263.416 231.763 313.694 199.173 387.129 181.82C467.831 155.349 522.589 128.37 564.402 62.5473C572.31 49.1893 577.116 33.3733 587.652 22.1103C613.815 -11.0037 689.058 -5.5447 708.49 29.3223C716.976 49.7193 717.706 73.5253 724.161 94.7303C749.538 184.794 866.255 174.186 928.047 223.43C955.248 243.602 964.013 274.746 967.539 306.447C971.983 346.312 980.471 384.698 979.382 424.32C982.221 424.858 988.719 422.836 989.82 426.905C987.235 435.464 954.1 435.434 944.859 436.948C957.014 501.313 945.991 565.946 955.76 630.516C970.819 703.062 1000.45 770.436 1023.72 840.521C1032.68 863.683 1038.67 888.512 1051.99 909.605L1051.75 909.789C1053.86 913.287 1056.17 916.69 1058.57 919.968C1061.04 920.858 1063.61 922.308 1066.05 923.199L1066.59 922.285L1067.91 924.052L1071.77 922.419C1077.45 925.258 1083.62 928.546 1089.68 932.003C1164.13 977.187 1212.86 1023.04 1271.23 1079.81L1263.49 1086.09C1266.31 1090.02 1269.72 1095.21 1272.46 1099.35C1274.75 1097.33 1279.63 1093.93 1282.44 1092.76C1332.21 1151.93 1338.3 1254.5 1314.06 1316.85C1306.35 1335.53 1294.15 1350.87 1279.42 1363.8C1273.33 1372.94 1262.4 1385.57 1248.42 1391.64C1248.42 1391.64 1246.66 1394.13 1246.6 1394.22C1245.86 1394.32 1241.28 1395.37 1241.01 1396.43C1203.82 1402.71 1166.52 1419.08 1127.98 1419.31C1065.12 1418.76 1011.1 1367.73 960.682 1334.02C928.789 1311.27 891.626 1295.65 857.186 1280.44C859.754 1293.55 859.024 1298.05 844.77 1303.01C832.073 1308.06 816.799 1304.11 804.987 1298.56C805.295 1320.29 807.027 1341.99 806.429 1365.16C806.425 1393.22 807.361 1427.71 777.132 1440.66C725.657 1460.94 667.495 1475.5 616.718 1476.11Z'
                fill={skinColor}
            />
            <path
                d='M373.478 1072.66L374.182 1077.37L377.777 1077.31L378.498 1084.14C378.859 1087.56 379.267 1090.93 379.727 1094.25C380.392 1099.1 381.189 1104 382.114 1108.93L382.519 1111.05L383.385 1115.51L379.839 1118.34C375.867 1121.52 372.099 1125.52 367.665 1130.92C360.478 1139.68 354.897 1149.87 350.986 1161.19C347.298 1171.87 345.543 1183.07 345.863 1194.1C346.025 1199.48 346.849 1204.7 348.349 1209.81C348.754 1211.18 349.175 1212.46 349.624 1213.67L349.85 1214.26L351.145 1217.61L349.356 1220.72C348.523 1222.16 348.446 1223.65 348.92 1224.49L348.995 1224.61L416.928 1323.84L421.499 1330.56L414.946 1334.7C414.374 1335.06 413.777 1335.46 413.09 1335.94L412.372 1336.44L408.648 1339.08L404.594 1336.99C403.965 1336.66 403.155 1336.54 402.612 1336.65C400.321 1337.11 398.758 1337.86 396.112 1339.69L393.385 1341.6C391.436 1342.95 389.782 1343.98 387.904 1344.93C383.405 1347.22 376.024 1349.12 370.908 1349.43C363.505 1349.88 358.833 1349.31 351.989 1347.14C346.508 1345.39 340.878 1342.25 336.916 1338.6C328.543 1330.89 323.927 1321.96 318.585 1306.3L318.334 1305.56L316.85 1301.09L315.417 1296.72C311.291 1284.15 308.669 1277.43 304.872 1270.67C301.833 1265.28 298.218 1260.57 294.269 1256.99L293.958 1256.72C293.152 1256.02 292.129 1255.27 290.502 1254.17L288.772 1253.01C282.942 1249.1 280.001 1246.57 277.641 1242.4C275.499 1238.62 274.331 1234.39 273.487 1228.74L273.213 1226.79C273.152 1226.33 273.086 1225.79 272.982 1224.93L272.641 1222.08C272.571 1221.51 272.511 1221.04 272.453 1220.61L272.368 1219.98L272.289 1219.44C271.409 1213.55 270.732 1207.56 270.255 1201.49L270.104 1199.46L269.998 1197.91L269.881 1196C268.111 1165.27 272.277 1140.29 285.207 1120.16C293.89 1106.65 306.025 1096.77 321.804 1089.24L322.779 1088.78L323.797 1088.3C334.312 1083.47 344.709 1080.19 362.842 1075.43L365.407 1074.76L373.478 1072.66ZM796.229 1253.1L809.583 1259.83L811.398 1260.73C819.686 1264.81 827.754 1268.28 842.021 1274.05L847.765 1276.37L861.757 1281.99L848.827 1289.75C848.142 1290.17 847.458 1290.64 846.477 1291.37L844.143 1293.15L843.447 1293.67C842.786 1294.16 842.214 1294.57 841.588 1294.99C837.063 1298.04 832.571 1300.42 828.067 1301.99C821.772 1304.21 815.222 1304.96 808.479 1304.36L807.756 1304.3L801.557 1303.66L801.042 1297.45C800.283 1288.29 799.381 1279.26 798.332 1270.36L797.932 1267.02L796.229 1253.1Z'
                fill={shoesColor}
            />
            <path
                d='M929.24 861.976L933.216 855.723L939.83 859.813L940.829 860.403L942.559 861.445L943.468 862.74C944.266 863.876 1094.55 940.074 1119.27 955.361L1122.36 957.286C1163.48 982.931 1196.69 1007.71 1225.22 1035.18C1259.16 1067.84 1284.64 1103.08 1300.05 1141.08C1316.83 1182.47 1321.57 1227.82 1313.71 1271.78C1306.86 1310.13 1291.19 1346.31 1268.09 1376.74L1266.94 1378.24L1266.4 1378.71C1264.12 1380.75 1261.73 1382.69 1259.27 1384.53L1258.2 1385.31L1257.01 1386.18L1231.2 1392.57L1226.49 1393.76L1222.21 1394.85L1202.5 1399.92C1186.01 1404.12 1176.29 1406.44 1165.47 1408.65L1164.31 1408.89L1161.84 1409.38C1138.18 1413.97 1116.81 1413.49 1096.32 1407.08C1079.23 1401.74 1063.09 1393.35 1043.06 1380.35L1042.06 1379.69L1041.02 1379.01L1038.96 1377.65L1036.87 1376.27C1028.06 1370.39 912.893 1302.52 891.002 1294.38L885.924 1292.5L881.009 1290.69L876.787 1289.16C843.696 1277.2 791.288 1264.1 791.288 1264.1L799.238 1352.3L799.858 1359.2C800.599 1367.76 800.922 1372.95 800.865 1375.94L800.856 1376.3L800.769 1378.96L800.722 1380.79L800.589 1388.39C800.545 1390.4 800.494 1391.94 800.419 1393.45L800.347 1394.74L800.245 1396.31C799.413 1407.91 796.984 1416.68 791.515 1423.75C786.003 1430.89 689.369 1460.52 665.416 1464.35L664.404 1464.51L662.484 1464.8C630.159 1469.75 600.718 1469.47 574.161 1462.79C545.032 1455.47 519.585 1439.54 497.97 1415.96L496.638 1414.49C484.426 1401 474.363 1387.51 458.82 1364.58L455.95 1360.33L443.941 1342.45L441.081 1338.24L408.855 1291.17L361.97 1222.69C360.662 1220.78 358.675 1219.88 357 1220.2L356.808 1220.24L347.407 1222.57L347.5 1212.89C347.55 1207.67 342.838 1200.29 343.349 1194.61C344.354 1183.39 347.368 1171.87 351.992 1161.6C356.686 1151.19 385.667 1107.03 385.667 1107.03C379.461 1075.06 388.71 963.538 388.71 963.538C389.812 955.421 392.202 893.965 392.202 893.965L402.48 900.072C440.02 922.375 495.392 939.546 556.407 940.124L559.62 940.146C568.071 940.18 570.493 939.948 572.043 939.396L572.201 939.338L572.98 939.036L573.618 938.801C573.934 938.688 574.249 938.582 574.581 938.478C575.783 938.101 577.106 937.783 578.707 937.495L579.328 937.388C589.66 935.668 614.101 934.732 663.929 934.619L670.373 934.609C727.106 934.561 786.699 922.403 845.464 902.144C865.745 895.152 884.506 887.666 901.366 880.148L903.437 879.219C907.525 877.378 911.289 875.628 914.73 873.981L915.584 873.571L917.25 872.765L919.007 871.905C919.567 871.63 920.102 871.365 920.615 871.109L921.613 870.609L922.516 870.152L922.862 869.826C924.878 867.893 926.726 865.698 928.387 863.27L928.835 862.602L929.24 861.976Z'
                fill={pantsColor}
            />
            <path
                d='M570.473 34.7307C574.513 27.0007 586.723 32.4407 584.353 40.5807C578.313 61.3017 563.813 80.8907 549.823 97.0207C535.753 113.242 519.243 127.322 501.473 139.361C499.523 145.961 499.943 152.311 502.583 158.751C503.593 161.211 502.543 163.081 500.803 164.032C502.583 170.631 503.683 177.512 505.543 184.061C510.393 201.141 518.173 217.492 528.343 232.052C546.643 258.262 572.553 278.262 603.883 285.972C634.603 293.532 668.453 289.191 695.143 271.751C719.183 256.041 736.353 231.381 739.173 202.441C740.483 188.941 739.263 175.401 736.133 162.231C734.473 155.251 732.333 148.391 729.813 141.682C727.153 134.611 723.593 127.871 721.633 120.581C721.453 119.912 721.403 119.242 721.453 118.581C717.563 112.271 716.313 104.361 718.603 97.0607C718.713 96.7017 718.853 96.3707 719.023 96.0717C718.873 94.8307 718.723 93.5807 718.603 92.3307C718.103 87.3607 718.263 82.4917 718.023 77.5517C717.783 72.8107 716.923 68.6307 717.233 63.8707C717.273 63.2507 718.023 63.0717 718.373 63.5717C721.491 68.0228 722.046 72.1755 723.62 77.164L723.793 77.7017C725.533 83.0517 726.893 88.3707 728.343 93.8107C730.583 102.242 733.733 110.182 738.433 117.552C746.663 130.432 758.053 140.861 770.783 149.202C820.003 181.421 883.333 182.341 930.153 219.351C941.413 228.251 951.183 239.401 957.763 252.211C965.959 268.158 968.861 285.7 971.429 303.234L971.863 306.211C974.823 326.611 977.483 347.061 979.793 367.541C980.943 377.702 982.003 387.881 982.983 398.061C983.633 404.802 985.303 412.202 984.503 419.021C985.403 419.032 986.293 419.131 987.173 419.381C990.953 420.421 994.073 423.262 994.203 427.341C994.526 437.945 979.349 439.079 971.617 440.362L971.153 440.441C964.273 441.631 957.333 442.561 950.363 443.072C952.833 456.421 953.733 470.001 954.433 483.621C955.107 496.682 955.347 509.786 955.517 522.882L955.715 538.945C956.06 569.272 955.031 600.139 960.063 630.151C964.407 656.101 972.64 681.133 981.18 705.972L984.763 716.361C995.143 746.452 1005.43 776.571 1016.14 806.541C1021.5 821.531 1026.83 836.541 1032.17 851.541C1034.84 859.041 1037.48 866.551 1040.18 874.041C1041.17 876.771 1042.29 879.492 1043.29 882.231C1043.76 882.742 1044.16 883.341 1044.41 884.081C1046.96 891.651 1050.3 898.841 1054.29 905.671C1059.11 909.351 1063.77 913.051 1068.2 917.202C1068.24 917.231 1068.26 917.281 1068.29 917.321C1069.52 916.801 1070.97 916.751 1072.48 917.501C1078.68 920.591 1084.78 923.871 1090.79 927.271C1090.86 927.301 1090.92 927.321 1090.98 927.351C1091 927.371 1091.01 927.391 1091.02 927.412C1127.99 948.371 1161.57 974.871 1193.76 1002.55C1210.11 1016.61 1226.31 1030.88 1242.29 1045.36C1257.44 1059.09 1272.24 1073.31 1285.15 1089.2C1297.98 1104.99 1308.75 1122.22 1315.95 1141.31C1323.62 1161.65 1327.24 1183.29 1329.63 1204.82L1329.78 1206.17C1333.89 1244.05 1333.05 1284.26 1317.96 1319.82C1310.41 1337.61 1299.17 1353.44 1284.63 1366.2C1284.02 1366.74 1283.39 1367.25 1282.77 1367.78C1274.55 1379.95 1263.72 1390.92 1250.79 1397.02L1249.34 1399.09L1248.6 1400.11L1243.53 1401.41L1243.05 1401.89C1241.39 1403.52 1239.4 1403.63 1237.76 1402.9L1220.12 1407.45L1202.48 1411.98C1178.94 1418.05 1155.11 1424.96 1130.66 1425.86C1107.75 1426.71 1085.77 1420.67 1065.09 1411.18C1044.94 1401.94 1026.42 1389.49 1008.25 1376.88C990.583 1364.62 973.203 1351.94 955.613 1339.55C949.393 1335.17 943.143 1330.87 936.833 1326.66C935.449 1325.94 934.078 1325.23 932.714 1324.56L931.693 1324.07C925.353 1321.08 919.223 1317.57 912.983 1314.38C900.503 1307.99 887.823 1301.97 875.103 1296.07C871.043 1294.18 866.923 1292.38 862.783 1290.63C862.933 1291.86 862.923 1293.11 862.733 1294.29C861.493 1302.38 852.093 1306.65 845.293 1309.24C839.593 1311.42 833.273 1312.19 827.193 1311.88C821.143 1311.57 815.013 1310.36 809.373 1308.08C809.373 1308.13 809.373 1308.17 809.383 1308.22C810.475 1324.35 810.911 1340.56 810.858 1356.73L810.828 1362.26C810.755 1378.16 810.966 1394.72 807.603 1410.26C804.003 1426.9 793.393 1439.54 778.063 1446.72C764.629 1453.02 750.006 1457.13 735.78 1461.38L732.843 1462.26C701.853 1471.64 670.093 1478.99 637.773 1481.75C607.143 1484.36 575.203 1482.15 546.333 1470.95C515.363 1458.93 490.513 1437.86 469.933 1412.1C453.541 1391.58 438.773 1369.72 424.093 1347.88L419.263 1340.69C416.383 1342.6 413.463 1344.46 410.503 1346.26C409.523 1348.2 408.113 1349.95 406.093 1351.57C402.803 1354.22 399.373 1356.61 395.573 1358.46C387.633 1362.32 379.273 1364.47 370.463 1364.99C354.133 1365.94 337.213 1360.17 325.313 1348.87C309.843 1334.16 305.973 1313.37 299.223 1294.29C296.873 1296.69 293.343 1297.44 289.813 1296.86C279.203 1295.16 268.983 1291.6 258.323 1289.93C248.063 1288.31 237.573 1287.82 227.193 1288.1C207.336 1288.64 188.462 1293.38 169.471 1298.73L164.531 1300.13C147.286 1305.01 129.777 1309.69 111.803 1310.53L109.572 1310.63C101.038 1310.96 90.7308 1310.92 83.2828 1307.06C73.8628 1302.18 72.3228 1291.49 75.5028 1282.17C80.0728 1268.73 90.4628 1259.54 102.063 1252.02C112.233 1245.43 124.233 1239.96 132.843 1231.84C144.087 1221.23 147.334 1205.16 150.05 1190.55L150.163 1189.94C153.443 1172.22 156.853 1154.64 161.553 1137.23C166.243 1119.85 172.313 1102.87 179.453 1086.35C186.433 1070.18 194.403 1053.74 204.863 1039.49C204.873 1039.46 204.883 1039.44 204.893 1039.42C204.783 1038.84 204.693 1038.25 204.653 1037.61C204.483 1035.04 204.663 1032.4 204.693 1029.82L204.843 1013.25C204.953 1002.52 205.083 991.801 205.263 981.071C205.623 958.981 206.103 936.871 207.113 914.801C210.683 836.702 219.913 759.251 239.873 683.541C249.543 646.831 260.133 610.211 267.423 572.932C271.353 552.841 273.843 532.782 274.953 512.631C275.323 498.322 274.883 483.972 273.623 469.662C272.893 469.641 272.123 469.461 271.343 469.052C270.303 468.501 269.203 468.111 268.073 467.791L265.113 467.871C263.383 467.921 262.123 467.231 261.323 466.202C260.823 466.061 260.323 465.912 259.833 465.742C256.963 465.552 254.123 464.941 251.283 463.921C250.543 463.651 250.163 463.121 250.083 462.341C249.743 459.262 249.413 456.171 249.093 453.081C248.433 450.302 248.213 447.372 248.223 444.401C245.533 416.361 243.913 388.081 244.803 359.921C244.163 358.602 244.313 357.191 244.943 355.992C245.543 340.981 246.873 326.021 249.163 311.151L249.493 309.04C254.977 274.532 265.059 238.905 293.273 216.081C319.383 194.961 352.283 186.461 383.733 176.711L386.533 175.837C426.181 163.376 465.189 147.445 499.043 122.961C514.583 111.722 528.813 98.5407 541.053 83.7817C547.203 76.3707 552.753 68.4717 557.603 60.1507C562.433 51.8907 566.053 43.1817 570.473 34.7307ZM930.703 864.432C928.243 868.301 925.323 871.811 921.953 874.811C919.403 876.071 916.893 877.421 914.403 878.791C912.573 879.432 910.763 880.101 908.963 880.801C905.453 882.021 901.973 883.351 898.493 884.702C897.663 884.611 896.833 884.472 896.043 884.231C887.253 888.061 878.043 890.891 868.563 892.651L868.403 892.671C860.663 896.051 852.833 899.202 845.033 902.202C824.453 910.121 803.333 916.581 781.923 921.841C743.723 931.222 704.653 936.871 665.513 940.541C628.283 944.021 590.743 946.321 553.343 946.071C501.813 945.731 446.353 939.432 401.783 912.952C401.655 914.439 401.444 915.934 401.272 917.389L401.103 918.941C402.223 929.012 402.383 939.131 401.663 949.412C400.523 965.762 397.323 981.881 395.893 998.202C395.603 1001.53 394.223 1003.88 392.333 1005.37C389.073 1039.18 389.703 1073.76 396.163 1107.03C397.173 1107.58 398.023 1108.35 398.673 1109.24C398.973 1111.27 399.363 1113.26 399.873 1115.22C399.863 1115.28 399.853 1115.35 399.833 1115.41C399.553 1116.5 399.133 1117.5 398.623 1118.43C404.263 1142.15 413.013 1165.08 425.633 1186.42C440.802 1212.04 460.722 1234.22 480.64 1256.2L486.273 1262.42C497.313 1274.61 508.283 1286.88 518.473 1299.8C523.883 1306.66 529.153 1313.64 534.063 1320.87L535.8 1323.43C540.122 1329.82 544.213 1336.26 546.163 1343.81C548.573 1353.16 536.513 1360.88 529.553 1353.48C523.033 1346.54 518.703 1338.03 513.323 1330.2C508.383 1323.02 503.113 1316.09 497.603 1309.33C486.845 1296.14 475.379 1283.53 463.988 1270.87L459.687 1266.09C438.76 1242.75 418.083 1218.67 403.003 1191.04C393.293 1173.25 385.843 1154.37 380.443 1134.89C379.083 1136.18 377.743 1137.49 376.463 1138.86C369.223 1146.6 363.323 1155.44 358.963 1165.11C354.683 1174.62 351.883 1185.32 350.953 1195.71C350.483 1200.93 350.183 1206.16 350.133 1211.39C355.123 1210.15 360.303 1212.52 363.293 1216.89L379.013 1239.85L410.177 1285.36L441.333 1330.87C459.553 1357.47 476.783 1385.48 498.633 1409.32C518.493 1430.99 542.483 1446.75 571.123 1453.95C598.783 1460.9 628.313 1460.13 656.483 1455.82C685.944 1451.32 714.882 1443.44 743.406 1434.92L745.493 1434.29C757.253 1430.76 772.743 1427.92 780.713 1417.6C789.017 1406.85 788.013 1390.07 788.406 1377.19L788.423 1376.65C790.673 1310.86 784.073 1244.94 769.543 1180.75C762.283 1148.69 753.553 1116.86 742.733 1085.82L740.003 1077.99C735.449 1064.93 730.858 1051.87 725.933 1038.94C719.003 1024.47 711.373 1010.33 703.063 996.571C699.723 991.041 708.373 986.021 711.693 991.521C724.073 1012.03 734.943 1033.37 744.273 1055.4C745.203 1057.28 746.123 1059.17 747.033 1061.06C749.443 1052.43 752.933 1044.14 757.013 1036.13C762.033 1026.27 768.373 1017.15 775.403 1008.61L776.106 1007.76C783.288 999.146 791.351 991.378 802.893 989.461C809.233 988.412 813.763 994.061 810.993 1000C806.463 1009.7 798.743 1016.07 791.593 1023.71C785.093 1030.66 779.483 1038.25 774.493 1046.35C769.303 1054.75 764.953 1063.75 761.073 1072.82C759.663 1076.12 758.373 1079.47 756.903 1082.73C773.933 1122.34 786.583 1163.93 795.443 1205.87C795.573 1206.46 795.683 1207.06 795.803 1207.65C801.313 1210.86 806.583 1214.91 811.853 1218.19L815.928 1220.72C821.367 1224.1 826.833 1227.43 832.433 1230.53C839.443 1234.4 846.603 1238.04 853.903 1241.35C861.743 1244.91 869.683 1247.2 876.403 1252.68C880.053 1255.66 876.933 1261.78 872.653 1261.72C865.344 1261.61 858.77 1258.75 852.273 1255.61L847.823 1253.43C840.103 1249.69 832.593 1245.55 825.343 1240.96C817.903 1236.25 810.763 1231.21 804.043 1225.54L802.177 1223.97C800.919 1222.9 799.639 1221.8 798.373 1220.67L799.165 1224.89C799.296 1225.6 799.426 1226.3 799.553 1227.01C800.803 1227.7 802.063 1228.35 803.313 1228.97C803.563 1229.79 803.823 1230.61 804.093 1231.42C803.113 1232.08 802.453 1233.26 802.783 1234.64C803.964 1239.7 804.592 1244.84 805.287 1249.97L805.463 1251.25L803.173 1249.51C803.663 1252.85 804.113 1256.2 804.553 1259.55C830.713 1261.48 856.633 1270.81 881.003 1279.74C894.683 1284.75 908.053 1290.44 921.253 1296.59L924.439 1298.08C929.749 1300.56 935.044 1303.12 940.153 1305.97C940.719 1306.29 941.282 1306.62 941.839 1306.95L942.673 1307.44L944.653 1306.91C947.443 1307.78 950.223 1308.67 953.003 1309.57C964.163 1317.26 975.173 1325.17 986.133 1333.1L998.282 1341.9C1011.45 1351.42 1024.68 1360.87 1038.23 1369.83L1040.28 1371.18C1056.99 1382.14 1074.53 1392.36 1093.69 1398.35C1114.46 1404.85 1135.35 1404.48 1156.55 1400.25C1179.64 1395.63 1202.43 1389.23 1225.27 1383.54C1233.15 1381.58 1241.03 1379.63 1248.92 1377.68C1251.56 1375.76 1254.11 1373.71 1256.55 1371.54C1279.5 1341.63 1294.8 1306.14 1301.46 1268.89C1309.07 1226.31 1304.47 1182.4 1288.23 1142.33C1272.21 1102.81 1245.69 1068.4 1215.15 1039.01C1183.59 1008.63 1147.63 983.182 1110.45 960.171C1083.86 943.722 1056.63 928.242 1029.05 913.432C1025.27 912.012 1021.61 910.281 1018 908.441C1010.72 905.291 1003.48 902.081 996.293 898.771C989.343 895.682 982.393 892.561 975.473 889.412C969.945 886.898 964.429 884.363 958.92 881.81L953.413 879.251C947.743 876.611 941.833 874.182 936.923 870.211C935.113 868.742 933.643 867.162 932.463 865.481C931.883 865.131 931.283 864.791 930.703 864.432ZM596.133 1295.12C596.583 1294.32 597.723 1295.02 597.343 1295.83C593.053 1305.12 590.453 1315.66 588.063 1325.59C585.906 1334.55 584.282 1343.55 583.508 1352.73L583.274 1355.7C582.6 1364.03 581.589 1373.48 585.613 1381.06C588.347 1386.22 593.713 1392.38 599.479 1394.04L599.833 1394.14C606.703 1395.89 605.773 1405.01 599.833 1407.16C588.483 1411.25 576.473 1405.93 570.263 1396C563.733 1385.58 563.793 1372.5 566.313 1360.87C568.863 1349.1 574.003 1337.53 578.913 1326.57C583.863 1315.54 590.263 1305.62 596.133 1295.12ZM370.663 1081.16L366.209 1082.32C337.917 1089.69 308.271 1098.17 291.523 1124.23C277.483 1146.09 275.803 1173.75 277.593 1198.97C278.007 1204.8 278.615 1210.63 279.433 1216.42L279.713 1218.35C280.673 1224.76 280.943 1233.02 284.173 1238.72C287.303 1244.25 294.713 1247.28 299.313 1251.45C304.153 1255.84 308.213 1261.33 311.413 1267.01C317.773 1278.32 321.323 1290.97 325.453 1303.2L325.888 1304.48C329.535 1315.13 333.762 1325.51 342.003 1333.1C345.223 1336.07 349.943 1338.63 354.273 1340.01C360.223 1341.9 363.973 1342.35 370.463 1341.96C374.363 1341.72 380.793 1340.15 384.513 1338.26C390.843 1335.05 393.773 1330.78 401.153 1329.31C403.393 1328.86 405.933 1329.25 408.043 1330.34C409.003 1329.66 409.963 1329 410.943 1328.38C409.943 1326.91 408.943 1325.44 407.943 1323.98L342.813 1228.86C340.383 1225.31 340.773 1220.62 342.863 1216.99C342.193 1215.26 341.633 1213.54 341.163 1211.95C339.473 1206.19 338.553 1200.34 338.373 1194.34C338.023 1182.27 339.963 1170.17 343.903 1158.76C347.993 1146.92 353.923 1135.87 361.873 1126.18L362.623 1125.27C365.841 1121.4 370.228 1116.45 375.163 1112.5C374.053 1106.79 373.093 1101.05 372.303 1095.29C371.653 1090.59 371.113 1085.88 370.663 1081.16ZM805.383 1266.13C806.633 1276.35 807.673 1286.6 808.523 1296.85C814.213 1297.43 819.933 1296.92 825.583 1294.93C829.743 1293.48 833.753 1291.25 837.403 1288.79C840.043 1287 842.323 1284.93 844.973 1283.34L838.953 1280.92C827.586 1276.33 816.271 1271.62 805.383 1266.13ZM379.913 472.361C347.863 468.851 315.643 467.231 283.413 467.512C286.193 497.121 285.483 526.952 281.353 556.341C280.603 565.921 279.583 575.432 278.413 584.831C268.923 661.271 246.903 735.432 238.233 812.001C233.813 851.001 231.683 890.191 230.353 929.401C229.693 948.901 229.293 968.401 229.023 987.901C228.883 997.972 228.773 1008.05 228.683 1018.12L228.563 1032.74C228.543 1035.33 228.773 1038.25 228.073 1040.78C227.424 1043.15 225.89 1045.1 224.462 1047.06L223.933 1047.79C220.563 1052.56 214.623 1053.24 210.643 1049.55C205.883 1058.13 201.003 1066.63 196.593 1075.41C190.843 1086.87 185.783 1098.65 181.903 1110.82C178.593 1124.64 175.893 1138.63 173.543 1152.62C170.683 1169.56 168.763 1186.66 165.783 1203.58C163.003 1219.37 157.673 1234.49 146.423 1246.28C137.633 1255.48 126.583 1261.64 115.973 1268.44L114.276 1269.53C109.901 1272.37 106.662 1274.66 102.893 1278.45C99.8428 1281.52 97.7128 1284.59 96.5228 1288.24L97.3685 1288.46C97.7328 1288.54 98.0757 1288.62 98.3728 1288.65C102.523 1289.12 106.733 1289.23 110.903 1289.14C119.583 1288.94 128.133 1287.64 136.583 1285.75C153.923 1281.87 170.753 1276.04 188.073 1272.14C205.993 1268.1 224.473 1266.34 242.823 1267.41L244.713 1267.53C259.911 1268.48 276.879 1270.44 291.183 1276.44C290.543 1275.35 289.873 1274.28 289.163 1273.22C285.693 1268.1 279.633 1264.03 274.303 1259.82C266.763 1253.86 262.653 1246.09 261.023 1236.67C258.363 1221.32 256.773 1205.6 256.683 1190.01C256.503 1160.2 262.413 1128.33 284.143 1106.35C284.203 1106.3 284.263 1106.24 284.323 1106.18C284.373 1105.15 284.403 1104.13 284.413 1103.1C280.273 1101.57 277.143 1097.65 277.193 1092.89C277.283 1084.91 277.723 1076.93 279.063 1069.06C275.913 1067.75 273.493 1064.8 273.473 1060.73C273.444 1054.11 276.727 1048.3 279.38 1042.38L279.613 1041.86C282.003 1036.45 284.393 1031.03 286.783 1025.61L296.327 1003.95C297.918 1000.34 299.513 996.727 301.113 993.121C317.763 955.651 335.343 918.621 352.343 881.311C359.083 866.521 365.633 851.641 371.653 836.541C375.623 820.111 380.463 803.901 384.963 787.611C389.443 771.361 393.653 755.012 396.423 738.371C399.293 721.151 400.483 703.662 400.683 686.211C401.084 651.522 397.418 616.861 393.064 582.482L392.773 580.191C388.203 544.281 383.783 508.371 379.913 472.361ZM1146.79 1150.16C1146.08 1149.63 1146.74 1148.43 1147.5 1148.94C1166.46 1161.6 1184.34 1177.03 1198.31 1195.11C1213.19 1214.35 1224.64 1235.88 1232.75 1258.79C1235.77 1267.35 1221.42 1271.43 1219.1 1262.55C1207.78 1219.35 1182.98 1177.05 1146.79 1150.16ZM971.383 1007.25C971.753 1006.79 972.493 1007.39 972.193 1007.88C965.565 1018.58 961.415 1030.33 956.827 1041.97L955.903 1044.3C951.153 1056.15 947.133 1068.42 943.943 1080.78C937.453 1105.91 935.663 1131.89 931.223 1157.41C930.343 1162.46 922.203 1162.28 921.183 1157.41C915.493 1130 921.083 1102.11 930.263 1076.12C934.833 1063.18 940.463 1050.74 947.343 1038.86C953.983 1027.39 963.163 1017.57 971.383 1007.25ZM517.053 1050.37L518.439 1049.62C539.784 1038.16 565.094 1028.58 589.533 1030.75C596.293 1031.35 598.183 1040.88 591.183 1042.9C568.363 1049.49 545.183 1053.09 523.163 1062.42C501.153 1071.74 481.923 1085.13 462.743 1099.15C461.983 1099.71 460.943 1098.62 461.453 1097.87C475.193 1077.71 495.823 1061.94 517.053 1050.37ZM358.413 908.621C353.043 922.251 347.463 935.801 341.893 949.341C334.586 967.083 327.035 984.747 319.428 1002.37L304.033 1037.97C301.803 1043.1 299.583 1048.24 297.363 1053.37C296.143 1056.2 295.063 1059.04 293.623 1061.65C293.924 1063.51 294.11 1065.15 294.264 1066.04L294.293 1066.2C295.763 1074.13 297.073 1082.09 298.833 1089.96C299.213 1091.64 299.223 1093.31 298.923 1094.89C301.063 1093.62 303.253 1092.46 305.503 1091.39C313.123 1086.78 322.113 1083.64 329.733 1080.72C342.763 1075.73 356.193 1071.94 369.643 1068.26C368.123 1043.62 369.063 1018.84 372.333 994.331C373.493 985.711 374.833 977.121 376.453 968.571C378.043 960.202 380.313 951.871 381.263 943.401C382.5 932.382 380.543 912.631 365.803 911.713L365.353 911.691C362.213 911.571 359.903 910.371 358.413 908.621ZM1266.76 1083.24C1268.64 1085.88 1270.47 1088.55 1272.26 1091.25C1272.58 1091 1272.93 1090.77 1273.3 1090.58C1271.17 1088.1 1268.98 1085.65 1266.76 1083.24ZM370.413 1078.42L365.973 1079.65C367.493 1079.61 369.003 1079.57 370.513 1079.55C370.473 1079.17 370.443 1078.8 370.413 1078.42ZM1055.27 907.311C1056.76 909.762 1058.33 912.17 1059.99 914.527L1060.82 915.702L1063.94 917.012C1064.39 917.191 1064.78 917.421 1065.13 917.682C1065.59 917.861 1066.06 918.031 1066.52 918.202C1062.56 914.762 1058.89 911.091 1055.27 907.311ZM889.033 435.791C888.633 448.222 888.143 460.641 887.643 473.061C885.973 514.722 883.563 556.401 882.703 598.091L882.647 600.906C881.971 637.518 883.023 674.497 893.543 709.861C898.785 727.501 906.819 743.454 916.008 759.301L919.251 764.87C927.648 779.336 935.956 794.425 939.513 810.831C941.163 818.421 941.523 826.841 940.563 835.211C941.133 836.191 941.323 837.441 940.873 838.881L940.086 841.42C938.481 846.651 936.913 852.684 939.253 857.682C939.523 858.262 939.843 858.801 940.193 859.321L945.659 861.768C948.392 862.996 951.125 864.237 953.843 865.521C961.293 869.051 968.663 872.771 975.993 876.541C977.203 876.051 978.633 876.031 980.103 876.771C997.153 885.351 1014.16 894.101 1031.04 903.091L1033.73 904.262C1033.55 903.912 1033.39 903.571 1033.22 903.222C1032.22 902.851 1031.29 902.321 1030.46 901.631C1023.1 895.483 1021.54 885.215 1018.68 876.372L1010.41 851.361C1004.79 834.381 999.183 817.391 993.593 800.401C983.683 770.291 973.183 740.361 962.983 710.341L961.924 707.215C952.431 679.073 943.87 650.733 940.563 621.101C937.053 589.662 938.593 557.801 939.173 526.251L939.227 523.036C939.645 496.733 939.531 469.332 944.643 443.401C943.523 443.441 942.393 443.472 941.263 443.492C932.063 443.622 922.973 443.052 913.853 441.791C909.003 441.122 904.163 440.341 899.393 439.222C897.003 438.662 894.593 438.091 892.233 437.401C890.783 436.972 890.003 436.372 889.033 435.791ZM325.683 625.491C333.803 625.379 341.94 625.729 350.03 626.548L354.24 627C362.477 627.9 370.466 628.989 376.803 634.961C380.543 638.501 378.713 645.231 373.763 646.481C365.083 648.681 356.973 645.631 348.503 643.831C340.663 642.151 332.743 640.941 324.743 640.241C308.323 638.801 291.903 638.861 275.433 638.661C273.263 638.641 273.223 635.901 274.963 635.161C290.913 628.451 308.443 625.721 325.683 625.491ZM490.233 146.572C489.253 147.162 488.293 147.782 487.303 148.361C488.363 148.351 489.323 148.492 490.233 148.742C490.213 148.021 490.213 147.291 490.233 146.572Z'
                fill={outlineColor}
            />
        </>
    );
};

HandsBackColorPants.config = HandsBackColorPantsConfig;
export default HandsBackColorPants;