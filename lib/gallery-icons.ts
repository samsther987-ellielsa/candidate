import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  GlobeAmericasIcon,
  HeartIcon,
  MegaphoneIcon,
  SparklesIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

export const GALLERY_ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  handshake: UserGroupIcon,
  chat: ChatBubbleLeftRightIcon,
  wheat: GlobeAmericasIcon,
  heart: HeartIcon,
  plant: GlobeAmericasIcon,
  megaphone: MegaphoneIcon,
  celebration: SparklesIcon,
  hospital: HeartIcon,
  school: AcademicCapIcon,
};

export function getGalleryIcon(name: string): ComponentType<SVGProps<SVGSVGElement>> {
  return GALLERY_ICON_MAP[name] ?? SparklesIcon;
}
