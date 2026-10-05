
const fotos=['foto1.jpg','foto2.jpg','foto3.jpg','foto4.jpg','foto5.jpg','foto6.jpg','foto7.jpg'];
let i=0;
setInterval(()=>{
i=(i+1)%fotos.length;
document.getElementById('slide').src=fotos[i];
},2500);

const objetivo=new Date('2026-10-17T10:00:00').getTime();
setInterval(()=>{
const d=objetivo-Date.now();
const dias=Math.floor(d/86400000);
const horas=Math.floor((d%86400000)/3600000);
const min=Math.floor((d%3600000)/60000);
const seg=Math.floor((d%60000)/1000);
document.getElementById('countdown').innerHTML=`⏳ ${dias} días ${horas}h ${min}m ${seg}s`;
},1000);

window.onload=()=>{
confetti({particleCount:250,spread:180,origin:{y:0.4}});
};

document.addEventListener('click',()=>{
document.getElementById('bgm').play();
},{once:true});
