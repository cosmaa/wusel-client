<template>
    <div class='div_bg'>
        <canvas id="c" />
    </div>
</template>

<script >
    export default {
        name: "Background",
        mounted: function () {
            //
            var c = document.getElementById("c");
            var ctx = c.getContext("2d");
            c.height = window.innerHeight;
            c.width = window.innerWidth;
            var txts = "wusel.";
            var font_size = 14;
            var columns = c.width / font_size;
            var drops = [];
            for (var x = 0; x < columns;
                 x++
            )
                drops[x] = 1;
            for (var x = 0; x < 5; x++) txts += txts;
            txts = txts.split("");


            function draw() {
                ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
                ctx.fillRect(0, 0, c.width, c.height);
                ctx.fillStyle = "#990096";
                ctx.font = font_size + "px arial";
                for (var i = 0; i < drops.length; i++) {
                    var text = txts[i];
                    ctx.fillText(text, i * font_size, drops[i] * font_size);
                    if (drops[i] * font_size > c.height || Math.random() > 0.98) drops[i] = 0;
                    drops[i]++;
                }
            }
            setInterval(draw, 30)
        }
    }

</script>

<style scoped>

</style>