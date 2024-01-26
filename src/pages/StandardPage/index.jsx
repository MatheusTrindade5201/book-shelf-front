import { Outlet } from "react-router-dom";

const StandardPage = () => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "10px" }}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default StandardPage;
