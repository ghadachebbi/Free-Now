import React, { useState } from "react";
import "../App.css";
import {
  TableHeaderCell,
  Label,
  Text,
  Colors,
  Table,
  TableRow,
  TableCell,
} from "@freenow/wave";
import TablePagination from "./TablePagination";

const PAGE_SIZE = 10;

export default function FreeNowVehicles({ FreeNowVehiclesData }) {
  const styles = {
    color: Colors.WHITE,
    backgroundColor: Colors.AUTHENTIC_BLUE_900,
  };
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  const handlePreviousPage = () => {
    setPage((page) => page - 1);
  };

  const handleSkipBackwardPage = () => {
    setPage(1);
  };

  const handleSkipForwardPage = () => {
    const lastPage = parseInt(FreeNowVehiclesData.length / PAGE_SIZE);
    setPage(lastPage);
  };

  let freeVehiclesToRender;
  if (FreeNowVehiclesData.length > 0) {
    return (
      <>
        <Table className="table">
          <thead style={styles}>
            <TableRow>
              <TableHeaderCell
                scope="col"
                style={{
                  width: "8rem",
                  whiteSpace: "normal",
                }}
              >
                Type
              </TableHeaderCell>
              <TableHeaderCell
                scope="col"
                style={{
                  width: "8rem",
                  whiteSpace: "normal",
                }}
              >
                State
              </TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            {
              (freeVehiclesToRender = (
                FreeNowVehiclesData.length > PAGE_SIZE
                  ? FreeNowVehiclesData.slice(
                      page * PAGE_SIZE,
                      page * PAGE_SIZE + PAGE_SIZE
                    )
                  : FreeNowVehiclesData
              ).map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell>
                    <Text as="p" fontWeight="normal" fontSize={1}>
                      {vehicle.type}
                    </Text>
                  </TableCell>
                  <TableCell>
                    {vehicle.state === "ACTIVE" ? (
                      <Label variant="success" filled>
                        {vehicle.state}
                      </Label>
                    ) : (
                      <Label variant="danger" filled>
                        {vehicle.state}
                      </Label>
                    )}
                  </TableCell>
                </TableRow>
              )))
            }
          </tbody>
        </Table>
        <br />

        <TablePagination
          pageSize={PAGE_SIZE}
          totalItems={FreeNowVehiclesData.length}
          value={page}
          onNextPage={handleNextPage}
          onPrevPage={handlePreviousPage}
          onSkipBackward={handleSkipBackwardPage}
          onSkipForward={handleSkipForwardPage}
        />
      </>
    );
  }

  return <main>{freeVehiclesToRender}</main>;
}
