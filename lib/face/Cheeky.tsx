import React from "react";

export const CheekyConfig = {
    name: "Cheeky",
    props: [
        {
            name: "outlineColor"
        }
    ],
    width: 289,
    height: 293,
    viewBox: "0 0 289 293"
};

const Cheeky = ({ outlineColor = "#000" }) => {
    return (
        <>
            <path
                d='M166.943 221.352C168.477 218.685 172.009 216.214 175.241 216.593C189.72 218.291 189.695 235.845 184.104 246.093C179.147 255.18 168.888 260.514 158.62 259.735C147.833 258.916 138.642 252.574 134.597 242.483C131.922 235.808 130.686 223.485 137.802 219C137.934 218.916 138.152 218.937 138.257 219.058C141.669 223.027 141.803 228.986 144.79 233.405C147.568 237.515 151.884 240.909 156.94 241.433C160.716 241.825 164.536 240.463 166.013 237.073C166.812 235.239 166.721 234.244 166.421 232.982L166.148 231.885C165.202 228.044 164.778 225.119 166.943 221.352ZM170.814 144.367C178.365 148.957 189.871 159.66 181.748 171.04C172.185 181.073 158.418 169.569 151.634 164.366C145.343 160.334 138.275 170.704 144.112 175.413C193.135 211.708 213.03 145.567 174.633 138.97C170.406 138.243 168.835 142.947 170.814 144.367ZM91.071 112.893C95.706 105.939 106.286 106.963 108.839 115.215C110.222 119.685 108.312 123.703 108.411 128.167C108.494 131.938 108.247 136.14 107.091 139.792C104.455 148.12 96.965 154.002 88.104 153.758C79.272 153.515 71.493 147.925 67.794 140.052C64.082 132.149 64.868 123.97 67.578 115.934C67.708 115.548 68.214 115.361 68.519 115.686C71.7224 119.09 74.0674 122.684 76.4939 126.496L78.9805 130.403C80.8808 133.345 83.6426 137.103 87.191 136.867L87.7234 136.815C88.7095 136.73 88.5584 136.926 89.319 135.582C89.671 134.96 89.607 133.804 89.777 133.07L89.836 132.822L89.8039 132.688C89.7288 132.332 89.6543 131.663 89.5938 130.5L89.581 130.244C89.324 124.807 87.787 117.82 91.071 112.893ZM208.563 117.522C207.732 108.628 220.236 106.653 224.393 113.234C226.561 116.666 227.192 120.977 227.672 125.061L227.896 127C228.388 131.195 228.583 135.559 226.762 139.472C223.894 145.635 217.657 148.893 210.929 148.377C204.504 147.883 198.642 144.158 195.552 138.503C192.797 133.457 190.058 123.605 193.404 118.342C193.606 118.023 194.01 117.982 194.287 118.228C197.449 121.035 197.964 126.155 199.844 129.812C201.783 133.584 204.724 137.26 209.181 137.833C213.445 138.381 215.074 136.052 213.986 131.987C212.583 126.739 209.091 123.169 208.563 117.522ZM94.4484 60.0159L96.4933 59.2327C103.499 56.5861 113.118 53.5269 118.814 59.2239C122.328 62.7369 122.997 67.9119 120.489 72.1989C117.45 77.3919 111.999 77.5199 106.735 78.2849C100.748 79.1549 94.6594 80.8089 89.0854 83.1669C82.8064 85.8239 76.9794 89.1359 71.2704 92.8349C65.8444 96.3499 60.4374 102.095 53.9424 103.178C53.6774 103.222 53.3764 103.108 53.3074 102.817C51.8324 96.4669 55.9314 90.2179 59.5894 85.2639C64.0154 79.2659 69.3784 74.3429 75.3724 69.9289C81.1574 65.6679 87.7674 62.5889 94.4484 60.0159ZM221.716 82.5925L222.34 82.483C226.589 81.7758 230.439 81.9386 233.641 85.3035C236.085 87.8705 237.027 91.1975 235.862 94.5915C234.787 97.7225 232.383 100.903 228.894 101.559C217.115 103.775 204.068 103.409 192.23 101.731C186.814 100.963 181.349 100.024 176.073 98.5415L173.646 97.8379C169.242 96.5799 164.2 95.2656 161.001 92.0265C159.851 90.8625 160.514 89.1965 161.89 88.6575C167.472 86.4715 175.123 87.6345 181.075 87.4635C187.999 87.2655 194.934 86.7465 201.825 86.0315C208.559 85.3315 215.075 83.8105 221.716 82.5925Z'
                fill={outlineColor}
            />
        </>
    );
};

Cheeky.config = CheekyConfig;
export default Cheeky;
