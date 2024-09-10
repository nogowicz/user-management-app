import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '../types/User';

interface UsersState {
  users: IUser[];
  filteredUsers: IUser[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk<
  IUser[],
  void,
  { rejectValue: string }
>('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data as IUser[];
  } catch (error) {
    return rejectWithValue(
      (error as Error).message || 'An unexpected error occurred'
    );
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        field: keyof UsersState['filters'];
        value: string;
      }>
    ) => {
      const { field, value } = action.payload;
      state.filters[field] = value;

      state.filteredUsers = state.users.filter((user) =>
        Object.keys(state.filters).every((key) => {
          const filterValue =
            state.filters[key as keyof typeof state.filters].toLowerCase();
          return user[key as keyof IUser]
            .toString()
            .toLowerCase()
            .includes(filterValue);
        })
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.status = 'succeeded';
          state.users = action.payload;
          state.filteredUsers = action.payload;
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { setFilter } = usersSlice.actions;

export default usersSlice.reducer;
