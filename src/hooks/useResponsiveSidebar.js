import { useEffect } from "react";
import { useMobileSidebar } from "../context/MobileSidebarContext";

function useResponsiveSidebar() {
  const { closeMobileSidebar } = useMobileSidebar();

  useEffect(() => {
    function handleResize() {
      // Close mobile sidebar when screen becomes desktop size
      if (window.innerWidth > 900) {
        closeMobileSidebar();
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMobileSidebar]);
}

export default useResponsiveSidebar;
