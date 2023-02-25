import React from "react";
import Header from "../../Common/Header";
import "../Styles/Content.scss";
import background from "../Images/Wetlands.jpg";
import { TextField } from "@mui/material";

function Content() {
  const headerContent = {
    background: background,
    title: "Contact Us",
    source: "DENR-CAR",
    sourceText: "World Wetlands Day",
    sourceLink:
      "https://car.denr.gov.ph/index.php/news-events/photo-releases/1397-denr-car-kicks-off-world-wetlands-day?tmpl=component&print=1&layout=default",
  };

  return (
    <div>
      <Header props={headerContent} />
      <div className="container">
        <div className="faqs">
          <div className="faqHeaders">
            <h1>Any questions?</h1>
            <h2>Get the info you're looking for right now.</h2>
          </div>
          <div className="faqList">
            <button className="faqButton">FREE SEEDLING</button>
            <div className="qaList">
              <h3>
                Q: How do clients request for Free Seedlings/Planting Materials?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  There are two ways to request free seedling/planting
                  materials.
                  <br />
                  1. For walk-in clients, they need to accomplish and submit a
                  Request Form to the officers-in charge at the PFMS Office,
                  DENR-NCR Techical Services Compound, North Avenue, Diliman,
                  Quezon City. <br />
                  2. For scheduled pick-up of seedlings, they need to send a
                  formal request letter addressed to the Office of the Regional
                  Executive Director (ORED) containing the following
                  information: (a) Name, address, and contact details of the
                  requestee; (b) Type and quantity of seedlings; and, (c)
                  Purpose of request. The request letter may be hand carried or
                  sent to denrncrored@gmail.com
                </p>
              </div>
              <h3>Q: How long does it take for a request to be approved?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  1-2 working days upon receipt of Request Letter/Request Form
                </p>
              </div>

              <h3>Q: Where should clients follow-up their request?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Client may follow-up at CDD-PFMS staff via email:
                  denrncrcddpfms@gmail.com or phone: (8) 529-9706.
                </p>
              </div>
              <h3>
                Q: What type of seedlings/planting materials can clients
                request?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Clients can request seedlings of hardened indigenous tree
                  species, fruit-bearing trees, and ornamental plants.
                </p>
              </div>
            </div>
            <button className="faqButton">
              ENTRY PERMIT AND AUTHORITY TO CONDUCT ACTIVITIES AT THE LAS PIÑAS-
              PARAÑAQUE WETLAND PARK (LPPWP)
            </button>
            <div className="qaList">
              <h3>
                Q: What are the requirements for Entry Permit/Authority to
                Conduct Activities at the LPPWP?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>Request Letter and/or duly accomplished Request Form</p>
              </div>
              <h3>
                Q: How long does it take to process approval of Entry Permit/
                Authority to conduct Activities?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Requests must be filed at least five (5) working days before
                  the scheduled visit and/or conduct of activity. Processing of
                  requests are done during official working hours/days.
                </p>
              </div>
              <h3>
                Q: Will DENR-NCR provide assistance to visitors in the conduct
                of their activities?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Yes. LPPWP staff will guide/assist the clients during their
                  visit and conduct of activities in the area.
                </p>
              </div>
              <h3>Q: Are the services free of charge?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Yes. But visitors are required to strictly follow rules while
                  in LPPWP.
                </p>
              </div>
              <h3>
                Q: Where should clients follow-up on approval of their Entry
                Permit/Authority to conduct Activities?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Clients should call and coordinate with LPPWP Staff through
                  email: denrncrlppchea@gmail.com or phone: (8) 420-7258 for
                  follow ups and assistance.
                </p>
              </div>
            </div>
            <button className="faqButton">
              CERTIFICATE OF WILDLIFE REGISTRATION (CWR)
            </button>
            <div className="qaList">
              <h3>
                Q: What are the requirements for the issuance of a Certificate
                of Wildlife Registration (CWR)?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  The following are the requirements for the issuance of CWR:
                  <br />
                  1. Duly accomplished/filled-up CWR Application Form with
                  attached 2 x 2 ID picture; <br />
                  2. Document/s supporting the legal acquisition of the wildlife
                  (fauna) species: <br />
                  (a) If wildlife species was acquired from wildlife permittees
                  of DENR-NCR (Wildlife Farm Permittees and Certificate of
                  Wildlife Registration holders with updated quarterly breeding
                  report supporting that the wildlife species disposed are
                  progenies of registered wildlife species), the client is
                  required to submit their Sales Invoice/ Official Receipt and
                  Notarized Deed of Sale/ Deed of Donation;
                  <br />
                  (b) If wildlife species acquired from wildlife permittees
                  outside of NCR, the original copy of the Local Transport
                  Permit (LTP) issued by the corresponding DENR-PENR Offices
                  with attached Official Receipt /Sales Invoice or duly
                  notarized Deed of Sale/Deed of Donation must be submitted;{" "}
                  <br />
                  (c) Payment of CWR Fee
                </p>
              </div>
              <h3>Q: How much is the payment for CWR?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  PhP 50.00 for 1-50 heads <br />
                  PhP 500.00 for 51-100 heads <br />
                  PhP 750.00 for 101-200 heads <br />
                  PhP 1000.00 for 200 heads and above.
                </p>
              </div>
              <h3>
                Q: Do clients need to bring the wildlife species to the WRPS for
                inspection?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Inspection of wildlife species being applied for CWR is
                  necessary, hence, if it’s feasible we encourage the client to
                  bring the wildlife to the Office to verify/validate the actual
                  species being applied. If in case client cannot bring the
                  wildlife to the office for inspection (for whatever valid
                  reasons: e.g., number of heads, location, etc.), on-site
                  inspection will be considered.
                </p>
              </div>
              <h3>Q: How long does the processing and issuance of CWR take?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  4 days, 6 hours & 5 minutes (Additional 1 day in case
                  Inspection is done at the facility/residence of the applicant)
                </p>
              </div>
            </div>
            <button className="faqButton">LOCAL TRANSPORT PERMIT (LTP)</button>
            <div className="qaList">
              <h3>
                Q: What are the requirements for the issuance of an Local
                Transport Permit (LTP)?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  The following are the requirements for the issuance of an LTP:
                  <br />
                  (1) Duly accomplished/filled-up LTP Application Form with
                  attached 2 x 2 ID picture; <br />
                  (2) Document/s supporting the legal acquisition of the
                  wildlife (fauna) species (e.g., Sales Invoice or Official
                  Receipt/Notarized Deed of Sale/Donation; <br />
                  (3) Pythosanitary Certificate for plants or Veterinary
                  Quarantine Certificate for animals (Note: Applicant must
                  secure after the issuance of the LTP); and <br />
                  (4) Payment of LTP fee
                </p>
              </div>
              <h3>Q: How much is the payment for LTP?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>Fee for LTP is PhP 100.00</p>
              </div>
              <h3>
                Q: Do clients need to bring the wildlife species to the WRPS for
                inspection?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Inspection of wildlife species being applied for CWR is
                  necessary, hence, if it’s feasible we encourage the client to
                  bring the wildlife to the Office to verify/validate the actual
                  species being applied. <br />
                  <br />
                  If in case client cannot bring the wildlife to the office for
                  inspection (for whatever valid reasons: e.g., number of heads,
                  location, etc.), on-site inspection will be considered.
                </p>
              </div>
              <h3>Q: How long does the processing and issuance of LTP take?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  4 days, 6 hours & 5 minutes (Additional 1 day in case
                  Inspection is done at the facility/residence of the applicant)
                </p>
              </div>
            </div>
            <button className="faqButton">
              TREE CUTTING/PRUNING/BALLING PERMIT
            </button>
            <div className="qaList">
              <h3>
                Q: What are the requirements for the issuance of a Tree Cutting/
                Pruning/Balling Permit?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  The following are the requirements for the issuance of Tree
                  Cutting Permit: <br />
                  (1) Submission of application letter; <br />
                  (2) Endorsement or Certificate of No Objection from concerned
                  Local Government Unit (Barangay/City or Municipal Hall);{" "}
                  <br />
                  (3) If land concerned is privately owned, copy of Original
                  Certificate of Title/Transfer Certificate of Title (1
                  certified copy or 1 photocopy with accompanying owner’s copy);{" "}
                  <br />
                  (4) If requesting party is school/organization, PTA Resolution
                  or Resolution from any organized group stating No Objection
                  and Reason for Cutting (1 original); and <br />
                  (5) Replacement Seedlings as fee
                </p>
              </div>
              <h3>
                Q: Is there a fee for Tree Cutting/Pruning/Balling Permit?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  There is no charge for Tree Cutting/Pruning/Balling Permit but
                  every tree approved for cutting must be replaced with 50
                  seedlings if planted and 100 seedlings if naturally grown.
                </p>
              </div>
              <h3>
                Q: How much is the seedlings? Can clients pay in cash instead of
                replacement seedlings?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  DENR has no idea on the prices of seedlings. Paying cash in
                  lieu of the seedlings is not allowed.
                </p>
              </div>
              <h3>
                Q: How long does the processing and issuance of Tree Cutting/
                Pruning/Balling Permit?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  10 days 5 hours and 30 minutes (Note: Application must be
                  filed and duly received by the FUS. Applications with
                  incomplete requirements will not be accepted).
                </p>
              </div>
            </div>
            <button className="faqButton">
              COMPLIANCE MONITORING OF TREE CUTTING/EARTH-BALLING AND PRUNING
              PERMITS (FOR SEVERAL TREES INVOLVING INFRASTRUCTURE/ GOVERNMENT
              PROJECTS)
            </button>
            <div className="qaList">
              <h3>
                Q: What is the client’s next step after approval of Tree
                Cutting/ Pruning/Earth-Balling Permit?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Client must coordinate with the Conservation and Development
                  Division (CDD) for the seedling replacement, and the
                  Enforcement Division (ED) for the schedule of technical
                  conference on the terms and conditions stipulated in the
                  permit.
                </p>
              </div>
              <h3>
                Q: Does DENR-NCR provide cutting/pruning/earthballing services?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  No. DENR-NCR only monitors the conduct of the activity, in
                  accordance with the approved terms and conditions in the
                  issued permit. Client has to hire a private service
                  provider/contractor.
                </p>
              </div>
              <h3>Q: Does DENR-NCR sell seedlings for replacement?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  No. The office only accepts the seedling replacement and
                  disposes/ distributes/gives them to government and private
                  entities and individuals for various conservation projects.
                </p>
              </div>
              <h3>
                Q: What if I miss/violate any of the terms and conditions
                stipulated in my permit?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Violation of any conditions in the permit shall be sufficient
                  ground for its cancellation/revocation without prejudice to
                  the imposition of penalties in accordance with applicable law,
                  rules and regulations.
                </p>
              </div>
              <h3>Q: What will happen to the cut logs?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  If the property involved in the permit is private, the cut
                  logs will be given to the owner. Otherwise, the cut logs will
                  be turned over to the DENR-NCR for proper disposition.
                </p>
              </div>
            </div>
            <button className="faqButton">
              INVESTIGATION OF COMPLAINTS FOR VIOLATION OF PD NO. 705, AS
              AMENDED, PD NO. 953, RA NO. 9147, RA NO. 9175 AND OTHER ENR LAWS
            </button>
            <div className="qaList">
              <h3>
                Q: Where can clients report suspected illegal activities
                concerning wildlife and/or tree cutting?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  To the Enforcement Division at telephone number 8420-6744, or
                  to enforcementdivision20@gmail.com, or to the Field Offices of
                  the DENR-NCR. The Office is mandated to protect and conserve
                  the environment and natural resources.
                </p>
              </div>
              <h3>Q: How can a client report or file a complaint?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Clients and other concerned citizens may file a written
                  complaint, or through telephone at 8 420-6744 or on the
                  DENR-NCR Facebook account.
                </p>
              </div>
              <h3>Q: What happens after clients file a report/complaint?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  The Records Clerk puts information on blotter and refers to
                  the Chief, Enforcement Division. The Chief then evaluates and
                  refers the matter to the Surveillance and Intelligence
                  Section, for appropriate action.
                </p>
              </div>
              <h3>Q: Will the identity of the complainant be revealed?</h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  As a general rule, yes, unless the client will request
                  anonymity.
                </p>
              </div>
              <h3>
                Q: How do the client check the status of his/her complaint?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Client will be notified in writing on the status of his/her
                  complaint. Clients may also contact the office for the status
                  of his/her complaint.
                </p>
              </div>
            </div>
            <button className="faqButton">
              RETRIEVAL AND RESCUE OF WILDLIFE
            </button>
            <div className="qaList">
              <h3>
                Q: What can a concerned citizen do if he/she finds an ill,
                injured or abandoned wildlife?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Consider safety first. Never attempt to handle wildlife unless
                  you are certain that you can do so, without any harm to
                  yourself or to the wildlife. You can immediately call the
                  office for retrieval, rescue and advice
                </p>
              </div>
            </div>
            <button className="faqButton">
              COMPLIANCE MONITORING FOR THE RENEWAL OF WILDLIFE FARM PERMIT
              (WFP)
            </button>
            <div className="qaList">
              <h3>
                Q: What are the requirements needed and fees to be paid, if
                there is any?
              </h3>
              <div className="answer">
                <h3>A:</h3>
                <p>
                  Requirements: <br />
                  (1) Memorandum of the Chief, Licenses Patents and Deeds
                  Division with attached application for renewal; <br />
                  (2) Quarterly Breeding Report; and, <br />
                  (3) Proof of Legal Source (Official Receipt/Sales Invoice/Deed
                  of Sale/ Donation/Exchange, Local Transport Permit (LTP)) if
                  applicable No fees required.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="contact">
          <div className="branches">
            <h1>Information</h1>
            <div className="DENR">
              <h2 className="collapsible">
                <span className="material-icons"> expand_more </span> DENR
                <span className="grey">• Diliman, Quezon City</span>
              </h2>
              <div className="branchDetails">
                <p>
                  <span className="material-icons"> place </span> DENR Bldg.
                  Visayas Avenue, Diliman, Quezon City Metro Manila 1100
                  Philippines
                </p>
                <p>
                  <span className="material-icons"> phone </span> (02) 89200689
                </p>
                <p>
                  <span className="material-icons">smartphone</span>{" "}
                  0917-868-3367 | 0917-885-3367
                </p>
                <p>
                  <span className="material-icons"> email </span>
                  aksyonkalikasan@denr.gov.ph
                </p>
              </div>
            </div>
            <div className="BMB">
              <h2 className="collapsible">
                <span className="material-icons"> expand_more </span> BMB
                <span className="grey">• Diliman, Quezon City</span>
              </h2>
              <div className="branchDetails">
                <p>
                  <span className="material-icons"> place </span> Ninoy Aquino
                  Parks and Wildlife Center, 1100 Diliman Quezon City,
                  Philippines
                </p>
                <p>
                  <span className="material-icons"> phone </span> (02)
                  89246031-35
                </p>
                <p>
                  <span className="material-icons"> email </span> bmb@bmb.gov.ph
                </p>
              </div>
            </div>
            <br />
            <br />
            <h1>Site links</h1>
            <div className="Offices">
              <h2 className="collapsible">
                <span className="material-icons"> expand_more </span> DENR
                Offices
              </h2>
              <div className="branchDetails">
                <p>
                  <a href="http://www.denr.gov.ph/">
                    Department of Environment and Natural Resources
                  </a>
                </p>
                <p>
                  <a href="http://erdb.denr.gov.ph/">
                    Ecosytems Research and Development Bureau
                  </a>
                </p>
                <p>
                  <a href="http://www.emb.gov.ph/">
                    Environmental Management Bureau
                  </a>
                </p>
                <p>
                  <a href="http://forestry.denr.gov.ph/">
                    Forestry Management Bureau
                  </a>
                </p>
                <p>
                  <a href="http://lmb.gov.ph/">Land Management Bureau</a>
                </p>
                <p>
                  <a href="http://www.mgb.gov.ph/">
                    Mines and Geosciences Bureau
                  </a>
                </p>
              </div>
            </div>
            <div className="Agencies">
              <h2 className="collapsible">
                <span className="material-icons"> expand_more </span> Attached
                Agencies
              </h2>
              <div className="branchDetails">
                <p>
                  <a href="http://namria.gov.ph/">
                    National Mapping and Resource Information Authority
                  </a>
                </p>
                <p>
                  <a href="http://llda.gov.ph/">
                    Laguna Lake Development Authority
                  </a>
                </p>
                <p>
                  <a href="https://pcsd.gov.ph/">
                    Palawan Council for Sustainable Development
                  </a>
                </p>
                <p>
                  <a href="http://nrdc.denr.gov.ph/">
                    Natural Resources Development Corporation
                  </a>
                </p>
                <p>
                  <a href="http://www.nwrb.gov.ph/">
                    National Water Resources Board
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="formInside">
              <h1>Get in touch.</h1>
              <form action="">
                <TextField id="fname" label="First Name" />
                <TextField id="lname" label="Last Name" />
                <TextField id="email" label="Email" />
                <TextField id="phone" label="Phone Number" />
                <div className="submitBtn">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    console.log(this);
    var content = this.nextElementSibling;
    if (content.style.display === "table") {
      content.style.display = "none";
    } else {
      content.style.display = "table";
    }
  });
}

var faqs = document.getElementsByClassName("faqButton");

for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

export default Content;
