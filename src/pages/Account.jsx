import { useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'
import BottomNav from '../components/ButtonNav'
import { mockUser, mockHoldings, mockActivity } from '../data/mockData'

export default function Account() {
  const navigate = useNavigate()

  return (
    <PageShell>
      <div style={styles.profileRow}>
        <div style={styles.avatar}>{mockUser.name.charAt(0)}</div>
        <div>
         
          <p style={styles.sub}>CRYPTO</p>
        </div>
      </div>

      <h2 style={styles.sectionTitle}>Holdings</h2>
      <div style={styles.list}>
        {mockHoldings.map((h) => (
          <div key={h.symbol} style={styles.row}>
            <div style={styles.info}>
              <span style={styles.icon}>{h.icon}</span>
              <div>
                <p style={styles.symbol}>{h.symbol}</p>
                <p style={styles.amount}>{h.amount} {h.symbol}</p>
              </div>
            </div>
            <p style={styles.value}>${h.value.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <h2 style={{ ...styles.sectionTitle, marginTop: '1.75rem' }}>Recent activity</h2>
      <div style={styles.list}>
        {mockActivity.map((a, i) => (
          <div key={i} style={styles.activityRow}>
            <div>
              <p style={styles.activityType}>{a.type} {a.pair}</p>
              <p style={styles.activityDate}>{a.date}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={styles.activityAmount}>{a.amount}</p>
              <p style={styles.activityStatus}>{a.status}</p>
            </div>
          </div>
        ))}
      </div>

      <button style={styles.logoutBtn} onClick={() => navigate('/')}>
        Log out
      </button>

      <BottomNav />
    </PageShell>
  )
}

const styles = {
  profileRow: { display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '2rem' },
  avatar: {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    background: 'var(--accent-violet)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: '1.1rem',
  },
  name: { fontWeight: 600, fontSize: '1rem' },
  sub: { fontSize: '0.75rem', color: 'var(--text-secondary)' },
  sectionTitle: { fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' },
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
  symbol: { fontSize: '0.85rem', fontWeight: 600 },
  amount: { fontSize: '0.7rem', color: 'var(--text-secondary)' },
  value: { fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 500 },
  activityRow: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'var(--bg-panel)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '12px',
    padding: '0.8rem 1rem',
  },
  activityType: { fontSize: '0.82rem', fontWeight: 500 },
  activityDate: { fontSize: '0.68rem', color: 'var(--text-secondary)' },
  activityAmount: { fontFamily: 'var(--font-mono)', fontSize: '0.8rem' },
  activityStatus: { fontSize: '0.68rem', color: 'var(--gain)' },
  logoutBtn: {
    marginTop: '2rem',
    width: '100%',
    background: 'var(--bg-panel)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '10px',
    padding: '0.85rem',
    color: 'var(--loss)',
    fontWeight: 600,
    fontSize: '0.85rem',
  },
}
