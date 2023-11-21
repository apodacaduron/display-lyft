import { useRouter } from "next/router";
import { useRouter as useNavigationRouter } from "next/navigation";
import { useEffect } from "react";
import { ROUTES } from "~/features/data/routes";

export default function WorkspacePage() {
  const route = useRouter();
  const router = useNavigationRouter();
  const { workspaceId } = route.query;

  useEffect(() => {
    if (!workspaceId || typeof workspaceId !== "string") return;
    router.push(ROUTES.DASHBOARD.path(workspaceId));
  }, [workspaceId, router]);

  return <></>;
}
