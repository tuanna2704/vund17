
import { FETCH_DATA, UPDATE_DATA, DELETE_DATA, ADD_DATA } from 'actions/types';
const initState: any[] = [];
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, action: { type: string; payload: any }) {
  const randomId = () => {
    const min = 1;
    const max = 100000;
    const rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case DELETE_DATA:
      return state.filter(repo => repo.id !==action.payload.id);
    case ADD_DATA: {
      const data = action.payload;
      return [
        {
          id: randomId(),
          name: data.name,
          description: data.description,
          watchers_count: data.watchers,
          language: data.language,
          open_issues: data.openIssues,
          private: data.private,
        },
        ...state,
      ];
    }
    case UPDATE_DATA: {
      const data = action.payload;
      return state.map((repo) =>
        repo.id === data.id
          ? {
              ...repo,
              name: data.name,
              description: data.description,
              watchers_count: data.watchers,
              language: data.language,
              open_issues: data.openIssues,
              private: data.private,
            }
          : repo
      );
    }
    default:
      return state;
  }
}