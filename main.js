canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function draw_logo() {
    ctx.beginPath();
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 4;
    ctx.rect(180, 180, 430, 200);
    ctx.stroke();
    console.log("grey|rect(180, 180, 430, 200)");

    ctx.beginPath();
    ctx.strokeStyle = "dodgerblue";
    ctx.lineWidth = 6.5;
    ctx.arc(290, 260, 40, 0, 2 * Math.PI);
    ctx.stroke();
    console.log("dodgerblue|arc.(290, 260, 40, 0, 2 * Math.PI)");

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6.5;
    ctx.arc(390, 260, 40, 0, 2 * Math.PI);
    ctx.stroke();
    console.log("black|arc.(390, 260, 40, 0, 2 * Math.PI)");

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 6.5;
    ctx.arc(490, 260, 40, 0, 2 * Math.PI);
    ctx.stroke();
    console.log("red|arc.(490, 260, 40, 0, 2 * Math.PI)");

    ctx.beginPath();
    ctx.strokeStyle = "gold";
    ctx.lineWidth = 6.5;
    ctx.arc(340, 300, 40, 0, 2 * Math.PI);
    ctx.stroke();
    console.log("gold|arc.(340, 300, 40, 0, 2 * Math.PI)");

    ctx.beginPath();
    ctx.strokeStyle = "mediumseagreen";
    ctx.lineWidth = 6.5;
    ctx.arc(440, 300, 40, 0, 2 * Math.PI);
    ctx.stroke();
    console.log("mediumseagreen|arc.(440, 300, 40, 0, 2 * Math.PI)");
}
