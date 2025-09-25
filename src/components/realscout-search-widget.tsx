import { component$ } from '@builder.io/qwik';

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

  return (
    <div 
      style={{ height: height, width: width }} 
      class="realscout-widget-container"
    >
      <realscout-advanced-search agent-encoded-id={agentEncodedId}></realscout-advanced-search>
    </div>
  );
});