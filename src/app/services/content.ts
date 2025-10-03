import { Injectable } from '@angular/core';

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  shortBio: string;
  fullBio: string;
}

export interface ContentSection {
  id: string;
  title: string;
  excerpt: string;
  fullContent: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  getHomePageSections(): ContentSection[] {
    return [
      {
        id: 'vision',
        title: 'Our Vision',
        excerpt: 'Building tomorrow\'s distribution networks across the GCC and Middle East today.',
        fullContent: `<h2>Our Vision</h2>
          <p>At TTA, we envision a future where innovative distribution networks seamlessly connect leading brands with thriving markets across the GCC and Middle East. We are committed to building tomorrow's supply chain infrastructure today, creating lasting value for our principals, partners, and the communities we serve.</p>
          <p>Our vision extends beyond traditional distribution—we aim to be the catalyst for market transformation, bringing world-class products and services to underserved regions while fostering sustainable business growth and economic development.</p>`
      },
      {
        id: 'about-us-and-role',
        title: 'About Us & Our Role',
        excerpt: 'Strategic partners in distribution excellence, connecting global brands with regional markets.',
        fullContent: `<h2>About Us & Our Role</h2>
          <p>TTA (The Turnaround Artists) is a Dubai-based trading and distribution company specializing in connecting international brands with strategic markets across the GCC and Middle East region. Founded on principles of integrity, innovation, and partnership, we serve as the vital link between world-class principals and dynamic regional distributors.</p>
          <p>Our role transcends traditional distribution—we are strategic advisors, market developers, and trusted partners committed to the long-term success of every brand we represent. We combine deep market knowledge with operational excellence to create sustainable competitive advantages for our principals.</p>`
      },
      {
        id: 'mission',
        title: 'Our Mission',
        excerpt: 'Delivering exceptional distribution solutions through integrity, innovation, and strategic partnerships.',
        fullContent: `<h2>Our Mission</h2>
          <p>Our mission is to deliver exceptional distribution solutions that create measurable value for our principals and partners. We achieve this through:</p>
          <ul>
            <li><strong>Strategic Market Development:</strong> Identifying and cultivating high-potential distribution channels across the GCC and Middle East</li>
            <li><strong>Operational Excellence:</strong> Implementing best-in-class supply chain and logistics management</li>
            <li><strong>Partnership Integrity:</strong> Building lasting relationships founded on trust, transparency, and mutual success</li>
            <li><strong>Continuous Innovation:</strong> Adapting to market dynamics and leveraging emerging opportunities</li>
          </ul>
          <p>We are committed to transforming distribution challenges into strategic opportunities, ensuring our principals achieve and exceed their regional market objectives.</p>`
      },
      {
        id: 'core-pillars',
        title: 'Our Core Pillars',
        excerpt: 'Built on integrity, expertise, innovation, and commitment to partnership excellence.',
        fullContent: `<h2>Our Core Pillars</h2>
          <p>TTA's success is built on four fundamental pillars that guide every aspect of our business:</p>
          <h3>1. Integrity</h3>
          <p>We conduct business with unwavering ethical standards, ensuring transparency and accountability in all our relationships. Our reputation is built on trust, and we safeguard it through every decision and action.</p>
          <h3>2. Expertise</h3>
          <p>Our team brings decades of combined experience in regional distribution, market development, and supply chain management. We leverage this expertise to deliver insights and solutions that drive measurable results.</p>
          <h3>3. Innovation</h3>
          <p>We continuously seek new ways to optimize distribution networks, expand market reach, and create value. Our forward-thinking approach keeps our principals ahead of market trends and competitive pressures.</p>
          <h3>4. Partnership</h3>
          <p>We view every relationship as a long-term partnership. Our success is measured by the success of our principals and distributors, and we invest deeply in nurturing these relationships for mutual growth.</p>`
      },
      {
        id: 'strategic-reach',
        title: 'Our Strategic Reach',
        excerpt: 'Comprehensive coverage across GCC and Middle East markets with established networks.',
        fullContent: `<h2>Our Strategic Reach</h2>
          <p>TTA maintains strategic presence and established distribution networks across key markets in the GCC and Middle East region, including:</p>
          <ul>
            <li><strong>United Arab Emirates:</strong> Our Dubai headquarters serves as the regional hub for operations</li>
            <li><strong>Kingdom of Saudi Arabia:</strong> Extensive networks across major cities and growing markets</li>
            <li><strong>Kuwait:</strong> Strong partnerships with leading distributors</li>
            <li><strong>Qatar:</strong> Established presence in retail and commercial sectors</li>
            <li><strong>Bahrain:</strong> Growing market footprint with strategic partnerships</li>
            <li><strong>Oman:</strong> Developing distribution channels in emerging markets</li>
          </ul>
          <p>Our regional presence enables rapid market entry, efficient logistics, and localized support for our principals' brands.</p>`
      },
      {
        id: 'business-model',
        title: 'Our Business Model: Built on Teamwork',
        excerpt: 'Collaborative approach combining principal expertise with regional market knowledge.',
        fullContent: `<h2>Our Business Model: Built on Teamwork</h2>
          <p>TTA's business model is fundamentally collaborative. We believe that sustainable success comes from aligning the goals and capabilities of three key parties:</p>
          <h3>The Principal</h3>
          <p>World-class brands seeking strategic market expansion in the GCC and Middle East region. We represent principals who value quality distribution partnerships and long-term market development.</p>
          <h3>The Distributor</h3>
          <p>Established regional distributors with strong market presence, logistics capabilities, and customer relationships. We partner with distributors who share our commitment to excellence and brand stewardship.</p>
          <h3>TTA: The Strategic Connector</h3>
          <p>We serve as the strategic bridge, facilitating seamless collaboration between principals and distributors. Our role includes market assessment, partner selection, contract negotiation, ongoing relationship management, and performance optimization.</p>
          <p>This triangular partnership model ensures aligned incentives, clear communication, and shared commitment to market success.</p>`
      },
      {
        id: 'trusted-partnerships',
        title: 'Trusted Partnerships',
        excerpt: 'Long-term relationships built on mutual success, transparency, and shared growth.',
        fullContent: `<h2>Trusted Partnerships</h2>
          <p>At TTA, partnerships are more than business arrangements—they are strategic alliances built on mutual respect, shared objectives, and commitment to excellence. We invest in understanding our partners' businesses, challenges, and aspirations.</p>
          <h3>Our Partnership Approach</h3>
          <ul>
            <li><strong>Due Diligence:</strong> Rigorous vetting to ensure alignment of values and capabilities</li>
            <li><strong>Clear Communication:</strong> Transparent dialogue and regular performance reviews</li>
            <li><strong>Mutual Investment:</strong> Shared resources for market development and brand building</li>
            <li><strong>Long-term Commitment:</strong> Focus on sustainable growth rather than short-term gains</li>
            <li><strong>Problem-Solving Mindset:</strong> Collaborative approach to overcoming challenges</li>
          </ul>
          <p>Our partnership philosophy has resulted in lasting relationships spanning many years, with multiple successful brand launches and market expansions.</p>`
      },
      {
        id: 'principals',
        title: 'Our Principals',
        excerpt: 'Representing world-class brands across diverse industries and categories.',
        fullContent: `<h2>Our Principals</h2>
          <p>TTA is proud to represent a select portfolio of international brands seeking strategic distribution in the GCC and Middle East markets. Our principals span various industries, including:</p>
          <ul>
            <li>Consumer Goods & FMCG</li>
            <li>Food & Beverage</li>
            <li>Health & Wellness</li>
            <li>Personal Care & Cosmetics</li>
            <li>Home & Lifestyle Products</li>
            <li>Industrial & Commercial Solutions</li>
          </ul>
          <p>We carefully select principals whose products and values align with regional market needs and consumer preferences. Our selective approach ensures we can dedicate the attention and resources needed to maximize each brand's market potential.</p>
          <p>If you're seeking strategic distribution partnership in the GCC and Middle East region, we invite you to explore how TTA can accelerate your market success.</p>`
      },
      {
        id: 'partners',
        title: 'Our Partners',
        excerpt: 'Network of established distributors with proven track records across the region.',
        fullContent: `<h2>Our Partners</h2>
          <p>TTA works with a carefully curated network of distribution partners across the GCC and Middle East region. Our partners are selected based on:</p>
          <ul>
            <li><strong>Market Presence:</strong> Established operations with strong retail and commercial reach</li>
            <li><strong>Infrastructure Capability:</strong> Modern warehousing, logistics, and distribution systems</li>
            <li><strong>Financial Stability:</strong> Sound financial position to support inventory and growth investments</li>
            <li><strong>Brand Stewardship:</strong> Demonstrated commitment to representing brands with integrity</li>
            <li><strong>Growth Orientation:</strong> Ambition to expand market share and develop new channels</li>
          </ul>
          <p>We continuously evaluate and expand our partner network to ensure we can offer principals the best possible market coverage and distribution excellence.</p>`
      },
      {
        id: 'who-we-are',
        title: 'Who We Are',
        excerpt: 'Meet the experienced leadership team driving TTA\'s vision and success.',
        fullContent: `<h2>Who We Are</h2>
          <p>TTA's leadership combines decades of experience in regional distribution, market development, and strategic partnerships. Our team's deep understanding of both international business practices and regional market dynamics positions us uniquely to deliver exceptional results.</p>`
      }
    ];
  }

