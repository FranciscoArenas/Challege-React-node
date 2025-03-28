-- Conectar como usuario postgres
\c postgres postgres;

-- Crear base de datos (si no existe)
SELECT 'CREATE DATABASE posts_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'posts_db')\gexec

-- Conectar a la base de datos posts_db
\c posts_db;

-- Crear schema public si no existe
CREATE SCHEMA IF NOT EXISTS public;

-- Crear tabla posts si no existe
DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Otorgar privilegios
GRANT ALL PRIVILEGES ON DATABASE posts_db TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON TABLE posts TO postgres;


INSERT INTO posts (name, description) VALUES
    ('Francisco Arenas', 'Creador del Challenger'),
    ('Desarrollo Web Frontend', 'Introducción a HTML, CSS y JavaScript para desarrollo web moderno'),
    ('React Básico', 'Fundamentos de React y creación de componentes'),
    ('Node.js Fundamentos', 'Introducción a Node.js y su ecosistema'),
    ('PostgreSQL Avanzado', 'Optimización y administración de bases de datos PostgreSQL'),
    ('Docker en Producción', 'Implementación de contenedores Docker en ambientes productivos'),
    ('Git Workflow', 'Flujos de trabajo con Git y control de versiones'),
    ('API REST', 'Diseño y desarrollo de APIs RESTful'),
    ('Redux Toolkit', 'Gestión de estado con Redux Toolkit en aplicaciones React'),
    ('Testing con Jest', 'Pruebas unitarias y de integración usando Jest'),
    ('TypeScript en React', 'Desarrollo de aplicaciones React con TypeScript'),
    ('CI/CD Pipeline', 'Implementación de integración y despliegue continuo'),
    ('Serverless Computing', 'Arquitecturas serverless y computación en la nube'),
    ('GraphQL Básico', 'Introducción a GraphQL y sus ventajas'),
    ('MongoDB NoSQL', 'Bases de datos NoSQL con MongoDB'),
    ('Express.js', 'Desarrollo de aplicaciones web con Express.js'),
    ('React Native', 'Desarrollo de aplicaciones móviles multiplataforma'),
    ('AWS Services', 'Servicios principales de Amazon Web Services'),
    ('Microservicios', 'Arquitectura de microservicios y mejores prácticas'),
    ('WebSockets', 'Comunicación en tiempo real con WebSockets'),
    ('SEO Optimization', 'Optimización para motores de búsqueda'),
    ('Performance Web', 'Optimización del rendimiento en aplicaciones web'),
    ('UX/UI Design', 'Principios de diseño de experiencia de usuario'),
    ('Seguridad Web', 'Mejores prácticas de seguridad en aplicaciones web'),
    ('PWA Development', 'Desarrollo de Progressive Web Apps'),
    ('Clean Code', 'Principios y prácticas de código limpio'),
    ('Design Patterns', 'Patrones de diseño en desarrollo de software'),
    ('Blockchain Basics', 'Fundamentos de tecnología blockchain'),
    ('Cloud Computing', 'Conceptos básicos de computación en la nube'),
    ('Agile Methods', 'Metodologías ágiles en desarrollo de software'),
    ('DevOps Culture', 'Cultura y prácticas DevOps'),
    ('Machine Learning', 'Introducción al aprendizaje automático'),
    ('Big Data Analytics', 'Análisis de grandes volúmenes de datos'),
    ('IoT Programming', 'Programación para Internet de las Cosas'),
    ('Cyber Security', 'Fundamentos de ciberseguridad'),
    ('Mobile First Design', 'Diseño web enfocado en dispositivos móviles');