import React, { useState } from "react";
import "../App.css";
import {
  TableHeaderCell,
  Text,
  Colors,
  Table,
  TableRow,
  TableCell,
} from "@freenow/wave";
import TablePagination from "./TablePagination";

const PAGE_SIZE = 10;

export default function ShareNowVehicles({ ShareNowVehiclesData }) {
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
    const lastPage = parseInt(ShareNowVehiclesData.length / PAGE_SIZE);
    setPage(lastPage);
  };
  const styles = {
    color: Colors.WHITE,
    backgroundColor: Colors.AUTHENTIC_BLUE_900,
  };

  let shareVehiclesToRender;
  if (ShareNowVehiclesData.length > 0) {
    return (
      <div>
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
                Name
              </TableHeaderCell>
              <TableHeaderCell
                scope="col"
                style={{
                  width: "8rem",
                  whiteSpace: "normal",
                }}
              >
                Address
              </TableHeaderCell>
              <TableHeaderCell
                scope="col"
                style={{
                  width: "8rem",
                  whiteSpace: "normal",
                }}
              >
                Vin
              </TableHeaderCell>
              <TableHeaderCell
                scope="col"
                style={{
                  width: "8rem",
                  whiteSpace: "normal",
                }}
              >
                Exterior
              </TableHeaderCell>
              <TableHeaderCell
                scope="col"
                style={{
                  width: "8rem",
                  whiteSpace: "normal",
                }}
              >
                Interior
              </TableHeaderCell>
              <TableHeaderCell
                scope="col"
                style={{
                  width: "8rem",
                  whiteSpace: "normal",
                }}
              >
                <div>Fuel</div>
              </TableHeaderCell>
              <TableHeaderCell
                scope="col"
                style={{
                  width: "8rem",
                  whiteSpace: "normal",
                }}
              >
                Engine
              </TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            {
              (shareVehiclesToRender = (
                ShareNowVehiclesData.length > PAGE_SIZE
                  ? ShareNowVehiclesData.slice(
                      page * PAGE_SIZE,
                      page * PAGE_SIZE + PAGE_SIZE
                    )
                  : ShareNowVehiclesData
              ).map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell>
                    <Text as="p" fontWeight="normal" marginTop={1} fontSize={1}>
                      {vehicle.name}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text as="p" fontWeight="normal" fontSize={1}>
                      {vehicle.address}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text as="p" fontWeight="normal" fontSize={1}>
                      {vehicle.vin}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text as="p" fontWeight="normal" fontSize={1}>
                      {vehicle.exterior}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text as="p" fontWeight="normal" fontSize={1}>
                      {vehicle.interior}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text as="p" fontWeight="normal" fontSize={1}>
                      {vehicle.fuel}
                    </Text>
                  </TableCell>

                  <TableCell>
                    <Text as="p" fontWeight="normal" fontSize={1}>
                      {vehicle.engineType}
                    </Text>
                  </TableCell>
                </TableRow>
              )))
            }
          </tbody>
        </Table>

        <TablePagination
          pageSize={PAGE_SIZE}
          totalItems={ShareNowVehiclesData.length}
          value={page}
          onNextPage={handleNextPage}
          onPrevPage={handlePreviousPage}
          onSkipBackward={handleSkipBackwardPage}
          onSkipForward={handleSkipForwardPage}
        />
      </div>
    );
  }
  return <main>{shareVehiclesToRender}</main>;
}
