import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Divider,
  CardBody,
  Link,
  Input,
  Image,
  Button,
} from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon.tsx";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcont.tsx";
import DefaultLayout from "@/layouts/default";

/*
TODO: 

  ! => Email and Password form as required from Next UI
  ! => When email has an invalid format, show email input field as Error with UI
  ! => Setup YUP for form validation
    ! => Validate Email
    ! => Validate password has an entry
*/

export default function Login() {
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <DefaultLayout>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
    </DefaultLayout>
  );
}
