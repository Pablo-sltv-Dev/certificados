import { create_tag_section, get_tag, bto_on, troca_clt, situation_bto } from "../../src/criacoes.js"

alert("Este site ainda está em desenvolvimento")

const bto_dio = document.getElementById("o31q3e2f")

const bto_infinity = document.getElementById("s24r23e")

const bto_estudar = document.getElementById("3qre")

const bto_bradesco = document.getElementById("24rfef")

bto_dio.addEventListener("click", ()=>{
    const section_dio = document.getElementById("d1O")
    troca_clt(section_dio, "deactivated", "active" )
    bto_on([bto_infinity, bto_estudar, bto_bradesco])
    


    const bto_dio_Java = document.getElementById("JV")
    const bto_php = document.getElementById("PH")
    const bto_py = document.getElementById("PN")
    const bto_gi = document.getElementById("GT")
    const bto_js = document.getElementById('JP')
    const bto_no = document.getElementById('NJS')



    bto_dio_Java.addEventListener("click", ()=>{

        const certificados = get_tag("jv_certificado")
        troca_clt(certificados, "deactivated", "crtfcds" )
        bto_on([bto_no,bto_php,bto_py,bto_gi,bto_js], true)
        

        
       

    })

    bto_php.addEventListener("click", ()=>{
        const certificados = get_tag("pp_certificado")
        troca_clt(certificados, "deactivated", "crtfcds" )
        bto_on([bto_no,bto_dio_Java,bto_py,bto_gi,bto_js])


        
       

    })


    bto_py.addEventListener("click", ()=>{
        const certificados = get_tag("pt_certificado")
        troca_clt(certificados, "deactivated", "crtfcds" )
        bto_on([bto_dio_Java,bto_php,bto_gi,bto_js,bto_no])


        
       

    })

    bto_gi.addEventListener("click", ()=>{
        const certificados = get_tag("gh_certificado")
        troca_clt(certificados, "deactivated", "crtfcds" )
        bto_on([bto_dio_Java,bto_php,bto_py,bto_js,bto_no])


        
       

    })

    bto_js.addEventListener("click", ()=>{
        const certificados = get_tag("js_certificado")
        troca_clt(certificados, "deactivated", "crtfcds" )
        bto_on([bto_dio_Java,bto_php,bto_py,bto_gi,bto_no])


        
       

    })

    bto_no.addEventListener("click", ()=>{
        const certificados = get_tag("ndjs_certifcado")
        bto_on([bto_dio_Java,bto_php,bto_py,bto_gi,bto_js])
        troca_clt(certificados, "deactivated", "crtfcds" )

        
       

    })



    return section_dio
})

bto_infinity.addEventListener("click", ()=>{
    const section = document.getElementById("schl")

    troca_clt(section, "deactivated", "active" )
    bto_on([bto_dio, bto_estudar, bto_bradesco])


    const bto_wk = get_tag("wk");
    const bto_SM = get_tag("sm");
    const bto_rg = get_tag("rg");
    
    bto_wk.addEventListener("click", () =>{
        bto_on([bto_SM, bto_rg])
        const certifcados = get_tag("wk_certifcados");
        troca_clt(certifcados, "deactivated", "crtfcds")

    })

    bto_SM.addEventListener("click", ()=>{
        const certificados = get_tag("sm_certificados")
        bto_on([bto_wk, bto_rg])
        troca_clt(certificados, "deactivated", "crtfcds")
    })

    bto_rg.addEventListener("click", ()=>{
        const certificados = get_tag("rkng_certificado")
        bto_on([bto_wk, bto_SM])
        troca_clt(certificados, "deactivated", "crtfcds")
    })


})


bto_estudar.addEventListener("click", ()=>{
    const section = get_tag("smmrcd")
    troca_clt(section, "deactivated", "active")
    bto_on([bto_dio, bto_infinity, bto_bradesco])

    const bto_summer = get_tag("cc50");

    bto_summer.addEventListener("click", ()=>{
        const certifcados = get_tag("sumer_certificado");
        //  bto_on([bto_SM, bto_rg])
        troca_clt(certifcados, "deactivated", "crtfcds")
    })


})

bto_bradesco.addEventListener("click", ()=>{
    const section = get_tag("brdsc")
    troca_clt(section, "deactivated", "active")
    bto_on([bto_dio, bto_estudar,bto_infinity])

    // _________________________-

    const bto_word = get_tag("wd")
    const bto_excel = get_tag("exl")

    bto_word.addEventListener("click", ()=>{
        bto_on([bto_excel])
        const certificados = get_tag("wrd_certificado")
        troca_clt(certificados, "deactivated", "crtfcds")
    })

    bto_excel.addEventListener("click", ()=>{
        bto_on([bto_word])

        const certificados = get_tag("xcl_certificado")
        troca_clt(certificados, "deactivated", "crtfcds")

    })


})
