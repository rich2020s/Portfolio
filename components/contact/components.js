import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { SeeMoreBtn } from "../home";
import { ProjWrapper } from "../project";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 30px auto;
  margin-top: 90px;
  & > input {
    margin-top: 30px;
    padding: 10px;
  }
  & > textarea {
    margin: 30px 0;
    padding: 10px;
  }
  & > button {
    margin: 30px 0;
  }
`;
const SubmitBtn = styled(SeeMoreBtn)`
  border: 1px solid white;
  background-color: transparent;
  color: white;
`;
export const ContactWrapper = styled(ProjWrapper)`
  width: 80%;
  max-width: 768px;
  margin: 0 auto;
`;
export function ContactForm() {
  const [state, handleSubmit] = useForm("xnqwpyay");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <input id="name" name="name" placeholder="Your Name" />
      <input id="email" type="email" name="email" placeholder="Email Address" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Type your message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <SubmitBtn type="submit" disabled={state.submitting}>
        Submit
      </SubmitBtn>
    </Form>
  );
}
export const LinksContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  a ~ a {
    margin-left: 20px;
  }
`;
export const WebsitesLink = styled.a`
  color: black;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;
