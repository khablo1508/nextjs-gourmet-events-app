import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
import styles from '@/styles/Layout.module.css';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='descrption' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      {router.pathname === '/' && <Showcase />}

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Gourmet Events | The most fingerlicking food in the city',
  description: 'Find the latest restaurant and other food events',
  keywords: 'food, restaurant, events, cafes',
};
