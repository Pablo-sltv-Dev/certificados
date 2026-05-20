export function create_tag_section(id){
    const tag = document.createElement("section")
    tag.id = String(id)
    tag.classList.add("active")
    return tag
}


export function get_tag(id){
    const tag = document.getElementById(String(id))
    return tag
}

export function bto_on(lista){
    lista.forEach(element => {
        if(element.disabled ===false){
            element.disabled = true;
        }else{
            element.disabled = false
        }
                // element.disabled = ql_
    });
}

export function troca_clt(cl, cl_atual, nv_cl){
    if(cl.classList.contains(cl_atual)){
            cl.classList.remove(cl_atual)
            return cl.classList.add(nv_cl)
    }else{
            cl.classList.remove(nv_cl)
            return cl.classList.add(cl_atual)


    }
}

export function situation_bto(lista, ql_){
    
}
