import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
        <div>
          <form className="form-container" name="contact" method="POST" data-netlify="true">           
          <input type="hidden" name="form-name" value="contact" />

            <div>
              <label htmlFor="Name">Name</label>
              <input type="text" name="name" id="w3lName"/>
            </div>
            <div>
              <label htmlFor="Sender">Email</label>
              <input type="email" name="email" id="w3lSender"/>
            </div>
            <div>
              <label htmlFor="Subject">Subject</label>
              <input type="text" name="subject" id="w3lSubject"/>
            </div>
            <div>
              <label htmlFor="Message">Message</label>
              <textarea name="message" id="w3lMessage"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
