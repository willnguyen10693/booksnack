<script setup>
    import endPro from '@/assets/end-procrastination.png'
    import { ref, onMounted } from 'vue';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import { gsap } from "gsap";

    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { ScrollSmoother } from "gsap/ScrollSmoother";

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    var isVisible = ref(false);

    const contents = ref([
        {
            frontCardctx: "1. Personal Vision",
            backCardctx: "Create a clear, long-term vision of who you want to be. Example: Write a personal mission statement to stay motivated.",
            flipped: false
        },
        {
            frontCardctx: "2. Meaning Over Discipline",
            backCardctx: "Motivation driven by purpose is more sustainable than willpower. Example: Work on tasks that align with your values.",
            flipped: false
        },
        {
            frontCardctx: "3. To-Do Today Method",
            backCardctx: "Use a short, daily to-do list with just 3 important tasks. Example: Keep a sticky note with your top 3 tasks for the day.",
            flipped: false
        },
        {
            frontCardctx: "4. Habits Over Goals",
            backCardctx: "Focus on consistent habits rather than just setting goals. Example: Instead of aiming to read 10 books, build a habit of reading 15 minutes daily.",
            flipped: false
        },
        {
            frontCardctx: "5. Feedback Loops",
            backCardctx: "Track your progress visually to stay motivated. Example: Use a habit tracker or streak calendar.",
            flipped: false
        },
        {
            frontCardctx: "6. Delay Gratification",
            backCardctx: "Train yourself to resist short-term pleasures for long-term gains. Example: Use the 10-minute rule—wait 10 minutes before indulging.",
            flipped: false
        },
        {
            frontCardctx: "7. Emotion Management",
            backCardctx: "Recognize and regulate emotions that lead to procrastination. Example: Practice mindfulness when feeling overwhelmed.",
            flipped: false
        },
        {
            frontCardctx: "8. Flow and Focus",
            backCardctx: "Find deep work states by minimizing distractions. Example: Turn off notifications and set 90-minute focus blocks.",
            flipped: false
        },
        {
            frontCardctx: "9. Anti-Procrastination Mindset",
            backCardctx: "Change your self-talk to empower action. Example: Replace 'I have to' with 'I choose to' or 'I want to.'",
            flipped: false
        },
        {
            frontCardctx: "10. Start Small",
            backCardctx: "Reduce resistance by starting with tiny steps. Example: If you don’t feel like exercising, just change into workout clothes first.",
            flipped: false
        }
    ])

    const toggleFlip = (index) => {
        console.log(index);
        contents.value[index].flipped = !contents.value[index].flipped;
    }

    const displayCard = () => {
        isVisible.value = !isVisible.value;        
    }

    onMounted(() => {
        AOS.init();
        gsap.from(".book-cover", {
            opacity:0,
            duration:1,
            delay:0.5,
            ease: "power1.out",
            y: -50,
            stagger: 0.5,
        });
    });
</script>
<template>
    <div id="smooth-wrapper">
        <div id="smooth-content">
            <div class="book-cover flex flex-col m-auto p-4 justify-center items-center h-min">
                <div class="flex justify-center bg-gray-900 items-center m-2 w-full md:w-150 h-150 p-4 border border-red-100 rounded-md shadow-xl">
                    <div class="flex justify-center items-center">
                        <img class="book-cover max-w-full max-h-full" :src="endPro" alt="The End of Procrastination Book Cover">
                    </div>
                </div>       
            </div>
            <div class="book-cover max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl">
                <div class="flex flex-col items-center">
                        <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">The End of Procrastination</h2>
                        <p class="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                            <strong>Authors:</strong> Petr Ludwig and Adela Schicker<br>
                            This book helps readers fight procrastination using science-based tools and practical strategies. Instead of relying on willpower, it emphasizes motivation through meaningful goals, structured habits, and emotional self-management. The book combines insights from neuroscience and psychology to help people become more focused, efficient, and fulfilled.
                        </p>
                        <a @click="displayCard()" class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Learn More</a>
                </div>
            </div>
           

            <div v-show="isVisible" class="card-display flex w-full flex-wrap justify-center gap-4 p-4">
                <div v-for="(content, index) in contents" :key="index" data-aos="fade-up">
                    <div class="maincontainer m-2 p-6 w-[400px] h-[250px] cursor-pointer" @click="toggleFlip(index)">
                        <div class="card w-full h-full border-x-4 border-indigo-500 rounded-lg shadow-md" :class="{flipped: content.flipped}" ref="focusCard">
                            <div class="thefront flex items-center justify-center p-2 text-center text-xl font-semibold">
                                {{ content.frontCardctx }}
                            </div>
                            <div class="theback flex items-center justify-center p-2 text-center text-xl text-gray-700">
                                {{ content.backCardctx }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    *{
        font-family: 'Inter', 'Segoe UI', 'Roboto', 'sans-serif';
    }
    .maincontainer{
        position: relative;
        perspective: 1000px;
    }

    .card{
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: all 0.8s ease;
    }

    .card.flipped{
        transform: rotateY(180deg);
    }

    .card:hover{
        box-shadow: 0 0 20px rgba(135, 206, 250, 0.8);
    }

    @keyframes borderGrow {
        from{box-shadow:0 0 10px 5px transparent}
        to{box-shadow: 0 0 10px 5px purple;}
    }

    .thefront{
        position: absolute;
        backface-visibility: hidden;
        width: 100%;
        height: 100%;
        color: #2c3e50;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
        font-weight: 600;
        text-align: center;
    }

    .theback{
        position: absolute;
        backface-visibility: hidden;
        width: 100%;
        height: 100%;
        color: #3c3c5a;
        transform: rotateY(180deg);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
        text-align: center;
    }
</style>