import { IconLayoutDashboard } from "@tabler/icons-react";
import { IconArchive, IconDashboard } from "@tabler/icons-react";

export const ROUTES = {
  WORKSPACE: {
    pathname: "/workspaces/[workspaceId]",
    path(workspaceId: string) {
      if (!workspaceId) return "/";
      return `/workspaces/${workspaceId}`;
    },
    label: "Workspace",
    icon: IconDashboard,
  },
  DASHBOARD: {
    pathname: "/workspaces/[workspaceId]/dashboard",
    path(workspaceId: string) {
      if (!workspaceId) return "/";
      return `/workspaces/${workspaceId}/dashboard`;
    },
    label: "Dashboard",
    icon: IconLayoutDashboard,
  },
  LIBRARY: {
    pathname: "/workspaces/[workspaceId]/library",
    path(workspaceId: string) {
      if (!workspaceId) return "/";
      return `/workspaces/${workspaceId}/library`;
    },
    label: "Library",
    icon: IconArchive,
  },
};

export const SIDEBAR_ROUTES = {
  DASHBOARD: ROUTES.DASHBOARD,
  LIBRARY: ROUTES.LIBRARY,
};
