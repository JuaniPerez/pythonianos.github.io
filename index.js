const linksIndice = document.querySelectorAll(".indice-link");
const offcanvasEl = document.getElementById("indiceLibro");

linksIndice.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.dataset.target;
    const target = document.getElementById(targetId);

    // cerrar menú
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    offcanvas.hide();

    // esperar a que cierre y recién scrollear
    offcanvasEl.addEventListener(
      "hidden.bs.offcanvas",
      () => {
        target.scrollIntoView({ behavior: "smooth" });
      },
      { once: true }
    );
  });
});
