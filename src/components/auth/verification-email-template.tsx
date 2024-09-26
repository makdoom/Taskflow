import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  render,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface VerificationEmailProps {
  username: string;
  verificationLink: string;
}

const VerificationEmail = ({
  username,
  verificationLink,
}: VerificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>Verify your email address</Preview>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto p-4 max-w-xl">
            <Section className="bg-white rounded-lg shadow-lg p-8">
              <Heading className="text-2xl font-bold text-gray-800 mb-4">
                Email Verification
              </Heading>
              <Text className="text-gray-600 mb-4">Hello {username},</Text>
              <Text className="text-gray-600 mb-4">
                Thank you for signing up. Please verify your email address by
                clicking the button below:
              </Text>
              <Button
                className="bg-black text-white font-bold rounded-md no-underline text-center p-3"
                href={verificationLink}
              >
                Verify Email
              </Button>
              <Text className="text-gray-600 mt-4">
                If the button doesn&apos;t work, you can also click on this
                link:
              </Text>
              <Link
                href={verificationLink}
                className="text-blue-500 underline break-all"
              >
                {verificationLink}
              </Link>
              <Hr className="border-gray-300 my-6" />
              <Text className="text-sm text-gray-500">
                If you didn&apos;t sign up for this account, you can ignore this
                email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;

export const verificationEmailTemplateRenderer = async (
  username: string,
  verificationLink: string
) => {
  const emailTemplate = await render(
    <VerificationEmail
      username={username}
      verificationLink={verificationLink}
    />
  );
  return emailTemplate;
};
