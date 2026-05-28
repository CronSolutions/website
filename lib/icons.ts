import {
  Code2,
  FileBarChart,
  FileText,
  Gauge,
  Github,
  Layout,
  LineChart,
  Link,
  Linkedin,
  MapPin,
  Search,
  Twitter,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  LineChart,
  FileBarChart,
  Layout,
  Search,
  FileText,
  MapPin,
  Gauge,
  Link,
  Twitter,
  Linkedin,
  Github,
};

export function getIcon(name: string): LucideIcon {
  const icon = ICON_MAP[name];
  if (!icon) {
    return Layout;
  }
  return icon;
}
