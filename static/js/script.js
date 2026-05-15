const  bto_dio = document.getElementById("btn-dio");
const  bto_ys = document.getElementById("btn-ys");

const section_dio = document.getElementById("dio");
const section_scl = document.getElementById("infinity_school");

bto_dio.addEventListener("click", ()=>{
    if(section_dio.classList.contains("desactived")){
        bto_ys.disabled = true;
        section_dio.classList.remove("desactived");
        section_dio.classList.add("activated");
        

    }else if(section_dio.classList.contains("activated")){
        bto_ys.disabled = false;
        section_dio.classList.remove("activated");
        section_dio.classList.add("desactived");

    }
    
})

bto_ys.addEventListener("click", ()=>{
    if(section_scl.classList.contains("desactived")){
        
        bto_dio.disabled = true;
        
        section_scl.classList.remove("desactived");
        
        section_scl.classList.add("activated");

    }else if(section_scl.classList.contains("activated")){
        
        bto_dio.disabled = false;
        
        section_scl.classList.remove("activated");

        section_scl.classList.add("desactived");

    }
})
