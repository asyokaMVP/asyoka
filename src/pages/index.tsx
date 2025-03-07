import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            Dive Deeper
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProductManagerPortfolio() {
  const skills = [
    {
      id: 1,
      name: 'Product Design',
      description: 'User-centered design approach with focus on solving real user problems through design thinking methodology',
      icon: 'img/design.svg',
      level: 'Beginner',
      details: [
        'Design Thinking & User-Centered Design (UCD)',
        // 'User Personas & Jobs To Be Done (JTBD)',
        'Wireframing & Prototyping in Figma',
        'Usability Testing & User Research',
        'Collaborative design workshops with Miro'
      ]
    },
    {
      id: 2,
      name: 'Generative AI',
      description: 'Leveraging AI capabilities to enhance product development, ideation, and market reach through effective prompt engineering and AI integration',
      icon: 'img/ai.svg',
      level: 'Beginner',
      details: [
        'AI Product Management Lifecycle',
        'GenAI and LLMs',
        'Prompt Engineering',
      ]
    },
    {
      id: 3,
      name: 'Product Planning',
      description: 'Strategic and tactical roadmapping with effective prioritization frameworks to deliver maximum value',
      icon: 'img/plan.svg',
      level: 'Beginner',
      details: [
        'MVP Definition & Lean Product Development',
        'Product Roadmapping (tactical & strategic)',
        'Prioritization using RICE & Kano Model',
        // 'OKRs (Objectives and Key Results)',
        // 'Stakeholder management & alignment'
      ]
    },
    {
      id: 4,
      name: 'Development & Launch',
      description: 'Agile product development with effective go-to-market strategies and feature release management',
      icon: 'img/launch.svg',
      level: 'Beginner',
      details: [
        'Agile/Scrum Methodology',
        'Go-To-Market (GTM) Strategy',
        'Feature Specification & User Stories',
        // 'Feature Flagging & Phased Rollouts',
        // 'Beta Testing Programs',
      ]
    },
    {
      id: 5,
      name: 'Product Metrics',
      description: 'Data-driven decision making through comprehensive metrics analysis and user behavior tracking',
      icon: 'img/metrics.svg',
      level: 'Beginner',
      details: [
        'A/B Testing & Experimentation',
        'AARRR (Pirate Metrics) Framework',
        // 'North Star Metric Definition',
        // 'Cohort Analysis & Retention Tracking',
        // 'LTV/CAC Optimization',
      ]
    },
  ];

  const education = [
    {
      degree: 'High School Graduate',
      institution: 'Ludwig Geißler School',
      year: '2019-2021',
      description: 'High School Diploma with focus on Economics and Business Administration',
      logo: 'img/school.svg'
    },
    {
      degree: 'Partial completion of B.Sc. in Medical Information Sciences',
      institution: 'University of Augsburg',
      year: '2023-2025',
      description: 'Combines a sound understanding of the fundamentals of computer science with subject-specific competencies in medicine, biology, and healthcare',
      logo: 'img/university.png'
    }
  ];

  const certifications = [
    {
      name: 'Agile Project Management',
      issuer: 'Google',
      logo: 'img/google.svg',
      year: '2025'
    },
    {
      name: 'Foundations of User Experience (UX) Design',
      issuer: 'Google',
      logo: 'img/google.svg',
      year: '2025'
    },
    {
      name: 'Google AI Essentials',
      issuer: 'Google',
      logo: 'img/google.svg',
      year: '2025'
    },
    {
      name: 'Generative AI: Introduction and Applications',
      issuer: 'IBM',
      logo: 'img/ibm.svg',
      year: '2025'
    },
    // {
    //   name: 'Design Thinking Practitioner',
    //   issuer: 'Google',
    //   logo: 'img/google.svg',
    //   year: '2022'
    // },
    // {
    //   name: 'Advanced Product Management',
    //   issuer: 'Google',
    //   logo: 'img/google.svg',
    //   year: '2023'
    // },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      description: 'Led a complete redesign of the user journey using Jobs To Be Done framework, resulting in 35% improvement in conversion rate and 28% increase in average order value.',
      image: 'img/portfolio/google.svg',
      tags: ['UX Design', 'User Research', 'A/B Testing'],
    },
    {
      id: 2,
      title: 'SaaS Product Launch',
      description: 'Developed MVP strategy and roadmap for a B2B SaaS product. Implemented RICE prioritization framework and OKRs to align team efforts, achieving 120% of Q1 acquisition targets.',
      image: 'img/portfolio/google.svg',
      tags: ['MVP', 'Go-to-Market', 'Metrics'],
    },
    {
      id: 3,
      title: 'Mobile App Retention Strategy',
      description: 'Analyzed user cohorts and implemented retention strategy that reduced churn by 40%. Established North Star Metric and supporting metrics to guide product development.',
      image: 'img/portfolio/mobile-app.jpg',
      tags: ['Retention', 'Analytics', 'User Engagement'],
    },
  ];

  return (
    <section className={styles.pmPortfolio}>
      <div className="container">
        <div className={styles.pmPortfolioHeader}>
          <h2 className={styles.pmPortfolioTitle}>Product Manager ~ AI Journey</h2>
          <p className={styles.pmPortfolioSubtitle}>
          Exploring the intersection of AI and product management. This blog is my personal lab for insights, skills, and future projects..
          </p>
        </div>

        {/* Skills Section */}
        <div className={styles.pmSkillsSection}>
          <h2 className={styles.pmSkillsTitle}>Core Competencies</h2>
          <div className={styles.pmSkillsGrid}>
            {skills.map((skill) => (
              <div key={skill.id} className={styles.pmSkillCard}>
                <div className={styles.pmSkillHeader}>
                  <div className={styles.pmSkillIcon}>
                    <img src={skill.icon} alt={skill.name} style={{ filter: 'brightness(0) saturate(100%) invert(53%) sepia(20%) saturate(1651%) hue-rotate(198deg) brightness(106%) contrast(94%)' }} />
                  </div>
                  <div>
                    <h3 className={styles.pmSkillName}>{skill.name}</h3>
                    <span className={styles.pmSkillLevel}>{skill.level}</span>
                  </div>
                </div>
                <p className={styles.pmSkillDescription}>{skill.description}</p>
                <ul className={styles.pmSkillDetails}>
                  {skill.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section - Moved up for more impact */}
        {/* <div className={styles.pmProjectsSection}>
          <h2 className={styles.pmSectionTitle}>Featured Projects</h2>
          <div className={styles.pmProjectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.pmProjectCard}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.pmProjectImage} 
                />
                <div className={styles.pmProjectContent}>
                  <h3 className={styles.pmProjectTitle}>{project.title}</h3>
                  <p className={styles.pmProjectDescription}>{project.description}</p>
                  <div className={styles.pmProjectMeta}>
                    <div className={styles.pmProjectTags}>
                      {project.tags.map((tag, index) => (
                        <span key={index} className={styles.pmProjectTag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Education Section */}
        <div className={styles.pmEducationSection}>
          <h2 className={styles.pmSectionTitle}>Education</h2>
          <div className={styles.pmEducationGrid}>
            {education.map((item, index) => (
              <div key={index} className={styles.pmEducationCard}>
                <h3 className={styles.pmEducationDegree}>{item.degree}</h3>
                <div className={styles.pmEducationMeta}>
                  <div className={styles.pmEducationInstitutionContainer}>
                    <img 
                      src={item.logo} 
                      alt={`${item.institution} logo`} 
                      className={styles.pmEducationLogo} 
                    />
                    <span className={styles.pmEducationInstitution}>{item.institution}</span>
                  </div>
                  <span className={styles.pmEducationYear}>{item.year}</span>
                </div>
                <p className={styles.pmEducationDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className={styles.pmCertificationsSection}>
          <h2 className={styles.pmSectionTitle}>Certifications</h2>
          <div className={styles.pmCertificationsGrid}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.pmCertificationCard}>
                <h3 className={styles.pmCertificationName}>{cert.name}</h3>
                <div className={styles.pmCertificationMeta}>
                  <div className={styles.pmCertificationIssuerContainer}>
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`} 
                      className={styles.pmCertificationLogo} 
                    />
                    <span className={styles.pmCertificationIssuer}>{cert.issuer}</span>
                  </div>
                  <span className={styles.pmCertificationYear}>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.pmContactSection}>
          <h2 className={styles.pmContactTitle}>Let's Build Great Products Together</h2>
          <p className={styles.pmContactText}>
            I'm passionate about creating user-centered products that drive business growth. Let's connect to discuss how I can help your team deliver exceptional product experiences.
          </p>
          <div className={styles.pmContactButtons}>
            <a href="mailto:alinakubenova@icloud.com" className="button button--primary button--lg">
              Contact Me
            </a>
            <a href="/test.pdf" className="button button--secondary button--lg" target="_blank">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Product Manager Portfolio showcasing skills, education, and projects">
      <HomepageHeader />
      <main>
        <ProductManagerPortfolio />
      </main>
    </Layout>
  );
}
