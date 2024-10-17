import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Divider,
  CardBody,
  Input,
  Image,
} from "@nextui-org/react";
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
  const inputStyle = {
    label: "text-black/50 dark:text-white/90",
    input: [
      "bg-transparent",
      "text-black/90 dark:text-white/90",
      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
    ],
    innerWrapper: "bg-transparent",
    inputWrapper: [
      "shadow-xl",
      "bg-default-200/50",
      "dark:bg-default/60",
      "backdrop-blur-xl",
      "backdrop-saturate-200",
      "hover:bg-default-200/70",
      "dark:hover:bg-default/70",
      "group-data-[focus=true]:bg-default-200/50",
      "dark:group-data-[focus=true]:bg-default/60",
      "!cursor-text",
    ],
  };

  return (
    <DefaultLayout>
      <Card className="max-w-[350px] mx-auto px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        <CardHeader className="flex gap-3 justify-center items-center">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Tasky</p>
            <p className="text-small text-default-500">Task Manager</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          {/* Email */}
          <div className="w-90 m-1 px-8 rounded-2xl flex justify-center items-center">
            <Input
              isRequired
              type="email"
              placeholder="Email"
              isClearable
              radius="lg"
              classNames={inputStyle}
            />
          </div>
          <div className="w-90 m-1 px-8 rounded-2xl flex justify-center items-center">
            <Input
              isRequired
              type="password"
              isClearable
              radius="lg"
              classNames={inputStyle}
            />
          </div>
        </CardBody>
        <Divider />
        <CardFooter></CardFooter>
      </Card>
    </DefaultLayout>
  );
}
