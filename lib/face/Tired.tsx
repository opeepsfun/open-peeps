import React from "react";

export const TiredConfig = {
    name: "Tired",
    props: [
        {
            name: "outlineColor"
        }
    ],
    width: 289,
    height: 293,
    viewBox: "0 0 289 293"
};

const Tired = ({ outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M189.06 229.111C195.38 227.638 200.344 232.99 199.102 239.153C197.787 245.677 190.772 247.913 184.89 247.708C178.221 247.477 171.557 246.1 164.855 245.823C157.97 245.539 151.059 245.487 144.17 245.673C137.798 245.845 131.258 246.968 124.936 245.96C122.474 245.567 122.707 242.317 124.309 241.162C129.065 237.732 135.229 236.334 140.835 234.895C146.551 233.427 152.394 232.303 158.256 231.617C164.199 230.922 170.191 230.575 176.173 230.507C178.896 230.476 182.235 231.081 184.89 230.591C186.243 230.34 187.621 229.447 189.06 229.111ZM170.814 144.367C178.366 148.957 189.872 159.66 181.748 171.04C172.186 181.073 158.419 169.569 151.634 164.366C145.344 160.334 138.276 170.705 144.112 175.413C193.136 211.708 213.031 145.567 174.634 138.97C170.406 138.243 168.836 142.947 170.814 144.367ZM116.059 110.092C126.16 108.412 127.927 122.812 117.916 123.818C115.815 124.029 113.726 124.213 111.641 124.396C111.844 125.048 111.979 125.719 112.053 126.409C112.148 126.995 112.219 127.617 112.282 128.328C112.599 131.871 110.087 135.555 107.152 137.273C104.102 139.058 99.7244 139.296 96.6954 137.273C95.1334 136.229 93.5734 135.052 92.7124 133.326C91.5574 131.553 90.9274 129.501 90.8634 127.395C86.2584 128.591 81.5694 130.208 76.9184 131.065C77.0894 131.233 77.2574 131.412 77.4204 131.609C77.5444 131.76 77.3744 132.043 77.1934 131.904L74.8604 131.387C74.1424 131.481 73.4244 131.558 72.7084 131.603L72.7254 131.54C71.5284 131.519 70.5484 130.104 71.6194 128.972C75.7286 124.628 82.1404 121.742 87.9861 119.328L93.6184 117.019C100.82 114.092 108.423 111.362 116.059 110.092ZM197.32 114.546C203.936 113.791 210.487 114.091 217.114 114.495C228.267 115.174 223.589 131.438 214.637 127.683C214.729 128.278 214.753 128.874 214.684 129.429C214.334 132.288 213.402 134.704 210.778 136.24C208.341 137.666 205.252 137.662 202.815 136.24C200.205 134.718 199.028 132.573 198.362 129.786C197.846 127.625 198.053 125.817 198.351 123.677C198.45 122.968 198.759 122.307 199.187 121.713C198.563 121.557 197.938 121.406 197.312 121.265C191.746 119.999 186.255 120.253 180.705 119.451C180.113 119.365 180.019 118.409 180.537 118.166C185.524 115.823 191.864 115.168 197.32 114.546ZM115.04 64.3154C118.858 62.8584 123.654 65.2814 125.603 68.6144C127.815 72.3964 126.87 76.7624 124.14 79.9494C119.952 84.8383 111.976 87.85 106.099 90.6397L105.627 90.8654C99.5906 93.7774 93.3896 96.4515 87.1046 98.7814C80.9236 101.074 74.4936 102.87 68.0856 104.412C64.7066 105.225 61.2556 105.897 57.8026 106.321C55.0766 106.655 52.9746 105.907 50.3666 105.907C49.9856 105.908 49.8666 105.403 50.1776 105.209C52.6146 103.677 54.4236 101.66 57.0816 100.241C59.8496 98.7645 62.6276 97.3124 65.4156 95.8744C71.0526 92.9684 76.4806 89.7344 81.9186 86.4794C87.6506 83.0484 93.2526 79.4354 98.7006 75.5674C104.032 71.7824 108.945 66.6404 115.04 64.3154ZM183.076 61.2035C187.844 60.2785 192.566 62.5345 193.977 67.3935C195.33 72.0485 193.915 73.0465 197.524 76.3775C200.401 79.0322 203.503 81.4016 206.634 83.7347L211.241 87.16C219.586 93.3375 228.001 99.1783 237.596 103.347C238.407 103.699 237.938 104.904 237.169 104.92C221.915 105.214 207.288 103.149 193.519 96.3195C187.087 93.1295 180.625 89.0945 176.898 82.7265C172.581 75.3525 172.707 63.2135 183.076 61.2035Z'
                fill={outlineColor}
            />
        </>
    );
};

Tired.config = TiredConfig;
export default Tired;