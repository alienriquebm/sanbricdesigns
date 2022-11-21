import Layout from '@components/Layout';
import BrandIdentity from '@components/IndexPage/BrandIdentity';
import OtherServices from '@components/IndexPage/OtherServices';
import InstagramProfile from '@components/IndexPage/InstagramProfile';
import axios from 'axios';

interface Props {
  instagramData: any;
}

export default function Home({ instagramData }: Props) {
  return (
    <Layout>
      <BrandIdentity />
      <OtherServices />
      <InstagramProfile instagramData={instagramData} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const response = await axios.get(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${process.env.INSTAGRAM_TOKEN || ''}`
  );
  return {
    props: {
      instagramData: response.data,
    },
  };
};
