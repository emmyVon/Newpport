import React, { useRef } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const serviceid = process.env.REACT_APP_EMAILJS_SERVICEID;
const templateid = process.env.REACT_APP_EMAILJS_TEMPLATEID;
const publickey = process.env.REACT_APP_EMAILJS_PUBLICKEY;
const ContactMeSection = () => {
  // const { isLoading, response, submit } = useSubmit();
  const { onOpen, onClose } = useAlertContext();

  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_4umfxw8",
        "template_17q095a",
        form.current,
        "bpVQH7oF3yREy7zHM"
      )
      .then(
        (result) => {
          onOpen("success", "Response sent to Emmanuel");
          setTimeout(() => onClose(), 2000);
          console.log("submitted", form.current);
        },
        (error) => {
          onOpen("error", "Failed, please try again");
          setTimeout(() => onClose(), 2000);
          console.log(error);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      sendEmail();
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .trim()
        .min(3, "name just be more than three characters")
        .required("required"),
      email: Yup.string()
        .trim()
        .email("invalid email address")
        .required("required"),
      type: Yup.string().oneOf(["hireMe", "openSource", "other"]),
      comment: Yup.string().required("required"),
    }),
  });

  // #512DA8 "#6765AD"

  return (
    <FullScreenSection isDarkBackground backgroundColor="#0C0E0F" spacing={8}>
      {/* "#2A4365" */}

      <VStack w={"100%"} alignItems="flex-start">
        <Heading
          fontSize={{ base: "1rem", md: "3rem" }}
          alignSelf={"center"}
          id="contactme"
        >
          Contact me
        </Heading>
        <Box p={2} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit} ref={form}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  id="email"
                  name="email"
                  type="email"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                >
                  <option value="hireMe">Remote/Full-time Employment</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" bg="blue" width="full" fontWeight={"bold"}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
