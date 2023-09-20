import React from "react";

export const GlassesTwoConfig = {
    name: "Glasses Two",
    props: [
        {
            name: "outlineColor"
        }
    ],
    width: 405,
    height: 138,
    viewBox: "0 0 405 138"
};

const GlassesTwo = ({ outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M372.311 95.4579C360.17 108.003 339.902 111.603 323.749 104.875C282.273 87.5459 302.574 33.4959 334.561 18.9809C338.557 17.9849 343.894 15.6219 348.761 15.0859C349.201 14.8699 350.159 15.4949 351.32 14.9039C386.591 18.8419 394.623 73.5939 372.311 95.4579ZM238.533 98.6689C224.916 116.73 199.6 122.302 178.916 113.906C138.054 97.8139 152.547 49.8849 180.504 31.0949C239.561 8.90391 263.948 65.3679 238.533 98.6689ZM149.953 58.6509C149.915 58.6329 149.877 58.6239 149.838 58.6059C150.054 58.5109 150.27 58.4159 150.485 58.3189C150.415 58.5019 150.339 58.6829 150.271 58.8659C150.165 58.7929 150.072 58.7079 149.953 58.6509ZM400.423 39.1279C397.089 39.1349 392.273 39.6829 389.513 41.9959C382.707 19.0429 357.585 -2.20009 335.737 13.2899C318.532 18.8229 305.765 31.0939 298.509 47.4079C285.426 39.6259 264.854 42.9489 253.509 53.2399C246.079 28.6889 227.793 20.0919 206.028 18.8229C182.272 14.9319 158.594 38.0029 151.206 56.5109C145.063 55.8119 135.884 53.8569 130.105 57.6479C92.5984 47.8119 27.0234 42.3889 19.3984 47.8539C13.9644 49.9389 10.9824 62.7649 18.5724 63.4569C25.1864 62.5179 17.8004 54.0589 24.4674 53.1359C59.9904 50.9339 94.4754 58.0879 129.622 61.0899C132.76 65.3109 142.899 66.7229 148.308 65.0269C139.789 96.4229 158.179 117.783 185.734 124.181C228.401 133.982 265.522 95.8139 254.365 56.1139C267.29 49.6839 282.157 49.9599 296.237 53.3469C272.709 139.937 412.166 136.052 390.385 44.9629C404.88 52.1729 408.028 40.5829 400.423 39.1279Z'
                fill={outlineColor}
            />
        </>
    );
};

GlassesTwo.config = GlassesTwoConfig;

export default GlassesTwo;