import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #0f2a44 0%, #1a365d 100%)',
      color: 'white',
      padding: '3rem 2rem',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center'
    },
    footerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
    },
    footerTitle: {
      fontSize: '1.6rem',
      fontWeight: '800',
      marginBottom: '0.5rem',
      color: '#10b981', // Premium Emerald Green Accent
      letterSpacing: '-0.5px',
    },
    footerDescription: {
      fontSize: '0.95rem',
      color: 'rgba(255, 255, 255, 0.6)',
      maxWidth: '600px',
      margin: '0 auto 2rem auto',
      lineHeight: '1.6'
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    copyright: {
      fontSize: '0.9rem',
      color: 'rgba(255, 255, 255, 0.5)',
    },
    bottomLinks: {
      display: 'flex',
      gap: '2rem',
    },
    bottomLink: {
      color: 'rgba(255, 255, 255, 0.5)',
      textDecoration: 'none',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Core Identity Header */}
        <h4 style={styles.footerTitle}>Atharva Instant Credit Tracker</h4>
        <p style={styles.footerDescription}>
          An advanced financial underwriting match engine and credit analysis platform managing dynamic loan pipelines across Indian banking networks.
        </p>

        {/* Clean Footer Bottom */}
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>
            © 2026 Atharva Instant Credit Tracker. All rights reserved.
          </p>
          <div style={styles.bottomLinks}>
            <NavLink to="/about" style={styles.bottomLink}>About System</NavLink>
            <NavLink to="/privacy" style={styles.bottomLink}>Privacy Policy</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
