import { ReactNode } from 'react'
import styles from './PageHeader.module.scss'
import Icon from '@mdi/react'
import { mdiChartTimelineVariant } from '@mdi/js'

export const PageHeader: React.FC<{children: ReactNode, icon: string}> = ({children, icon}) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.pageTitle}>
        {/* mr-2 */}
        <Icon
          path={mdiChartTimelineVariant}
          size="40"
          className={styles.icon}/>
        {children}
      </h2>
    </div>
  )
}
