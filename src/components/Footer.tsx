import ContactMe from "./ContactMe";
function Footer() {
  return (
    <footer className="relative  bottom-0 bg-backgroundPrimary py-4 shadow-[0_-4px_3px_-1px_rgba(0,0,0,0.07)] z-50">
      <ContactMe />
      {/* Copyright */}
      <div className="mt-8 pt-4 text-center text-sm">
        © 2024 Carlo Randar Aavekukk. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
