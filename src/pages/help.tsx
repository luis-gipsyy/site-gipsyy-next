import { useRouter } from 'next/router';
import Base from 'templates/Base';
import {
  BannerSearch,
  BoxHelp,
  OnlineSupport,
  SearchResults,
} from 'components/core';

const Help = () => {
  const router = useRouter();
  const { search } = router.query;

  return (
    <Base title="Gipsyy - Ajuda">
      <BannerSearch />
      <OnlineSupport />
      {search?.length ? (
        <SearchResults searchData={search as string | undefined} />
      ) : (
        <BoxHelp />
      )}
    </Base>
  );
};

export default Help;
