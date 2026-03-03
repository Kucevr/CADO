# Полный список промптов для генерации изображений (CADO Studio)

> **Легенда:**  ✅ = заменено (локальный файл в `public/assets/`)  |  ⬜ = ещё на Unsplash, нужно заменить

---

## Общие рекомендации по стилю
*   **Эстетика:** Минимализм, "тихая роскошь" (quiet luxury), архитектурный брутализм.
*   **Материалы:** Травертин, микроцемент, натуральный дуб, латунь, лён.
*   **Освещение:** Естественное, мягкое, с выразительными тенями.
*   **Midjourney extras:** `--stylize 250 --no ugly, deformed, blurry, watermark, text`

---

## 1. Главные баннеры (Hero)
**Путь:** `public/assets/hero/`

| Статус | Файл | Описание | Промпт |
| :--- | :--- | :--- | :--- |
| ✅ | `home-hero.jpeg` | Главная страница | Cinematic architectural photography, luxury minimalist villa living room, floor-to-ceiling windows, soft morning light, travertine stone walls, high-end Italian furniture, neutral earth tones, 8k `--ar 16:9` |
| ✅ | `project-hero.jpeg` | Страница всех проектов | Wide shot of a modern brutalist building facade at dusk, glowing warm lights inside, sharp geometry, elegant atmosphere `--ar 16:9` |
| ✅ | `about-hero.jpeg` | О нас (`AboutUs.tsx`, `AboutHero.tsx`) | Abstract architectural detail, curve of a white concrete wall against a deep blue sky, minimalist, clean lines, professional photography `--ar 16:9` |
| ✅ | `approach-hero.jpeg` | Подход (`Approach.tsx`, `ApproachHero.tsx`) | Close-up of architectural model made of wood and paper, architect's hands pointing, soft studio lighting, professional workspace aesthetic `--ar 16:9` |

---

## 1.1 Дополнительные детали
**Пусть:** `public/assets/about/`

| Статус | Файл | Описание | Промпт |
| :--- | :--- | :--- | :--- |
| ⬜ | `chandelier-detail.webp` | Деталь люстры (`AboutSection.tsx`) | High-end architectural detail, close-up of a minimalist circular brass chandelier, soft glow, warm lighting against a textured plaster ceiling, professional photography `--ar 3:4` |
| ⬜ | `atelier-team.webp` | Команда в ателье (`CallToAction.tsx`) | Architects working at wide studio table, large windows, models and drawings spread out, collaborative design atmosphere, grayscale `--ar 4:5` |

---

## 2. Проекты — превью-карточки
**Путь:** `public/assets/projects/`
Используется в: `ProjectsPreview.tsx`, `ProjectsGrid.tsx`

| Статус | Файл | Категория | Промпт |
| :--- | :--- | :--- | :--- |
| ✅ | `project-1-main.jpeg` | Hotel Lobbies / Ember Pavilion | Ultra-modern living room, organic shapes, desert aesthetic, soft linen sofa, clay walls, ambient lighting `--ar 3:4` |
| ✅ | `project-2-main.jpeg` | Private Suites / Velora Residence | Minimalist kitchen island made of dark marble, brass faucet, sunset light hitting the surface, cinematic `--ar 3:4` |
| ✅ | `project-3-main.jpeg` | Spa & Wellness / Still Waters | Brutalist office lobby, concrete pillars, large indoor plants, sculptural furniture `--ar 3:4` |
| ✅ | `project-4-main.jpeg` | Fine Dining / Noma Brasserie | Luxury hotel suite bedroom, view of the ocean through large windows, white curtains blowing, serene mood `--ar 2:1` |

---

## 3. Детали проектов (Project Details)
**Путь:** `public/assets/projects/details/`
Используется в: `ProjectDetail.tsx` — каждый проект (ember-pavilion, velora-residence, still-waters-retreat, noma-brasserie)

