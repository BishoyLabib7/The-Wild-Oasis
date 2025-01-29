import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

import { useState } from "react";

function Cabins() {
  const [show, setShow] = useState(false);

  return (
    <>
      {" "}
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/sort</p>
      </Row>
      <Row>
        <CabinTable />

        <Button onClick={() => setShow((show) => !show)}>Add new cabin</Button>
        {show && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
