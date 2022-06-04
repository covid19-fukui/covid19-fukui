import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { PageHeader } from 'src/components/header/PageHeader/PageHeader';
import { Layout } from 'src/components/template/Layout/Layout';
import styles from 'src/styles/Top.module.scss';

const headerItem = {
  icon: 'mdi mdi-chart-timeline-variant',
  title: '福井県内の最新感染動向',
};

const Top: NextPage = () => {
  return (
    <Layout>
      <div className={styles.MainPage}>
        <div className={styles.Header}>
          <PageHeader icon={headerItem.icon}>{headerItem.title}</PageHeader>
          <div className={styles.UpdatedAt}>
            <span>最終更新</span>
            <time></time>
          </div>
          <div className={styles.Annotation}>
            <span>翻訳が正しくない可能性があることに許諾を求める文章</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Top;
