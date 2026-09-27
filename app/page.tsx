import { profile, projects, skills } from "@/content";
import styles from "./page.module.css";

function RouteMark() {
  // A drawn route with a traveling point — a nod to live delivery tracking,
  // without leaning on a literal map or icon set.
  return (
    <svg
      className={styles.routeMark}
      viewBox="0 0 320 320"
      fill="none"
      aria-hidden="true"
    >
      <path
        className={styles.routePath}
        d="M40 260 C 40 180, 120 200, 130 140 S 230 40, 280 60"
        stroke="var(--accent-dim)"
        strokeWidth="1.5"
      />
      <path
        className={`${styles.routePath} ${styles.routePathDraw}`}
        d="M40 260 C 40 180, 120 200, 130 140 S 230 40, 280 60"
        stroke="var(--accent)"
        strokeWidth="1.5"
        pathLength="1"
      />
      <circle className={styles.routeStart} cx="40" cy="260" r="4" fill="var(--muted)" />
      <circle className={styles.routeEnd} cx="280" cy="60" r="4" fill="var(--accent)" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>{profile.role} · {profile.location}</p>
          <h1 className={styles.heroLine}>{profile.tagline}</h1>
          <p className={styles.heroSummary}>{profile.summary}</p>
          <a href="#work" className={styles.cta}>
            See recent work
          </a>
        </div>
        <RouteMark />
      </section>

      <section id="work" className={styles.work}>
        <h2 className={styles.sectionHeading}>Selected work</h2>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <article key={project.name} className={styles.project}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectRole}>{project.role}</p>
              </div>
              <p className={styles.projectSummary}>{project.summary}</p>
              <p className={styles.projectDetail}>{project.detail}</p>
              <p className={styles.projectStack}>
                {project.stack.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className={styles.about}>
        <h2 className={styles.sectionHeading}>About</h2>
        <p className={styles.aboutText}>{profile.summary}</p>
        <p className={styles.skillsText}>{skills.join(" · ")}</p>
      </section>

      <section id="contact" className={styles.contact}>
        <h2 className={styles.sectionHeading}>Get in touch</h2>
        <p className={styles.contactText}>
          Open to fintech and product engineering roles, and select freelance
          builds through AI Tech Solutions.
        </p>
        <div className={styles.contactLinks}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className={styles.footer}>
          {profile.name} · {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}
