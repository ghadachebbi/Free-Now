import React from "react";
import { Text, Pagination } from "@freenow/wave";

export default function TablePagination({
  pageSize,
  totalItems,
  value,
  onNextPage,
  onPrevPage,
  onSkipBackward,
  onSkipForward,
}) {
  const lastPage = parseInt(totalItems / pageSize);
  return (
    <Pagination
      ariaLabelFirst="First"
      ariaLabelPrevious="Previous"
      ariaLabelNext="Next"
      ariaLabelLast="Last"
      value={value}
      pageSize={pageSize}
      totalItems={totalItems}
      label={
        <Text weak>
          Page{" "}
          <Text as="b" fontWeight="semibold" weak>
            {value} of {lastPage}
          </Text>
        </Text>
      }
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      onSkipForward={onSkipForward}
      onSkipBackward={onSkipBackward}
    />
  );
}
