import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/navigation/header';
import Footer from '~/components/navigation/footer';
import Breadcrumbs from '~/components/navigation/breadcrumbs';
import ScrollToTop from '~/components/navigation/scroll-to-top';

import styles from './styles.css?inline';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main class="main-content">
        <Slot />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
});
