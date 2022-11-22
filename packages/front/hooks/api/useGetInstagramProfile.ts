import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios from 'axios';
import { InstagramPost } from 'interfaces';

export const GET_INSTAGRAM_PROFILE = 'GET_INSTAGRAM_PROFILE';

export const getInstagramProfile = async () => {
  const instagramProfile: InstagramPost[] = await axios
    .get(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${
        process.env.INSTAGRAM_TOKEN || ''
      }`
    )
    .then(r => r.data.data);
  return instagramProfile;
};

const useGetInstagramProfile = (
  options?: UseQueryOptions<InstagramPost[], unknown, InstagramPost[], typeof GET_INSTAGRAM_PROFILE[]>
) => useQuery([GET_INSTAGRAM_PROFILE], () => getInstagramProfile(), { ...options });

export default useGetInstagramProfile;
