import BrandIdentity from '@components/IndexPage/BrandIdentity';
import OtherServices from '@components/IndexPage/OtherServices';
import Layout from '@components/Layout';

export default function Home() {
  return (
    <Layout>
      <BrandIdentity />
      <OtherServices />
    </Layout>
  );
}