| Статус | Файл | Промпт |
| :--- | :--- | :--- |
| ⬜ | `ember-pavilion-hero.webp` | Grand hotel lobby interior, warm brass pendant lights, travertine floor, minimal reception desk, high ceilings `--ar 16:9` |
| ⬜ | `ember-pavilion-1.webp` | Luxury hotel suite sitting area, floor-to-ceiling windows, ember tones, linen curtains blowing, cinematic `--ar 4:5` |
| ⬜ | `ember-pavilion-2.webp` | Hotel corridor, warm indirect lighting, geometric pattern floor, deep perspective shot `--ar 4:5` |
| ⬜ | `ember-pavilion-3.webp` | Luxury bathroom interior, freestanding stone bathtub, fluted glass partition, spa atmosphere `--ar 4:5` |
| ⬜ | `velora-residence-hero.webp` | Ultra-modern penthouse living room, panoramic city view, dark marble floors, minimalist furnishings `--ar 16:9` |
| ⬜ | `velora-residence-1.webp` | Minimalist master bedroom, recessed lighting, neutral tones, floating bed platform, morning light `--ar 4:5` |
| ⬜ | `velora-residence-2.webp` | Open plan kitchen with island, dark honed marble countertops, brass hardware, chef's kitchen aesthetic `--ar 4:5` |
| ⬜ | `velora-residence-3.webp` | Private terrace, minimalist outdoor furniture, infinity pool edge, sunset golden hour `--ar 4:5` |
| ⬜ | `still-waters-hero.webp` | Luxury spa interior, stone walls, ambient candle lighting, shallow pool reflecting soft light `--ar 16:9` |
| ⬜ | `still-waters-1.webp` | Spa treatment room, linen bed, natural stone walls, botanical accents, zen atmosphere `--ar 4:5` |
| ⬜ | `still-waters-2.webp` | Outdoor infinity pool surrounded by nature, wooden deck, mountain view, tranquil morning `--ar 4:5` |
| ⬜ | `still-waters-3.webp` | Wellness lounge with floor cushions, rattan furniture, diffused light, meditative space `--ar 4:5` |
| ⬜ | `noma-brasserie-hero.webp` | Upscale restaurant interior, exposed concrete, dramatic pendant cluster, intimate dining tables `--ar 16:9` |
| ⬜ | `noma-brasserie-1.webp` | Fine dining table close-up, ceramic plates, linen napkins, single stem flower vase, artistic composition `--ar 4:5` |
| ⬜ | `noma-brasserie-2.webp` | Restaurant bar area, back-lit bottles, dark marble counter, moody evening light `--ar 4:5` |
| ⬜ | `noma-brasserie-3.webp` | Private dining room, round table, tufted chairs, soft chandelier spotlight, intimate atmosphere `--ar 4:5` |

---

## 4. Блог (Blog & News)
**Путь:** `public/assets/blog/`
Используется в: `BlogPreview.tsx`, `BlogGrid.tsx`, `BlogFeatured.tsx`, `ArticleDetail.tsx`

| Статус | Файл | Статья / Описание | Промпт |
| :--- | :--- | :--- | :--- |
| ✅ | `blog-process.jpeg` | Slow Luxury / Heritage Railways | Interior of a vintage luxury train compartment, velvet seats, brass fittings, landscape passing outside window, editorial atmosphere `--ar 4:5` |
| ✅ | `blog-textures.jpeg` | Return of Richness / Layered interiors | Richly layered interior, velvet curtains, layered rugs, warm candlelight, maximalist luxury done tastefully `--ar 4:5` |
| ✅ | `blog-process.jpeg` | Coastal Modernism / Miami Design | Bright coastal modern apartment, art deco building exterior glimpse, white walls, tropical plant, sea light reflection `--ar 4:5` |
| ⬜ | `blog-art-of-restraint.webp` | The Art of Restraint | Hyper-minimal wabi-sabi room, single ceramic vase, rough linen throw, zen stillness, overcast natural light `--ar 4:5` |
| ⬜ | `blog-stone-architecture.webp` | Stone in Contemporary Architecture | Close up of raw travertine wall texture under raking light, architectural detail photography `--ar 4:5` |
| ⬜ | `blog-featured.webp` | Featured article card (`BlogFeatured.tsx`) | Panoramic shot of a luxury villa courtyard at golden hour, stone paving, reflecting pool, palm shadows `--ar 16:9` |
| ⬜ | `blog-process.webp` | Architectural process (`BlogGrid`) | Architectural sketches on a desk, rolls of tracing paper, black fountain pen, morning light, organized chaos aesthetic `--ar 16:10` |
| ⬜ | `blog-textures.webp` | Abstract texture post | Abstract texture of ripples in sand, minimalist, beige tones, zen-like atmosphere `--ar 16:10` |

