import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SideNavigation.module.scss';
import { LauguageSelector } from '../LanguageSelector/LauguageSelector';

export const SideNavigation = () => {
  return (
    <div className={styles.SideNavigation}>
      <header className={styles['SideNavigation-Header']}>
        <Icon className={styles['SideNavigation-OpenIcon']} path={mdiMenu} />
        <h1 className={styles['SideNavigation-HeaderTitle']}>
          <Link href="/" passHref>
            <div className={styles['SideNavigation-HeaderLink']}>
              <Image
                className={styles['SideNavigation-HeaderLogo']}
                src="/static/image/logo.svg"
                alt="福井県"
                width="168px"
                height="56px"
              />
              <div className={styles['SideNavigation-HeaderText']}>
                {'福井県公認 新型コロナウイルス'}
                <br />
                {'対策サイト'}
              </div>
            </div>
          </Link>
        </h1>
      </header>
      <nav className="SideNavigation-Menu">
        <div className="SideNavigation-Language">
          <label className="SideNavigation-LanguageLabel">
            {'多言語対応選択メニュー'}
          </label>
          <LauguageSelector />
        </div>
        {/* <MenuList :items="items" @click="$emit('closeNavi', $event)" /> */}
      </nav>
    </div>
  );
};
