const selectknowledgeBar = document.querySelector(".knowledge");
let observerbar = new IntersectionObserver(AnimaBar, options={threshold:1});
 
observerbar.observe(selectknowledgeBar);

function AnimaBar(entries)
{
    if (entries[0].isIntersecting){
        let porcentajes = [80,90,90,60]
        document.querySelector(".bar-JS").setAttribute('style','width:'+ porcentajes[0] +'%;');
        document.querySelector(".bar-Html").setAttribute('style','width:'+ porcentajes[1] +'%;');
        document.querySelector(".bar-Css").setAttribute('style','width:'+ porcentajes[2] +'%; ');
        document.querySelector(".bar-En").setAttribute('style','width:'+ porcentajes[3] +'%; ');
        const percentnumber = Array.from(document.querySelectorAll('.percentnumber')); 
        cont=0;
        Timer = setInterval(()=>{
            cont++;
            if(cont==100) clearInterval();
            else{
                if(cont<=porcentajes[0]){
                    percentnumber[0].innerHTML=cont +"%";
                }
                if(cont<=porcentajes[1]){
                    percentnumber[1].innerHTML=cont +"%";
                }
                if(cont<=porcentajes[2]){
                    percentnumber[2].innerHTML=cont +"%";
                }
                if(cont<=porcentajes[3]){
                    percentnumber[3].innerHTML=cont +"%";
                }
            }
        },20)
       
    }
}