# Filmify API

Filmify es una API para gestionar películas, diseñada para facilitar la visualización, creación y modificación de datos relacionados con el mundo del cine. La API está construida con **NestJS** y utiliza **PostgreSQL** como sistema de gestión de bases de datos.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Usadas](#tecnologías-usadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Configuración](#configuración)
- [Scripts](#scripts)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Características

- Gestión de películas: CRUD (Crear, Leer, Actualizar, Eliminar) para películas.
- Integración con Cloudinary para el manejo de imágenes.
- Validación de datos de entrada mediante **class-validator**.
- Documentación de la API generada automáticamente con **Swagger**.
- Conexión a base de datos **PostgreSQL**.

## Tecnologías Usadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Cloudinary](https://cloudinary.com/)
- [Swagger](https://swagger.io/)

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/TrujiDev/filmify.git
   cd filmify
   ```

2. **Instalar dependencias**:

   Asegúrate de tener [PNPM](https://pnpm.js.org/) instalado y ejecuta:

   ```bash
   pnpm install
   ```

3. **Configurar el archivo `.env`**:

   Crea un archivo `.env` en la raíz del proyecto basado en el archivo `.env.example`. Completa las variables con la información adecuada para Cloudinary y PostgreSQL:

   ```plaintext
   CLOUDINARY_URL=
   CLOUDINARY_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   
   PGHOST=
   PGDATABASE=
   PGUSER=
   PGPASSWORD=
   ```

## Uso

1. **Iniciar el servidor en modo de desarrollo**:

   ```bash
   pnpm start:dev
   ```

2. **Acceder a la API**:

   Una vez que el servidor esté en funcionamiento, puedes acceder a la API en `https://filmify-production.up.railway.app/api`.

3. **Documentación de la API**:

   La documentación de la API está disponible en `https://filmify-production.up.railway.app/api`, donde puedes explorar los endpoints y sus respectivas funcionalidades.

## Scripts

| Comando              | Descripción                                          |
|---------------------|------------------------------------------------------|
| `pnpm build`        | Compila la aplicación para producción.               |
| `pnpm start`        | Inicia el servidor en modo producción.               |
| `pnpm start:dev`    | Inicia el servidor en modo de desarrollo.            |
| `pnpm lint`         | Verifica el código en busca de errores de estilo.   |
| `pnpm test`         | Ejecuta las pruebas unitarias.                       |
| `pnpm test:e2e`     | Ejecuta las pruebas de extremo a extremo.           |

## Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir a Filmify, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu característica o corrección (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva característica'`).
4. Envía un pull request.

## Licencia

Este proyecto está bajo la Licencia [UNLICENSED](https://opensource.org/licenses/unlicense).

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

- **Correo electrónico**: [eetgrisales@gmail.com](mailto:eetgrisales@gmail.com)
- **LinkedIn**: [trujidev](https://www.linkedin.com/in/trujidev/)
- **GitHub**: [TrujiDev](https://github.com/TrujiDev)

---