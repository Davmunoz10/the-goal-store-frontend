import React from "react";
import SeccionProductos from "../molecules/SeccionProductos";

export default function ProductosHome() {
  const camisetas = [
    {
      id: 1,
      nombre: "Barcelona Temporada 2025",
      descripcion: "Camiseta oficial del FC Barcelona, con los colores icónicos y diseño moderno para fans de todas las edades.",
      precio: 30000,
      imagen: "https://acdn-us.mitiendanube.com/stores/004/358/419/products/1000028564-adfa914a48fc0fb49917490004432725-1024-1024.jpg"
    },
    {
      id: 2,
      nombre: "Atletico Madrid Temporada 2025",
      descripcion: "Camiseta del Atlético de Madrid con diseño clásico rojiblanco, ideal para mostrar tu pasión por los colchoneros",
      precio: 30000,
      imagen: "https://acdn-us.mitiendanube.com/stores/004/358/419/products/1000032879-808f8165ba9548202817501239148688-1024-1024.jpg"
    },
    {
      id: 3,
      nombre: "Real Madrid Temporada 2025",
      descripcion: "Camiseta oficial del Real Madrid, elegante y cómoda, perfecta para apoyar a los merengues en cada partido.",
      precio: 30000,
      imagen: "https://acdn-us.mitiendanube.com/stores/004/358/419/products/1000043802-88a66fdd926108ee5e17525650628228-1024-1024.jpg"
    },
    {
      id: 4,
      nombre: "Liverpool Temporada 2025",
      descripcion: "Camiseta del Liverpool FC, con tejido de alta calidad y diseño icónico, para apoyar a los reds en cada partido.",
      precio: 30000,
      imagen: "https://acdn-us.mitiendanube.com/stores/004/358/419/products/1000050234-f77e1ba311658f3abc17544695857870-480-0.webp"
    },
    {
      id: 5,
      nombre: "Arsenal FC Temporada 2025",
      descripcion: "Camiseta del Arsenal FC, ligera y duradera, con el clásico diseño rojo y blanco para los fans gunner",
      precio: 30000,
      imagen: "https://acdn-us.mitiendanube.com/stores/004/358/419/products/1000034374-e7ad732f38e631fd9617504460503682-1024-1024.jpg"
    },
    {
      id: 6,
      nombre: "Chelsea FC Temporada 2025",
      descripcion: "Camiseta oficial del Chelsea FC, cómoda y con los colores tradicionales, perfecta para los blue supporters",
      precio: 30000,
      imagen: "https://acdn-us.mitiendanube.com/stores/004/358/419/products/1000043771-734e6b0e3a3824b41917525641108359-640-0.jpg"
    },
    {
      id: 7,
      nombre: "AC Milan Temporada 2025",
      descripcion: "Camiseta del AC Milan con rayas rojas y negras, auténtica y ligera, perfecta para los verdaderos tifosi",
      precio: 30000,
      imagen: "https://acdn-us.mitiendanube.com/stores/004/358/419/products/1000024355-9c841817056bd0e12617479319428077-1024-1024.jpg"
    },
    {
      id: 8,
      nombre: "Inter Milan temporada 2025",
      descripcion: "Camiseta del Inter de Milán con diseño moderno, cómoda y resistente, perfecta para fans nerazzurri",
      precio: 30000,
      imagen: "https://acdn-us.mitiendanube.com/stores/004/358/419/products/1000033640-e7835d1ac6eba6027217502258280370-1024-1024.jpg"
    },
    {
      id: 9,
      nombre: "Napoli FC Temporada 2025",
      descripcion: "Camiseta oficial del Napoli, con su característico azul celeste, ideal para celebrar cada gol con estilo.",
      precio: 30000,
      imagen: "https://acdn-us.mitiendanube.com/stores/004/358/419/products/1000056323-23184b5dcb01f3f84417560891605412-1024-1024.jpg"
    },

    
  ];

  const zapatos = [
    {
      id: 10,
      nombre: "Nike Mercurial Rosados",
      descripcion: "",
      precio: 275000,
      imagen: "https://i.pinimg.com/736x/31/0a/f9/310af929f6bb21c21076e583e2d1c6b6.jpg"
    },
    {
      id: 11,
      nombre: "Nike Mercurial Verdes",
      descripcion: "",
      precio: 299000,
      imagen: "https://i.pinimg.com/736x/95/49/c3/9549c3fae61e9a8b068ff40598ce6440.jpg"
    },
    {
      id: 12,
      nombre: "Nike Hypervenom",
      descripcion: "",
      precio: 150000,
      imagen: "https://i.pinimg.com/1200x/06/83/a4/0683a495d2e4074f3143b83acf51a2cf.jpg"
    },
    {
      id: 13,
      nombre: "Adidas Predator",
      descripcion: "",
      precio: 253000,
      imagen: "https://i.pinimg.com/736x/1b/c5/67/1bc5670c27dbc85966061a5b65a0bd5d.jpg"
    },
    {
      id: 14,
      nombre: "Adidas F50",
      descripcion: "",
      precio: 170000,
      imagen: "https://i.pinimg.com/1200x/81/d8/31/81d831ab2c934669eacbf85c5f0cabbe.jpg"
    },
    {
      id: 15,
      nombre: "Adidas Nemezis",
      descripcion: "",
      precio: 90000,
      imagen: "https://i.pinimg.com/736x/46/4c/70/464c702ddb6084ff15147edd2dc81e74.jpg"
    },
    {
      id: 16,
      nombre: "Puma Retro",
      descripcion: "",
      precio: 100000,
      imagen: "https://i.pinimg.com/736x/9c/8a/63/9c8a63916f33b141c8cc4d2b63fee965.jpg"
    },
    {
      id: 17,
      nombre: "Puma Future",
      descripcion: "",
      precio: 80000,
      imagen: "https://i.pinimg.com/1200x/5b/d7/87/5bd78747501026381093193c4f274bf3.jpg"
    },
    {
      id: 18,
      nombre: "Puma Ultra",
      descripcion: "",
      precio: 120000,
      imagen: "https://i.pinimg.com/1200x/a7/f7/a4/a7f7a4e59c0c3b3f2db608ab09ac5550.jpg"
    },
 
  ];

  return (
    <>
      <SeccionProductos titulo="Camisetas" productos={camisetas} />
      <SeccionProductos titulo="Zapatos de futbol" productos={zapatos} />
    </>
  );
}
