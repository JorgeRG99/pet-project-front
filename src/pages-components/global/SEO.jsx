import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>Adopta una Mascota en Córdoba | Pet4You</title>
      <meta
        name="description"
        content="Únete a nuestra misión en Pet4You para encontrar hogares amorosos para mascotas rescatadas en Córdoba. Explora nuestras adopciones, entrenamientos y servicios de cuidado de mascotas."
      />
      <meta
        name="keywords"
        content="adopción de mascotas, cuidado de mascotas, entrenamiento de mascotas, protectora de animales, adopción en Córdoba"
      />
      <meta name="author" content="Pet4You" />
      <link
        rel="shortcut icon"
        href="./images/favicon.ico"
        type="image/x-icon"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
