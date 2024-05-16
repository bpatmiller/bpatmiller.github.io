import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";

const useRouter = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  return { history, location, params, match };
};

export default useRouter;