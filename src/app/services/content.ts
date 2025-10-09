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
        name: 'Nidal Al Zaatari',
        title: 'Managing Partner',
        image: 'assets/images/Nedal.jpg',
        shortBio: 'With over three decades of experience driving business growth and strategy across multiple sectors, specializing in building sustainable, high-performing commercial organizations.',
        fullBio: `<p>With over three decades of experience driving business growth and strategy across multiple sectors, I specialize in building sustainable, high-performing commercial organizations. My expertise spans energy, finance, marketing, sales, digital transformation, and e-commerce, enabling me to design and execute long-term business strategies that deliver consistent revenue and profit growth.</p>
        <p>As Chief Commercial Officer at Fine Hygienic Holding, I lead diverse business channels across 35+ countries and seven clusters, managing modern trade, traditional trade, HORECA, and distributor markets. I work closely with investors to identify merger and acquisition opportunities, driving double-digit annual growth while fostering a culture of sustainability, innovation, and excellence.</p>
        <p>A firm believer in continuous learning and empowerment, I'm passionate about creating agile, forward-thinking FMCG organizations through optimized strategies and digital innovation. I aim to build thriving business ecosystems that generate lasting value and impact across global markets.</p>`
      },
      {
        id: 'james-lafferty',
        name: 'James Michael Lafferty',
        title: 'Managing Partner',
        image: 'assets/images/James.jpg',
        shortBio: 'Chief Executive Officer of Fine Hygienic Holding and one of the most dynamic and multifaceted CEOs in the world, with nearly 40 years of global experience.',
        fullBio: `<p>James Michael Lafferty is the Chief Executive Officer of Fine Hygienic Holding (FHH) and one of the most dynamic and multifaceted CEOs in the world. With nearly 40 years of global experience, he has led top FMCG companies including Procter & Gamble, Coca-Cola, and British American Tobacco across five continents.</p>
        <p>Beyond his corporate achievements, James is an Olympic coach, award-winning journalist, college professor, and world champion athlete. He has coached national and Olympic-level athletes, most notably guiding pole-vaulter EJ Obiena to a world #2 ranking and a 4th place finish at the 2024 Paris Olympics.</p>
        <p>A passionate advocate for wellness and leadership, James has been recognized globally — named CEO of the Year by both the Burj CEO Awards and the GCC Best Employer Awards, and listed multiple times by Forbes Middle East among the region's Top 100 CEOs.</p>`
      },
      {
        id: 'ruslan-humbatov',
        name: 'Ruslan Humbatov',
        title: 'Commercial Executive',
        image: 'assets/images/Ruslan.jpg',
        shortBio: 'Dynamic and results-driven Commercial Executive with over 15 years of leadership experience in the FMCG industry across the CIS region.',
        fullBio: `<p>Dynamic and results-driven Commercial Executive with over 15 years of leadership experience in the FMCG industry across the CIS region. Recipient of the Global P&G CEO Award for outstanding performance. Skilled in distributor network management, market expansion, and strategic planning, with a proven record of driving sustainable growth and operational excellence.</p>
        <p>A certified P&G Trainer, I have established Data & Analytics Centers and led impactful capability-building programs that empowered teams and strengthened organizational performance. With a strong commercial mindset, cross-cultural expertise, and a passion for developing people, I excel in building high-performing teams and fostering long-term business success in dynamic markets.</p>`
      },
      {
        id: 'ahmad-awamleh',
        name: 'Ahmad Al Awamleh',
        title: 'Business Development Manager',
        image: 'assets/images/Ahmad-Awamleh.jpg',
        shortBio: 'Engineer and business strategist with over 12 years of experience driving brand expansion, operational excellence, and revenue growth across multiple regions.',
        fullBio: `<p>Engineer and business strategist with over 12 years of experience driving brand expansion, operational excellence, and revenue growth across multiple regions. Known for a data-driven approach and strong leadership in optimizing quality, compliance, and performance, with successful partnerships with global names such as Red Bull and Floward, contributing to increased market share and customer satisfaction.</p>
        <p>Skilled in building scalable systems, improving efficiency, and developing strategies that align innovation with commercial success. Passionate about continuous improvement and sustainable growth, with a focus on delivering measurable results that enhance brand reputation, strengthen operations, and ensure long-term profitability.</p>`
      }
    ];
  }

  getSectionById(id: string): ContentSection | undefined {
    return this.getHomePageSections().find(section => section.id === id);
  }
}
