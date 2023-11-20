import { OrganizationSwitcher, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function WorkspaceDashboardPage() {
  const router = useRouter();
  const { workspaceId } = router.query;
  return (
    <>
      <main>
        My workspace {workspaceId}
        <OrganizationSwitcher />
        <SignOutButton />
      </main>
    </>
  );
}
