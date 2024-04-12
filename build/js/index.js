(function(){

    const d = document;

    const btnDark = d.querySelector(".tema__button");
    const body = d.querySelector("BODY");
    const main = d.querySelector("MAIN");
    const theme = d.querySelectorAll(".theme");    
    const fondo = d.querySelector(".main__preparation");

    if(btnDark){
        
        btnDark.addEventListener('click',cambiarTema);

    }

    function cambiarTema(e){

        const classDark = d.querySelector(".dark");

        if(classDark){
            classDark.classList.remove("dark");
            body.classList.remove("dark");
            main.classList.remove("main__dark");
            btnDark.textContent = "Theme Dark";
            fondo.classList.remove("main__preparation-theme");
            theme.forEach(tema=>{
                tema.classList.remove("dartText");
            })            
        }else{
            btnDark.textContent = "Theme Light";
            main.classList.add('main__dark');
            body.classList.add('dark');
            fondo.classList.add("main__preparation-theme");
            theme.forEach(tema=>{
                tema.classList.add("dartText");
            })
        }
    }    

})();