  getTeamMembers(): TeamMember[] {
    return [
      {
        name: 'James Michael Lafferty',
        title: 'Managing Partner',
        image: 'assets/images/James.jpg',
        shortBio: 'Strategic leader with extensive experience in GCC market development and distribution.',
        fullBio: `<p>James Michael Lafferty brings over two decades of experience in regional distribution and market development across the GCC and Middle East. As Managing Partner of TTA, James leads strategic initiatives, principal relationships, and business development.</p>
          <p>His deep understanding of regional market dynamics, combined with a track record of successful brand launches and distribution network development, has established TTA as a trusted partner for international brands seeking market entry and expansion.</p>
          <p>James's leadership philosophy centers on building lasting partnerships, operational excellence, and creating sustainable value for all stakeholders. His hands-on approach and commitment to integrity have been instrumental in TTA's growth and reputation in the region.</p>`
      },
      {
        name: 'Nedal Al Zatari',
        title: 'Managing Partner',
        image: 'assets/images/Nedal.jpg',
        shortBio: 'Regional distribution expert with strong network across Middle East markets.',
        fullBio: `<p>Nedal Al Zatari is a seasoned distribution professional with extensive experience across Middle East markets. As Managing Partner of TTA, Nedal oversees distributor relationships, market operations, and regional network development.</p>
          <p>With deep roots in the region and fluency in navigating diverse market environments, Nedal brings invaluable insights into consumer behavior, regulatory landscapes, and distribution best practices. His extensive network of relationships across the GCC has been crucial in establishing TTA's market presence.</p>
          <p>Nedal's collaborative approach and problem-solving mindset ensure that both principals and distributors receive the support and guidance needed for sustained market success. His commitment to partnership excellence drives TTA's operational performance and market outcomes.</p>`
      }
    ];
  }

  getSectionById(id: string): ContentSection | undefined {
    return this.getHomePageSections().find(section => section.id === id);
  }
}
