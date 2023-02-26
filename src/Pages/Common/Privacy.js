import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "80vh",
};

export default function Privacy() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <p className="privacy" onClick={handleOpen}>
        Privacy Policy
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Privacy Policy</h1>
          <div className="privacyContent">
            <h2>Statement of Policy</h2>
            <p>
              The Wildlife Watchers PH (WWPH) of the 
              <a href="https://denr.gov.ph/" target={"new"}>
                Department of Environment and Natural Resources (DENR)
              </a>
               and{" "}
              <a href="https://www.bmb.gov.ph/" target={"new"}>
                Biodiversity Management Bureau (BMB)
              </a>{" "}
              is committed to protect and respect your personal data and
              privacy. As a government instrumentality, it is our explicit
              obligation, duty and responsibility to implement and comply with
              the 
              <a
                href="https://www.privacy.gov.ph/data-privacy-act/"
                target={"new"}
              >
                Data Privacy Act of 2012
              </a>
              , 
              <a
                href="https://nationalarchives.gov.ph/downloads/national-archives-of-the-phils-act-of-2007-r-a-9470/"
                target={"new"}
              >
                National Archives of the Philippines Act of 2007
              </a>
              , 
              <a
                href="https://www.officialgazette.gov.ph/2000/06/14/republic-act-no-8792-s-2000/"
                target={"new"}
              >
                Electronic Commerce Act of 2000
              </a>
              , and other pertinent laws.
            </p>
          </div>
          <div className="privacyContent">
            <h2>Collection of Personal Data</h2>
            <p>
              We collect the following personal data when you inquire or request
              something from us.
              <br />
              <br />
              1. Name: We treat you with dignity and we want to call you by
              name, not by some random numbers. You are important to us.
              <br />
              <br />
              2. Email Address: We will answer you by email, especially if the
              answer requires some attachment.
              <br />
              <br />
              3. Phone (optional): We do not require that you provide us your
              phone number, but if you do, we can answer you by phone.
              <br />
              <br />
              4. The medium from which you found or hear about us: We want to be
              of service to everybody, especially the marginalized sector of our
              society. Knowing where or how you found us enables us to design
              effective outreach strategies.
            </p>
          </div>
          <div className="privacyContent">
            <h2>Data Usage</h2>
            <p>
              We do not share your personal data to anyone else outside WWPH.
              Instead, we use them to process your request according to your
              specific needs within mandated time, format, and manner. We also
              use them to improve our processes to serve you better.
            </p>
          </div>
          <div className="privacyContent">
            <h2>Data Protection</h2>
            <p>
              Only authorized personnel have access to your personal
              information. The technology that is used in the storage of your
              personal data is chosen on the premise that the latest data
              encryption is being employed to secure your personal data.
            </p>
          </div>
          <div className="privacyContent">
            <h2>Feedback</h2>
            <p>
              For suggestions or inquiries as regards this privacy policy, send
              them to us through the Contact Us page.
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
