import { Link } from "react-router-dom";
import {
  FaArrowDown,
  FaArrowRight,
  FaBook,
  FaCheck,
  FaChevronRight,
  FaFingerprint,
  FaLock,
  FaSearch,
  FaShieldAlt,
  FaUserPlus,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext.jsx";
import styles from "./Home.module.css";

const workflows = [
  {
    number: "01",
    icon: FaUserPlus,
    title: "Build a trusted record",
    description:
      "Capture the details your institution needs, then add clear face images to create an enrollment record.",
    label: "ENROLLMENT",
    to: "/enrollment",
  },
  {
    number: "02",
    icon: FaSearch,
    title: "Check an identity",
    description:
      "Submit a new image and compare it with enrolled records to see the closest match and similarity score.",
    label: "VERIFICATION",
    to: "/verification",
  },
  {
    number: "03",
    icon: FaShieldAlt,
    title: "Keep work in view",
    description:
      "Review activity and manage identity workflows from a single, clear workspace.",
    label: "OVERVIEW",
    to: "/dashboard",
  },
];

function WorkspacePreview() {
  return (
    <div className={styles.productStage} aria-label="Preview of the CogniFace workspace">
      <div className={styles.stageGlow} />
      <div className={styles.workspace}>
        <aside className={styles.workspaceRail} aria-hidden="true">
          <div className={styles.railMark}><FaFingerprint /></div>
          <span className={`${styles.railItem} ${styles.railItemActive}`}><FaShieldAlt /></span>
          <span className={styles.railItem}><FaUserPlus /></span>
          <span className={styles.railItem}><FaSearch /></span>
          <span className={styles.railDivider} />
          <span className={styles.railItem}><FaBook /></span>
        </aside>

        <div className={styles.workspaceMain}>
          <div className={styles.workspaceTopbar}>
            <div className={styles.breadcrumb}><span>Workspace</span><FaChevronRight /><strong>Overview</strong></div>
            <span className={styles.workspaceAvatar}>CF</span>
          </div>

          <div className={styles.workspaceIntro}>
            <span className={styles.workspaceOverline}>COGNIFACE WORKSPACE</span>
            <h2>Identity overview</h2>
            <p>A clear view of your enrollment and verification activity.</p>
          </div>

          <div className={styles.overviewGrid}>
            <div className={styles.overviewTile}>
              <span className={styles.tileIcon}><FaUserPlus /></span>
              <span className={styles.tileLabel}>Enrollment</span>
              <strong>People records</strong>
              <small>Manage enrolled identities</small>
              <span className={styles.tileArrow}><FaArrowRight /></span>
            </div>
            <div className={styles.overviewTile}>
              <span className={`${styles.tileIcon} ${styles.tileIconMint}`}><FaSearch /></span>
              <span className={styles.tileLabel}>Verification</span>
              <strong>Find a match</strong>
              <small>Compare a submitted image</small>
              <span className={styles.tileArrow}><FaArrowRight /></span>
            </div>
          </div>

          <div className={styles.activityPanel}>
            <div className={styles.activityHead}>
              <strong>How a check works</strong>
              <span>THREE CLEAR STEPS</span>
            </div>
            <div className={styles.activityRow}>
              <span className={styles.activityStep}>01</span>
              <span className={styles.activityCheck}><FaCheck /></span>
              <span className={styles.activityCopy}><strong>Image received</strong><small>Quality checks help prepare the image</small></span>
              <span className={styles.activityStatus}>READY</span>
            </div>
            <div className={styles.activityRow}>
              <span className={styles.activityStep}>02</span>
              <span className={styles.activityCheck}><FaSearch /></span>
              <span className={styles.activityCopy}><strong>Records compared</strong><small>Check against enrolled identities</small></span>
              <span className={styles.activityStatus}>MATCH</span>
            </div>
            <div className={styles.activityRow}>
              <span className={styles.activityStep}>03</span>
              <span className={styles.activityCheck}><FaShieldAlt /></span>
              <span className={styles.activityCopy}><strong>Result returned</strong><small>Review the closest result</small></span>
              <span className={styles.activityStatus}>DONE</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.stageAnnotation}>
        <span><FaLock /></span>
        <div><strong>Session protection</strong><small>HttpOnly session cookies</small></div>
      </div>
    </div>
  );
}

