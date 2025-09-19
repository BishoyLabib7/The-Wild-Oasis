import { createContext, useContext, useState, useEffect } from "react";

const MobileSidebarContext = createContext();

function MobileSidebarProvider({ children }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const openMobileSidebar = () => setIsMobileSidebarOpen(true);
  const closeMobileSidebar = () => setIsMobileSidebarOpen(false);
  const toggleMobileSidebar = () => setIsMobileSidebarOpen((prev) => !prev);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileSidebarOpen]);

  return (
    <MobileSidebarContext.Provider
      value={{
        isMobileSidebarOpen,
        openMobileSidebar,
        closeMobileSidebar,
        toggleMobileSidebar,
      }}
    >
      {children}
    </MobileSidebarContext.Provider>
  );
}

function useMobileSidebar() {
  const context = useContext(MobileSidebarContext);
  if (context === undefined)
    throw new Error(
      "useMobileSidebar must be used within a MobileSidebarProvider"
    );
  return context;
}

export { MobileSidebarProvider, useMobileSidebar };
