import { useRouter } from "next/router";
import { useRouter as useNavigationRouter } from "next/navigation";
import { useEffect } from "react";

export default function WorkspacePage() {
  const route = useRouter();
  const router = useNavigationRouter();
  const { workspaceId } = route.query;

  useEffect(() => {
    if (!workspaceId || typeof workspaceId !== "string") return;
    router.push(`/workspaces/${workspaceId}/dashboard`);
  }, [workspaceId, router]);

  return <></>;
}
