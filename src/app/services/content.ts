import { Injectable } from '@angular/core';

export interface TeamMember {
  id: string;
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
        excerpt: 'We aim to be the leading bridge between global manufacturers and markets worldwide—enabling seamless trade, smart distribution, and lasting partnerships.',
        fullContent: `<h2>Our Vision</h2>
          <p>We aim to be the leading bridge between global manufacturers and markets worldwide—enabling seamless trade, smart distribution, and lasting partnerships that drive growth for all.</p>
          <p>Our focus is helping outstanding regional companies scale globally. We represent some of the finest start-ups and mid-sized businesses ready to expand. With hands-on operational experience—from building route-to-market strategies to restructuring—we deliver proven results. We are a lean, agile team, bringing unmatched value to every partnership.</p>`
      },
      {
        id: 'about-us-and-role',
        title: 'About Us & Our Role',
        excerpt: 'TTA is a trading and distribution company connecting world-class manufacturers with diverse markets worldwide.',
        fullContent: `<h2>About Us & Our Role</h2>
          <p>TTA is a trading and distribution company connecting world-class manufacturers with diverse markets worldwide. With a strong international presence, deep market knowledge, and an extensive partner network, we deliver value, visibility, and scale for brands.</p>
          <p>We manage top global brands in over 100 countries, supported by 80+ years of expertise in international expansion.</p>`
      },
      {
        id: 'mission',
        title: 'Our Mission',
        excerpt: 'We connect brands and consumers through market-driven strategies, collaboration, and a win-win mindset.',
        fullContent: `<h2>Our Mission</h2>
          <p>We connect brands and consumers through market-driven strategies, collaboration, and a win-win mindset—creating long-term value across the supply chain. Leveraging our experience, we identify the right distributors and design cost-efficient go-to-market strategies that benefit both manufacturers and customers.</p>`
      },
      {
        id: 'core-pillars',
        title: 'Our Core Pillars',
        excerpt: 'Market Knowledge, Continuous Growth, and Win-Win Partnerships form the foundation of our success.',
        fullContent: `<h2>Our Core Pillars</h2>
          <h3>Market Knowledge</h3>
          <p>Combining global insights with local expertise to match the right products with the right channels, supported by targeted marketing strategies.</p>
          <h3>Continuous Growth</h3>
          <p>Adapting to changing markets and building strong, mutually beneficial relationships for sustainable success.</p>
          <h3>Win-Win Partnerships</h3>
          <p>Aligning with supplier goals to ensure profitability and long-term trust across the value chain.</p>`
      },
      {
        id: 'strategic-reach',
        title: 'Our Strategic Reach',
        excerpt: 'TTA serves as a vital link between international manufacturers and global markets.',
        fullContent: `<h2>Our Strategic Reach</h2>
          <p>TTA serves as a vital link between international manufacturers and global markets. We cover key economies and are expanding into high-potential regions. Our expertise helps brands navigate diverse markets and achieve sustainable growth.</p>`
      },
      {
        id: 'business-model',
        title: 'Our Business Model: Built on Teamwork',
        excerpt: 'Teamwork is the foundation of our success through a global network of partners, distributors, and channels.',
        fullContent: `<h2>Our Business Model: Built on Teamwork</h2>
          <p>Teamwork is the foundation of our success. TTA operates through a global network of partners, distributors, and channels—including B2B, online platforms, modern trade, and traditional retail. Our scalable solutions ensure consistent supply, cost efficiency, and outstanding service.</p>
          <p>At TTA, we don't just distribute products—we create markets.</p>`
      },
      {
        id: 'trusted-partnerships',
        title: 'Trusted Partnerships Across Industries',
        excerpt: 'We collaborate with leading brands to build sustainable value chains and long-term benefits.',
        fullContent: `<h2>Trusted Partnerships Across Industries</h2>
          <p>We collaborate with leading brands to build sustainable value chains and long-term benefits for all stakeholders. Examples include:</p>
          <ul>
            <li><strong>Global Manufacturing Co.</strong> – Manufacturing</li>
            <li><strong>Worldwide Distributors</strong> – Distribution</li>
            <li><strong>International Retail Chain</strong> – Retail</li>
            <li><strong>Global Brands Ltd.</strong> – Consumer Goods</li>
            <li><strong>Strategic Partners Group</strong> – Business Services</li>
            <li><strong>Market Leaders Inc.</strong> – Technology</li>
          </ul>`
      },
      {
        id: 'principals',
        title: 'Our Principals',
        excerpt: 'TTA\'s strength lies in trusted partnerships with world-class distributors and strategic principals.',
        fullContent: `<h2>Our Principals</h2>
          <p>TTA's strength lies in trusted partnerships with world-class distributors and strategic principals. We know what to look for in top-tier distributors and how to design cost-effective routes-to-market that benefit all parties.</p>
          <p>Some of the key global principals we work with include:</p>
          <ul>
            <li><strong>Global Manufacturing Co.</strong> – Manufacturing</li>
            <li><strong>Worldwide Distributors</strong> – Distribution</li>
            <li><strong>International Retail Chain</strong> – Retail</li>
            <li><strong>Global Brands Ltd.</strong> – Consumer Goods</li>
            <li><strong>Strategic Partners Group</strong> – Business Services</li>
            <li><strong>Market Leaders Inc.</strong> – Technology</li>
          </ul>`
      },
      {
        id: 'partners',
        title: 'Our Partners',
        excerpt: 'TTA manages and promotes a portfolio of consumer-facing brands, ensuring market visibility and growth.',
        fullContent: `<h2>Our Partners</h2>
          <p>TTA manages and promotes a portfolio of consumer-facing brands, ensuring market visibility and growth across regions:</p>
          <ul>
            <li><strong>Mega Prime:</strong> Premium canned sardines and tuna with strong consumer loyalty in multiple markets.</li>
            <li><strong>Bauducco:</strong> Snack products catering to diverse tastes and age groups, including wafers, cookies, and mini cakes.</li>
            <li><strong>pH Plex:</strong> DIY-friendly haircare products repairing damage from coloring, bleaching, and styling.</li>
            <li><strong>Kaly:</strong> Premium syrup brand offering rich flavor and quality for beverages and culinary uses.</li>
            <li><strong>Jucai:</strong> High-quality Acai products meeting global standards.</li>
          </ul>`
      },
      {
        id: 'who-we-are',
        title: 'Who We Are',
        excerpt: 'TTA is led by two founders with decades of hands-on experience turning businesses into sustainable profit engines.',
        fullContent: `<h2>Who We Are</h2>
          <p>TTA is led by two founders with decades of hands-on experience turning businesses into sustainable profit engines:</p>`
      }
    ];
  }

  getTeamMembers(): TeamMember[] {
    return [
      {
        id: 'nidal-al-zaatari',
        name: 'WHO_WE_ARE.TEAM_MEMBERS.0.NAME',
        title: 'WHO_WE_ARE.TEAM_MEMBERS.0.TITLE',
        image: 'assets/images/Nedal.jpg',
        shortBio: 'WHO_WE_ARE.TEAM_MEMBERS.0.SHORT_BIO',
        fullBio: 'WHO_WE_ARE.TEAM_MEMBERS.0.FULL_BIO'
      },
      {
        id: 'james-lafferty',
        name: 'WHO_WE_ARE.TEAM_MEMBERS.1.NAME',
        title: 'WHO_WE_ARE.TEAM_MEMBERS.1.TITLE',
        image: 'assets/images/James.jpg',
        shortBio: 'WHO_WE_ARE.TEAM_MEMBERS.1.SHORT_BIO',
        fullBio: 'WHO_WE_ARE.TEAM_MEMBERS.1.FULL_BIO'
      },
      {
        id: 'ruslan-humbatov',
        name: 'WHO_WE_ARE.TEAM_MEMBERS.2.NAME',
        title: 'WHO_WE_ARE.TEAM_MEMBERS.2.TITLE',
        image: 'assets/images/Ruslan.jpg',
        shortBio: 'WHO_WE_ARE.TEAM_MEMBERS.2.SHORT_BIO',
        fullBio: 'WHO_WE_ARE.TEAM_MEMBERS.2.FULL_BIO'
      },
      {
        id: 'ahmad-awamleh',
        name: 'WHO_WE_ARE.TEAM_MEMBERS.3.NAME',
        title: 'WHO_WE_ARE.TEAM_MEMBERS.3.TITLE',
        image: 'assets/images/Ahmad-Awamleh.jpg',
        shortBio: 'WHO_WE_ARE.TEAM_MEMBERS.3.SHORT_BIO',
        fullBio: 'WHO_WE_ARE.TEAM_MEMBERS.3.FULL_BIO'
      }
    ];
  }

  getSectionById(id: string): ContentSection | undefined {
    return this.getHomePageSections().find(section => section.id === id);
  }
}
