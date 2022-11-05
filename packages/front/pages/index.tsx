import BrandIdentity from '@components/IndexPage/BrandIdentity';
import MainHero from '@components/IndexPage/MainHero';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <Layout>
      <MainHero />
      <BrandIdentity />
    </Layout>
  );
}
