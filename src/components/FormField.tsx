import React, { ReactElement } from "react";
import Button from "./tailwind/Button";
import Field from "./tailwind/Field";

interface Props {}

export default function FormField({}: Props): ReactElement {
  return (
    <form
      action=""
      className="flex items-center justify-center max-w-lg mx-auto "
    >
      <Field type="text" name="chiToken" placeholder="Amount in DAI" />
      <Button color="success" className="ml-6" outline>
        Stake
      </Button>
    </form>
  );
}
