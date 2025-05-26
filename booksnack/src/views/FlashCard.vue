<script setup>
import endPro from "@/assets/end-procrastination.png";
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

var isVisible = ref(false);

const contents = ref([
  {
    frontCardctx: "Personal Vision",
    backCardctx:
      "Create a clear, long-term vision of who you want to be. Example: Write a personal mission statement to stay motivated.",
    flipped: false,
  },
  {
    frontCardctx: "Meaning Over Discipline",
    backCardctx:
      "Motivation driven by purpose is more sustainable than willpower. Example: Work on tasks that align with your values.",
    flipped: false,
  },
  {
    frontCardctx: "To-Do Today Method",
    backCardctx:
      "Use a short, daily to-do list with just 3 important tasks. Example: Keep a sticky note with your top 3 tasks for the day.",
    flipped: false,
  },
  {
    frontCardctx: "Habits Over Goals",
    backCardctx:
      "Focus on consistent habits rather than just setting goals. Example: Instead of aiming to read 10 books, build a habit of reading 15 minutes daily.",
    flipped: false,
  },
  {
    frontCardctx: "Feedback Loops",
    backCardctx:
      "Track your progress visually to stay motivated. Example: Use a habit tracker or streak calendar.",
    flipped: false,
  },
  {
    frontCardctx: "Delay Gratification",
    backCardctx:
      "Train yourself to resist short-term pleasures for long-term gains. Example: Use the 10-minute rule—wait 10 minutes before indulging.",
    flipped: false,
  },
  {
    frontCardctx: "Emotion Management",
    backCardctx:
      "Recognize and regulate emotions that lead to procrastination. Example: Practice mindfulness when feeling overwhelmed.",
    flipped: false,
  },
  {
    frontCardctx: "Flow and Focus",
    backCardctx:
      "Find deep work states by minimizing distractions. Example: Turn off notifications and set 90-minute focus blocks.",
    flipped: false,
  },
  {
    frontCardctx: "Anti-Procrastination Mindset",
    backCardctx:
      "Change your self-talk to empower action. Example: Replace 'I have to' with 'I choose to' or 'I want to.'",
    flipped: false,
  },
  {
    frontCardctx: "Start Small",
    backCardctx:
      "Reduce resistance by starting with tiny steps. Example: If you don’t feel like exercising, just change into workout clothes first.",
    flipped: false,
  },
]);

const toggleFlip = (index) => {
  contents.value[index].flipped = !contents.value[index].flipped;
};

onMounted(() => {
  AOS.init();
  gsap.from(".book-cover", {
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power1.out",
    y: -50,
    stagger: 0.5,
  });
});
</script>
<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div
        class="book-cover flex flex-col m-auto p-4 justify-center items-center h-min mb-10"
      >
        <div
          class="flex justify-center bg-gray-900 items-center m-2 w-full md:w-150 h-150 p-4 border border-red-100 rounded-md shadow-xl"
        >
          <div class="flex justify-center items-center">
            <img
              class="book-cover max-w-full max-h-full"
              :src="endPro"
              alt="The End of Procrastination Book Cover"
            />
          </div>
        </div>
      </div>
      <div
        class="book-cover max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          The End of Procrastination
        </h2>
        <p class="text-lg text-gray-700 mb-2">
          <strong>Authors:</strong> Petr Ludwig and Adela Schicker
        </p>
        <p class="text-base text-gray-700 leading-relaxed mb-4">
          <em>The End of Procrastination</em> is a transformative guide for
          anyone looking to overcome procrastination and take control of their
          time, energy, and mental clarity. Drawing on cutting-edge research in
          neuroscience and psychology, the authors present a framework that
          helps readers understand the true causes behind procrastination—and
          how to defeat them.
        </p>
        <p class="text-base text-gray-700 leading-relaxed mb-4">
          Instead of relying solely on fleeting willpower, Ludwig and Schicker
          advocate for a system rooted in <strong>intrinsic motivation</strong>,
          <strong>purpose-driven goal setting</strong>, and the cultivation of
          <strong>sustainable habits</strong>. Through easy-to-apply tools and
          real-world examples, the book empowers readers to shift from
          distraction and delay toward focus and fulfillment.
        </p>
        <p class="text-base text-gray-700 leading-relaxed mb-4">
          Whether you struggle with daily task management or long-term
          productivity, this book offers a path forward. You'll learn to manage
          your emotions more effectively, build a structure that supports your
          ambitions, and develop routines that keep you aligned with what truly
          matters.
        </p>
        <p class="text-base text-gray-700 leading-relaxed">
          By the end, you'll not only have a toolkit to tackle
          procrastination—you’ll also have a deeper understanding of how to live
          a more intentional and productive life.
        </p>
      </div>
      <div class="book-cover max-w-4xl mx-auto px-6 mt-10 text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">
          10 Things I Learned from This Book
        </h3>
        <p class="text-base text-gray-700">
          Click each card to flip and reveal a key insight from
          <em>The End of Procrastination</em>.
        </p>
      </div>

      <div class="book-cover flex w-full flex-wrap justify-center gap-4 p-4">
        <div
          v-for="(content, index) in contents"
          :key="index"
          data-aos="fade-up"
        >
          <div
            class="maincontainer m-2 p-6 w-[400px] h-[250px] cursor-pointer"
            @click="toggleFlip(index)"
          >
            <div
              class="card w-full h-full rounded-lg shadow-md"
              :class="[
                { flipped: content.flipped },
                index % 3 === 0
                  ? 'bg-rose-800'
                  : index % 3 === 1
                  ? 'bg-teal-800'
                  : 'bg-yellow-800',
              ]"
            >
              <div
                class="thefront flex items-center justify-center p-2 text-center text-xl font-semibold text-white"
              >
                {{ content.frontCardctx }}
              </div>
              <div
                class="theback flex items-center justify-center p-2 text-center text-xl text-gray-700 text-white"
              >
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
* {
  font-family: "Inter", "Segoe UI", "Roboto", "sans-serif";
}
.maincontainer {
  position: relative;
  perspective: 1000px;
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card:hover {
  box-shadow: 0 0 20px rgba(135, 206, 250, 0.8);
}

@keyframes borderGrow {
  from {
    box-shadow: 0 0 10px 5px transparent;
  }
  to {
    box-shadow: 0 0 10px 5px purple;
  }
}

.thefront {
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.theback {
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
}
</style>
