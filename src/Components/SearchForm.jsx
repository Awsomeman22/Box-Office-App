import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr('');
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSearchOptionChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />

        <label>
          Shows
          <input
            type="radio"
            name="Search Option"
            value="shows"
            checked={searchOption == 'shows'}
            onChange={onSearchOptionChange}
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="Search Option"
            value="actors"
            checked={searchOption == 'actors'}
            onChange={onSearchOptionChange}
          />
        </label>

        <button type="Submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
