import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunkMiddleware from 'redux-thunk'
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', function () {
    const text = 'wooo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction)
});

it('should handles requesting robots API', function () {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toEqual(expectedAction)
});

it('should return a success request', () => {
    const store = mockStore();
    const expectedActions = [
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS
    ]

    fetchMock.get('*', { response: 200 }, { overwriteRoutes: false})

    return store.dispatch(actions.requestRobots())
        .then(() => {
            const actions = store.getActions().map(action => action.type)
            expect(actions).toEqual(expectedActions)
        })

    fetchMock.restore()
});

it('should return a failed request', () => {
    const store = mockStore();
    const expectedActions = [
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_FAILED
    ]

    fetchMock.get('*', 404 , { overwriteRoutes: true});
    return store.dispatch(actions.requestRobots())
        .then(() => {
            const actions = store.getActions().map(action => action.type);
            expect(actions).toEqual(expectedActions)
        });

    fetchMock.restore()
});




