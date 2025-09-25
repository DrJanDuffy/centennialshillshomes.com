import { component$, useVisibleTask$ } from '@builder.io/qwik';

interface RealScoutSearchWidgetProps {
  agentEncodedId?: string;
  height?: string;
  width?: string;
}

export default component$<RealScoutSearchWidgetProps>((props) => {
  const {
    agentEncodedId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's RealScout agent ID
    height = '600px',
    width = '100%'
  } = props;

  useVisibleTask$(() => {
    // Add page-specific styles for RealScout advanced search (only once)
    if (!document.querySelector('style[data-realscout-advanced-search]')) {
      const style = document.createElement('style');
      style.setAttribute('data-realscout-advanced-search', 'true');
      style.textContent = `
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: #1e40af;
          --rs-as-widget-width: ${width} !important;
          width: ${width} !important;
          height: ${height} !important;
          min-height: 600px;
        }
        
        realscout-advanced-search img {
          max-width: 100%;
          height: auto;
        }
      `;
      document.head.appendChild(style);
    }
  });

  return (
    <div 
      style={{ height: height, width: width }} 
      class="realscout-widget-container"
    >
      <realscout-advanced-search agent-encoded-id={agentEncodedId}></realscout-advanced-search>
    </div>
  );
});