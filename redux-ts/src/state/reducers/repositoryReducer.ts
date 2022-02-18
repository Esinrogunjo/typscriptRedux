import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initalState = {
  loading: false,
  error: null,
  data: [],
};
const reducer = (
  state: RepositoryState = initalState,
  action: Action
): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
