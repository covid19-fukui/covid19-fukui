import { ReactNode } from 'react'
import { SideNavigation } from '../SideNavication/SideNavigation'
import styles from './Layout.module.scss'

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.app}>
      <div className={styles.appContainer}>
        <div className={styles.naviContainer}>
          <SideNavigation />
        </div>
        <main className={styles.mainContainer}>{children}</main>
      </div>
    </div>
  )
}
