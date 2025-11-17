import React from "react";

import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.webp";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.webp";
import s9 from "../assets/s9.webp";
import GetStartedProject from "../Components/GetStartedProject";

const ServicesPage = () => {
  return (
    <section className="section service-page">
      <h2 className="section-title">Our Services</h2>
      <p className="secondary-text">
        Delivering domain expertise and technology-driven offerings to help you
        turn digital challenges into opportunities.
      </p>

      <h1 className="centerAlign card-title">Software Development</h1>
      <p className="secondary-text">
        We craft reliable and scalable software tailored to your business needs
      </p>
      <div className="service-page-card">
        <img src={s1} />
        <p>
          We apply the software development process that builds solutions
          empowering your business. As your software development and digital
          transformation partner, we are with you every step of the way - from
          initial planning to delivery and beyond. Our innovative in-house rapid
          development process helps us to quickly create for your business a
          highly intuitive software solution. We adopt agile software
          development methodology to ensure that our clients receive a flexible
          and reliable approach to planning, prototyping, developing,
          maintaining and reporting.
        </p>
      </div>
      <h1 className="centerAlign card-title">Web Development</h1>
      <p className="secondary-text">
        We design and build dynamic, user-friendly websites that deliver
        seamless experiences.
      </p>
      <div className="service-page-card">
        <img src={s2} />
        <p>
          Successful products and services do not happen by chance. We ensure
          that the systems we design are business-oriented, human-centred and
          value-driven. Whether your customers are companies (B2B) or
          individuals (B2C), it is people, their emotions and needs that stand
          behind every decision, contract or purchase. We care not only about
          code quality but also about customer experience (CX), user experience
          (UX) and user interface (UI) to deliver solutions that stand the test
          of time and grow with your business.
        </p>
      </div>
      <h1 className="centerAlign card-title">App Development</h1>
      <p className="secondary-text">
        We create high-performing mobile apps with stunning UI and smooth UX.
      </p>
      <div className="service-page-card">
        <img src={s3} />
        <p>
          In a world where mobile is the No.1 way to browse the Internet, it’s
          vital that your business has a web presence that is 'mobile-friendly'
          at the very least and, ideally, either a mobile optimised web
          application or a dedicated mobile app. Our mobile app development
          experts will turn your ideas into easy-to-use, stylish solutions that
          increase your mobile visibility on any platform.
        </p>
      </div>
      <h1 className="centerAlign card-title">Data Analytics</h1>
      <p className="secondary-text">
        We turn complex data into actionable insights that drive smarter
        decisions.
      </p>
      <div className="service-page-card">
        <img src={s4} />
        <p>
          At Prodesk, we offer comprehensive Data Analytics and Business
          Intelligence (BI) services designed to help businesses unlock the full
          potential of their data. Our services encompass a wide range of
          capabilities, including data collection, analysis, reporting, and
          visualization, enabling businesses to gain valuable insights that
          drive informed decision-making and business growth.
        </p>
      </div>
      <h1 className="centerAlign card-title">It Consulting</h1>
      <p className="secondary-text">
        We provide expert IT consulting to help you optimize technology and
        operations.
      </p>
      <div className="service-page-card">
        <img src={s5} />
        <p>
          Our IT consulting services help businesses assess their current IT
          infrastructure, identify areas for improvement, and develop a roadmap
          for IT modernization and transformation. Whether it's optimizing
          existing systems, implementing new technologies, or migrating to the
          cloud, we provide expert guidance and support to help businesses make
          informed decisions that drive business value.
        </p>
      </div>
      <h1 className="centerAlign card-title">Cyber Security</h1>
      <p className="secondary-text">
        We safeguard your digital assets with advanced security solutions.
      </p>
      <div className="service-page-card">
        <img src={s6} />
        <p>
          At Prodesk, we offer comprehensive cybersecurity services designed to
          help businesses protect their data, systems, and infrastructure from
          cyber threats. Our services are tailored to meet the unique needs of
          each client, ensuring that they have the right cybersecurity solutions
          in place to mitigate risks and safeguard their business operations.
        </p>
      </div>
      <h1 className="centerAlign card-title">Cloud Services</h1>
      <p className="secondary-text">
        We enable seamless cloud migration and management for scalability and
        efficiency.
      </p>
      <div className="service-page-card">
        <img src={s7} />
        <p>
          At Prodesk, we offer a comprehensive range of cloud services designed
          to help businesses harness the power of the cloud for improved
          scalability, flexibility, and cost-efficiency. Our cloud services are
          tailored to meet the unique needs of each client, ensuring that they
          have the right cloud solutions in place to support their business
          goals.
        </p>
      </div>
      <h1 className="centerAlign card-title">Logo Design</h1>
      <p className="secondary-text">
        We design creative, memorable logos that capture your brand’s essence.
      </p>
      <div className="service-page-card">
        <img src={s8} />
        <p>
          At Prodesk, we offer professional logo design services that help
          businesses establish a strong brand identity and make a lasting
          impression on their customers. Our team of experienced designers works
          closely with clients to create custom logos that reflect their brand
          values and resonate with their target audience.
        </p>
      </div>
      <h1 className="centerAlign card-title">Digital Marketing</h1>
      <p className="secondary-text">
        We boost your online presence through smart digital strategies.
      </p>
      <div className="service-page-card">
        <img src={s9} />
        <p>
          Social Media Optimization services: comprise the service set that
          enhances site visibility, usability and likability by integration with
          social tools and application.
        </p>
      </div>
      <GetStartedProject />
    </section>
  );
};

export default ServicesPage;
