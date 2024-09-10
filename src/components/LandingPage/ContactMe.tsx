import React from "react";
import Button from "../Basic/Button";
interface ContactMeProps {
  email: string;
  buttonText: string;
}

const ContactMe: React.FC<ContactMeProps> = ({ email, buttonText }) => {
  return (
    <section>
      <h3 className="text-3xl font-extrabold text-primary text-center my-8">
        Want to get in touch?
      </h3>
      <div className="bg-backgroundPrimary dark:bg-gray-800 p-6 text-center rounded-lg shadow-lg text-text">
        <p className="text-lg mb-6">
          I can be emailed at{" "}
          <a href={`mailto:${email}`} className="text-primary underline">
            {email}
          </a>
        </p>
        <Button text={buttonText} href={`mailto:${email}`}></Button>
      </div>
    </section>
  );
};

export default ContactMe;
