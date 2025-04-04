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

    !!searchText.trim() && navigate(`/search?query=${searchText}`);
  };

  useEffect(() => {
    const query = searchParams.get('query');

    setSearchText(pathname === '/search' && !!query ? query : '');
  }, [pathname, searchParams]);

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />
        <h1 className='font-bold ml-2 text-3xl'>YouTube</h1>
      </Link>

      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 outline-none bg-black text-gray-50 rounded-l-md'
          type='text'
          placeholder='Search...'
          value={searchText}
          onChange={handleChange}
        />
        <button className='bg-zinc-600 px-4 rounded-r-md' type='submit'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
