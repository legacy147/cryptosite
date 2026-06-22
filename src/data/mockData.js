// All data here is static placeholder content for UI demo purposes only.
// Not connected to any real account, exchange, or balance.

export const mockUser = {
  name: 'Demo User',
  totalBalance: '309,000.32',
  available: '305,750.50',
  inOrders: '3,249.82',
}

export const mockMarket = [
  { symbol: 'BTC', pair: 'BTC/USDT', name: 'Bitcoin', price: 64248.48, change: 1.24, icon: '₿' },
  { symbol: 'ETH', pair: 'ETH/USDT', name: 'Ethereum', price: 1748.8, change: -0.62, icon: 'Ξ' },
  { symbol: 'SOL', pair: 'SOL/USDT', name: 'Solana', price: 142.17, change: 3.05, icon: '◎' },
  { symbol: 'DOGE', pair: 'DOGE/USDT', name: 'Dogecoin', price: 0.083571, change: 0.0, icon: 'Ð' },
  { symbol: 'EOS', pair: 'EOS/USDT', name: 'EOS', price: 0.5259, change: -1.1, icon: '◈' },
  { symbol: 'ADA', pair: 'ADA/USDT', name: 'Cardano', price: 0.612, change: 2.4, icon: '₳' },
]

export const mockHoldings = [
  { symbol: 'BTC', name: 'Bitcoin', amount: 0.142, value: 9123.28, icon: '₿' },
  { symbol: 'ETH', name: 'Ethereum', amount: 1.86, value: 3252.77, icon: 'Ξ' },
  { symbol: 'SOL', name: 'Solana', amount: 0.7, value: 99.52, icon: '◎' },
]

export const mockActivity = [
  { type: 'Buy', pair: 'BTC/USDT', amount: '+0.012 BTC', date: 'Jun 20, 2026', status: 'Completed' },
  { type: 'Sell', pair: 'ETH/USDT', amount: '-0.4 ETH', date: 'Jun 18, 2026', status: 'Completed' },
  { type: 'Buy', pair: 'SOL/USDT', amount: '+2.1 SOL', date: 'Jun 14, 2026', status: 'Completed' },
]
