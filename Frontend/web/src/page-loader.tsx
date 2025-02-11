import LoadingIndicator from "./components/Elements/LoadingIndicator/LoadingIndicator";

export const PageLoader: React.FC = () => {
  return (
    <div className="page-loader">
      <LoadingIndicator color="#cbcccc" size="la-3x" />
    </div>
  );
};
