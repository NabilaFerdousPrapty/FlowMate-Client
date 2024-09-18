import PropTypes from "prop-types";
import { footerLinks } from "../../constants";
import { Link } from "react-router-dom";
import Container from "../../components/Container";

const FooterColumn = ({ title, links }) => (
  <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links?.map((link, index) => (
        <Link to="/" key={index}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Footer = () => (
  <Container>
    <section className="flex items-center justify-start flex-col paddings w-full gap-20 bg-light-white">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <img
            src="/logo/flowmate_logo.jpeg"
            alt="logo"
            className="w-28 h-28"
          />

          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            FlowMate is an all-in-one project management tool for creatives and
            developers to manage their projects from start to finish.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>

          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>

          <FooterColumn
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>

      <div className="flex justify-between items-center max-sm:flex-col w-full text-sm font-normal ">
        <p className="py-4">@ 2023 FlowMate. All rights reserved</p>
      </div>
    </section>
  </Container>
);

export default Footer;
