<script>
    import About_Us from './About_Us.vue'
    import LatestCaseSlider from './LatestCaseSlider.vue'
    export default {
        name: 'GiveLife',
        components: {
            About_Us,
            LatestCaseSlider
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
                    <div class="flex flex-col items-start -gap-1 max-w-[400px]">
                        <p
                            class="capitalize text-heading_color font-semibold relative after:content-[''] after:w-[60px] after:h-[1px] after:bg-black after:bg-opacity-20 after:block after:absolute after:-right-full after:top-1/2  -translate-y-1/2 ">
                            About us</p>
                        <h2 class="text-h2 font-bold capitalize -mt-3.5 Playfair text-heading_color leading-[50px]">Your
                            Support
                            is Really
                            Powerful.​</h2>
                    </div>

                </div>
            </div>
        </div>
    </section>


</template>