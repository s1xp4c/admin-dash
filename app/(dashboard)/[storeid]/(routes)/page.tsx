//relatives
import prismadb from ":/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashBoardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  console.log(store?.name);

  return <div className="">Active Store: {store?.name}</div>;
};

export default DashBoardPage;
