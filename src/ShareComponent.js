import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ShareComponent = ({ report }) => {
  const shareUrl = "http://example.com"; // Replace with your report URL or app URL
  const title = "Attendance Report";
  const summary = report; // Use the report content for the email body

  return (
    <div className="share-container">
      <h3>Share the Report</h3>
      <div className="share-buttons">
        <EmailShareButton url={shareUrl} subject={title} body={summary}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ShareComponent;
