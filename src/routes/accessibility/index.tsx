import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container container-center py-12">
        <h1>Accessibility Statement</h1>
        <p class="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div class="prose max-w-4xl">
          <section class="mb-8">
            <h2>Our Commitment</h2>
            <p>
              Centennial Hills Real Estate | Homes by Dr. Jan Duffy is committed to ensuring digital 
              accessibility for people with disabilities. We are continually improving the user experience 
              for everyone and applying the relevant accessibility standards. We believe that everyone should 
              have equal access to information and services, regardless of their abilities.
            </p>
            <p>
              Digital accessibility is not just a legal requirement—it is a fundamental principle that guides 
              our website development and service delivery. We are committed to making our website and 
              services accessible to all individuals, including those with visual, auditory, motor, and 
              cognitive disabilities.
            </p>
            <p>
              We understand that accessibility is an ongoing process, and we are committed to continuously 
              improving the accessibility of our website and services. We regularly review and update our 
              website to address accessibility issues and implement best practices.
            </p>
            <p>
              Our commitment to accessibility extends to all aspects of our digital presence, including our 
              website, mobile applications, and online services. We work to ensure that all individuals can 
              access and use our digital resources effectively.
            </p>
          </section>

          <section class="mb-8">
            <h2>Accessibility Standards</h2>
            <p>
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
              These guidelines explain how to make web content more accessible for people with disabilities 
              and user-friendly for everyone. WCAG 2.1 is an internationally recognized standard for web 
              accessibility developed by the World Wide Web Consortium (W3C).
            </p>
            <p>
              WCAG 2.1 Level AA standards include requirements for:
            </p>
            <ul>
              <li><strong>Perceivable:</strong> Information and user interface components must be presentable 
              to users in ways they can perceive. This includes providing text alternatives for images, captions 
              for videos, and sufficient color contrast.</li>
              <li><strong>Operable:</strong> User interface components and navigation must be operable. This 
              includes keyboard accessibility, sufficient time limits, and avoiding content that causes seizures.</li>
              <li><strong>Understandable:</strong> Information and the operation of user interface must be 
              understandable. This includes readable text, predictable functionality, and input assistance.</li>
              <li><strong>Robust:</strong> Content must be robust enough that it can be interpreted reliably 
              by a wide variety of user agents, including assistive technologies. This includes proper HTML 
              structure and compatibility with assistive technologies.</li>
            </ul>
            <p>
              We work to ensure that our website meets these standards and provides an accessible experience 
              for all users. While we strive for full compliance, we recognize that accessibility is an ongoing 
              process and continue to work toward full compliance with WCAG 2.1 Level AA standards.
            </p>
            <p>
              We also comply with applicable accessibility laws, including the Americans with Disabilities Act 
              (ADA) and Section 508 of the Rehabilitation Act, where applicable. These laws require that 
              websites and digital services be accessible to individuals with disabilities.
            </p>
          </section>

          <section class="mb-8">
            <h2>Measures We Take</h2>
            <p>
              We take comprehensive measures to ensure accessibility throughout our organization and in all 
              aspects of our website development and maintenance. These measures help us create and maintain 
              an accessible digital presence that serves all users effectively.
            </p>
            <p>We take the following measures to ensure accessibility:</p>
            <ul>
              <li><strong>Include accessibility in our mission:</strong> Accessibility is part of our mission 
              statement and core values. We are committed to ensuring that all individuals can access and use 
              our services, regardless of their abilities.</li>
              <li><strong>Integrate accessibility into development:</strong> We integrate accessibility 
              considerations into all stages of website development, from initial design through implementation 
              and testing. This ensures that accessibility is built into our website from the ground up.</li>
              <li><strong>Assign clear goals and responsibilities:</strong> We assign clear accessibility goals 
              and responsibilities to our team members. This ensures that everyone understands their role in 
              maintaining accessibility and that accessibility is prioritized throughout our organization.</li>
              <li><strong>Employ formal quality assurance:</strong> We employ formal accessibility quality 
              assurance methods, including automated testing, manual testing, and user testing with individuals 
              with disabilities. This helps us identify and address accessibility issues before they affect users.</li>
              <li><strong>Provide continual training:</strong> We provide continual accessibility training for 
              our staff to ensure that everyone understands accessibility requirements and best practices. This 
              training helps us maintain and improve accessibility over time.</li>
              <li><strong>Regular accessibility audits:</strong> We conduct regular accessibility audits to 
              identify and address accessibility issues. These audits help us maintain compliance and identify 
              areas for improvement.</li>
              <li><strong>User feedback integration:</strong> We actively seek and integrate feedback from users 
              with disabilities to improve accessibility. This feedback helps us understand real-world 
              accessibility challenges and address them effectively.</li>
            </ul>
            <p>
              These measures help us create and maintain an accessible website that serves all users effectively. 
              We are committed to continuous improvement and regularly review and update our accessibility 
              practices and procedures.
            </p>
          </section>

          <section class="mb-8">
            <h2>Accessibility Features</h2>
            <p>
              Our website includes comprehensive accessibility features designed to make our content and services 
              accessible to all users, including those with disabilities. These features help ensure that 
              individuals with various abilities can access and use our website effectively.
            </p>
            <p>Our website includes the following accessibility features:</p>
            <ul>
              <li><strong>Semantic HTML structure:</strong> We use semantic HTML elements to provide clear 
              structure and meaning to our content. This helps screen readers and other assistive technologies 
              understand and navigate our website effectively.</li>
              <li><strong>Alternative text for images:</strong> We provide descriptive alternative text for all 
              images, which helps users with visual impairments understand image content. Alternative text is 
              read by screen readers and displayed when images cannot be loaded.</li>
              <li><strong>Keyboard navigation support:</strong> Our website is fully navigable using only a 
              keyboard, without requiring a mouse. This helps users with motor disabilities who cannot use a 
              mouse or prefer keyboard navigation.</li>
              <li><strong>Screen reader compatibility:</strong> Our website is compatible with screen readers 
              and other assistive technologies. We test our website with various screen readers to ensure 
              compatibility and usability.</li>
              <li><strong>High contrast color schemes:</strong> We use high contrast color schemes to ensure 
              that text is readable for users with visual impairments. Our color choices meet WCAG contrast 
              requirements for text readability.</li>
              <li><strong>Resizable text:</strong> Our website supports text resizing, allowing users to 
              increase text size for better readability. Users can resize text using browser settings or 
              assistive technologies.</li>
              <li><strong>Clear heading structure:</strong> We use clear, hierarchical heading structure to 
              organize content and help users navigate our website. This structure helps screen reader users 
              understand content organization and navigate efficiently.</li>
              <li><strong>Form labels and instructions:</strong> All form fields have clear labels and 
              instructions to help users understand what information is required. This helps users with 
              cognitive disabilities and screen reader users complete forms accurately.</li>
              <li><strong>Focus indicators:</strong> We provide clear focus indicators for keyboard navigation, 
              helping users understand which element has focus. This is essential for keyboard-only navigation.</li>
              <li><strong>Error identification:</strong> We provide clear error messages and identify form 
              errors in ways that are accessible to all users, including screen reader users.</li>
            </ul>
            <p>
              These accessibility features help ensure that our website is usable by individuals with various 
              disabilities and assistive technologies. We continue to add and improve accessibility features to 
              enhance the user experience for all visitors.
            </p>
          </section>

          <section class="mb-8">
            <h2>Known Issues</h2>
            <p>
              We are aware that some parts of our website may not be fully accessible. We are working 
              to address these issues and improve accessibility. Accessibility is an ongoing process, and 
              we are committed to continuously improving the accessibility of our website.
            </p>
            <p>
              Some areas we are working to improve include:
            </p>
            <ul>
              <li>Third-party content and widgets that may not be fully accessible</li>
              <li>Complex interactive elements that may require additional accessibility enhancements</li>
              <li>Video content that may need additional captions or transcripts</li>
              <li>PDF documents that may need to be converted to accessible formats</li>
            </ul>
            <p>
              We prioritize accessibility improvements based on user impact and feasibility. We work to 
              address accessibility issues promptly and systematically to improve the overall accessibility 
              of our website.
            </p>
            <p>
              If you encounter any accessibility barriers, please contact us so we can address them. We 
              take accessibility concerns seriously and work to resolve them as quickly as possible. Your 
              feedback helps us identify and address accessibility issues that we may not have identified.
            </p>
            <p>
              We are committed to making our website fully accessible and welcome your input on how we can 
              improve accessibility. We regularly review and update our website to address accessibility 
              issues and implement best practices.
            </p>
          </section>

          <section class="mb-8">
            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of our website. Your feedback helps us identify 
              accessibility issues and improve the user experience for all visitors. If you encounter 
              accessibility barriers or have suggestions for improvements, please let us know.
            </p>
            <p>
              You can contact us about accessibility issues through the following methods:
            </p>
            <ul>
              <li><strong>Phone:</strong> (702) 903-1952 - We are available to discuss accessibility concerns 
              and answer questions about our accessibility features.</li>
              <li><strong>Email:</strong> janet@centennialhillshomesforsale.com - You can email us with 
              detailed descriptions of accessibility issues or suggestions for improvements.</li>
              <li><strong>Address:</strong> 1490 Center Crossing Rd, Las Vegas, NV 89144 - You can visit 
              our office or send written correspondence about accessibility concerns.</li>
            </ul>
            <p>
              When contacting us about accessibility issues, please provide as much detail as possible, 
              including:
            </p>
            <ul>
              <li>The specific page or feature where you encountered the issue</li>
              <li>A description of the accessibility barrier</li>
              <li>The assistive technology or browser you are using</li>
              <li>Any suggestions for how we can improve accessibility</li>
            </ul>
            <p>
              We try to respond to feedback within 5 business days. We take all accessibility feedback seriously 
              and work to address concerns promptly. Your feedback is valuable in helping us improve 
              accessibility and serve all users better.
            </p>
            <p>
              We appreciate your patience as we work to address accessibility issues and improve our website. 
              We are committed to making our website accessible to all users and value your input in this 
              process.
            </p>
          </section>

          <section class="mb-8">
            <h2>Third-Party Content</h2>
            <p>
              Some content on our website may be provided by third parties, including real estate listing 
              services, mapping services, and other service providers. This third-party content may include 
              widgets, embedded content, and other elements that are not directly controlled by us.
            </p>
            <p>
              We cannot guarantee the accessibility of third-party content, as we do not have direct control 
              over how third parties implement their content. However, we work with our partners to ensure 
              accessibility where possible and encourage them to follow accessibility best practices.
            </p>
            <p>
              When we integrate third-party content, we evaluate its accessibility and work with providers to 
              address accessibility issues when possible. We prioritize working with third-party providers 
              who are committed to accessibility and follow accessibility standards.
            </p>
            <p>
              If you encounter accessibility issues with third-party content on our website, please let us 
              know. We will work with the third-party provider to address the issue or find alternative 
              solutions that are accessible.
            </p>
            <p>
              We are committed to ensuring that all content on our website is accessible, including 
              third-party content. We continue to work with our partners to improve accessibility and 
              provide alternative access methods when necessary.
            </p>
          </section>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Accessibility Statement | Centennial Hills Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Accessibility Statement for Centennial Hills Real Estate | Homes by Dr. Jan Duffy. Our commitment to digital accessibility for all users.',
    },
  ],
};

