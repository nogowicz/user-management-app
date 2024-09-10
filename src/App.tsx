import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from './store/usersSlice';
import { RootState, AppDispatch } from './store';

import UsersTable from './components/UsersTable';
import FilterInputs from './components/FilterInputs';
import Loading from './components/ui/Loading';
import Error from './components/ui/Error';

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, status, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading' || status === 'idle') return <Loading />;
  if (error || status === 'failed')
    return (
      <Error
        errorText={error ?? "Couldn't fetch users"}
        tryAgainFn={() => dispatch(fetchUsers())}
      />
    );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-primary">
        User Management Table
      </h1>

      <FilterInputs />
      <UsersTable users={filteredUsers} />
    </div>
  );
}
