import { useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'
import BottomNav from '../components/ButtonNav'
import { mockUser, mockMarket } from '../data/mockData'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <PageShell>
      <div style={styles.topRow}>
        <span style={styles.brand}>CRYPTO</span>
        <button style={styles.langBtn}>EN</button>
      </div>

      <div style={styles.balanceCard}>
        <p style={styles.balanceLabel}>Total balance (USD)</p>
        <h1 style={styles.balanceValue}>
          ${mockUser.totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </h1>
        <div style={styles.balanceSplit}>
          <div>
            <p style={styles.splitLabel}>Available</p>
            <p style={styles.splitValue}>${mockUser.available.toLocaleString()}</p>
          </div>
          <div>
            <p style={styles.splitLabel}>In orders</p>
            <p style={styles.splitValue}>${mockUser.inOrders.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div style={styles.actionsRow}>
        {['Deposit', 'Withdraw', 'Transfer'].map((label) => (
          <button key={label} style={styles.actionBtn} onClick={() => navigate('/transfer')}>
            <span style={styles.actionIcon}>{actionIcons[label]}</span>
            {label}
          </button>
        ))}
      </div>

      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Market</h2>
        <span style={styles.sectionSub}>USDT pairs</span>
      </div>

      <div style={styles.marketList}>
        {mockMarket.map((coin) => (
          <div key={coin.symbol} style={styles.marketRow}>
            <div style={styles.coinInfo}>
              <span style={styles.coinIcon}>{coin.icon}</span>
              <div>
                <p style={styles.coinPair}>{coin.pair}</p>
                <p style={styles.coinName}>{coin.name}</p>
              </div>
            </div>
            <div style={styles.priceCol}>
              <p style={styles.coinPrice}>
                {coin.price < 1 ? coin.price.toFixed(6) : coin.price.toLocaleString()}
              </p>
              <p
                style={{
                  ...styles.coinChange,
                  color: coin.change > 0 ? 'var(--gain)' : coin.change < 0 ? 'var(--loss)' : 'var(--text-secondary)',
                }}
              >
                {coin.change > 0 ? '+' : ''}
                {coin.change.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </PageShell>
  )
}

const actionIcons = {
  Deposit: '↓',
  Withdraw: '↑',
  Transfer: '⇄',
}

const styles = {
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  brand: {
    fontWeight: 700,
    letterSpacing: '0.12em',
    fontSize: '0.95rem',
    color: 'var(--accent-violet-bright)',
  },
  langBtn: {
    background: 'var(--bg-panel)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '6px',
    padding: '0.3rem 0.6rem',
    color: 'var(--text-secondary)',
    fontSize: '0.75rem',
  },
  balanceCard: {
    background: 'linear-gradient(135deg, var(--bg-panel-raised), var(--bg-panel))',
    border: '1px solid var(--border-subtle)',
    borderRadius: '16px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
  },
  balanceLabel: {
    color: 'var(--text-secondary)',
    fontSize: '0.8rem',
    marginBottom: '0.4rem',
  },
  balanceValue: {
    fontFamily: 'var(--font-mono)',
    fontSize: '2.1rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  balanceSplit: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '0.75rem',
  },
  splitLabel: {
    fontSize: '0.72rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.2rem',
  },
  splitValue: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.95rem',
    fontWeight: 500,
  },
  demoTag: {
    fontSize: '0.68rem',
    color: 'var(--text-secondary)',
    opacity: 0.8,
  },
  actionsRow: {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '2rem',
  },
  actionBtn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.4rem',
    background: 'var(--bg-panel)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '12px',
    padding: '0.9rem 0.5rem',
    color: 'var(--text-primary)',
    fontSize: '0.78rem',
    fontWeight: 500,
  },
  actionIcon: {
    fontSize: '1.1rem',
    color: 'var(--accent-violet-bright)',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '0.75rem',
  },
  sectionTitle: {
    fontSize: '1rem',
    fontWeight: 600,
  },
  sectionSub: {
    fontSize: '0.72rem',
    color: 'var(--text-secondary)',
  },
  marketList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  marketRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--bg-panel)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '12px',
    padding: '0.8rem 1rem',
  },
  coinInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
  },
  coinIcon: {
    fontSize: '1.3rem',
    width: '2rem',
    textAlign: 'center',
  },
  coinPair: {
    fontSize: '0.85rem',
    fontWeight: 600,
  },
  coinName: {
    fontSize: '0.7rem',
    color: 'var(--text-secondary)',
  },
  priceCol: {
    textAlign: 'right',
  },
  coinPrice: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    fontWeight: 500,
  },
  coinChange: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.72rem',
  },
}
