import PageShell from '../components/PageShell'
import BottomNav from '../components/ButtonNav'
import { mockMarket } from '../data/mockData'

export default function Trade() {
  return (
    <PageShell>
      <h1 style={styles.heading}>Trade</h1>
      <p style={styles.sub}>Sample market pairs</p>

      <div style={styles.list}>
        {mockMarket.map((coin) => (
          <div key={coin.symbol} style={styles.row}>
            <div style={styles.info}>
              <span style={styles.icon}>{coin.icon}</span>
              <div>
                <p style={styles.pair}>{coin.pair}</p>
                <p style={styles.name}>{coin.name}</p>
              </div>
            </div>
            <button style={styles.tradeBtn}>Trade</button>
          </div>
        ))}
      </div>

      <BottomNav />
    </PageShell>
  )
}

const styles = {
  heading: { fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.25rem' },
  sub: { color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1.5rem' },
  list: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--bg-panel)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '12px',
    padding: '0.8rem 1rem',
  },
  info: { display: 'flex', alignItems: 'center', gap: '0.65rem' },
  icon: { fontSize: '1.3rem', width: '2rem', textAlign: 'center' },
  pair: { fontSize: '0.85rem', fontWeight: 600 },
  name: { fontSize: '0.7rem', color: 'var(--text-secondary)' },
  tradeBtn: {
    background: 'var(--accent-violet)',
    border: 'none',
    borderRadius: '8px',
    padding: '0.4rem 0.9rem',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: 600,
  },
}
