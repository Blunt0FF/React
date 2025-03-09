import { useSelector } from 'react-redux';

export default function LoadingIndicator() {
  const isLoading = useSelector((state) => state.loading.isLoading)
  return isLoading ? <BeatLoader /> : null;
}