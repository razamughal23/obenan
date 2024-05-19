import dynamic from "next/dynamic";
const ProgressBar = dynamic(() => import("app/components/progressBar/progressBar"));

const loading = () => {
  return (
    <>
      <ProgressBar />
    </>
  );
};

export default loading;
