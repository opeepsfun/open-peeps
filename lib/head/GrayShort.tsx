import React from "react";

export const GrayShortConfig = {
    name: "Gray Short",
    props: [
        {
            name: "outlineColor"
        },
        {
            name: "skinColor"
        },
        {
            name: "hairColor"
        }
    ],
    width: 474,
    height: 567,
    viewBox: "0 0 474 567"
};

const GrayShort = ({ outlineColor = "#000", hairColor = "#E5E5E5", skinColor = "#D08B5B" }) => {
    return (
        <>
            <path
                d='M287.4077,509.471946 C265.2117,509.6 246.3477,503.302 231.9537,492.883 C213.9917,486.478 192.3257,476.599 179.1657,466.228 C174.0327,467.538 167.8907,462.085 163.9627,459.207 C139.5377,440.968 120.3657,414.271 114.6847,387.529 C105.9147,398.599 93.4347,399.059 81.4797,393.557 C56.4197,379.345 57.3567,349.42 66.3787,327.062 C47.4117,284.505 34.2667,172.159 63.2197,126.818 C69.1417,120.034 77.8327,115.976 84.0897,109.019 C89.6577,102.943 94.9537,96.728 101.4317,91.92 C121.1977,76.876 155.2417,68.866 176.5577,65.099 C265.5397,45.861 333.9077,80.439 414.5097,109.606 C409.8707,121.206 403.4537,131.785 396.0997,141.649 C416.1097,149.118 406.9187,165.911 391.3947,174.424 L382.1527,169.932 C396.5597,221.478 429.7157,349.66 415.4097,390.823 C404.0017,455.043 353.9357,509.935 287.4077,509.471946'
                fill={skinColor}
            />
            <path
                d='M414.180138,110.065812 C409.541138,121.665812 403.124138,132.244812 395.770138,142.108812 C415.780138,149.577812 406.589138,166.370812 391.065138,174.883812 L384.383504,171.634526 C381.459208,152.77851 375.828896,142.936124 367.492567,142.107368 C353.825126,140.748619 323.578556,166.316266 310.407201,166.316266 C297.235845,166.316266 230.32078,137.719149 193.56334,137.719149 C156.8059,137.719149 125.514732,168.079928 113.081399,190.084218 C104.792509,204.753744 110.960581,221.19799 131.585612,239.416956 C119.24947,255.229059 113.081399,266.592647 113.081399,273.507721 C113.081399,280.422794 114.522923,294.715028 117.405971,316.384422 C104.122956,312.025601 93.6827919,309.846191 86.0854789,309.846191 C78.4881659,309.846191 71.8937551,314.053147 66.3022465,322.467058 L66.3022465,322.467058 L63.9514038,322.471608 C46.159461,276.671044 35.0178727,170.926359 62.8901376,127.277812 C68.8121376,120.493812 77.5031376,116.435812 83.7601376,109.478812 C89.3281376,103.402812 94.6241376,97.1878124 101.102138,92.3798124 C120.868138,77.3358124 154.912138,69.3258124 176.228138,65.5588124 C265.210138,46.3208124 333.578138,80.8988124 414.180138,110.065812 Z'
                fill={hairColor}
            />
            <path
                d='M300.264824,514.999146 C271.444908,517.957475 237.206802,511.144166 217.993995,487.732675 C217.419467,487.031952 217.167937,486.238551 217.152938,485.472368 C217.13626,484.620382 217.422202,483.797293 217.916337,483.156895 C218.435664,482.483847 219.174997,482.014618 220.022563,481.862398 C220.736183,481.734235 221.549772,481.816691 222.388568,482.287221 L224.15486,483.270733 C237.276321,490.517978 250.903537,496.698407 265.773803,499.343499 C281.084661,502.066522 296.67481,501.761975 311.849305,498.303574 C339.489999,492.005907 361.859818,475.940527 378.325184,454.757114 C396.699419,431.117858 407.732864,401.109793 410.545324,371.100003 C413.953335,334.731308 406.047708,298.584201 397.868463,263.370107 C389.273992,226.369129 379.879811,189.55683 368.967102,153.171812 C368.638196,152.076531 368.549815,151.051323 368.644781,150.107121 C365.426107,148.84613 362.000374,149.196196 358.590917,150.347326 C352.361263,152.450634 346.155262,157.193632 340.979537,161.108796 C339.105014,162.526774 337.3611,163.844794 335.794036,164.917168 C329.376153,169.308738 322.360001,172.468602 314.515734,172.965619 C306.356424,173.481228 298.357344,170.945476 290.947203,167.772079 C287.182629,166.159761 283.478478,164.487414 279.789159,162.821628 C269.284189,158.078466 258.903213,153.382071 247.558851,150.329885 C232.358233,146.239084 216.664318,144.224181 200.921891,144.368516 C172.826348,144.625476 144.644623,151.857285 127.425097,175.619154 C120.449982,185.244775 115.902367,196.307893 119.449013,208.187445 C121.378379,214.649794 125.019524,220.516388 128.993518,225.912105 L130.357003,227.749609 C132.536963,230.71144 134.430425,233.661356 135.001361,236.802033 C135.479644,239.433029 135.106583,242.21642 133.227756,245.267056 C132.045555,247.187472 130.540571,248.909567 129.027294,250.626056 C127.935764,251.864164 126.841105,253.099987 125.899304,254.43071 C124.001338,257.113411 122.320872,260.002803 121.002901,263.016269 C118.422043,268.915099 117.327288,275.260597 117.098312,281.660365 C116.821089,289.381252 117.906731,296.934244 118.983467,304.49805 C119.746944,309.861287 120.508775,315.229905 120.816402,320.66355 C120.870084,321.611732 120.580215,322.318162 120.174147,322.840987 C119.67725,323.480758 118.952174,323.884003 118.127005,323.995712 C117.876495,324.029625 117.617099,324.035024 117.356582,324.011965 C117.484577,324.534651 117.597584,325.059758 117.695677,325.586651 C117.174097,324.916138 116.619195,324.265468 116.033506,323.636513 C115.996111,323.61768 115.959013,323.598164 115.92224,323.577967 C115.318351,323.246281 114.806858,322.74073 114.484467,322.089845 C113.655038,321.319083 112.776878,320.587951 111.855612,319.900601 C107.061582,316.323807 101.463549,314.203568 95.8479618,314.133271 C90.434387,314.065502 85.0075466,315.908855 80.8349243,319.802002 C72.5415317,327.539189 70.1122264,340.16973 70.025537,351.014473 C69.937679,362.084577 72.4996612,375.370161 82.1516545,382.243406 C86.0234276,385.00027 90.7520396,386.656769 95.5156733,386.704701 C99.4646897,386.744338 103.243202,385.347234 106.963587,384.016255 C108.110883,383.605806 109.252727,383.197607 110.391752,382.826752 C111.685932,382.405635 112.865331,382.432405 113.893343,382.740306 C115.052066,383.087357 116.035472,383.804034 116.770164,384.75992 C117.502013,385.712107 117.981704,386.904146 118.130379,388.152481 C118.274321,389.361075 118.108665,390.616075 117.59693,391.747468 C117.468468,392.032464 117.332956,392.309098 117.191918,392.579243 L119.314896,396.06982 C127.443531,409.401176 135.714387,422.489228 146.560113,433.947752 C152.785403,440.524706 159.384065,446.731343 166.622156,452.164333 L167.666108,452.939363 C168.290786,453.397926 168.983664,453.963277 169.722636,454.56779 C171.833761,456.294785 174.364081,458.610918 176.726402,458.702114 C177.427437,458.729405 178.039351,458.641716 178.596007,458.568656 C179.941197,458.392103 181.069754,458.340429 182.178654,458.792796 C183.070592,459.156655 183.996217,459.836109 184.946764,461.239386 C185.589754,462.189157 185.919757,463.380366 185.919757,464.58899 C185.919757,465.803151 185.585789,467.01782 184.991404,467.977867 C183.761816,469.965279 182.274028,471.196069 180.659998,471.895036 C178.860478,472.674329 176.871763,472.793356 174.804602,472.407812 C169.712247,471.458041 164.074825,467.239995 160.487534,464.487244 L159.793634,463.955793 C151.844827,457.892611 144.311502,451.183932 137.689208,443.681164 C126.410996,430.904705 116.28212,415.848689 111.079427,399.397936 C107.412422,401.806783 102.881874,402.950208 98.1451385,403.130298 C91.2440463,403.392677 83.9399101,401.617185 78.5576512,399.064708 C66.6958247,393.43971 59.491158,382.800577 56.1146872,370.565771 C52.1936424,356.357675 53.4680375,340.022904 58.4318986,327.25949 C58.575778,326.888464 58.726086,326.518853 58.8803498,326.143497 C43.5985335,287.426343 38.8996548,244.433632 40.2086015,203.115315 C40.8208856,183.774991 42.1378979,163.483694 46.7006666,144.621363 C48.7457328,136.167178 52.2988856,128.116079 57.9724129,121.460316 C61.2070569,117.6649 65.1759119,114.710147 69.1629555,111.763497 C72.6161975,109.211357 76.0826624,106.66482 78.9995351,103.47826 L80.3787914,101.965186 C80.6777763,101.636117 80.9759685,101.307454 81.2736592,100.979344 C86.3106517,95.4276453 91.2145536,90.0405508 97.3270646,85.4875161 C104.415913,80.2085647 112.238579,76.0766161 120.36696,72.6449726 C137.877894,65.2548707 156.724758,60.8237145 175.368992,57.3955618 C215.705038,49.9804253 257.111231,49.6145336 296.952736,60.0377029 C315.476362,64.8831627 333.453559,71.5156777 351.400075,78.1402659 C353.066365,78.7553425 354.732396,79.3703242 356.398649,79.9837805 C370.345308,85.1189692 384.299425,90.2322507 398.253681,95.3455836 C404.738788,97.7219564 411.223925,100.09834 417.708591,102.477024 C419.115532,102.993312 420.493005,104.105437 421.277506,105.487155 C422.042901,106.835222 422.27098,108.407355 421.652944,109.972849 C417.67406,120.054017 412.653683,129.512067 406.542734,138.344347 C408.666317,139.78884 410.473469,141.709703 411.840453,143.958053 C413.569392,146.801731 414.593626,150.168239 414.663221,153.739662 C414.896133,165.700777 404.01124,173.809073 394.980617,179.673461 C394.138889,180.220613 393.305596,180.543558 392.500438,180.691739 C401.250639,214.148976 409.62704,247.719489 416.744412,281.555976 L417.233941,283.901433 C424.565981,319.313448 429.29653,355.451715 422.362278,391.334034 C416.391844,422.232721 402.521082,452.053306 380.846725,475.071622 C359.605786,497.631041 331.103479,511.833003 300.264824,514.999146 Z M110.495272,311.28776 C106.721581,299.312294 104.721776,286.282453 106.165636,274.143073 C107.074449,266.512354 109.368685,259.166257 113.104197,252.440473 C115.243764,248.588427 117.851354,245.022366 120.69718,241.663675 L121.678846,240.535639 C122.175837,239.959477 122.670183,239.429924 122.82338,238.766118 C122.912408,238.380358 122.821778,237.958487 122.587325,237.45442 C122.067809,236.338039 121.10233,235.262104 120.198494,234.211885 C119.624057,233.544414 119.063002,232.889328 118.591947,232.251975 C110.321236,221.056257 104.15332,207.727369 106.158244,193.529975 C108.114088,179.678315 117.192141,166.766674 126.856573,157.036217 C148.137108,135.610063 181.12966,130.686468 210.032243,131.868267 C226.857112,132.555657 243.654604,135.520901 259.676942,140.700615 C267.577825,143.255415 275.303028,146.366669 282.810225,149.932632 L284.472443,150.730696 C285.369437,151.165279 286.265532,151.604706 287.162239,152.044441 C293.030279,154.922063 298.920529,157.827792 305.290532,159.392298 C317.7305,162.446932 326.169144,156.013295 335.038795,149.52496 C338.078547,147.301317 341.164746,145.046915 344.445108,143.068497 L345.120241,142.669308 C351.038071,139.238766 358.116293,136.930205 364.915916,137.033742 C370.822209,137.123676 376.520654,139.009529 381.160007,143.466116 C382.1121,144.381832 382.660347,145.380833 382.917621,146.375085 C383.430885,147.094693 383.845256,147.952801 384.115145,148.966558 C385.777036,155.202318 387.431476,161.44255 389.080394,167.68468 L390.428698,166.815888 C394.422641,164.221741 398.764985,161.257116 400.725993,156.91713 C401.480708,155.2467 401.373813,152.46377 400.42261,150.417698 C400.090255,149.702791 399.650689,149.067164 399.043177,148.67041 C398.601185,148.381755 398.068421,148.246268 397.449338,148.296131 C395.944092,148.489931 394.56209,148.269767 393.390083,147.774461 C392.038644,147.203324 390.960812,146.263446 390.261458,145.130839 C389.545364,143.971121 389.218989,142.607599 389.394026,141.193532 C389.544525,139.977703 390.06775,138.707988 391.102916,137.514938 C397.916727,129.661265 403.654861,120.997901 408.015743,111.594362 L379.169174,100.921825 C368.883848,97.1183844 358.596773,93.3198176 348.304805,89.5358807 L342.670222,87.4654882 C323.955855,80.6013392 305.1338,73.8931981 285.671765,69.4739581 C246.994127,60.6920694 206.661712,62.7560598 168.091043,71.0224764 L165.761031,71.5259817 C149.575629,75.055235 133.1726,79.3253389 118.316452,86.7477419 C111.024514,90.3907808 104.093101,94.8207334 98.1406049,100.417682 C95.5118869,102.889305 93.1351621,105.595464 90.7576963,108.29795 C87.4258629,112.085275 84.090069,115.862411 80.1286906,119.052777 L76.4514661,121.997251 C70.9810797,126.405102 66.0470122,130.699703 62.9603442,137.535767 C59.7328273,144.682481 58.1923335,152.578029 56.9353671,160.270468 C53.7654597,179.648863 52.5142446,199.337569 52.6335625,218.966353 C52.8353879,251.92454 57.8426199,284.211358 64.168395,316.384422 C69.2436511,309.121098 76.3729934,303.490278 85.5234859,302.289587 C91.4891438,301.507065 97.4035979,302.619207 102.532186,305.257041 C105.49638,306.781642 108.197898,308.815777 110.495272,311.28776 L110.495272,311.28776 Z M100.908191,350.423334 C94.2261408,347.834587 87.2103416,346.986868 80.1408705,348.224739 C79.4002127,348.353738 78.6938582,348.199555 78.1001518,347.85459 C77.4982713,347.504876 77.0239213,346.951713 76.7663785,346.34094 C76.4686764,345.634927 76.4535045,344.870759 76.7162375,344.192009 C76.9441587,343.603193 77.3785316,343.031332 78.1773552,342.649383 C85.832348,338.99646 94.3407546,337.384398 102.785784,338.531399 L103.620401,338.649901 C107.937828,339.290226 114.008993,340.637776 118.561842,343.290329 C122.138795,345.374311 124.756906,348.247113 125.408189,352.000095 C125.747891,353.955595 125.262438,355.99726 124.135166,357.477244 C123.045354,358.908048 121.379373,359.861881 119.222821,359.800591 C115.418918,359.692366 113.166654,358.08482 110.456849,356.002742 C110.128101,355.750148 109.790992,355.491067 109.440555,355.228789 C106.822136,353.269712 103.960926,351.605772 100.908191,350.423334 Z'
                fill={outlineColor}
            />
        </>
    );
};

GrayShort.config = GrayShortConfig;
export default GrayShort;
