import { useNavigate, useLocation, useParams, useMatch } from "react-router-dom";

const useRouter = () => {
  const history = useNavigate();
  const location = useLocation();
  const params = useParams();
  const match = useMatch("*");

  return { history, location, params, match };
};

export default useRouter;