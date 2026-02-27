import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Overview } from "./pages/Overview";
import { LogEntry } from "./pages/LogEntry";
import { Notes } from "./pages/Notes";
import { DrSchedule } from "./pages/DrSchedule";
import { Privacy } from "./pages/Privacy";
import { Settings } from "./pages/Settings";
import { Onboarding } from "./pages/Onboarding";

export const router = createBrowserRouter([
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Overview },
      { path: "log-entry", Component: LogEntry },
      { path: "notes", Component: Notes },
      { path: "dr-schedule", Component: DrSchedule },
      { path: "privacy", Component: Privacy },
      { path: "settings", Component: Settings },
    ],
  },
]);