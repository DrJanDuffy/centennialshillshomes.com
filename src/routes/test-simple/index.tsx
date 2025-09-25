import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Simple Test Page</h1>
      <p>This is a minimal test page to check if the basic setup is working.</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Simple Test',
};






