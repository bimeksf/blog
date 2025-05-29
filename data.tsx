const dummyCards = [
  {
    title: "Jak TypeScript změnil vývoj moderních webů",
    slug: "jak-typescript-zmenil-vyvoj-modernich-webu",
    date: "2025-05-29",
    author: "Jan Novák",
    description: `TypeScript přináší do JavaScriptu typovou bezpečnost, což zásadně mění způsob, jakým píšeme a udržujeme kód. 
    Vývojáři oceňují nejen větší jistotu při refactoringu, ale i zlepšenou spolupráci v týmech.`,
    tags: ["TypeScript", "JavaScript", "Frontend", "Best Practices"],
    image: "/macncheese.jpg", 
  },
  {
    title: "10 tipů pro lepší UX na vašem webu",
    slug: "10-tipu-pro-lepsi-ux-na-vasem-webu",
    date: "2025-04-15",
    author: "Petra Malá",
    description: `Uživatelská zkušenost (UX) je klíčová pro úspěšnost webu. 
    V tomto článku sdílíme 10 praktických rad, jak zvýšit spokojenost uživatelů a tím i konverze.`,
    tags: ["UX", "Design", "Web", "Usability", "UI"],
    image: "/macncheese.jpg",
  },
  {
    title: "Základy optimalizace výkonu ve Vue.js",
    slug: "zaklady-optimalizace-vykonu-ve-vue-js",
    date: "2025-03-22",
    author: "Tomáš Dvořák",
    description: `Vue.js je výkonný framework, ale při špatném použití může být aplikace pomalá. 
    Naučte se optimalizovat komponenty, využívat lazy loading a sledovat výkon.`,
    tags: ["Vue.js", "Performance", "Optimization", "Frontend"],
    image: "/macncheese.jpg",
  },
  {
    title: "Proč přejít na Vite: Rychlejší vývoj a lepší DX",
    slug: "proc-prejit-na-vite",
    date: "2025-01-10",
    author: "Eva Kučerová",
    description: `Vite přináší revoluci v nástrojích pro frontend vývoj. Rychlé buildy, hot reload a jednoduchá konfigurace – to jsou jen některé výhody.`,
    tags: ["Vite", "Tooling", "JavaScript", "DX"],
    image: "/macncheese.jpg",
  },
  {
    title: "Bezpečnostní zásady pro REST API",
    slug: "bezpecnostni-zasady-pro-rest-api",
    date: "2024-12-05",
    author: "Karel Beneš",
    description: `REST API jsou často cílem útoků. V článku se zaměříme na zabezpečení tokenů, validaci vstupů a ochranu proti útokům typu CSRF a XSS.`,
    tags: ["Security", "REST API", "Backend", "Node.js", "Best Practices"],
    image: "/macncheese.jpg",
  }
];
export type Post = {
  title: string;
  slug: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  image: string;
};
export  function getPostBySlug(slug: string) {
  return dummyCards.find(post => post.slug === slug) || null;
}

export  function getAllPosts() : Post[]{
  return dummyCards
}

