import {
  IconBuildingStore,
  IconLayoutDashboard,
  IconPlaylist,
} from "@tabler/icons-react";
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
  STORES: {
    pathname: "/workspaces/[workspaceId]/stores",
    path(workspaceId: string) {
      if (!workspaceId) return "/";
      return `/workspaces/${workspaceId}/stores`;
    },
    label: "Stores",
    icon: IconBuildingStore,
  },
  PLAYLISTS: {
    pathname: "/workspaces/[workspaceId]/playlists",
    path(workspaceId: string) {
      if (!workspaceId) return "/";
      return `/workspaces/${workspaceId}/playlists`;
    },
    label: "Playlists",
    icon: IconPlaylist,
  },
};

export const SIDEBAR_ROUTES = {
  DASHBOARD: ROUTES.DASHBOARD,
  LIBRARY: ROUTES.LIBRARY,
  STORES: ROUTES.STORES,
  PLAYLISTS: ROUTES.PLAYLISTS,
};
