const motionToggle = document.getElementById("motion-toggle");// botao para pausar movimentação

if (!(motionToggle instanceof HTMLButtonElement)) {
    throw new Error("O controle de movimento não foi encontrado.");
}

for (const track of document.querySelectorAll(".faixa[data-loop]")) { // data-loop - sinalização para o codigo
    /*
const track of ...: Cria uma variável chamada track (pista/faixa) que representa um item da lista por vez a cada volta do loop, permitindo que o código execute uma ação individualmente para cada elemento encontrado.
    */
    const originalGroup = track.querySelector(".grupo");

    if (!(originalGroup instanceof HTMLElement)) {
        throw new Error("Uma faixa DIO está sem grupo de certificados.");
    }

    const decorativeClone = originalGroup.cloneNode(true);

    if (!(decorativeClone instanceof HTMLElement)) {
        /* O instanceof é um operador de programação usado para verificar se um objeto pertence a uma determinada classe, tipo ou função construtora */
        throw new Error("Não foi possível duplicar uma faixa DIO.");
    }

    decorativeClone.setAttribute("aria-hidden", "true");
    track.append(decorativeClone);
}

let userPaused = false;

function updateMotionState() {
    document.body.classList.toggle("motion-paused", userPaused);
    motionToggle.setAttribute("aria-pressed", String(userPaused));
    motionToggle.textContent = userPaused ? "Retomar movimento" : "Pausar movimento";
}

motionToggle.addEventListener("click", () => {
    userPaused = !userPaused;
    updateMotionState();
});

updateMotionState();