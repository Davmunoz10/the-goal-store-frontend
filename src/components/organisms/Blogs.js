import React from "react";

export default function Blogs() {
  return (
    <main className="container blogs-page">
      <h1 className="page-title">NOTICIAS IMPORTANTES</h1>

      <article className="blog-entry">
        <div className="blog-text-content">
          <h2 className="entry-title">¿YA TE ENTERASTE?</h2>
          <p className="entry-excerpt">
            Cristiano Ronaldo celebra su décimo aniversario en el mundo de la
            perfumería con su renovada línea CR7 Legacy 2025: ¿Cuánto cuestan en
            Chile?
          </p>
          <a
            href="https://www.elimparcial.com/deporte/2025/07/28/cristiano-ronaldo-celebra-su-decimo-aniversario-en-el-mundo-de-la-perfumeria-con-su-renovada-linea-cr7-legacy-2025-cuanto-cuestan-en-mexico/#google_vignette"
            target="_blank"
            rel="noreferrer"
            className="btn-ver-caso"
          >
            VER CASO
          </a>
        </div>
        <div className="blog-image-placeholder">
          <img
            src="https://www.elimparcial.com/resizer/v2/IOIEYRFWBZCT7CB66DXYFRN6OU.jpg?auth=bdf52e8086de79455b3897029dff76d6fdacf5e27b3e0031bdee9486fc2f39d1&smart=true&width=1200&height=800&quality=70"
            alt="Imagen del Caso Curioso 1"
          />
        </div>
      </article>

      <article className="blog-entry odd-entry">
        <div className="blog-text-content">
          <h2 className="entry-title">¿SE LO MERECÍA?</h2>
          <p className="entry-excerpt">
            Ousmane Dembélé se coronó como mejor futbolista de la temporada tras
            ganar el Balón de Oro 2025
          </p>
          <a
            href="https://cooperativa.cl/noticias/deportes/futbol/balon-de-oro/ousmane-dembele-se-corono-como-mejor-futbolista-de-la-temporada-tras/2025-09-22/180146.html"
            target="_blank"
            rel="noreferrer"
            className="btn-ver-caso"
          >
            VER CASO
          </a>
        </div>
        <div className="blog-image-placeholder">
          <img
            src="https://fotografias.antena3.com/clipping/cmsimages01/2025/09/23/22F0A34D-A8F2-4A7C-A823-33B36A8CC689/ousmane-dembele-balon-oro-2025_98.jpg?crop=1358,764,x0,y145&width=1900&height=1069&optimize=low&format=webply"
            alt="Imagen del Caso Curioso 2"
          />
        </div>
      </article>
    </main>
  );
}
