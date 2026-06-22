import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'

export default function Login() {
  const navigate = useNavigate()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo only — no real authentication. Goes straight to dashboard.
    navigate('/dashboard')
  }

  return (
    <PageShell withNav={false}>
      <div style={styles.topRow}>
        <span style={styles.brand}>CRYPTO</span>
      </div>

      <div style={styles.heroBlock}>
        <p style={styles.eyebrow}>Welcome back</p>
        <h1 style={styles.heading}>Sign in to your<br />portfolio</h1>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Account ID
          <input
            style={styles.input}
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            placeholder="Enter your account ID"
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </label>

        <button type="submit" style={styles.submitBtn}>
          Sign in
        </button>
      </form>

    
    </PageShell>
  )
}

const styles = {
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3rem',
  },
  brand: {
    fontWeight: 700,
    letterSpacing: '0.12em',
    fontSize: '0.95rem',
    color: 'var(--accent-violet-bright)',
  },
  heroBlock: {
    marginBottom: '2.5rem',
  },
  eyebrow: {
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
    marginBottom: '0.5rem',
  },
  heading: {
    fontSize: '2rem',
    lineHeight: 1.2,
    fontWeight: 600,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    fontSize: '0.8rem',
    color: 'var(--text-secondary)',
  },
  input: {
    background: 'var(--bg-panel)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '10px',
    padding: '0.85rem 1rem',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
  },
  submitBtn: {
    marginTop: '0.5rem',
    background: 'linear-gradient(90deg, var(--accent-violet), var(--accent-violet-bright))',
    border: 'none',
    borderRadius: '10px',
    padding: '0.95rem',
    color: 'white',
    fontWeight: 600,
    fontSize: '0.95rem',
  },
  disclaimer: {
    marginTop: '2.5rem',
    fontSize: '0.72rem',
    color: 'var(--text-secondary)',
    textAlign: 'center',
    lineHeight: 1.5,
  },
}
