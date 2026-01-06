# 🛒 DIAGON - Supermercado Moderno

> **Proyecto de Diseño de Interfaces y Maquetación Web**
> Landing page responsive desarrollada desde cero, trasladando un prototipo de alta fidelidad (Figma) a código web estándar.

![Estado](https://img.shields.io/badge/Estado-Terminado-success)
![HTML5](https://img.shields.io/badge/Frontend-HTML5-orange)
![CSS3](https://img.shields.io/badge/Style-CSS3-blue)
![JS](https://img.shields.io/badge/Logic-JavaScript-yellow)
![Figma](https://img.shields.io/badge/Design-Figma-pink)

---

## 📄 Descripción del Proyecto

Este proyecto consiste en la maquetación y desarrollo frontend de una interfaz para un supermercado tecnológico. A diferencia del uso de plantillas prefabricadas (Bootstrap o Tailwind), **todo el CSS y la estructura han sido escritos a mano**.

El objetivo es demostrar el dominio del **Diseño Responsive**, el uso avanzado de `CSS Grid` y `Flexbox`, y la capacidad de replicar fielmente un diseño gráfico (Pixel Perfect) en un entorno de navegador real.

## 🚀 Funcionalidades Principales

### 🎨 Experiencia de Usuario (UI/UX)
* **Diseño Limpio y Moderno:** Uso de espacios en blanco (White Space), fondo `#fafafa` y tipografía **Poppins** para romper con la estética de supermercado tradicional.
* **Micro-interacciones:** Feedback visual inmediato mediante estados `:hover` en botones, enlaces y tarjetas de producto.
* **Interactividad:** Lógica en JavaScript para el contador del carrito y animaciones de escala en el perfil de usuario.

### 📱 Adaptabilidad (Responsive Design)
* **Layout Fluido:** La web se adapta a cualquier resolución mediante **Media Queries**.
* **Menú Móvil:** Transformación de la navegación horizontal a una estructura vertical apilable.
* **Grid Dinámico:** Redistribución automática de los productos (de 4 columnas en escritorio a 2 en móvil) para garantizar la legibilidad.

---

## 🛠️ Arquitectura Técnica

Se han seguido buenas prácticas de maquetación y desarrollo frontend:

1.  **Semántica HTML5:** Uso correcto de etiquetas (`header`, `nav`, `main`, `section`, `footer`) para mejorar el SEO y la accesibilidad.
2.  **CSS Moderno:** Implementación de sistemas de diseño basados en **Grid Layout** para la galería de productos y **Flexbox** para alineaciones de cabecera y navegación.
3.  **Optimización de Recursos:** Uso de tipografías web optimizadas (Google Fonts) y referencias a iconos vectoriales.
4.  **JavaScript Vanilla:** Script ligero sin dependencias ni librerías externas para gestionar la lógica del cliente.

---

## 💻 Instalación y Uso

Sigue estos pasos para visualizar el proyecto en tu equipo:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/TU_USUARIO/diagon-market.git
    ```

2.  **Ejecución:**
    * No requiere servidor backend (Apache/Nginx).
    * Simplemente abre el archivo `index.html` en tu navegador favorito (Chrome, Firefox, Edge).

3.  **Ver Demo Online:**
    * Puedes ver el proyecto desplegado aquí: https://btncr13.github.io/DIAGON/

---

## 📂 Estructura del Código

```text
/diagon-market
│
├── /img             # Recursos gráficos (logos, banners, productos)
├── index.html       # Estructura principal y marcado semántico
├── style.css        # Hoja de estilos (Variables, Grid, Responsive)
├── script.js        # Lógica de interacción (Carrito, DOM)
└── README.md        # Documentación del proyecto
