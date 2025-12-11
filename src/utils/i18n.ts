export type Locale = 'en' | 'es';

export const languages = {
  en: 'English',
  es: 'Español',
}

export const defaultLang: Locale = 'en';

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Full-Stack Developer',
    'hero.description': 'I build fast, accessible, and beautiful web experiences with modern technologies.',
    'hero.cta.primary': 'View Projects',
    'hero.cta.secondary': 'Contact Me',
    
    // About section
    'about.title': 'About Me',
    'about.description': 'Passionate developer focused on creating exceptional user experiences.',
    
    // Projects section
    'projects.title': 'Featured Projects',
    'projects.viewAll': 'View All Projects',
    'projects.liveDemo': 'Live Demo',
    'projects.sourceCode': 'Source Code',
    
    // Contact section
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always open to discussing new projects, creative ideas, or opportunities.',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.builtWith': 'Built with',
    
    // General
    'general.readMore': 'Read more',
    'general.loading': 'Loading...',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    // Hero section
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrollador Full-Stack',
    'hero.description': 'Construyo experiencias web rápidas, accesibles y hermosas con tecnologías modernas.',
    'hero.cta.primary': 'Ver Proyectos',
    'hero.cta.secondary': 'Contactarme',
    
    // About section
    'about.title': 'Sobre mí',
    'about.description': 'Desarrollador apasionado enfocado en crear experiencias de usuario excepcionales.',
    
    // Projects section
    'projects.title': 'Proyectos Destacados',
    'projects.viewAll': 'Ver Todos los Proyectos',
    'projects.liveDemo': 'Demo en Vivo',
    'projects.sourceCode': 'Código Fuente',
    
    // Contact section
    'contact.title': 'Hablemos',
    'contact.description': 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.builtWith': 'Construido con',
    
    // General
    'general.readMore': 'Leer más',
    'general.loading': 'Cargando...',
  },
} as const;

/**
 * Get translation function for the specified language.
 * @param lang - select language
 * @param key - Translation key (e.g., 'nav.home')
 * @returns Translated text
 */
export function useTranslations(lang: Locale) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

/**
 * Get localized path for the given URL and locale.
 * @param url - Current URL
 * @param locale - Target language
 * @returns Translated URL
 */
export function getLocalizedPath(url: URL, locale: Locale): string {
  const pathname = url.pathname;
  
  // Si ya está en español, remover el prefijo
  if (pathname.startsWith('/es/')) {
    const pathWithoutLocale = pathname.replace('/es/', '/');
    return locale === 'es' ? pathname : pathWithoutLocale;
  }
  
  // Si está en inglés, añadir prefijo si es necesario
  return locale === 'es' ? `/es${pathname}` : pathname;
}

/**
 * Detect language from URL path.
 * @param url - Current URL
 * @returns Detected language
 */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}