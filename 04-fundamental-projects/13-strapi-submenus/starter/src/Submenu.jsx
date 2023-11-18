import { useRef } from "react";
import { useGlobalContext } from "./Context";
import sublinks from "./data";

export default function Submenu() {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = sublinks.find((item) => {
    if (item.pageId == pageId) {
      return true;
    } else {
      return false;
    }
  });

  const submenuContainer = useRef(null);

  
  //need to figure out why use this function
  const handleMouseLeave = (event) => {
    const subMenu = submenuContainer.current;
    const { left, right, bottom } = subMenu.getBoundingClientRect();
    const { clientX, clientY } = event;
    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={()=>setPageId(null)}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
