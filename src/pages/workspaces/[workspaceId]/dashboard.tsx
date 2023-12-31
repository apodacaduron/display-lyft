import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { ShellLayout } from "~/features/workspace";

function DashboardPage() {
  const router = useRouter();
  const { workspaceId } = router.query;
  return (
    <>
      My dashboard {workspaceId}
      <SignOutButton />
    </>
  );
}

DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ShellLayout>{page}</ShellLayout>;
};

export default DashboardPage;