---

## 5. Команда (Team / Authors)
**Путь:** `public/assets/team/`
Используется в: `BlogAuthors.tsx`, `AboutTeam.tsx`

| Статус | Файл | Персонаж | Промпт |
| :--- | :--- | :--- | :--- |
| ⬜ | `team-javier.webp` | Javier Calle — Design Director | Professional portrait, man in his 40s, wearing black turtleneck, neutral grey background, soft side lighting, editorial photography `--ar 1:1` |
| ⬜ | `team-carolina.webp` | Carolina Ocaña — Lead Architect | Professional portrait, woman in her 30s, minimalist black outfit, neutral background, high-end editorial photography `--ar 1:1` |
| ⬜ | `team-marco.webp` | Marco Gonzalez — Partner | Professional portrait, man in his 50s, wearing dark blazer, confident pose, soft lighting, editorial `--ar 1:1` |
| ⬜ | `team-elena.webp` | Elena Rossi — Senior Designer | Professional portrait, woman in her late 20s, wearing linen blouse, warm side light, editorial fashion style `--ar 1:1` |

---

## 6. Раздел "О нас" и "Подход"
**Путь:** `public/assets/about/`
Используется в: `AboutSection.tsx` (главная), `AboutHero.tsx`, `ApproachHero.tsx`, `ApproachPhilosophy.tsx`, `ApproachSustainability.tsx`

| Статус | Файл | Используется в | Промпт |
| :--- | :--- | :--- | :--- |
| ⬜ | `about-section-main.webp` | `AboutSection.tsx` | Two architects reviewing blueprints in a sunlit studio, wooden desks, large format prints on wall, natural light `--ar 4:3` |
| ⬜ | `approach-philosophy-1.webp` | `ApproachPhilosophy.tsx` | Architectural detail: polished concrete corner with shadow play, precision craftsmanship, abstract beauty `--ar 4:5` |
| ⬜ | `approach-philosophy-2.webp` | `ApproachPhilosophy.tsx` | Interior materials flat lay: travertine slab, dark oak veneer, brushed brass sample, linen fabric swatch `--ar 4:5` |
| ⬜ | `approach-sustainability.webp` | `ApproachSustainability.tsx` | Green roof garden on modern building, lush planting, city view, sustainable architecture photography `--ar 16:9` |

---

## 7. CallToAction / Atelier Section
**Путь:** `public/assets/about/`
Используется в: `CallToAction.tsx`

| Статус | Файл | Описание | Промпт |
| :--- | :--- | :--- | :--- |
| ⬜ | `atelier-team.webp` | Команда в ателье (`CallToAction.tsx`) | Architects working at wide studio table, large windows, models and drawings spread out, collaborative design atmosphere, grayscale `--ar 4:5` |

---

## Как внедрить в проект

1.  **Создайте структуру папок:**
    ```bash
    mkdir -p public/assets/{hero,projects,projects/details,blog,team,about}
    ```
2.  **Сгенерируйте и оптимизируйте:** Midjourney → конвертируйте в `.webp` через [Squoosh](https://squoosh.app/).
3.  **Замените пути в коде:** Найдите ссылки Unsplash (`grep -r "unsplash" src/`) и замените на `"/assets/..."`.

## Рекомендуемые настройки генерации
*   **AspectRatio:** `--ar 16:9` для баннеров, `--ar 3:4` или `--ar 4:5` для карточек, `--ar 1:1` для портретов.
*   **Stylize:** `--stylize 250` — баланс реализма и художественности.
*   **Negative Prompt:** `ugly, deformed, blurry, low quality, watermark, text, signature, messy, crowded`.

