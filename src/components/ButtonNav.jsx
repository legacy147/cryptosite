import { NavLink } from 'react-router-dom'

const items = [
  { to: '/dashboard', label: 'Home', icon: HomeIcon },
  { to: '/trade', label: 'Trade', icon: TradeIcon },
  { to: '/transfer', label: 'Transfer', icon: TransferIcon },
  { to: '/account', label: 'Account', icon: AccountIcon },
]

export default function BottomNav() {
  return (
    <nav style={styles.nav}>
      {items.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          style={({ isActive }) => ({
            ...styles.item,
            color: isActive ? 'var(--accent-violet-bright)' : 'var(--text-secondary)',
          })}
        >
          <Icon />
          <span style={styles.label}>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9h14v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function TradeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 17V7M4 7l3 3M4 7l-3 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 7v10M20 17l3-3M20 17l-3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function TransferIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 16V4M7 4l-3 3M7 4l3 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8v12M17 20l3-3M17 20l-3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function AccountIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.5 3.13-6 7-6s7 2.5 7 6" strokeLinecap="round" />
    </svg>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-around',
    background: 'var(--bg-panel)',
    borderTop: '1px solid var(--border-subtle)',
    padding: '0.6rem 0 calc(0.6rem + env(safe-area-inset-bottom))',
    zIndex: 50,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.7rem',
    fontWeight: 500,
  },
  label: {
    fontSize: '0.68rem',
  },
}
