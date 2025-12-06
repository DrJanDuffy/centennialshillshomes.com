import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import SEOStructuredData from '../../components/seo-structured-data';
import { pageSchemas } from '../../components/seo-structured-data';
import FAQSection, { realtorServiceFAQs } from '../../components/faq-section';

export default component$(() => {
  const schoolsSchema = pageSchemas.servicePage({
    name: "Centennial Hills Schools",
    description: "Comprehensive guide to schools in Centennial Hills, Las Vegas. Information about top-rated public and private schools, school districts, and educational resources.",
    slug: "centennial-hills-schools",
    serviceType: "Educational Information Services"
  });

  return (
    <>
      <SEOStructuredData type="Service" data={schoolsSchema} />

      <section class="hero-section">
        <div class="container container-center">
          <h1 class="hero-title">
            <span class="highlight">Centennial Hills Schools</span>
            <br />
            Excellent Education Options
          </h1>
          <p class="hero-subtitle">
            Comprehensive guide to schools in Centennial Hills, Las Vegas. Information about top-rated 
            public and private schools, school districts, and educational resources for families.
          </p>
        </div>
      </section>

      <section class="service-content py-16">
        <div class="container container-center">
          <h2>School Districts Serving Centennial Hills</h2>
          <p>
            Centennial Hills is served by the Clark County School District (CCSD), the fifth-largest 
            school district in the United States. The area features excellent public schools, as well 
            as private school options for families seeking alternative educational paths. CCSD serves 
            over 300,000 students across more than 350 schools, making it one of the largest and most 
            diverse school districts in the nation.
          </p>
          <p>
            The Clark County School District has made significant investments in Centennial Hills area 
            schools, recognizing the community's growth and commitment to education. These investments 
            have resulted in modern facilities, updated technology, and enhanced educational programs 
            that serve the area's diverse student population.
          </p>
          <p>
            Centennial Hills families benefit from being part of a large, well-resourced school district 
            that can provide specialized programs, advanced placement courses, and comprehensive 
            extracurricular activities. The district's size also allows for specialized services and 
            programs that smaller districts might not be able to offer.
          </p>

          <h2>Elementary Schools in Centennial Hills</h2>
          <p>
            Centennial Hills is home to several highly rated elementary schools that provide strong 
            foundations for students' educational journeys. These schools offer comprehensive academic 
            programs, dedicated teachers, and supportive learning environments that help students succeed.
          </p>

          <h3>Centennial Hills Elementary School</h3>
          <p>
            Centennial Hills Elementary School is one of the area's most highly rated elementary schools, 
            consistently receiving high marks for academic performance, teacher quality, and student progress. 
            The school offers strong academic programs across all subject areas, with particular emphasis on 
            reading, mathematics, and science education.
          </p>
          <p>
            The school's dedicated teaching staff and supportive administration create a positive learning 
            environment where students can thrive. Parent involvement is strong, with active PTA participation 
            and community support that enhances the educational experience. The school's modern facilities and 
            resources provide students with the tools they need for academic success.
          </p>
          <p>
            Centennial Hills Elementary serves students from kindergarten through fifth grade, providing a 
            comprehensive elementary education that prepares students for middle school. The school's focus 
            on academic excellence, combined with its supportive community atmosphere, makes it a top choice 
            for families in the area.
          </p>

          <h3>Lone Mountain Elementary School</h3>
          <p>
            Lone Mountain Elementary School is known for its excellent teacher-student ratios, which allow 
            for more individualized attention and personalized instruction. The school's commitment to small 
            class sizes ensures that each student receives the support they need to succeed academically and 
            socially.
          </p>
          <p>
            The school offers comprehensive academic programs with strong emphasis on foundational skills in 
            reading, writing, and mathematics. Special programs include art, music, physical education, and 
            technology education that provide students with well-rounded educational experiences. The school's 
            focus on character education and social-emotional learning helps students develop into well-rounded 
            individuals.
          </p>

          <h3>Garehime Elementary School</h3>
          <p>
            Garehime Elementary School is recognized for its strong community involvement and parent 
            engagement. The school's active parent-teacher organization and community partnerships enhance 
            the educational experience and provide additional resources and support for students.
          </p>
          <p>
            The school offers comprehensive academic programs with strong performance in core subjects. 
            Special programs and extracurricular activities provide students with opportunities to explore 
            interests beyond the classroom, including sports, arts, and academic clubs. The school's commitment 
            to community involvement creates a supportive environment where students, families, and educators 
            work together for student success.
          </p>

          <h3>Woolley Elementary School</h3>
          <p>
            Woolley Elementary School has a strong focus on STEM education, providing students with enhanced 
            opportunities in science, technology, engineering, and mathematics. The school's STEM programs 
            prepare students for future academic and career opportunities in these high-demand fields.
          </p>
          <p>
            The school's modern facilities and technology resources support its STEM focus, providing students 
            with hands-on learning experiences and access to current technology. The school's commitment to 
            STEM education is reflected in its curriculum, special programs, and partnerships with local 
            businesses and organizations that support STEM learning.
          </p>

          <h2>Middle Schools Serving Centennial Hills</h2>
          <p>
            Centennial Hills students have access to several excellent middle schools that provide strong 
            academic programs and comprehensive support during these critical years of adolescent development. 
            These schools help students transition from elementary school while preparing them for the 
            challenges of high school.
          </p>

          <h3>Sig Rogich Middle School</h3>
          <p>
            Sig Rogich Middle School is consistently rated as one of the top middle schools in the Centennial 
            Hills area, with strong academic performance across all subject areas. The school offers 
            comprehensive academic programs including advanced placement courses, honors programs, and 
            specialized instruction for students with diverse learning needs.
          </p>
          <p>
            The school's dedicated teaching staff and supportive administration create a positive learning 
            environment where students can thrive academically and socially. Comprehensive extracurricular 
            programs including sports, arts, and academic clubs provide students with opportunities to explore 
            interests and develop talents beyond the classroom.
          </p>
          <p>
            Sig Rogich Middle School's focus on college and career readiness begins in middle school, with 
            programs and activities that help students explore future opportunities and develop the skills 
            needed for success in high school and beyond. The school's strong academic reputation makes it 
            a top choice for families in Centennial Hills.
          </p>

          <h3>Leavitt Middle School</h3>
          <p>
            Leavitt Middle School offers strong academic and extracurricular programs that provide students 
            with comprehensive educational experiences. The school's academic programs include core subjects 
            plus specialized courses in technology, arts, and foreign languages that help students explore 
            interests and develop skills.
          </p>
          <p>
            The school's extracurricular programs are extensive, including competitive sports teams, performing 
            arts groups, academic clubs, and service organizations. These programs help students develop 
            leadership skills, build confidence, and form lasting friendships while exploring interests beyond 
            the classroom.
          </p>

          <h3>Saville Middle School</h3>
          <p>
            Saville Middle School is known for its excellent arts and athletics programs, providing students 
            with opportunities to excel in creative and physical pursuits. The school's arts programs include 
            visual arts, music, theater, and dance, while its athletics programs offer competitive sports 
            opportunities across multiple disciplines.
          </p>
          <p>
            These programs complement the school's strong academic offerings, providing students with 
            well-rounded educational experiences that support both academic and personal development. The 
            school's commitment to arts and athletics reflects its understanding that students need 
            opportunities to explore diverse interests and develop multiple talents.
          </p>

          <h2>High Schools Serving Centennial Hills</h2>
          <p>
            Centennial Hills students have access to several highly rated high schools that provide strong 
            college preparation, comprehensive academic programs, and extensive extracurricular opportunities. 
            These schools prepare students for success in college, careers, and life beyond high school.
          </p>

          <h3>Palo Verde High School</h3>
          <p>
            Palo Verde High School is consistently rated as one of the top high schools in Clark County, 
            with strong college prep programs, high graduation rates, and excellent college acceptance rates. 
            The school offers comprehensive academic programs including Advanced Placement (AP) courses, 
            International Baccalaureate (IB) programs, and honors courses that challenge students and prepare 
            them for college-level work.
          </p>
          <p>
            The school's college preparation programs include college counseling, SAT/ACT preparation, and 
            assistance with college applications and financial aid. These programs help students navigate the 
            college application process and make informed decisions about their post-secondary education.
          </p>
          <p>
            Palo Verde's strong academic reputation is complemented by comprehensive extracurricular programs 
            including competitive sports, performing arts, academic clubs, and service organizations. These 
            programs provide students with opportunities to explore interests, develop leadership skills, and 
            build resumes that are attractive to colleges and universities.
          </p>

          <h3>Centennial High School</h3>
          <p>
            Centennial High School offers excellent academics and athletics, providing students with 
            opportunities to excel in both areas. The school's academic programs are comprehensive, with 
            strong performance across all subject areas and specialized programs in STEM, arts, and career 
            and technical education.
          </p>
          <p>
            The school's athletics programs are highly competitive, with teams that regularly compete at 
            state and regional levels. These programs provide students with opportunities to develop physical 
            skills, learn teamwork, and build character while representing their school in competition.
          </p>
          <p>
            Centennial High School's combination of strong academics and competitive athletics makes it 
            attractive to students who want to excel in both areas. The school's supportive environment 
            and dedicated staff help students balance academic and athletic commitments while achieving 
            success in both.
          </p>

          <h3>Shadow Ridge High School</h3>
          <p>
            Shadow Ridge High School is known for its strong STEM and arts programs, providing students with 
            opportunities to explore interests in science, technology, engineering, mathematics, and the arts. 
            The school's STEM programs include advanced courses, specialized labs, and partnerships with local 
            businesses and universities.
          </p>
          <p>
            The school's arts programs are comprehensive, including visual arts, music, theater, and dance 
            programs that allow students to explore creative interests and develop artistic talents. These 
            programs complement the school's strong academic offerings, providing students with well-rounded 
            educational experiences.
          </p>

          <h2>Private School Options</h2>
          <p>
            In addition to excellent public schools, Centennial Hills families have access to several 
            prestigious private schools that offer alternative educational approaches and specialized programs. 
            These schools provide families with choices that may better match their educational philosophies 
            and goals for their children.
          </p>

          <h3>Faith Lutheran Middle School & High School</h3>
          <p>
            Faith Lutheran Middle School & High School is a private Christian school that provides 
            college-preparatory education within a faith-based environment. The school offers comprehensive 
            academic programs, competitive athletics, and extensive extracurricular activities while 
            incorporating Christian values and principles into all aspects of education.
          </p>
          <p>
            The school's academic programs are strong, with high graduation rates and excellent college 
            acceptance rates. Students benefit from small class sizes, dedicated teachers, and a supportive 
            community that emphasizes both academic excellence and character development. The school's 
            faith-based approach appeals to families who want education that incorporates religious values 
            and principles.
          </p>

          <h3>The Meadows School</h3>
          <p>
            The Meadows School is a private college preparatory school that provides rigorous academic 
            programs designed to prepare students for success in college and beyond. The school offers 
            comprehensive academic programs, small class sizes, and personalized attention that helps 
            students achieve their full potential.
          </p>
          <p>
            The school's college preparation programs are extensive, with strong track records of student 
            acceptance to top colleges and universities. Students benefit from comprehensive college counseling, 
            advanced placement courses, and specialized programs that help them explore interests and develop 
            skills needed for college success.
          </p>

          <h3>Alexander Dawson School</h3>
          <p>
            Alexander Dawson School is a private independent school that offers comprehensive educational 
            programs from early childhood through high school. The school emphasizes academic excellence, 
            character development, and preparation for college and life beyond school.
          </p>
          <p>
            The school's programs are designed to develop well-rounded individuals who are prepared for 
            success in college, careers, and life. Small class sizes, dedicated teachers, and comprehensive 
            support services ensure that each student receives the attention and resources needed for success.
          </p>

          <h2>School Ratings and Performance</h2>
          <p>
            Centennial Hills schools consistently rank among the top schools in Clark County, with many 
            schools receiving high ratings from GreatSchools.org and other educational rating services. 
            The area's commitment to education is reflected in strong test scores, high graduation rates, 
            and excellent college acceptance rates that demonstrate the quality of education available 
            in Centennial Hills.
          </p>
          <p>
            School ratings are based on multiple factors including test scores, student progress, college 
            readiness, and equity. Centennial Hills schools consistently score well across all these 
            categories, reflecting their commitment to providing quality education for all students 
            regardless of background or circumstances.
          </p>
          <p>
            These high ratings are not just numbers; they reflect real educational quality that benefits 
            students and families. High-performing schools provide students with strong foundations for 
            future success, whether that's in college, careers, or life. For families, these ratings 
            provide confidence that their children are receiving quality education that will serve them 
            well in the future.
          </p>

          <h2>Why Schools Matter in Real Estate</h2>
          <p>
            School quality is one of the most important factors for families when choosing a home. 
            Excellent schools not only provide quality education but also contribute to property values 
            and neighborhood desirability. Understanding the relationship between schools and real estate 
            helps families make informed decisions about where to live.
          </p>

          <h3>Property Values and School Quality</h3>
          <p>
            Research consistently shows that homes in areas with highly rated schools command higher prices 
            and maintain their value better than homes in areas with lower-rated schools. This relationship 
            between school quality and property values makes school districts an important consideration 
            for both homebuyers and real estate investors.
          </p>
          <p>
            In Centennial Hills, the area's excellent schools contribute to strong property values and 
            consistent appreciation over time. Families are willing to pay premium prices for homes in 
            areas with top-rated schools, recognizing that quality education is an investment in their 
            children's future and their property's value.
          </p>

          <h3>Neighborhood Desirability</h3>
          <p>
            Excellent schools make neighborhoods more desirable, attracting families who prioritize 
            education and creating communities with shared values and goals. These communities often 
            have strong parent involvement, active neighborhood associations, and supportive environments 
            that enhance quality of life for all residents.
          </p>
          <p>
            The desirability created by excellent schools extends beyond just families with children. 
            Even empty nesters and investors recognize the value of living in areas with top-rated schools, 
            understanding that school quality contributes to property values and neighborhood stability.
          </p>

          <h3>Long-Term Investment</h3>
          <p>
            Choosing a home in an area with excellent schools is a long-term investment in both your 
            children's education and your property's value. Quality schools provide students with 
            foundations for future success while contributing to property values that benefit homeowners 
            over time.
          </p>
          <p>
            Dr. Jan Duffy helps families understand school options and find homes in the best school 
            districts. Her expertise in Centennial Hills real estate and knowledge of area schools 
            ensures that families can make informed decisions about where to live based on both housing 
            and educational considerations.
          </p>
        </div>
      </section>

      <FAQSection 
        faqs={realtorServiceFAQs}
        title="Frequently Asked Questions About Centennial Hills Schools"
        className="bg-gray-50"
      />

      <section class="cta-section">
        <div class="container container-center">
          <h2>Looking for a Home Near Great Schools?</h2>
          <p>Contact Dr. Jan Duffy to find homes in the best school districts.</p>
          <div class="cta-buttons">
            <a href="/contact" class="btn btn-primary">Contact Dr. Duffy</a>
            <a href="/buy-a-home" class="btn btn-secondary">View Homes for Sale</a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Centennial Hills Schools | School District Guide | Dr. Jan Duffy',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive guide to schools in Centennial Hills, Las Vegas. Information about top-rated public and private schools, school districts, and educational resources.',
    },
  ],
};

