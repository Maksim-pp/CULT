import { FC } from 'react'
import { IIconProps } from 'src/shared/lib'

export const Icon: FC<IIconProps> = ({ icons, className }) => {
    switch (icons) {
        case 'arrow':
            return (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path d="M6 6V8H14.59L5 17.59L6.41 19L16 9.41V18H18V6H6Z" fill="#145CEF" />
                </svg>
            )
        case 'arrow-menu':
            return (
                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path d="M1.1084 1.04297L4.49973 4.04297L7.89106 1.04297" stroke="black" stroke-opacity="0.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            )
        case 'chat':
            return (
                <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path d="M6.2837 0.263642C5.79055 0.318436 5.58356 0.351921 5.28523 0.415847C2.91693 0.936386 1.03264 2.79633 0.42382 5.2042C0.177249 6.19049 0.177249 7.29245 0.42382 8.28482C0.560804 8.82363 0.828684 9.52377 1.06612 9.9469C1.24268 10.2665 1.23964 10.3091 0.95958 11.2437C0.6917 12.1356 0.667347 12.2939 0.779979 12.437C0.849993 12.5283 1.00524 12.6044 1.11787 12.6044C1.16049 12.6044 1.541 12.5009 1.96413 12.373C2.97781 12.0717 2.84996 12.0595 3.78754 12.5496C4.69468 13.0275 5.64444 13.2558 6.72509 13.2558C7.78139 13.2589 8.66113 13.0549 9.61698 12.5892C11.3491 11.749 12.5515 10.3 13.0264 8.48878C13.4343 6.92107 13.2821 5.33814 12.588 3.91351C11.6322 1.9592 9.84528 0.641109 7.71442 0.32148C7.40392 0.275819 6.49678 0.239289 6.2837 0.263642ZM4.13152 6.06873C4.51812 6.29399 4.64902 6.72929 4.4542 7.11894C4.30199 7.42335 4.04933 7.58164 3.71448 7.58164C3.42225 7.58164 3.10262 7.35942 2.97781 7.07328C2.91693 6.92716 2.91389 6.62579 2.97477 6.48272C3.04174 6.31834 3.23352 6.12048 3.40703 6.03828C3.61707 5.93783 3.93061 5.95001 4.13152 6.06873ZM7.04472 6.0322C7.68702 6.32139 7.69616 7.20722 7.05994 7.50858C6.50896 7.77037 5.8697 7.3168 5.92754 6.69885C5.96407 6.27572 6.30196 5.96827 6.72509 5.96827C6.84381 5.96827 6.95644 5.99262 7.04472 6.0322ZM10.0705 6.04437C10.5667 6.28486 10.6824 6.95456 10.2958 7.3442C10.1527 7.48423 9.98836 7.56033 9.7844 7.57555C9.44651 7.5999 9.18167 7.45683 9.0112 7.15547C8.92901 7.01239 8.91684 6.9576 8.91684 6.77495C8.91684 6.59535 8.93206 6.53447 9.00816 6.39749C9.11166 6.2118 9.25777 6.0809 9.43433 6.01393C9.59567 5.95609 9.91834 5.96827 10.0705 6.04437Z" fill="#FCFCFC" />
                </svg>
            )
        case 'flagRu':
            return (
                <svg className={className} viewBox="0 -4 28 28"  xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_503_2726)"> 
                        <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="#F5F5F5" stroke-width="0.5"></rect> 
                        <mask id="mask0_503_2726"  maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"> <rect x="0.25" y="0.25" width="27.5" height="19.5" rx="1.75" fill="white" stroke="white" stroke-width="0.5"></rect> </mask> <g mask="url(#mask0_503_2726)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.3333H28V6.66667H0V13.3333Z" fill="#0C47B7"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 20H28V13.3333H0V20Z" fill="#E53B35"></path> </g> </g> <defs> <clipPath id="clip0_503_2726"> <rect width="28" height="20" rx="2" fill="white"></rect> </clipPath> </defs> 
                    </g>
                </svg>
            )
        case 'flagEn': 
            return(
                <svg className={className} viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_503_2952)"> 
                    <rect width="28" height="20" rx="2" fill="white"></rect> <mask id="mask0_503_2952"  maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"> 
                    <rect width="28" height="20" rx="2" fill="white"></rect> </mask> <g mask="url(#mask0_503_2952)"> <rect width="28" height="20" fill="#0A17A7"></rect> 
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-1.28244 -1.91644L10.6667 6.14335V-1.33333H17.3334V6.14335L29.2825 -1.91644L30.7737 0.294324L21.3263 6.66667H28V13.3333H21.3263L30.7737 19.7057L29.2825 21.9165L17.3334 13.8567V21.3333H10.6667V13.8567L-1.28244 21.9165L-2.77362 19.7057L6.67377 13.3333H2.95639e-05V6.66667H6.67377L-2.77362 0.294324L-1.28244 -1.91644Z" fill="white"></path> 
                    <path d="M18.668 6.33219L31.3333 -2" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"></path> 
                    <path d="M20.0128 13.6975L31.3666 21.3503" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"></path> 
                    <path d="M8.00555 6.31046L-3.83746 -1.67099" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"></path> 
                    <path d="M9.29006 13.6049L-3.83746 22.3105" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round"></path> 
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12H12V20H16V12H28V8H16V0H12V8H0V12Z" fill="#E6273E"></path> </g> </g> 
                    <defs> <clipPath id="clip0_503_2952"> <rect width="28" height="20" rx="2" fill="white"></rect> </clipPath> </defs> </g>
                </svg>
            )
        case 'flagFr':
            return (
                <svg className={className} viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                    <g clip-path="url(#clip0_1310_8031)"> <path d="M27.999 0H-0.000976562V20H27.999V0Z" fill="url(#paint0_linear_1310_8031)"></path> 
                    <path d="M27.999 0H13.3324V20H27.999V0Z" fill="url(#paint1_linear_1310_8031)"></path> <path d="M9.33236 0H-0.000976562V20H9.33236V0Z" fill="url(#paint2_linear_1310_8031)"></path>
                    <path d="M18.6657 0H9.33237V20H18.6657V0Z" fill="url(#paint3_linear_1310_8031)"></path> </g> <defs> <linearGradient id="paint0_linear_1310_8031" x1="13.999" y1="0" x2="13.999" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white"></stop> <stop offset="1" stop-color="#F0F0F0"></stop> </linearGradient> 
                    <linearGradient id="paint1_linear_1310_8031" x1="20.6657" y1="0" x2="20.6657" y2="20" gradientUnits="userSpaceOnUse"> 
                    <stop stop-color="#F44653"></stop> <stop offset="1" stop-color="#EE2A39"></stop> </linearGradient> 
                    <linearGradient id="paint2_linear_1310_8031" x1="4.66569" y1="0" x2="4.66569" y2="20" gradientUnits="userSpaceOnUse"> <stop stop-color="#1035BB"></stop> 
                    <stop offset="1" stop-color="#042396"></stop> </linearGradient> <linearGradient id="paint3_linear_1310_8031" x1="13.999" y1="0" x2="13.999" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white"></stop> <stop offset="1" stop-color="#F0F0F0"></stop> </linearGradient> <clipPath id="clip0_1310_8031">
                    <rect width="28" height="20" rx="2" fill="white"></rect> </clipPath> </defs> 
                    </g>
                </svg>
            )
        case 'logo':
            return (
                <svg viewBox="0 0 41 44" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path d="M19.7569 0L19.7987 18.6372V22.6597L19.743 43.3777C19.7408 43.5143 19.7843 43.6477 19.8667 43.7568C19.9491 43.8658 20.0655 43.9441 20.1975 43.9793C20.3296 44.0145 20.4696 44.0046 20.5953 43.951C20.721 43.8975 20.8252 43.8035 20.8913 43.6839L40.4749 13.362L19.7569 0Z" fill="url(#paint0_linear_1409_41)" />
                    <path d="M19.7569 0L0.110626 30.3915C0.0327379 30.5012 -0.00596798 30.6338 0.000747117 30.7681C0.00746222 30.9024 0.0592079 31.0305 0.147642 31.1318C0.236076 31.2331 0.356044 31.3017 0.488208 31.3265C0.620373 31.3512 0.757032 31.3308 0.876155 31.2684L16.0476 24.4204L19.743 22.7571L19.7569 0Z" fill="url(#paint1_linear_1409_41)" />
                    <path d="M0.0270557 30.8996C0.00179201 30.8141 -0.00382029 30.724 0.0106412 30.636C0.0251026 30.548 0.059263 30.4645 0.110567 30.3915L19.7569 0V0.758568L0.110567 31.1084C0.0668293 31.0462 0.0382308 30.9747 0.0270557 30.8996Z" fill="url(#paint2_linear_1409_41)" />
                    <path d="M20.1329 43.9723C20.0181 43.9298 19.9185 43.8543 19.8467 43.7552C19.7749 43.6562 19.734 43.5381 19.7292 43.4158L19.7527 0.000488281L20.1886 0.30632L20.293 44.0002C20.2387 43.9972 20.185 43.9878 20.1329 43.9723Z" fill="url(#paint3_linear_1409_41)" />
                    <defs>
                        <linearGradient id="paint0_linear_1409_41" x1="33.5049" y1="35.815" x2="18.6623" y2="3.42951" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#6BFFFE" />
                            <stop offset="0.29" stop-color="#64F5FE" />
                            <stop offset="0.42" stop-color="#3EBAFB" />
                            <stop offset="0.5" stop-color="#145CEF" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_1409_41" x1="-5.81416" y1="23.5653" x2="17.9608" y2="23.0264" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#7359DE" />
                            <stop offset="0.13" stop-color="#6D52D9" />
                            <stop offset="0.28" stop-color="#6549D4" />
                            <stop offset="0.45" stop-color="#5F43CD" />
                            <stop offset="0.57" stop-color="#5E42CC" />
                            <stop offset="0.67" stop-color="#4428B5" />
                            <stop offset="0.75" stop-color="#391EA8" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_1409_41" x1="0.79794" y1="15.0965" x2="18.9802" y2="16.0207" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#6549D4" />
                            <stop offset="0.23" stop-color="#B8A9F4" />
                            <stop offset="0.65" stop-color="#D0C7F2" />
                            <stop offset="1" stop-color="#3C16D2" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_1409_41" x1="18.6446" y1="21.9319" x2="21.3831" y2="22.0711" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1A5EF0" />
                            <stop offset="0.23" stop-color="#125EF1" />
                            <stop offset="0.99" stop-color="#69FCFE" />
                        </linearGradient>
                    </defs>
                </svg>
            )
        case 'mail':
            return (
                <svg viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path d="M14 0H2C1.60218 0 1.22064 0.158035 0.93934 0.43934C0.658035 0.720644 0.5 1.10218 0.5 1.5V10.5C0.5 10.8978 0.658035 11.2794 0.93934 11.5607C1.22064 11.842 1.60218 12 2 12H14C14.3978 12 14.7794 11.842 15.0607 11.5607C15.342 11.2794 15.5 10.8978 15.5 10.5V1.5C15.5 1.10218 15.342 0.720644 15.0607 0.43934C14.7794 0.158035 14.3978 0 14 0ZM14 3.525L8 7.5255L2 3.525V1.72275L8 5.7225L14 1.72275V3.525Z" fill="#145CEF" />
                </svg>
            )
        case 'phone':
            return (
                <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path d="M1.52677 5.34367C3.02452 8.60528 5.68582 11.1904 8.98957 12.5927L9.52007 12.8291C10.1075 13.0907 10.7685 13.1366 11.3864 12.9586C12.0044 12.7806 12.5397 12.3902 12.8981 11.8563L13.5916 10.8234C13.7001 10.6614 13.7441 10.4646 13.7148 10.2719C13.6855 10.0791 13.585 9.90428 13.4332 9.78188L11.0835 7.88614C11.0016 7.82017 10.9073 7.77141 10.8062 7.7428C10.705 7.71418 10.5991 7.70631 10.4949 7.71964C10.3906 7.73298 10.2901 7.76724 10.1994 7.82039C10.1087 7.87353 10.0297 7.94446 9.96709 8.02891L9.24 9.00954C7.3736 8.08776 5.86287 6.57676 4.94143 4.7102L5.92129 3.98311C6.00573 3.92051 6.07666 3.84149 6.12981 3.7508C6.18295 3.66011 6.21722 3.55961 6.23055 3.45534C6.24389 3.35107 6.23601 3.24518 6.2074 3.14403C6.17879 3.04289 6.13003 2.94856 6.06405 2.86673L4.16832 0.516951C4.04591 0.365178 3.87111 0.264743 3.67834 0.235431C3.48557 0.206119 3.28882 0.250054 3.12683 0.358583L2.08691 1.05603C1.5497 1.41628 1.15783 1.95554 0.9811 2.57774C0.804369 3.19994 0.854256 3.86468 1.12187 4.45353L1.52677 5.34367Z" fill="#145CEF" />
                </svg>
            )
    }
}
