
Redux : It is the state management library for JavaScript applications. It is used to manage the state of the application.

there are three part of redux:

1. Store: It is the store of the application. It is the single source of truth. It is the object that holds the application state
2. Action: It is the action that is dispatched to the store. It is the object that describes what happened.
3. Reducer: It is the reducer that is used to update the state of the application. It is the function that takes the current state and action and returns the new state.

Store
import { configureStore } from 'redux';

    const store = configureStore({
        reducer: {
            // reducers
        }
    });

main thing is that we have to provide the reducer to the store.
<RouterProvider router={router} />

Convention is NameSlice.js

# Synchronous way

    const slice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
    }
    });

        export const { increment, decrement } = slice.actions;
        export default slice.reducer;

# Asynchronous way

thunk is used to handle the async action in redux. it like the middleware that allows us to write the async logic in the action creator.

middleware: It is the function that is used to extend the functionality of the store. It is the function that takes the action and returns the action.

    const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
    }
    );

        const usersSlice = createSlice({
            name: 'users',
            initialState: [],
            reducers: {},
            extraReducers: (builder) => {
                builder.addCase(fetchUserById.fulfilled, (state, action) => {
                    state.push(action.payload);
                }).addCase(fetchUserById.rejected, (state, action) => {
                    // handle error
                }).addCase(fetchUserById.pending, (state, action) => {
                    // handle pending
                });
            }
        });

        export default usersSlice.reducer;
        export { fetchUserById };
