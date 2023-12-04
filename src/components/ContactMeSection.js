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
    emailjs.sendForm("service_4umfxw8", "template_17q095a", form.current, "TMEg8zjiZHB3U1vr8").then(
      (result) => {
        onOpen("success", "Response sent to Emmanuel");
        setTimeout(() => onClose(), 2000);
        console.log("submitted");
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
      email: Yup.string().trim().email("invalid email address").required("required"),
      type: Yup.string().oneOf(["hireMe", "openSource", "other"]),
      comment: Yup.string().required("required"),
    }),
  });

  // #512DA8

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#6765AD"
      py={16}
      spacing={8}
      id="contactme"
    >
      <VStack w="100%" p={9} alignItems="flex-start">
        <Heading as="h1" alignSelf={"center"}>
          Contact me
        </Heading>
        <Box p={2} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit} ref={form}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
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
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
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
              <Button type="submit" bg="blue" width="full">
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