function Home() {
  const { isLoggedIn, user } = useAuth();

  if (isLoggedIn) {
    return (
      <main className={styles.home}>
        <section className={styles.memberHero}>
          <div className={styles.memberIntro}>
            <span className={styles.darkEyebrow}><i /> YOUR COGNIFACE WORKSPACE</span>
            <h1>Good to have you back, <span>{user?.fullName?.split(" ")[0] || "there"}.</span></h1>
            <p>Choose a workspace action to continue.</p>
          </div>
          <div className={styles.memberActions}>
            {workflows.map(({ icon: Icon, title, description, to }) => (
              <Link className={styles.memberAction} key={to} to={to}>
                <span className={styles.memberActionIcon}><Icon /></span>
                <span><strong>{title}</strong><small>{description}</small></span>
                <FaArrowRight className={styles.memberActionArrow} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.heroEyebrow}><i /> IDENTITY OPERATIONS FOR CAMPUS</span>
            <h1>Make every identity <span>count.</span></h1>
            <p>
              A clearer way to enroll people, verify identities, and keep campus
              workflows moving, with CogniFace.
            </p>
            <div className={styles.heroActions}>
              <Link to="/signup" className={styles.primaryButton}>
                Create a new account <FaArrowRight />
              </Link>
              <Link to="/login" className={styles.textButton}>Sign in <FaArrowRight /></Link>
            </div>
            <div className={styles.heroFootnote}>
              <FaLock /> Built for thoughtful, privacy-conscious identity workflows
            </div>
          </div>
          <WorkspacePreview />
        </div>
        <a className={styles.scrollCue} href="#platform">
          <span>EXPLORE THE PLATFORM</span><FaArrowDown />
        </a>
        <div className={styles.heroIndex} aria-hidden="true">CF&nbsp; / &nbsp;01—03</div>
      </section>

      <section className={styles.platformIntro} id="platform">
        <div className={styles.platformLabel}>
          <span className={styles.sectionIndex}>01</span>
          <span>THE PLATFORM</span>
        </div>
        <div className={styles.platformStatement}>
          <h2>From the first record to the final result.</h2>
          <p>
            Identity work should feel connected. CogniFace brings enrollment,
            verification, and workspace oversight into one considered flow.
          </p>
        </div>
        <div className={styles.platformRule}><span /></div>
      </section>

      <section className={styles.workflowSection}>
        <div className={styles.workflowHeading}>
          <div>
            <span className={styles.sectionKicker}>A BETTER WAY TO WORK</span>
            <h2>Three steps.<br />One connected system.</h2>
          </div>
          <p>Give your team a consistent way to create records and make identity checks without losing sight of the work.</p>
        </div>

        <div className={styles.workflowList}>
          {workflows.map(({ number, icon: Icon, title, description, label, to }) => (
            <Link to={to} className={styles.workflowRow} key={number}>
              <span className={styles.workflowNumber}>{number}</span>
              <span className={styles.workflowIcon}><Icon /></span>
              <div className={styles.workflowCopy}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className={styles.workflowArrow}><FaArrowRight /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.securitySection}>
        <div className={styles.securityMark}><FaFingerprint /></div>
        <div className={styles.securityCopy}>
          <span className={styles.sectionKicker}>SECURITY IS PART OF THE FLOW</span>
          <h2>Designed to protect the work behind every check.</h2>
          <p>
            CogniFace keeps access and refresh tokens in HttpOnly session
            cookies, while image-quality checks are built into the enrollment
            experience.
          </p>
          <Link to="/ourblog" className={styles.securityLink}>Read blog<FaArrowRight /></Link>
        </div>
        <div className={styles.securityFacts}>
          <div><span>01</span><strong>Protected sessions</strong><small>Tokens are stored in HttpOnly cookies</small></div>
          <div><span>02</span><strong>Quality checks</strong><small>Better image inputs for enrollment</small></div>
          <div><span>03</span><strong>Clear workflows</strong><small>People, records, and results in context</small></div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={styles.finalOrbit} aria-hidden="true"><span /><span /><span /></div>
        <div className={styles.finalCopy}>
          <span className={styles.heroEyebrow}><i /> START WITH A CLEARER WORKFLOW</span>
          <h2>Make room for better identity decisions.</h2>
          <p>Create a CogniFace account and bring your campus identity workflow into focus.</p>
        </div>
        <Link to="/signup" className={styles.finalButton}>Get started <FaArrowRight /></Link>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} CogniFace</span>
        <span>Identity workflows, made clearer.</span>
        <Link to="/ourblog">Explore our blog <FaArrowRight /></Link>
      </footer>
    </main>
  );
}

export default Home;
