import React from "react";

export const ArrowLeftSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const ArrowDownSvg: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_120_18)">
      <path
        d="M11.9998 15L7.75684 10.757L9.17184 9.34302L11.9998 12.172L14.8278 9.34302L16.2428 10.757L11.9998 15Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="clip0_120_18">
        <rect width="24" height="24" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowUpSvg: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_2360)">
      <path
        d="M12.0002 10.828L7.05023 15.778L5.63623 14.364L12.0002 8L18.3642 14.364L16.9502 15.778L12.0002 10.828Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_2360">
        <rect width="24" height="24" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);

export const MarkerSvg: React.FC = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
  >
    <g>
      <g>
        <path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,469.729 c-55.847-66.338-152.035-197.217-152.035-284.301c0-83.834,68.202-152.036,152.035-152.036s152.035,68.202,152.035,152.035 C408.034,272.515,311.861,403.37,256,469.729z" />
      </g>
    </g>
    <g>
      <g>
        <path d="M256,92.134c-51.442,0-93.292,41.851-93.292,93.293s41.851,93.293,93.292,93.293s93.291-41.851,93.291-93.293 S307.441,92.134,256,92.134z M256,245.328c-33.03,0-59.9-26.871-59.9-59.901s26.871-59.901,59.9-59.901s59.9,26.871,59.9,59.901 S289.029,245.328,256,245.328z" />
      </g>
    </g>
  </svg>
);

export const HumSvg: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_2337)" filter="url(#filter0_i_1_2337)">
      <path
        d="M12 3.1L7.05 8.05C6.07111 9.029 5.40449 10.2763 5.13445 11.6341C4.86442 12.992 5.00308 14.3994 5.53292 15.6784C6.06275 16.9575 6.95996 18.0507 8.11109 18.8198C9.26222 19.589 10.6156 19.9995 12 19.9995C13.3844 19.9995 14.7378 19.589 15.8889 18.8198C17.04 18.0507 17.9373 16.9575 18.4671 15.6784C18.9969 14.3994 19.1356 12.992 18.8656 11.6341C18.5955 10.2763 17.9289 9.029 16.95 8.05L12 3.1ZM12 0.272003L18.364 6.636C19.6227 7.89468 20.4798 9.49833 20.8271 11.2442C21.1743 12.99 20.9961 14.7996 20.3149 16.4441C19.6337 18.0886 18.4802 19.4942 17.0001 20.4832C15.5201 21.4721 13.78 21.9999 12 21.9999C10.22 21.9999 8.47992 21.4721 6.99988 20.4832C5.51984 19.4942 4.36629 18.0886 3.6851 16.4441C3.00391 14.7996 2.82567 12.99 3.17293 11.2442C3.52019 9.49833 4.37734 7.89468 5.636 6.636L12 0.272003Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_1_2337"
        x="-1"
        y="0"
        width="25"
        height="25"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1_2337"
        />
      </filter>
      <clipPath id="clip0_1_2337">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const WindySvg: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_2334)" filter="url(#filter0_i_1_2334)">
      <path
        d="M10.5 17H4V15H10.5C11.1387 15.0002 11.7653 15.1752 12.3116 15.5061C12.858 15.8369 13.3035 16.311 13.5997 16.8769C13.8959 17.4428 14.0316 18.079 13.992 18.7165C13.9525 19.3541 13.7393 19.9686 13.3755 20.4936C13.0116 21.0186 12.5111 21.434 11.928 21.6949C11.3449 21.9557 10.7016 22.052 10.0677 21.9734C9.43383 21.8947 8.83356 21.6441 8.33194 21.2486C7.83032 20.8532 7.44647 20.328 7.222 19.73L9.095 19.027C9.19118 19.2833 9.35566 19.5084 9.57063 19.6779C9.78559 19.8474 10.0428 19.9548 10.3145 19.9886C10.5862 20.0223 10.8619 19.9811 11.1118 19.8693C11.3617 19.7575 11.5762 19.5795 11.7322 19.3545C11.8881 19.1295 11.9795 18.8661 11.9965 18.5929C12.0135 18.3197 11.9553 18.047 11.8284 17.8045C11.7015 17.5619 11.5106 17.3588 11.2764 17.2169C11.0423 17.0751 10.7738 17.0001 10.5 17ZM5 11H18.5C19.1387 11.0002 19.7653 11.1752 20.3116 11.5061C20.858 11.8369 21.3035 12.311 21.5997 12.8769C21.8959 13.4428 22.0316 14.079 21.992 14.7165C21.9525 15.3541 21.7393 15.9686 21.3755 16.4936C21.0116 17.0186 20.5111 17.434 19.928 17.6949C19.3449 17.9557 18.7016 18.052 18.0677 17.9734C17.4338 17.8947 16.8336 17.6441 16.3319 17.2486C15.8303 16.8532 15.4465 16.328 15.222 15.73L17.095 15.027C17.1912 15.2833 17.3557 15.5084 17.5706 15.6779C17.7856 15.8474 18.0428 15.9548 18.3145 15.9886C18.5862 16.0223 18.8619 15.981 19.1118 15.8693C19.3617 15.7575 19.5762 15.5795 19.7322 15.3545C19.8881 15.1295 19.9795 14.8661 19.9965 14.5929C20.0135 14.3197 19.9553 14.047 19.8284 13.8045C19.7015 13.5619 19.5106 13.3588 19.2764 13.2169C19.0423 13.0751 18.7738 13.0001 18.5 13H5C4.20435 13 3.44129 12.6839 2.87868 12.1213C2.31607 11.5587 2 10.7956 2 10C2 9.20435 2.31607 8.44128 2.87868 7.87867C3.44129 7.31607 4.20435 7 5 7H13.5C13.7738 6.99988 14.0423 6.92485 14.2764 6.78304C14.5106 6.64123 14.7015 6.43805 14.8284 6.1955C14.9553 5.95296 15.0135 5.6803 14.9965 5.40708C14.9795 5.13385 14.8881 4.87047 14.7322 4.64549C14.5762 4.4205 14.3617 4.24247 14.1118 4.13071C13.8619 4.01894 13.5862 3.97769 13.3145 4.01143C13.0428 4.04517 12.7856 4.15261 12.5706 4.3221C12.3557 4.4916 12.1912 4.7167 12.095 4.973L10.222 4.271C10.5105 3.5038 11.059 2.86214 11.7719 2.45781C12.4849 2.05347 13.3171 1.91211 14.1236 2.05834C14.9301 2.20458 15.6597 2.62914 16.1853 3.25805C16.711 3.88696 16.9993 4.68036 17 5.5C17 6.42825 16.6313 7.31849 15.9749 7.97487C15.3185 8.63125 14.4283 9 13.5 9H5C4.73478 9 4.48043 9.10535 4.29289 9.29289C4.10536 9.48042 4 9.73478 4 10C4 10.2652 4.10536 10.5196 4.29289 10.7071C4.48043 10.8946 4.73478 11 5 11Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_1_2334"
        x="-1"
        y="0"
        width="25"
        height="25"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1_2334"
        />
      </filter>
      <clipPath id="clip0_1_2334">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const SearchSvg: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#adb5bd"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export const ClockSvg: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#444e72"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
