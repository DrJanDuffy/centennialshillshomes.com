import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';
import { useStyles$ } from '@builder.io/qwik';
import styles from './scroll-to-top.css?inline';

export default component$(() => {
  useStyles$(styles);
  
  const isVisible = useSignal(false);
  
  useVisibleTask$(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      isVisible.value = scrollTop > 300;
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  
  const scrollToTop = $(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
  
  return (
    <button
      class={`scroll-to-top ${isVisible.value ? 'visible' : ''}`}
      onClick$={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l8 8h-6v12h-4V10H4l8-8z"/>
      </svg>
    </button>
  );
});
