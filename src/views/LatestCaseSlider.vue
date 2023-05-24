<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    export default {
        name: 'LatestCaseSlider',
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
            }
        },
        // data() {
        //     return {
        //         APIData: [],
        //         swiperOptions: {
        //             breakpoints: {
        //                 320: {
        //                     slidesPerView: 1,
        //                     spaceBetween: 10
        //                 },
        //                 529: {
        //                     slidesPerView: 2,
        //                     spaceBetween: 30
        //                 },
        //                 990: {
        //                     slidesPerView: 3,
        //                 }
        //             }
        //         }
        //     }
        // },
    }
</script>



<template>
    <swiper :slides-per-view="4" :space-between="30" @swiper="onSwiper" @slideChange="onSlideChange" :loop="true"
        class="py-3.5">
        <swiper-slide>
            <div class="rounded overflow-hidden relative shadow-shadow_regular group cursor-pointer  transition-all">
                <div class="relative min-h-[1px] pt-60 overflow-hidden">
                    <img src="../assets/img/slider-img.png" class="w-full object-cover h-full absolute inset-0 ">
                </div>
                <div
                    class="mobile:py-5 py-3.5 mobile:px-3.5 px-2.5 bg-white flex flex-col items-start mobile:gap-8 gap-6">
                    <div class="flex flex-col items-start mobile:gap-2 gap-1">
                        <h6 class="text-h6 text-theme_color font-bold">Medical</h6>
                        <h3 class="text-h4 capitalize font-bold Playfair  text-heading_color leading-0 line-clamp-2">
                            Donate for
                            poor peoples
                            treatment and medicine.</h3>
                        <p class="text-h6 text-subheading_second_color font-normal ">Lorem ipsum dolor sit amet, consete
                            sadipscing elitr, sed diam nonumy....</p>
                    </div>
                    <div class="flex  w-full flex-col gap-1.5">
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Donatone</p>
                            <p class="capitalize text-h6 font-normal">60%</p>
                        </div>
                        <div class="h-2.5 w-full bg-theme_color bg-opacity-20">
                            <div class="  h-full bg-theme_color" style="width: 60%;"></div>
                        </div>
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Raised: $600</p>
                            <p class="capitalize text-h6 font-normal">Goal: $1,000</p>
                        </div>
                    </div>
                    <router-link to="/"
                        class="text-center transition-all border border-theme_color text-theme_color text-h6 px-4 py-2 group-hover:bg-theme_color group-hover:text-white">Donate
                        Now</router-link>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="rounded overflow-hidden relative shadow-shadow_regular group cursor-pointer  transition-all">
                <div class="relative min-h-[1px] pt-60 overflow-hidden">
                    <img src="../assets/img/slider-img.png" class="w-full object-cover h-full absolute inset-0 ">
                </div>
                <div
                    class="mobile:py-5 py-3.5 mobile:px-3.5 px-2.5 bg-white flex flex-col items-start mobile:gap-8 gap-6">
                    <div class="flex flex-col items-start mobile:gap-2 gap-1">
                        <h6 class="text-h6 text-theme_color font-bold">Homeless</h6>
                        <h3 class="text-h4 capitalize font-bold Playfair  text-heading_color leading-0 line-clamp-2">
                            Children we work with</h3>
                        <p class="text-h6 text-subheading_second_color font-normal ">Lorem ipsum dolor sit amet, consete
                            sadipscing elitr, sed diam nonumy....</p>
                    </div>
                    <div class="flex  w-full flex-col gap-1.5">
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Donatone</p>
                            <p class="capitalize text-h6 font-normal">85%</p>
                        </div>
                        <div class="h-2.5 w-full bg-theme_color bg-opacity-20">
                            <div class="  h-full bg-theme_color" style="width: 85%;"></div>
                        </div>
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Raised:$8500</p>
                            <p class="capitalize text-h6 font-normal">Goal: $1,0000</p>
                        </div>
                    </div>
                    <router-link to="/"
                        class="text-center transition-all border border-theme_color text-theme_color text-h6 px-4 py-2 group-hover:bg-theme_color group-hover:text-white">Donate
                        Now</router-link>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="rounded overflow-hidden relative shadow-shadow_regular group cursor-pointer  transition-all">
                <div class="relative min-h-[1px] pt-60 overflow-hidden">
                    <img src="../assets/img/slider-img.png" class="w-full object-cover h-full absolute inset-0 ">
                </div>
                <div
                    class="mobile:py-5 py-3.5 mobile:px-3.5 px-2.5 bg-white flex flex-col items-start mobile:gap-8 gap-6">
                    <div class="flex flex-col items-start mobile:gap-2 gap-1">
                        <h6 class="text-h6 text-theme_color font-bold">Education</h6>
                        <h3 class="text-h4 capitalize font-bold Playfair  text-heading_color leading-0 line-clamp-2">
                            Help For Education</h3>
                        <p class="text-h6 text-subheading_second_color font-normal ">Lorem ipsum dolor sit amet, consete
                            sadipscing elitr, sed diam nonumy....</p>
                    </div>
                    <div class="flex  w-full flex-col gap-1.5">
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Donatone</p>
                            <p class="capitalize text-h6 font-normal">90%</p>
                        </div>
                        <div class="h-2.5 w-full bg-theme_color bg-opacity-20">
                            <div class="  h-full bg-theme_color" style="width: 90%;"></div>
                        </div>
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Raised: $9,000</p>
                            <p class="capitalize text-h6 font-normal">Goal: $10,000</p>
                        </div>
                    </div>
                    <router-link to="/"
                        class="text-center transition-all border border-theme_color text-theme_color text-h6 px-4 py-2 group-hover:bg-theme_color group-hover:text-white">Donate
                        Now</router-link>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="rounded overflow-hidden relative shadow-shadow_regular group cursor-pointer  transition-all">
                <div class="relative min-h-[1px] pt-60 overflow-hidden">
                    <img src="../assets/img/slider-img.png" class="w-full object-cover h-full absolute inset-0 ">
                </div>
                <div
                    class="mobile:py-5 py-3.5 mobile:px-3.5 px-2.5 bg-white flex flex-col items-start mobile:gap-8 gap-6">
                    <div class="flex flex-col items-start mobile:gap-2 gap-1">
                        <h6 class="text-h6 text-theme_color font-bold">Food</h6>
                        <h3 class="text-h4 capitalize font-bold Playfair  text-heading_color leading-0 line-clamp-2">
                            Help For Food</h3>
                        <p class="text-h6 text-subheading_second_color font-normal ">Lorem ipsum dolor sit amet, consete
                            sadipscing elitr, sed diam nonumy....</p>
                    </div>
                    <div class="flex  w-full flex-col gap-1.5">
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Donatone</p>
                            <p class="capitalize text-h6 font-normal">75%</p>
                        </div>
                        <div class="h-2.5 w-full bg-theme_color bg-opacity-20">
                            <div class="  h-full bg-theme_color" style="width: 75%;"></div>
                        </div>
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Raised: $1,500</p>
                            <p class="capitalize text-h6 font-normal">Goal: $2,000</p>
                        </div>
                    </div>
                    <router-link to="/"
                        class="text-center transition-all border border-theme_color text-theme_color text-h6 px-4 py-2 group-hover:bg-theme_color group-hover:text-white">Donate
                        Now</router-link>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="rounded overflow-hidden relative shadow-shadow_regular group cursor-pointer  transition-all">
                <div class="relative min-h-[1px] pt-60 overflow-hidden">
                    <img src="../assets/img/slider-img.png" class="w-full object-cover h-full absolute inset-0 ">
                </div>
                <div
                    class="mobile:py-5 py-3.5 mobile:px-3.5 px-2.5 bg-white flex flex-col items-start mobile:gap-8 gap-6">
                    <div class="flex flex-col items-start mobile:gap-2 gap-1">
                        <h6 class="text-h6 text-theme_color font-bold">Homeless</h6>
                        <h3 class="text-h4 capitalize font-bold Playfair  text-heading_color leading-0 line-clamp-2">
                            Children we work with</h3>
                        <p class="text-h6 text-subheading_second_color font-normal ">Lorem ipsum dolor sit amet, consete
                            sadipscing elitr, sed diam nonumy....</p>
                    </div>
                    <div class="flex  w-full flex-col gap-1.5">
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Donatone</p>
                            <p class="capitalize text-h6 font-normal">85%</p>
                        </div>
                        <div class="h-2.5 w-full bg-theme_color bg-opacity-20">
                            <div class="  h-full bg-theme_color" style="width: 85%;"></div>
                        </div>
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Raised:$8500</p>
                            <p class="capitalize text-h6 font-normal">Goal: $1,0000</p>
                        </div>
                    </div>
                    <router-link to="/"
                        class="text-center transition-all border border-theme_color text-theme_color text-h6 px-4 py-2 group-hover:bg-theme_color group-hover:text-white">Donate
                        Now</router-link>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="rounded overflow-hidden relative shadow-shadow_regular group cursor-pointer  transition-all">
                <div class="relative min-h-[1px] pt-60 overflow-hidden">
                    <img src="../assets/img/slider-img.png" class="w-full object-cover h-full absolute inset-0 ">
                </div>
                <div
                    class="mobile:py-5 py-3.5 mobile:px-3.5 px-2.5 bg-white flex flex-col items-start mobile:gap-8 gap-6">
                    <div class="flex flex-col items-start mobile:gap-2 gap-1">
                        <h6 class="text-h6 text-theme_color font-bold">Education</h6>
                        <h3 class="text-h4 capitalize font-bold Playfair  text-heading_color leading-0 line-clamp-2">
                            Help For Education</h3>
                        <p class="text-h6 text-subheading_second_color font-normal ">Lorem ipsum dolor sit amet, consete
                            sadipscing elitr, sed diam nonumy....</p>
                    </div>
                    <div class="flex  w-full flex-col gap-1.5">
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Donatone</p>
                            <p class="capitalize text-h6 font-normal">90%</p>
                        </div>
                        <div class="h-2.5 w-full bg-theme_color bg-opacity-20">
                            <div class="  h-full bg-theme_color" style="width: 90%;"></div>
                        </div>
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Raised: $9,000</p>
                            <p class="capitalize text-h6 font-normal">Goal: $10,000</p>
                        </div>
                    </div>
                    <router-link to="/"
                        class="text-center transition-all border border-theme_color text-theme_color text-h6 px-4 py-2 group-hover:bg-theme_color group-hover:text-white">Donate
                        Now</router-link>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="rounded overflow-hidden relative shadow-shadow_regular group cursor-pointer  transition-all">
                <div class="relative min-h-[1px] pt-60 overflow-hidden">
                    <img src="../assets/img/slider-img.png" class="w-full object-cover h-full absolute inset-0 ">
                </div>
                <div
                    class="mobile:py-5 py-3.5 mobile:px-3.5 px-2.5 bg-white flex flex-col items-start mobile:gap-8 gap-6">
                    <div class="flex flex-col items-start mobile:gap-2 gap-1">
                        <h6 class="text-h6 text-theme_color font-bold">Medical</h6>
                        <h3 class="text-h4 capitalize font-bold Playfair  text-heading_color leading-0 line-clamp-2">
                            Donate for
                            poor peoples
                            treatment and medicine.</h3>
                        <p class="text-h6 text-subheading_second_color font-normal ">Lorem ipsum dolor sit amet, consete
                            sadipscing elitr, sed diam nonumy....</p>
                    </div>
                    <div class="flex  w-full flex-col gap-1.5">
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Donatone</p>
                            <p class="capitalize text-h6 font-normal">60%</p>
                        </div>
                        <div class="h-2.5 w-full bg-theme_color bg-opacity-20">
                            <div class="  h-full bg-theme_color" style="width: 60%;"></div>
                        </div>
                        <div class="w-full flex justify-between	 items-center">
                            <p class="capitalize text-h6 font-normal">Raised: $600</p>
                            <p class="capitalize text-h6 font-normal">Goal: $1,000</p>
                        </div>
                    </div>
                    <router-link to="/"
                        class="text-center transition-all border border-theme_color text-theme_color text-h6 px-4 py-2 group-hover:bg-theme_color group-hover:text-white">Donate
                        Now</router-link>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>