import React from "react"
import Layout from "../components/layout"
import containerStyles from "./ContactUs.module.css"
import chennai from "../images/chennai.jpg"
import delhi from "../images/delhi.jpg"
import Form from "../components/ContactForm"
const ContactPage = () => {
  return (
    <Layout>
      <div className={containerStyles.container}>
        <div className={containerStyles.banner_content}>
          <h1>Contact Powertec</h1>
        </div>
      </div>
      <section className={containerStyles.section_1}>
        <div style={{ flex: "1 1 100%" }} className={containerStyles.office}>
          <h1 className={containerStyles.back_text}>Offices</h1>
          <h1 style={{ color: "#0e132a", fontWeight: "700", fontSize: "70px" }}>
            Our Offices
          </h1>
          <div style={{ display: "flex",justifyContent: 'space-between' }}>
            <div className={containerStyles.card}>
              <div className={containerStyles.card_header}>Chennai</div>
              <img
                className={containerStyles.office_image}
                src={chennai}
                alt="office"
              />
              <div className={containerStyles.card_content}>
                <h2>Powertec House</h2>
                <p>
                  No. 4, 5<sup>th</sup> Main Road, Vijayanagar
                </p>
                <p>Velachery, Chennai -600042</p>
                <p>Tel: 044-2259-1731/3467/3572</p>
                <p>Fax: 044-2259-1726</p>
                <p>
                  Email:
                  <a href="mailto:powertecchn@powertecindia.com">
                    powertecchn@powertecindia.com
                  </a>
                </p>
              </div>
            </div>
            <div className={containerStyles.card}>
              <div className={containerStyles.card_header}>Delhi</div>
              <img
                className={containerStyles.office_image}
                src={delhi}
                alt="office"
              />
              <div className={containerStyles.card_content}>
                <h2>Powertec House</h2>
                <p>B-6/7, Safdarjung Enclave</p>
                <p>New Delhi-110029</p>
                <p>Tel: 011-26194612/ 41654380</p>
                <p>Fax: 011-41654390</p>
                <p>
                  Email:
                  <a href="mailto:powertecdel@powertecindia.com">
                    powertecdel@powertecindia.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{flex:'1 1 50%',marginTop: '102px'}} className="forms">
            <Form />
        </div> */}
      </section>
    </Layout>
  )
}

export default ContactPage
