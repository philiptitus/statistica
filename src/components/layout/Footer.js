

import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2024, 
            <a href="https://mrphilip.pythonanywhere.com/" className="font-weight-bold" target="_blank">
              Philip Titus
            </a>
          </div>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <div className="footer-menu">

          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
