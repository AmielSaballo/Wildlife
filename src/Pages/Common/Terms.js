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
  overflowY: "scroll",
  height: "80vh",
};

export default function Terms() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <p className="terms" onClick={handleOpen}>
        TERMS AND CONDITIONS
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Terms and Conditions</h1>
          <div className="termsCondition">
            <h2>Acceptance of Terms and Conditions</h2>
            <p>
              This website is maintained and managed by Wildlife Watchers PH
              (WWPH) of the{" "}
              <a href="https://denr.gov.ph/" target={"new"}>
                Department of Environment and Natural Resources (DENR)
              </a>
               and{" "}
              <a href="https://www.bmb.gov.ph/" target={"new"}>
                Biodiversity Management Bureau (BMB)
              </a>
              . By accessing and using the content in this website, you agree
              with the Terms and Conditions set forth in this website. The
              content found in this website as well as its Terms and Conditions
              may change without prior notice.
            </p>
          </div>
          <div className="termsCondition">
            <h2>Governing Law</h2>
            <p>
              This Terms of Use shall be governed in accordance with the laws of
              the Republic of the Philippines.
            </p>
          </div>
          <div className="termsCondition">
            <h2>Proprietary Rights</h2>
            <p>
              All information, data and online services available in this
              website are governed by copyright, trademark and other forms of
              proprietary rights in compliance with the provisions set in
              Republic Act 8293 or the Intellectual Property Code of the
              Philippines.
              <br />
              <br />
              This website is controlled and managed by Wildlife Watchers PH
              (WWPH) of the Department of Environment and Natural Resources
              (DENR) and Biodiversity Management Bureau (BMB). However, titles
              and interests in its contents are governed by Partner Agencies'
              own rights.
            </p>
          </div>
          <div className="termsCondition">
            <h2>Use, reuse and redistribution of data or information</h2>
            <p>
              1. Data. Must follow the rules and attribution format “Data taken
              from this website are governed by its Terms and Conditions. WWPH
              is not liable for any damage caused directly or indirectly by the
              use of its data.”
              <br />
              <br />
              2. Information. Must follow the prescribed attribution format
              “Information taken from this website is governed by the Terms and
              Conditions of WWPH. WWPH is not liable for any damage caused
              directly or indirectly by the use of its information.”
              <br />
              <br />
              Contents of this website must not be used for inappropriate or
              malicious purposes or initiatives. Moreover, any content of the
              website shall not be modified.
            </p>
          </div>
          <div className="termsCondition">
            <h2>Disclosures and Other Considerations</h2>
            <p>
              The use of this website is provided free by the Philippine
              Government. However, the website does not guarantee that all
              contents will be completely suitable to the user's’ intended
              purpose.
              <br />
              <br />
              It does not also guarantee that all contents or any functions
              associated therewith will be error-free.
            </p>
          </div>
          <div className="termsCondition">
            <h2>Links within this website</h2>
            <p>
              Some data stored in this website may redirect you to another
              website.
              <br />
              <br />
              The website contains hyperlinks to other government,
              non-government, and international organizations' websites that are
              not maintained by WWPH. Thus, WWPH is not responsible for the
              inaccessibility of other websites and shall not be held liable for
              any damages or loss from access to those websites. Use of the
              hyperlinks and access to the websites are entirely at your own
              risk.
              <br />
              <br />
              Contents, service marks, logos and other information available in
              linked websites have their own Terms of Use.
            </p>
          </div>
          <div className="termsCondition">
            <h2>Linking this website</h2>
            <p>
              Hyperlinking to this website automatically means the acceptance of
              its Terms and Conditions.
              <br />
              <br />
              WWPH reserves the right to disable links, or frames of any site
              containing inappropriate, profane, defamatory, indecent or
              unlawful topics, names, materials or information that violates the
              Philippine Laws on intellectual property, proprietary, privacy or
              publicity rights.
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
