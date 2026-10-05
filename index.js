const frase = document.getElementById("frase");
const dado = document.getElementById("dado");

async function obtenerConsejo() {
    dado.disabled = true;
    try {
        const res = await fetch("https://api.adviceslip.com/advice");
        if (!res.ok) throw new Error("La API respondió con un error");

        const { slip } = await res.json();
        frase.textContent = `“${slip.advice}”`;
    } catch (error) {
        frase.textContent = "No se pudo cargar la frase.";
        console.error(error);
    } finally {
        setTimeout(() => (dado.disabled = false), 2000);
    }
}

dado.addEventListener("click", obtenerConsejo);
obtenerConsejo();