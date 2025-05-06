import { SectionName } from "./types";

export interface RCWebState {
  activeSection: SectionName;
  setActiveSection: (section: SectionName) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (time: number) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleClickModal: () => void;
  isOpenProjectsDialog: boolean;
  setIsOpenProjectsDialog: (open: boolean) => void;
  handleClickProjectsDialog: () => void;
  isOpenLetsContactDialog: boolean;
  setOpenLetsContactDialog: (open: boolean) => void;
  handleClickLetsContactDialog: () => void;
  hash: string;
  setHash: (hash: string) => void;
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  showHeader: boolean;
  showFooter: boolean;
  setShowHeader: (show: boolean) => void;
  setShowFooter: (show: boolean) => void;
}

export interface GooglePlacesReview {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  photos?: {
    height: number;
    width: number;
    photo_reference: string;
    html_attributions: string[];
  }[];
}

export interface Review extends GooglePlacesReview {
  photoUrl: string | null;
}

export interface IImage {
  src: string;
  alt: string;
}
