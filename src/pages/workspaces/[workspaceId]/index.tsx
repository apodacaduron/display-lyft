import { useRouter } from "next/router";
import { useEffect } from "react";

export default function WorkspacePage() {
  const router = useRouter();
  const { workspaceId } = router.query;

  useEffect(() => {
    if (!workspaceId) return;
    router.push(`/workspaces/${workspaceId}/dashboard`);
  }, [workspaceId]);

  return <></>;
}
