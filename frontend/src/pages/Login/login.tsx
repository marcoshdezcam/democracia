import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Divider,
  CardBody,
  Input,
  Button,
  ButtonGroup,
} from "@nextui-org/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import DefaultLayout from "@/layouts/default";
import { EyeFilledIcon } from "./EyeFilledIcon.tsx";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon.tsx";

interface LoginValues {
  email: string;
  password: string;
}

export const Login: React.FC<{}> = () => {
  const [isPassVisible, setPassVisible] = React.useState(false);
  const setPassVisibility = () => setPassVisible(!isPassVisible);

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

  const validationSchema: Yup.ObjectSchema<LoginValues> = Yup.object().shape({
    email: Yup.string().email("Invalid email.").required("Required"),
    password: Yup.string().required("Pasword required"),
  });
  const initialValues: LoginValues = {
    email: "",
    password: "",
  };

  return (
    <DefaultLayout>
      <Card className="max-w-[350px] mx-auto px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        <CardHeader className="flex gap-3 justify-center items-center">
          <div className="flex flex-col">
            <p className="text-md">Democracia</p>
            <p className="text-small text-default-500">Democracia</p>
          </div>
        </CardHeader>

        <Divider />

        <CardBody>
          {/* 
            TODO: Setup Yup validation
            TODO: When email has an invalid format, show email input field as Error with UI
          */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <div className="w-90 m-1 px-8 rounded-2xl flex justify-center items-center">
                  <Input
                    isRequired
                    id="email"
                    type="email"
                    placeholder="Email"
                    isClearable
                    radius="lg"
                    classNames={inputStyle}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    name="email"
                  />
                </div>
                {props.errors.email && (
                  <div id="feedback">{props.errors.email}</div>
                )}

                <div className="w-90 m-1 px-8 rounded-2xl flex justify-center items-center">
                  <Input
                    isRequired
                    id="password"
                    placeholder="Pasword"
                    radius="lg"
                    classNames={inputStyle}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                    name="password"
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

                <div className="flex justify-center items-center my-2">
                  <Button
                    radius="full"
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    type="submit"
                  >
                    Login
                  </Button>
                  <Button
                    radius="full"
                    className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                  >
                    Register
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardBody>

        <Divider />

        <CardFooter>
          <ButtonGroup>
            <Button color="primary" variant="flat">
              Google
            </Button>
            <Button color="primary" variant="flat">
              Facebook
            </Button>
            <Button color="primary" variant="flat">
              Phone
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </DefaultLayout>
  );
};
