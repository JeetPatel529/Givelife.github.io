<script>
    import About_Us from './About_Us.vue'
    import LatestCaseSlider from './LatestCaseSlider.vue'
    import Footer from './Footer.vue'
    export default {
        name: 'GiveLife',
        components: {
            About_Us,
            LatestCaseSlider,
            Footer,
        }
    }
</script>

<template>

    <About_Us />


    <section class="py-[7.5rem]">
        <div
            class="desktop:max-w-[1440px] desktop:px-10 laptop:px-8 ipad:px-7 tablet:px-6 mobile:px-4 px-3.5 max-w-[1280px] w-full mx-auto py-3.5">
            <div class="flex flex-col  gap-8">
                <div class="flex items-end justify-between w-full">
                    <div class="flex flex-col items-start -gap-1 max-w-[400px]">
                        <p
                            class="capitalize text-heading_color font-semibold relative after:content-[''] after:w-[60px] after:h-[1px] after:bg-black after:bg-opacity-20 after:block after:absolute after:-right-full after:top-1/2  -translate-y-1/2 ">
                            About us</p>
                        <h2 class="text-h2 font-bold capitalize -mt-3.5 Playfair text-heading_color leading-[50px]">Your
                            Support
                            is Really
                            Powerful.​</h2>
                    </div>
                    <div class="flex gap-2.5 items-stretch">
                        <div
                            class="min-w-[56px] max-w-[56px] w-full min-h-[56px] cursor-pointer max-h-[56px] rounded-full overflow-hidden flex items-center justify-center bg-theme_color bg-opacity-5">
                            <svg width="12" height="20" viewBox="0 0 14 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.729898 11C0.729898 11.3943 0.880445 11.7885 1.18091 12.0891L10.6405 21.5486C11.2422 22.1504 12.2179 22.1504 12.8194 21.5486C13.4209 20.9471 13.4209 19.9717 12.8194 19.3699L4.44901 11L12.8191 2.63007C13.4206 2.02832 13.4206 1.05299 12.8191 0.45153C12.2176 -0.150509 11.242 -0.150509 10.6402 0.45153L1.18061 9.91088C0.880104 10.2116 0.729898 10.6059 0.729898 11Z"
                                    fill="#252A34" />
                            </svg>
                        </div>
                        <div
                            class="min-w-[56px] max-w-[56px] w-full min-h-[56px] cursor-pointer max-h-[56px] rounded-full overflow-hidden flex items-center justify-center bg-theme_color bg-opacity-5">
                            <svg width="12" height="20  " viewBox="0 0 14 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.2701 11C13.2701 11.3943 13.1196 11.7885 12.8191 12.0891L3.3595 21.5486C2.75775 22.1504 1.78212 22.1504 1.18062 21.5486C0.579116 20.9471 0.579116 19.9717 1.18062 19.3699L9.55099 11L1.18091 2.63007C0.579409 2.02832 0.579409 1.05299 1.18091 0.45153C1.78242 -0.150509 2.75805 -0.150509 3.35979 0.45153L12.8194 9.91088C13.1199 10.2116 13.2701 10.6059 13.2701 11Z"
                                    fill="#252A34" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <LatestCaseSlider />
                </div>
            </div>
        </div>
    </section>

    <section class="py-[7.5rem]">
        <div
            class="desktop:max-w-[1440px] desktop:px-10 laptop:px-8 ipad:px-7 tablet:px-6 mobile:px-4 px-3.5 max-w-[1280px] w-full mx-auto py-3.5">
            <div class="flex flex-col  gap-8">
                <div class="flex items-end justify-between w-full">
                    <div class="flex flex-col items-start -gap-1 max-w-[518px]">
                        <p
                            class="capitalize text-heading_color font-semibold relative after:content-[''] after:w-[60px] after:h-[1px] after:bg-black after:bg-opacity-20 after:block after:absolute after:-right-full after:top-1/2  -translate-y-1/2 ">
                            Our Fun Facts</p>
                        <h2 class="text-h2 font-bold capitalize -mt-3.5 Playfair text-heading_color leading-[50px]">Your
                            We Believe that We can Save
                            More Lifes with you​</h2>
                    </div>
                </div>
                <div class="grid laptop:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                    <div class="w-full bg-theme_color bg-opacity-20 py-14 rouded">
                        <div class="flex flex-col items-center justify-center gap-2">
                            <div
                                class="min-w-[120px] max-w-[120px] flex items-center justify-center min-h-[120px] max-h-[120px] rounded-full border-[9px] border-theme_color border-opacity-60 overflow-hidden bg-white">
                                <div class="flex items-center w-full h-full justify-center bg-white">
                                    <svg width="66" height="53" viewBox="0 0 66 53" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M50.3254 19.8H34.6504V25.575C34.6504 29.669 31.3194 33 27.2254 33C23.1313 33 19.8004 29.669 19.8004 25.575V13.035L13.1076 17.0568C11.1173 18.2428 9.90039 20.3981 9.90039 22.7081V27.5859L1.6504 32.3503C0.0725864 33.2578 -0.473976 35.279 0.443836 36.8568L8.69383 51.15C9.60133 52.7278 11.6226 53.264 13.2004 52.3565L23.8635 46.2H37.9504C41.5907 46.2 44.5504 43.2403 44.5504 39.6H46.2004C48.0257 39.6 49.5004 38.1253 49.5004 36.3V29.7H50.3254C51.6969 29.7 52.8004 28.5965 52.8004 27.225V22.275C52.8004 20.9034 51.6969 19.8 50.3254 19.8ZM65.5569 15.9431L57.3069 1.64997C56.3994 0.0721539 54.3782 -0.464096 52.8004 0.443404L42.1372 6.59997H31.5979C30.3604 6.59997 29.1538 6.95059 28.1019 7.60028L24.6473 9.75559C23.6779 10.3537 23.1004 11.4159 23.1004 12.5503V25.575C23.1004 27.854 24.9463 29.7 27.2254 29.7C29.5044 29.7 31.3504 27.854 31.3504 25.575V16.5H50.3254C53.5119 16.5 56.1004 19.0884 56.1004 22.275V25.214L64.3504 20.4496C65.9282 19.5318 66.4644 17.5209 65.5569 15.9431Z"
                                            fill="#219D80" />
                                    </svg>
                                </div>
                            </div>
                            <h2 class="font-bold capitalize text-heading_color text-h2 mt-1.5">4597+</h2>
                            <p class="text-h6 font-semibold capitalize text-subheading_second_color -mt-2">People rised
                            </p>
                        </div>
                    </div>
                    <div class="w-full bg-theme_color bg-opacity-20 py-14 rouded">
                        <div class="flex flex-col items-center justify-center gap-2">
                            <div
                                class="min-w-[120px] max-w-[120px] flex items-center justify-center min-h-[120px] max-h-[120px] rounded-full border-[9px] border-theme_color border-opacity-60 overflow-hidden bg-white">
                                <div class="flex items-center w-full h-full justify-center bg-white">
                                    <svg width="66" height="53" viewBox="0 0 66 53" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4_217)">
                                            <path
                                                d="M13.1996 9.9C15.9324 9.9 18.1496 7.68281 18.1496 4.95C18.1496 2.21719 15.9324 0 13.1996 0C10.4668 0 8.24959 2.21719 8.24959 4.95C8.24959 7.68281 10.4668 9.9 13.1996 9.9ZM52.7996 9.9C55.5324 9.9 57.7496 7.68281 57.7496 4.95C57.7496 2.21719 55.5324 0 52.7996 0C50.0668 0 47.8496 2.21719 47.8496 4.95C47.8496 7.68281 50.0668 9.9 52.7996 9.9ZM65.7624 48.2728L61.2249 36.9291L56.9865 41.7141L56.7802 43.5909L59.6368 50.7272C60.1524 52.0162 61.3899 52.8 62.6996 52.8C63.1121 52.8 63.5246 52.7278 63.9268 52.5628C65.6181 51.8822 66.4431 49.9641 65.7624 48.2728ZM62.2356 26.6372L60.3277 18.3666C59.8534 16.3041 58.4096 14.5716 56.4605 13.7362C54.5527 12.9112 52.4387 13.0453 50.6752 14.0766C48.3343 15.4584 46.5812 17.6344 45.7149 20.2022L44.5496 23.6981L42.8996 24.75V14.85C42.8996 13.9425 42.1571 13.2 41.2496 13.2H24.7496C23.8421 13.2 23.0996 13.9425 23.0996 14.85V24.75L21.4393 23.6981L20.274 20.2022C19.418 17.6241 17.6546 15.4584 15.3137 14.0766C13.5399 13.0453 11.4362 12.9112 9.52835 13.7362C7.57928 14.5716 6.13553 16.3041 5.66116 18.3666L3.76366 26.6372C3.28928 28.6997 3.83584 30.8859 5.24866 32.4844L12.1787 40.3116L13.2202 49.8609C13.4058 51.5419 14.829 52.8 16.4996 52.8C16.6233 52.8 16.7368 52.7897 16.8605 52.7794C18.6755 52.5834 19.9749 50.9541 19.779 49.1391L18.7374 39.5691C18.5827 38.2284 18.0259 36.9806 17.1287 35.9597L12.6633 30.9066L14.4783 23.6569L15.1796 25.7606C15.6024 27.0497 16.4068 28.1737 17.7062 29.1225L22.9759 32.4741C23.4502 32.7731 24.2237 32.9484 24.7496 32.9897H41.2496C41.7755 32.9484 42.549 32.7731 43.0234 32.4741L48.293 29.1225C49.5924 28.1737 50.3968 27.06 50.8196 25.7606L51.5209 23.6569L53.3359 30.9066L48.8705 35.9597C47.9734 36.9806 47.4165 38.2284 47.2618 39.5691L46.2202 49.1391C46.0243 50.9541 47.334 52.5834 49.1387 52.7794C49.2624 52.7897 49.3759 52.8 49.4996 52.8C51.1599 52.8 52.5934 51.5522 52.779 49.8609L53.8206 40.3116L60.7505 32.4844C62.153 30.8859 62.7099 28.6997 62.2356 26.6372ZM4.77428 36.9291L0.236779 48.2728C-0.443846 49.9641 0.381154 51.8822 2.0724 52.5628C3.80491 53.2434 5.69209 52.3875 6.36241 50.7272L9.21897 43.5909L9.01272 41.7141L4.77428 36.9291Z"
                                                fill="#219D80" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4_217">
                                                <rect width="66" height="52.8" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <h2 class="font-bold capitalize text-heading_color text-h2 mt-1.5">8945+</h2>
                            <p class="text-h6 font-semibold capitalize text-subheading_second_color -mt-2">Volunteer</p>
                        </div>
                    </div>
                    <div class="w-full bg-theme_color bg-opacity-20 py-14 rouded">
                        <div class="flex flex-col items-center justify-center gap-2">
                            <div
                                class="min-w-[120px] max-w-[120px] flex items-center justify-center min-h-[120px] max-h-[120px] rounded-full border-[9px] border-theme_color border-opacity-60 overflow-hidden bg-white">
                                <div class="flex items-center w-full h-full justify-center bg-white">
                                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_4_229)">
                                            <path
                                                d="M37.1252 21.5531V17.9308C33.49 13.2515 31.0537 7.70854 30.1513 1.79174C29.8806 0.0515078 27.7021 -0.631695 26.5677 0.721821C23.8478 3.93159 21.708 7.69565 20.2642 11.8722C24.6728 16.8093 30.5767 20.1996 37.1252 21.5531ZM51.5627 8.24995C45.865 8.24995 41.2502 12.8777 41.2502 18.5753V26.2324C27.7924 25.4332 16.3713 17.1445 11.215 5.38823C10.506 3.7769 8.22438 3.68667 7.47673 5.27221C5.33688 9.79682 4.12516 14.8499 4.12516 20.1867C4.12516 29.3132 8.52087 37.8339 15.0951 44.1503C16.7966 45.7875 18.4595 47.141 20.1095 48.3785L1.55993 53.0191C0.180633 53.3671 -0.438117 54.9656 0.33532 56.1644C2.57829 59.632 8.12126 65.5101 20.0838 66C21.115 66.0386 22.1463 65.6648 22.9326 64.9816L31.3373 57.75H41.2502C52.6455 57.75 61.8752 48.5332 61.8752 37.1378V16.4999L66.0002 8.24995H51.5627ZM51.5627 20.6378C50.4283 20.6378 49.5002 19.7097 49.5002 18.5753C49.5002 17.441 50.4283 16.5128 51.5627 16.5128C52.697 16.5128 53.6252 17.441 53.6252 18.5753C53.6252 19.7097 52.697 20.6378 51.5627 20.6378Z"
                                                fill="#219D80" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4_229">
                                                <rect width="66" height="66" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <h2 class="font-bold capitalize text-heading_color text-h2 mt-1.5">10M+</h2>
                            <p class="text-h6 font-semibold capitalize text-subheading_second_color -mt-2">poor People
                                Saved</p>
                        </div>
                    </div>
                    <div class="w-full bg-theme_color bg-opacity-20 py-14 rouded">
                        <div class="flex flex-col items-center justify-center gap-2">
                            <div
                                class="min-w-[120px] max-w-[120px] flex items-center justify-center min-h-[120px] max-h-[120px] rounded-full border-[9px] border-theme_color border-opacity-60 overflow-hidden bg-white">
                                <div class="flex items-center w-full h-full justify-center bg-white">
                                    <svg width="66" height="69" viewBox="0 0 66 69" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M33 1.06458C14.7742 1.06458 0 15.8387 0 34.0646C0 52.2904 14.7742 67.0646 33 67.0646C51.2258 67.0646 66 52.2904 66 34.0646C66 15.8387 51.2258 1.06458 33 1.06458ZM31.4911 33.0307C31.1065 33.672 30.4132 34.0646 29.6654 34.0646H29.6242C29.06 34.0646 28.5184 34.2895 28.1192 34.6886L27.3661 35.4418C26.9509 35.857 26.9509 36.5316 27.3661 36.9468L28.1192 37.6999C28.5184 38.0991 28.7433 38.6407 28.7433 39.2049V40.4517C28.7433 41.628 27.7905 42.5807 26.6142 42.5807H25.8012C24.9948 42.5807 24.2577 42.1256 23.8971 41.4031L20.8871 35.3846C20.5625 34.7352 19.6962 34.5942 19.1826 35.1078L16.5918 37.6972C16.1926 38.0964 15.651 38.3213 15.0869 38.3213H6.76101C6.53613 36.9321 6.3871 35.5176 6.3871 34.0646C6.3871 19.3902 18.3256 7.45167 33 7.45167C35.8622 7.45167 38.6153 7.91873 41.2008 8.75837L34.5263 13.8853C33.8463 14.3391 33.9102 15.357 34.6407 15.723L36.0818 16.4428C36.803 16.8034 37.2581 17.5406 37.2581 18.347V28.742C37.2581 29.3301 36.7817 29.8065 36.1936 29.8065H35.7864C35.3832 29.8065 35.0146 29.579 34.835 29.2184C34.6274 28.8032 34.0419 28.7806 33.8024 29.1784L31.4911 33.0307ZM54.2903 47.6944C54.2903 48.2586 54.0654 48.8001 53.6663 49.1993L52.3928 50.4728C51.9936 50.872 51.4521 51.0968 50.8879 51.0968H48.8706C48.3064 51.0968 47.7648 50.872 47.3656 50.4728L45.6345 48.7416C45.1995 48.3067 44.6594 47.9918 44.0666 47.8276C43.4739 47.6635 42.8487 47.6556 42.252 47.8048L39.4217 48.5127C39.2527 48.5553 39.0797 48.5766 38.9054 48.5766H37.5295C36.9653 48.5766 36.4238 48.3517 36.0246 47.9525L34.4398 46.3677C34.2403 46.1679 34.1283 45.897 34.1284 45.6146V44.2573C34.1284 43.8222 34.3932 43.431 34.7977 43.2687L40.0325 41.1742C40.2959 41.0691 40.5461 40.932 40.7763 40.7684L43.9313 38.5209C44.1115 38.3925 44.3274 38.3237 44.5487 38.324H46.1574C46.5872 38.324 46.9758 38.5821 47.1408 38.98L47.8527 40.6899C47.8931 40.7868 47.9613 40.8696 48.0486 40.9278C48.136 40.9861 48.2387 41.0172 48.3437 41.0172H48.8493C49.0862 41.0172 49.2951 40.8602 49.3603 40.634L49.9192 38.7085C49.9857 38.481 50.1933 38.3253 50.4301 38.3253H51.2365C51.5306 38.3253 51.7688 38.5635 51.7688 38.8576V40.5781C51.7688 40.8602 51.8805 41.1316 52.0801 41.3312L53.6649 42.916C54.0641 43.3152 54.289 43.8568 54.289 44.421V47.6944H54.2903Z"
                                            fill="#219D80" />
                                    </svg>
                                </div>
                            </div>
                            <h2 class="font-bold capitalize text-heading_color text-h2 mt-1.5">100+</h2>
                            <p class="text-h6 font-semibold capitalize text-subheading_second_color -mt-2">Country
                                Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <Footer />

</template>