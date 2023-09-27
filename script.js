document.addEventListener("DOMContentLoaded", ()=>{
    const btn = document.getElementById("btn");
    
    btn.addEventListener("click", (e)=>{
        e.preventDefault();
        
        const tema = document.getElementById("tema");
        const cont = document.getElementById("cont");
        const hecho = document.getElementById("hecho");

        if (tema.value.trim() !== ""){

            fetch("https://picsum.photos/200")
                .then(response => {
                const div = document.createElement("div");
                div.classList.add("tema");

                const p = document.createElement("p");
                p.textContent= tema.value + " ";
                
                const img = document.createElement("img");
                img.src = response.url;

                const buttonComp = document.createElement("button");
                buttonComp.textContent="Completo";
                buttonComp.classList.add("btnComp");

                const buttonElim = document.createElement("button");
                buttonElim.textContent="Eliminar";
                buttonElim.classList.add("btnElim");

                const divBtns = document.createElement("div");
                divBtns.classList.add("botones");

                divBtns.appendChild(buttonComp);
                divBtns.appendChild(buttonElim);

                div.appendChild(p);
                div.appendChild(img);
                div.appendChild(divBtns);
                

                cont.appendChild(div);
                
                buttonComp.addEventListener("click", () => {
                    cont.removeChild(div);
                    hecho.appendChild(div);

                    divBtns.removeChild(buttonComp);
                    const buttonDes = document.createElement("button");
                    buttonDes.textContent="Deshacer";
                    buttonDes.classList.add("btnDes");
                    divBtns.appendChild(buttonDes);

                    buttonDes.addEventListener("click", () => {
                        hecho.removeChild(div);
                        divBtns.removeChild(buttonDes);
                        divBtns.insertBefore(buttonComp, buttonElim) 
                        cont.appendChild(div);
                    })
                });
                
                buttonElim.addEventListener("click", () => {
                    if (cont.contains(div)) {
                        cont.removeChild(div)
                    } else if (hecho.contains(div)){
                        hecho.removeChild(div);
                    }
                });

                tema.value="";
            })  


        } else {
            alert("Ingrese un tema nuevo");
        }

    })
})