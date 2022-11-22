import Layout from '@components/Layout';
import BrandIdentity from '@components/IndexPage/BrandIdentity';
import OtherServices from '@components/IndexPage/OtherServices';
import InstagramProfile from '@components/IndexPage/InstagramProfile';
import { getInstagramProfile, GET_INSTAGRAM_PROFILE } from 'hooks/api/useGetInstagramProfile';
import { dehydrate, QueryClient } from '@tanstack/react-query';

export default function Home() {
  return (
    <Layout>
      <BrandIdentity />
      <OtherServices />
      <InstagramProfile />
    </Layout>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([GET_INSTAGRAM_PROFILE], () => getInstagramProfile());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
