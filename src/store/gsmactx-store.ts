import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { navigation } from "@/libs/data";

type SectionName = (typeof navigation)[number]["name"];

interface RCWebState {
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
}

export const useGSMStore = create<RCWebState>()(
  persist(
    (set) => ({
      activeSection: "Home",
      setActiveSection: (section) => set({ activeSection: section }),
      timeOfLastClick: 0,
      setTimeOfLastClick: (time) => set({ timeOfLastClick: time }),
      isOpen: false,
      setIsOpen: (open) => set({ isOpen: open }),
      handleClickModal: () => set((state) => ({ isOpen: !state.isOpen })),
      isOpenProjectsDialog: false,
      setIsOpenProjectsDialog: (open) => set({ isOpenProjectsDialog: open }),
      handleClickProjectsDialog: () =>
        set((state) => ({ isOpenProjectsDialog: !state.isOpenProjectsDialog })),
      isOpenLetsContactDialog: false,
      setOpenLetsContactDialog: (open) =>
        set({ isOpenLetsContactDialog: open }),
      handleClickLetsContactDialog: () =>
        set((state) => ({
          isOpenLetsContactDialog: !state.isOpenLetsContactDialog,
        })),
      hash: "",
      setHash: (hash) => set({ hash }),
      scrolled: false,
      setScrolled: (scrolled) => set({ scrolled }),
      mobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
    }),
    {
      name: "gsmactx-storage",
      storage: createJSONStorage(() =>
        typeof window !== "undefined" ? localStorage : sessionStorage
      ),
    }
  )
);
