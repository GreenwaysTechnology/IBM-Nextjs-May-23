import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <nav>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/products">Products</Link>
        </nav>
      </div>
    </main>
  )
}
