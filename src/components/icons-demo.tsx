import { component$ } from '@builder.io/qwik';

// Import various icon libraries from @qwikest/icons
import { HiHomeMini, HiMapPinMini, HiPhoneMini, HiEnvelopeMini } from '@qwikest/icons/heroicons';
import { LuSearch, LuHeart, LuStar, LuCalendar } from '@qwikest/icons/lucide';
import { FaHouseSolid, FaLocationDotSolid, FaPhoneSolid } from '@qwikest/icons/font-awesome';
import { IoHomeOutline, IoLocationOutline, IoCallOutline } from '@qwikest/icons/ionicons';
import { MatHomeSharp, MatLocationOnSharp, MatPhoneSharp } from '@qwikest/icons/material';

export default component$(() => {
  return (
    <div class="icons-demo">
      <h2>Real Estate Icons Demo</h2>
      
      {/* Heroicons - Modern, minimal icons */}
      <section class="icon-section">
        <h3>Heroicons (Tailwind Style)</h3>
        <div class="icon-grid">
          <div class="icon-item">
            <HiHomeMini />
            <span>Home</span>
          </div>
          <div class="icon-item">
            <HiMapPinMini />
            <span>Location</span>
          </div>
          <div class="icon-item">
            <HiPhoneMini />
            <span>Phone</span>
          </div>
          <div class="icon-item">
            <HiEnvelopeMini />
            <span>Email</span>
          </div>
        </div>
      </section>

      {/* Lucide Icons - Clean, consistent */}
      <section class="icon-section">
        <h3>Lucide Icons</h3>
        <div class="icon-grid">
          <div class="icon-item">
            <LuSearch />
            <span>Search</span>
          </div>
          <div class="icon-item">
            <LuHeart />
            <span>Favorites</span>
          </div>
          <div class="icon-item">
            <LuStar />
            <span>Featured</span>
          </div>
          <div class="icon-item">
            <LuCalendar />
            <span>Schedule</span>
          </div>
        </div>
      </section>

      {/* Font Awesome - Traditional, detailed */}
      <section class="icon-section">
        <h3>Font Awesome</h3>
        <div class="icon-grid">
          <div class="icon-item">
            <FaHouseSolid />
            <span>House</span>
          </div>
          <div class="icon-item">
            <FaLocationDotSolid />
            <span>Location</span>
          </div>
          <div class="icon-item">
            <FaPhoneSolid />
            <span>Phone</span>
          </div>
        </div>
      </section>

      {/* Material Icons - Google's design language */}
      <section class="icon-section">
        <h3>Material Icons</h3>
        <div class="icon-grid">
          <div class="icon-item">
            <MatHomeSharp />
            <span>Home</span>
          </div>
          <div class="icon-item">
            <MatLocationOnSharp />
            <span>Location</span>
          </div>
          <div class="icon-item">
            <MatPhoneSharp />
            <span>Phone</span>
          </div>
        </div>
      </section>

      {/* Ionicons - iOS/Android style */}
      <section class="icon-section">
        <h3>Ionicons</h3>
        <div class="icon-grid">
          <div class="icon-item">
            <IoHomeOutline />
            <span>Home</span>
          </div>
          <div class="icon-item">
            <IoLocationOutline />
            <span>Location</span>
          </div>
          <div class="icon-item">
            <IoCallOutline />
            <span>Call</span>
          </div>
        </div>
      </section>

      <style>{`
        .icons-demo {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .icons-demo h2 {
          text-align: center;
          margin-bottom: 2rem;
          color: #1f2937;
        }
        
        .icon-section {
          margin-bottom: 3rem;
        }
        
        .icon-section h3 {
          margin-bottom: 1rem;
          color: #374151;
          font-size: 1.25rem;
        }
        
        .icon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }
        
        .icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: white;
          transition: all 0.2s ease;
        }
        
        .icon-item:hover {
          border-color: #3b82f6;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }
        
        .icon-item svg {
          width: 2rem;
          height: 2rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }
        
        .icon-item span {
          font-size: 0.875rem;
          color: #374151;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .icon-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
});

