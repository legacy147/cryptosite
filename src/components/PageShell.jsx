export default function PageShell({ children, withNav = true }) {
  return (
    <div style={styles.outer}>
      <div style={{ ...styles.inner, paddingBottom: withNav ? '5.5rem' : '2rem' }}>
        {children}
      </div>
    </div>
  )
}

const styles = {
  outer: {
    minHeight: '100vh',
    background: 'var(--bg-void)',
    display: 'flex',
    justifyContent: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: '480px',
    minHeight: '100vh',
    padding: '1.5rem 1.25rem',
    position: 'relative',
  },
}
