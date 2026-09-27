import {
  profile,
  projects,
  experience,
  publicProjects,
  clientProjects,
  softcityProjects,
  skillCategories,
} from "@/content";
import styles from "./page.module.css";
import AnimatedSection from "./AnimatedSection";
import Navbar from "./Navbar";
import BackToTop from "./BackToTop";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiExternalLink } from "react-icons/fi";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <BackToTop />

      <AnimatedSection className={styles.hero} delay={0.1}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>{profile.role} · {profile.location}</p>
          <h1 className={styles.heroLine}>{profile.tagline}</h1>
          <p className={styles.heroSummary}>{profile.summary}</p>
          <div className={styles.ctaGroup}>
            <a href="#work" className={styles.cta}>
              See recent work
            </a>
            <a 
              href="https://docs.google.com/document/d/1_DKqmwUCgioVAoFjv97qCMvfwW2o-qiF/export?format=pdf"
              className={styles.ctaSecondary}
            >
              Download CV
            </a>
          </div>
        </div>
        <div className={styles.heroPhotoFrame}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.heroPhoto}
            src={profile.avatar}
            alt={profile.name}
            width={220}
            height={220}
          />
        </div>
      </AnimatedSection>

      <AnimatedSection id="work" className={styles.work} delay={0.2}>
        <h2 className={styles.sectionHeading}>Selected work</h2>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <article key={project.name} className={styles.project}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectRole}>
                  {project.role}
                  {project.dates ? ` · ${project.dates}` : ""}
                </p>
              </div>
              <p className={styles.projectSummary}>{project.summary}</p>
              <p className={styles.projectDetail}>{project.detail}</p>
              <p className={styles.projectStack}>{project.stack.join(", ")}</p>
              {project.link && (
                <a
                  className={styles.projectLink}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.link.replace("https://", "")} <FiExternalLink style={{ marginLeft: "4px" }} />
                </a>
              )}
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="experience" className={styles.experience} delay={0.1}>
        <h2 className={styles.sectionHeading}>Career</h2>
        <div className={styles.experienceList}>
          {experience.map((role) => (
            <article key={role.title + role.org} className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <p className={styles.experienceTitle}>
                  {role.title}, {role.org}
                </p>
                <p className={styles.experienceDates}>{role.dates}</p>
              </div>
              <p className={styles.experienceDetail}>{role.detail}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="client-work" className={styles.publicProjects} delay={0.1}>
        <h2 className={styles.sectionHeading}>Client Work</h2>
        <div className={styles.publicProjectGrid}>
          {publicProjects.map((project) => {
            const link = project.demo ?? project.repo;
            return (
              <a
                key={project.name}
                className={styles.publicProjectCard}
                href={link ?? "#client-work"}
                target={link ? "_blank" : undefined}
                rel={link ? "noreferrer" : undefined}
              >
                <p className={styles.publicProjectName}>
                  {project.name} {link && <FiExternalLink style={{ marginLeft: "4px", fontSize: "0.8em" }} />}
                </p>
                <p className={styles.publicProjectDescription}>
                  {project.description}
                </p>
              </a>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection id="softcity-projects" className={styles.clientWork} delay={0.1}>
        <h2 className={styles.sectionHeading}>Softcity Group Projects</h2>
        <div className={styles.clientProjectList}>
          {softcityProjects.map((project) => (
            <div key={project.name} className={styles.clientProject}>
              <p className={styles.clientProjectName}>
                {project.name}
                <span className={styles.clientProjectCategory}>
                  {" "}
                  — {project.category}
                </span>
              </p>
              <p className={styles.clientProjectDescription}>
                {project.description}
              </p>
              <p className={styles.clientProjectStack}>{project.stack}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="about" className={styles.about} delay={0.1}>
        <h2 className={styles.sectionHeading}>About & Skills</h2>
        <p className={styles.aboutText}>{profile.summary}</p>
        <p className={styles.aboutText}>{profile.education}</p>
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((group) => (
            <div key={group.category} className={styles.skillColumn}>
              <h3 className={styles.skillCategoryTitle}>{group.category}</h3>
              <div className={styles.skillPills}>
                {group.items.map((skill) => (
                  <span key={skill} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className={styles.contact} delay={0.1}>
        <h2 className={styles.sectionHeading}>Get in touch</h2>
        <p className={styles.contactText}>
          Open to fintech and product engineering roles, and select freelance
          builds through AI Tech Solutions.
        </p>
        <div className={styles.contactLinks}>
          <a href={`mailto:${profile.email}`}>
            <FiMail style={{ marginRight: "6px" }} />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <FiPhone style={{ marginRight: "6px" }} />
            {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <FiGithub style={{ marginRight: "6px" }} />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin style={{ marginRight: "6px" }} />
            LinkedIn
          </a>
        </div>
        <p className={styles.footer}>
          {profile.name} · {new Date().getFullYear()}
        </p>
      </AnimatedSection>
    </main>
  );
}
