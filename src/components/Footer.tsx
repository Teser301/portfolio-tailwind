import ContactMe from "./ContactMe";
function Footer() {
  return (
    <footer className="bg-backgroundPrimary py-4  mt-8">
      <ContactMe />
      {/* Copyright */}
      <div className="mt-8 pt-4 text-center text-sm">
        © 2024 Carlo Randar Aavekukk. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
