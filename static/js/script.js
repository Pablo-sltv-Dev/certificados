const motionToggle = document.getElementById("motion-toggle");

if (!(motionToggle instanceof HTMLButtonElement)) {
    throw new Error("O controle de movimento não foi encontrado.");
}

for (const track of document.querySelectorAll(".faixa[data-loop]")) {
    const originalGroup = track.querySelector(".grupo");

    if (!(originalGroup instanceof HTMLElement)) {
        throw new Error("Uma faixa DIO está sem grupo de certificados.");
    }

    const decorativeClone = originalGroup.cloneNode(true);

    if (!(decorativeClone instanceof HTMLElement)) {
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