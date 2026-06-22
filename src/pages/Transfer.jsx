import { useState } from 'react'
import PageShell from '../components/PageShell'
import BottomNav from '../components/ButtonNav'

const tabs = ['Deposit', 'Withdraw', 'Transfer']

export default function Transfer() {
  const [active, setActive] = useState('Deposit')

  return (
    <PageShell>
      <h1 style={styles.heading}>{active}</h1>
      <p style={styles.sub}>Real funds here</p>

      <div style={styles.tabRow}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              ...styles.tab,
              background: active === tab ? 'var(--accent-violet)' : 'var(--bg-panel)',
              color: active === tab ? 'white' : 'var(--text-secondary)',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={styles.card}>
        <label style={styles.label}>
          Asset
          <select style={styles.input} defaultValue="USDT">
            <option>USDT</option>
            <option>BTC</option>
            <option>ETH</option>
          </select>
        </label>
        <label style={styles.label}>
          Amount
          <input style={styles.input} type="number" placeholder="0.00" />
        </label>
      
      </div>

      <BottomNav />
    </PageShell>
  )
}

const styles = {
  heading: { fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.25rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1.5rem' },
  tabRow: { display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' },
  tab: {
    flex: 1,
    border: '1px solid var(--border-subtle)',
    borderRadius: '10px',
    padding: '0.6rem',
    fontSize: '0.8rem',
    fontWeight: 600,
  },
  card: {
    background: 'var(--bg-panel)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '14px',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.1rem',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.45rem',
    fontSize: '0.78rem',
    color: 'var(--text-secondary)',
  },
  input: {
    background: 'var(--bg-panel-raised)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '8px',
    padding: '0.7rem 0.85rem',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
  },
  submitBtn: {
    marginTop: '0.4rem',
    background: 'linear-gradient(90deg, var(--accent-violet), var(--accent-violet-bright))',
    border: 'none',
    borderRadius: '10px',
    padding: '0.85rem',
    color: 'white',
    fontWeight: 600,
    fontSize: '0.9rem',
  },
}
