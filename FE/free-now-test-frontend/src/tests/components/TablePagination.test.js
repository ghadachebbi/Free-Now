import { Pagination } from "@freenow/wave";
import { render, cleanup, fireEvent } from "@testing-library/react";
test("should select by aria-label", () => {
  const { getByRole } = render(
    <Pagination value={1} pageSize={20} totalItems={200} />
  );
  getByRole("button", { name: "First" });
  getByRole("button", { name: "Previous" });
  getByRole("button", { name: "Next" });
  getByRole("button", { name: "Last" });
});
