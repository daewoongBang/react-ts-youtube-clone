import { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const SearchHeader = () => {
  const [searchText, setSearchText] = useState<string>('');

  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/search?query=${searchText}`);
  };

  useEffect(() => {
    const query = searchParams.get('query');

    setSearchText(pathname === '/search' && !!query ? query : '');
  }, [pathname, searchParams]);

  return (
    <header>
      <div>
        <Link to='/'>
          <BsYoutube /> <h1>YouTube</h1>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search...'
          value={searchText}
          onChange={handleChange}
        />
        <button type='submit'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
