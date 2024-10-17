import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Divider,
  CardBody,
  Input,
  Image,
  Button,
} from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon.tsx";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon.tsx";
import DefaultLayout from "@/layouts/default";

export default function Login() {
  const [errorMessage, setErrorMessage] = React.useState(false);

  const [isPassVisible, setPassVisible] = React.useState(false);

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

  const setPassVisibility = () => setPassVisible(!isPassVisible);

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
          {/* Email 
          TODO: When email has an invalid format, show email input field as Error with UI
          */}
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
          {/* Password */}
          <div className="w-90 m-1 px-8 rounded-2xl flex justify-center items-center">
            <Input
              isRequired
              placeholder="Pasword"
              radius="lg"
              classNames={inputStyle}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={setPassVisibility}
                  aria-label="toggle password visibility"
                >
                  {isPassVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isPassVisible ? "text" : "password"}
              className="max-w-xs"
            />
          </div>
          {/* !TODO:  Add style and functionality */}
          <div>
            <Button color="primary" variant="flat">
              Login
            </Button>
            <Button color="primary" variant="flat">
              Register
            </Button>
          </div>
        </CardBody>
        <Divider />

        <CardFooter></CardFooter>
      </Card>
    </DefaultLayout>
  );
}
