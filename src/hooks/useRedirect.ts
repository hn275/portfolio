import { useNavigate } from 'react-router-dom';

export const useRedirect = () => {
  const nav = useNavigate();
  return (path: string) => nav(path, { replace: true });
};
