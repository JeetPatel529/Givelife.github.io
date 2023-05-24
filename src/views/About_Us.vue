<script>
    export default {
        name: "About_Us"
    }
</script>

<template>

    <section class="py-[7.5rem]">
        <div
            class="desktop:max-w-[1440px] desktop:px-10 laptop:px-8 ipad:px-7 tablet:px-6 mobile:px-4 px-3.5 max-w-[1280px] w-full mx-auto">
            <div class="grid ipad:grid-cols-2 grid-cols-1 items-center h-full laptop:gap-0  gap-10 w-full">
                <div class="h-full w-full">
                    <div class="w-full  laptop:max-w-[480px] h-full  sm:min-h-[490px] min-h-[250px] laptop:max-h-[490px] sm:max-w-[390px] sm:max-h-[400px] max-h-[150px] relative bg-[#219d8033] p-5">
                        <div class="w-full h-full bg-[#D9D9D9]"></div>
                        <div
                            class=" w-full h-full absolute laptop:-bottom-1/4 laptop:-right-1/4 bg-[#219d8033] hidden sm:block sm:bottom-2/4 sm:-right-1/4  p-5 sm:max-w-[250px] sm:max-h-[260px] desktop:max-w-[360px] min-w-[378px] desktop:max-h-[378px] ">
                            <div class="w-full h-full bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex flex-col ipad:gap-10 sm:gap-7 gap-4 items-start ipad:max-w-[433px] desktop:max-w-[80%]">
                    <div class="flex flex-col items-start tablet:gap-2.5 gap-1">
                        <p
                            class="capitalize text-heading_color font-semibold relative after:content-[''] after:w-[60px] after:h-[1px] after:bg-black after:bg-opacity-20 after:block after:absolute after:-right-full after:top-1/2  -translate-y-1/2 ">
                            About us</p>
                        <h2 class="text-h2 font-bold capitalize Playfair text-heading_color">Your Support is Really
                            Powerful.​</h2>
                        <p class="text-h6 text-subheading_color capitalize font-normal ">The secret to happiness lies in
                            helping others. Never
                            underestimate the difference YOU can make in the
                            lives of the poor, the abused and the helpless.</p>
                    </div>
                    <router-link to="/"
                        class="py-3 px-6 focus:border-theme_color focus:bg-transparent focus:text-black focus:rounded-sm  focus:outline-none bg-theme_color text-h6 text-white font-medium border border-transparent hover:bg-transparent hover:border-theme_color hover:text-black transition-all">Read
                        More</router-link>
                </div>
            </div>
        </div>
    </section>




</template>