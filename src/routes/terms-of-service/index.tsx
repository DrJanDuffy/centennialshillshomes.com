import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container container-center py-12">
        <h1>Terms of Service</h1>
        <p class="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div class="prose max-w-4xl">
          <section class="mb-8">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using the Centennial Hills Real Estate | Homes by Dr. Jan Duffy website 
              (centennialhillshomesforsale.com), you accept and agree to be bound by the terms and 
              provision of this agreement. These Terms of Service ("Terms") govern your access to and 
              use of our website, services, and any related applications or platforms.
            </p>
            <p>
              Please read these Terms carefully before using our services. If you do not agree to these 
              Terms, you may not access or use our website or services. Your use of our services 
              constitutes your acceptance of these Terms and your agreement to comply with them.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any material 
              changes by posting the updated Terms on this page and updating the "Last Updated" date. 
              Your continued use of our services after such changes constitutes your acceptance of the 
              modified Terms.
            </p>
          </section>

          <section class="mb-8">
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on our website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
              and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Use automated systems or bots to access or scrape our website</li>
              <li>Interfere with or disrupt the website or servers</li>
              <li>Use the website in any way that violates applicable laws or regulations</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be 
              terminated by us at any time. Upon terminating your viewing of these materials or upon the 
              termination of this license, you must destroy any downloaded materials in your possession, 
              whether in electronic or printed format.
            </p>
            <p>
              The materials on our website are protected by copyright and other intellectual property laws. 
              All rights not expressly granted in these Terms are reserved by us and our licensors.
            </p>
          </section>

          <section class="mb-8">
            <h2>Real Estate Services</h2>
            <p>
              The information on this website is provided for general informational purposes only. 
              Real estate listings, property information, and market data are subject to change without notice. 
              We do not guarantee the accuracy, completeness, or timeliness of any information on this website.
            </p>
            <p>
              Property listings, prices, availability, and other information are provided by third parties 
              and may contain errors or omissions. We make reasonable efforts to ensure the accuracy of 
              information, but we cannot guarantee that all information is current, accurate, or complete. 
              You should independently verify all property information before making any decisions.
            </p>
            <p>
              All real estate services are provided in accordance with Nevada real estate laws and regulations. 
              Dr. Jan Duffy is a licensed real estate agent in the state of Nevada. Real estate services are 
              provided subject to separate agreements and disclosures that will be provided to you when you 
              engage our services.
            </p>
            <p>
              We are not responsible for any decisions you make based on information provided on this website. 
              You should consult with qualified professionals, including real estate agents, attorneys, and 
              financial advisors, before making any real estate decisions.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time 
              without notice. We are not liable for any loss or damage resulting from such modifications, 
              suspensions, or discontinuations.
            </p>
          </section>

          <section class="mb-8">
            <h2>Property Information</h2>
            <p>
              Property listings, prices, and availability are subject to change without notice. All property 
              information is provided "as is" without warranty of any kind, express or implied. We make no 
              representations or warranties regarding the accuracy, completeness, or reliability of property 
              information.
            </p>
            <p>
              Property information may include descriptions, photographs, virtual tours, and other details 
              provided by property owners, listing agents, or third-party sources. We do not independently 
              verify all property information and cannot guarantee its accuracy or completeness.
            </p>
            <p>
              We recommend verifying all property information independently before making any decisions. This 
              includes verifying property condition, square footage, lot size, property taxes, HOA fees, 
              school districts, and other important details through independent inspections, appraisals, 
              and professional consultations.
            </p>
            <p>
              Property prices, availability, and terms are subject to change at any time. Properties may be 
              sold, withdrawn from the market, or have their prices changed without notice. We are not 
              responsible for any changes to property information or availability.
            </p>
            <p>
              We are not responsible for any errors, omissions, or inaccuracies in property information. You 
              acknowledge that you are using property information at your own risk and that we are not liable 
              for any decisions you make based on such information.
            </p>
          </section>

          <section class="mb-8">
            <h2>User Content</h2>
            <p>
              You are responsible for any content you submit to our website, including but not limited to 
              reviews, comments, inquiries, and other communications. You retain ownership of any content you 
              submit, but by submitting content, you grant us a non-exclusive, royalty-free, perpetual, 
              irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, 
              create derivative works from, distribute, and display such content.
            </p>
            <p>
              You agree not to submit content that is:
            </p>
            <ul>
              <li>Illegal, harmful, or violates any laws or regulations</li>
              <li>Defamatory, abusive, harassing, threatening, or offensive</li>
              <li>Infringing on intellectual property rights, including copyrights, trademarks, or patents</li>
              <li>Containing viruses, malware, or other malicious code</li>
              <li>False, misleading, or fraudulent</li>
              <li>Spam, unsolicited advertising, or promotional materials</li>
              <li>Violating privacy rights or containing personal information of others without consent</li>
              <li>Impersonating any person or entity or falsely stating your affiliation with any person or entity</li>
            </ul>
            <p>
              We reserve the right to review, edit, or remove any user content at our sole discretion. We 
              are not obligated to monitor user content, but we may do so to ensure compliance with these 
              Terms and applicable laws.
            </p>
            <p>
              You are solely responsible for the content you submit and any consequences of submitting such 
              content. We are not responsible for user content and do not endorse or guarantee the accuracy 
              of any user content.
            </p>
          </section>

          <section class="mb-8">
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, in no event shall Centennial Hills Real Estate 
              | Homes by Dr. Jan Duffy, its affiliates, agents, employees, or suppliers be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including without limitation, 
              damages for loss of data or profit, or due to business interruption, arising out of the use or 
              inability to use the materials on our website, even if we or an authorized representative has 
              been notified orally or in writing of the possibility of such damage.
            </p>
            <p>
              Our total liability to you for all claims arising from or related to your use of our website or 
              services shall not exceed the amount you paid to us, if any, for accessing or using our services, 
              or $100, whichever is greater.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion or limitation of incidental or consequential 
              damages, so the above limitation or exclusion may not apply to you. In such jurisdictions, our 
              liability shall be limited to the maximum extent permitted by law.
            </p>
            <p>
              We are not liable for any damages resulting from your use of third-party websites, services, 
              or content linked to or from our website. Your use of third-party websites and services is at 
              your own risk.
            </p>
          </section>

          <section class="mb-8">
            <h2>Revisions and Errata</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic 
              errors. We do not warrant that any of the materials on our website are accurate, complete, 
              or current. We may make changes to the materials contained on our website at any time without notice.
            </p>
            <p>
              We do not commit to updating the materials on our website. The materials may be out of date, 
              and we make no commitment to update such materials. We reserve the right to modify, update, or 
              remove any content on our website at any time without notice.
            </p>
            <p>
              We are not responsible for any errors or omissions in the materials on our website. You should 
              independently verify any information before relying on it. We encourage you to contact us if 
              you notice any errors or have questions about the information on our website.
            </p>
            <p>
              We may revise these Terms at any time without notice. By using our website, you are agreeing 
              to be bound by the then current version of these Terms. We encourage you to review these Terms 
              periodically to stay informed about any changes.
            </p>
          </section>

          <section class="mb-8">
            <h2>Links to Third-Party Sites</h2>
            <p>
              Our website may contain links to third-party websites, including real estate listing services, 
              mortgage lenders, and other service providers. These links are provided for your convenience 
              and do not constitute an endorsement of the linked websites or their content.
            </p>
            <p>
              We are not responsible for the content, privacy practices, or security of these external sites. 
              When you click on a third-party link, you will be directed to that third party's website, and 
              their terms of service and privacy policy will apply to your use of their website.
            </p>
            <p>
              The inclusion of any link does not imply endorsement by us of the site. We have no control over 
              third-party websites and are not responsible for their content, services, or practices. Your use 
              of third-party websites is at your own risk.
            </p>
            <p>
              We encourage you to review the terms of service and privacy policies of any third-party websites 
              you visit. If you have questions about third-party websites or services, please contact them 
              directly.
            </p>
          </section>

          <section class="mb-8">
            <h2>Modifications</h2>
            <p>
              We may revise these Terms of Service at any time without notice. We will notify you of any 
              material changes by posting the updated Terms on this page and updating the "Last Updated" date. 
              Your continued use of our website after such changes constitutes your acceptance of the modified 
              Terms.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our website or services at 
              any time without notice. We are not liable for any loss or damage resulting from such 
              modifications, suspensions, or discontinuations.
            </p>
            <p>
              If you do not agree with any modifications to these Terms, you should stop using our website 
              and services. Your continued use of our website after modifications to these Terms constitutes 
              your acceptance of the modified Terms.
            </p>
            <p>
              We encourage you to review these Terms periodically to stay informed about any changes. The 
              "Last Updated" date at the top of this page indicates when these Terms were last revised.
            </p>
          </section>

          <section class="mb-8">
            <h2>Governing Law</h2>
            <p>
              These Terms and conditions are governed by and construed in accordance with the laws of the 
              State of Nevada, without regard to its conflict of law provisions. You irrevocably submit to 
              the exclusive jurisdiction of the courts in the State of Nevada for any disputes arising from 
              or related to these Terms or your use of our website or services.
            </p>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall 
              be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise 
              remain in full force and effect and enforceable.
            </p>
            <p>
              These Terms constitute the entire agreement between you and us regarding your use of our website 
              and services, and supersede all prior or contemporaneous communications and proposals, whether 
              electronic, oral, or written, between you and us.
            </p>
            <p>
              Any failure by us to enforce any right or provision of these Terms shall not constitute a waiver 
              of such right or provision. Our rights and remedies under these Terms are cumulative and not 
              exclusive of any rights or remedies we may have at law or in equity.
            </p>
          </section>

          <section class="mb-8">
            <h2>Contact Information</h2>
            <p>If you have questions about these Terms of Service, please contact us:</p>
            <p>
              <strong>Dr. Jan Duffy</strong><br />
              Centennial Hills Real Estate<br />
              Phone: (702) 903-1952<br />
              Email: janet@centennialhillshomesforsale.com<br />
              Address: 1490 Center Crossing Rd, Las Vegas, NV 89144
            </p>
          </section>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Terms of Service | Centennial Hills Real Estate',
  meta: [
    {
      name: 'description',
      content: 'Terms of Service for Centennial Hills Real Estate | Homes by Dr. Jan Duffy. Review our terms and conditions for using our website and services.',
    },
    {
      name: 'robots',
      content: 'noindex, follow',
    },
  ],
};

