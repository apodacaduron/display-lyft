import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { ShellLayout } from "~/features/workspace";

function LibraryPage() {
  const router = useRouter();
  const { workspaceId } = router.query;
  return (
    <>
      My library {workspaceId}
      <SignOutButton />
    </>
  );
}

LibraryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ShellLayout>{page}</ShellLayout>;
};

export default LibraryPage;
