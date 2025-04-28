<script setup>
    import endPro from '@/assets/end-procrastination.png'

    const flashCards = new Array(3);

    const contents = [
        {
            id: 1,
            content: 'this is idea 1',
        },
        {
            id: 2,
            content: 'this is idea 2',
        },
        {
            id: 3,
            content: 'this is idea 3',
        }
    ]

</script>
<template>
    <div class="maincontainer">
        <div class="card">
            <div class="thefront">front of card</div>
            <div class="theback">back of card</div>
        </div>
    </div>
    <div class="flex m-auto p-4 justify-center items-center m-h-screen">
        <div class="flex justify-center bg-red-300 items-center m-2 w-[50%] h-150 p-4 border border-red-100 rounded-md shadow-xl">
            <div class="flex justify-center items-center">
                <img class="max-w-full max-h-full" :src="endPro" alt="This image is not available">
            </div>
        </div>       
    </div>

    <div class="flex flex-row m-auto p-4 justify-center m-h-screen">
        <div class="m-2 w-1/2 h-auto p-4 bg-red-100 border border-red-50 rounded-md shadow-lg">
            <div class="text-gray-800 text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>       
    </div>
    <div v-for="card in flashCards" :key="card" class="flex justify-center">
        <div class="flex flex-row m-auto p-4 m-h-screen">
            <div v-for="(content, index) in contents" :key="index" class="flex gap-4 justify-center">
                <div class="m-2 w-full h-auto p-4 bg-red-100 border border-red-50 rounded-md shadow-lg">
                    <div class="text-gray-800 text-sm leading-relaxed">
                        {{ content.content }}
                    </div>
                </div>
            </div>        
        </div>
    </div>

</template>
<style>
    .maincontainer{
        position:relative;
        width: 250px;
        height: 320px;
    }

    .card{
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style:preserve-3d;
        transition: all 0.5s ease;
    }

    .card:hover{
        transform: rotateY(180deg);
    }

    .thefront{
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background: teal;
        color: burlywood;
    }

    .theback{
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background: tomato;
        color: cornsilk;
        transform: rotateY(180deg)
    }
</style>