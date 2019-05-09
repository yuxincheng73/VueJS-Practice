<!-- 1) display a video grid/table/list -->
<!-- 2) for each video, generate a link to the show page -->
<!-- 3) also include title or other things to the link as params -->
<!-- 4) beautify using vue-bootstrap -->

<!-- https://bootstrap-vue.js.org/ -->
<!-- https://router.vuejs.org/ -->
<template>
  <div id="video-index">
    <div class="card" style="width: 18rem;" v-for="(video, i) in videos" :key="i">
      <img class="card-img-top" v-bind:src="video.url">
      <div class="card-body">
        <h5 class="card-title"> {{ video.title }} </h5>
        <p class="card-text"> {{ video.brief }} </p>
        <!-- <router-link class="btn btn-primary" :to="{ path: '/videos/' + video.id }">Play Video</router-link>
        <router-link class="btn btn-primary" :to="{ name: 'videoShow', params: {id: video.id}, query: { test: 'test' } }">Play Video</router-link> -->
        <router-link class="btn btn-primary" :to="{ name: 'videoShow', params: {id: video.id, title: video.title, description: video.description }}">Play Video</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoIndex",
  data: function data() {
    return {
      videos: [
        {
          id: "T184xiF8DC0",
          title: "Cutting Steel",
          url: '/static/image1.jpg',
          brief: 'Watch the power of these tools!',
          description: 'Steel comes in many different forms and thicknesses. Steel thickness is referred to as “gauge.” The smaller the number of gauge, the thicker the steel. Thin-gauge steel, like sheet metal, can be cut with a large variety of tools. Thicker steel – like pipes, tubes and plates – may require the use of power saws and torches. Saws and torches can also be used on thin steel, but are impractical choices unless you\'re cutting high volume or need to cut steel often. For best results, wipe off debris from the surface before making cuts. Make your measurements and mark cut lines on the steel to use as guidelines.',
        },
        {
          id: "pvQBXA2Qv6E",
          title: "C9 Tarik",
          url: '/static/image2.jpg',
          brief: 'C9 on their way to obtaining champ!',
          description: 'Tarik "tarik" Celik (born February 19, 1996) is a Turkish-born American professional Counter-Strike: Global Offensive player and a former Counter-Strike 1.6 player. He currently plays for Cloud9.',
        },
        {
          id: "QU1byle-nmA",
          title: "Go Kart Soccer Battle | Dude Perfect",
          url: '/static/image3.jpg',
          brief: 'Soccer is WAY more fun in Go Karts!!',
          description: 'Best known for trick shots, stereotypes, battles, bottle flips, ping pong shots and all around competitive fun, Dude Perfect prides ourselves in making the absolute best family-friendly entertainment possible! Welcome to the crew!',
        },
        {
          id: "kuUjej-8RQE",
          title: "Ninja Partners With Redbull!!",
          url: '/static/image4.jpg',
          brief: 'Fortnite Battle Royale Gameplay - Ninja',
          description: 'LIVE ON TWITCH: For more Fortnite Battle Royale action watch me live at https://twitch.tv/Ninja You will see highlights, funny moments, impressions, and how to play info that might not make the YouTube channel. Morning Stream - 9am CST Night Stream - 7pm CST If you would like to further support Ninja click here https://goo.gl/y7g2gx OR Subscribe for FREE, try the free trial or connect an Amazon Prime account https://twitch.amazon.com/prime',
        },
        {
          id: "Z6wsAveYQCs",
          title: "Stephen Curry CRAZY PRACTICE/WARMUP MOMENTS",
          url: '/static/image5.jpg',
          brief: 'Chef curry cooking it up like usual',
          description: 'TNX FOR WATCHING!!! Like, Comment, Share, Subscribe for more. Turn on notifications for the next one!',
        },
        {
          id: "fH1sKA7A410",
          title: "J. Cole x Lil Pump Interview (PARODY)",
          url: '/static/image6.jpg',
          brief: 'ESKETIT J.Cole',
          description: 'A lot of you guys ask us where we buy our clothes! If you liked anything we wore in this video, check out the links below!!',
        },
        {
          id: "UG3iDI26ze8",
          title: "Drop On In!: Fails of the Week (June 2018) | FailArmy",
          url: '/static/image7.jpg',
          brief: '►►► SUBMIT YOUR VIDEOS!',
          description: 'The week is coming to a close, and we’ve pulled in the best fails of the week for your viewing pleasure. We’ve got skateboard fails, a crazy fire fail and a funny trampoline fail! Let us know which is your favorite below! See you next week. ',
        },
        {
          id: "mOFvJVroAJE",
          title: "Kygo & Imagine Dragons - Born To Be Yours (Lyric Video)",
          url: '/static/image8.jpg',
          brief: 'Tropical vibes are back! 💃 🌴🏝﻿',
          description: 'Listen to "Born To Be Yours,’ out now: http://smarturl.it/NextToMeID',
        },
      ],
    };
  },
};
</script>

<style scoped>
  p {
    margin: 0px;
    padding: 0px;
  }

  .card-text {
    text-align: center;
    font-size: 75%;
    padding: 0px;
    color: black;
    text-shadow: none;
  }

  .card {
    margin-left: 25px;
    margin-top: 50px;
    float: left;
    width: 286px;
    height: 350px;
  }

  img {
    height: 180px;
    width: 286px;
  }

  .card-body {
    height: 200px;
  }

</style>